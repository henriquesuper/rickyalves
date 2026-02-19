// Lição 9 — Viewer / Projetor
'use client';
import { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLicao9Sync } from './useLicao9Sync';
import {
    Slide01_Capa,
    Slide02_PerguntaAbre,
    Slide03_InstrucaoQuiz,
    Slide04_Pergunta1,
    Slide05_Pergunta2,
    Slide06_Pergunta3,
    Slide07_Pergunta4,
    Slide08_Pergunta5,
    Slide09_Pergunta6,
    Slide10_TransicaoPosQuiz,
    Slide11_LogicaTestemunho,
    Slide12_TresPerguntas,
    Slide13_OQueSePerdeu,
    Slide14_MapaAutores,
    Slide15_AberturaAT,
    Slide16_Moises,
    Slide17_JEDP,
    Slide18_Jo,
    Slide19_Isaias,
    Slide20_IsaiasArgumento,
    Slide21_RoloIsaias,
    Slide22_PanoramaAT,
    Slide23_AberturaNT,
    Slide24_PorQueQuatro,
    Slide25_QuatroEvangelhos,
    Slide26_LucasGrego,
    Slide27_Ramsay,
    Slide28_Sinotico,
    Slide29_Datacao,
    Slide30_Paulo,
    Slide31_PauloDebatidas,
    Slide32_Hebreus,
    Slide33_HebreusCandidatos,
    Slide34_HebreusConclusao,
    Slide35_DemaisNT,
    Slide36_Pseudepigrafia,
    Slide37_CriteriosAutenticidade,
    Slide38_SinteseAT,
    Slide39_SinteseNT,
    Slide40_TesteContra,
    Slide41_ManuscritosResumo,
    Slide42_TresAcordos,
    Slide43_AncoraRetorno,
    Slide44_FraseChave,
    Slide45_Encerramento,
    colors,
    reactions,
} from './slides';

// Mapa de slides
const slideComponents = {
    1: Slide01_Capa,
    2: Slide02_PerguntaAbre,
    3: Slide03_InstrucaoQuiz,
    4: Slide04_Pergunta1,
    5: Slide05_Pergunta2,
    6: Slide06_Pergunta3,
    7: Slide07_Pergunta4,
    8: Slide08_Pergunta5,
    9: Slide09_Pergunta6,
    10: Slide10_TransicaoPosQuiz,
    11: Slide11_LogicaTestemunho,
    12: Slide12_TresPerguntas,
    13: Slide13_OQueSePerdeu,
    14: Slide14_MapaAutores,
    15: Slide15_AberturaAT,
    16: Slide16_Moises,
    17: Slide17_JEDP,
    18: Slide18_Jo,
    19: Slide19_Isaias,
    20: Slide20_IsaiasArgumento,
    21: Slide21_RoloIsaias,
    22: Slide22_PanoramaAT,
    23: Slide23_AberturaNT,
    24: Slide24_PorQueQuatro,
    25: Slide25_QuatroEvangelhos,
    26: Slide26_LucasGrego,
    27: Slide27_Ramsay,
    28: Slide28_Sinotico,
    29: Slide29_Datacao,
    30: Slide30_Paulo,
    31: Slide31_PauloDebatidas,
    32: Slide32_Hebreus,
    33: Slide33_HebreusCandidatos,
    34: Slide34_HebreusConclusao,
    35: Slide35_DemaisNT,
    36: Slide36_Pseudepigrafia,
    37: Slide37_CriteriosAutenticidade,
    38: Slide38_SinteseAT,
    39: Slide39_SinteseNT,
    40: Slide40_TesteContra,
    41: Slide41_ManuscritosResumo,
    42: Slide42_TresAcordos,
    43: Slide43_AncoraRetorno,
    44: Slide44_FraseChave,
    45: Slide45_Encerramento,
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
                background: `${colors.bgDossier}EE`,
                borderTop: `1px solid ${colors.amber}20`,
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
                Slide {currentSlide}/{totalSlides}
            </span>
            <span>
                👥 {attendance} participante{attendance !== 1 ? 's' : ''}
            </span>
        </div>
    );
}

export default function Licao9Viewer() {
    const {
        currentSlide,
        totalSlides,
        currentQuizQuestion,
        quizResponses,
        connected,
        attendance,
        recentReactions,
    } = useLicao9Sync('viewer');

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
            style={{ background: colors.bgDossier }}
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
                    {SlideComponent ? (
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
