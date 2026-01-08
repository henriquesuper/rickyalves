'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

// Cores para o tema de arqueologia/verificação histórica
const archColors = {
    primary: '#F59E0B',       // Âmbar - arqueologia/antigo
    secondary: '#22D3EE',     // Ciano - análise científica
    gold: '#FFD700',          // Dourado - descobertas
    high: '#22C55E',          // Verde - score alto
    medium: '#EAB308',        // Amarelo - score médio
    low: '#EF4444',           // Vermelho - score baixo
    fail: '#DC2626',          // Vermelho escuro - falha grave
    sand: '#D4A574',          // Areia - escavação
    ancient: '#8B7355',       // Marrom antigo
};

// Componente da lupa animada com camadas arqueológicas
function MagnifyingGlassSymbol() {
    return (
        <div className="relative flex items-center justify-center">
            {/* Ondas de busca emanando */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full border-2"
                    style={{ borderColor: `${archColors.primary}40` }}
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
                style={{ background: `radial-gradient(circle, ${archColors.primary}40, transparent)` }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
            />

            {/* Lupa SVG */}
            <motion.svg
                width="80"
                height="80"
                viewBox="0 0 100 100"
                className="z-10"
            >
                <defs>
                    <linearGradient id="magnifyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={archColors.primary} />
                        <stop offset="50%" stopColor={archColors.gold} />
                        <stop offset="100%" stopColor={archColors.primary} />
                    </linearGradient>
                    <filter id="magnifyGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Lente da lupa */}
                <motion.circle
                    cx="40"
                    cy="40"
                    r="25"
                    fill="none"
                    stroke="url(#magnifyGradient)"
                    strokeWidth="4"
                    filter="url(#magnifyGlow)"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ transformOrigin: '40px 40px' }}
                />

                {/* Reflexo na lente */}
                <motion.path
                    d="M 28 30 Q 32 25, 38 28"
                    fill="none"
                    stroke={`${archColors.secondary}80`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Cabo da lupa */}
                <motion.line
                    x1="58"
                    y1="58"
                    x2="80"
                    y2="80"
                    stroke="url(#magnifyGradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    filter="url(#magnifyGlow)"
                />

                {/* Camadas arqueológicas dentro da lente */}
                {[0, 1, 2].map((i) => (
                    <motion.line
                        key={i}
                        x1="22"
                        y1={32 + i * 8}
                        x2="58"
                        y2={32 + i * 8}
                        stroke={archColors.sand}
                        strokeWidth="1.5"
                        strokeOpacity={0.4 + i * 0.15}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                    />
                ))}
            </motion.svg>
        </div>
    );
}

// Grade de escavação arqueológica no fundo
function ArchaeologyGrid() {
    const gridSize = 8;
    const cells = [...Array(gridSize * gridSize)].map((_, i) => ({
        id: i,
        x: (i % gridSize) * (100 / gridSize),
        y: Math.floor(i / gridSize) * (100 / gridSize),
        delay: Math.random() * 4,
        hasArtifact: Math.random() > 0.85,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={archColors.primary} stopOpacity="0.05" />
                        <stop offset="50%" stopColor={archColors.sand} stopOpacity="0.1" />
                        <stop offset="100%" stopColor={archColors.primary} stopOpacity="0.05" />
                    </linearGradient>
                </defs>

                {/* Grid lines */}
                {[...Array(gridSize + 1)].map((_, i) => (
                    <motion.g key={i}>
                        <motion.line
                            x1={`${i * (100 / gridSize)}%`}
                            y1="0%"
                            x2={`${i * (100 / gridSize)}%`}
                            y2="100%"
                            stroke={archColors.sand}
                            strokeOpacity="0.15"
                            strokeWidth="0.2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: i * 0.1 }}
                        />
                        <motion.line
                            x1="0%"
                            y1={`${i * (100 / gridSize)}%`}
                            x2="100%"
                            y2={`${i * (100 / gridSize)}%`}
                            stroke={archColors.sand}
                            strokeOpacity="0.15"
                            strokeWidth="0.2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: i * 0.1 }}
                        />
                    </motion.g>
                ))}

                {/* Artifact markers */}
                {cells.filter(c => c.hasArtifact).map((cell) => (
                    <motion.circle
                        key={cell.id}
                        cx={`${cell.x + (100 / gridSize / 2)}%`}
                        cy={`${cell.y + (100 / gridSize / 2)}%`}
                        r="0.8"
                        fill={archColors.gold}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 0.8, 0.4, 0.8],
                            scale: [0.5, 1.2, 1, 1.2],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: cell.delay,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

// Partículas de poeira/areia flutuando
function DustParticles() {
    const particles = [...Array(20)].map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        startY: 20 + Math.random() * 60,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 4,
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
                        top: `${p.startY}%`,
                        width: p.size,
                        height: p.size,
                        background: `radial-gradient(circle, ${archColors.sand}60, ${archColors.primary}30)`,
                    }}
                    animate={{
                        x: [0, 30, -20, 10, 0],
                        y: [0, -30, -60, -40, 0],
                        opacity: [0, 0.6, 0.4, 0.2, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
}

// Gauge de score circular
function ScoreGauge({ score, size = 40 }) {
    const getScoreValue = (s) => {
        if (s === 'Alta*' || s === 'Alta') return 100;
        if (s === 'Média') return 60;
        if (s === 'Baixa') return 35;
        if (s === 'Falha') return 10;
        return 0; // N/A
    };

    const getScoreColor = (s) => {
        if (s === 'Alta*' || s === 'Alta') return archColors.high;
        if (s === 'Média') return archColors.medium;
        if (s === 'Baixa') return archColors.low;
        if (s === 'Falha') return archColors.fail;
        return '#6B7280'; // N/A - gray
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
                className="absolute inset-0 flex items-center justify-center text-[8px] font-bold"
                style={{ color: gaugeColor }}
            >
                {score}
            </span>
        </div>
    );
}

// Card de avaliação com tema arqueológico
function EvaluationCard({ item, index }) {
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
                className="relative backdrop-blur-xl p-3 rounded-xl border overflow-hidden h-full"
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

                {/* Header com ícone, nome e score */}
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <span className="text-xl">{item.icon}</span>
                        <h3 className="text-xs font-bold" style={{ color: item.color }}>
                            {item.tradition}
                        </h3>
                    </div>
                    <ScoreGauge score={item.score} size={32} />
                </div>

                {/* Summary e Detail */}
                <motion.p
                    className="text-[10px] text-[#E8D5B7] mb-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                >
                    <span style={{ color: item.color }}>▸</span> {item.summary}
                </motion.p>
                <motion.p
                    className="text-[9px] text-white/50 italic"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                >
                    {item.detail}
                </motion.p>

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

// Seção de comparação dramática
function ComparisonSection({ mormonData, bibleData }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid md:grid-cols-2 gap-4"
        >
            {/* Mormon - Problemas */}
            <motion.div
                className="relative overflow-hidden rounded-xl border"
                style={{
                    background: `linear-gradient(135deg, ${archColors.fail}15, rgba(0,0,0,0.6))`,
                    borderColor: `${archColors.fail}40`,
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
            >
                {/* Glow de fundo pulsante */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(ellipse at center, ${archColors.fail}10, transparent)`,
                    }}
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="relative p-4">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-3">
                        <motion.span
                            className="text-2xl"
                            animate={{ rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            ❌
                        </motion.span>
                        <div>
                            <h4 className="font-bold" style={{ color: archColors.fail }}>
                                Livro de Mórmon
                            </h4>
                            <span className="text-xs text-red-400/70">Problemas Graves</span>
                        </div>
                    </div>

                    {/* Pontos */}
                    <ul className="text-xs text-red-200/80 space-y-1.5">
                        <li className="flex items-start gap-2">
                            <span style={{ color: archColors.fail }}>▸</span>
                            <span>Alega <strong>milhões de pessoas</strong>, civilizações massivas</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span style={{ color: archColors.fail }}>▸</span>
                            <span>Cavalos, trigo, aço — <strong>inexistentes</strong> na América pré-colombiana</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span style={{ color: archColors.fail }}>▸</span>
                            <span>Nefitas, lamanitas, jareditas — <strong>nada encontrado</strong></span>
                        </li>
                    </ul>

                    {/* Badge */}
                    <motion.div
                        className="mt-3 inline-block px-2 py-1 rounded text-[10px] font-bold"
                        style={{
                            background: `${archColors.fail}30`,
                            color: archColors.fail,
                        }}
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        ZERO EVIDÊNCIA ARQUEOLÓGICA
                    </motion.div>
                </div>
            </motion.div>

            {/* Bíblia - Verificável */}
            <motion.div
                className="relative overflow-hidden rounded-xl border"
                style={{
                    background: `linear-gradient(135deg, ${archColors.secondary}15, rgba(0,0,0,0.6))`,
                    borderColor: `${archColors.secondary}40`,
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
            >
                {/* Glow de fundo pulsante */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(ellipse at center, ${archColors.secondary}10, transparent)`,
                    }}
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="relative p-4">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-3">
                        <motion.span
                            className="text-2xl"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            ✓
                        </motion.span>
                        <div>
                            <h4 className="font-bold" style={{ color: archColors.secondary }}>
                                Bíblia
                            </h4>
                            <span className="text-xs text-cyan-400/70">*Com tensões interpretativas</span>
                        </div>
                    </div>

                    {/* Pontos */}
                    <ul className="text-xs text-[#E8D5B7] space-y-1.5">
                        <li className="flex items-start gap-2">
                            <span style={{ color: archColors.secondary }}>▸</span>
                            <span>Se <strong>expõe à verificação</strong> — e sobrevive</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span style={{ color: archColors.secondary }}>▸</span>
                            <span>Problemas de datação existem (Jericó, censo de Quirinius)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span style={{ color: archColors.secondary }}>▸</span>
                            <span>São <strong>questões abertas</strong>, não refutações categóricas</span>
                        </li>
                    </ul>

                    {/* Badge */}
                    <motion.div
                        className="mt-3 inline-block px-2 py-1 rounded text-[10px] font-bold"
                        style={{
                            background: `${archColors.high}30`,
                            color: archColors.high,
                        }}
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        MUITAS CONFIRMAÇÕES ARQUEOLÓGICAS
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Slide11_Criterio2_Verificabilidade() {
    const evaluations = [
        {
            tradition: 'Vedas',
            icon: '🕉️',
            color: colors.vedas,
            score: 'N/A',
            summary: 'Não fazem alegações históricas verificáveis',
            detail: 'Não é o tipo de texto que faz claims históricas'
        },
        {
            tradition: 'Budismo',
            icon: '☸️',
            color: colors.buddhism,
            score: 'Baixa',
            summary: 'Buda é figura histórica real',
            detail: 'Textos compilados 400+ anos depois'
        },
        {
            tradition: 'Alcorão',
            icon: '☪️',
            color: colors.islam,
            score: 'Baixa',
            summary: 'Maomé bem documentado',
            detail: 'Onde toca história bíblica, diverge (nega crucificação)'
        },
        {
            tradition: 'Mórmon',
            icon: '📜',
            color: colors.mormon,
            score: 'Falha',
            summary: 'Zero evidência arqueológica',
            detail: 'Nefitas, lamanitas, jareditas — não encontrados'
        },
        {
            tradition: 'Bíblia',
            icon: '✝️',
            color: colors.bible,
            score: 'Alta*',
            summary: 'Muitas confirmações arqueológicas',
            detail: 'Se expõe à verificação — e sobrevive'
        }
    ];

    return (
        <SlideWrapper>
            {/* Camadas de fundo */}
            <ArchaeologyGrid />
            <DustParticles />

            {/* Gradiente de fundo temático */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse at top, ${archColors.primary}08 0%, transparent 50%),
                                radial-gradient(ellipse at bottom, ${archColors.secondary}08 0%, transparent 50%)`
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
                    className="text-center mb-6"
                >
                    <MagnifyingGlassSymbol />

                    <motion.h2
                        className="font-['Cinzel'] text-3xl md:text-4xl mt-4"
                        style={{
                            color: archColors.gold,
                            textShadow: `0 0 20px ${archColors.primary}50`
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Critério 2: Verificabilidade Histórica
                    </motion.h2>

                    <motion.p
                        className="text-lg mt-2"
                        style={{ color: `${archColors.primary}90` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        As alegações históricas podem ser testadas contra evidências externas?
                    </motion.p>
                </motion.div>

                {/* Grid de avaliações */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                    {evaluations.map((item, index) => (
                        <EvaluationCard key={item.tradition} item={item} index={index} />
                    ))}
                </div>

                {/* Seção de comparação dramática */}
                <ComparisonSection />
            </motion.div>
        </SlideWrapper>
    );
}
