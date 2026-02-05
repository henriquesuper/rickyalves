'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLicao7Sync } from '../useLicao7Sync';
import { colors, quizQuestions, slideNotes } from '../slides/shared';

// Enquetes pré-definidas para Lição 7
const predefinedPolls = [
    {
        question: 'Antes de hoje, você sabia que não temos os originais da Bíblia?',
        options: ['Sim, já sabia', 'Não, foi surpresa', 'Sabia vagamente']
    },
    {
        question: 'Qual evidência você achou mais impressionante?',
        options: ['Número de manuscritos (25.000)', 'Mar Morto (95% idêntico)', 'P52 (~125 d.C.)', 'Sistema Massorético']
    },
    {
        question: 'As variantes textuais ainda te preocupam?',
        options: ['Não mais', 'Um pouco', 'Preciso estudar mais', 'Nunca me preocuparam']
    }
];

export default function ApresentadorPage() {
    const {
        currentSlide,
        currentQuizQuestion,
        quizResponses,
        totalSlides,
        totalQuizQuestions,
        connected,
        attendance,
        currentPoll,
        recentReactions,
        goToSlide,
        nextSlide,
        prevSlide,
        goToQuizQuestion,
        createPoll,
        endPoll,
        getCurrentNotes
    } = useLicao7Sync('presenter');

    const [showPollCreator, setShowPollCreator] = useState(false);
    const [customPollQuestion, setCustomPollQuestion] = useState('');
    const [customPollOptions, setCustomPollOptions] = useState(['', '', '']);

    // Atalhos de teclado
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            switch (e.key) {
                case 'ArrowRight':
                case ' ':
                    e.preventDefault();
                    nextSlide();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    prevSlide();
                    break;
                case 'Home':
                    goToSlide(0);
                    goToQuizQuestion(1);
                    break;
                case 'End':
                    goToSlide(totalSlides);
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide, goToSlide, goToQuizQuestion, totalSlides]);



    const notes = getCurrentNotes();
    const isQuizPhase = currentSlide === 0;

    // Criar poll
    const handleCreatePoll = async (question, options) => {
        await createPoll(question, options);
        setShowPollCreator(false);
        setCustomPollQuestion('');
        setCustomPollOptions(['', '', '']);
    };

    // Helper para contar respostas do quiz
    const getQuizCounts = (questionId) => {
        const responses = quizResponses[questionId] || {};
        return {
            sim: Object.values(responses).filter(a => a === 'sim').length,
            nao: Object.values(responses).filter(a => a === 'nao').length,
            talvez: Object.values(responses).filter(a => a === 'talvez').length,
            total: Object.keys(responses).length
        };
    };

    return (
        <div className="min-h-screen p-4" style={{ background: colors.bgDeep }}>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold" style={{ color: colors.goldAged }}>
                    📜 Lição 7 — Apresentador
                </h1>
                <div className="flex items-center gap-4">
                    <span className={`w-3 h-3 rounded-full ${connected ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span style={{ color: colors.parchmentMid }}>
                        {connected ? 'Conectado' : 'Desconectado'}
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 rounded-full" style={{ background: `${colors.goldAged}20` }}>
                        <span>👥</span>
                        <span style={{ color: colors.goldAged }} className="font-bold">{attendance}</span>
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
                {/* Coluna esquerda - Navegação e controles */}
                <div className="col-span-4 space-y-4">
                    {/* Status atual */}
                    <div
                        className="p-4 rounded-xl"
                        style={{
                            background: `linear-gradient(135deg, ${colors.woodMedium}80, ${colors.bgSurface}90)`,
                            border: `1px solid ${colors.goldAged}30`
                        }}
                    >
                        <h2 className="text-lg font-bold mb-3" style={{ color: colors.goldAged }}>
                            {isQuizPhase ? '🎮 Quiz Interativo' : `📑 Slide ${currentSlide}`}
                        </h2>

                        {isQuizPhase ? (
                            <div>
                                <p style={{ color: colors.parchmentMid }} className="mb-2">
                                    Pergunta {currentQuizQuestion} de {totalQuizQuestions}
                                </p>
                                <p style={{ color: colors.parchmentLight }} className="text-sm mb-3">
                                    {quizQuestions[currentQuizQuestion - 1]?.question}
                                </p>

                                {/* Navegação direta entre perguntas do quiz */}
                                <div className="flex gap-1 mb-3">
                                    {[...Array(totalQuizQuestions)].map((_, i) => (
                                        <button
                                            key={i + 1}
                                            onClick={() => goToQuizQuestion(i + 1)}
                                            className={`flex-1 py-1.5 rounded text-xs font-medium transition-all ${currentQuizQuestion === i + 1 ? 'ring-2 ring-offset-1' : ''}`}
                                            style={{
                                                background: currentQuizQuestion === i + 1 ? colors.goldAged : `${colors.inkSepia}40`,
                                                color: currentQuizQuestion === i + 1 ? colors.bgDeep : colors.parchmentMid,
                                                ringColor: colors.goldAged
                                            }}
                                        >
                                            Q{i + 1}
                                        </button>
                                    ))}
                                </div>

                                {/* Respostas da pergunta atual */}
                                {(() => {
                                    const counts = getQuizCounts(currentQuizQuestion);
                                    if (counts.total === 0) return null;
                                    return (
                                        <div className="mt-3 p-3 rounded" style={{ background: `${colors.goldAged}20` }}>
                                            <p className="text-xs mb-2" style={{ color: colors.goldAged }}>Respostas ({counts.total}):</p>
                                            {['sim', 'nao', 'talvez'].map(key => {
                                                const count = counts[key];
                                                const pct = counts.total > 0 ? (count / counts.total) * 100 : 0;
                                                const emoji = key === 'sim' ? '✅' : key === 'nao' ? '❌' : '🤔';
                                                return (
                                                    <div key={key} className="mb-1">
                                                        <div className="flex justify-between text-xs mb-0.5">
                                                            <span style={{ color: colors.parchmentLight }}>{emoji} {key}</span>
                                                            <span style={{ color: colors.goldAged }}>{count}</span>
                                                        </div>
                                                        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: `${colors.inkSepia}30` }}>
                                                            <div
                                                                className="h-full transition-all"
                                                                style={{
                                                                    background: key === 'sim' ? '#22c55e' : key === 'nao' ? '#ef4444' : colors.goldAged,
                                                                    width: `${pct}%`
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    );
                                })()}
                            </div>
                        ) : (
                            <p style={{ color: colors.parchmentLight }}>{notes.title}</p>
                        )}
                    </div>

                    {/* Navegação */}
                    <div
                        className="p-4 rounded-xl"
                        style={{
                            background: `linear-gradient(135deg, ${colors.woodMedium}80, ${colors.bgSurface}90)`,
                            border: `1px solid ${colors.goldAged}30`
                        }}
                    >
                        <h3 className="font-bold mb-3" style={{ color: colors.goldAged }}>Navegação</h3>

                        <div className="flex gap-2 mb-4">
                            <button
                                onClick={prevSlide}
                                className="flex-1 py-2 px-4 rounded-lg font-medium transition-all hover:scale-105"
                                style={{
                                    background: `${colors.inkSepia}60`,
                                    color: colors.parchmentLight
                                }}
                            >
                                ← Anterior
                            </button>
                            <button
                                onClick={nextSlide}
                                className="flex-1 py-2 px-4 rounded-lg font-medium transition-all hover:scale-105"
                                style={{
                                    background: colors.goldAged,
                                    color: colors.bgDeep
                                }}
                            >
                                Próximo →
                            </button>
                        </div>

                        {/* Barra de progresso */}
                        <div className="h-2 rounded-full overflow-hidden mb-2" style={{ background: `${colors.inkSepia}30` }}>
                            <div
                                className="h-full transition-all"
                                style={{
                                    background: colors.goldAged,
                                    width: isQuizPhase
                                        ? `${(currentQuizQuestion / totalQuizQuestions) * 100}%`
                                        : `${(currentSlide / totalSlides) * 100}%`
                                }}
                            />
                        </div>

                        {/* Navegação direta - Grid compacto para 36 slides */}
                        <div className="grid grid-cols-6 gap-1 mt-4">
                            {/* Quiz button */}
                            <button
                                onClick={() => { goToSlide(0); goToQuizQuestion(1); }}
                                className={`p-1.5 rounded text-xs font-medium transition-all col-span-2 ${currentSlide === 0 ? 'ring-2 ring-offset-1' : ''}`}
                                style={{
                                    background: currentSlide === 0 ? colors.goldAged : `${colors.inkSepia}40`,
                                    color: currentSlide === 0 ? colors.bgDeep : colors.parchmentMid,
                                    ringColor: colors.goldAged
                                }}
                            >
                                Quiz
                            </button>
                            {/* Slide buttons */}
                            {[...Array(totalSlides)].map((_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => goToSlide(i + 1)}
                                    className={`p-1.5 rounded text-xs font-medium transition-all ${currentSlide === i + 1 ? 'ring-2 ring-offset-1' : ''}`}
                                    style={{
                                        background: currentSlide === i + 1 ? colors.goldAged : `${colors.inkSepia}40`,
                                        color: currentSlide === i + 1 ? colors.bgDeep : colors.parchmentMid,
                                        ringColor: colors.goldAged
                                    }}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Reações recentes */}
                    <div
                        className="p-4 rounded-xl"
                        style={{
                            background: `linear-gradient(135deg, ${colors.woodMedium}80, ${colors.bgSurface}90)`,
                            border: `1px solid ${colors.goldAged}30`
                        }}
                    >
                        <h3 className="font-bold mb-3" style={{ color: colors.goldAged }}>Reações Recentes</h3>
                        <div className="flex flex-wrap gap-2 min-h-12">
                            <AnimatePresence>
                                {recentReactions.length > 0 ? (
                                    recentReactions.map((reaction, i) => (
                                        <motion.span
                                            key={reaction.id || i}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                            className="text-2xl"
                                        >
                                            {reaction.icon || reaction.type}
                                        </motion.span>
                                    ))
                                ) : (
                                    <span style={{ color: colors.parchmentMid }} className="text-sm">
                                        Nenhuma reação ainda
                                    </span>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Coluna central - Notas do instrutor */}
                <div className="col-span-5">
                    <div
                        className="p-6 rounded-xl h-full"
                        style={{
                            background: `linear-gradient(135deg, ${colors.parchmentDark}15, ${colors.woodMedium}40)`,
                            border: `1px solid ${colors.goldAged}30`
                        }}
                    >
                        <h2 className="text-xl font-bold mb-4" style={{ color: colors.goldAged }}>
                            📝 Notas do Instrutor
                        </h2>
                        <h3 className="text-lg mb-4" style={{ color: colors.parchmentLight }}>
                            {notes.title}
                        </h3>
                        <ul className="space-y-3">
                            {notes.notes?.map((note, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-2 text-sm leading-relaxed"
                                    style={{ color: colors.parchmentLight }}
                                >
                                    <span style={{ color: colors.goldAged }}>•</span>
                                    <span>{note}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Coluna direita - Enquetes */}
                <div className="col-span-3 space-y-4">
                    <div
                        className="p-4 rounded-xl"
                        style={{
                            background: `linear-gradient(135deg, ${colors.woodMedium}80, ${colors.bgSurface}90)`,
                            border: `1px solid ${colors.goldAged}30`
                        }}
                    >
                        <h3 className="font-bold mb-3" style={{ color: colors.goldAged }}>🗳️ Enquetes</h3>

                        {currentPoll ? (
                            <div>
                                <p style={{ color: colors.parchmentLight }} className="mb-3 text-sm">
                                    {currentPoll.question}
                                </p>
                                {currentPoll.options.map((opt, i) => {
                                    const totalVotes = currentPoll.options.reduce((a, b) => a + (b.votes || 0), 0);
                                    const pct = totalVotes > 0 ? ((opt.votes || 0) / totalVotes) * 100 : 0;
                                    return (
                                        <div key={i} className="mb-2">
                                            <div className="flex justify-between text-xs mb-1">
                                                <span style={{ color: colors.parchmentMid }}>{opt.text}</span>
                                                <span style={{ color: colors.goldAged }}>{opt.votes || 0}</span>
                                            </div>
                                            <div className="h-2 rounded-full overflow-hidden" style={{ background: `${colors.inkSepia}30` }}>
                                                <div
                                                    className="h-full"
                                                    style={{
                                                        background: colors.goldAged,
                                                        width: `${pct}%`
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                                <button
                                    onClick={endPoll}
                                    className="w-full mt-3 py-2 rounded-lg text-sm font-medium"
                                    style={{ background: `${colors.inkBlood}60`, color: colors.parchmentLight }}
                                >
                                    Encerrar Enquete
                                </button>
                            </div>
                        ) : (
                            <div>
                                <p style={{ color: colors.parchmentMid }} className="text-sm mb-3">
                                    Enquetes rápidas:
                                </p>
                                {predefinedPolls.map((poll, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleCreatePoll(poll.question, poll.options)}
                                        className="w-full text-left p-2 mb-2 rounded-lg text-xs transition-all hover:scale-102"
                                        style={{
                                            background: `${colors.inkSepia}30`,
                                            color: colors.parchmentLight,
                                            border: `1px solid ${colors.goldAged}20`
                                        }}
                                    >
                                        {poll.question.slice(0, 50)}...
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Respostas do Quiz - Resumo */}
                    {isQuizPhase && Object.keys(quizResponses).length > 0 && (
                        <div
                            className="p-4 rounded-xl"
                            style={{
                                background: `linear-gradient(135deg, ${colors.woodMedium}80, ${colors.bgSurface}90)`,
                                border: `1px solid ${colors.goldAged}30`
                            }}
                        >
                            <h3 className="font-bold mb-3" style={{ color: colors.goldAged }}>
                                📊 Respostas do Quiz
                            </h3>
                            {Object.keys(quizResponses).map((qId) => {
                                const counts = getQuizCounts(parseInt(qId));
                                return (
                                    <div key={qId} className="mb-2">
                                        <div className="flex justify-between text-xs mb-1">
                                            <span style={{ color: colors.parchmentMid }}>Pergunta {qId}</span>
                                            <span style={{ color: colors.goldAged }}>{counts.total} respostas</span>
                                        </div>
                                        <div className="flex gap-1">
                                            {['sim', 'nao', 'talvez'].map(key => (
                                                <div
                                                    key={key}
                                                    className="text-xs px-1 rounded"
                                                    style={{ background: key === 'sim' ? '#22c55e60' : key === 'nao' ? '#ef444460' : `${colors.goldAged}40` }}
                                                >
                                                    <span style={{ color: colors.parchmentLight }}>
                                                        {key === 'sim' ? '✅' : key === 'nao' ? '❌' : '🤔'} {counts[key]}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* Footer com atalhos */}
            <div className="fixed bottom-4 left-4 right-4 text-center">
                <span style={{ color: colors.parchmentMid }} className="text-xs">
                    ← → Navegar | Home = Quiz | End = Último slide
                </span>
            </div>
        </div>
    );
}
