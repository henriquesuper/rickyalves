'use client';

import { useLanguage } from '../i18n/useLanguage';
import { NARRATIVE_STEPS } from '../data/steps';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export default function StepNavigator({ currentStep, onStepChange, onSkipToExplorer }) {
  const { t } = useLanguage();
  const total = NARRATIVE_STEPS.length;
  const isFirst = currentStep === 1;
  const isLast = currentStep === total;
  const stepData = NARRATIVE_STEPS[currentStep - 1];
  const stepText = t.steps[stepData.key];

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      {/* Progress bar */}
      <div className="flex items-center gap-1.5 w-full max-w-md">
        {NARRATIVE_STEPS.map((s) => (
          <button
            key={s.id}
            onClick={() => onStepChange(s.id)}
            className={`
              h-1.5 flex-1 rounded-full transition-all duration-500
              ${s.id <= currentStep ? 'bg-amber-500' : 'bg-white/15'}
              ${s.id === currentStep ? 'scale-y-125' : ''}
              hover:bg-amber-400/60
            `}
            aria-label={`${t.ui.step} ${s.id}`}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between w-full max-w-lg">
        <button
          onClick={() => !isFirst && onStepChange(currentStep - 1)}
          disabled={isFirst}
          className="flex items-center gap-1 px-3 py-2 text-sm text-white/70 hover:text-white
                     disabled:opacity-20 disabled:cursor-default transition-all duration-200"
        >
          <IconChevronLeft size={16} />
          <span className="hidden sm:inline">{t.ui.previous}</span>
        </button>

        <div className="text-center">
          <p className="text-xs text-white/40">
            {t.ui.step} {currentStep} {t.ui.of} {total}
          </p>
          <p className="text-sm font-medium text-white">
            {stepText.title}
          </p>
        </div>

        {isLast ? (
          <button
            onClick={onSkipToExplorer}
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium
                       text-amber-400 hover:text-amber-300 transition-all duration-200"
          >
            <span>{t.ui.explore}</span>
            <IconChevronRight size={16} />
          </button>
        ) : (
          <button
            onClick={() => onStepChange(currentStep + 1)}
            className="flex items-center gap-1 px-3 py-2 text-sm text-white/70
                       hover:text-white transition-all duration-200"
          >
            <span className="hidden sm:inline">{t.ui.next}</span>
            <IconChevronRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
