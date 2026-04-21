'use client';

import { useState, useCallback, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/useLanguage';
import { KINGDOMS } from '../data/kingdoms';
import { TIME_PROPHECIES } from '../data/timeProphecies';
import CorrelationChart from './CorrelationChart';
import TimelineVisualization from './TimelineVisualization';

const Statue3D = lazy(() => import('./Statue3D'));

const ALL_CHAPTERS = ['daniel2', 'daniel7', 'daniel8', 'daniel11'];
const ALL_KINGDOM_IDS = KINGDOMS.map(k => k.id);
const ALL_PROPHECY_IDS = TIME_PROPHECIES.map(p => p.id);

function ToggleChip({ label, active, color, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`
        px-2.5 py-1 text-[11px] font-medium rounded-full transition-all duration-200 border
        ${active
          ? 'text-white border-white/20'
          : 'text-white/30 border-white/5 hover:border-white/10 hover:text-white/50'}
      `}
      style={active ? { backgroundColor: `${color}20`, borderColor: `${color}40` } : undefined}
    >
      {active && (
        <span className="inline-block w-1.5 h-1.5 rounded-full mr-1.5" style={{ backgroundColor: color }} />
      )}
      {label}
    </button>
  );
}

export default function ExplorerMode() {
  const { t } = useLanguage();

  const [activeChapters, setActiveChapters] = useState([...ALL_CHAPTERS]);
  const [activeKingdoms, setActiveKingdoms] = useState([...ALL_KINGDOM_IDS]);
  const [activeProphecies, setActiveProphecies] = useState([...ALL_PROPHECY_IDS]);

  const toggleChapter = useCallback((ch) => {
    setActiveChapters(prev =>
      prev.includes(ch) ? prev.filter(c => c !== ch) : [...prev, ch]
    );
  }, []);

  const toggleKingdom = useCallback((id) => {
    setActiveKingdoms(prev =>
      prev.includes(id) ? prev.filter(k => k !== id) : [...prev, id]
    );
  }, []);

  const toggleProphecy = useCallback((id) => {
    setActiveProphecies(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  }, []);

  const resetAll = useCallback(() => {
    setActiveChapters([...ALL_CHAPTERS]);
    setActiveKingdoms([...ALL_KINGDOM_IDS]);
    setActiveProphecies([...ALL_PROPHECY_IDS]);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-3.5rem)]">
      {/* Left panel: Correlation chart */}
      <aside className="lg:w-80 xl:w-96 border-r border-white/5 overflow-y-auto p-4">
        <CorrelationChart
          showChapters={activeChapters}
          activeKingdoms={activeKingdoms}
          highlightKingdoms={[]}
        />
      </aside>

      {/* Center: 3D statue */}
      <div className="flex-1 flex flex-col">
        {/* Toggle controls */}
        <div className="p-3 border-b border-white/5 space-y-2">
          {/* Chapters */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[9px] uppercase tracking-widest text-white/20 w-16 shrink-0">
              Chapters
            </span>
            {ALL_CHAPTERS.map(ch => (
              <ToggleChip
                key={ch}
                label={t.chapters[ch]}
                active={activeChapters.includes(ch)}
                color="#FFD700"
                onToggle={() => toggleChapter(ch)}
              />
            ))}
          </div>

          {/* Kingdoms */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[9px] uppercase tracking-widest text-white/20 w-16 shrink-0">
              Kingdoms
            </span>
            {KINGDOMS.map(k => (
              <ToggleChip
                key={k.id}
                label={t.kingdoms[k.id]}
                active={activeKingdoms.includes(k.id)}
                color={k.color}
                onToggle={() => toggleKingdom(k.id)}
              />
            ))}
          </div>

          {/* Prophecies */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[9px] uppercase tracking-widest text-white/20 w-16 shrink-0">
              Timelines
            </span>
            {TIME_PROPHECIES.map(p => (
              <ToggleChip
                key={p.id}
                label={t.prophecies[p.id]}
                active={activeProphecies.includes(p.id)}
                color={p.color}
                onToggle={() => toggleProphecy(p.id)}
              />
            ))}
            <button
              onClick={resetAll}
              className="ml-2 px-2.5 py-1 text-[10px] text-white/30 hover:text-white/60
                         rounded-full border border-white/5 hover:border-white/15 transition-all"
            >
              {t.ui.resetView}
            </button>
          </div>
        </div>

        {/* 3D canvas */}
        <div className="flex-1 min-h-[350px]">
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-32 h-64 rounded-lg bg-linear-to-b from-amber-500/20 via-gray-400/20 to-gray-600/20 animate-pulse" />
              </div>
            }
          >
            <Statue3D
              activeKingdoms={activeKingdoms}
              highlightKingdoms={[]}
              showRock={activeKingdoms.includes('godsKingdom')}
            />
          </Suspense>
        </div>
      </div>

      {/* Right panel: Timeline */}
      <aside className="lg:w-72 xl:w-80 border-l border-white/5 overflow-y-auto p-4">
        <TimelineVisualization visibleProphecies={activeProphecies} />
      </aside>
    </div>
  );
}
