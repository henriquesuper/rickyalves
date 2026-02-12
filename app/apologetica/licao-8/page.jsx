// Lição 8 — Viewer / Projetor
'use client';
import { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLicao8Sync } from './useLicao8Sync';
import {
    QuizSection,
    Slide01_Titulo,
    Slide02_APonte,
    Slide03_ProverbioItaliano,
    Slide04_Hebraico,
    Slide05_RaizesTriliteras,
    Slide06_HebraicoPensaCorpo,
    Slide07_GregoKoine,
    Slide08_Tetelestai,
    Slide09_QuatroAmores,
    Slide10_ProblemaFundamental,
    Slide11_Espectro,
    Slide12_FormalVsDinamica,
    Slide13_Filipenses,
    Slide14_OQueIssoMostra,
    Slide15_Dossie,
    Slide16_Nephesh,
    Slide17_PorQueImporta,
    Slide18_Golias,
    Slide19_YHWH,
    Slide20_OQueSePerde,
    Slide21_Panorama,
    Slide22_FamiliaAlmeida,
    Slide23_NVI_NVT_Outras,
    Slide24_Recomendacao,
    Slide25_KingJames,
    Slide26_Ferramentas,
    Slide27_Romanos325,
    Slide28_Analise,
    Slide29_Isaias714,
    Slide30_Limitacoes,
    Slide31_OQueFazer,
    Slide32_Encerramento,
    colors,
    reactions,
} from './slides';

// Mapa de slides
const slideComponents = {
    1: Slide01_Titulo,
    2: Slide02_APonte,
    3: Slide03_ProverbioItaliano,
    4: Slide04_Hebraico,
    5: Slide05_RaizesTriliteras,
    6: Slide06_HebraicoPensaCorpo,
    7: Slide07_GregoKoine,
    8: Slide08_Tetelestai,
    9: Slide09_QuatroAmores,
    10: Slide10_ProblemaFundamental,
    11: Slide11_Espectro,
    12: Slide12_FormalVsDinamica,
    13: Slide13_Filipenses,
    14: Slide14_OQueIssoMostra,
    15: Slide15_Dossie,
    16: Slide16_Nephesh,
    17: Slide17_PorQueImporta,
    18: Slide18_Golias,
    19: Slide19_YHWH,
    20: Slide20_OQueSePerde,
    21: Slide21_Panorama,
    22: Slide22_FamiliaAlmeida,
    23: Slide23_NVI_NVT_Outras,
    24: Slide24_Recomendacao,
    25: Slide25_KingJames,
    26: Slide26_Ferramentas,
    27: Slide27_Romanos325,
    28: Slide28_Analise,
    29: Slide29_Isaias714,
    30: Slide30_Limitacoes,
    31: Slide31_OQueFazer,
    32: Slide32_Encerramento,
};

// Emojis de reação
const reactionEmojis = {};
reactions.forEach(r => { reactionEmojis[r.key] = r.emoji; });

// Cores de reação
const reactionColors = {};
reactions.forEach(r => { reactionColors[r.key] = r.color; });

// Componente de reações flutuantes
function FloatingReactions({ recentReactions }) {
    return (
        <div className="fixed bottom-20 right-4 z-50 pointer-events-none">
            <AnimatePresence>
                {recentReactions.map((reaction) => (
                    <motion.div
                        key={reaction.id}
                        initial={{ opacity: 0, y: 50, x: 0, scale: 0.5 }}
                        animate={{ opacity: 1, y: 0, x: Math.random() * 60 - 30, scale: 1 }}
                        exit={{ opacity: 0, y: -100, scale: 0.3 }}
                        transition={{ type: 'spring', damping: 15 }}
                        className="text-3xl mb-1"
                    >
                        {reaction.icon}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

// Status bar
function StatusBar({ connected, currentSlide, totalSlides, attendance }) {
    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-40 px-6 py-2 flex items-center justify-between text-xs"
            style={{
                background: `${colors.bgDeep}EE`,
                borderTop: `1px solid ${colors.goldAged}20`,
                color: colors.textMedium,
            }}
        >
            <div className="flex items-center gap-2">
                <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: connected ? '#22c55e' : '#ef4444' }}
                />
                <span>{connected ? 'Conectado' : 'Desconectado'}</span>
            </div>
            <span>
                {currentSlide === 0 ? 'Quiz' : `Slide ${currentSlide}/${totalSlides}`}
            </span>
            <span>
                👥 {attendance} participante{attendance !== 1 ? 's' : ''}
            </span>
        </div>
    );
}

export default function Licao8Viewer() {
    const {
        currentSlide,
        totalSlides,
        currentQuizQuestion,
        quizResponses,
        connected,
        attendance,
        recentReactions,
    } = useLicao8Sync('viewer');

    // Fullscreen com tecla F
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'f' || e.key === 'F') {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen?.();
                } else {
                    document.exitFullscreen?.();
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const SlideComponent = slideComponents[currentSlide];

    return (
        <div
            className="min-h-screen relative overflow-hidden"
            style={{ background: colors.bgDeep }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="min-h-screen"
                >
                    {currentSlide === 0 ? (
                        <QuizSection
                            quizResponses={quizResponses}
                            totalParticipants={attendance}
                        />
                    ) : SlideComponent ? (
                        <SlideComponent />
                    ) : (
                        <div className="min-h-screen flex items-center justify-center">
                            <p style={{ color: colors.textMedium }}>Slide {currentSlide} não encontrado</p>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            <FloatingReactions recentReactions={recentReactions} />
            <StatusBar
                connected={connected}
                currentSlide={currentSlide}
                totalSlides={totalSlides}
                attendance={attendance}
            />
        </div>
    );
}
