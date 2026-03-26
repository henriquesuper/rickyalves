'use client';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as Slides from './slides';
import { colors, getStratum, STRATA, DepthIndicator } from './slides/shared';

// Transforma os slides exportados do index.js em um array ordenado numericamente
const slideKeys = Object.keys(Slides)
    .filter(key => key.startsWith('Slide'))
    .sort();

export default function Licao11Viewer() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [showCrack, setShowCrack] = useState(false);
    const prevStratumRef = useRef(getStratum(0));
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

    // Detectar mudança de estrato para animação de crack
    useEffect(() => {
        const newStratum = getStratum(currentSlideIndex);
        if (newStratum.id !== prevStratumRef.current.id) {
            setShowCrack(true);
            const timer = setTimeout(() => setShowCrack(false), 800);
            prevStratumRef.current = newStratum;
            return () => clearTimeout(timer);
        }
    }, [currentSlideIndex]);

    // Fullscreen (F) + navegação por teclado
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
    const currentStratum = getStratum(currentSlideIndex);
    const displayNumber = currentSlideIndex + 1;

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ background: colors.bgExcavation }}>
            {/* Background gradient por estrato */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStratum.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="fixed inset-0 z-0"
                    style={{ background: currentStratum.gradient }}
                />
            </AnimatePresence>

            {/* Crack transition entre estratos */}
            <AnimatePresence>
                {showCrack && (
                    <motion.div
                        className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Linha de rachadura */}
                        <motion.div
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            className="w-full h-0.5 absolute"
                            style={{
                                background: `linear-gradient(to right, transparent, ${colors.excavationAmber}80, ${colors.excavationAmber}, ${colors.excavationAmber}80, transparent)`,
                            }}
                        />
                        {/* Partículas de terra */}
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full"
                                style={{
                                    width: 3 + (i % 3),
                                    height: 3 + (i % 3),
                                    background: currentStratum.particleColor,
                                }}
                                initial={{ x: 0, y: 0, opacity: 1 }}
                                animate={{
                                    x: (i % 2 === 0 ? 1 : -1) * (30 + i * 15),
                                    y: (i < 4 ? -1 : 1) * (20 + i * 8),
                                    opacity: 0,
                                }}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.03 }}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Depth Indicator */}
            <DepthIndicator currentSlide={currentSlideIndex} totalSlides={totalSlides} />

            {/* Slide Content - Transições VERTICAIS */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlideIndex}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -60 }}
                    transition={{ duration: 0.35 }}
                    className="min-h-screen relative z-10"
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
                    borderTop: `1px solid ${colors.excavationAmber}20`,
                    backdropFilter: 'blur(8px)',
                }}
            >
                <button
                    onClick={prevSlide}
                    disabled={currentSlideIndex === 0}
                    className="px-4 py-2 rounded text-sm font-medium transition-opacity"
                    style={{
                        background: colors.bgExcavation,
                        color: colors.textLight,
                        border: `1px solid ${colors.excavationAmber}30`,
                        opacity: currentSlideIndex === 0 ? 0.3 : 1,
                        cursor: currentSlideIndex === 0 ? 'default' : 'pointer',
                    }}
                >
                    ↑ Subir
                </button>
                <div className="flex flex-col items-center">
                    <span className="text-sm font-semibold tracking-wider" style={{ color: colors.excavationAmber }}>
                        {displayNumber} / {totalSlides}
                    </span>
                    <span className="text-xs" style={{ color: colors.textMuted }}>
                        {currentStratum.label} · {currentStratum.depth} · Setas ↕ para navegar · "F" fullscreen
                    </span>
                </div>
                <button
                    onClick={nextSlide}
                    disabled={currentSlideIndex === totalSlides - 1}
                    className="px-4 py-2 rounded text-sm font-medium transition-opacity"
                    style={{
                        background: colors.excavationAmber,
                        color: colors.bgExcavation,
                        opacity: currentSlideIndex === totalSlides - 1 ? 0.3 : 1,
                        cursor: currentSlideIndex === totalSlides - 1 ? 'default' : 'pointer',
                    }}
                >
                    Descer ↓
                </button>
            </div>
        </div>
    );
}
