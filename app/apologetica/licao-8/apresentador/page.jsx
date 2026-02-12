// Lição 8 — Painel do Apresentador
'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLicao8Sync } from '../useLicao8Sync';
import { colors, reactions, quizQuestions } from '../slides/shared';

const predefinedPolls = [
    { question: 'Você costuma comparar versões da Bíblia?', options: ['Sempre', 'Às vezes', 'Nunca', 'Vou começar!'] },
    { question: 'Qual versão você mais usa?', options: ['ARA', 'NVI', 'NAA', 'NVT', 'Outra'] },
    { question: 'Você já pesquisou o texto original?', options: ['Sim', 'Não', 'Quero aprender'] },
    { question: 'Qual ferramenta mais te interessou?', options: ['BibleHub', 'BlueLetterBible', 'biblia.com.br', 'StepBible'] },
];

export default function Licao8Apresentador() {
    const {
        currentSlide,
        totalSlides,
        currentQuizQuestion,
        totalQuizQuestions,
        quizResponses,
        connected,
        attendance,
        recentReactions,
        currentPoll,
        goToSlide,
        nextSlide,
        prevSlide,
        goToQuizQuestion,
        createPoll,
        endPoll,
        getCurrentNotes,
    } = useLicao8Sync('presenter');

    const [showPollCreator, setShowPollCreator] = useState(false);

    // Atalhos de teclado
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
            } else if (e.key === 'Home') {
                e.preventDefault();
                goToSlide(0);
            } else if (e.key === 'End') {
                e.preventDefault();
                goToSlide(totalSlides);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide, goToSlide, totalSlides]);

    const notes = getCurrentNotes();

    return (
        <div className="min-h-screen p-4" style={{ background: colors.bgDeep, color: colors.textLight }}>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold" style={{ color: colors.goldBright }}>
                    📐 Lição 8 — Apresentador
                </h1>
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ background: connected ? '#22c55e' : '#ef4444' }} />
                        <span style={{ color: colors.textMedium }}>{connected ? 'Online' : 'Offline'}</span>
                    </div>
                    <span style={{ color: colors.textMedium }}>👥 {attendance}</span>
                </div>
            </div>

            {/* Layout 3 colunas */}
            <div className="grid grid-cols-12 gap-4" style={{ height: 'calc(100vh - 100px)' }}>
                {/* Esquerda: Status + Navegação + Reações */}
                <div className="col-span-4 space-y-4 overflow-y-auto">
                    {/* Status atual */}
                    <div className="p-3 rounded-lg" style={{ background: colors.bgSurface, border: `1px solid ${colors.goldAged}20` }}>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            {currentSlide === 0 ? `Quiz — Pergunta ${currentQuizQuestion}/${totalQuizQuestions}` : `Slide ${currentSlide}/${totalSlides}`}
                        </p>
                    </div>

                    {/* Navegação rápida */}
                    <div className="p-3 rounded-lg" style={{ background: colors.bgSurface, border: `1px solid ${colors.goldAged}20` }}>
                        <p className="text-xs font-bold mb-2" style={{ color: colors.goldAged }}>NAVEGAÇÃO</p>
                        <div className="flex gap-1 mb-2">
                            <button
                                onClick={() => goToSlide(0)}
                                className="px-2 py-1 text-xs rounded"
                                style={{
                                    background: currentSlide === 0 ? colors.goldAged : `${colors.bgDeep}80`,
                                    color: currentSlide === 0 ? colors.bgDeep : colors.textMedium,
                                    border: `1px solid ${colors.goldAged}30`
                                }}
                            >
                                Quiz
                            </button>
                        </div>
                        <div className="grid grid-cols-8 gap-1">
                            {Array.from({ length: totalSlides }, (_, i) => i + 1).map(num => (
                                <button
                                    key={num}
                                    onClick={() => goToSlide(num)}
                                    className="p-1 text-xs rounded text-center"
                                    style={{
                                        background: currentSlide === num ? colors.goldAged : `${colors.bgDeep}80`,
                                        color: currentSlide === num ? colors.bgDeep : colors.textMedium,
                                        border: `1px solid ${colors.goldAged}20`
                                    }}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>

                        {/* Navegação por quiz */}
                        {currentSlide === 0 && (
                            <div className="mt-3">
                                <p className="text-xs mb-1" style={{ color: colors.goldAged }}>Quiz:</p>
                                <div className="flex gap-1">
                                    {Array.from({ length: totalQuizQuestions }, (_, i) => i + 1).map(num => (
                                        <button
                                            key={num}
                                            onClick={() => goToQuizQuestion(num)}
                                            className="px-2 py-1 text-xs rounded"
                                            style={{
                                                background: currentQuizQuestion === num ? colors.greekPrimary : `${colors.bgDeep}80`,
                                                color: currentQuizQuestion === num ? '#fff' : colors.textMedium,
                                                border: `1px solid ${colors.greekPrimary}30`
                                            }}
                                        >
                                            Q{num}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Reações recentes */}
                    <div className="p-3 rounded-lg" style={{ background: colors.bgSurface, border: `1px solid ${colors.goldAged}20` }}>
                        <p className="text-xs font-bold mb-2" style={{ color: colors.goldAged }}>REAÇÕES RECENTES</p>
                        <div className="flex flex-wrap gap-1 min-h-[40px]">
                            <AnimatePresence>
                                {recentReactions.map((r) => (
                                    <motion.span
                                        key={r.id}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="text-xl"
                                    >
                                        {r.icon}
                                    </motion.span>
                                ))}
                            </AnimatePresence>
                            {recentReactions.length === 0 && (
                                <span className="text-xs italic" style={{ color: colors.textMedium }}>Nenhuma reação ainda...</span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Centro: Notas do instrutor */}
                <div className="col-span-5 overflow-y-auto p-4 rounded-lg" style={{ background: colors.bgSurface, border: `1px solid ${colors.goldAged}20` }}>
                    <p className="text-xs font-bold mb-3" style={{ color: colors.goldAged }}>
                        📝 NOTAS — {notes.title || `Slide ${currentSlide}`}
                    </p>
                    <div className="space-y-2">
                        {notes.notes && notes.notes.length > 0 ? (
                            notes.notes.map((note, i) => (
                                <p key={i} className="text-sm" style={{ color: colors.textLight }}>
                                    • {note}
                                </p>
                            ))
                        ) : (
                            <p className="text-sm italic" style={{ color: colors.textMedium }}>
                                Sem notas para este slide.
                            </p>
                        )}
                    </div>
                </div>

                {/* Direita: Polls + Quiz Respostas */}
                <div className="col-span-3 space-y-4 overflow-y-auto">
                    {/* Polls */}
                    <div className="p-3 rounded-lg" style={{ background: colors.bgSurface, border: `1px solid ${colors.goldAged}20` }}>
                        <p className="text-xs font-bold mb-2" style={{ color: colors.goldAged }}>ENQUETES</p>

                        {currentPoll ? (
                            <div className="space-y-2">
                                <p className="text-sm font-bold" style={{ color: colors.textLight }}>
                                    {currentPoll.question}
                                </p>
                                {currentPoll.options?.map((opt, i) => (
                                    <div key={i} className="text-xs flex items-center gap-2">
                                        <span style={{ color: colors.textMedium }}>{opt.text}:</span>
                                        <span style={{ color: colors.goldAged }}>{opt.votes}</span>
                                    </div>
                                ))}
                                <button
                                    onClick={endPoll}
                                    className="w-full mt-2 px-3 py-1 text-xs rounded"
                                    style={{
                                        background: colors.alertTerracota,
                                        color: '#fff'
                                    }}
                                >
                                    Encerrar enquete
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                {predefinedPolls.map((poll, i) => (
                                    <button
                                        key={i}
                                        onClick={() => createPoll(poll.question, poll.options)}
                                        className="w-full text-left px-2 py-1 text-xs rounded hover:opacity-80"
                                        style={{
                                            background: `${colors.bgDeep}80`,
                                            color: colors.textLight,
                                            border: `1px solid ${colors.goldAged}15`
                                        }}
                                    >
                                        📊 {poll.question}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Quiz Responses */}
                    <div className="p-3 rounded-lg" style={{ background: colors.bgSurface, border: `1px solid ${colors.goldAged}20` }}>
                        <p className="text-xs font-bold mb-2" style={{ color: colors.goldAged }}>QUIZ — RESPOSTAS</p>
                        <div className="space-y-2">
                            {quizQuestions.map(q => {
                                const resp = quizResponses[q.id] || {};
                                const total = Object.keys(resp).length;
                                const sim = Object.values(resp).filter(v => v === 'sim').length;
                                const nao = Object.values(resp).filter(v => v === 'nao').length;
                                const talvez = Object.values(resp).filter(v => v === 'talvez').length;

                                return (
                                    <div key={q.id} className="text-xs">
                                        <p className="truncate" style={{ color: colors.textLight }}>
                                            {q.icon} Q{q.id}: {total > 0 ? `S:${sim} N:${nao} T:${talvez}` : '—'}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Barra inferior: controles */}
            <div className="fixed bottom-0 left-0 right-0 p-3 flex items-center justify-center gap-4"
                style={{
                    background: `${colors.bgDeep}EE`,
                    borderTop: `1px solid ${colors.goldAged}20`
                }}
            >
                <button
                    onClick={prevSlide}
                    className="px-4 py-2 rounded text-sm"
                    style={{ background: colors.bgSurface, color: colors.textLight, border: `1px solid ${colors.goldAged}30` }}
                >
                    ← Anterior
                </button>
                <span className="text-sm" style={{ color: colors.goldAged }}>
                    {currentSlide === 0 ? `Quiz Q${currentQuizQuestion}` : `${currentSlide} / ${totalSlides}`}
                </span>
                <button
                    onClick={nextSlide}
                    className="px-4 py-2 rounded text-sm"
                    style={{ background: colors.goldAged, color: colors.bgDeep }}
                >
                    Próximo →
                </button>
            </div>
        </div>
    );
}
