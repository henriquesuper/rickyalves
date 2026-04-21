'use client';

import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n/useLanguage';
import { TIME_PROPHECIES } from '../data/timeProphecies';

const MIN_YEAR = -500;
const MAX_YEAR = 1900;
const RANGE = MAX_YEAR - MIN_YEAR;

function yearToY(year, height) {
  return ((year - MIN_YEAR) / RANGE) * height;
}

function formatYear(year) {
  if (year < 0) return `${Math.abs(year)} BC`;
  return `${year} AD`;
}

function ProphecyArc({ prophecy, svgHeight, index, t }) {
  const y1 = yearToY(prophecy.startYear, svgHeight);
  const y2 = yearToY(prophecy.endYear, svgHeight);
  const x = 60 + index * 55;
  const arcWidth = 20 + index * 8;

  const pathD = `M ${x} ${y1} C ${x + arcWidth} ${y1}, ${x + arcWidth} ${y2}, ${x} ${y2}`;

  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Arc path */}
      <motion.path
        d={pathD}
        fill="none"
        stroke={prophecy.color}
        strokeWidth={2}
        strokeOpacity={0.6}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: index * 0.15 }}
      />

      {/* Start dot */}
      <circle cx={x} cy={y1} r={3} fill={prophecy.color} opacity={0.8} />

      {/* End dot */}
      <circle cx={x} cy={y2} r={3} fill={prophecy.color} opacity={0.8} />

      {/* Duration label */}
      <text
        x={x + arcWidth + 4}
        y={(y1 + y2) / 2}
        fill={prophecy.color}
        fontSize={9}
        fontWeight="600"
        opacity={0.7}
        dominantBaseline="middle"
      >
        {t.prophecies[prophecy.id]}
      </text>

      {/* Subtitle */}
      <text
        x={x + arcWidth + 4}
        y={(y1 + y2) / 2 + 12}
        fill={prophecy.color}
        fontSize={7}
        opacity={0.4}
        dominantBaseline="middle"
      >
        {t.prophecySubtitles[prophecy.id]}
      </text>

      {/* Events */}
      {prophecy.events.map((evt) => {
        const ey = yearToY(evt.year, svgHeight);
        return (
          <g key={evt.id}>
            <line
              x1={x - 8}
              y1={ey}
              x2={x}
              y2={ey}
              stroke={prophecy.color}
              strokeWidth={1}
              strokeOpacity={0.3}
            />
            <text
              x={x - 12}
              y={ey}
              fill="white"
              fontSize={8}
              opacity={0.5}
              textAnchor="end"
              dominantBaseline="middle"
            >
              {formatYear(evt.year)}
            </text>
            <text
              x={x - 12}
              y={ey + 10}
              fill="white"
              fontSize={7}
              opacity={0.3}
              textAnchor="end"
              dominantBaseline="middle"
            >
              {t.events[evt.id]}
            </text>
          </g>
        );
      })}

      {/* Segments (70 weeks breakdown) */}
      {prophecy.segments.map((seg, si) => {
        const sy1 = yearToY(seg.startYear, svgHeight);
        const sy2 = yearToY(seg.endYear, svgHeight);
        return (
          <g key={si}>
            <line
              x1={x - 3}
              y1={sy1}
              x2={x - 3}
              y2={sy2}
              stroke={prophecy.color}
              strokeWidth={3}
              strokeOpacity={0.25}
            />
          </g>
        );
      })}
    </motion.g>
  );
}

export default function TimelineVisualization({ visibleProphecies = [] }) {
  const { t } = useLanguage();
  const svgHeight = 500;
  const svgWidth = 280;

  const propheciesToShow = useMemo(() =>
    TIME_PROPHECIES.filter(p => visibleProphecies.includes(p.id)),
    [visibleProphecies]
  );

  if (propheciesToShow.length === 0) return null;

  return (
    <div className="space-y-2">
      <p className="text-[10px] uppercase tracking-widest text-blue-400/50 font-medium">
        {t.prophecies.twentyThreeHundred && 'Prophetic Timelines'}
      </p>

      <div className="relative w-full overflow-hidden">
        <svg
          width="100%"
          height={svgHeight}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="select-none"
        >
          {/* Central timeline axis */}
          <line
            x1={50}
            y1={10}
            x2={50}
            y2={svgHeight - 10}
            stroke="white"
            strokeWidth={1}
            strokeOpacity={0.08}
          />

          {/* Era markers */}
          {[-457, 0, 538, 1798, 1844].map((year) => {
            const y = yearToY(year, svgHeight);
            return (
              <g key={year}>
                <line
                  x1={45}
                  y1={y}
                  x2={55}
                  y2={y}
                  stroke="white"
                  strokeWidth={1}
                  strokeOpacity={0.1}
                />
                <text
                  x={43}
                  y={y}
                  fill="white"
                  fontSize={7}
                  opacity={0.15}
                  textAnchor="end"
                  dominantBaseline="middle"
                >
                  {formatYear(year)}
                </text>
              </g>
            );
          })}

          <AnimatePresence>
            {propheciesToShow.map((prophecy, idx) => (
              <ProphecyArc
                key={prophecy.id}
                prophecy={prophecy}
                svgHeight={svgHeight}
                index={idx}
                t={t}
              />
            ))}
          </AnimatePresence>
        </svg>
      </div>
    </div>
  );
}
