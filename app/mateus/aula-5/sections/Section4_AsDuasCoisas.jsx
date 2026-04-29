'use client';
import { motion } from 'framer-motion';
import { colors } from './shared';

function AttackArrow({ direction = 'left', delay = 0 }) {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6 }}
      width="36"
      height="20"
      viewBox="0 0 36 20"
      style={{
        transform: direction === 'right' ? 'scaleX(-1)' : 'none',
      }}
    >
      <line
        x1="32"
        y1="10"
        x2="6"
        y2="10"
        stroke={colors.terracotta}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <polyline
        points="11,5 4,10 11,15"
        fill="none"
        stroke={colors.terracotta}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

function AttackedBox({ label, content, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7 }}
      className="relative rounded-xl p-4 text-center"
      style={{
        width: 160,
        background: colors.white,
        border: `1.5px dashed ${colors.terracotta}`,
        boxShadow: `0 2px 12px rgba(196,122,90,0.10)`,
      }}
    >
      <p
        className="text-[10px] uppercase tracking-widest mb-2"
        style={{ color: colors.terracotta, fontWeight: 700 }}
      >
        {label}
      </p>
      <p
        className="text-sm md:text-base font-semibold mb-1.5"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        {content.title}
      </p>
      <p className="text-[11px] md:text-xs italic" style={{ color: colors.graphite }}>
        {content.desc}
      </p>
    </motion.div>
  );
}

function ProtectedCenter() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7, duration: 0.9, ease: 'easeOut' }}
      className="relative flex flex-col items-center"
    >
      {/* Glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at center, ${colors.goldSoft} 0%, transparent 70%)`,
          transform: 'scale(2)',
          zIndex: -1,
        }}
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <p
        className="text-[10px] uppercase tracking-widest mb-2"
        style={{ color: colors.gold, fontWeight: 700 }}
      >
        O Que Ele NÃO Ataca
      </p>

      <div
        className="relative rounded-xl p-5 text-center"
        style={{
          width: 200,
          background: `linear-gradient(180deg, ${colors.goldLight} 0%, ${colors.gold} 100%)`,
          border: `2px solid ${colors.gold}`,
          boxShadow: `0 8px 28px rgba(212,168,83,0.40), inset 0 2px 4px rgba(255,255,255,0.35)`,
        }}
      >
        <p
          className="text-base md:text-lg font-semibold"
          style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
        >
          Lei Moral
        </p>
        <p
          className="text-xs mt-1 italic"
          style={{ color: colors.charcoal, opacity: 0.85 }}
        >
          O caráter de Deus
        </p>
        <div
          className="mt-3 pt-3 text-[11px] italic"
          style={{
            borderTop: `1px solid rgba(45,41,38,0.18)`,
            color: colors.charcoal,
          }}
        >
          &ldquo;Santa, justa e boa.&rdquo;
          <br />
          <span className="not-italic font-mono text-[10px]" style={{ opacity: 0.7 }}>
            Romanos 7:12
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function Section4_AsDuasCoisas() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold text-center"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        As Duas Coisas Que Paulo Ataca
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-2 text-sm md:text-base italic text-center max-w-xl"
        style={{ color: colors.graphiteLight }}
      >
        Paulo nunca ataca a lei moral.
        <br />
        Ataca dois <em>abusos</em> dela.
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6 mb-12 h-px w-16"
        style={{ background: colors.gold }}
      />

      {/* Composição central com setas */}
      <div className="relative w-full max-w-3xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-3 mb-12">
        <AttackedBox
          label="Ataque 1"
          delay={1.2}
          content={{
            title: 'Legalismo',
            desc: 'Usar a lei pra ganhar salvação.',
          }}
        />

        <div className="hidden md:flex items-center">
          <AttackArrow direction="left" delay={1.8} />
        </div>

        <ProtectedCenter />

        <div className="hidden md:flex items-center">
          <AttackArrow direction="right" delay={1.8} />
        </div>

        <AttackedBox
          label="Ataque 2"
          delay={1.5}
          content={{
            title: 'Imposição Cerimonial',
            desc: 'Forçar gentios a viver como judeus.',
          }}
        />
      </div>

      <motion.blockquote
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="max-w-xl text-base md:text-lg italic leading-relaxed text-center px-4"
        style={{
          fontFamily: 'var(--font-playfair)',
          color: colors.graphite,
          borderTop: `1px solid ${colors.offWhiteDark}`,
          paddingTop: '1.25rem',
        }}
      >
        Paulo não ataca categorias.
        <br />
        Ataca <span style={{ color: colors.terracotta, fontStyle: 'normal', fontWeight: 700 }}>abusos</span>.
      </motion.blockquote>
    </div>
  );
}
