// Lição 8 — Participante (Mobile)
'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLicao8Sync } from '../useLicao8Sync';
import { colors, reactions, quizQuestions } from '../slides/shared';

export default function Licao8Participar() {
    const {
        currentSlide,
        totalSlides,
        currentQuizQuestion,
        quizResponses,
        connected,
        attendance,
        userId,
        currentPoll,
        respondToQuiz,
        join,
        logout,
        react,
        vote,
    } = useLicao8Sync('participant');

    const [userName, setUserName] = useState('');
    const [isJoined, setIsJoined] = useState(false);
    const [showReactionFeedback, setShowReactionFeedback] = useState(null);

    // Restaurar sessão
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedName = localStorage.getItem('licao8-userName');
            const savedId = localStorage.getItem('licao8-userId');
            if (savedName && savedId) {
                setUserName(savedName);
                setIsJoined(true);
            }
        }
    }, []);

    const handleJoin = async () => {
        if (!userName.trim()) return;
        await join(userName.trim());
        setIsJoined(true);
    };

    const handleLogout = async () => {
        await logout();
        setIsJoined(false);
        setUserName('');
    };

    const handleReaction = useCallback(async (key) => {
        const savedName = localStorage.getItem('licao8-userName') || userName;
        await react(key, savedName);
        setShowReactionFeedback(key);
        setTimeout(() => setShowReactionFeedback(null), 1500);
    }, [react, userName]);

    const handleQuizResponse = async (questionId, response) => {
        await respondToQuiz(questionId, response);
    };

    // Tela de entrada
    if (!isJoined) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6"
                style={{ background: colors.bgDeep }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md text-center"
                >
                    <h1 className="text-3xl font-bold mb-2" style={{ color: colors.goldBright }}>
                        Lição 8
                    </h1>
                    <p className="text-lg mb-8" style={{ color: colors.textMedium }}>
                        Tradução Bíblica
                    </p>

                    <div className="space-y-4">
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
                            placeholder="Seu nome"
                            className="w-full px-4 py-3 rounded-lg text-center text-lg outline-none"
                            style={{
                                background: colors.bgSurface,
                                color: colors.textLight,
                                border: `2px solid ${colors.goldAged}40`,
                            }}
                        />
                        <button
                            onClick={handleJoin}
                            disabled={!userName.trim()}
                            className="w-full px-4 py-3 rounded-lg text-lg font-bold transition-opacity"
                            style={{
                                background: colors.goldAged,
                                color: colors.bgDeep,
                                opacity: userName.trim() ? 1 : 0.5,
                            }}
                        >
                            Entrar
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col" style={{ background: colors.bgDeep }}>
            {/* Header */}
            <div className="px-4 py-3 flex items-center justify-between"
                style={{ borderBottom: `1px solid ${colors.goldAged}20` }}
            >
                <div>
                    <p className="text-sm font-bold" style={{ color: colors.goldBright }}>Lição 8</p>
                    <p className="text-xs" style={{ color: colors.textMedium }}>
                        {currentSlide === 0 ? `Quiz — Pergunta ${currentQuizQuestion}` : `Slide ${currentSlide}/${totalSlides}`}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: connected ? '#22c55e' : '#ef4444' }} />
                    <span className="text-xs" style={{ color: colors.textMedium }}>👥 {attendance}</span>
                    <button
                        onClick={handleLogout}
                        className="text-xs px-2 py-1 rounded"
                        style={{ color: colors.alertTerracota, border: `1px solid ${colors.alertTerracota}30` }}
                    >
                        Sair
                    </button>
                </div>
            </div>

            {/* Conteúdo */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
                {/* Quiz */}
                {currentSlide === 0 && (
                    <div className="space-y-3">
                        <p className="text-sm font-bold text-center" style={{ color: colors.goldAged }}>
                            QUIZ
                        </p>
                        {quizQuestions.map((q) => {
                            const myAnswer = quizResponses[`my_${q.id}`];
                            return (
                                <div key={q.id} className="p-3 rounded-lg"
                                    style={{ background: colors.bgSurface, border: `1px solid ${colors.goldAged}20` }}
                                >
                                    <p className="text-sm mb-3" style={{ color: colors.textLight }}>
                                        {q.icon} {q.question}
                                    </p>
                                    <div className="flex gap-2">
                                        {['sim', 'nao', 'talvez'].map(opt => {
                                            const isSelected = myAnswer === opt;
                                            const optColors = {
                                                sim: '#22c55e',
                                                nao: '#ef4444',
                                                talvez: '#f59e0b'
                                            };
                                            return (
                                                <button
                                                    key={opt}
                                                    onClick={() => handleQuizResponse(q.id, opt)}
                                                    className="flex-1 py-2 text-sm rounded font-bold"
                                                    style={{
                                                        background: isSelected ? optColors[opt] : `${colors.bgDeep}80`,
                                                        color: isSelected ? '#fff' : colors.textMedium,
                                                        border: `1px solid ${optColors[opt]}${isSelected ? '' : '40'}`,
                                                    }}
                                                >
                                                    {opt === 'sim' ? 'Sim' : opt === 'nao' ? 'Não' : 'Talvez'}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* During slides — show current slide indicator */}
                {currentSlide > 0 && (
                    <div className="text-center py-4">
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            Slide atual
                        </p>
                        <p className="text-4xl font-bold" style={{ color: colors.goldBright }}>
                            {currentSlide}
                        </p>
                        <p className="text-xs" style={{ color: colors.textMedium }}>
                            de {totalSlides}
                        </p>

                        {/* Progress bar */}
                        <div className="w-full h-1 rounded-full mt-4 overflow-hidden" style={{ background: `${colors.bgSurface}80` }}>
                            <motion.div
                                className="h-full rounded-full"
                                style={{ background: colors.goldAged }}
                                animate={{ width: `${(currentSlide / totalSlides) * 100}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </div>
                )}

                {/* Active poll */}
                {currentPoll && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 rounded-lg"
                        style={{ background: colors.bgSurface, border: `2px solid ${colors.goldAged}40` }}
                    >
                        <p className="text-xs uppercase mb-2" style={{ color: colors.goldAged }}>📊 Enquete ativa</p>
                        <p className="text-sm font-bold mb-3" style={{ color: colors.textLight }}>
                            {currentPoll.question}
                        </p>
                        <div className="space-y-2">
                            {currentPoll.options?.map((opt, i) => (
                                <button
                                    key={i}
                                    onClick={() => vote(currentPoll.id, i)}
                                    className="w-full px-3 py-2 text-sm rounded text-left flex items-center justify-between"
                                    style={{
                                        background: `${colors.bgDeep}80`,
                                        color: colors.textLight,
                                        border: `1px solid ${colors.goldAged}20`
                                    }}
                                >
                                    <span>{opt.text}</span>
                                    <span className="text-xs" style={{ color: colors.goldAged }}>{opt.votes}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Feedback de reação (emoji grande no centro) */}
            <AnimatePresence>
                {showReactionFeedback && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
                    >
                        <span className="text-8xl">
                            {reactions.find(r => r.key === showReactionFeedback)?.emoji}
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Barra de reações (footer) */}
            <div className="px-3 py-3 flex items-center justify-around"
                style={{
                    background: colors.bgSurface,
                    borderTop: `1px solid ${colors.goldAged}20`
                }}
            >
                {reactions.map((r) => (
                    <button
                        key={r.key}
                        onClick={() => handleReaction(r.key)}
                        className="flex flex-col items-center gap-0.5 transition-transform active:scale-125"
                    >
                        <span className="text-2xl">{r.emoji}</span>
                        <span className="text-[9px]" style={{ color: colors.textMedium }}>{r.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
