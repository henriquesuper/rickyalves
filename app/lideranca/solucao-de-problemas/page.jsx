'use client';
import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as Slides from './slides';
import { colors, fonts } from './slides/shared';
import { movements } from './notes';

const slideKeys = Object.keys(Slides)
    .filter(key => key.startsWith('Slide'))
    .sort();

function movementFor(index0) {
    const n = index0 + 1;
    const mov = movements.find(m => n >= m.from && n <= m.to) || movements[0];
    const accent = mov.label === 'Pausa' ? colors.teal : colors.amber;
    return { ...mov, accent };
}

export default function SolucaoProblemasViewer() {
    const [slide, setSlide] = useState(0);
    const [step, setStep] = useState(0);
    const total = slideKeys.length;

    const stepsFor = useCallback(
        (i) => (Slides[slideKeys[i]] && Slides[slideKeys[i]].steps) || 1,
        [],
    );

    const goSlide = useCallback((i, atEnd = false) => {
        const clamped = Math.max(0, Math.min(total - 1, i));
        setSlide(clamped);
        setStep(atEnd ? stepsFor(clamped) - 1 : 0);
    }, [total, stepsFor]);

    const nextBeat = useCallback(() => {
        setStep(prev => {
            if (prev < stepsFor(slide) - 1) return prev + 1;
            if (slide < total - 1) { setSlide(slide + 1); return 0; }
            return prev;
        });
    }, [slide, total, stepsFor]);

    const prevBeat = useCallback(() => {
        setStep(prev => {
            if (prev > 0) return prev - 1;
            if (slide > 0) { const target = slide - 1; setSlide(target); return stepsFor(target) - 1; }
            return prev;
        });
    }, [slide, stepsFor]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'f' || e.key === 'F') {
                if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
                else document.exitFullscreen?.();
                return;
            }
            switch (e.key) {
                case ' ':
                case 'ArrowDown':
                case 'PageDown':
                    e.preventDefault(); nextBeat(); break;
                case 'ArrowUp':
                case 'PageUp':
                case 'Backspace':
                    e.preventDefault(); prevBeat(); break;
                case 'ArrowRight':
                    e.preventDefault(); goSlide(slide + 1, false); break;
                case 'ArrowLeft':
                    e.preventDefault(); goSlide(slide - 1, true); break;
                case 'Home':
                    e.preventDefault(); goSlide(0, false); break;
                case 'End':
                    e.preventDefault(); goSlide(total - 1, true); break;
                default: break;
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [slide, total, nextBeat, prevBeat, goSlide]);

    const SlideComponent = Slides[slideKeys[slide]];
    const totalSteps = stepsFor(slide);
    const mov = movementFor(slide);

    return (
        <div
            className="min-h-screen relative"
            style={{ background: colors.base, color: colors.textBody, fontFamily: fonts.body }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={slide}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="min-h-screen relative z-10"
                >
                    {SlideComponent ? (
                        <SlideComponent step={step} />
                    ) : (
                        <div className="min-h-screen flex items-center justify-center">
                            <p style={{ color: colors.textMuted }}>Carregando slide...</p>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Barra inferior */}
            <div
                className="fixed bottom-0 left-0 right-0 z-50 px-4 md:px-6 py-3 flex items-center justify-between gap-4"
                style={{
                    background: `${colors.baseDeep}EE`,
                    borderTop: `1px solid ${colors.line}`,
                    backdropFilter: 'blur(10px)',
                }}
            >
                <button
                    onClick={() => goSlide(slide - 1, true)}
                    disabled={slide === 0}
                    className="px-3 md:px-4 py-2 rounded text-sm transition-opacity"
                    style={{
                        background: 'transparent',
                        color: colors.textBody,
                        border: `1px solid ${colors.line}`,
                        opacity: slide === 0 ? 0.3 : 1,
                        cursor: slide === 0 ? 'default' : 'pointer',
                        fontFamily: fonts.mono,
                        letterSpacing: '0.12em',
                    }}
                >
                    ← slide
                </button>

                <div className="flex flex-col items-center gap-1.5 min-w-0">
                    <span
                        className="text-[11px] md:text-xs truncate"
                        style={{ color: mov.accent, fontFamily: fonts.mono, letterSpacing: '0.18em', textTransform: 'uppercase' }}
                    >
                        Mov. {mov.roman} · {mov.label} — {slide + 1}/{total}
                    </span>
                    {totalSteps > 1 && (
                        <div className="flex items-center gap-1.5">
                            {Array.from({ length: totalSteps }).map((_, i) => (
                                <span
                                    key={i}
                                    style={{
                                        width: i === step ? 16 : 7,
                                        height: 7,
                                        borderRadius: 999,
                                        background: i <= step ? mov.accent : colors.line,
                                        transition: 'all 0.25s ease',
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <button
                    onClick={nextBeat}
                    disabled={slide === total - 1 && step === totalSteps - 1}
                    className="px-3 md:px-4 py-2 rounded text-sm transition-opacity"
                    style={{
                        background: mov.accent,
                        color: colors.baseDeep,
                        border: `1px solid ${mov.accent}`,
                        opacity: slide === total - 1 && step === totalSteps - 1 ? 0.3 : 1,
                        cursor: slide === total - 1 && step === totalSteps - 1 ? 'default' : 'pointer',
                        fontFamily: fonts.mono,
                        letterSpacing: '0.12em',
                        fontWeight: 600,
                    }}
                >
                    {step < totalSteps - 1 ? 'revelar →' : 'próximo →'}
                </button>
            </div>
        </div>
    );
}
