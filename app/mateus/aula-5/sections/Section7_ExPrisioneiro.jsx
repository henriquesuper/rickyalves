'use client';
import { motion } from 'framer-motion';
import { colors } from './shared';

const qa = [
  { q: 'A lei que o condenou ainda existe?', a: 'Sim.' },
  { q: 'Ainda é boa?', a: 'Sim.' },
  { q: 'Ainda define o que é certo e errado?', a: 'Sim.' },
  { q: 'O que mudou?', a: 'A condenação.' },
];

function CellAndBook() {
  return (
    <div className="flex items-end justify-center gap-6 py-2">
      {/* Cela aberta */}
      <div className="flex flex-col items-center">
        <p className="text-[10px] uppercase tracking-widest mb-3" style={{ color: colors.graphiteLight }}>
          A cela
        </p>
        <div
          className="relative"
          style={{ width: 86, height: 110 }}
        >
          {/* Moldura */}
          <div
            className="absolute inset-0 rounded-md"
            style={{
              border: `3px solid ${colors.charcoal}`,
              background: `linear-gradient(180deg, ${colors.graphiteLight}10 0%, ${colors.graphite}25 100%)`,
            }}
          />
          {/* Barras */}
          {[0.25, 0.5, 0.75].map((t, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: 6,
                bottom: 6,
                left: `${t * 100}%`,
                width: 2,
                background: colors.charcoal,
                transform: 'translateX(-50%)',
              }}
            />
          ))}
          {/* Porta aberta — saindo do quadro */}
          <motion.div
            className="absolute"
            style={{
              top: 0,
              left: '100%',
              width: 60,
              height: '100%',
              borderLeft: `3px solid ${colors.charcoal}`,
              borderTop: `3px solid ${colors.charcoal}`,
              borderBottom: `3px solid ${colors.charcoal}`,
              borderRadius: '0 6px 6px 0',
              background: `linear-gradient(180deg, ${colors.graphiteLight}10 0%, ${colors.graphite}25 100%)`,
              transformOrigin: 'left center',
            }}
            initial={{ rotateY: -10 }}
            animate={{ rotateY: -65 }}
            transition={{ delay: 1.2, duration: 1.2, ease: 'easeOut' }}
          >
            {/* Barras na porta */}
            {[0.33, 0.66].map((t, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  top: 6,
                  bottom: 6,
                  left: `${t * 100}%`,
                  width: 2,
                  background: colors.charcoal,
                  transform: 'translateX(-50%)',
                }}
              />
            ))}
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          className="text-[10px] mt-3 italic text-center"
          style={{ color: colors.olive, fontWeight: 600 }}
        >
          Aberta.
        </motion.p>
      </div>

      {/* Livro de leis */}
      <div className="flex flex-col items-center">
        <p className="text-[10px] uppercase tracking-widest mb-3" style={{ color: colors.graphiteLight }}>
          A lei
        </p>
        <div
          className="relative rounded-sm flex items-center justify-center"
          style={{
            width: 70,
            height: 96,
            background: `linear-gradient(180deg, ${colors.gold} 0%, ${colors.goldLight} 100%)`,
            border: `2px solid ${colors.gold}`,
            boxShadow: `0 4px 14px rgba(212,168,83,0.30), inset 0 -3px 0 rgba(0,0,0,0.10), inset 0 2px 0 rgba(255,255,255,0.20)`,
          }}
        >
          <div
            style={{
              width: 2,
              height: '85%',
              background: 'rgba(45,41,38,0.20)',
            }}
          />
        </div>
        <p className="text-[10px] mt-3 italic text-center" style={{ color: colors.graphiteLight }}>
          Intacta.
        </p>
      </div>
    </div>
  );
}

export function Section7_ExPrisioneiro() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-6 py-14">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold text-center"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        O Ex-Prisioneiro
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-2 text-sm md:text-base italic text-center max-w-xl"
        style={{ color: colors.graphiteLight }}
      >
        Alguém pagou a fiança. A dívida toda.
        <br />
        Ele saiu — homem livre.
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6 mb-10 h-px w-16"
        style={{ background: colors.blue }}
      />

      <CellAndBook />

      {/* Perguntas-resposta */}
      <div className="w-full max-w-xl mt-10 space-y-2">
        {qa.map((row, i) => (
          <motion.div
            key={row.q}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 + i * 0.25, duration: 0.6 }}
            className="grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 rounded-xl"
            style={{
              background: colors.white,
              border: `1px solid ${colors.offWhiteDark}`,
            }}
          >
            <p
              className="text-sm md:text-base italic"
              style={{ fontFamily: 'var(--font-playfair)', color: colors.graphite }}
            >
              {row.q}
            </p>
            <p
              className="text-sm md:text-base font-semibold"
              style={{
                color: i === qa.length - 1 ? colors.olive : colors.charcoal,
                fontFamily: 'var(--font-playfair)',
              }}
            >
              {row.a}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.blockquote
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.8 }}
        className="mt-10 max-w-xl text-base md:text-lg italic leading-relaxed text-center px-4"
        style={{
          fontFamily: 'var(--font-playfair)',
          color: colors.graphite,
          borderTop: `1px solid ${colors.offWhiteDark}`,
          paddingTop: '1.25rem',
        }}
      >
        A lei não é mais sua acusadora —
        <br />
        é o desenho do filho que você está se tornando.
      </motion.blockquote>
    </div>
  );
}
