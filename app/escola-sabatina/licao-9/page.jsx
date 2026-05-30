'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as Slides from './slides';
import { colors, fonts, TOTAL_SLIDES } from './slides/shared';

const slideKeys = Object.keys(Slides)
    .filter(key => key.startsWith('Slide'))
    .sort();

function movementFor(index0) {
    if (index0 <= 2)  return { roman: '·',   label: 'Abertura',     accent: colors.gold };
    if (index0 <= 7)  return { roman: 'I',   label: 'O Pecado',     accent: colors.wine };
    if (index0 <= 12) return { roman: 'II',  label: 'A Lei',        accent: colors.lapis };
    if (index0 <= 18) return { roman: 'III', label: 'O Evangelho',  accent: colors.gold };
    if (index0 <= 27) return { roman: 'IV',  label: 'A Polêmica',   accent: colors.wine };
    return { roman: 'V', label: 'O Tribunal', accent: colors.gold };
}

export default function Licao9Viewer() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const totalSlides = slideKeys.length || TOTAL_SLIDES;

    const nextSlide = () => {
        if (currentSlideIndex < totalSlides - 1) {
            setCurrentSlideIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlideIndex > 0) {
            setCurrentSlideIndex(prev => prev - 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'f' || e.key === 'F') {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen?.();
                } else {
                    document.exitFullscreen?.();
                }
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
                e.preventDefault();
                nextSlide();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                prevSlide();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlideIndex, totalSlides]);

    const SlideComponent = slideKeys[currentSlideIndex] ? Slides[slideKeys[currentSlideIndex]] : null;
    const displayNumber = currentSlideIndex + 1;
    const mov = movementFor(currentSlideIndex);

    return (
        <div
            className="min-h-screen relative"
            style={{ background: colors.parchment, color: colors.inkDeep, fontFamily: fonts.body }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlideIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="min-h-screen relative z-10"
                >
                    {SlideComponent ? (
                        <SlideComponent slideIndex={currentSlideIndex} />
                    ) : (
                        <div className="min-h-screen flex items-center justify-center">
                            <p style={{ color: colors.inkMuted }}>Carregando slide...</p>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Barra inferior */}
            <div
                className="fixed bottom-0 left-0 right-0 z-50 px-6 py-3 flex items-center justify-between"
                style={{
                    background: `${colors.parchmentDeep}EE`,
                    borderTop: `1px solid ${colors.inkSoft}30`,
                    backdropFilter: 'blur(8px)',
                }}
            >
                <button
                    onClick={prevSlide}
                    disabled={currentSlideIndex === 0}
                    className="px-4 py-2 rounded text-sm transition-opacity"
                    style={{
                        background: 'transparent',
                        color: colors.inkDeep,
                        border: `1px solid ${colors.inkSoft}55`,
                        opacity: currentSlideIndex === 0 ? 0.3 : 1,
                        cursor: currentSlideIndex === 0 ? 'default' : 'pointer',
                        fontFamily: fonts.body,
                        fontVariant: 'small-caps',
                        letterSpacing: '0.15em',
                    }}
                >
                    ← Voltar
                </button>
                <div className="flex flex-col items-center">
                    <span
                        className="text-sm tracking-[0.2em]"
                        style={{
                            color: mov.accent,
                            fontFamily: fonts.body,
                            fontVariant: 'small-caps',
                        }}
                    >
                        Mov. {mov.roman} · {mov.label} — {displayNumber} / {totalSlides}
                    </span>
                    <span
                        className="text-[10px] mt-0.5"
                        style={{
                            color: colors.inkMuted,
                            fontFamily: fonts.body,
                            letterSpacing: '0.1em',
                        }}
                    >
                        Lição 9 · setas ↕ para navegar · &quot;F&quot; fullscreen
                    </span>
                </div>
                <button
                    onClick={nextSlide}
                    disabled={currentSlideIndex === totalSlides - 1}
                    className="px-4 py-2 rounded text-sm transition-opacity"
                    style={{
                        background: mov.accent,
                        color: colors.parchment,
                        border: `1px solid ${mov.accent}`,
                        opacity: currentSlideIndex === totalSlides - 1 ? 0.3 : 1,
                        cursor: currentSlideIndex === totalSlides - 1 ? 'default' : 'pointer',
                        fontFamily: fonts.body,
                        fontVariant: 'small-caps',
                        letterSpacing: '0.15em',
                    }}
                >
                    Avançar →
                </button>
            </div>
        </div>
    );
}
