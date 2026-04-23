'use client';
import { useState, useCallback, useEffect, useRef } from 'react';
import { db, auth } from '../../../lib/firebase';
import {
  doc,
  collection,
  addDoc,
  updateDoc,
  onSnapshot,
  query,
  where,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';

const LESSON_ID = 'aula-4';
const TOTAL_SECTIONS = 8; // 0-7

export function useAula4Sync(role = 'viewer') {
  const [sessionStatus, setSessionStatus] = useState('waiting');
  const [currentSection, setCurrentSection] = useState(0);
  const [startedAt, setStartedAt] = useState(null);
  const [presenterConnected, setPresenterConnected] = useState(false);

  const [participants, setParticipants] = useState([]);
  const [reactions, setReactions] = useState([]);
  const [notes, setNotes] = useState([]);

  const [activeCard, setActiveCard] = useState(null);
  const [cardResponses, setCardResponses] = useState([]);

  const [connected, setConnected] = useState(false);
  const [userId, setUserId] = useState(null);

  const unsubscribersRef = useRef([]);

  useEffect(() => {
    if (!auth) return;
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        setConnected(true);
      }
    });

    signInAnonymously(auth).catch(console.error);

    return () => unsubAuth();
  }, []);

  useEffect(() => {
    if (!userId || !db) return;

    const unsubs = [];

    const sessionRef = doc(db, 'sessions', LESSON_ID);
    unsubs.push(
      onSnapshot(sessionRef, (snap) => {
        if (snap.exists()) {
          const data = snap.data();
          setSessionStatus(data.status || 'waiting');
          setCurrentSection(data.currentSection ?? 0);
          setStartedAt(data.startedAt?.toDate?.() || null);
          setPresenterConnected(data.presenterConnected || false);
        }
      })
    );

    const participantsQuery = query(
      collection(db, 'participants'),
      where('lesson', '==', LESSON_ID)
    );
    unsubs.push(
      onSnapshot(participantsQuery, (snap) => {
        const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setParticipants(list);
      })
    );

    const reactionsQuery = query(
      collection(db, 'reactions'),
      where('lesson', '==', LESSON_ID)
    );
    unsubs.push(
      onSnapshot(reactionsQuery, (snap) => {
        const list = snap.docs
          .map((d) => ({ id: d.id, ...d.data() }))
          .sort((a, b) => (a.timestamp?.seconds || 0) - (b.timestamp?.seconds || 0));
        setReactions(list.slice(-50));
      })
    );

    const cardRef = doc(db, 'cards', LESSON_ID);
    unsubs.push(
      onSnapshot(cardRef, (snap) => {
        if (snap.exists()) {
          setActiveCard(snap.data().active || null);
        } else {
          setActiveCard(null);
        }
      })
    );

    if (role === 'presenter') {
      const notesQuery = query(
        collection(db, 'notes'),
        where('lesson', '==', LESSON_ID)
      );
      unsubs.push(
        onSnapshot(notesQuery, (snap) => {
          const list = snap.docs
            .map((d) => ({ id: d.id, ...d.data() }))
            .sort((a, b) => (a.timestamp?.seconds || 0) - (b.timestamp?.seconds || 0));
          setNotes(list);
        })
      );

      const responsesQuery = query(
        collection(db, 'cardResponses'),
        where('lesson', '==', LESSON_ID)
      );
      unsubs.push(
        onSnapshot(responsesQuery, (snap) => {
          const list = snap.docs
            .map((d) => ({ id: d.id, ...d.data() }))
            .sort((a, b) => (a.timestamp?.seconds || 0) - (b.timestamp?.seconds || 0));
          setCardResponses(list);
        })
      );

      updateDoc(doc(db, 'sessions', LESSON_ID), {
        presenterConnected: true,
      }).catch(() => {
        setDoc(doc(db, 'sessions', LESSON_ID), {
          status: 'waiting',
          currentSection: 0,
          presenterConnected: true,
        });
      });
    }

    unsubscribersRef.current = unsubs;

    return () => {
      unsubs.forEach((unsub) => unsub());
    };
  }, [userId, role]);

  const goToSection = useCallback(
    (n) => {
      if (role !== 'presenter') return;
      const clamped = Math.max(0, Math.min(n, TOTAL_SECTIONS - 1));
      updateDoc(doc(db, 'sessions', LESSON_ID), { currentSection: clamped });
    },
    [role]
  );

  const nextSection = useCallback(() => {
    goToSection(currentSection + 1);
  }, [goToSection, currentSection]);

  const prevSection = useCallback(() => {
    goToSection(currentSection - 1);
  }, [goToSection, currentSection]);

  const startSession = useCallback(() => {
    if (role !== 'presenter') return;
    updateDoc(doc(db, 'sessions', LESSON_ID), {
      status: 'active',
      startedAt: serverTimestamp(),
      currentSection: 1,
    });
  }, [role]);

  const endSession = useCallback(() => {
    if (role !== 'presenter') return;
    updateDoc(doc(db, 'sessions', LESSON_ID), { status: 'ended' });
  }, [role]);

  const resetSession = useCallback(() => {
    if (role !== 'presenter') return;
    setDoc(doc(db, 'sessions', LESSON_ID), {
      status: 'waiting',
      currentSection: 0,
      presenterConnected: true,
    });
  }, [role]);

  const addNote = useCallback(
    ({ text, category }) => {
      if (role !== 'presenter' || !text.trim()) return;
      addDoc(collection(db, 'notes'), {
        lesson: LESSON_ID,
        text: text.trim(),
        category,
        section: currentSection,
        timestamp: serverTimestamp(),
      });
    },
    [role, currentSection]
  );

  const sendCard = useCallback(
    ({ type, content, label, scaleLabels }) => {
      if (role !== 'presenter') return;
      const cardDoc = doc(db, 'cards', LESSON_ID);
      setDoc(cardDoc, {
        active: {
          type,
          content,
          label: label || '',
          scaleLabels: scaleLabels || null,
          sentAt: serverTimestamp(),
        },
      });
    },
    [role]
  );

  const dismissCard = useCallback(() => {
    if (role !== 'presenter') return;
    updateDoc(doc(db, 'cards', LESSON_ID), { active: null });
  }, [role]);

  const join = useCallback(
    (name) => {
      if (!userId || !name.trim()) return;
      addDoc(collection(db, 'participants'), {
        lesson: LESSON_ID,
        name: name.trim(),
        uid: userId,
        connectedAt: serverTimestamp(),
        isConnected: true,
      });
    },
    [userId]
  );

  const react = useCallback(
    (emoji) => {
      if (!userId) return;
      const participant = participants.find((p) => p.uid === userId);
      addDoc(collection(db, 'reactions'), {
        lesson: LESSON_ID,
        type: 'emoji',
        content: emoji,
        from: participant?.name || 'Participante',
        section: currentSection,
        timestamp: serverTimestamp(),
      });
    },
    [userId, participants, currentSection]
  );

  const respondToCard = useCallback(
    ({ response }) => {
      if (!userId) return;
      const participant = participants.find((p) => p.uid === userId);
      addDoc(collection(db, 'cardResponses'), {
        lesson: LESSON_ID,
        cardType: activeCard?.type || 'unknown',
        cardContent: activeCard?.content || '',
        response,
        from: participant?.name || 'Participante',
        timestamp: serverTimestamp(),
      });
    },
    [userId, participants, activeCard]
  );

  if (role === 'presenter') {
    return {
      currentSection,
      sessionStatus,
      startedAt,
      presenterConnected,
      participants,
      reactions,
      notes,
      activeCard,
      cardResponses,
      connected,
      totalSections: TOTAL_SECTIONS,
      goToSection,
      nextSection,
      prevSection,
      startSession,
      endSession,
      resetSession,
      addNote,
      sendCard,
      dismissCard,
    };
  }

  if (role === 'participant') {
    return {
      currentSection,
      sessionStatus,
      activeCard,
      connected,
      participants,
      userId,
      join,
      react,
      respondToCard,
    };
  }

  return {
    currentSection,
    sessionStatus,
    startedAt,
    presenterConnected,
    participants,
    reactions,
    connected,
  };
}
