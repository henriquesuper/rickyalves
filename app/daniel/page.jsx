'use client';

import { useState, useCallback, useEffect, Suspense, lazy } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageProvider, useLanguage } from './i18n/useLanguage';
import { NARRATIVE_STEPS } from './data/steps';
import LanguageSwitcher from './components/LanguageSwitcher';
import StepNavigator from './components/StepNavigator';
import StepContent from './components/StepContent';
import CorrelationChart from './components/CorrelationChart';
import TimelineVisualization from './components/TimelineVisualization';
import ExplorerMode from './components/ExplorerMode';

const Statue3D = lazy(() => import('./components/Statue3D'));

function StatueFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-64 rounded-lg bg-linear-to-b from-amber-500/20 via-gray-400/20 to-gray-600/20 animate-pulse" />
    </div>
  );
}

function DanielPage() {
  const { t, hydrated } = useLanguage();
  const [mode, setMode] = useState('narrative');
  const [currentStep, setCurrentStep] = useState(1);

  const stepData = NARRATIVE_STEPS[currentStep - 1];

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#explorer') {
      setMode('explorer');
    } else if (hash.startsWith('#step-')) {
      const num = parseInt(hash.replace('#step-', ''), 10);
      if (num >= 1 && num <= NARRATIVE_STEPS.length) {
        setCurrentStep(num);
        setMode('narrative');
      }
    }
  }, []);

  const updateHash = useCallback((newMode, step) => {
    const hash = newMode === 'explorer' ? '#explorer' : `#step-${step}`;
    window.history.replaceState(null, '', hash);
  }, []);

  const handleStepChange = useCallback((step) => {
    setCurrentStep(step);
    updateHash('narrative', step);
  }, [updateHash]);

  const handleSkipToExplorer = useCallback(() => {
    setMode('explorer');
    updateHash('explorer', currentStep);
  }, [currentStep, updateHash]);

  const handleBackToNarrative = useCallback(() => {
    setMode('narrative');
    updateHash('narrative', currentStep);
  }, [currentStep, updateHash]);

  useEffect(() => {
    const handler = (e) => {
      if (mode !== 'narrative') return;
      if (e.key === 'ArrowRight' && currentStep < NARRATIVE_STEPS.length) {
        handleStepChange(currentStep + 1);
      } else if (e.key === 'ArrowLeft' && currentStep > 1) {
        handleStepChange(currentStep - 1);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [mode, currentStep, handleStepChange]);

  if (!hydrated) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="w-32 h-64 rounded-lg bg-linear-to-b from-amber-500/20 via-gray-400/20 to-gray-600/20 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white cursor-auto overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <h1 className="text-sm font-semibold tracking-wide text-amber-500/90">
            {t.meta.title}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          {/* Mode toggle */}
          <div className="hidden sm:flex items-center gap-1 rounded-full bg-white/5 p-0.5 border border-white/10">
            <button
              onClick={handleBackToNarrative}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200
                ${mode === 'narrative' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/60'}`}
            >
              {t.ui.narrativeMode}
            </button>
            <button
              onClick={handleSkipToExplorer}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200
                ${mode === 'explorer' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/60'}`}
            >
              {t.ui.explorerMode}
            </button>
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      {/* Main content */}
      <main className="pt-14">
        <AnimatePresence mode="wait">
          {mode === 'narrative' ? (
            <motion.div
              key="narrative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:flex-row min-h-[calc(100vh-3.5rem)]"
            >
              {/* Left panel: correlation chart (desktop) */}
              <aside className="hidden lg:flex lg:w-72 xl:w-80 flex-col border-r border-white/5 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {stepData.showCorrelation && (
                    <motion.div
                      key={`corr-${currentStep}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="p-4"
                    >
                      <CorrelationChart
                        showChapters={stepData.showChapters}
                        activeKingdoms={stepData.activeKingdoms}
                        highlightKingdoms={stepData.highlightKingdoms}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </aside>

              {/* Center: 3D statue + step text */}
              <div className="flex-1 flex flex-col items-center">
                {/* 3D statue canvas */}
                <div className="w-full flex-1 min-h-[300px] lg:min-h-[400px] relative">
                  <Suspense fallback={<StatueFallback />}>
                    <Statue3D
                      activeKingdoms={stepData.activeKingdoms}
                      highlightKingdoms={stepData.highlightKingdoms}
                      showRock={currentStep === 7}
                    />
                  </Suspense>
                </div>

                {/* Step text */}
                <div className="w-full px-4 pb-2">
                  <AnimatePresence mode="wait">
                    <StepContent key={currentStep} step={stepData} />
                  </AnimatePresence>
                </div>

                {/* Mobile correlation chart */}
                <div className="lg:hidden w-full px-4 pb-2">
                  <AnimatePresence mode="wait">
                    {stepData.showCorrelation && (
                      <motion.div
                        key={`corr-mob-${currentStep}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CorrelationChart
                          showChapters={stepData.showChapters}
                          activeKingdoms={stepData.activeKingdoms}
                          highlightKingdoms={stepData.highlightKingdoms}
                          compact
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Step navigator */}
                <div className="w-full px-4 py-3 border-t border-white/5 bg-[#0a0a0f]/80 backdrop-blur-sm">
                  <StepNavigator
                    currentStep={currentStep}
                    onStepChange={handleStepChange}
                    onSkipToExplorer={handleSkipToExplorer}
                  />
                </div>
              </div>

              {/* Right panel: timeline (desktop) */}
              <aside className="hidden lg:flex lg:w-72 xl:w-80 flex-col border-l border-white/5 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {stepData.showProphecies.length > 0 && (
                    <motion.div
                      key={`time-${currentStep}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.4 }}
                      className="p-4"
                    >
                      <TimelineVisualization
                        visibleProphecies={stepData.showProphecies}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </aside>
            </motion.div>
          ) : (
            <motion.div
              key="explorer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ExplorerMode />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default function DanielPageWrapper() {
  return (
    <LanguageProvider>
      <DanielPage />
    </LanguageProvider>
  );
}
