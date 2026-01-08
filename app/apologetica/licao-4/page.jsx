'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApologeticaSync } from '../../hooks/useApologeticaSync';
import { colors } from './slides/shared';

// Import all slides
import {
    Slide01_Titulo,
    Slide02_Postura,
    Slide03_Criterios,
    Slide04_Panorama,
    Slide05_Vedas,
    Slide06_Budismo,
    Slide07_Alcorao,
    Slide08_Mormon,
    Slide09_Biblia,
    Slide10_Criterio1,
    Slide11_Criterio2,
    Slide12_Criterio3,
    Slide13_Criterio4,
    Slide14_Criterio5,
    Slide15_Sintese,
    Slide16_Conclusao,
    Slide17_Discussao,
    Slide18_Encerramento
} from './slides';

// Array of all slide components
const slides = [
    Slide01_Titulo,
    Slide02_Postura,
    Slide03_Criterios,
    Slide04_Panorama,
    Slide05_Vedas,
    Slide06_Budismo,
    Slide07_Alcorao,
    Slide08_Mormon,
    Slide09_Biblia,
    Slide10_Criterio1,
    Slide11_Criterio2,
    Slide12_Criterio3,
    Slide13_Criterio4,
    Slide14_Criterio5,
    Slide15_Sintese,
    Slide16_Conclusao,
    Slide17_Discussao,
    Slide18_Encerramento
];

// Componente de Reações Flutuantes
function FloatingReactions({ reactions }) {
    const reactionEmojis = {
        thinking: '🤔',
        agree: '✅',
        question: '❓',
        insight: '💡',
        study: '📖',
        key: '🎯'
    };

    return (
        <div className="fixed top-24 right-6 z-50 space-y-2">
            <AnimatePresence>
                {reactions.map((reaction, index) => (
                    <motion.div
                        key={reaction.id || index}
                        initial={{ opacity: 0, scale: 0, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0, x: 50 }}
                        className="bg-black/60 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 border border-[#C9A227]/30"
                    >
                        <span className="text-2xl">{reactionEmojis[reaction.type] || '✨'}</span>
                        {reaction.userName && (
                            <span className="text-sm text-[#E8D5B7]">{reaction.userName}</span>
                        )}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

export default function ApologeticaLicao4() {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const {
        currentSlide,
        totalSlides,
        connected,
        attendance,
        recentReactions
    } = useApologeticaSync('viewer');

    // Fullscreen toggle
    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    }, []);

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'f' || e.key === 'F') {
                toggleFullscreen();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [toggleFullscreen]);

    // Get current slide component
    const CurrentSlideComponent = slides[currentSlide - 1] || slides[0];

    return (
        <div
            className="min-h-screen overflow-hidden"
            style={{
                background: `linear-gradient(135deg, ${colors.bgDeep} 0%, ${colors.bgSurface} 50%, ${colors.bgDeep} 100%)`
            }}
        >
            {/* Indicador de conexão */}
            <div className="fixed top-4 left-4 z-50 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <div className={`w-2 h-2 rounded-full ${connected ? 'bg-green-400' : 'bg-red-400'} animate-pulse`} />
                <span className="text-xs text-white/70">
                    {attendance > 0 ? `${attendance} participante${attendance > 1 ? 's' : ''}` : 'Aguardando...'}
                </span>
            </div>

            {/* Indicador de slide */}
            <div className="fixed top-4 right-4 z-50 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-[#C9A227]/30">
                <span className="text-sm font-medium" style={{ color: colors.goldLight }}>
                    {currentSlide} / {slides.length}
                </span>
            </div>

            {/* Reações flutuantes */}
            <FloatingReactions reactions={recentReactions} />

            {/* Slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <CurrentSlideComponent />
                </motion.div>
            </AnimatePresence>

            {/* Instrução de fullscreen */}
            {!isFullscreen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
                >
                    <span className="text-sm text-white/60">
                        Pressione <kbd className="px-2 py-0.5 bg-white/10 rounded mx-1">F</kbd> para tela cheia
                    </span>
                </motion.div>
            )}
        </div>
    );
}
