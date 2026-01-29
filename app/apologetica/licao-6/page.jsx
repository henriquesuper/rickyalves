'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLicao6Sync } from './useLicao6Sync';
import { colors } from './slides/shared';
import * as Slides from './slides';

// Mapa de componentes de slides
const slideComponents = {
    1: Slides.Slide01_Titulo,
    2: Slides.Slide02_OQueECanon,
    3: Slides.Slide03_OQueNaoE,
    4: Slides.Slide04_Tanakh,
    5: Slides.Slide05_Contagem,
    6: Slides.Slide06_AbelZacarias,
    7: Slides.Slide07_Septuaginta,
    8: Slides.Slide08_Deuterocanonicos,
    9: Slides.Slide09_PorqueProtestantes,
    10: Slides.Slide10_PorqueCatolicos,
    11: Slides.Slide11_DialogoRespeitoso,
    12: Slides.Slide12_CanonNT_Situacao,
    13: Slides.Slide13_CriteriosNT,
    14: Slides.Slide14_Timeline,
    15: Slides.Slide15_LivrosDebatidos,
    16: Slides.Slide16_Cantares_Controverso,
    17: Slides.Slide17_DuasLeituras,
    18: Slides.Slide18_ConexaoPesquisa,
    19: Slides.Slide19_Discussao,
    20: Slides.Slide20_Encerramento,
};

// Reações flutuantes
function FloatingReactions({ reactions }) {
    return (
        <div className="fixed bottom-20 right-8 pointer-events-none z-50">
            <AnimatePresence>
                {reactions.map((reaction, index) => (
                    <motion.div
                        key={reaction.id || index}
                        initial={{ opacity: 0, y: 50, x: 0 }}
                        animate={{ opacity: 1, y: -100 * (index + 1), x: Math.sin(index * 2) * 30 }}
                        exit={{ opacity: 0, y: -200 }}
                        className="absolute bottom-0 right-0"
                    >
                        <span className="text-4xl">{reaction.icon || reaction.type}</span>
                    </motion.div>
                ))}
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
                background: `linear-gradient(to top, ${colors.bgDeep}, ${colors.libraryWood}80)`,
                borderTop: `1px solid ${colors.goldLeaf}30`
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

            <div style={{ color: colors.goldLeaf }} className="font-medium">
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

export default function Licao6Viewer() {
    const {
        currentSlide,
        currentQuizQuestion,
        quizResponses,
        totalSlides,
        totalQuizQuestions,
        connected,
        attendance,
        recentReactions
    } = useLicao6Sync('viewer');

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
                    currentQuestion={currentQuizQuestion}
                    responses={quizResponses}
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
                        background: `${colors.libraryWood}90`,
                        color: colors.parchmentMid,
                        border: `1px solid ${colors.goldLeaf}30`
                    }}
                >
                    Pressione F para tela cheia
                </motion.div>
            )}
        </div>
    );
}
