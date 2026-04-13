'use client';
import { motion } from 'framer-motion';
import { colors } from './shared';

const comparisonData = [
  { label: 'Pergunta', paulo: 'O que me salva?', tiago: 'Como sei que minha fé é real?' },
  { label: 'Resposta', paulo: 'Fé, não obras', tiago: 'Fé que produz obras' },
  { label: 'Ênfase', paulo: 'A raiz (graça)', tiago: 'O fruto (ação)' },
  { label: 'Combate', paulo: 'Legalismo', tiago: 'Presunção' },
  { label: 'Analogia', paulo: 'A árvore é plantada por Deus', tiago: 'Uma árvore viva dá fruto' },
];

function ComparisonCard({ title, accentColor, data, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className="flex-1 rounded-2xl p-5 md:p-6"
      style={{
        background: colors.white,
        borderTop: `3px solid ${accentColor}`,
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      }}
    >
      <p
        className="text-lg font-semibold mb-4"
        style={{ fontFamily: 'var(--font-playfair)', color: accentColor }}
      >
        {title}
      </p>
      <div className="space-y-3">
        {data.map((item, i) => (
          <div key={i}>
            <p className="text-[11px] uppercase tracking-wider mb-0.5" style={{ color: colors.graphiteLight }}>
              {item.label}
            </p>
            <p className="text-sm" style={{ color: colors.graphite }}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Section5_Sintese() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        A Síntese
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6 mb-10 h-px w-16"
        style={{ background: colors.gold }}
      />

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl mb-10">
        <ComparisonCard
          title="Paulo — Efésios 2"
          accentColor={colors.blue}
          delay={0.8}
          data={comparisonData.map((row) => ({ label: row.label, value: row.paulo }))}
        />
        <ComparisonCard
          title="Tiago — Tiago 2"
          accentColor={colors.olive}
          delay={1.2}
          data={comparisonData.map((row) => ({ label: row.label, value: row.tiago }))}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="max-w-xl space-y-3"
      >
        <blockquote
          className="text-base md:text-lg italic leading-relaxed"
          style={{
            fontFamily: 'var(--font-playfair)',
            color: colors.graphite,
            borderLeft: `3px solid ${colors.blue}`,
            paddingLeft: '1rem',
            textAlign: 'left',
          }}
        >
          &ldquo;Você não precisa produzir fruto para ser plantado.&rdquo;
          <span className="block text-xs mt-1 not-italic" style={{ color: colors.graphiteLight }}>
            — Paulo
          </span>
        </blockquote>

        <blockquote
          className="text-base md:text-lg italic leading-relaxed"
          style={{
            fontFamily: 'var(--font-playfair)',
            color: colors.graphite,
            borderLeft: `3px solid ${colors.olive}`,
            paddingLeft: '1rem',
            textAlign: 'left',
          }}
        >
          &ldquo;Se foi plantado de verdade, vai produzir fruto.&rdquo;
          <span className="block text-xs mt-1 not-italic" style={{ color: colors.graphiteLight }}>
            — Tiago
          </span>
        </blockquote>
      </motion.div>
    </div>
  );
}
