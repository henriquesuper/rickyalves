'use client';
import { motion } from 'framer-motion';
import { colors } from './shared';

const examples = [
  { rule: 'Comer porco', ref: 'Lv 11:7' },
  { rule: 'Fazer tatuagem', ref: 'Lv 19:28' },
  { rule: 'Roupa de dois tipos de fio', ref: 'Dt 22:11' },
  { rule: 'Apedrejar filho rebelde', ref: 'Dt 21:18-21' },
];

export function Section2_Abertura() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-4 text-2xl"
        style={{ color: colors.terracotta }}
      >
        ?
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:text-3xl font-semibold max-w-2xl"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        &ldquo;O cristão tem que obedecer
        <br className="hidden md:block" />{' '}
        o Antigo Testamento?&rdquo;
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-6 mb-10 h-px w-16"
        style={{ background: colors.terracotta }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="text-base md:text-lg max-w-xl mb-8"
        style={{ color: colors.graphite, fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}
      >
        Mas todo cristão já escolhe o que vale.
      </motion.p>

      <div className="flex flex-col gap-2 w-full max-w-sm mb-10">
        {examples.map((ex, i) => (
          <motion.div
            key={ex.rule}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.25, duration: 0.6 }}
            className="flex items-center justify-between px-4 py-2.5 rounded-xl"
            style={{
              background: colors.white,
              border: `1px solid ${colors.offWhiteDark}`,
            }}
          >
            <span
              className="text-sm md:text-base"
              style={{
                color: colors.graphiteLight,
                textDecoration: 'line-through',
                textDecorationColor: `${colors.terracotta}99`,
              }}
            >
              {ex.rule}
            </span>
            <span className="text-[11px]" style={{ color: colors.graphiteLight }}>
              {ex.ref}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6, duration: 0.8 }}
        className="max-w-xl text-base md:text-lg"
        style={{
          fontFamily: 'var(--font-playfair)',
          color: colors.charcoal,
        }}
      >
        A pergunta não é <em>se</em> a gente distingue —
        <br />
        é <em>como</em>. E a Bíblia mesma ensina o critério.
      </motion.p>
    </div>
  );
}
