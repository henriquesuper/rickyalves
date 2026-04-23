'use client';
import { motion } from 'framer-motion';
import { colors } from './shared';

const shadows = [
  { shadow: 'Sacrifícios de animais', arrow: 'Cordeiro de Deus', ref: 'Jo 1:29 · Hb 10:10-14' },
  { shadow: 'Sacerdócio levítico', arrow: 'Cristo — Sumo Sacerdote', ref: 'Hb 4:14-16 · 7:23-27' },
  { shadow: 'Templo', arrow: 'Jesus habitou entre nós', ref: 'João 1:14' },
  { shadow: 'Festas anuais', arrow: 'Eventos da obra de Cristo', ref: '1 Co 5:7 · Cl 2:16-17' },
];

export function Section5_LeiCerimonial() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-6 py-14">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-xs uppercase tracking-widest mb-3"
        style={{ color: colors.terracotta, fontWeight: 600 }}
      >
        Ao Lado da Arca
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold text-center"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        Lei Cerimonial
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-2 text-base md:text-lg italic text-center"
        style={{ color: colors.graphite, fontFamily: 'var(--font-playfair)' }}
      >
        &ldquo;Sombra das coisas que haviam de vir.&rdquo;
        <span className="block text-xs mt-1 not-italic" style={{ color: colors.graphiteLight }}>
          — Hebreus 10:1
        </span>
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6 mb-10 h-px w-16"
        style={{ background: colors.terracotta }}
      />

      {/* Sombra → substância */}
      <div className="w-full max-w-xl space-y-2 mb-10">
        {shadows.map((row, i) => (
          <motion.div
            key={row.shadow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.2, duration: 0.6 }}
            className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-3 rounded-xl px-3 py-3 md:px-4"
            style={{
              background: colors.white,
              border: `1px solid ${colors.offWhiteDark}`,
            }}
          >
            <div className="text-right">
              <p
                className="text-xs md:text-sm"
                style={{
                  color: colors.graphiteLight,
                  fontStyle: 'italic',
                  textDecoration: 'line-through',
                  textDecorationColor: `${colors.terracotta}66`,
                }}
              >
                {row.shadow}
              </p>
            </div>
            <span style={{ color: colors.terracotta }}>→</span>
            <div>
              <p
                className="text-xs md:text-sm font-semibold"
                style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
              >
                {row.arrow}
              </p>
              <p className="text-[10px] mt-0.5 font-mono" style={{ color: colors.graphiteLight }}>
                {row.ref}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Momento do véu */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.9 }}
        className="w-full max-w-md"
      >
        <div
          className="relative rounded-2xl p-6 text-center overflow-hidden"
          style={{
            background: colors.white,
            border: `1px solid ${colors.terracotta}33`,
            boxShadow: `0 2px 16px rgba(196,122,90,0.08)`,
          }}
        >
          {/* Linha rasgada simbólica */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 2.4, duration: 0.8, ease: 'easeInOut' }}
            className="absolute left-1/2 top-0 bottom-0 w-px origin-top"
            style={{
              background: `linear-gradient(180deg, ${colors.terracotta} 0%, transparent 100%)`,
              transform: 'translateX(-50%)',
            }}
          />

          <p
            className="text-xs uppercase tracking-widest mb-2"
            style={{ color: colors.terracotta, fontWeight: 600 }}
          >
            E então, no Calvário…
          </p>
          <p
            className="text-lg md:text-xl italic leading-relaxed"
            style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
          >
            &ldquo;O véu do santuário se rasgou
            <br />
            em dois, de alto a baixo.&rdquo;
          </p>
          <p className="text-[11px] mt-3 font-mono" style={{ color: colors.graphiteLight }}>
            Mateus 27:50-51
          </p>
          <p
            className="mt-4 text-sm italic"
            style={{ color: colors.graphite, fontFamily: 'var(--font-playfair)' }}
          >
            Deus rasgou. De cima pra baixo.
            <br />
            O sistema cumpriu o propósito.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
