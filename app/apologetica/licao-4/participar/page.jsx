'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaUsers, FaVoteYea, FaBook, FaLightbulb,
    FaQuestionCircle, FaSearch, FaCheckCircle, FaBookOpen
} from 'react-icons/fa';
import { GiScales } from 'react-icons/gi';
import { useApologeticaSync } from '../../../hooks/useApologeticaSync';

export default function ParticiparPage() {
    const [userName, setUserName] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [checkingSession, setCheckingSession] = useState(true);
    const [hasVoted, setHasVoted] = useState(false);
    const [lastReaction, setLastReaction] = useState(null);

    const {
        currentSlide,
        totalSlides,
        connected,
        attendance,
        currentPoll,
        join,
        react,
        vote,
        slideNotes
    } = useApologeticaSync('participant');

    // Verificar sessão existente
    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                const saved = localStorage.getItem('apologetica_session');
                if (saved) {
                    const session = JSON.parse(saved);
                    if (Date.now() - session.timestamp < 3600000) {
                        setUserName(session.userName);
                        setIsRegistered(true);
                        join(session.userName);
                    } else {
                        localStorage.removeItem('apologetica_session');
                    }
                }
            } catch (e) {
                localStorage.removeItem('apologetica_session');
            }
        }
        setCheckingSession(false);
    }, [join]);

    // Reset voto quando muda o poll
    useEffect(() => {
        if (currentPoll) {
            setHasVoted(false);
        }
    }, [currentPoll?.id]);

    const handleRegister = async () => {
        if (userName.trim()) {
            const result = await join(userName.trim());
            if (result.success) {
                setIsRegistered(true);
            }
        }
    };

    const handleVote = async (optionIndex) => {
        if (currentPoll && !hasVoted) {
            await vote(currentPoll.id, optionIndex);
            setHasVoted(true);
        }
    };

    const handleReaction = async (reactionType) => {
        setLastReaction(reactionType);
        await react(reactionType, userName);

        setTimeout(() => {
            setLastReaction(null);
        }, 1500);
    };

    // Reações contextuais para apologética
    const reactions = [
        { type: 'thinking', icon: '🤔', label: 'Interessante', color: 'from-amber-400 to-orange-500' },
        { type: 'agree', icon: '✅', label: 'Faz sentido', color: 'from-green-400 to-emerald-500' },
        { type: 'question', icon: '❓', label: 'Tenho dúvida', color: 'from-blue-400 to-cyan-500' },
        { type: 'insight', icon: '💡', label: 'Insight!', color: 'from-yellow-400 to-amber-500' },
        { type: 'study', icon: '📖', label: 'Quero estudar', color: 'from-purple-400 to-pink-500' },
        { type: 'key', icon: '🎯', label: 'Ponto-chave', color: 'from-red-400 to-rose-500' }
    ];

    // Loading
    if (checkingSession) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center"
                >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#C9A227] to-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <GiScales className="text-white text-2xl" />
                    </div>
                    <p className="text-white/80">Verificando sessão...</p>
                </motion.div>
            </div>
        );
    }

    // Registro
    if (!isRegistered) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md"
                >
                    <div className="bg-gradient-to-br from-[#1E3A5F]/40 to-black/40 backdrop-blur-xl p-8 rounded-3xl border border-[#C9A227]/30 shadow-2xl">
                        <div className="text-center mb-8">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="w-20 h-20 bg-gradient-to-br from-[#C9A227] to-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-4"
                            >
                                <GiScales className="text-white text-3xl" />
                            </motion.div>
                            <h1 className="text-2xl font-bold text-white mb-2 font-['Cinzel']">Estudo Apologético</h1>
                            <p className="text-[#E8D5B7]">Lição 4: Por Que a Bíblia?</p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-white/80 text-sm font-medium mb-2">
                                    Seu nome:
                                </label>
                                <input
                                    type="text"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    className="w-full px-4 py-3 bg-black/30 border border-[#C9A227]/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#00D9FF] focus:ring-2 focus:ring-[#00D9FF]/20"
                                    placeholder="Digite seu nome"
                                    onKeyPress={(e) => e.key === 'Enter' && handleRegister()}
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleRegister}
                                disabled={!userName.trim()}
                                className="w-full bg-gradient-to-r from-[#C9A227] to-[#00D9FF] disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-3 px-6 rounded-xl transition-all duration-300"
                            >
                                Participar do Estudo
                            </motion.button>
                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-white/60 text-sm flex items-center justify-center">
                                <span className={`w-2 h-2 ${connected ? 'bg-green-400' : 'bg-red-400'} rounded-full mr-2 animate-pulse`} />
                                {connected ? 'Conectado' : 'Conectando...'}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }

    // Interface principal
    const currentNotes = slideNotes[currentSlide] || { title: `Slide ${currentSlide}` };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white">
            {/* Header */}
            <div className="bg-black/30 backdrop-blur-md border-b border-[#C9A227]/20 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#C9A227] to-[#1E3A5F] rounded-full flex items-center justify-center">
                            <GiScales className="text-white text-lg" />
                        </div>
                        <div>
                            <h1 className="font-semibold text-sm">Lição 4 - Apologética</h1>
                            <p className="text-xs text-[#E8D5B7]/60">Olá, {userName}!</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <FaUsers className="text-[#C9A227]" />
                        <span>{attendance}</span>
                    </div>
                </div>
            </div>

            {/* Status de conexão */}
            <AnimatePresence>
                {!connected && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="bg-red-500/20 border border-red-500/30 p-3 m-4 rounded-xl"
                    >
                        <p className="text-center text-red-200">Reconectando...</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="p-4 space-y-6">
                {/* Slide atual */}
                <div className="bg-gradient-to-br from-[#1E3A5F]/40 to-black/40 backdrop-blur-xl p-5 rounded-2xl border border-[#C9A227]/30">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-[#C9A227]">SLIDE ATUAL</span>
                        <span className="text-sm text-[#E8D5B7]">{currentSlide} / {totalSlides}</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#E8D5B7] font-['Cinzel']">
                        {currentNotes.title}
                    </h2>
                    {/* Progress bar */}
                    <div className="mt-3 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[#C9A227] to-[#00D9FF]"
                            animate={{ width: `${(currentSlide / totalSlides) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Enquete ativa */}
                <AnimatePresence>
                    {currentPoll && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-xl p-6 rounded-2xl border border-purple-400/30"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <FaVoteYea className="text-2xl text-purple-300" />
                                <h2 className="text-lg font-semibold">Votação!</h2>
                            </div>

                            <p className="text-white/90 mb-5">{currentPoll.question}</p>

                            <div className="space-y-3">
                                {currentPoll.options.map((option, index) => {
                                    const totalVotes = currentPoll.options.reduce((sum, opt) => sum + opt.votes, 0);
                                    const pct = totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;

                                    return (
                                        <motion.button
                                            key={index}
                                            whileHover={{ scale: hasVoted ? 1 : 1.02 }}
                                            whileTap={{ scale: hasVoted ? 1 : 0.98 }}
                                            onClick={() => handleVote(index)}
                                            disabled={hasVoted}
                                            className={`w-full p-4 rounded-xl border transition-all duration-300 relative overflow-hidden ${hasVoted
                                                    ? 'border-white/20 cursor-default'
                                                    : 'border-purple-400/50 hover:border-[#00D9FF] hover:bg-purple-500/10'
                                                }`}
                                        >
                                            {hasVoted && (
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${pct}%` }}
                                                    transition={{ duration: 1, delay: 0.2 }}
                                                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500/30 to-[#00D9FF]/30"
                                                />
                                            )}
                                            <div className="relative flex items-center justify-between">
                                                <span className="font-medium">{option.text}</span>
                                                {hasVoted && (
                                                    <span className="text-sm text-[#00D9FF]">{pct.toFixed(0)}%</span>
                                                )}
                                            </div>
                                        </motion.button>
                                    );
                                })}
                            </div>

                            {hasVoted && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center text-green-300 mt-4 font-medium flex items-center justify-center gap-2"
                                >
                                    <FaCheckCircle /> Voto registrado!
                                </motion.p>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Painel de Reações */}
                <div className="bg-gradient-to-br from-[#1E3A5F]/40 to-black/40 backdrop-blur-xl p-6 rounded-2xl border border-[#C9A227]/30">
                    <div className="flex items-center gap-3 mb-4">
                        <FaLightbulb className="text-2xl text-[#C9A227]" />
                        <h2 className="text-lg font-semibold">Suas Reações</h2>
                    </div>

                    <p className="text-[#E8D5B7]/70 mb-4 text-sm">
                        Reaja ao conteúdo durante a apresentação:
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                        {reactions.map((reaction) => (
                            <motion.button
                                key={reaction.type}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleReaction(reaction.type)}
                                className={`p-4 rounded-xl bg-gradient-to-r ${reaction.color} transition-all duration-300 flex flex-col items-center gap-2 ${lastReaction === reaction.type ? 'ring-2 ring-white ring-offset-2 ring-offset-transparent' : ''
                                    }`}
                            >
                                <span className="text-2xl">{reaction.icon}</span>
                                <span className="text-sm font-medium text-white">{reaction.label}</span>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Info da Lição */}
                <div className="bg-black/30 backdrop-blur-xl p-5 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                        <FaBookOpen className="text-xl text-[#E8D5B7]" />
                        <h2 className="text-lg font-semibold text-[#E8D5B7]">Sobre Esta Lição</h2>
                    </div>
                    <p className="text-sm text-white/70">
                        Estamos analisando diferentes textos sagrados usando 5 critérios objetivos para
                        avaliar alegações de revelação divina.
                    </p>
                </div>
            </div>
        </div>
    );
}
