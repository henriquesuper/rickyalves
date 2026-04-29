'use client';
import { motion } from 'framer-motion';
import { colors } from './shared';

const echoes = [
  '"Paulo disse que a lei acabou."',
  '"Estamos debaixo da graça e não da lei."',
  '"Guardar o sábado é judaizar."',
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
        &ldquo;Paulo aboliu a lei?&rdquo;
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
        className="text-sm md:text-base max-w-md mb-8 uppercase tracking-widest"
        style={{ color: colors.graphiteLight }}
      >
        O que você já ouviu:
      </motion.p>

      <div className="flex flex-col gap-2.5 w-full max-w-md mb-12">
        {echoes.map((line, i) => (
          <motion.div
            key={line}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.3, duration: 0.6 }}
            className="px-4 py-3 rounded-xl text-sm md:text-base italic"
            style={{
              background: colors.white,
              border: `1px solid ${colors.offWhiteDark}`,
              color: colors.graphiteLight,
              fontFamily: 'var(--font-playfair)',
            }}
          >
            {line}
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
        A pergunta certa não é <em>se</em> Paulo aboliu —
        <br />
        é <em>o que</em> ele está atacando quando ataca.
      </motion.p>
    </div>
  );
}
