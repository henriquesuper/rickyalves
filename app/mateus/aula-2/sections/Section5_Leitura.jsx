'use client';
import { motion } from 'framer-motion';
import { colors } from './shared';

export function Section5_Leitura() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-sm uppercase tracking-widest mb-4"
        style={{ color: colors.graphiteLight }}
      >
        Vamos ler juntos
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        Efésios 2:1-10
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-6 mb-10 h-px w-16"
        style={{ background: colors.olive }}
      />

      <motion.blockquote
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="max-w-xl text-lg md:text-xl leading-relaxed italic"
        style={{
          fontFamily: 'var(--font-playfair)',
          color: colors.graphite,
          borderLeft: `3px solid ${colors.olive}`,
          paddingLeft: '1.25rem',
          textAlign: 'left',
        }}
      >
        &ldquo;Porque pela graça sois salvos, mediante a fé; e isto não vem de vós; é dom de Deus; não de obras, para que ninguém se glorie.&rdquo;
      </motion.blockquote>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="mt-2 text-sm"
        style={{ color: colors.graphiteLight }}
      >
        — Efésios 2:8-9
      </motion.p>
    </div>
  );
}
