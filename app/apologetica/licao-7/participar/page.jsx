'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLicao7Sync } from '../useLicao7Sync';
import { colors, quizQuestions, reactions as availableReactions } from '../slides/shared';

export default function ParticiparPage() {
    const {
        currentSlide,
        currentQuizQuestion,
        totalQuizQuestions,
        connected,
        currentPoll,
        respondToQuiz,
        join,
        logout,
        react,
        vote
    } = useLicao7Sync('participant');

    const [userName, setUserName] = useState('');
    const [isJoined, setIsJoined] = useState(false);
    const [hasVoted, setHasVoted] = useState(false);
    const [recentReaction, setRecentReaction] = useState(null);
    const [myQuizResponses, setMyQuizResponses] = useState({});

    // Verificar sessão existente
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const session = localStorage.getItem('licao7_session');
            if (session) {
                const { userName: storedName } = JSON.parse(session);
                if (storedName) {
                    setUserName(storedName);
                    setIsJoined(true);
                }
            }

            const storedResponses = localStorage.getItem('licao7_quiz_responses');
            if (storedResponses) {
                setMyQuizResponses(JSON.parse(storedResponses));
            }
        }
    }, []);

    // Entrar
    const handleJoin = async (e) => {
        e.preventDefault();
        if (!userName.trim()) return;

        await join(userName.trim());
        setIsJoined(true);

        if (typeof window !== 'undefined') {
            localStorage.setItem('licao7_session', JSON.stringify({ userName: userName.trim() }));
        }
    };

    // Sair
    const handleLogout = async () => {
        await logout();
        setIsJoined(false);
        setUserName('');
        setMyQuizResponses({});

        if (typeof window !== 'undefined') {
            localStorage.removeItem('licao7_session');
            localStorage.removeItem('licao7_quiz_responses');
        }
    };

    // Responder quiz
    const handleQuizResponse = async (response) => {
        const newResponses = { ...myQuizResponses, [currentQuizQuestion]: response };
        setMyQuizResponses(newResponses);

        if (typeof window !== 'undefined') {
            localStorage.setItem('licao7_quiz_responses', JSON.stringify(newResponses));
        }

        await respondToQuiz(currentQuizQuestion, response);
    };

    // Reagir
    const handleReact = async (reactionType) => {
        const reaction = availableReactions.find(r => r.type === reactionType);
        setRecentReaction(reaction);
        await react(reactionType, userName);

        setTimeout(() => setRecentReaction(null), 2000);
    };

    // Votar
    const handleVote = async (optionIndex) => {
        if (hasVoted) return;
        await vote(currentPoll.id, optionIndex);
        setHasVoted(true);
    };

    // Reset vote quando poll muda
    useEffect(() => {
        setHasVoted(false);
    }, [currentPoll?.id]);

    const isQuizPhase = currentSlide === 0;
    const currentQuestion = quizQuestions[currentQuizQuestion - 1];
    const hasAnsweredCurrentQuestion = myQuizResponses[currentQuizQuestion];

    // Tela de entrada
    if (!isJoined) {
        return (
            <div
                className="min-h-screen flex items-center justify-center p-6"
                style={{ background: `linear-gradient(135deg, ${colors.bgDeep}, ${colors.woodMedium})` }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-sm"
                >
                    <div
                        className="p-6 rounded-2xl"
                        style={{
                            background: `linear-gradient(135deg, ${colors.bgSurface}90, ${colors.woodMedium}80)`,
                            border: `1px solid ${colors.goldAged}40`
                        }}
                    >
                        <div className="text-center mb-6">
                            <span className="text-5xl">📜</span>
                            <h1 className="text-2xl font-bold mt-3" style={{ color: colors.goldAged }}>
                                Lição 7
                            </h1>
                            <p style={{ color: colors.parchmentMid }}>
                                Manuscritos, Transmissão e Confiabilidade
                            </p>
                        </div>

                        <form onSubmit={handleJoin}>
                            <input
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="Seu nome"
                                className="w-full p-4 rounded-xl text-lg mb-4 outline-none"
                                style={{
                                    background: `${colors.parchmentDark}20`,
                                    border: `1px solid ${colors.goldAged}30`,
                                    color: colors.parchmentLight
                                }}
                            />
                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
                                style={{
                                    background: `linear-gradient(135deg, ${colors.goldAged}, ${colors.inkSepia})`,
                                    color: colors.bgDeep
                                }}
                            >
                                Entrar 📖
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen p-4 pb-32"
            style={{ background: `linear-gradient(135deg, ${colors.bgDeep}, ${colors.woodMedium})` }}
        >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${connected ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span style={{ color: colors.parchmentMid }} className="text-sm">
                        Olá, {userName}!
                    </span>
                    <button
                        onClick={handleLogout}
                        className="ml-2 px-2 py-1 rounded text-xs transition-all hover:scale-105 active:scale-95"
                        style={{
                            background: `${colors.inkBlood}30`,
                            color: colors.parchmentLight,
                            border: `1px solid ${colors.inkBlood}50`
                        }}
                    >
                        Sair
                    </button>
                </div>
                <span style={{ color: colors.goldAged }} className="text-sm font-medium">
                    {isQuizPhase ? `Quiz ${currentQuizQuestion}/${totalQuizQuestions}` : `Slide ${currentSlide}`}
                </span>
            </div>

            {/* Conteúdo principal */}
            <AnimatePresence mode="wait">
                {isQuizPhase && currentQuestion ? (
                    /* Quiz Phase */
                    <motion.div
                        key={`quiz-${currentQuizQuestion}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="mb-6"
                    >
                        <div
                            className="p-6 rounded-2xl mb-4"
                            style={{
                                background: `linear-gradient(135deg, ${colors.bgSurface}90, ${colors.woodMedium}70)`,
                                border: `1px solid ${colors.goldAged}30`
                            }}
                        >
                            <div className="text-center mb-4">
                                <span className="text-4xl">{currentQuestion.icon}</span>
                            </div>
                            <p className="text-lg text-center leading-relaxed" style={{ color: colors.parchmentLight }}>
                                {currentQuestion.question}
                            </p>
                        </div>

                        {hasAnsweredCurrentQuestion ? (
                            <div className="text-center">
                                <div
                                    className="inline-flex items-center gap-3 px-6 py-4 rounded-xl"
                                    style={{
                                        background: `${colors.goldAged}20`,
                                        border: `1px solid ${colors.goldAged}40`
                                    }}
                                >
                                    <span className="text-2xl">
                                        {hasAnsweredCurrentQuestion === 'sim' ? '✅' :
                                            hasAnsweredCurrentQuestion === 'nao' ? '❌' : '🤔'}
                                    </span>
                                    <span style={{ color: colors.parchmentLight }}>
                                        Você respondeu: <strong>{hasAnsweredCurrentQuestion}</strong>
                                    </span>
                                </div>
                                <p className="mt-4 text-sm" style={{ color: colors.parchmentMid }}>
                                    Aguardando próxima pergunta...
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { value: 'sim', label: 'Sim', color: '#22c55e', icon: '✅' },
                                    { value: 'talvez', label: 'Talvez', color: colors.goldAged, icon: '🤔' },
                                    { value: 'nao', label: 'Não', color: '#ef4444', icon: '❌' }
                                ].map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => handleQuizResponse(option.value)}
                                        className="py-6 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95"
                                        style={{
                                            background: `linear-gradient(135deg, ${option.color}80, ${option.color}40)`,
                                            color: colors.parchmentLight,
                                            border: `2px solid ${option.color}`
                                        }}
                                    >
                                        <span className="text-2xl block mb-1">{option.icon}</span>
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </motion.div>
                ) : (
                    /* Slides Phase */
                    <motion.div
                        key={`slide-${currentSlide}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        {/* Poll ativo */}
                        {currentPoll && (
                            <div
                                className="p-4 rounded-xl mb-4"
                                style={{
                                    background: `linear-gradient(135deg, ${colors.bgSurface}90, ${colors.woodMedium}70)`,
                                    border: `1px solid ${colors.goldAged}40`
                                }}
                            >
                                <h3 className="font-bold mb-3" style={{ color: colors.goldAged }}>
                                    🗳️ Enquete
                                </h3>
                                <p style={{ color: colors.parchmentLight }} className="mb-4">
                                    {currentPoll.question}
                                </p>

                                {hasVoted ? (
                                    <div className="text-center py-4">
                                        <span className="text-4xl">✓</span>
                                        <p style={{ color: colors.parchmentMid }}>Voto registrado!</p>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        {currentPoll.options.map((option, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleVote(i)}
                                                className="w-full p-4 rounded-xl text-left transition-all hover:scale-102 active:scale-98"
                                                style={{
                                                    background: `${colors.inkSepia}30`,
                                                    color: colors.parchmentLight,
                                                    border: `1px solid ${colors.goldAged}20`
                                                }}
                                            >
                                                {option.text}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Indicador de slide */}
                        <div
                            className="p-4 rounded-xl text-center"
                            style={{
                                background: `linear-gradient(135deg, ${colors.bgSurface}80, ${colors.woodMedium}60)`,
                                border: `1px solid ${colors.goldAged}20`
                            }}
                        >
                            <p style={{ color: colors.parchmentMid }}>
                                📖 Acompanhando Slide {currentSlide}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Feedback de reação */}
            <AnimatePresence>
                {recentReaction && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: -50 }}
                        className="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
                    >
                        <div
                            className="px-8 py-6 rounded-2xl text-center"
                            style={{
                                background: `linear-gradient(135deg, ${colors.bgSurface}95, ${colors.woodMedium}90)`,
                                border: `2px solid ${colors.goldAged}`
                            }}
                        >
                            <span className="text-6xl block mb-2">{recentReaction.icon}</span>
                            <span style={{ color: colors.goldAged }} className="font-bold">
                                {recentReaction.label}
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Barra de reações - fixa no bottom */}
            <div
                className="fixed bottom-0 left-0 right-0 p-4"
                style={{
                    background: `linear-gradient(to top, ${colors.bgDeep}, ${colors.bgDeep}90, transparent)`,
                }}
            >
                <div className="flex justify-center gap-2 flex-wrap">
                    {availableReactions.map((reaction) => (
                        <button
                            key={reaction.type}
                            onClick={() => handleReact(reaction.type)}
                            className="p-3 rounded-xl transition-all hover:scale-110 active:scale-95"
                            style={{
                                background: `linear-gradient(135deg, ${colors.inkSepia}50, ${colors.woodMedium}70)`,
                                border: `1px solid ${colors.goldAged}30`
                            }}
                        >
                            <span className="text-2xl">{reaction.icon}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
