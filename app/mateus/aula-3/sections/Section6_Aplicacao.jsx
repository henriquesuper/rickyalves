'use client';
import { motion } from 'framer-motion';
import { colors } from './shared';

const motivations = [
  {
    icon: '⛓️',
    label: 'Medo',
    category: 'Servidão',
    quote: 'Se eu não fizer, serei punido.',
    accentColor: colors.terracotta,
    highlighted: false,
  },
  {
    icon: '⚖️',
    label: 'Troca',
    category: 'Comércio',
    quote: 'Se eu fizer, serei abençoado.',
    accentColor: colors.blue,
    highlighted: false,
  },
  {
    icon: '❤️',
    label: 'Amor',
    category: 'Adoração',
    quote: 'Eu faço porque fui amado primeiro.',
    accentColor: colors.gold,
    highlighted: true,
  },
];

export function Section6_Aplicacao() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        O Teste da Motivação
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6 mb-10 h-px w-16"
        style={{ background: colors.gold }}
      />

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl">
        {motivations.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.3, duration: 0.7 }}
            className="flex-1 rounded-2xl p-5 md:p-6 text-center"
            style={{
              background: colors.white,
              border: m.highlighted
                ? `2px solid ${m.accentColor}`
                : `1px solid ${colors.offWhiteDark}`,
              boxShadow: m.highlighted
                ? `0 4px 20px rgba(212, 168, 83, 0.15)`
                : '0 2px 8px rgba(0,0,0,0.03)',
              transform: m.highlighted ? 'scale(1)' : 'scale(1)',
            }}
          >
            <span className="text-3xl block mb-3">{m.icon}</span>

            <p
              className="text-xs uppercase tracking-wider mb-2"
              style={{ color: m.accentColor }}
            >
              {m.label}
            </p>

            <p
              className="text-base italic mb-4 leading-relaxed"
              style={{
                fontFamily: 'var(--font-playfair)',
                color: colors.graphite,
              }}
            >
              &ldquo;{m.quote}&rdquo;
            </p>

            <p
              className="text-sm font-medium"
              style={{ color: m.accentColor }}
            >
              → {m.category}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
