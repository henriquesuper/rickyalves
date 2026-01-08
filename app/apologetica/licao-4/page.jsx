'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import {
    FaBook, FaBalanceScale, FaSearch, FaHeart, FaScroll,
    FaStar, FaPray, FaCross, FaChurch, FaQuoteLeft
} from 'react-icons/fa';
import { GiAncientSword, GiScrollUnfurled, GiScales } from 'react-icons/gi';
import { BiInfinite } from 'react-icons/bi';
import { useApologeticaSync } from '../../hooks/useApologeticaSync';

// Dynamically import 3D component
const TruthScale3D = dynamic(() => import('../../components/TruthScale3D'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[500px] flex items-center justify-center">
            <div className="text-gold-ancient animate-pulse">Carregando Balança 3D...</div>
        </div>
    )
});

// Cores do tema
const colors = {
    goldAncient: '#C9A227',
    goldLight: '#E8D5B7',
    parchmentBlue: '#1E3A5F',
    bgDeep: '#0D1117',
    bgSurface: '#1A1F2E',
    truthCyan: '#00D9FF',
    vedas: '#FF9500',
    buddhism: '#FFD700',
    islam: '#2E7D32',
    mormon: '#1565C0',
    bible: '#00D9FF'
};

// Ícones de tradição
const traditionIcons = {
    vedas: '🕉️',
    buddhism: '☸️',
    islam: '☪️',
    mormon: '📜',
    bible: '✝️'
};

// Dados das tradições
const traditions = [
    {
        id: 'vedas',
        name: 'Vedas Hindus',
        color: colors.vedas,
        icon: '🕉️',
        claim: 'Conhecimento eterno (apaurusheya — "não de origem humana"). Os Vedas foram "ouvidos" pelos sábios.',
        worldview: 'Realidade última (Brahman) é impessoal. Mundo material é maya (ilusão).',
        scores: { coherence: 50, verifiability: 0, humanity: 30, integrity: 40, fruits: 50 }
    },
    {
        id: 'buddhism',
        name: 'Textos Budistas',
        color: colors.buddhism,
        icon: '☸️',
        claim: 'Sabedoria humana iluminada. Buda descobriu a verdade através da meditação.',
        worldview: 'Sofrimento vem do desejo. Não há Deus criador pessoal.',
        scores: { coherence: 40, verifiability: 40, humanity: 50, integrity: 40, fruits: 70 }
    },
    {
        id: 'islam',
        name: 'Alcorão',
        color: colors.islam,
        icon: '☪️',
        claim: 'Ditado verbal direto de Alá. O texto árabe é perfeito e inalterável.',
        worldview: 'Monoteísmo estrito. Alá é absolutamente transcendente.',
        scores: { coherence: 60, verifiability: 40, humanity: 50, integrity: 60, fruits: 50 }
    },
    {
        id: 'mormon',
        name: 'Livro de Mórmon',
        color: colors.mormon,
        icon: '📜',
        claim: 'Tradução de placas de ouro por Joseph Smith através de instrumentos divinos.',
        worldview: 'Restauracionismo. Deus tem corpo físico.',
        scores: { coherence: 30, verifiability: 10, humanity: 50, integrity: 30, fruits: 50 }
    },
    {
        id: 'bible',
        name: 'Bíblia',
        color: colors.bible,
        icon: '✝️',
        claim: 'Inspiração através de autores humanos. 66 livros, ~1500 anos, ~40 autores.',
        worldview: 'Deus pessoal, criador, que se relaciona com a humanidade. Graça e redenção.',
        scores: { coherence: 85, verifiability: 80, humanity: 95, integrity: 95, fruits: 85 }
    }
];

// Critérios
const criteria = [
    { id: 'coherence', name: 'Coerência Interna', icon: '🔗', description: 'O texto se contradiz ou mantém unidade?' },
    { id: 'verifiability', name: 'Verificabilidade Histórica', icon: '🔍', description: 'As alegações podem ser testadas?' },
    { id: 'humanity', name: 'Correspondência com Realidade', icon: '❤️', description: 'Reflete a experiência humana real?' },
    { id: 'integrity', name: 'Integridade das Fontes', icon: '📜', description: 'Podemos confiar na transmissão?' },
    { id: 'fruits', name: 'Frutos Históricos', icon: '🌳', description: 'O que produziu quando levada a sério?' }
];

// Posições fixas para partículas (evita hydration mismatch)
const particlePositions = [
    { left: 5, top: 12, duration: 6, delay: 0.5 },
    { left: 15, top: 85, duration: 7, delay: 1.2 },
    { left: 25, top: 30, duration: 5.5, delay: 2.8 },
    { left: 35, top: 65, duration: 8, delay: 0.3 },
    { left: 45, top: 20, duration: 6.5, delay: 3.5 },
    { left: 55, top: 90, duration: 7.5, delay: 1.8 },
    { left: 65, top: 45, duration: 5, delay: 4.2 },
    { left: 75, top: 70, duration: 9, delay: 0.8 },
    { left: 85, top: 15, duration: 6.2, delay: 2.1 },
    { left: 95, top: 55, duration: 7.8, delay: 3.9 },
    { left: 10, top: 40, duration: 5.8, delay: 1.5 },
    { left: 20, top: 75, duration: 6.8, delay: 4.5 },
    { left: 30, top: 10, duration: 7.2, delay: 0.2 },
    { left: 40, top: 50, duration: 8.5, delay: 2.5 },
    { left: 50, top: 80, duration: 5.3, delay: 3.2 },
    { left: 60, top: 25, duration: 6.7, delay: 1.0 },
    { left: 70, top: 60, duration: 7.3, delay: 4.0 },
    { left: 80, top: 35, duration: 8.2, delay: 0.7 },
    { left: 90, top: 95, duration: 5.7, delay: 2.3 },
    { left: 8, top: 58, duration: 6.3, delay: 3.7 },
    { left: 18, top: 22, duration: 7.7, delay: 1.3 },
    { left: 28, top: 88, duration: 5.2, delay: 4.8 },
    { left: 38, top: 42, duration: 8.8, delay: 0.1 },
    { left: 48, top: 68, duration: 6.1, delay: 2.9 },
    { left: 58, top: 8, duration: 7.1, delay: 3.4 },
    { left: 68, top: 52, duration: 5.9, delay: 1.7 },
    { left: 78, top: 82, duration: 8.3, delay: 4.3 },
    { left: 88, top: 28, duration: 6.6, delay: 0.6 },
    { left: 98, top: 72, duration: 7.4, delay: 2.0 },
    { left: 3, top: 48, duration: 5.4, delay: 3.1 },
];

// Partículas de fundo
function GoldenParticles() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particlePositions.map((particle, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                        background: `radial-gradient(circle, ${colors.goldAncient} 0%, transparent 70%)`,
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 1.5, 0.5]
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay
                    }}
                />
            ))}
        </div>
    );
}

// Componente de Reações Flutuantes
function FloatingReactions({ reactions }) {
    const reactionEmojis = {
        thinking: '🤔',
        agree: '✅',
        question: '❓',
        insight: '💡',
        study: '📖',
        key: '🎯'
    };

    return (
        <div className="fixed top-24 right-6 z-50 space-y-2">
            <AnimatePresence>
                {reactions.map((reaction, index) => (
                    <motion.div
                        key={reaction.id || index}
                        initial={{ opacity: 0, scale: 0, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0, x: 50 }}
                        className="bg-black/60 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 border border-gold-ancient/30"
                    >
                        <span className="text-2xl">{reactionEmojis[reaction.type] || '✨'}</span>
                        {reaction.userName && (
                            <span className="text-sm text-gold-light">{reaction.userName}</span>
                        )}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

export default function ApologeticaLicao4() {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const {
        currentSlide,
        totalSlides,
        connected,
        attendance,
        recentReactions
    } = useApologeticaSync('viewer');

    // Fullscreen toggle
    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    }, []);

    // Keyboard shortcuts (apenas para testes - produção usa apresentador mobile)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'f' || e.key === 'F') {
                toggleFullscreen();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [toggleFullscreen]);

    // Slides content - Part 1 (1-10)
    const slidesContent = [
        // SLIDE 1 - Título
        <div key="slide-1" className="slide-content">
            <div className="relative min-h-screen flex items-center justify-center">
                <GoldenParticles />

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center z-10 max-w-5xl mx-auto px-8"
                >
                    {/* Ícone decorativo */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, type: "spring" }}
                        className="mb-8"
                    >
                        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#C9A227] to-[#1E3A5F] p-1">
                            <div className="w-full h-full rounded-full bg-[#0D1117] flex items-center justify-center">
                                <GiScales className="text-6xl text-[#C9A227]" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Título principal */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="font-['Cinzel'] text-5xl md:text-7xl font-bold mb-6"
                        style={{
                            background: `linear-gradient(135deg, ${colors.goldAncient} 0%, ${colors.goldLight} 50%, ${colors.goldAncient} 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 0 60px rgba(201, 162, 39, 0.3)'
                        }}
                    >
                        Por Que a Bíblia?
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-2xl md:text-3xl text-[#E8D5B7] mb-8 font-light"
                    >
                        E Não Outros Textos Sagrados?
                    </motion.p>

                    {/* Subtítulo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2 }}
                        className="inline-block bg-gradient-to-r from-[#1E3A5F]/60 to-[#0D1117]/60 backdrop-blur-xl px-8 py-4 rounded-2xl border border-[#C9A227]/30"
                    >
                        <p className="text-lg text-[#E8D5B7]/80">
                            Lição 4 • Estudo Bíblico Apologético
                        </p>
                    </motion.div>

                    {/* Decoração inferior */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="mt-12 h-0.5 w-48 mx-auto"
                        style={{ background: `linear-gradient(90deg, transparent, ${colors.goldAncient}, transparent)` }}
                    />
                </motion.div>
            </div>
        </div>,

        // SLIDE 2 - Nossa Postura
        <div key="slide-2" className="slide-content">
            <div className="relative min-h-screen flex items-center justify-center py-12">
                <GoldenParticles />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="max-w-5xl mx-auto px-8 z-10"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-['Cinzel'] text-4xl md:text-5xl text-center mb-12"
                        style={{ color: colors.goldAncient }}
                    >
                        Antes de Começar
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* O que NÃO estamos dizendo */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-red-900/20 to-red-950/30 backdrop-blur-xl p-8 rounded-3xl border border-red-500/20"
                        >
                            <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                                <span className="text-3xl">❌</span> Postura Errada
                            </h3>
                            <ul className="space-y-4 text-lg text-red-200/80">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1">•</span>
                                    "Nossa religião é melhor que a deles"
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1">•</span>
                                    "Eles estão todos errados"
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1">•</span>
                                    Arrogância ou desrespeito
                                </li>
                            </ul>
                        </motion.div>

                        {/* O que ESTAMOS dizendo */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-gradient-to-br from-[#1E3A5F]/40 to-[#0D1117]/40 backdrop-blur-xl p-8 rounded-3xl border border-[#00D9FF]/30"
                        >
                            <h3 className="text-2xl font-bold text-[#00D9FF] mb-6 flex items-center gap-3">
                                <span className="text-3xl">✅</span> Postura Correta
                            </h3>
                            <ul className="space-y-4 text-lg text-[#E8D5B7]">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1">•</span>
                                    "Aplicar os mesmos critérios a <em>todas</em> as alegações"
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1">•</span>
                                    "Incluindo a nossa própria"
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1">•</span>
                                    "Se a Bíblia não passar, seremos honestos"
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Citação */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 text-center"
                    >
                        <div className="inline-block bg-[#1E3A5F]/30 backdrop-blur-xl px-8 py-6 rounded-2xl border border-[#C9A227]/30">
                            <FaQuoteLeft className="text-2xl text-[#C9A227] mb-3 mx-auto" />
                            <p className="text-xl text-[#E8D5B7] italic">
                                A pergunta não é "quem Deus ama?" — é "qual revelação nos dá o retrato mais confiável de quem Deus é?"
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>,

        // SLIDE 3 - Os 5 Critérios
        <div key="slide-3" className="slide-content">
            <div className="relative min-h-screen flex items-center justify-center py-12">
                <GoldenParticles />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="max-w-6xl mx-auto px-8 z-10"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-['Cinzel'] text-4xl md:text-5xl text-center mb-4"
                        style={{ color: colors.goldAncient }}
                    >
                        Os 5 Critérios
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-center text-[#E8D5B7]/70 mb-12 text-lg"
                    >
                        Da Lição 3 — Como avaliar alegações de revelação
                    </motion.p>

                    <div className="grid md:grid-cols-5 gap-4">
                        {criteria.map((criterion, index) => (
                            <motion.div
                                key={criterion.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="bg-gradient-to-br from-[#1E3A5F]/50 to-[#0D1117]/50 backdrop-blur-xl p-6 rounded-2xl border border-[#C9A227]/30 text-center hover:border-[#00D9FF]/50 transition-all duration-300"
                            >
                                <div className="text-4xl mb-4">{criterion.icon}</div>
                                <h3 className="text-lg font-bold text-[#C9A227] mb-2">{criterion.name}</h3>
                                <p className="text-sm text-[#E8D5B7]/70">{criterion.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-xl text-[#00D9FF]">
                            Vamos aplicar esses critérios a cada tradição...
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    ];

    // Continua com mais slides nas próximas partes...
    // Por enquanto, mostrando placeholder para os slides restantes
    const remainingSlides = Array.from({ length: totalSlides - 3 }, (_, i) => (
        <div key={`slide-${i + 4}`} className="slide-content">
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl font-['Cinzel'] text-[#C9A227] mb-4">
                        Slide {i + 4}
                    </h2>
                    <p className="text-[#E8D5B7]/70">
                        Conteúdo em desenvolvimento...
                    </p>
                </div>
            </div>
        </div>
    ));

    const allSlides = [...slidesContent, ...remainingSlides];

    return (
        <div
            className="min-h-screen overflow-hidden"
            style={{
                background: `linear-gradient(135deg, ${colors.bgDeep} 0%, ${colors.bgSurface} 50%, ${colors.bgDeep} 100%)`
            }}
        >
            {/* Indicador de conexão */}
            <div className="fixed top-4 left-4 z-50 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <div className={`w-2 h-2 rounded-full ${connected ? 'bg-green-400' : 'bg-red-400'} animate-pulse`} />
                <span className="text-xs text-white/70">
                    {attendance > 0 ? `${attendance} participante${attendance > 1 ? 's' : ''}` : 'Aguardando...'}
                </span>
            </div>

            {/* Indicador de slide */}
            <div className="fixed top-4 right-4 z-50 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-[#C9A227]/30">
                <span className="text-sm font-medium" style={{ color: colors.goldLight }}>
                    {currentSlide} / {totalSlides}
                </span>
            </div>

            {/* Reações flutuantes */}
            <FloatingReactions reactions={recentReactions} />

            {/* Slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {allSlides[currentSlide - 1]}
                </motion.div>
            </AnimatePresence>

            {/* Instrução de fullscreen */}
            {!isFullscreen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
                >
                    <span className="text-sm text-white/60">
                        Pressione <kbd className="px-2 py-0.5 bg-white/10 rounded mx-1">F</kbd> para tela cheia
                    </span>
                </motion.div>
            )}
        </div>
    );
}
