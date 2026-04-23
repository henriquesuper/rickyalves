'use client';
import { motion } from 'framer-motion';
import { colors } from './shared';

export function Section1_Welcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-4xl md:text-5xl font-bold mb-2"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        Aula 4
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xl md:text-2xl italic mb-12 max-w-xl"
        style={{
          fontFamily: 'var(--font-playfair)',
          color: colors.gold,
        }}
      >
        A Grande Distinção — Duas Leis, Dois Destinos
      </motion.p>

      <motion.blockquote
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="max-w-md text-lg italic"
        style={{
          fontFamily: 'var(--font-playfair)',
          color: colors.graphiteLight,
          borderLeft: `3px solid ${colors.gold}`,
          paddingLeft: '1.25rem',
        }}
      >
        &ldquo;Nem toda regra do Antigo Testamento tem o mesmo peso.&rdquo;
      </motion.blockquote>
    </div>
  );
}
