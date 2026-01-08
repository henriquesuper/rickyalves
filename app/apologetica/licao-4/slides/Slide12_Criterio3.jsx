'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

// Cores para o tema de experiência humana/sofrimento
const humanColors = {
    primary: '#EC4899',       // Rosa - coração/emoção
    secondary: '#8B5CF6',     // Roxo - profundidade emocional
    warm: '#F97316',          // Laranja - calor humano
    gold: '#FFD700',          // Dourado - destaque
    high: '#22C55E',          // Verde - score alto
    medium: '#EAB308',        // Amarelo - score médio
    low: '#EF4444',           // Vermelho - score baixo
    tear: '#60A5FA',          // Azul - lágrimas/sofrimento
};

// Componente do coração pulsante com ondas de emoção
function HeartSymbol() {
    return (
        <div className="relative flex items-center justify-center">
            {/* Ondas de emoção emanando */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full border-2"
                    style={{ borderColor: `${humanColors.primary}40` }}
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

            {/* Glow de fundo pulsante */}
            <motion.div
                className="absolute w-28 h-28 rounded-full blur-2xl"
                style={{ background: `radial-gradient(circle, ${humanColors.primary}50, transparent)` }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />

            {/* Coração SVG */}
            <motion.svg
                width="80"
                height="80"
                viewBox="0 0 100 100"
                className="z-10"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
            >
                <defs>
                    <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={humanColors.primary} />
                        <stop offset="50%" stopColor={humanColors.warm} />
                        <stop offset="100%" stopColor={humanColors.primary} />
                    </linearGradient>
                    <filter id="heartGlow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Coração path */}
                <motion.path
                    d="M50 85 C20 55 10 35 25 22 C35 12 50 18 50 30 C50 18 65 12 75 22 C90 35 80 55 50 85Z"
                    fill="url(#heartGradient)"
                    filter="url(#heartGlow)"
                    stroke={humanColors.gold}
                    strokeWidth="1"
                    strokeOpacity="0.5"
                />

                {/* Linha de batimento */}
                <motion.path
                    d="M25 50 L40 50 L45 38 L50 60 L55 45 L60 50 L75 50"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeOpacity="0.8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.svg>
        </div>
    );
}

// Rede de conexões humanas no fundo
function HumanConnectionsGrid() {
    const nodes = [...Array(16)].map((_, i) => ({
        id: i,
        x: 10 + (i % 4) * 25 + Math.random() * 10,
        y: 15 + Math.floor(i / 4) * 22 + Math.random() * 8,
        delay: Math.random() * 2,
        isHeart: Math.random() > 0.7,
    }));

    const connections = [];
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dist = Math.sqrt(
                Math.pow(nodes[i].x - nodes[j].x, 2) +
                Math.pow(nodes[i].y - nodes[j].y, 2)
            );
            if (dist < 35 && Math.random() > 0.4) {
                connections.push([i, j]);
            }
        }
    }

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={humanColors.primary} stopOpacity="0.1" />
                        <stop offset="50%" stopColor={humanColors.secondary} stopOpacity="0.2" />
                        <stop offset="100%" stopColor={humanColors.primary} stopOpacity="0.1" />
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
                        stroke="url(#connectionGrad)"
                        strokeWidth="0.3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                            pathLength: { duration: 2, delay: i * 0.05 },
                            opacity: { duration: 4, repeat: Infinity, delay: i * 0.1 }
                        }}
                    />
                ))}

                {/* Nós - alguns são corações, outros círculos */}
                {nodes.map((node) => (
                    <motion.g key={node.id}>
                        {node.isHeart ? (
                            <motion.text
                                x={`${node.x}%`}
                                y={`${node.y}%`}
                                fontSize="3"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: [0.4, 0.8, 0.4],
                                    scale: [0.8, 1.1, 0.8],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: node.delay,
                                }}
                            >
                                ❤️
                            </motion.text>
                        ) : (
                            <motion.circle
                                cx={`${node.x}%`}
                                cy={`${node.y}%`}
                                r="0.6"
                                fill={humanColors.primary}
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
                        )}
                    </motion.g>
                ))}
            </svg>
        </div>
    );
}

// Partículas de emoção flutuando
function EmotionParticles() {
    const particles = [...Array(12)].map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        startY: 80 + Math.random() * 20,
        delay: Math.random() * 6,
        duration: 8 + Math.random() * 4,
        size: 2 + Math.random() * 3,
        color: [humanColors.primary, humanColors.secondary, humanColors.warm, humanColors.tear][Math.floor(Math.random() * 4)],
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
                        background: `radial-gradient(circle, ${p.color}60, ${p.color}20)`,
                    }}
                    animate={{
                        y: [0, -400],
                        x: [0, Math.random() * 40 - 20],
                        opacity: [0, 0.7, 0.4, 0],
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
function ScoreGauge({ score, size = 36 }) {
    const getScoreValue = (s) => {
        if (s === 'Alta') return 100;
        if (s === 'Média') return 60;
        return 30;
    };

    const getScoreColor = (s) => {
        if (s === 'Alta') return humanColors.high;
        if (s === 'Média') return humanColors.medium;
        return humanColors.low;
    };

    const value = getScoreValue(score);
    const gaugeColor = getScoreColor(score);
    const circumference = 2 * Math.PI * 15;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg viewBox="0 0 40 40" className="w-full h-full -rotate-90">
                <circle
                    cx="20"
                    cy="20"
                    r="15"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="3"
                />
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

// Card de avaliação com tema humano
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
                className="relative backdrop-blur-xl p-3 rounded-xl border overflow-hidden h-full flex flex-col"
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
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <span className="text-xl">{item.icon}</span>
                        <h3 className="text-xs font-bold" style={{ color: item.color }}>
                            {item.tradition}
                        </h3>
                    </div>
                    <ScoreGauge score={item.score} size={32} />
                </div>

                {/* Issue badge */}
                <motion.div
                    className="mb-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                >
                    <span
                        className="inline-block text-[9px] font-bold px-2 py-1 rounded-full"
                        style={{
                            background: `${item.color}20`,
                            color: item.color,
                            border: `1px solid ${item.color}40`,
                        }}
                    >
                        {item.issue}
                    </span>
                </motion.div>

                {/* Problem description */}
                <motion.p
                    className="text-[10px] text-[#E8D5B7]/80 flex-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                >
                    {item.problem}
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

export default function Slide12_Criterio3_Realidade() {
    const evaluations = [
        {
            tradition: 'Vedas',
            icon: '🕉️',
            color: colors.vedas,
            issue: 'Mundo é ilusão',
            problem: 'Nega a realidade do sofrimento e da individualidade. Karma: problema = você mesmo (vidas passadas).',
            score: 'Baixa'
        },
        {
            tradition: 'Budismo',
            icon: '☸️',
            color: colors.buddhism,
            issue: 'Solução = eliminar desejo',
            problem: 'Funciona para moralidade básica, mas não reconhece necessidade de perdão real.',
            score: 'Média'
        },
        {
            tradition: 'Alcorão',
            icon: '☪️',
            color: colors.islam,
            issue: 'Deus distante',
            problem: 'Submissão como única resposta. Sem garantia de aceitação. Alá não é "próximo" do modo que a Bíblia descreve.',
            score: 'Média'
        },
        {
            tradition: 'Mórmon',
            icon: '📜',
            color: colors.mormon,
            issue: 'Excesso otimista',
            problem: 'Progresso eterno é atraente, mas não confronta profundamente o problema do pecado e egoísmo humano.',
            score: 'Média'
        },
        {
            tradition: 'Bíblia',
            icon: '✝️',
            color: colors.bible,
            issue: 'Diagnóstico: pecado',
            problem: 'Reconhece: somos quebrados, mas valiosos. Problema não é ignorância — é rebelião. Solução: graça, não apenas esforço.',
            score: 'Alta'
        }
    ];

    return (
        <SlideWrapper>
            {/* Camadas de fundo */}
            <HumanConnectionsGrid />
            <EmotionParticles />

            {/* Gradiente de fundo temático */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse at top, ${humanColors.primary}08 0%, transparent 50%),
                                radial-gradient(ellipse at bottom, ${humanColors.secondary}08 0%, transparent 50%)`
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
                    <HeartSymbol />

                    <motion.h2
                        className="font-['Cinzel'] text-2xl md:text-3xl mt-4"
                        style={{
                            color: humanColors.gold,
                            textShadow: `0 0 20px ${humanColors.primary}50`
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Critério 3: Correspondência com a Realidade Humana
                    </motion.h2>

                    <motion.p
                        className="text-base mt-2"
                        style={{ color: `${humanColors.primary}90` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Reflete honestamente a experiência humana — sofrimento, culpa, desejo de significado?
                    </motion.p>
                </motion.div>

                {/* Grid de avaliações */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                    {evaluations.map((item, index) => (
                        <EvaluationCard key={item.tradition} item={item} index={index} />
                    ))}
                </div>

                {/* Ponto chave com destaque */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="relative"
                >
                    {/* Badge decorativo */}
                    <div
                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold z-10"
                        style={{
                            background: `linear-gradient(90deg, ${humanColors.primary}, ${humanColors.secondary}, ${humanColors.primary})`,
                            color: '#fff'
                        }}
                    >
                        ❤️ PONTO CHAVE
                    </div>

                    <div
                        className="p-5 pt-6 rounded-2xl border text-center relative overflow-hidden"
                        style={{
                            background: `linear-gradient(135deg, ${humanColors.primary}10, ${humanColors.secondary}10, transparent)`,
                            borderColor: `${humanColors.primary}30`,
                        }}
                    >
                        {/* Brilho pulsante */}
                        <motion.div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: `radial-gradient(ellipse at center, ${humanColors.primary}10, transparent)`,
                            }}
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />

                        <p className="text-base md:text-lg relative z-10">
                            <span className="font-bold" style={{ color: humanColors.primary }}>"A Bíblia lê você"</span>
                            <span className="text-[#E8D5B7]"> — seus heróis falham </span>
                            <span className="text-white/60">(Davi, Pedro)</span>
                            <span className="text-[#E8D5B7]">, seus vilões são complexos.</span>
                            <br />
                            <strong style={{ color: humanColors.gold }}>Não mascara a condição humana.</strong>
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
