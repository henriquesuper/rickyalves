'use client';
import { motion } from 'framer-motion';
import { colors } from './shared';

const evidences = [
  {
    ref: 'Atos 18:18',
    title: 'Voto de nazireu',
    desc: 'Prática judaica, depois da conversão.',
  },
  {
    ref: 'Atos 21:23-26',
    title: 'Rito de purificação no templo',
    desc: 'Pagou sacrifícios — anos depois da cruz.',
  },
  {
    ref: 'Atos 17:2',
    title: 'Sinagoga aos sábados',
    desc: '"Como tinha por costume, entrou… e por três sábados disputava com eles."',
  },
];

export function Section8_PauloContinuouGuardando() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-6 py-14">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-xs uppercase tracking-widest mb-3"
        style={{ color: colors.olive, fontWeight: 600 }}
      >
        Coerência
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold text-center"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        Paulo Continuou Guardando
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-2 text-sm md:text-base italic text-center max-w-xl"
        style={{ color: colors.graphiteLight }}
      >
        O homem que disse &ldquo;não estais debaixo da lei&rdquo;
        <br />
        continuou indo à sinagoga aos sábados.
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6 mb-10 h-px w-16"
        style={{ background: colors.olive }}
      />

      <div className="w-full max-w-xl space-y-3 mb-10">
        {evidences.map((item, i) => (
          <motion.div
            key={item.ref}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.25, duration: 0.6 }}
            className="rounded-xl px-4 py-3.5"
            style={{
              background: colors.white,
              border: `1px solid ${colors.offWhiteDark}`,
              borderLeft: `3px solid ${colors.olive}`,
            }}
          >
            <div className="flex items-baseline justify-between gap-3 mb-1">
              <p
                className="text-sm md:text-base font-semibold"
                style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
              >
                {item.title}
              </p>
              <p className="text-[10px] font-mono" style={{ color: colors.olive, fontWeight: 600 }}>
                {item.ref}
              </p>
            </div>
            <p className="text-xs md:text-sm italic" style={{ color: colors.graphite }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.blockquote
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="max-w-xl text-base md:text-lg leading-relaxed text-center px-4"
        style={{
          fontFamily: 'var(--font-playfair)',
          color: colors.graphite,
          borderTop: `1px solid ${colors.offWhiteDark}`,
          paddingTop: '1.25rem',
        }}
      >
        Liberdade da lei como{' '}
        <span style={{ color: colors.terracotta, fontWeight: 700 }}>
          sistema de salvação
        </span>
        <br className="hidden md:block" />{' '}
        ≠ rejeição da lei como{' '}
        <span style={{ color: colors.gold, fontWeight: 700 }}>
          expressão do caráter de Deus
        </span>
        .
      </motion.blockquote>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.8 }}
        className="mt-6 max-w-xl text-sm italic text-center"
        style={{ color: colors.graphiteLight, fontFamily: 'var(--font-playfair)' }}
      >
        Livre — e livre, continuou guardando.
        <br />
        Não por obrigação. Por coerência.
      </motion.p>
    </div>
  );
}
