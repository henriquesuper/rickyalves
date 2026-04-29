'use client';
import { motion } from 'framer-motion';
import { colors } from './shared';

const verses = [
  {
    ref: 'Gálatas 3:23-25',
    text: '"A lei foi nosso aio, pra nos conduzir a Cristo."',
    note: 'Aio = paidagōgos. Escravo doméstico que levava a criança até a escola — e ia embora. A função terminou. Não a escola.',
    accent: colors.gold,
  },
  {
    ref: 'Romanos 6:14-15',
    text: '"Não estais debaixo da lei, mas debaixo da graça. Continuaremos a pecar? De modo nenhum!"',
    note: 'Paulo escreveu a interpretação distorcida no versículo seguinte — e refutou na hora.',
    accent: colors.terracotta,
  },
  {
    ref: 'Romanos 7:12',
    text: '"A lei é santa, e o mandamento é santo, justo e bom."',
    note: 'O Paulo que poucos citam. A lei como categoria — não uma lei específica.',
    accent: colors.gold,
    emphasis: true,
  },
  {
    ref: 'Romanos 3:31',
    text: '"Anulamos a lei pela fé? De modo nenhum! Antes, confirmamos a lei."',
    note: 'A fé não anula a lei. Confirma. Estabelece. Sustenta.',
    accent: colors.olive,
  },
];

export function Section5_TextosChave() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-6 py-14">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold text-center"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        Os Textos-Chave
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-2 text-sm md:text-base italic text-center max-w-xl"
        style={{ color: colors.graphiteLight }}
      >
        Lendo Paulo no contexto de Paulo.
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6 mb-10 h-px w-16"
        style={{ background: colors.gold }}
      />

      <div className="w-full max-w-2xl space-y-3">
        {verses.map((v, i) => (
          <motion.div
            key={v.ref}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.25, duration: 0.6 }}
            className="rounded-xl px-4 py-4"
            style={{
              background: colors.white,
              border: `1px solid ${colors.offWhiteDark}`,
              borderLeft: `3px solid ${v.accent}`,
              boxShadow: v.emphasis
                ? `0 4px 18px rgba(212,168,83,0.12)`
                : 'none',
            }}
          >
            <p
              className="text-[10px] uppercase tracking-widest mb-1.5 font-mono"
              style={{ color: v.accent, fontWeight: 700 }}
            >
              {v.ref}
            </p>
            <p
              className="text-sm md:text-base italic leading-relaxed"
              style={{
                fontFamily: 'var(--font-playfair)',
                color: v.emphasis ? colors.charcoal : colors.graphite,
                fontWeight: v.emphasis ? 600 : 400,
              }}
            >
              {v.text}
            </p>
            <p
              className="text-xs md:text-sm mt-2"
              style={{ color: colors.graphiteLight }}
            >
              {v.note}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.blockquote
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="mt-10 max-w-xl text-base md:text-lg italic leading-relaxed text-center px-4"
        style={{
          fontFamily: 'var(--font-playfair)',
          color: colors.graphite,
          borderTop: `1px solid ${colors.offWhiteDark}`,
          paddingTop: '1.25rem',
        }}
      >
        Paulo não está atacando a lei.
        <br />
        Está atacando o que tentaram fazer com ela.
      </motion.blockquote>
    </div>
  );
}
