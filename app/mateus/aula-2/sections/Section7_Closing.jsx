'use client';
import { motion } from 'framer-motion';
import { colors, journeyLessons } from './shared';

function MiniJourneyMap() {
  const phases = [
    { label: 'A Base', color: colors.gold, lessons: journeyLessons.filter((l) => l.phase === 1) },
    { label: 'A Lente', color: colors.blue, lessons: journeyLessons.filter((l) => l.phase === 2) },
    { label: 'A Vida', color: colors.olive, lessons: journeyLessons.filter((l) => l.phase === 3) },
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
          const isCompleted = lesson.id <= 2;
          const phaseColor =
            lesson.phase === 1 ? colors.gold : lesson.phase === 2 ? colors.blue : colors.olive;

          return (
            <motion.div
              key={lesson.id}
              className="rounded-full"
              style={{
                width: isCompleted ? 12 : 8,
                height: isCompleted ? 12 : 8,
                background: isCompleted ? phaseColor : `${phaseColor}33`,
                border: isCompleted ? `2px solid ${phaseColor}` : 'none',
              }}
              animate={
                isCompleted
                  ? { scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }
                  : {}
              }
              transition={
                isCompleted
                  ? { duration: 2, repeat: Infinity, ease: 'easeInOut' }
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
    </motion.div>
  );
}

export function Section7_Closing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl italic"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        O Pai corre.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-6 text-lg"
        style={{ color: colors.graphiteLight }}
      >
        Semana que vem:{' '}
        <span style={{ color: colors.gold, fontWeight: 600 }}>
          Fé e Obras — Paulo e Tiago São Amigos.
        </span>
      </motion.p>

      <MiniJourneyMap />
    </div>
  );
}
