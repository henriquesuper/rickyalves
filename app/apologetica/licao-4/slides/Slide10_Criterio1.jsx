'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors, traditions } from './shared';

// Cores para o tema de análise/coerência
const analysisColors = {
    primary: '#00D9FF',       // Ciano - análise objetiva
    secondary: '#8B5CF6',     // Roxo - profundidade
    gold: '#FFD700',          // Dourado - destaque
    high: '#22C55E',          // Verde - score alto
    medium: '#EAB308',        // Amarelo - score médio
    low: '#EF4444',           // Vermelho - score baixo
    grid: '#00D9FF',          // Cor da grade de fundo
};

// Componente do símbolo de corrente/elos animado
function ChainLinkSymbol() {
    return (
        <div className="relative flex items-center justify-center">
            {/* Ondas de análise emanando */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full border-2"
                    style={{ borderColor: `${analysisColors.primary}40` }}
                    initial={{ width: 60, height: 60, opacity: 0.6 }}
                    animate={{
                        width: [60, 140, 220],
                        height: [60, 140, 220],
                        opacity: [0.4, 0.2, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 1,
                        ease: "easeOut"
                    }}
                />
            ))}

            {/* Glow de fundo */}
            <motion.div
                className="absolute w-28 h-28 rounded-full blur-2xl"
                style={{ background: `radial-gradient(circle, ${analysisColors.primary}40, transparent)` }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
            />

            {/* Elos de corrente SVG */}
            <motion.svg
                width="80"
                height="80"
                viewBox="0 0 100 100"
                className="z-10"
            >
                <defs>
                    <linearGradient id="chainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={analysisColors.primary} />
                        <stop offset="50%" stopColor={analysisColors.gold} />
                        <stop offset="100%" stopColor={analysisColors.primary} />
                    </linearGradient>
                    <filter id="chainGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Elo esquerdo */}
                <motion.ellipse
                    cx="35"
                    cy="50"
                    rx="18"
                    ry="25"
                    fill="none"
                    stroke="url(#chainGradient)"
                    strokeWidth="4"
                    filter="url(#chainGlow)"
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{ transformOrigin: '35px 50px' }}
                />

                {/* Elo direito (interligado) */}
                <motion.ellipse
                    cx="65"
                    cy="50"
                    rx="18"
                    ry="25"
                    fill="none"
                    stroke="url(#chainGradient)"
                    strokeWidth="4"
                    filter="url(#chainGlow)"
                    animate={{ rotate: [0, -5, 0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{ transformOrigin: '65px 50px' }}
                />
            </motion.svg>
        </div>
    );
}

// Matriz de coerência animada no fundo
function CoherenceMatrix() {
    const nodes = [...Array(20)].map((_, i) => ({
        id: i,
        x: 10 + (i % 5) * 20 + Math.random() * 5,
        y: 15 + Math.floor(i / 5) * 20 + Math.random() * 5,
        delay: Math.random() * 2,
    }));

    const connections = [
        [0, 1], [1, 2], [2, 3], [3, 4],
        [5, 6], [6, 7], [7, 8], [8, 9],
        [10, 11], [11, 12], [12, 13], [13, 14],
        [15, 16], [16, 17], [17, 18], [18, 19],
        [0, 5], [1, 6], [2, 7], [3, 8], [4, 9],
        [5, 10], [6, 11], [7, 12], [8, 13], [9, 14],
        [10, 15], [11, 16], [12, 17], [13, 18], [14, 19],
        [0, 6], [1, 7], [2, 8], [3, 9],
        [6, 10], [7, 11], [8, 12], [9, 13],
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={analysisColors.primary} stopOpacity="0.1" />
                        <stop offset="50%" stopColor={analysisColors.secondary} stopOpacity="0.2" />
                        <stop offset="100%" stopColor={analysisColors.primary} stopOpacity="0.1" />
                    </linearGradient>
                </defs>

                {/* Linhas de conexão */}
                {connections.map(([from, to], i) => (
                    <motion.line
                        key={i}
                        x1={`${nodes[from].x}%`}
                        y1={`${nodes[from].y}%`}
                        x2={`${nodes[to].x}%`}
                        y2={`${nodes[to].y}%`}
                        stroke="url(#lineGrad)"
                        strokeWidth="0.2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, delay: i * 0.05 }}
                    />
                ))}

                {/* Nós */}
                {nodes.map((node) => (
                    <motion.circle
                        key={node.id}
                        cx={`${node.x}%`}
                        cy={`${node.y}%`}
                        r="0.5"
                        fill={analysisColors.primary}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: node.delay,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

// Partículas de dados fluindo
function DataParticles() {
    const particles = [...Array(15)].map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 4,
        size: 1 + Math.random() * 2,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${p.x}%`,
                        bottom: '-10px',
                        width: p.size,
                        height: p.size,
                        background: `radial-gradient(circle, ${analysisColors.primary}60, ${analysisColors.secondary}30)`,
                    }}
                    animate={{
                        y: [0, -600],
                        opacity: [0, 0.6, 0.3, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeOut"
                    }}
                />
            ))}
        </div>
    );
}

// Gauge de score circular
function ScoreGauge({ score, color, size = 40 }) {
    const getScoreValue = (s) => {
        if (s === 'Alta') return 100;
        if (s === 'Média') return 60;
        return 30;
    };

    const getScoreColor = (s) => {
        if (s === 'Alta') return analysisColors.high;
        if (s === 'Média') return analysisColors.medium;
        return analysisColors.low;
    };

    const value = getScoreValue(score);
    const gaugeColor = getScoreColor(score);
    const circumference = 2 * Math.PI * 15;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg viewBox="0 0 40 40" className="w-full h-full -rotate-90">
                {/* Background circle */}
                <circle
                    cx="20"
                    cy="20"
                    r="15"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="3"
                />
                {/* Progress circle */}
                <motion.circle
                    cx="20"
                    cy="20"
                    r="15"
                    fill="none"
                    stroke={gaugeColor}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{
                        filter: `drop-shadow(0 0 4px ${gaugeColor})`,
                    }}
                />
            </svg>
            <span
                className="absolute inset-0 flex items-center justify-center text-[9px] font-bold"
                style={{ color: gaugeColor }}
            >
                {score}
            </span>
        </div>
    );
}

// Card de avaliação com tema de análise
function EvaluationCard({ item, index }) {
    const getTraditionIcon = (id) => {
        switch (id) {
            case 'vedas': return '🕉️';
            case 'buddhism': return '☸️';
            case 'islam': return '☪️';
            case 'mormon': return '📜';
            case 'bible': return '✝️';
            default: return '📖';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            className="relative group"
        >
            {/* Border glow on hover */}
            <motion.div
                className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                style={{ background: `linear-gradient(135deg, ${item.color}50, transparent)` }}
            />

            <div
                className="relative backdrop-blur-xl p-4 rounded-xl border overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, rgba(0,0,0,0.6), ${item.color}10)`,
                    borderColor: `${item.color}40`,
                }}
            >
                {/* Barra superior colorida */}
                <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                        background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                    }}
                />

                {/* Header com ícone e nome */}
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">{item.icon}</span>
                        <h3 className="text-sm font-bold" style={{ color: item.color }}>
                            {item.tradition}
                        </h3>
                    </div>
                    <ScoreGauge score={item.score} color={item.color} size={36} />
                </div>

                {/* Pontos */}
                <ul className="text-[11px] text-[#E8D5B7]/80 space-y-1.5">
                    {item.points.map((point, i) => (
                        <motion.li
                            key={i}
                            className="flex items-start gap-1.5"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 + i * 0.1 }}
                        >
                            <span style={{ color: item.color }}>▸</span>
                            <span>{point}</span>
                        </motion.li>
                    ))}
                </ul>

                {/* Decoração de canto */}
                <div
                    className="absolute bottom-0 right-0 w-8 h-8 opacity-10"
                    style={{
                        background: `radial-gradient(circle at bottom right, ${item.color}, transparent)`,
                    }}
                />
            </div>
        </motion.div>
    );
}

export default function Slide10_Criterio1_Coerencia() {
    const evaluations = [
        {
            tradition: 'Vedas',
            icon: '🕉️',
            color: colors.vedas,
            score: 'Média',
            points: [
                'Compostos por diferentes escolas ao longo de séculos',
                'Tensões internas (politeísmo → monismo)',
                'Tradição aceita múltiplas interpretações'
            ]
        },
        {
            tradition: 'Budismo',
            icon: '☸️',
            color: colors.buddhism,
            score: 'Baixa',
            points: [
                'Diferentes escolas têm cânones diferentes',
                'Contradições sobre questões fundamentais',
                'Pluralismo interno aceito'
            ]
        },
        {
            tradition: 'Alcorão',
            icon: '☪️',
            color: colors.islam,
            score: 'Média',
            points: [
                'Alegação de perfeição verbal',
                'Problema: versos "ab-rogados" (naskh)',
                'Mais coeso (um autor), mas com questões'
            ]
        },
        {
            tradition: 'Mórmon',
            icon: '📜',
            color: colors.mormon,
            score: 'Baixa',
            points: [
                'Cita Isaías da KJV (incluindo erros)',
                'Mudanças textuais desde 1830',
                'Problemas sérios de coerência'
            ]
        },
        {
            tradition: 'Bíblia',
            icon: '✝️',
            color: colors.bible,
            score: 'Alta',
            points: [
                '40+ autores, 1500 anos – unidade notável',
                'Tensões resolvíveis no contexto',
                'Progressão teológica coerente'
            ]
        }
    ];

    return (
        <SlideWrapper>
            {/* Camadas de fundo */}
            <CoherenceMatrix />
            <DataParticles />

            {/* Gradiente de fundo temático */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse at top, ${analysisColors.primary}08 0%, transparent 50%),
                                radial-gradient(ellipse at bottom, ${analysisColors.secondary}08 0%, transparent 50%)`
                }}
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-7xl mx-auto px-6 z-10 relative"
            >
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-8"
                >
                    <ChainLinkSymbol />

                    <motion.h2
                        className="font-['Cinzel'] text-3xl md:text-4xl mt-4"
                        style={{
                            color: analysisColors.gold,
                            textShadow: `0 0 20px ${analysisColors.primary}50`
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Critério 1: Coerência Interna
                    </motion.h2>

                    <motion.p
                        className="text-lg mt-2"
                        style={{ color: `${analysisColors.primary}90` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        O texto se contradiz ou mantém unidade?
                    </motion.p>
                </motion.div>

                {/* Grid de avaliações */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {evaluations.map((item, index) => (
                        <EvaluationCard key={item.tradition} item={item} index={index} />
                    ))}
                </div>

                {/* Pergunta de destaque */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="mt-8 relative"
                >
                    {/* Badge decorativo */}
                    <div
                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                        style={{
                            background: `linear-gradient(90deg, ${analysisColors.primary}, ${analysisColors.secondary}, ${analysisColors.primary})`,
                            color: '#000'
                        }}
                    >
                        💡 PONTO CHAVE
                    </div>

                    <div
                        className="p-5 pt-6 rounded-2xl border text-center relative overflow-hidden"
                        style={{
                            background: `linear-gradient(135deg, ${analysisColors.primary}10, ${analysisColors.secondary}10, transparent)`,
                            borderColor: `${analysisColors.primary}30`,
                        }}
                    >
                        {/* Brilho pulsante */}
                        <motion.div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: `radial-gradient(ellipse at center, ${analysisColors.primary}10, transparent)`,
                            }}
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />

                        <p className="text-lg md:text-xl relative z-10" style={{ color: analysisColors.primary }}>
                            <span className="font-bold">"Como 40 pessoas em 1500 anos</span>
                            <br />
                            <span className="text-[#E8D5B7]">mantêm essa coerência</span>
                            <br />
                            <span className="font-bold">sem um editor central?"</span>
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
