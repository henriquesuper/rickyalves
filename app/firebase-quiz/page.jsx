'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, CheckCircle2, XCircle, RotateCcw, Trophy, Sparkles } from 'lucide-react';
import { questions } from './data';

const LETTERS = ['A', 'B', 'C', 'D'];
const CORRECT_DELAY = 700;
const WRONG_DELAY = 2200;

export default function FirebaseQuizPage() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [phase, setPhase] = useState('playing');
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const current = questions[index];
  const total = questions.length;
  const progress = phase === 'won' ? 100 : (index / total) * 100;

  const reset = () => {
    setIndex(0);
    setSelected(null);
    setPhase('playing');
  };

  const handleSelect = (optionIndex) => {
    if (phase !== 'playing') return;
    setSelected(optionIndex);
    setPhase('reveal');

    const isCorrect = optionIndex === current.answer;
    clearTimeout(timerRef.current);

    if (isCorrect) {
      timerRef.current = setTimeout(() => {
        if (index + 1 >= total) {
          setPhase('won');
        } else {
          setIndex((i) => i + 1);
          setSelected(null);
          setPhase('playing');
        }
      }, CORRECT_DELAY);
    } else {
      timerRef.current = setTimeout(() => {
        reset();
      }, WRONG_DELAY);
    }
  };

  if (phase === 'won') {
    return <VictoryScreen onRestart={reset} />;
  }

  const isRevealing = phase === 'reveal';
  const erred = isRevealing && selected !== current.answer;

  return (
    <main className="min-h-screen text-white relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at top, #1f1d3a 0%, #0b0b13 55%, #050509 100%)' }}>
      <BackgroundGlow />

      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-6 pt-10 md:pt-16 pb-16">
        <header className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FFA726 0%, #F57C00 100%)', boxShadow: '0 8px 24px rgba(245,124,0,0.35)' }}>
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold tracking-tight">Quiz Firebase</h1>
              <p className="text-xs md:text-sm text-white/50">Acerte as 20 perguntas seguidas. Um erro e você volta pro início.</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs md:text-sm mb-2">
            <span className="text-white/60">
              Pergunta <span className="text-white font-semibold">{index + 1}</span> de {total}
            </span>
            <span className="text-white/40 font-mono">{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden bg-white/5">
            <motion.div
              className="h-full"
              style={{ background: 'linear-gradient(90deg, #FFA726, #F57C00)' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            />
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.div
              animate={erred ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : { x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-6 md:p-8 border backdrop-blur-sm"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)',
                borderColor: 'rgba(255,255,255,0.08)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              }}
            >
              <h2 className="text-xl md:text-2xl font-semibold leading-snug mb-6 md:mb-8">
                {current.q}
              </h2>

              <div className="space-y-3">
                {current.options.map((opt, i) => {
                  const isCorrect = i === current.answer;
                  const isSelected = i === selected;

                  let state = 'idle';
                  if (isRevealing) {
                    if (isCorrect) state = 'correct';
                    else if (isSelected) state = 'wrong';
                    else state = 'dim';
                  }

                  return (
                    <OptionButton
                      key={i}
                      letter={LETTERS[i]}
                      label={opt}
                      state={state}
                      disabled={isRevealing}
                      onClick={() => handleSelect(i)}
                    />
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {erred && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-5 rounded-xl p-4 md:p-5 border flex items-start gap-3"
              style={{ background: 'rgba(239,68,68,0.08)', borderColor: 'rgba(239,68,68,0.3)' }}
            >
              <XCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#f87171' }} />
              <div className="text-sm">
                <p className="font-semibold text-red-300 mb-1">Errou! Reiniciando do zero...</p>
                <p className="text-white/60 leading-relaxed">
                  A resposta correta é a alternativa <span className="font-bold text-white">{LETTERS[current.answer]}</span>.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

function OptionButton({ letter, label, state, disabled, onClick }) {
  const styles = {
    idle: {
      bg: 'rgba(255,255,255,0.03)',
      border: 'rgba(255,255,255,0.1)',
      letterBg: 'rgba(255,255,255,0.06)',
      letterColor: 'rgba(255,255,255,0.7)',
    },
    correct: {
      bg: 'rgba(34,197,94,0.12)',
      border: 'rgba(34,197,94,0.5)',
      letterBg: 'rgba(34,197,94,0.25)',
      letterColor: '#4ade80',
    },
    wrong: {
      bg: 'rgba(239,68,68,0.12)',
      border: 'rgba(239,68,68,0.5)',
      letterBg: 'rgba(239,68,68,0.25)',
      letterColor: '#f87171',
    },
    dim: {
      bg: 'rgba(255,255,255,0.02)',
      border: 'rgba(255,255,255,0.05)',
      letterBg: 'rgba(255,255,255,0.04)',
      letterColor: 'rgba(255,255,255,0.25)',
    },
  }[state];

  return (
    <motion.button
      type="button"
      disabled={disabled}
      onClick={onClick}
      whileHover={!disabled ? { scale: 1.01, borderColor: 'rgba(255,167,38,0.4)' } : {}}
      whileTap={!disabled ? { scale: 0.99 } : {}}
      className="w-full text-left rounded-xl p-4 md:p-5 border flex items-center gap-4 transition-colors duration-300"
      style={{
        background: styles.bg,
        borderColor: styles.border,
        opacity: state === 'dim' ? 0.5 : 1,
        cursor: disabled ? 'default' : 'pointer',
      }}
    >
      <span
        className="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center font-bold text-sm md:text-base shrink-0 transition-colors duration-300"
        style={{ background: styles.letterBg, color: styles.letterColor }}
      >
        {state === 'correct' ? (
          <CheckCircle2 className="w-5 h-5" />
        ) : state === 'wrong' ? (
          <XCircle className="w-5 h-5" />
        ) : (
          letter
        )}
      </span>
      <span className="text-sm md:text-base leading-relaxed text-white/90">{label}</span>
    </motion.button>
  );
}

function VictoryScreen({ onRestart }) {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at center, #1a2e1f 0%, #0b0b13 60%, #050509 100%)' }}>
      <BackgroundGlow victory />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-10 max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.15 }}
          className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #FFD54F 0%, #FFA726 100%)',
            boxShadow: '0 16px 60px rgba(255,167,38,0.5)',
          }}
        >
          <Trophy className="w-10 h-10 text-white" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-1.5 mb-3"
        >
          <Sparkles className="w-4 h-4" style={{ color: '#FFA726' }} />
          <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#FFA726' }}>
            Perfeito
          </span>
          <Sparkles className="w-4 h-4" style={{ color: '#FFA726' }} />
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          20 de 20 acertos!
        </h1>
        <p className="text-white/60 mb-10 leading-relaxed">
          Você dominou as bases do Firebase: autenticação, Firestore, regras de segurança,
          Cloud Functions e Hosting. Bom trabalho.
        </p>

        <button
          type="button"
          onClick={onRestart}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: 'linear-gradient(135deg, #FFA726 0%, #F57C00 100%)',
            boxShadow: '0 8px 24px rgba(245,124,0,0.35)',
          }}
        >
          <RotateCcw className="w-4 h-4" />
          Jogar de novo
        </button>
      </motion.div>
    </main>
  );
}

function BackgroundGlow({ victory = false }) {
  return (
    <>
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: victory
            ? 'radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,167,38,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: victory
            ? 'radial-gradient(circle, rgba(255,167,38,0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </>
  );
}
