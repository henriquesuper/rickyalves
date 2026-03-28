'use client';
import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAula1Sync } from '../useAula1Sync';
import { colors, reactionTypes } from '../sections/shared';

// ========================================
// JOIN SCREEN
// ========================================
function JoinScreen({ onJoin }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) onJoin(name.trim());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="text-3xl font-bold mb-1"
          style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
        >
          Graça Que Transforma
        </h1>
        <p className="text-sm italic mb-10" style={{ color: colors.graphiteLight }}>
          Aula 1 — Conversa de Escuta
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full max-w-xs space-y-4"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Qual é o seu nome?"
          autoFocus
          className="w-full px-4 py-3 rounded-xl text-center text-base outline-none"
          style={{
            background: colors.white,
            border: `1px solid ${colors.offWhiteDark}`,
            color: colors.graphite,
          }}
        />
        <button
          type="submit"
          disabled={!name.trim()}
          className="w-full py-3 rounded-xl text-white font-medium transition-opacity hover:opacity-90 disabled:opacity-30"
          style={{ background: colors.gold }}
        >
          Entrar
        </button>
      </motion.form>
    </div>
  );
}

// ========================================
// REACTION BAR
// ========================================
function ReactionBar({ onReact }) {
  const timerRef = useRef(null);
  const [pending, setPending] = useState(null);

  const handleReact = useCallback((emoji) => {
    // Always update to the latest emoji
    setPending(emoji);

    // Clear any existing timer and set a new one
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      onReact(emoji);
      setPending(null);
      timerRef.current = null;
    }, 400);
  }, [onReact]);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 flex justify-center gap-4 py-4 px-6"
      style={{
        background: `linear-gradient(transparent, ${colors.offWhite} 30%)`,
        paddingBottom: 'max(1rem, env(safe-area-inset-bottom))',
      }}
    >
      {reactionTypes.map((r) => (
        <motion.button
          key={r.key}
          onClick={() => handleReact(r.emoji)}
          whileTap={{ scale: 1.3 }}
          className="flex flex-col items-center gap-0.5"
        >
          <span className="text-3xl">{r.emoji}</span>
          <span className="text-[10px]" style={{ color: colors.graphiteLight }}>
            {r.label}
          </span>
          {pending === r.emoji && (
            <motion.span
              layoutId="reaction-pending"
              className="w-1 h-1 rounded-full"
              style={{ background: colors.gold }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}

// ========================================
// INTERACTIVE CARD OVERLAY
// ========================================
function CardOverlay({ card, onRespond, onSkip }) {
  const [textResponse, setTextResponse] = useState('');
  const [scaleValue, setScaleValue] = useState(3);

  const handleSubmit = () => {
    if (card.type === 'scale') {
      onRespond({ response: scaleValue });
    } else {
      if (!textResponse.trim()) return;
      onRespond({ response: textResponse.trim() });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end justify-center"
      style={{ background: 'rgba(45, 41, 38, 0.3)' }}
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="w-full max-w-md rounded-t-3xl p-6"
        style={{ background: colors.white }}
      >
        <div className="w-10 h-1 rounded-full mx-auto mb-5" style={{ background: colors.offWhiteDark }} />

        <p className="text-2xl mb-3">{card.type === 'scale' ? '📊' : '💭'}</p>

        <p
          className="text-base mb-6 leading-relaxed"
          style={{ color: colors.graphite, fontFamily: 'var(--font-inter)' }}
        >
          {card.content}
        </p>

        {card.type === 'scale' ? (
          <div className="mb-6">
            <div className="flex justify-between text-xs mb-3" style={{ color: colors.graphiteLight }}>
              <span>{card.scaleLabels?.min || '1'}</span>
              <span>{card.scaleLabels?.max || '5'}</span>
            </div>
            <div className="flex justify-between gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => setScaleValue(n)}
                  className="flex-1 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{
                    background: scaleValue === n ? colors.gold : colors.offWhite,
                    color: scaleValue === n ? colors.white : colors.graphite,
                    border: `1px solid ${scaleValue === n ? colors.gold : colors.offWhiteDark}`,
                  }}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <textarea
            value={textResponse}
            onChange={(e) => setTextResponse(e.target.value)}
            placeholder="Sua resposta..."
            rows={3}
            autoFocus
            className="w-full p-3 rounded-xl text-sm resize-none outline-none mb-6"
            style={{
              background: colors.offWhite,
              border: `1px solid ${colors.offWhiteDark}`,
              color: colors.graphite,
            }}
          />
        )}

        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            className="flex-1 py-3 rounded-xl text-white font-medium text-sm transition-opacity hover:opacity-90"
            style={{ background: colors.gold }}
          >
            Enviar
          </button>
          <button
            onClick={onSkip}
            className="px-5 py-3 rounded-xl text-sm font-medium"
            style={{ background: colors.offWhiteDark, color: colors.graphiteLight }}
          >
            Pular
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// MAIN PARTICIPANT PAGE
// ========================================
export default function ParticipantePage() {
  const {
    sessionStatus,
    activeCard,
    connected,
    participants,
    userId,
    join,
    react,
    respondToCard,
  } = useAula1Sync('participant');

  const [hasJoined, setHasJoined] = useState(false);
  const [cardDismissed, setCardDismissed] = useState(null);

  const isJoined = hasJoined || participants.some((p) => p.uid === userId);

  const handleJoin = (name) => {
    join(name);
    setHasJoined(true);
  };

  const handleCardRespond = ({ response }) => {
    respondToCard({ response });
    setCardDismissed(activeCard?.content);
  };

  const handleCardSkip = () => {
    setCardDismissed(activeCard?.content);
  };

  const showCard = activeCard && cardDismissed !== activeCard.content;

  if (!isJoined) {
    return (
      <div style={{ background: colors.offWhite, minHeight: '100vh' }}>
        <JoinScreen onJoin={handleJoin} />
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
      style={{ background: colors.offWhite }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1
          className="text-2xl font-bold mb-1"
          style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
        >
          Graça Que Transforma
        </h1>
        <p className="text-sm italic mb-8" style={{ color: colors.graphiteLight }}>
          Aula 1 — Conversa de Escuta
        </p>

        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full" style={{ background: colors.olive }} />
          <span className="text-sm" style={{ color: colors.olive }}>
            Conectado
          </span>
        </div>
      </motion.div>

      <ReactionBar onReact={react} />

      <AnimatePresence>
        {showCard && (
          <CardOverlay
            card={activeCard}
            onRespond={handleCardRespond}
            onSkip={handleCardSkip}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
