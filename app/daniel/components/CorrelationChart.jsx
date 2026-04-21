'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n/useLanguage';
import { KINGDOMS } from '../data/kingdoms';
import { CHAPTERS } from '../data/chapters';

const CHAPTER_ORDER = ['daniel2', 'daniel7', 'daniel8', 'daniel11'];

function getSymbolLabel(t, chapterId, symbolKey) {
  if (!symbolKey) return null;
  const map = chapterId === 'daniel2' ? t.daniel2Symbols
    : chapterId === 'daniel7' ? t.daniel7Symbols
    : chapterId === 'daniel8' ? t.daniel8Symbols
    : chapterId === 'daniel11' ? t.daniel11Symbols
    : null;
  return map?.[symbolKey] || null;
}

function CorrelationCell({ chapterId, kingdomId, active, highlighted, showChapters }) {
  const { t } = useLanguage();
  const chapter = CHAPTERS[chapterId];
  if (!chapter) return null;
  const symbolKey = chapter.symbols[kingdomId];
  const label = getSymbolLabel(t, chapterId, symbolKey);
  const isVisible = showChapters.includes(chapterId);
  const kingdom = KINGDOMS.find(k => k.id === kingdomId);

  if (!isVisible) {
    return <div className="h-8 rounded bg-white/2" />;
  }

  if (!label) {
    return (
      <div className="h-8 rounded bg-white/2 flex items-center justify-center">
        <span className="text-white/10 text-[10px]">—</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`
        h-8 rounded flex items-center justify-center px-1.5 text-[10px] leading-tight text-center
        transition-all duration-300 border
        ${highlighted
          ? 'border-amber-400/40 bg-amber-500/15 text-amber-200'
          : active
            ? 'border-white/10 bg-white/5 text-white/80'
            : 'border-white/5 bg-white/3 text-white/30'}
      `}
      style={highlighted ? { borderColor: `${kingdom?.color}40` } : undefined}
    >
      <span className="truncate">{label}</span>
    </motion.div>
  );
}

export default function CorrelationChart({
  showChapters = [],
  activeKingdoms = [],
  highlightKingdoms = [],
  compact = false,
}) {
  const { t } = useLanguage();
  const visibleChapters = CHAPTER_ORDER.filter(c => showChapters.includes(c));
  const displayKingdoms = KINGDOMS.filter(k =>
    k.id !== 'godsKingdom' || activeKingdoms.includes('godsKingdom')
  );

  if (compact) {
    return (
      <div className="rounded-xl border border-white/5 bg-white/2 overflow-hidden">
        <div className="px-3 py-2 border-b border-white/5">
          <p className="text-[10px] uppercase tracking-widest text-amber-500/60 font-medium">
            {t.ui.correlationTitle}
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="border-b border-white/5">
                <th className="py-1.5 px-2 text-left text-white/30 font-medium w-20" />
                {visibleChapters.map(ch => (
                  <th key={ch} className="py-1.5 px-1 text-center text-white/40 font-medium">
                    {t.chapters[ch]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayKingdoms.map((kingdom) => {
                const isActive = activeKingdoms.includes(kingdom.id);
                const isHl = highlightKingdoms?.includes(kingdom.id);
                return (
                  <tr key={kingdom.id} className="border-b border-white/3">
                    <td className="py-1 px-2">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: isActive ? kingdom.color : kingdom.colorDim }}
                        />
                        <span className={isHl ? 'text-amber-300' : isActive ? 'text-white/70' : 'text-white/30'}>
                          {t.kingdoms[kingdom.id]}
                        </span>
                      </div>
                    </td>
                    {visibleChapters.map(ch => (
                      <td key={ch} className="py-1 px-1">
                        <CorrelationCell
                          chapterId={ch}
                          kingdomId={kingdom.id}
                          active={isActive}
                          highlighted={isHl}
                          showChapters={showChapters}
                        />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-[10px] uppercase tracking-widest text-amber-500/60 font-medium">
        {t.ui.correlationTitle}
      </p>

      {/* Column headers */}
      <div className="grid gap-1" style={{ gridTemplateColumns: `100px repeat(${visibleChapters.length}, 1fr)` }}>
        <div />
        {visibleChapters.map(ch => (
          <motion.div
            key={ch}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-[10px] text-white/40 font-medium py-1"
          >
            {t.chapters[ch]}
          </motion.div>
        ))}
      </div>

      {/* Rows */}
      <AnimatePresence>
        {displayKingdoms.map((kingdom, idx) => {
          const isActive = activeKingdoms.includes(kingdom.id);
          const isHl = highlightKingdoms?.includes(kingdom.id);

          return (
            <motion.div
              key={kingdom.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="grid gap-1 items-center"
              style={{ gridTemplateColumns: `100px repeat(${visibleChapters.length}, 1fr)` }}
            >
              {/* Kingdom label */}
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0 transition-colors duration-300"
                  style={{ backgroundColor: isActive ? kingdom.color : kingdom.colorDim }}
                />
                <div>
                  <p className={`text-xs font-medium leading-tight transition-colors duration-300
                    ${isHl ? 'text-amber-300' : isActive ? 'text-white/80' : 'text-white/30'}`}>
                    {t.kingdoms[kingdom.id]}
                  </p>
                  <p className="text-[9px] text-white/20 leading-tight">
                    {kingdom.dateStart}
                  </p>
                </div>
              </div>

              {/* Symbol cells */}
              {visibleChapters.map(ch => (
                <CorrelationCell
                  key={ch}
                  chapterId={ch}
                  kingdomId={kingdom.id}
                  active={isActive}
                  highlighted={isHl}
                  showChapters={showChapters}
                />
              ))}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
