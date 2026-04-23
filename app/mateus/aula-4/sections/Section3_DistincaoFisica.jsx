'use client';
import { motion } from 'framer-motion';
import { colors } from './shared';

function TabletPair() {
  return (
    <div className="flex gap-1.5 items-end justify-center">
      {[0, 1].map((i) => (
        <div
          key={i}
          className="rounded-t-2xl"
          style={{
            width: 36,
            height: 56,
            background: `linear-gradient(180deg, ${colors.charcoal} 0%, ${colors.graphite} 100%)`,
            boxShadow: `inset 0 -4px 0 rgba(0,0,0,0.15), inset 0 2px 0 rgba(255,255,255,0.08)`,
            border: `1px solid ${colors.charcoal}`,
          }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-1 pt-1.5">
            {[...Array(5)].map((_, j) => (
              <div
                key={j}
                style={{
                  width: 14,
                  height: 1.5,
                  background: colors.goldLight,
                  opacity: 0.65,
                  borderRadius: 1,
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function BookIcon() {
  return (
    <div
      className="relative flex items-center justify-center rounded-sm"
      style={{
        width: 52,
        height: 36,
        background: colors.terracotta,
        boxShadow: `inset 0 -3px 0 rgba(0,0,0,0.15), inset 0 2px 0 rgba(255,255,255,0.1)`,
        border: `1px solid ${colors.terracotta}`,
      }}
    >
      <div
        style={{
          width: 1.5,
          height: '90%',
          background: 'rgba(255,255,255,0.25)',
        }}
      />
    </div>
  );
}

export function Section3_DistincaoFisica() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold text-center"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        A Distinção Física
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-2 text-sm md:text-base italic text-center max-w-xl"
        style={{ color: colors.graphiteLight }}
      >
        Antes de ser teológica, a distinção é física.
        <br />
        As duas leis ficavam em lugares diferentes.
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6 mb-10 h-px w-16"
        style={{ background: colors.gold }}
      />

      {/* Visual da arca + livro ao lado */}
      <div className="relative w-full max-w-xl flex flex-col md:flex-row items-center md:items-end justify-center gap-8 md:gap-4 mb-12">
        {/* ARCA — centro, dentro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9, ease: 'easeOut' }}
          className="relative flex flex-col items-center"
        >
          <p
            className="text-[10px] uppercase tracking-widest mb-3"
            style={{ color: colors.gold, fontWeight: 600 }}
          >
            Dentro da Arca
          </p>

          {/* Arca box */}
          <div className="relative">
            {/* Glow sutil */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{
                background: `radial-gradient(ellipse at center, ${colors.goldSoft} 0%, transparent 70%)`,
                transform: 'scale(1.8)',
                zIndex: -1,
              }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div
              className="relative rounded-lg p-5 pb-3 pt-8"
              style={{
                width: 190,
                background: `linear-gradient(180deg, ${colors.goldLight} 0%, ${colors.gold} 100%)`,
                border: `2px solid ${colors.gold}`,
                boxShadow: `0 8px 24px rgba(212,168,83,0.35), inset 0 2px 4px rgba(255,255,255,0.3)`,
              }}
            >
              {/* Querubins estilizados (cantos) */}
              <div
                className="absolute -top-3 left-3 w-3 h-6 rounded-t-full"
                style={{ background: colors.gold, borderTop: `2px solid ${colors.goldLight}` }}
              />
              <div
                className="absolute -top-3 right-3 w-3 h-6 rounded-t-full"
                style={{ background: colors.gold, borderTop: `2px solid ${colors.goldLight}` }}
              />

              <TabletPair />
            </div>
          </div>

          <div className="mt-4 text-center">
            <p
              className="text-xs font-medium uppercase tracking-wider"
              style={{ color: colors.charcoal }}
            >
              Os Dez Mandamentos
            </p>
            <p className="text-[11px] mt-1" style={{ color: colors.graphiteLight }}>
              Dedo de Deus · em pedra
            </p>
            <p className="text-[10px] mt-2 font-mono" style={{ color: colors.graphiteLight }}>
              Êx 31:18 · Dt 10:1-5 · 1 Rs 8:9
            </p>
          </div>
        </motion.div>

        {/* LIVRO — ao lado, fora */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.9, ease: 'easeOut' }}
          className="relative flex flex-col items-center"
        >
          <p
            className="text-[10px] uppercase tracking-widest mb-3"
            style={{ color: colors.terracotta, fontWeight: 600 }}
          >
            Ao Lado da Arca
          </p>

          <div
            className="relative rounded-lg p-5 pt-6 pb-4 flex items-center justify-center"
            style={{
              width: 140,
              background: colors.white,
              border: `1.5px dashed ${colors.terracotta}66`,
            }}
          >
            <BookIcon />
          </div>

          <div className="mt-4 text-center">
            <p
              className="text-xs font-medium uppercase tracking-wider"
              style={{ color: colors.charcoal }}
            >
              Lei Cerimonial
            </p>
            <p className="text-[11px] mt-1" style={{ color: colors.graphiteLight }}>
              Mão de Moisés · em livro
            </p>
            <p className="text-[10px] mt-2 font-mono" style={{ color: colors.graphiteLight }}>
              Dt 31:24-26
            </p>
          </div>
        </motion.div>
      </div>

      <motion.blockquote
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="max-w-xl text-base md:text-lg italic leading-relaxed text-center px-4"
        style={{
          fontFamily: 'var(--font-playfair)',
          color: colors.graphite,
          borderTop: `1px solid ${colors.offWhiteDark}`,
          paddingTop: '1.25rem',
        }}
      >
        &ldquo;Dois lugares. Duas leis.
        <br />
        Deus está dizendo, pelo arranjo físico,
        <br />
        que têm pesos diferentes.&rdquo;
      </motion.blockquote>
    </div>
  );
}
