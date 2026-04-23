'use client';
import { motion } from 'framer-motion';
import { colors } from './shared';

function StakePlantIllustration() {
  return (
    <div className="flex items-end justify-center gap-6 py-4">
      {/* Muda com estaca */}
      <div className="flex flex-col items-center">
        <p className="text-[10px] uppercase tracking-widest mb-3" style={{ color: colors.terracotta }}>
          Muda jovem
        </p>
        <div className="relative" style={{ width: 60, height: 80 }}>
          {/* Terra */}
          <div
            className="absolute bottom-0 left-0 right-0 rounded-b"
            style={{ height: 8, background: colors.graphite, opacity: 0.18 }}
          />
          {/* Estaca */}
          <div
            className="absolute bottom-0"
            style={{
              left: '25%',
              width: 3,
              height: 70,
              background: colors.terracotta,
              borderRadius: 1,
            }}
          />
          {/* Tronco fino */}
          <div
            className="absolute bottom-1"
            style={{
              left: '50%',
              width: 2,
              height: 55,
              background: colors.olive,
              transform: 'translateX(-50%)',
            }}
          />
          {/* Folhas minúsculas */}
          <div
            className="absolute"
            style={{
              bottom: 48,
              left: '50%',
              width: 16,
              height: 12,
              background: colors.oliveLight,
              borderRadius: '50%',
              transform: 'translateX(-50%)',
              opacity: 0.85,
            }}
          />
          {/* Amarras */}
          {[0.5, 0.75].map((t, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                bottom: `${t * 60}px`,
                left: '25%',
                width: 16,
                height: 1.5,
                background: colors.graphiteLight,
                opacity: 0.6,
              }}
            />
          ))}
        </div>
        <p className="text-[10px] mt-2 italic" style={{ color: colors.graphiteLight }}>
          A estaca segura.
        </p>
      </div>

      {/* Seta */}
      <div className="flex flex-col items-center pb-6">
        <span style={{ color: colors.graphiteLight }}>→</span>
      </div>

      {/* Árvore adulta, sem estaca */}
      <div className="flex flex-col items-center">
        <p className="text-[10px] uppercase tracking-widest mb-3" style={{ color: colors.olive }}>
          Árvore adulta
        </p>
        <div className="relative" style={{ width: 70, height: 80 }}>
          <div
            className="absolute bottom-0 left-0 right-0 rounded-b"
            style={{ height: 8, background: colors.graphite, opacity: 0.18 }}
          />
          {/* Tronco forte */}
          <div
            className="absolute bottom-1"
            style={{
              left: '50%',
              width: 6,
              height: 50,
              background: colors.olive,
              transform: 'translateX(-50%)',
              borderRadius: 1,
            }}
          />
          {/* Copa */}
          <div
            className="absolute"
            style={{
              bottom: 40,
              left: '50%',
              width: 40,
              height: 34,
              background: colors.oliveLight,
              borderRadius: '50%',
              transform: 'translateX(-50%)',
              opacity: 0.9,
            }}
          />
          <div
            className="absolute"
            style={{
              bottom: 46,
              left: '30%',
              width: 22,
              height: 20,
              background: colors.olive,
              borderRadius: '50%',
              opacity: 0.7,
            }}
          />
        </div>
        <p className="text-[10px] mt-2 italic" style={{ color: colors.graphiteLight }}>
          A seiva circula.
        </p>
      </div>
    </div>
  );
}

export function Section6_NovaAlianca() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-6 py-14">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-xs uppercase tracking-widest mb-3"
        style={{ color: colors.olive, fontWeight: 600 }}
      >
        Nova Aliança
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold text-center"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        A Lei No Coração
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6 mb-8 h-px w-16"
        style={{ background: colors.olive }}
      />

      {/* Versículo — Jr 31:33 via Hb 8 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="max-w-xl mb-10"
      >
        <blockquote
          className="text-base md:text-lg leading-relaxed italic"
          style={{
            fontFamily: 'var(--font-playfair)',
            color: colors.graphite,
            borderLeft: `3px solid ${colors.olive}`,
            paddingLeft: '1.25rem',
            textAlign: 'left',
          }}
        >
          &ldquo;Porei as minhas leis na mente deles e sobre o seu{' '}
          <span style={{ color: colors.olive, fontWeight: 700, fontStyle: 'normal' }}>
            coração
          </span>{' '}
          as inscreverei.&rdquo;
        </blockquote>
        <p className="mt-2 text-sm text-right" style={{ color: colors.graphiteLight }}>
          — Hebreus 8:10 (citando Jeremias 31:33)
        </p>
      </motion.div>

      {/* Antes / depois */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex flex-col md:flex-row gap-3 w-full max-w-xl mb-10"
      >
        <div
          className="flex-1 rounded-xl p-4 text-center"
          style={{ background: colors.white, border: `1px solid ${colors.offWhiteDark}` }}
        >
          <p className="text-[10px] uppercase tracking-widest mb-2" style={{ color: colors.graphiteLight }}>
            Antiga
          </p>
          <p
            className="text-sm italic"
            style={{ fontFamily: 'var(--font-playfair)', color: colors.graphite }}
          >
            Em pedra. Fora.
            <br />
            Dever.
          </p>
        </div>
        <div className="flex items-center justify-center text-sm" style={{ color: colors.graphiteLight }}>
          →
        </div>
        <div
          className="flex-1 rounded-xl p-4 text-center"
          style={{
            background: colors.white,
            border: `1.5px solid ${colors.olive}`,
            boxShadow: `0 2px 12px rgba(122,139,92,0.12)`,
          }}
        >
          <p className="text-[10px] uppercase tracking-widest mb-2" style={{ color: colors.olive }}>
            Nova
          </p>
          <p
            className="text-sm italic"
            style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
          >
            No coração. Dentro.
            <br />
            Natureza.
          </p>
        </div>
      </motion.div>

      {/* Analogia: planta + estaca */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="w-full max-w-xl"
      >
        <div
          className="rounded-2xl p-5 md:p-6"
          style={{
            background: colors.white,
            border: `1px solid ${colors.offWhiteDark}`,
          }}
        >
          <p
            className="text-xs uppercase tracking-widest text-center mb-3"
            style={{ color: colors.olive, fontWeight: 600 }}
          >
            A Planta e a Estaca
          </p>

          <StakePlantIllustration />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-xs md:text-sm">
            <div
              className="rounded-lg p-3"
              style={{ background: `${colors.terracotta}0D`, borderLeft: `3px solid ${colors.terracotta}` }}
            >
              <p className="font-semibold mb-1" style={{ color: colors.terracotta }}>
                A estaca = sistema cerimonial
              </p>
              <p style={{ color: colors.graphite }}>
                Segurou a árvore enquanto crescia. Cristo veio — a estaca foi retirada.
              </p>
            </div>
            <div
              className="rounded-lg p-3"
              style={{ background: `${colors.olive}0D`, borderLeft: `3px solid ${colors.olive}` }}
            >
              <p className="font-semibold mb-1" style={{ color: colors.olive }}>
                A seiva = lei moral
              </p>
              <p style={{ color: colors.graphite }}>
                Circula dentro. É o que faz a árvore ser árvore. Não foi removida.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
