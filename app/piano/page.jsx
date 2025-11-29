'use client';

import React, { useEffect, useState, useCallback, useRef } from "react";
import Script from "next/script";
import MatrixRain from '@/components/ui/MatrixRain';
import { Spotlight } from '@/components/ui/Spotlight';
import HackerText from '@/components/ui/HackerText';

const notes = [
  { note: "C", frequency: 261.63 },
  { note: "C#", frequency: 277.18 },
  { note: "D", frequency: 293.66 },
  { note: "D#", frequency: 311.13 },
  { note: "E", frequency: 329.63 },
  { note: "F", frequency: 349.23 },
  { note: "F#", frequency: 369.99 },
  { note: "G", frequency: 392.00 },
  { note: "G#", frequency: 415.30 },
  { note: "A", frequency: 440.00 },
  { note: "A#", frequency: 466.16 },
  { note: "B", frequency: 493.88 }
];

const sampleSongs = [
  { 
    name: "Twinkle Twinkle Little Star", 
    notes: [
      { note: "C", duration: 500 }, { note: "C", duration: 500 }, { note: "G", duration: 500 }, { note: "G", duration: 500 }, 
      { note: "A", duration: 500 }, { note: "A", duration: 500 }, { note: "G", duration: 1000 },
      { note: "F", duration: 500 }, { note: "F", duration: 500 }, { note: "E", duration: 500 }, { note: "E", duration: 500 }, 
      { note: "D", duration: 500 }, { note: "D", duration: 500 }, { note: "C", duration: 1000 }
    ] 
  },
  { 
    name: "Happy Birthday", 
    notes: [
      { note: "C", duration: 250 }, { note: "C", duration: 250 }, { note: "D", duration: 500 }, { note: "C", duration: 500 }, { note: "F", duration: 500 }, { note: "E", duration: 1000 },
      { note: "C", duration: 250 }, { note: "C", duration: 250 }, { note: "D", duration: 500 }, { note: "C", duration: 500 }, { note: "G", duration: 500 }, { note: "F", duration: 1000 }
    ] 
  },
  { 
    name: "Ode to Joy", 
    notes: [
      { note: "E", duration: 500 }, { note: "E", duration: 500 }, { note: "F", duration: 500 }, { note: "G", duration: 500 }, 
      { note: "G", duration: 500 }, { note: "F", duration: 500 }, { note: "E", duration: 500 }, { note: "D", duration: 500 }, 
      { note: "C", duration: 500 }, { note: "C", duration: 500 }, { note: "D", duration: 500 }, { note: "E", duration: 500 }, 
      { note: "E", duration: 750 }, { note: "D", duration: 250 }, { note: "D", duration: 1000 }
    ] 
  },
  { 
    name: "Mary Had a Little Lamb", 
    notes: [
      { note: "E", duration: 500 }, { note: "D", duration: 500 }, { note: "C", duration: 500 }, { note: "D", duration: 500 }, 
      { note: "E", duration: 500 }, { note: "E", duration: 500 }, { note: "E", duration: 1000 },
      { note: "D", duration: 500 }, { note: "D", duration: 500 }, { note: "D", duration: 1000 },
      { note: "E", duration: 500 }, { note: "G", duration: 500 }, { note: "G", duration: 1000 },
      { note: "E", duration: 500 }, { note: "D", duration: 500 }, { note: "D", duration: 500 }, { note: "E", duration: 500 }, 
      { note: "D", duration: 500 }, { note: "C", duration: 1000 }
    ] 
  },
  { 
    name: "Jingle Bells", 
    notes: [
      { note: "E", duration: 300 }, { note: "E", duration: 300 }, { note: "E", duration: 600 }, 
      { note: "E", duration: 300 }, { note: "E", duration: 300 }, { note: "E", duration: 600 },
      { note: "E", duration: 300 }, { note: "G", duration: 300 }, { note: "C", duration: 300 }, { note: "D", duration: 300 }, { note: "E", duration: 900 },
      { note: "F", duration: 300 }, { note: "F", duration: 300 }, { note: "F", duration: 300 }, { note: "F", duration: 150 }, { note: "F", duration: 150 }, { note: "E", duration: 300 }, { note: "E", duration: 300 }, { note: "E", duration: 150 }, { note: "E", duration: 150 },
      { note: "E", duration: 300 }, { note: "D", duration: 300 }, { note: "D", duration: 300 }, { note: "E", duration: 300 }, { note: "D", duration: 600 }, { note: "G", duration: 900 }
    ] 
  },
  { 
    name: "Row Row Row Your Boat", 
    notes: [
      { note: "C", duration: 300 }, { note: "C", duration: 300 }, { note: "C", duration: 300 },
      { note: "D", duration: 300 }, { note: "E", duration: 300 }, { note: "E", duration: 600 },
      { note: "D", duration: 300 }, { note: "E", duration: 300 }, { note: "F", duration: 300 }, { note: "G", duration: 900 },
      { note: "C", duration: 300 }, { note: "C", duration: 300 }, { note: "C", duration: 300 }, { note: "G", duration: 300 }, { note: "G", duration: 300 }, { note: "G", duration: 600 },
      { note: "E", duration: 300 }, { note: "E", duration: 300 }, { note: "E", duration: 300 }, { note: "C", duration: 300 }, { note: "C", duration: 300 }, { note: "C", duration: 900 }
    ] 
  },
  { 
    name: "Frère Jacques", 
    notes: [
      { note: "C", duration: 300 }, { note: "D", duration: 300 }, { note: "E", duration: 300 }, { note: "C", duration: 600 },
      { note: "C", duration: 300 }, { note: "D", duration: 300 }, { note: "E", duration: 300 }, { note: "C", duration: 600 },
      { note: "E", duration: 300 }, { note: "F", duration: 300 }, { note: "G", duration: 600 },
      { note: "E", duration: 300 }, { note: "F", duration: 300 }, { note: "G", duration: 900 }
    ] 
  },
  { 
    name: "London Bridge", 
    notes: [
      { note: "G", duration: 300 }, { note: "A", duration: 300 }, { note: "G", duration: 300 }, { note: "F", duration: 300 }, { note: "E", duration: 300 }, { note: "F", duration: 300 }, { note: "G", duration: 600 },
      { note: "D", duration: 300 }, { note: "E", duration: 300 }, { note: "F", duration: 300 }, { note: "E", duration: 300 }, { note: "F", duration: 300 }, { note: "G", duration: 600 }
    ] 
  },
  { 
    name: "Old MacDonald", 
    notes: [
      { note: "G", duration: 300 }, { note: "G", duration: 300 }, { note: "G", duration: 300 }, { note: "D", duration: 300 }, 
      { note: "E", duration: 300 }, { note: "E", duration: 300 }, { note: "D", duration: 600 },
      { note: "B", duration: 300 }, { note: "B", duration: 300 }, { note: "A", duration: 300 }, { note: "A", duration: 300 }, 
      { note: "G", duration: 600 }
    ] 
  },
  { 
    name: "Yankee Doodle", 
    notes: [
      { note: "C", duration: 300 }, { note: "C", duration: 300 }, { note: "D", duration: 300 }, { note: "E", duration: 300 }, 
      { note: "C", duration: 300 }, { note: "E", duration: 300 }, { note: "D", duration: 600 },
      { note: "G", duration: 300 }, { note: "C", duration: 300 }, { note: "C", duration: 300 }, { note: "D", duration: 300 }, 
      { note: "E", duration: 300 }, { note: "C", duration: 300 }, { note: "B", duration: 300 }, { note: "C", duration: 600 }
    ] 
  },
  { 
    name: "Itsy Bitsy Spider", 
    notes: [
      { note: "G", duration: 300 }, { note: "C", duration: 300 }, { note: "C", duration: 300 }, { note: "C", duration: 300 }, 
      { note: "D", duration: 300 }, { note: "E", duration: 300 }, { note: "E", duration: 300 }, { note: "E", duration: 600 },
      { note: "D", duration: 300 }, { note: "C", duration: 300 }, { note: "D", duration: 300 }, { note: "E", duration: 300 }, 
      { note: "C", duration: 600 }
    ] 
  },
  { 
    name: "Baa Baa Black Sheep", 
    notes: [
      { note: "G", duration: 300 }, { note: "G", duration: 300 }, { note: "D", duration: 300 }, { note: "D", duration: 300 }, 
      { note: "E", duration: 300 }, { note: "E", duration: 300 }, { note: "D", duration: 600 },
      { note: "C", duration: 300 }, { note: "C", duration: 300 }, { note: "B", duration: 300 }, { note: "B", duration: 300 }, 
      { note: "A", duration: 300 }, { note: "A", duration: 300 }, { note: "G", duration: 600 }
    ] 
  },
  { 
    name: "Hot Cross Buns", 
    notes: [
      { note: "B", duration: 300 }, { note: "A", duration: 300 }, { note: "G", duration: 600 },
      { note: "B", duration: 300 }, { note: "A", duration: 300 }, { note: "G", duration: 600 },
      { note: "G", duration: 150 }, { note: "G", duration: 150 }, { note: "G", duration: 150 }, { note: "G", duration: 150 }, 
      { note: "A", duration: 150 }, { note: "A", duration: 150 }, { note: "A", duration: 150 }, { note: "A", duration: 150 }, 
      { note: "B", duration: 300 }, { note: "A", duration: 300 }, { note: "G", duration: 600 }
    ] 
  },
  { 
    name: "Three Blind Mice", 
    notes: [
      { note: "E", duration: 300 }, { note: "D", duration: 300 }, { note: "C", duration: 600 },
      { note: "E", duration: 300 }, { note: "D", duration: 300 }, { note: "C", duration: 600 },
      { note: "G", duration: 300 }, { note: "G", duration: 300 }, { note: "F", duration: 300 }, { note: "F", duration: 300 }, 
      { note: "E", duration: 300 }, { note: "E", duration: 600 }
    ] 
  },
  { 
    name: "Hickory Dickory Dock", 
    notes: [
      { note: "C", duration: 300 }, { note: "D", duration: 300 }, { note: "E", duration: 600 },
      { note: "C", duration: 300 }, { note: "D", duration: 300 }, { note: "E", duration: 600 },
      { note: "G", duration: 300 }, { note: "E", duration: 300 }, { note: "C", duration: 600 },
      { note: "D", duration: 300 }, { note: "E", duration: 300 }, { note: "C", duration: 900 }
    ] 
  },
  { 
    name: "Pop Goes the Weasel", 
    notes: [
      { note: "C", duration: 300 }, { note: "F", duration: 300 }, { note: "G", duration: 300 }, { note: "A", duration: 300 }, 
      { note: "G", duration: 300 }, { note: "F", duration: 300 }, { note: "E", duration: 300 }, { note: "C", duration: 600 },
      { note: "D", duration: 300 }, { note: "E", duration: 300 }, { note: "F", duration: 900 }
    ] 
  },
  { 
    name: "If You're Happy", 
    notes: [
      { note: "G", duration: 300 }, { note: "G", duration: 300 }, { note: "A", duration: 300 }, { note: "G", duration: 300 }, 
      { note: "C", duration: 300 }, { note: "B", duration: 600 },
      { note: "G", duration: 300 }, { note: "G", duration: 300 }, { note: "A", duration: 300 }, { note: "G", duration: 300 }, 
      { note: "D", duration: 300 }, { note: "C", duration: 600 }
    ] 
  },
  { 
    name: "This Old Man", 
    notes: [
      { note: "G", duration: 300 }, { note: "E", duration: 300 }, { note: "G", duration: 300 }, { note: "E", duration: 300 }, 
      { note: "C", duration: 300 }, { note: "D", duration: 300 }, { note: "E", duration: 300 }, { note: "C", duration: 600 },
      { note: "D", duration: 300 }, { note: "E", duration: 300 }, { note: "C", duration: 900 }
    ] 
  },
  { 
    name: "Ring Around the Rosie", 
    notes: [
      { note: "E", duration: 300 }, { note: "G", duration: 300 }, { note: "G", duration: 300 }, { note: "A", duration: 300 }, 
      { note: "G", duration: 300 }, { note: "F", duration: 300 }, { note: "E", duration: 300 }, { note: "D", duration: 300 }, 
      { note: "C", duration: 300 }, { note: "D", duration: 300 }, { note: "E", duration: 300 }, { note: "E", duration: 600 }
    ] 
  },
  { 
    name: "Hey Diddle Diddle", 
    notes: [
      { note: "C", duration: 300 }, { note: "D", duration: 300 }, { note: "E", duration: 300 }, { note: "F", duration: 300 }, 
      { note: "G", duration: 300 }, { note: "G", duration: 300 }, { note: "A", duration: 300 }, { note: "G", duration: 300 }, 
      { note: "F", duration: 300 }, { note: "E", duration: 300 }, { note: "D", duration: 300 }, { note: "C", duration: 600 }
    ] 
  }
];

export default function Piano() {
  const [windowWidth, setWindowWidth] = useState(null);
  const [activeNotes, setActiveNotes] = useState(new Set());
  const [sampler, setSampler] = useState(null);
  const [playedNotes, setPlayedNotes] = useState([]);
  const [guessedSong, setGuessedSong] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [toneLoaded, setToneLoaded] = useState(false);
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const isPlayingDemoRef = useRef(false);
  const samplerRef = useRef(null);

  useEffect(() => {
    isPlayingDemoRef.current = isPlayingDemo;
  }, [isPlayingDemo]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  // Initialize the Sampler once Tone.js is loaded
  useEffect(() => {
    if (!toneLoaded) return;

    const initSampler = async () => {
      try {
        const Tone = window.Tone;
        
        if (!Tone || !Tone.Sampler) {
          throw new Error("Tone.js not found on window object");
        }

        const newSampler = new Tone.Sampler({
          urls: {
            A0: "A0.mp3",
            C1: "C1.mp3",
            "D#1": "Ds1.mp3",
            "F#1": "Fs1.mp3",
            A1: "A1.mp3",
            C2: "C2.mp3",
            "D#2": "Ds2.mp3",
            "F#2": "Fs2.mp3",
            A2: "A2.mp3",
            C3: "C3.mp3",
            "D#3": "Ds3.mp3",
            "F#3": "Fs3.mp3",
            A3: "A3.mp3",
            C4: "C4.mp3",
            "D#4": "Ds4.mp3",
            "F#4": "Fs4.mp3",
            A4: "A4.mp3",
            C5: "C5.mp3",
            "D#5": "Ds5.mp3",
            "F#5": "Fs5.mp3",
            A5: "A5.mp3",
            C6: "C6.mp3",
            "D#6": "Ds6.mp3",
            "F#6": "Fs6.mp3",
            A6: "A6.mp3",
            C7: "C7.mp3",
            "D#7": "Ds7.mp3",
            "F#7": "Fs7.mp3",
            A7: "A7.mp3",
          },
          release: 1,
          baseUrl: "https://tonejs.github.io/audio/salamander/",
          onload: () => {
             setIsLoading(false);
          }
        }).toDestination();

        setSampler(newSampler);
        samplerRef.current = newSampler;

        setTimeout(() => {
          setIsLoading((loading) => {
            if (loading) {
              console.warn("Sample loading timed out, enabling interface anyway");
              return false;
            }
            return loading;
          });
        }, 5000);

      } catch (error) {
        console.error('Error initializing sampler:', error);
        try {
          const Tone = window.Tone;
          if (Tone && Tone.Synth) {
            const newSynth = new Tone.Synth().toDestination();
            setSampler(newSynth);
            samplerRef.current = newSynth;
            setIsLoading(false);
          } else {
             createSimpleOscillator();
          }
        } catch (fallbackError) {
          createSimpleOscillator();
        }
      }
    };

    initSampler();

    return () => {
      if (samplerRef.current && typeof samplerRef.current.dispose === 'function') {
        samplerRef.current.dispose();
      }
    };
  }, [toneLoaded]);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const guessSong = useCallback((playedNotes) => {
    if (playedNotes.length < 4) {
      setGuessedSong(null);
      return;
    }

    let bestMatch = null;
    let bestMatchPercentage = 0;

    const noteOrder = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

    const areNotesClose = (playedNote, songNote) => {
      if (playedNote === songNote) return true;
      const playedIndex = noteOrder.indexOf(playedNote);
      const songIndex = noteOrder.indexOf(songNote);
      if (playedIndex === -1 || songIndex === -1) return false;
      return Math.abs(playedIndex - songIndex) <= 1;
    };

    sampleSongs.forEach(song => {
      const sequenceLength = Math.min(playedNotes.length, song.notes.length);
      let matches = 0;
      for (let i = 0; i < sequenceLength; i++) {
        const playedNote = playedNotes[playedNotes.length - sequenceLength + i];
        const rawSongNote = song.notes[i];
        const songNote = typeof rawSongNote === 'object' ? rawSongNote.note : rawSongNote;
        
        if (areNotesClose(playedNote, songNote)) {
          matches++;
        }
      }
      const matchPercentage = (matches / sequenceLength) * 100;
      if (matchPercentage > bestMatchPercentage) {
        bestMatchPercentage = matchPercentage;
        bestMatch = song.name;
      }
    });

    if (bestMatchPercentage >= 60) {
      setGuessedSong(bestMatch);
    } else {
      setGuessedSong(null);
    }
  }, []); // guessSong is defined FIRST

  const startNote = useCallback(async (note) => {
    if (!sampler) return;

    if (window.Tone && window.Tone.context.state !== 'running') {
      await window.Tone.start();
    }

    try {
      if (sampler.loaded) {
        sampler.triggerAttack(note);
      } else if (typeof sampler.triggerAttack === 'function') {
        sampler.triggerAttack(note);
      } else {
        // Fallback if no triggerAttack (e.g. simple synth)
        sampler.triggerAttackRelease(note, "8n");
      }

      setActiveNotes(prev => new Set(prev).add(note));
      
      setPlayedNotes(prev => {
        const newNotes = [...prev, note.slice(0, -1)];
        if (!isPlayingDemoRef.current) guessSong(newNotes); // Using isPlayingDemoRef and guessSong
        return newNotes.slice(-20);
      });
    } catch (error) {
      console.error('Error starting note:', error);
    }
  }, [sampler, guessSong]); // guessSong is now a valid dependency

  const stopNote = useCallback((note) => {
    if (!sampler) return;

    try {
      if (sampler.loaded) {
        sampler.triggerRelease(note);
      } else if (typeof sampler.triggerRelease === 'function') {
        sampler.triggerRelease(note);
      }

      setActiveNotes(prev => {
        const newSet = new Set(prev);
        newSet.delete(note);
        return newSet;
      });
    } catch (error) {
      console.error('Error stopping note:', error);
    }
  }, [sampler]);

  const playSong = async (song) => {
    if (isPlayingDemoRef.current) return;
    
    setIsPlayingDemo(true);
    setGuessedSong(`EXECUTING: ${song.name}`);
    setPlayedNotes([]);

    const octave = 4;

    for (const noteItem of song.notes) {
      if (!sampler) break;
      
      const noteName = typeof noteItem === 'object' ? noteItem.note : noteItem;
      const duration = typeof noteItem === 'object' ? noteItem.duration : 300;
      
      const fullNote = `${noteName}${octave}`;
      
      await startNote(fullNote); 
      await new Promise(resolve => setTimeout(resolve, duration));
      stopNote(fullNote);
      
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    setIsPlayingDemo(false);
    setTimeout(() => setGuessedSong(null), 1000);
  };

  const clearNotes = () => {
    setPlayedNotes([]);
    setGuessedSong(null);
  };

  const createSimpleOscillator = () => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const activeOscillators = {};

      const simpleSynth = {
        triggerAttack: (note) => {
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);

          const noteToFreq = {
            'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'D#4': 311.13, 'E4': 329.63, 'F4': 349.23,
            'F#4': 369.99, 'G4': 392.00, 'G#4': 415.30, 'A4': 440.00, 'A#4': 466.16, 'B4': 493.88,
            'C5': 523.25, 'C#5': 554.37, 'D5': 587.33, 'D#5': 622.25, 'E5': 659.25, 'F5': 698.46,
            'F#5': 739.99, 'G5': 783.99, 'G#5': 830.61, 'A5': 880.00, 'A#5': 932.33, 'B5': 987.77
          };
          const frequency = noteToFreq[note] || 440;
          oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
          gainNode.gain.setValueAtTime(0, audioContext.currentTime);
          gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
          oscillator.start();
          activeOscillators[note] = { oscillator, gainNode };
        },
        triggerRelease: (note) => {
          const active = activeOscillators[note];
          if (active) {
            const { oscillator, gainNode } = active;
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
            oscillator.stop(audioContext.currentTime + 0.5);
            delete activeOscillators[note];
          }
        },
        triggerAttackRelease: (note, duration) => {
           simpleSynth.triggerAttack(note);
           setTimeout(() => simpleSynth.triggerRelease(note), 300);
        },
        dispose: () => {
          try { audioContext.close(); } catch (e) {}
        }
      };
      setSampler(simpleSynth);
      samplerRef.current = simpleSynth;
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  // Dynamic key sizing based on window width
  const minWhiteKeyWidth = 40; // Minimum width for a white key
  const whiteKeysPerOctave = 7;
  const paddingCompensation = 80; // px padding on both sides of the piano container + 16px extra buffer

  const availableWidth = windowWidth ? windowWidth - paddingCompensation : minWhiteKeyWidth * whiteKeysPerOctave * 2; // Default to 2 octaves

  const numWhiteKeysThatFit = windowWidth ? Math.floor(availableWidth / minWhiteKeyWidth) : whiteKeysPerOctave * 2;
  const numWhiteKeysToShow = Math.max(whiteKeysPerOctave, numWhiteKeysThatFit); // Ensure at least one octave

  const keyWidth = availableWidth / numWhiteKeysToShow; // Distribute available width evenly

  const numberOfKeys = Math.floor((numWhiteKeysToShow / whiteKeysPerOctave) * 12); // Total notes considering black keys

  const fullOctaves = Math.floor(numberOfKeys / 12);
  const remainingKeys = numberOfKeys % 12;

  const octaves = [
    ...new Array(fullOctaves).fill([...notes]).flat(),
    ...notes.slice(0, remainingKeys + 1)
  ];

  // Center the piano range around Middle C (Octave 4)
  const startOctave = Math.max(2, 4 - Math.floor(fullOctaves / 2));

  const touchedNotes = useRef(new Set());
  
  const handleTouch = useCallback((e) => {
    e.preventDefault(); // Prevent scrolling/zooming while playing
    
    const touches = Array.from(e.touches);
    const currentNotes = new Set();

    touches.forEach(touch => {
      const element = document.elementFromPoint(touch.clientX, touch.clientY);
      if (element) {
        const key = element.closest('.key');
        if (key) {
          const note = key.getAttribute('data-full-note');
          if (note) currentNotes.add(note);
        }
      }
    });

    // Detect notes to start (in current but not in previous)
    currentNotes.forEach(note => {
      if (!touchedNotes.current.has(note)) {
        startNote(note);
      }
    });

    // Detect notes to stop (in previous but not in current)
    touchedNotes.current.forEach(note => {
      if (!currentNotes.has(note)) {
        stopNote(note);
      }
    });

    touchedNotes.current = currentNotes;
  }, [startNote, stopNote]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-mono">
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js"
        onLoad={() => {
          console.log("Tone.js loaded from CDN");
          setToneLoaded(true);
        }}
        strategy="afterInteractive"
      />

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <MatrixRain />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto pt-24 pb-8 px-4">
        
        {/* Cyberpunk Header */}
        <div className="text-center mb-12 relative">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
            <HackerText text="SONIC_SYNTHESIS_TERMINAL" />
          </h1>
          <div className="flex justify-center items-center gap-4 text-xs text-green-500/60 tracking-widest">
            <span>SYS_STATUS: {toneLoaded ? (isLoading ? "INITIALIZING..." : "ONLINE") : "CONNECTING..."}</span>
            <span>•</span>
            <span>AUDIO_CORE: {sampler ? "ACTIVE" : "STANDBY"}</span>
          </div>
        </div>

        {/* The Piano Deck */}
        <div className="flex justify-center mb-12">
          {isLoading && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
              <div className="text-center border border-green-500/30 p-8 rounded bg-black">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto mb-4"></div>
                <p className="text-green-500 text-sm tracking-widest animate-pulse">INITIALIZING_AUDIO_CORE...</p>
              </div>
            </div>
          )}
          
          <div className="relative bg-black/40 backdrop-blur-md rounded-lg p-1 border border-green-500/30 shadow-[0_0_50px_rgba(34,197,94,0.1)]">
            {/* Decorative Top Stripe */}
            <div className="h-2 w-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(34,197,94,0.1)_10px,rgba(34,197,94,0.1)_20px)] mb-1 rounded-t-sm"></div>
            
            <div 
              className="flex relative px-4 py-6 bg-black/60 rounded border-t border-white/5 touch-none"
              onTouchStart={handleTouch}
              onTouchMove={handleTouch}
              onTouchEnd={handleTouch}
            >
                {octaves.map((item, idx) => {
                  const isBlack = item.note.includes("#");
                  const octave = Math.floor(idx / 12) + startOctave;
                  const noteWithOctave = `${item.note}${octave}`;
                  const isActive = activeNotes.has(noteWithOctave);
  
                  return (
                    <div
                      key={idx}
                      data-full-note={noteWithOctave}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        startNote(noteWithOctave);
                      }}
                      onMouseUp={(e) => {
                        e.preventDefault();
                        stopNote(noteWithOctave);
                      }}
                      onMouseLeave={(e) => {
                        e.preventDefault();
                        if (e.buttons === 1) stopNote(noteWithOctave);
                      }}
                      onMouseEnter={(e) => {
                        if (e.buttons === 1) startNote(noteWithOctave);
                      }}
                      className={`
                        key relative flex items-end justify-center select-none transition-all duration-100
                        ${isBlack 
                          ? 'z-10 -mx-4 rounded-b-sm bg-black border border-gray-800 shadow-lg text-[8px] text-gray-600 pb-4' 
                          : 'z-0 bg-white/5 border border-white/10 rounded-b-sm text-[10px] text-green-500/30 pb-4 hover:bg-green-500/10'}
                        ${isActive && isBlack ? 'bg-cyan-900 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)] translate-y-[1px]' : ''}
                        ${isActive && !isBlack ? 'bg-green-900/30 border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.4)] translate-y-[2px]' : ''}
                      `}
                      style={{
                        width: isBlack ? keyWidth * 0.7 : keyWidth,
                        height: isBlack ? 120 : 180,
                        marginLeft: isBlack ? -(keyWidth * 0.35) : 0,
                        marginRight: isBlack ? -(keyWidth * 0.35) : 0,
                        zIndex: isBlack ? 10 : 0,
                      }}
                    >
                      {/* Key Label */}
                      <span className={`font-mono ${isActive ? 'text-white' : ''}`}>{item.note}</span>
                      
                      {/* Laser Beam Effect on Active */}
                      {isActive && !isBlack && (
                        <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent pointer-events-none"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        {/* HUD Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Note Log Terminal */}
          <div className="bg-black/40 border border-white/10 rounded p-4 h-48 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500/50"></div>
            <h3 className="text-xs font-mono text-green-500 mb-2 tracking-widest flex justify-between">
              <span>TERMINAL_LOG</span>
              <span className="animate-pulse">REC [●]</span>
            </h3>
            <div className="font-mono text-xs space-y-1 h-full overflow-y-auto pb-8 text-neutral-400">
              {playedNotes.length === 0 && <span className="opacity-30">Waiting for input...</span>}
              {[...playedNotes].reverse().map((note, index) => (
                <div key={index} className="flex gap-2">
                  <span className="text-green-500/50">{`>>`}</span>
                  <span className={index === 0 ? "text-white" : ""}>DETECTED_INPUT: {note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Song Recognition / Status HUD */}
          <div className="bg-black/40 border border-white/10 rounded p-4 h-48 relative flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-1 h-full bg-green-500/50"></div>
            <div>
              <h3 className="text-xs font-mono text-green-500 mb-2 tracking-widest">PATTERN_MATCH</h3>
              <div className="h-px w-full bg-white/10 mb-4"></div>
            </div>
            
            <div className="flex-1 flex items-center justify-center">
              {guessedSong ? (
                <div className="text-center space-y-2 animate-pulse">
                  <div className="text-green-400 font-bold text-xl tracking-widest border-2 border-green-500 p-2 rounded">
                    {guessedSong.startsWith("EXECUTING:") ? "RUNNING_PROTOCOL" : "MATCH_FOUND"}
                  </div>
                  <div className="text-white font-mono text-lg">{guessedSong}</div>
                </div>
              ) : (
                <div className="text-center opacity-30 text-xs font-mono">
                  <div className="mb-2 text-4xl opacity-20">SCANNING</div>
                  NO_PATTERN_MATCHED
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Sample Songs Grid */}
        <div className="mt-8 pb-20">
          <h3 className="text-xs font-mono text-white/50 mb-4 tracking-widest">AVAILABLE_PROTOCOLS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {sampleSongs.slice(0, 12).map((song, index) => (
              <div 
                key={index} 
                onClick={() => playSong(song)}
                className={`group p-2 bg-white/5 border border-white/5 hover:border-green-500/50 hover:bg-green-500/10 rounded transition-all cursor-pointer
                  ${isPlayingDemo ? 'opacity-50 pointer-events-none' : ''}
                `}
              >
                <div className="text-[10px] text-green-500/50 mb-1 group-hover:text-green-400">FILE_ID: {index.toString().padStart(3, '0')}</div>
                <div className="text-xs text-neutral-300 font-mono truncate group-hover:text-white">{song.name}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
