'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

// Cores para o tema de manuscritos/integridade textual
const scrollColors = {
    primary: '#D97706',       // Âmbar escuro - papiro antigo
    secondary: '#10B981',     // Verde esmeralda - verificação
    gold: '#FFD700',          // Dourado - destaque
    parchment: '#F5E6D3',     // Cor de pergaminho
    ink: '#1E3A5F',           // Tinta escura
    excellent: '#22C55E',     // Verde - excelente
    good: '#84CC16',          // Lima - bom
    variable: '#EAB308',      // Amarelo - variável
    weak: '#EF4444',          // Vermelho - fraco
};

// Componente do rolo de manuscrito animado
function ScrollSymbol() {
    return (
        <div className="relative flex items-center justify-center">
            {/* Ondas de preservação emanando */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full border-2"
                    style={{ borderColor: `${scrollColors.primary}40` }}
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
                style={{ background: `radial-gradient(circle, ${scrollColors.primary}40, transparent)` }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
            />

            {/* Rolo de manuscrito SVG */}
            <motion.svg
                width="80"
                height="80"
                viewBox="0 0 100 100"
                className="z-10"
            >
                <defs>
                    <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={scrollColors.parchment} />
                        <stop offset="50%" stopColor={scrollColors.primary} />
                        <stop offset="100%" stopColor={scrollColors.parchment} />
                    </linearGradient>
                    <linearGradient id="rollGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={scrollColors.primary} />
                        <stop offset="50%" stopColor={scrollColors.gold} />
                        <stop offset="100%" stopColor={scrollColors.primary} />
                    </linearGradient>
                    <filter id="scrollGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Corpo do pergaminho */}
                <motion.rect
                    x="25"
                    y="25"
                    width="50"
                    height="50"
                    rx="3"
                    fill={scrollColors.parchment}
                    fillOpacity="0.9"
                    filter="url(#scrollGlow)"
                />

                {/* Rolo superior */}
                <motion.ellipse
                    cx="50"
                    cy="22"
                    rx="30"
                    ry="5"
                    fill="url(#rollGradient)"
                    filter="url(#scrollGlow)"
                    animate={{ scaleX: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Rolo inferior */}
                <motion.ellipse
                    cx="50"
                    cy="78"
                    rx="30"
                    ry="5"
                    fill="url(#rollGradient)"
                    filter="url(#scrollGlow)"
                    animate={{ scaleX: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />

                {/* Linhas de texto simuladas */}
                {[0, 1, 2, 3].map((i) => (
                    <motion.line
                        key={i}
                        x1="32"
                        y1={35 + i * 10}
                        x2="68"
                        y2={35 + i * 10}
                        stroke={scrollColors.ink}
                        strokeWidth="2"
                        strokeOpacity="0.3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                    />
                ))}

                {/* Selo de verificação */}
                <motion.circle
                    cx="70"
                    cy="70"
                    r="8"
                    fill={scrollColors.excellent}
                    fillOpacity="0.9"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
                <motion.path
                    d="M66 70 L69 73 L75 66"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </motion.svg>
        </div>
    );
}

// Cadeia de transmissão de manuscritos no fundo
function ManuscriptChain() {
    const nodes = [...Array(12)].map((_, i) => ({
        id: i,
        x: 8 + (i % 4) * 28,
        y: 20 + Math.floor(i / 4) * 25,
        delay: Math.random() * 2,
        size: 1 + Math.random() * 0.5,
    }));

    // Conexões verticais representando transmissão ao longo do tempo
    const connections = [
        [0, 4], [1, 4], [1, 5], [2, 5], [2, 6], [3, 6], [3, 7],
        [4, 8], [5, 8], [5, 9], [6, 9], [6, 10], [7, 10], [7, 11]
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="chainLineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={scrollColors.primary} stopOpacity="0.1" />
                        <stop offset="50%" stopColor={scrollColors.gold} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={scrollColors.secondary} stopOpacity="0.1" />
                    </linearGradient>
                </defs>

                {/* Linhas de transmissão */}
                {connections.map(([from, to], i) => (
                    <motion.line
                        key={i}
                        x1={`${nodes[from].x}%`}
                        y1={`${nodes[from].y}%`}
                        x2={`${nodes[to].x}%`}
                        y2={`${nodes[to].y}%`}
                        stroke="url(#chainLineGrad)"
                        strokeWidth="0.4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, delay: i * 0.1 }}
                    />
                ))}

                {/* Nós representando manuscritos */}
                {nodes.map((node, idx) => (
                    <motion.g key={node.id}>
                        {/* Ícone de documento */}
                        <motion.rect
                            x={`${node.x - 1}%`}
                            y={`${node.y - 1.5}%`}
                            width="2%"
                            height="3%"
                            rx="0.3"
                            fill={scrollColors.parchment}
                            fillOpacity="0.6"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0.4, 0.7, 0.4],
                                scale: [0.9, 1.1, 0.9],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: node.delay,
                            }}
                        />
                    </motion.g>
                ))}
            </svg>
        </div>
    );
}

// Partículas de tinta/papiro flutuando
function ParchmentParticles() {
    const particles = [...Array(15)].map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        startY: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 5,
        size: 2 + Math.random() * 3,
        rotation: Math.random() * 360,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.startY}%`,
                        width: p.size * 2,
                        height: p.size,
                        background: `linear-gradient(135deg, ${scrollColors.parchment}40, ${scrollColors.primary}20)`,
                        borderRadius: '2px',
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, 20, -10, 0],
                        rotate: [p.rotation, p.rotation + 180, p.rotation + 360],
                        opacity: [0, 0.5, 0.3, 0],
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
function ScoreGauge({ score, size = 36 }) {
    const getScoreValue = (s) => {
        if (s === 'Excelente') return 100;
        if (s === 'Boa*' || s === 'Boa') return 80;
        if (s === 'Variável') return 50;
        return 25;
    };

    const getScoreColor = (s) => {
        if (s === 'Excelente') return scrollColors.excellent;
        if (s === 'Boa*' || s === 'Boa') return scrollColors.good;
        if (s === 'Variável') return scrollColors.variable;
        return scrollColors.weak;
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
                className="absolute inset-0 flex items-center justify-center text-[7px] font-bold"
                style={{ color: gaugeColor }}
            >
                {score}
            </span>
        </div>
    );
}

// Card de avaliação com tema de manuscrito
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

                {/* Summary */}
                <motion.p
                    className="text-[10px] text-[#E8D5B7] mb-2 font-medium"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                >
                    {item.summary}
                </motion.p>

                {/* Details list */}
                <ul className="text-[9px] text-white/60 space-y-1 flex-1">
                    {item.details.map((d, i) => (
                        <motion.li
                            key={i}
                            className="flex items-start gap-1"
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + index * 0.1 + i * 0.05 }}
                        >
                            <span style={{ color: item.color }}>•</span>
                            <span>{d}</span>
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

// Seção de comparação NT vs Mórmon
function ComparisonSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid md:grid-cols-2 gap-4"
        >
            {/* Novo Testamento */}
            <motion.div
                className="relative overflow-hidden rounded-xl border"
                style={{
                    background: `linear-gradient(135deg, ${scrollColors.excellent}15, rgba(0,0,0,0.6))`,
                    borderColor: `${scrollColors.excellent}40`,
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
            >
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(ellipse at center, ${scrollColors.excellent}10, transparent)`,
                    }}
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="relative p-4">
                    <div className="flex items-center gap-2 mb-3">
                        <motion.span
                            className="text-2xl"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            ✓
                        </motion.span>
                        <div>
                            <h4 className="font-bold" style={{ color: scrollColors.excellent }}>
                                Novo Testamento
                            </h4>
                            <span className="text-xs text-green-400/70">Melhor atestado documento antigo</span>
                        </div>
                    </div>

                    <ul className="text-xs text-[#E8D5B7] space-y-1.5">
                        <li className="flex items-start gap-2">
                            <span style={{ color: scrollColors.gold }}>▸</span>
                            <span><strong>5.800+</strong> manuscritos gregos</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span style={{ color: scrollColors.gold }}>▸</span>
                            <span>Gap de <strong>50-100 anos</strong> após originais</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span style={{ color: scrollColors.gold }}>▸</span>
                            <span>Comparação: Platão tem gap de <strong>1000+ anos</strong></span>
                        </li>
                    </ul>

                    <motion.div
                        className="mt-3 inline-block px-2 py-1 rounded text-[10px] font-bold"
                        style={{
                            background: `${scrollColors.excellent}30`,
                            color: scrollColors.excellent,
                        }}
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        INCOMPARAVELMENTE SUPERIOR
                    </motion.div>
                </div>
            </motion.div>

            {/* Livro de Mórmon */}
            <motion.div
                className="relative overflow-hidden rounded-xl border"
                style={{
                    background: `linear-gradient(135deg, ${scrollColors.weak}15, rgba(0,0,0,0.6))`,
                    borderColor: `${scrollColors.weak}40`,
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
            >
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(ellipse at center, ${scrollColors.weak}10, transparent)`,
                    }}
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="relative p-4">
                    <div className="flex items-center gap-2 mb-3">
                        <motion.span
                            className="text-2xl"
                            animate={{ rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            ✗
                        </motion.span>
                        <div>
                            <h4 className="font-bold" style={{ color: scrollColors.weak }}>
                                Livro de Mórmon
                            </h4>
                            <span className="text-xs text-red-400/70">Impossível verificar</span>
                        </div>
                    </div>

                    <ul className="text-xs text-red-200/80 space-y-1.5">
                        <li className="flex items-start gap-2">
                            <span style={{ color: scrollColors.weak }}>▸</span>
                            <span>Placas de ouro <strong>"devolvidas ao anjo"</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span style={{ color: scrollColors.weak }}>▸</span>
                            <span>Testemunhas com histórico problemático</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span style={{ color: scrollColors.weak }}>▸</span>
                            <span><strong>4.000+</strong> alterações desde 1830</span>
                        </li>
                    </ul>

                    <motion.div
                        className="mt-3 inline-block px-2 py-1 rounded text-[10px] font-bold"
                        style={{
                            background: `${scrollColors.weak}30`,
                            color: scrollColors.weak,
                        }}
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        SEM ORIGINAIS DISPONÍVEIS
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Slide13_Criterio4_Integridade() {
    const evaluations = [
        {
            tradition: 'Vedas',
            icon: '🕉️',
            color: colors.vedas,
            score: 'Boa',
            summary: 'Transmissão oral meticulosa',
            details: ['Linhagens de recitação', 'Sem "autógrafos" — natureza oral', 'Estabilidade respeitável']
        },
        {
            tradition: 'Budismo',
            icon: '☸️',
            color: colors.buddhism,
            score: 'Variável',
            summary: 'Compilação tardia (400+ anos)',
            details: ['Cânones diferentes por escola', 'Theravada vs Mahayana', 'Sem consenso universal']
        },
        {
            tradition: 'Alcorão',
            icon: '☪️',
            color: colors.islam,
            score: 'Boa*',
            summary: 'Codificação sob Uthman',
            details: ['Variantes queimadas (destruídas)', 'Estável desde então', '*História antes de Uthman turbulenta']
        },
        {
            tradition: 'Mórmon',
            icon: '📜',
            color: colors.mormon,
            score: 'Fraca',
            summary: 'Placas não disponíveis',
            details: ['Devolvidas ao anjo', 'Testemunhas problemáticas', '4000+ mudanças desde 1830']
        },
        {
            tradition: 'Bíblia',
            icon: '✝️',
            color: colors.bible,
            score: 'Excelente',
            summary: 'Manuscritos abundantes',
            details: ['5800+ MSS gregos do NT', 'Gap mínimo (décadas, não séculos)', 'Variantes 99%+ triviais']
        }
    ];

    return (
        <SlideWrapper>
            {/* Camadas de fundo */}
            <ManuscriptChain />
            <ParchmentParticles />

            {/* Gradiente de fundo temático */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse at top, ${scrollColors.primary}08 0%, transparent 50%),
                                radial-gradient(ellipse at bottom, ${scrollColors.secondary}08 0%, transparent 50%)`
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
                    <ScrollSymbol />

                    <motion.h2
                        className="font-['Cinzel'] text-2xl md:text-3xl mt-4"
                        style={{
                            color: scrollColors.gold,
                            textShadow: `0 0 20px ${scrollColors.primary}50`
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Critério 4: Integridade das Fontes
                    </motion.h2>

                    <motion.p
                        className="text-base mt-2"
                        style={{ color: `${scrollColors.primary}90` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Podemos confiar que temos o que foi originalmente ensinado?
                    </motion.p>
                </motion.div>

                {/* Grid de avaliações */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                    {evaluations.map((item, index) => (
                        <EvaluationCard key={item.tradition} item={item} index={index} />
                    ))}
                </div>

                {/* Seção de comparação */}
                <ComparisonSection />
            </motion.div>
        </SlideWrapper>
    );
}
