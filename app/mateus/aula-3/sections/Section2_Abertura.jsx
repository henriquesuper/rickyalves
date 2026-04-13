'use client';
import { motion } from 'framer-motion';
import { colors } from './shared';

export function Section2_Abertura() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-4 text-3xl"
        style={{ color: colors.terracotta }}
      >
        ⚡
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        O Elefante na Sala
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6 h-px w-16"
        style={{ background: colors.terracotta }}
      />
    </div>
  );
}
