'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/useLanguage';
import { KINGDOMS } from '../data/kingdoms';

const SYMBOL_ICONS = {
  gold_head: '👑',
  silver_chest: '🛡️',
  bronze_belly: '⚔️',
  iron_legs: '🏛️',
  iron_clay_feet: '🧱',
  stone: '🪨',
  lion: '🦁',
  bear: '🐻',
  leopard: '🐆',
  terribleBeast: '👹',
  tenHorns: '🔱',
  ancientOfDays: '✨',
  ram: '🐏',
  goat: '🐐',
  littleHorn: '📯',
  kingOfSouth: '⬇️',
  kingOfNorth: '⬆️',
  michaelStands: '⚡',
};

function KingdomBadge({ kingdom, active, highlighted }) {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`
        flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium
        transition-all duration-300 border
        ${highlighted
          ? 'border-amber-400/50 bg-amber-500/15 text-amber-300'
          : active
            ? 'border-white/10 bg-white/5 text-white/80'
            : 'border-white/5 bg-white/2 text-white/30'}
      `}
    >
      <span
        className="w-2.5 h-2.5 rounded-full shrink-0"
        style={{ backgroundColor: active ? kingdom.color : kingdom.colorDim }}
      />
      <span>{t.kingdoms[kingdom.id]}</span>
      <span className="text-white/30">{kingdom.dateStart}</span>
    </motion.div>
  );
}

export default function StepContent({ step }) {
  const { t } = useLanguage();
  const stepText = t.steps[step.key];
  const activeKingdoms = step.activeKingdoms || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="max-w-2xl mx-auto text-center space-y-3"
    >
      {/* Step title */}
      <div>
        <p className="text-xs uppercase tracking-widest text-amber-500/60 mb-1">
          {stepText.subtitle}
        </p>
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          {stepText.title}
        </h2>
      </div>

      {/* Step description */}
      <p className="text-sm text-white/60 leading-relaxed max-w-lg mx-auto">
        {stepText.text}
      </p>

      {/* Kingdom badges */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 pt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {KINGDOMS.filter(k => k.id !== 'godsKingdom' || activeKingdoms.includes('godsKingdom')).map((kingdom) => (
          <KingdomBadge
            key={kingdom.id}
            kingdom={kingdom}
            active={activeKingdoms.includes(kingdom.id)}
            highlighted={step.highlightKingdoms?.includes(kingdom.id)}
          />
        ))}
      </motion.div>

      {/* Symbol row for steps that show new chapter symbols */}
      {step.showChapters.length > 1 && step.id <= 3 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-3 pt-2"
        >
          {activeKingdoms.filter(id => id !== 'godsKingdom').map((kingdomId) => {
            const kingdom = KINGDOMS.find(k => k.id === kingdomId);
            if (!kingdom) return null;
            const latestChapter = step.showChapters[step.showChapters.length - 1];
            const symbolKey = kingdom[latestChapter];
            if (!symbolKey) return null;

            const symbolMap = latestChapter === 'daniel7' ? t.daniel7Symbols
              : latestChapter === 'daniel8' ? t.daniel8Symbols
              : latestChapter === 'daniel11' ? t.daniel11Symbols
              : null;

            if (!symbolMap || !symbolMap[symbolKey]) return null;

            return (
              <div
                key={`${kingdomId}-${latestChapter}`}
                className="flex flex-col items-center gap-1 text-xs"
              >
                <span className="text-lg">{SYMBOL_ICONS[symbolKey] || '•'}</span>
                <span className="text-white/40 max-w-[80px] text-center leading-tight">
                  {symbolMap[symbolKey]}
                </span>
              </div>
            );
          })}
        </motion.div>
      )}
    </motion.div>
  );
}
