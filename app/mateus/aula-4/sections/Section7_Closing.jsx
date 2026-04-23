'use client';
import { motion } from 'framer-motion';
import { colors, journeyLessons } from './shared';

function MiniJourneyMap() {
  const phases = [
    { label: 'A Base', color: colors.gold },
    { label: 'A Lente', color: colors.blue },
    { label: 'A Vida', color: colors.olive },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="mt-12 flex flex-col items-center gap-4"
    >
      <p className="text-xs uppercase tracking-widest mb-2" style={{ color: colors.graphiteLight }}>
        Sua Jornada
      </p>
      <div className="flex items-center gap-1.5">
        {journeyLessons.map((lesson) => {
          const isCompleted = lesson.id <= 4;
          const isCurrent = lesson.id === 4;
          const phaseColor =
            lesson.phase === 1 ? colors.gold : lesson.phase === 2 ? colors.blue : colors.olive;

          return (
            <motion.div
              key={lesson.id}
              className="rounded-full"
              style={{
                width: isCurrent ? 14 : isCompleted ? 12 : 8,
                height: isCurrent ? 14 : isCompleted ? 12 : 8,
                background: isCompleted ? phaseColor : `${phaseColor}33`,
                border: isCompleted ? `2px solid ${phaseColor}` : 'none',
                boxShadow: isCurrent ? `0 0 0 3px ${phaseColor}22` : 'none',
              }}
              animate={
                isCurrent
                  ? { scale: [1, 1.15, 1], opacity: [1, 0.85, 1] }
                  : isCompleted
                  ? { scale: [1, 1.08, 1] }
                  : {}
              }
              transition={
                isCurrent || isCompleted
                  ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
                  : {}
              }
            />
          );
        })}
      </div>
      <div className="flex gap-6 text-xs" style={{ color: colors.graphiteLight }}>
        {phases.map((p) => (
          <div key={p.label} className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
            <span>{p.label}</span>
          </div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="mt-2 text-xs font-medium px-3 py-1 rounded-full"
        style={{ background: `${colors.blue}15`, color: colors.blue }}
      >
        Fase 2 · aula 1 de 5
      </motion.p>
    </motion.div>
  );
}

export function Section7_Closing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-14 text-center">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl md:text-2xl italic max-w-2xl"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        A cruz não aboliu a lei de Deus.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-xl md:text-2xl italic max-w-2xl mt-2"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.gold }}
      >
        A cruz cumpriu o sistema que apontava pra ela.
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="mt-8 mb-8 h-px w-16"
        style={{ background: colors.gold }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="max-w-xl text-base md:text-lg italic leading-relaxed"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.graphite }}
      >
        Deus não está te dando lista.
        <br />
        Está te dando um caráter.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="mt-8 text-base"
        style={{ color: colors.graphiteLight }}
      >
        Semana que vem:{' '}
        <span style={{ color: colors.blue, fontWeight: 600 }}>
          O Que Paulo Realmente Quis Dizer.
        </span>
      </motion.p>

      <MiniJourneyMap />
    </div>
  );
}
