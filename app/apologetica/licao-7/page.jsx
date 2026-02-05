'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLicao7Sync } from './useLicao7Sync';
import { colors } from './slides/shared';
import * as Slides from './slides';

// Mapa de componentes de slides
const slideComponents = {
    1: Slides.Slide01_Titulo,
    2: Slides.Slide02_AdmissaoAssusta,
    3: Slides.Slide03_PorQueNaoOriginais,
    4: Slides.Slide04_PerguntaCerta,
    5: Slides.Slide05_IntroComparacao,
    6: Slides.Slide06_TabelaParte1,
    7: Slides.Slide07_TabelaParte2,
    8: Slides.Slide08_Ironia,
    9: Slides.Slide09_TiposManuscritos,
    10: Slides.Slide10_P52,
    11: Slides.Slide11_TextoP52,
    12: Slides.Slide12_GrandesCodices,
    13: Slides.Slide13_CadeiaTransmissao,
    14: Slides.Slide14_AntesDe1947,
    15: Slides.Slide15_Descoberta1947,
    16: Slides.Slide16_RoloIsaias,
    17: Slides.Slide17_ExperimentoNaoPlanejado,
    18: Slides.Slide18_Impacto,
    19: Slides.Slide19_QuemEramMassoretas,
    20: Slides.Slide20_SistemaPreservacao,
    21: Slides.Slide21_ContagemObsessiva,
    22: Slides.Slide22_NumeroAssustador,
    23: Slides.Slide23_MatematicaVariantes,
    24: Slides.Slide24_OQueContaVariante,
    25: Slides.Slide25_CategoriasVariantes,
    26: Slides.Slide26_AnalogiaEleicao,
    27: Slides.Slide27_Garantia,
    28: Slides.Slide28_HonestidadeTotal,
    29: Slides.Slide29_MulherAdultera,
    30: Slides.Slide30_FinalMarcos,
    31: Slides.Slide31_CommaJohanneum,
    32: Slides.Slide32_PorQueBibliasDiferentes,
    33: Slides.Slide33_CriticaTextual,
    34: Slides.Slide34_ResumoNumeros,
    35: Slides.Slide35_FraseFechamento,
    36: Slides.Slide36_Encerramento,
};

// Mapeamento de tipos para emojis (fallback caso icon não venha)
const reactionEmojis = {
    fascinating: '📜',
    wantMore: '🔍',
    processing: '🧐',
    makesSense: '✅',
    stillDoubt: '❓',
    aha: '💡',
    love: '❤️',
    fire: '🔥',
    pray: '🙏',
    wow: '😮',
    think: '🤔',
    clap: '👏'
};

// Cores de gradiente por tipo de reação
const reactionColors = {
    fascinating: 'from-amber-600 to-yellow-500',
    wantMore: 'from-blue-600 to-cyan-500',
    processing: 'from-purple-600 to-violet-500',
    makesSense: 'from-green-600 to-emerald-500',
    stillDoubt: 'from-orange-600 to-amber-500',
    aha: 'from-yellow-500 to-amber-400',
    love: 'from-rose-600 to-pink-500',
    fire: 'from-orange-600 to-red-500',
    pray: 'from-indigo-600 to-purple-500',
    wow: 'from-cyan-600 to-blue-500',
    think: 'from-slate-600 to-gray-500',
    clap: 'from-emerald-600 to-teal-500'
};

// Reações flutuantes - visual moderno e bonito
function FloatingReactions({ reactions }) {
    return (
        <div className="fixed bottom-24 right-6 pointer-events-none z-50 flex flex-col-reverse gap-3">
            <AnimatePresence mode="popLayout">
                {reactions.slice(-5).map((reaction, index) => {
                    const emoji = reaction.icon || reactionEmojis[reaction.type] || reaction.type;
                    const colorClass = reactionColors[reaction.type] || 'from-amber-600 to-yellow-500';
                    const userName = reaction.userName || 'Participante';
                    
                    return (
                        <motion.div
                            key={reaction.id || `${index}-${Date.now()}`}
                            initial={{ opacity: 0, scale: 0.5, x: 100 }}
                            animate={{ 
                                opacity: 1, 
                                scale: 1, 
                                x: 0,
                                transition: { type: 'spring', damping: 15, stiffness: 300 }
                            }}
                            exit={{ 
                                opacity: 0, 
                                scale: 0.8, 
                                x: 50,
                                transition: { duration: 0.2 }
                            }}
                            className="flex items-center gap-2"
                        >
                            {/* Card da reação */}
                            <motion.div
                                className={`
                                    flex items-center gap-3 px-4 py-2.5 rounded-2xl
                                    bg-gradient-to-r ${colorClass}
                                    shadow-lg shadow-black/30
                                    border border-white/20
                                    backdrop-blur-sm
                                `}
                                animate={{ 
                                    boxShadow: [
                                        '0 10px 25px -5px rgba(0,0,0,0.3)',
                                        '0 15px 35px -5px rgba(0,0,0,0.4)',
                                        '0 10px 25px -5px rgba(0,0,0,0.3)'
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                {/* Emoji grande */}
                                <motion.span 
                                    className="text-3xl"
                                    animate={{ 
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 10, -10, 0]
                                    }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    {emoji}
                                </motion.span>
                                
                                {/* Nome do usuário */}
                                <span className="text-white font-semibold text-sm drop-shadow-md max-w-[120px] truncate">
                                    {userName}
                                </span>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}

// Barra de status inferior
function StatusBar({ attendance, connected, currentSlide, totalSlides, currentQuizQuestion, totalQuizQuestions }) {
    const isQuizPhase = currentSlide === 0;

    return (
        <div
            className="fixed bottom-0 left-0 right-0 py-3 px-6 flex justify-between items-center z-40"
            style={{
                background: `linear-gradient(to top, ${colors.bgDeep}, ${colors.woodMedium}80)`,
                borderTop: `1px solid ${colors.goldAged}30`
            }}
        >
            <div className="flex items-center gap-4">
                <span
                    className={`w-2 h-2 rounded-full ${connected ? 'bg-green-500' : 'bg-red-500'}`}
                />
                <span style={{ color: colors.parchmentMid }} className="text-sm">
                    {connected ? 'Conectado' : 'Desconectado'}
                </span>
            </div>

            <div style={{ color: colors.goldAged }} className="font-medium">
                {isQuizPhase ? (
                    <span>Quiz: {currentQuizQuestion} / {totalQuizQuestions}</span>
                ) : (
                    <span>Slide {currentSlide} / {totalSlides}</span>
                )}
            </div>

            <div className="flex items-center gap-2">
                <span className="text-2xl">👥</span>
                <span style={{ color: colors.parchmentLight }} className="font-bold">
                    {attendance}
                </span>
            </div>
        </div>
    );
}

export default function Licao7Viewer() {
    const {
        currentSlide,
        currentQuizQuestion,
        quizResponses,
        totalSlides,
        totalQuizQuestions,
        connected,
        attendance,
        recentReactions
    } = useLicao7Sync('viewer');

    const [isFullscreen, setIsFullscreen] = useState(false);

    // Atalho para fullscreen
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'f' || e.key === 'F') {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen?.();
                    setIsFullscreen(true);
                } else {
                    document.exitFullscreen?.();
                    setIsFullscreen(false);
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Determinar qual componente renderizar
    const renderContent = () => {
        if (currentSlide === 0) {
            // Quiz phase
            return (
                <Slides.QuizSection
                    quizResponses={quizResponses}
                    totalParticipants={attendance}
                    isPresenter={false}
                />
            );
        }

        const SlideComponent = slideComponents[currentSlide];
        if (SlideComponent) {
            return <SlideComponent />;
        }

        return (
            <div className="flex items-center justify-center min-h-screen" style={{ background: colors.bgDeep }}>
                <p style={{ color: colors.parchmentMid }}>Slide {currentSlide} não encontrado</p>
            </div>
        );
    };

    return (
        <div className="relative min-h-screen overflow-hidden" style={{ background: colors.bgDeep }}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide === 0 ? `quiz-${currentQuizQuestion}` : `slide-${currentSlide}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {renderContent()}
                </motion.div>
            </AnimatePresence>

            <FloatingReactions reactions={recentReactions} />

            <StatusBar
                attendance={attendance}
                connected={connected}
                currentSlide={currentSlide}
                totalSlides={totalSlides}
                currentQuizQuestion={currentQuizQuestion}
                totalQuizQuestions={totalQuizQuestions}
            />

            {/* Dica de fullscreen */}
            {!isFullscreen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed top-4 right-4 px-3 py-1 rounded-full text-xs z-50"
                    style={{
                        background: `${colors.woodMedium}90`,
                        color: colors.parchmentMid,
                        border: `1px solid ${colors.goldAged}30`
                    }}
                >
                    Pressione F para tela cheia
                </motion.div>
            )}
        </div>
    );
}
