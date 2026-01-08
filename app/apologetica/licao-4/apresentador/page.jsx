'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaChevronLeft, FaChevronRight, FaUsers, FaChartBar,
    FaLightbulb, FaExclamationTriangle, FaCheckCircle
} from 'react-icons/fa';
import { GiScales } from 'react-icons/gi';
import { useApologeticaSync } from '../../../hooks/useApologeticaSync';

export default function ApresentadorPage() {
    const [showPollCreator, setShowPollCreator] = useState(false);
    const [pollQuestion, setPollQuestion] = useState('');
    const [pollOptions, setPollOptions] = useState(['', '']);

    const {
        currentSlide,
        totalSlides,
        connected,
        attendance,
        currentPoll,
        recentReactions,
        nextSlide,
        prevSlide,
        goToSlide,
        getCurrentNotes,
        createPoll,
        endPoll
    } = useApologeticaSync('presenter');

    const notes = getCurrentNotes();

    // Polls pré-definidos para a lição
    const predefinedPolls = [
        {
            question: 'Qual critério você considera MAIS importante para avaliar uma alegação de revelação?',
            options: ['Coerência Interna', 'Verificabilidade', 'Corresponde à Realidade', 'Integridade das Fontes', 'Frutos Históricos']
        },
        {
            question: 'Antes de analisarmos: qual tradição você acha que vai se sair melhor nos critérios?',
            options: ['Vedas', 'Budismo', 'Alcorão', 'Mórmon', 'Bíblia', 'Todas iguais']
        },
        {
            question: 'O critério da "realidade humana" ressoa com você?',
            options: ['Sim, muito!', 'Um pouco', 'Não tenho certeza', 'Não, prefiro outros']
        }
    ];

    const handleCreatePoll = async (poll) => {
        await createPoll(poll.question, poll.options);
        setShowPollCreator(false);
    };

    const handleCustomPoll = async () => {
        if (pollQuestion.trim() && pollOptions.filter(o => o.trim()).length >= 2) {
            await createPoll(pollQuestion, pollOptions.filter(o => o.trim()));
            setPollQuestion('');
            setPollOptions(['', '']);
            setShowPollCreator(false);
        }
    };

    // Contagem de reações recentes
    const reactionCounts = recentReactions.reduce((acc, r) => {
        acc[r.type] = (acc[r.type] || 0) + 1;
        return acc;
    }, {});

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#C9A227] to-[#1E3A5F] rounded-full flex items-center justify-center">
                        <GiScales className="text-white text-lg" />
                    </div>
                    <div>
                        <h1 className="font-semibold text-sm">Lição 4 - Apologética</h1>
                        <p className="text-xs text-white/60">Interface do Apresentador</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${connected ? 'bg-green-400' : 'bg-red-400'} animate-pulse`} />
                    <FaUsers className="text-[#C9A227]" />
                    <span className="text-sm">{attendance}</span>
                </div>
            </div>

            {/* Slide atual */}
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 mb-4 border border-[#C9A227]/20">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-white/50">SLIDE ATUAL</span>
                    <span className="text-[#C9A227] font-bold">{currentSlide} / {totalSlides}</span>
                </div>

                <h2 className="text-xl font-bold text-[#E8D5B7] mb-2">{notes.title}</h2>

                {/* Barra de progresso */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-[#C9A227] to-[#00D9FF]"
                        initial={{ width: 0 }}
                        animate={{ width: `${(currentSlide / totalSlides) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            {/* Notas do Instrutor */}
            <div className="bg-gradient-to-br from-[#1E3A5F]/40 to-black/40 backdrop-blur-md rounded-2xl p-4 mb-4 border border-[#C9A227]/30">
                <h3 className="text-sm font-bold text-[#C9A227] mb-3 flex items-center gap-2">
                    📝 NOTAS DO INSTRUTOR
                </h3>
                <ul className="space-y-2">
                    {notes.notes.map((note, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-2 text-sm text-[#E8D5B7]"
                        >
                            {note.includes('💡') || note.includes('⚠️') ? (
                                <span className="mt-0.5">{note.includes('💡') ? <FaLightbulb className="text-yellow-400" /> : <FaExclamationTriangle className="text-orange-400" />}</span>
                            ) : (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mt-2 flex-shrink-0" />
                            )}
                            <span>{note.replace('💡 ', '').replace('⚠️ ', '')}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>

            {/* Reações em tempo real */}
            {recentReactions.length > 0 && (
                <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 mb-4 border border-white/10">
                    <h3 className="text-xs text-white/50 mb-2">REAÇÕES AO VIVO</h3>
                    <div className="flex flex-wrap gap-2">
                        {Object.entries(reactionCounts).map(([type, count]) => (
                            <div key={type} className="bg-white/10 rounded-full px-3 py-1 flex items-center gap-1">
                                <span>
                                    {type === 'thinking' && '🤔'}
                                    {type === 'agree' && '✅'}
                                    {type === 'question' && '❓'}
                                    {type === 'insight' && '💡'}
                                    {type === 'study' && '📖'}
                                    {type === 'key' && '🎯'}
                                </span>
                                <span className="text-sm font-bold">{count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Poll ativo */}
            {currentPoll && (
                <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-md rounded-2xl p-4 mb-4 border border-purple-400/30">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-bold text-purple-300 flex items-center gap-2">
                            <FaChartBar /> ENQUETE ATIVA
                        </h3>
                        <button
                            onClick={endPoll}
                            className="text-xs bg-red-500/20 text-red-300 px-3 py-1 rounded-full border border-red-500/30"
                        >
                            Encerrar
                        </button>
                    </div>
                    <p className="text-sm text-white/90 mb-3">{currentPoll.question}</p>
                    <div className="space-y-2">
                        {currentPoll.options.map((opt, i) => {
                            const total = currentPoll.options.reduce((sum, o) => sum + o.votes, 0);
                            const pct = total > 0 ? (opt.votes / total) * 100 : 0;
                            return (
                                <div key={i} className="relative bg-white/5 rounded-lg p-2 overflow-hidden">
                                    <motion.div
                                        className="absolute inset-0 bg-purple-500/20"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${pct}%` }}
                                    />
                                    <div className="relative flex justify-between text-sm">
                                        <span>{opt.text}</span>
                                        <span className="font-bold">{opt.votes} ({pct.toFixed(0)}%)</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Botão de criar poll */}
            {!currentPoll && (
                <button
                    onClick={() => setShowPollCreator(!showPollCreator)}
                    className="w-full bg-purple-500/20 border border-purple-400/30 rounded-xl p-3 mb-4 flex items-center justify-center gap-2 text-purple-300"
                >
                    <FaChartBar /> {showPollCreator ? 'Fechar' : 'Criar Enquete'}
                </button>
            )}

            {/* Poll creator */}
            <AnimatePresence>
                {showPollCreator && !currentPoll && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-black/30 backdrop-blur-md rounded-2xl p-4 mb-4 border border-purple-400/20 overflow-hidden"
                    >
                        <h4 className="text-sm font-bold text-purple-300 mb-3">Polls pré-definidos:</h4>
                        <div className="space-y-2 mb-4">
                            {predefinedPolls.map((poll, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleCreatePoll(poll)}
                                    className="w-full text-left bg-purple-500/10 hover:bg-purple-500/20 border border-purple-400/20 rounded-xl p-3 text-sm transition-all"
                                >
                                    {poll.question}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Navegação */}
            <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/10 p-4">
                <div className="flex items-center justify-between gap-4">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={prevSlide}
                        disabled={currentSlide <= 1}
                        className="flex-1 bg-gradient-to-r from-[#1E3A5F] to-[#0D1117] disabled:opacity-30 py-4 rounded-xl flex items-center justify-center gap-2 border border-[#C9A227]/30"
                    >
                        <FaChevronLeft /> Anterior
                    </motion.button>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={nextSlide}
                        disabled={currentSlide >= totalSlides}
                        className="flex-1 bg-gradient-to-r from-[#C9A227] to-[#00D9FF] disabled:opacity-30 py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-black"
                    >
                        Próximo <FaChevronRight />
                    </motion.button>
                </div>
            </div>

            {/* Spacer for fixed navigation */}
            <div className="h-24" />
        </div>
    );
}
