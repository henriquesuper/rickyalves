'use client';
import { motion } from 'framer-motion';
import { colors } from './shared';

function Mirror() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.8 }}
      className="flex flex-col items-center"
    >
      <p className="text-[10px] uppercase tracking-widest mb-3" style={{ color: colors.gold, fontWeight: 700 }}>
        A Lei
      </p>

      <div
        className="relative rounded-[40px] overflow-hidden"
        style={{
          width: 110,
          height: 150,
          border: `4px solid ${colors.gold}`,
          background: `linear-gradient(135deg, ${colors.offWhite} 0%, ${colors.goldLight}55 50%, ${colors.offWhite} 100%)`,
          boxShadow: `0 6px 22px rgba(212,168,83,0.30), inset 0 2px 8px rgba(255,255,255,0.4)`,
        }}
      >
        {/* Brilho diagonal */}
        <motion.div
          className="absolute"
          style={{
            top: '-20%',
            left: '-10%',
            width: '40%',
            height: '140%',
            background: `linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)`,
            transform: 'rotate(20deg)',
          }}
          animate={{ x: ['-30%', '180%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
      </div>

      <p
        className="mt-3 text-xs md:text-sm font-semibold text-center"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        Mostra a sujeira.
      </p>
      <p className="text-[11px] mt-0.5 italic text-center" style={{ color: colors.graphiteLight }}>
        Não lava.
      </p>
    </motion.div>
  );
}

function Water() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="flex flex-col items-center"
    >
      <p className="text-[10px] uppercase tracking-widest mb-3" style={{ color: colors.blue, fontWeight: 700 }}>
        Cristo
      </p>

      <div className="relative" style={{ width: 110, height: 150 }}>
        {/* Gota */}
        <motion.div
          className="absolute left-1/2"
          style={{
            top: 8,
            width: 90,
            height: 120,
            background: `radial-gradient(ellipse at 35% 35%, ${colors.blueLight}EE 0%, ${colors.blue} 80%)`,
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            transform: 'translateX(-50%)',
            boxShadow: `0 8px 22px rgba(44,62,107,0.35), inset 6px 6px 14px rgba(255,255,255,0.20), inset -4px -4px 14px rgba(0,0,0,0.18)`,
          }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Highlight */}
        <div
          className="absolute"
          style={{
            top: 28,
            left: '32%',
            width: 18,
            height: 28,
            background: 'rgba(255,255,255,0.45)',
            borderRadius: '50%',
            filter: 'blur(2px)',
          }}
        />
      </div>

      <p
        className="mt-3 text-xs md:text-sm font-semibold text-center"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        Lava o rosto.
      </p>
      <p className="text-[11px] mt-0.5 italic text-center" style={{ color: colors.graphiteLight }}>
        Salva.
      </p>
    </motion.div>
  );
}

export function Section6_EspelhoSabao() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-6 py-14">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-xs uppercase tracking-widest mb-3"
        style={{ color: colors.graphiteLight, fontWeight: 600 }}
      >
        Romanos 7:7-12
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold text-center"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        O Espelho e o Sabão
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6 mb-10 h-px w-16"
        style={{ background: colors.gold }}
      />

      {/* Versículo em destaque */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-xl mb-12"
      >
        <blockquote
          className="text-base md:text-lg leading-relaxed italic text-center px-4"
          style={{
            fontFamily: 'var(--font-playfair)',
            color: colors.graphite,
          }}
        >
          &ldquo;A lei é santa, e o mandamento é{' '}
          <span style={{ color: colors.gold, fontWeight: 700, fontStyle: 'normal' }}>
            santo, justo e bom
          </span>
          .&rdquo;
        </blockquote>
      </motion.div>

      {/* Par visual: espelho + água */}
      <div className="w-full max-w-xl flex flex-row items-end justify-center gap-10 md:gap-16 mb-12">
        <Mirror />
        <Water />
      </div>

      {/* Frase-síntese */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="max-w-xl px-4"
      >
        <blockquote
          className="text-base md:text-lg leading-relaxed italic"
          style={{
            fontFamily: 'var(--font-playfair)',
            color: colors.graphite,
            borderLeft: `3px solid ${colors.gold}`,
            paddingLeft: '1.25rem',
          }}
        >
          Paulo nunca disse pra jogar o espelho fora.
          <br />
          Disse pra não confundir o{' '}
          <span style={{ color: colors.gold, fontWeight: 700, fontStyle: 'normal' }}>
            espelho
          </span>{' '}
          com o{' '}
          <span style={{ color: colors.blue, fontWeight: 700, fontStyle: 'normal' }}>
            sabão
          </span>
          .
        </blockquote>
        <p className="mt-2 text-xs text-right font-mono" style={{ color: colors.graphiteLight }}>
          Cf. Tiago 1:23-25
        </p>
      </motion.div>
    </div>
  );
}
