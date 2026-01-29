'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLicao6Sync } from '../useLicao6Sync';
import { colors, quizQuestions } from '../slides/shared';

// Enquetes pré-definidas
const predefinedPolls = [
    {
        question: 'Como você explicaria para uma criança por que a Bíblia da vovó tem mais livros?',
        options: ['Contaria sobre os critérios', 'Diria que são tradições diferentes', 'Prefiro não tocar no assunto']
    },
    {
        question: 'Qual critério do cânon do NT você acha mais importante?',
        options: ['Apostolicidade', 'Ortodoxia', 'Catolicidade', 'Uso litúrgico']
    },
    {
        question: 'Cantares deveria estar na Bíblia?',
        options: ['Sim, alegoria Cristo-Igreja', 'Sim, celebração do casamento', 'Ambos!', 'Não sei']
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
        getCurrentNotes,
        createPoll,
        endPoll
    } = useLicao6Sync('presenter');

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

    return (
        <div className="min-h-screen p-4" style={{ background: colors.bgDeep }}>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold" style={{ color: colors.goldLeaf }}>
                    📜 Lição 6 — Apresentador
                </h1>
                <div className="flex items-center gap-4">
                    <span className={`w-3 h-3 rounded-full ${connected ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span style={{ color: colors.parchmentMid }}>
                        {connected ? 'Conectado' : 'Desconectado'}
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 rounded-full" style={{ background: `${colors.goldLeaf}20` }}>
                        <span>👥</span>
                        <span style={{ color: colors.goldLeaf }} className="font-bold">{attendance}</span>
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
                            background: `linear-gradient(135deg, ${colors.libraryWood}80, ${colors.bgSurface}90)`,
                            border: `1px solid ${colors.goldLeaf}30`
                        }}
                    >
                        <h2 className="text-lg font-bold mb-3" style={{ color: colors.goldLeaf }}>
                            {isQuizPhase ? '🎮 Quiz Interativo' : `📑 Slide ${currentSlide}`}
                        </h2>

                        {isQuizPhase ? (
                            <div>
                                <p style={{ color: colors.parchmentMid }} className="mb-2">
                                    Pergunta {currentQuizQuestion} de {totalQuizQuestions}
                                </p>
                                <p style={{ color: colors.parchmentLight }} className="text-sm">
                                    {quizQuestions[currentQuizQuestion - 1]?.question}
                                </p>
                                {quizResponses[currentQuizQuestion] && (
                                    <div className="mt-3 p-3 rounded" style={{ background: `${colors.goldLeaf}20` }}>
                                        <p className="text-xs mb-2" style={{ color: colors.goldLeaf }}>Respostas:</p>
                                        {['sim', 'nao', 'talvez'].map(key => {
                                            const response = quizResponses[currentQuizQuestion];
                                            const count = typeof response === 'object' ? (response[key] || 0) : 0;
                                            const total = typeof response === 'object'
                                                ? Object.values(response).reduce((a, b) => a + b, 0)
                                                : 0;
                                            const emoji = key === 'sim' ? '✅' : key === 'nao' ? '❌' : '🤔';
                                            return (
                                                <div key={key} className="mb-1">
                                                    <div className="flex justify-between text-xs mb-0.5">
                                                        <span style={{ color: colors.parchmentLight }}>{emoji} {key}</span>
                                                        <span style={{ color: colors.goldLeaf }}>{count}</span>
                                                    </div>
                                                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: `${colors.sepia}30` }}>
                                                        <div
                                                            className="h-full transition-all"
                                                            style={{
                                                                background: key === 'sim' ? colors.forest : key === 'nao' ? colors.vermillion : colors.goldLeaf,
                                                                width: total > 0 ? `${(count / total) * 100}%` : '0%'
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <p style={{ color: colors.parchmentLight }}>{notes.title}</p>
                        )}
                    </div>

                    {/* Navegação */}
                    <div
                        className="p-4 rounded-xl"
                        style={{
                            background: `linear-gradient(135deg, ${colors.libraryWood}80, ${colors.bgSurface}90)`,
                            border: `1px solid ${colors.goldLeaf}30`
                        }}
                    >
                        <h3 className="font-bold mb-3" style={{ color: colors.goldLeaf }}>Navegação</h3>

                        <div className="flex gap-2 mb-4">
                            <button
                                onClick={prevSlide}
                                className="flex-1 py-2 px-4 rounded-lg font-medium transition-all hover:scale-105"
                                style={{
                                    background: `${colors.sepia}60`,
                                    color: colors.parchmentLight
                                }}
                            >
                                ← Anterior
                            </button>
                            <button
                                onClick={nextSlide}
                                className="flex-1 py-2 px-4 rounded-lg font-medium transition-all hover:scale-105"
                                style={{
                                    background: colors.goldLeaf,
                                    color: colors.bgDeep
                                }}
                            >
                                Próximo →
                            </button>
                        </div>

                        {/* Barra de progresso */}
                        <div className="h-2 rounded-full overflow-hidden mb-2" style={{ background: `${colors.sepia}30` }}>
                            <div
                                className="h-full transition-all"
                                style={{
                                    background: colors.goldLeaf,
                                    width: isQuizPhase
                                        ? `${(currentQuizQuestion / totalQuizQuestions) * 100}%`
                                        : `${(currentSlide / totalSlides) * 100}%`
                                }}
                            />
                        </div>

                        {/* Navegação direta */}
                        <div className="grid grid-cols-5 gap-1 mt-4">
                            {/* Quiz button */}
                            <button
                                onClick={() => { goToSlide(0); goToQuizQuestion(1); }}
                                className={`p-2 rounded text-xs font-medium transition-all ${currentSlide === 0 ? 'ring-2 ring-offset-1' : ''}`}
                                style={{
                                    background: currentSlide === 0 ? colors.goldLeaf : `${colors.sepia}40`,
                                    color: currentSlide === 0 ? colors.bgDeep : colors.parchmentMid,
                                    ringColor: colors.goldLeaf
                                }}
                            >
                                Quiz
                            </button>
                            {/* Slide buttons */}
                            {[...Array(totalSlides)].map((_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => goToSlide(i + 1)}
                                    className={`p-2 rounded text-xs font-medium transition-all ${currentSlide === i + 1 ? 'ring-2 ring-offset-1' : ''}`}
                                    style={{
                                        background: currentSlide === i + 1 ? colors.goldLeaf : `${colors.sepia}40`,
                                        color: currentSlide === i + 1 ? colors.bgDeep : colors.parchmentMid,
                                        ringColor: colors.goldLeaf
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
                            background: `linear-gradient(135deg, ${colors.libraryWood}80, ${colors.bgSurface}90)`,
                            border: `1px solid ${colors.goldLeaf}30`
                        }}
                    >
                        <h3 className="font-bold mb-3" style={{ color: colors.goldLeaf }}>Reações Recentes</h3>
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
                            background: `linear-gradient(135deg, ${colors.parchmentDark}15, ${colors.libraryWood}40)`,
                            border: `1px solid ${colors.goldLeaf}30`
                        }}
                    >
                        <h2 className="text-xl font-bold mb-4" style={{ color: colors.goldLeaf }}>
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
                                    <span style={{ color: colors.goldLeaf }}>•</span>
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
                            background: `linear-gradient(135deg, ${colors.libraryWood}80, ${colors.bgSurface}90)`,
                            border: `1px solid ${colors.goldLeaf}30`
                        }}
                    >
                        <h3 className="font-bold mb-3" style={{ color: colors.goldLeaf }}>🗳️ Enquetes</h3>

                        {currentPoll ? (
                            <div>
                                <p style={{ color: colors.parchmentLight }} className="mb-3 text-sm">
                                    {currentPoll.question}
                                </p>
                                {currentPoll.options.map((opt, i) => (
                                    <div key={i} className="mb-2">
                                        <div className="flex justify-between text-xs mb-1">
                                            <span style={{ color: colors.parchmentMid }}>{opt.text}</span>
                                            <span style={{ color: colors.goldLeaf }}>{opt.votes}</span>
                                        </div>
                                        <div className="h-2 rounded-full overflow-hidden" style={{ background: `${colors.sepia}30` }}>
                                            <div
                                                className="h-full"
                                                style={{
                                                    background: colors.goldLeaf,
                                                    width: `${(opt.votes / Math.max(1, currentPoll.options.reduce((a, b) => a + b.votes, 0))) * 100}%`
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                                <button
                                    onClick={endPoll}
                                    className="w-full mt-3 py-2 rounded-lg text-sm font-medium"
                                    style={{ background: `${colors.vermillion}60`, color: colors.parchmentLight }}
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
                                            background: `${colors.sepia}30`,
                                            color: colors.parchmentLight,
                                            border: `1px solid ${colors.goldLeaf}20`
                                        }}
                                    >
                                        {poll.question.slice(0, 60)}...
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Respostas do Quiz */}
                    {isQuizPhase && Object.keys(quizResponses).length > 0 && (
                        <div
                            className="p-4 rounded-xl"
                            style={{
                                background: `linear-gradient(135deg, ${colors.libraryWood}80, ${colors.bgSurface}90)`,
                                border: `1px solid ${colors.goldLeaf}30`
                            }}
                        >
                            <h3 className="font-bold mb-3" style={{ color: colors.goldLeaf }}>
                                📊 Respostas do Quiz
                            </h3>
                            {Object.entries(quizResponses).map(([q, r]) => {
                                const responses = typeof r === 'object' ? r : {};
                                const total = Object.values(responses).reduce((a, b) => a + b, 0);
                                return (
                                    <div key={q} className="mb-2">
                                        <div className="flex justify-between text-xs mb-1">
                                            <span style={{ color: colors.parchmentMid }}>Pergunta {q}</span>
                                            <span style={{ color: colors.goldLeaf }}>{total} respostas</span>
                                        </div>
                                        <div className="flex gap-1">
                                            {['sim', 'nao', 'talvez'].map(key => (
                                                <div
                                                    key={key}
                                                    className="text-xs px-1 rounded"
                                                    style={{ background: key === 'sim' ? `${colors.forest}60` : key === 'nao' ? `${colors.vermillion}60` : `${colors.goldLeaf}40` }}
                                                >
                                                    <span style={{ color: colors.parchmentLight }}>
                                                        {key === 'sim' ? '✅' : key === 'nao' ? '❌' : '🤔'} {responses[key] || 0}
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
