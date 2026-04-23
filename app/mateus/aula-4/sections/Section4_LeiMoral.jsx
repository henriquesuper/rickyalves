'use client';
import { motion } from 'framer-motion';
import { colors } from './shared';

const mirror = [
  { attr: 'Deus é amor', law: '"Amarás o Senhor teu Deus" / "amarás o próximo"' },
  { attr: 'Deus é fiel', law: '"Não adulterarás"' },
  { attr: 'Deus é verdade', law: '"Não dirás falso testemunho"' },
  { attr: 'Deus é dono da vida', law: '"Não matarás"' },
];

export function Section4_LeiMoral() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-6 py-14">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-xs uppercase tracking-widest mb-3"
        style={{ color: colors.gold, fontWeight: 600 }}
      >
        Dentro da Arca
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold text-center"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        Lei Moral
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-2 text-base md:text-lg italic text-center"
        style={{ color: colors.graphite, fontFamily: 'var(--font-playfair)' }}
      >
        O caráter de Deus, em forma de princípios.
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6 mb-10 h-px w-16"
        style={{ background: colors.gold }}
      />

      {/* Espelho: caráter ↔ mandamento */}
      <div className="w-full max-w-xl space-y-2.5 mb-10">
        {mirror.map((row, i) => (
          <motion.div
            key={row.attr}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.2, duration: 0.6 }}
            className="grid grid-cols-[1fr_auto_2fr] items-center gap-3 md:gap-4 rounded-xl px-4 py-3"
            style={{
              background: colors.white,
              border: `1px solid ${colors.offWhiteDark}`,
            }}
          >
            <span
              className="text-sm md:text-base text-right"
              style={{ fontFamily: 'var(--font-playfair)', color: colors.gold, fontWeight: 600 }}
            >
              {row.attr}
            </span>
            <span style={{ color: colors.graphiteLight }}>→</span>
            <span
              className="text-xs md:text-sm italic"
              style={{ color: colors.graphite }}
            >
              {row.law}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.8 }}
        className="max-w-xl space-y-5 px-2"
      >
        <blockquote
          className="text-base md:text-lg leading-relaxed italic"
          style={{
            fontFamily: 'var(--font-playfair)',
            color: colors.graphite,
            borderLeft: `3px solid ${colors.gold}`,
            paddingLeft: '1.25rem',
            textAlign: 'left',
          }}
        >
          &ldquo;Não guardamos a lei para sermos salvos.
          <br />
          Guardamos <span style={{ color: colors.gold, fontStyle: 'normal', fontWeight: 700 }}>porque</span> fomos salvos.
          <br />
          A lei não é a porta — é a casa onde se mora depois que se entrou.&rdquo;
        </blockquote>

        <div className="flex flex-wrap gap-2 justify-center text-[11px]" style={{ color: colors.graphiteLight }}>
          <span className="font-mono px-2 py-0.5 rounded" style={{ background: colors.offWhiteDark }}>
            Malaquias 3:6
          </span>
          <span className="font-mono px-2 py-0.5 rounded" style={{ background: colors.offWhiteDark }}>
            Tiago 1:17
          </span>
          <span className="font-mono px-2 py-0.5 rounded" style={{ background: colors.offWhiteDark }}>
            Romanos 3:31
          </span>
        </div>
      </motion.div>
    </div>
  );
}
