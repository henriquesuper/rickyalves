'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as Slides from './slides';
import { colors } from './slides/shared';

// Transforma os slides exportados do index.js em um array ordenado numericamente
const slideKeys = Object.keys(Slides)
    .filter(key => key.startsWith('Slide'))
    .sort();

export default function Licao10Viewer() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const totalSlides = slideKeys.length;

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

    // Fullscreen (F) + navegação por teclado
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'f' || e.key === 'F') {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen?.();
                } else {
                    document.exitFullscreen?.();
                }
            } else if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
                e.preventDefault();
                nextSlide();
            } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
                e.preventDefault();
                prevSlide();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlideIndex, totalSlides]);

    const SlideComponent = slideKeys[currentSlideIndex] ? Slides[slideKeys[currentSlideIndex]] : null;
    const displayNumber = currentSlideIndex + 1;

    return (
        <div
            className="min-h-screen relative overflow-hidden"
            style={{ background: colors.bgDossier }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlideIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="min-h-screen"
                >
                    {SlideComponent ? (
                        <SlideComponent />
                    ) : (
                        <div className="min-h-screen flex items-center justify-center">
                            <p style={{ color: colors.textMedium }}>Carregando slide...</p>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Navegação on-screen */}
            <div
                className="fixed bottom-0 left-0 right-0 z-50 px-6 py-3 flex items-center justify-between"
                style={{
                    background: `${colors.bgSurface}EE`,
                    borderTop: `1px solid ${colors.amber}20`,
                }}
            >
                <button
                    onClick={prevSlide}
                    disabled={currentSlideIndex === 0}
                    className="px-4 py-2 rounded text-sm font-medium transition-opacity"
                    style={{
                        background: colors.bgDossier,
                        color: colors.textLight,
                        border: `1px solid ${colors.amber}30`,
                        opacity: currentSlideIndex === 0 ? 0.3 : 1,
                        cursor: currentSlideIndex === 0 ? 'default' : 'pointer',
                    }}
                >
                    ← Anterior
                </button>
                <div className="flex flex-col items-center">
                   <span className="text-sm font-semibold tracking-wider" style={{ color: colors.amber }}>
                       {displayNumber} / {totalSlides}
                   </span>
                   <span className="text-xs" style={{ color: colors.textMuted }}>
                       Setas para navegar • "F" para fullscreen
                   </span>
                </div>
                <button
                    onClick={nextSlide}
                    disabled={currentSlideIndex === totalSlides - 1}
                    className="px-4 py-2 rounded text-sm font-medium transition-opacity"
                    style={{
                        background: colors.amber,
                        color: colors.bgDossier,
                        opacity: currentSlideIndex === totalSlides - 1 ? 0.3 : 1,
                        cursor: currentSlideIndex === totalSlides - 1 ? 'default' : 'pointer',
                    }}
                >
                    Próximo →
                </button>
            </div>
        </div>
    );
}
