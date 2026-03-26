// Shared components and utilities for Lição 11 slides
// Tema: A Escavação — Arqueologia e Evidências Externas
import { motion } from 'framer-motion';

// ========================================
// PALETA DE CORES — TEMA ESCAVAÇÃO ARQUEOLÓGICA
// ========================================
export const colors = {
    // Estratos geológicos (progressão de profundidade)
    surface:        '#E8D5B7',
    surfaceLight:   '#F2E6D0',
    surfaceDark:    '#C4A882',
    topsoil:        '#B8956A',
    topsoilDark:    '#8B6F47',
    terracotta:     '#9E7B5A',
    terracottaDark: '#6B5240',
    terracottaRed:  '#B85C38',
    limestone:      '#8A8378',
    limestoneDark:  '#6B5F53',
    limestoneLight: '#A89F94',
    papyrus:        '#D4C5A9',
    papyrusDark:    '#3D3428',
    bedrock:        '#2C2418',
    bedrockGold:    '#D4A843',

    // Texto
    textLight:      '#FFFDF7',
    textMedium:     '#D5CBB9',
    textMuted:      '#ACACAC',
    textDark:       '#2C2C2C',
    warmWhite:      '#FFFDF7',

    // Acentos
    excavationAmber:'#E8A43A',
    amber:          '#E8A43A',
    brushCopper:    '#C17A3A',
    fieldGreen:     '#52C485',
    clayRed:        '#D4674A',
    stoneGray:      '#9CA3AF',
    goldVein:       '#F4D26B',
    goldBright:     '#F4D26B',
    mapBlue:        '#7BB3FC',

    // Backgrounds
    bgExcavation:   '#1E1A15',
    bgDeep:         '#1A1612',
    bgSurface:      '#2A2420',
    bgDossier:      '#1E1A15',

    // Status de evidência
    statusConfirmed:'#52C485',
    statusDebated:  '#E8A43A',
    statusSilent:   '#9CA3AF',
    statusDenied:   '#D4674A',

    // Quiz
    quizConcordo:   '#52C485',
    quizDepende:    '#F5B963',
    quizDiscordo:   '#F46565',
};

// ========================================
// SISTEMA DE ESTRATOS GEOLÓGICOS
// ========================================
export const STRATA = [
    {
        id: 'surface',
        label: 'Superfície',
        depth: '0m',
        range: [0, 4],
        gradient: `linear-gradient(180deg, ${colors.bgExcavation} 0%, #2A2218 50%, #1E1A15 100%)`,
        particleColor: colors.surfaceLight,
    },
    {
        id: 'topsoil',
        label: 'Calibragem',
        depth: '1m',
        range: [5, 11],
        gradient: `linear-gradient(180deg, #1E1A15 0%, #2A1F18 50%, #1A1612 100%)`,
        particleColor: colors.topsoil,
    },
    {
        id: 'terracotta',
        label: 'Antigo Testamento',
        depth: '3m',
        range: [12, 26],
        gradient: `linear-gradient(180deg, #1A1612 0%, #261E17 50%, #1E1815 100%)`,
        particleColor: colors.terracottaRed,
    },
    {
        id: 'limestone',
        label: 'Novo Testamento',
        depth: '5m',
        range: [27, 38],
        gradient: `linear-gradient(180deg, #1E1815 0%, #22201D 50%, #1A1918 100%)`,
        particleColor: colors.limestoneLight,
    },
    {
        id: 'papyrus',
        label: 'Fontes Externas',
        depth: '8m',
        range: [39, 47],
        gradient: `linear-gradient(180deg, #1A1918 0%, #211D15 50%, #1A1612 100%)`,
        particleColor: colors.papyrus,
    },
    {
        id: 'bedrock',
        label: 'Síntese',
        depth: '10m',
        range: [48, 55],
        gradient: `linear-gradient(180deg, #1A1612 0%, #15120E 50%, #100E0B 100%)`,
        particleColor: colors.goldVein,
    },
];

export function getStratum(slideIndex) {
    return STRATA.find(s => slideIndex >= s.range[0] && slideIndex <= s.range[1]) || STRATA[0];
}

// ========================================
// PERGUNTAS DO QUIZ INTERATIVO
// ========================================
export const quizQuestions = [
    {
        id: 1,
        question: "Se não existir evidência arqueológica de um evento bíblico, isso significa que o evento provavelmente não aconteceu.",
        icon: "🏺",
        correctAnswer: "discordo",
        revealSlides: [9, 10],
    },
    {
        id: 2,
        question: "A arqueologia pode provar que a Bíblia é a Palavra de Deus.",
        icon: "⛏️",
        correctAnswer: "discordo",
        revealSlides: [7, 8],
    },
    {
        id: 3,
        question: "Se um escritor antigo acerta detalhes geográficos e políticos específicos de uma cidade, isso indica que ele conhecia aquela cidade pessoalmente.",
        icon: "🗺️",
        correctAnswer: "concordo",
        revealSlides: [36, 37],
    },
    {
        id: 4,
        question: "O fato de que fontes hostis ao cristianismo mencionam Jesus torna a existência dele mais plausível do que se apenas fontes cristãs o fizessem.",
        icon: "📜",
        correctAnswer: "concordo",
        revealSlides: [42, 43],
    },
    {
        id: 5,
        question: "Quando múltiplas fontes independentes — de diferentes culturas e períodos — convergem sobre os mesmos fatos, isso é apenas coincidência.",
        icon: "🔗",
        correctAnswer: "discordo",
        revealSlides: [49],
    },
];

export const TOTAL_QUIZ_QUESTIONS = quizQuestions.length;

// ========================================
// PARTÍCULAS DE ESCAVAÇÃO
// ========================================
const excavationDustPositions = [
    { left: 7,  top: 10, duration: 10, delay: 0.3, size: 2.5 },
    { left: 15, top: 75, duration: 12, delay: 1.0, size: 1.5 },
    { left: 28, top: 20, duration: 9,  delay: 2.5, size: 2.0 },
    { left: 38, top: 55, duration: 11, delay: 0.7, size: 1.5 },
    { left: 48, top: 15, duration: 13, delay: 3.0, size: 2.0 },
    { left: 58, top: 80, duration: 10, delay: 1.5, size: 1.5 },
    { left: 65, top: 35, duration: 14, delay: 3.8, size: 2.5 },
    { left: 75, top: 65, duration: 11, delay: 0.5, size: 1.5 },
    { left: 82, top: 12, duration: 12, delay: 2.0, size: 2.0 },
    { left: 90, top: 48, duration: 10, delay: 4.0, size: 1.5 },
    { left: 20, top: 90, duration: 13, delay: 1.8, size: 2.0 },
    { left: 50, top: 45, duration: 11, delay: 3.2, size: 1.5 },
];

export function ExcavationDust({ stratumColor = colors.surfaceLight }) {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {excavationDustPositions.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        background: `radial-gradient(circle, ${stratumColor}40, ${stratumColor}10)`,
                    }}
                    animate={{
                        y: [0, 25, 0],
                        x: [0, Math.sin(i) * 8, 0],
                        opacity: [0.05, 0.2, 0.05],
                        scale: [0.7, 1.1, 0.7],
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

// ========================================
// VEIOS DE OURO (Background para Bedrock)
// ========================================
export function GoldVeinBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <motion.path
                    d="M0,300 Q100,280 200,320 T400,290 T600,340 T800,300"
                    fill="none"
                    stroke={colors.goldVein}
                    strokeWidth="1.5"
                    animate={{ opacity: [0.08, 0.25, 0.08] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path
                    d="M0,200 Q150,180 300,220 T500,190 T700,230 T800,200"
                    fill="none"
                    stroke={colors.bedrockGold}
                    strokeWidth="1"
                    animate={{ opacity: [0.05, 0.2, 0.05] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
                <motion.path
                    d="M0,450 Q200,430 350,460 T550,440 T800,470"
                    fill="none"
                    stroke={colors.goldVein}
                    strokeWidth="1"
                    animate={{ opacity: [0.06, 0.18, 0.06] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                />
                <motion.path
                    d="M100,100 Q200,120 300,90 T500,130 T700,100"
                    fill="none"
                    stroke={colors.bedrockGold}
                    strokeWidth="0.8"
                    animate={{ opacity: [0.04, 0.15, 0.04] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </svg>
        </div>
    );
}

// ========================================
// EXCAVATION WRAPPER (Container base)
// ========================================
export function ExcavationWrapper({ children, stratum = 'surface', className = '' }) {
    const stratumData = STRATA.find(s => s.id === stratum) || STRATA[0];
    const isBedrock = stratum === 'bedrock';

    return (
        <div
            className={`min-h-screen flex flex-col items-center justify-center relative overflow-hidden ${className}`}
            style={{ background: stratumData.gradient }}
        >
            <ExcavationDust stratumColor={stratumData.particleColor} />
            {isBedrock && <GoldVeinBackground />}
            {/* Linhas geológicas sutis */}
            <div className="absolute inset-0 pointer-events-none z-0" style={{ opacity: 0.03 }}>
                {[15, 30, 50, 70, 85].map(pos => (
                    <div
                        key={pos}
                        className="absolute w-full"
                        style={{
                            top: `${pos}%`,
                            height: '1px',
                            background: `linear-gradient(to right, transparent 0%, ${stratumData.particleColor}40 20%, ${stratumData.particleColor}60 50%, ${stratumData.particleColor}40 80%, transparent 100%)`,
                        }}
                    />
                ))}
            </div>
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
}

// ========================================
// EXCAVATION SEAL (Badge da lição)
// ========================================
export function ExcavationSeal({ number = 11, size = 'md', delay = 0 }) {
    const sizeMap = {
        sm: { w: 48, text: 'text-lg', icon: 'text-xs' },
        md: { w: 64, text: 'text-2xl', icon: 'text-sm' },
        lg: { w: 80, text: 'text-3xl', icon: 'text-base' },
    };
    const s = sizeMap[size] || sizeMap.md;

    return (
        <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay, type: 'spring', stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center rounded-full relative"
            style={{
                width: s.w,
                height: s.w,
                background: `linear-gradient(135deg, ${colors.terracotta} 0%, ${colors.terracottaDark} 100%)`,
                boxShadow: `0 4px 20px ${colors.excavationAmber}30, inset 0 1px 2px ${colors.surfaceLight}20`,
                border: `2px solid ${colors.excavationAmber}50`,
            }}
        >
            <div className="text-center">
                <span className={`${s.icon} block`} style={{ color: colors.surfaceLight, opacity: 0.6, lineHeight: 1 }}>⛏️</span>
                <span className={`${s.text} font-bold block`} style={{ color: colors.textLight, fontFamily: "'Oswald', sans-serif", lineHeight: 1 }}>
                    {number}
                </span>
            </div>
        </motion.div>
    );
}

// ========================================
// STRATUM HEADER (Divisor de seção)
// ========================================
export function StratumHeader({ stratumName, subtitle, depth, icon, delay = 0 }) {
    return (
        <div className="text-center max-w-4xl mx-auto px-6">
            {/* Linha de rachadura */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay, duration: 0.6, ease: 'easeOut' }}
                className="h-0.5 max-w-2xl mx-auto mb-8"
                style={{
                    background: `linear-gradient(to right, transparent, ${colors.excavationAmber}, transparent)`,
                }}
            />

            {/* Ícone */}
            {icon && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: delay + 0.3, type: 'spring' }}
                    className="text-5xl mb-4"
                >
                    {icon}
                </motion.div>
            )}

            {/* Título do estrato */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delay + 0.4, type: 'spring', stiffness: 200 }}
                className="text-3xl md:text-5xl font-bold mb-3"
                style={{
                    color: colors.textLight,
                    fontFamily: "'Playfair Display', Georgia, serif",
                    textShadow: `0 2px 30px ${colors.excavationAmber}15`,
                }}
            >
                {stratumName}
            </motion.h2>

            {/* Subtítulo */}
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + 0.6 }}
                    className="text-lg italic"
                    style={{ color: colors.excavationAmber }}
                >
                    {subtitle}
                </motion.p>
            )}

            {/* Profundidade */}
            {depth && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: delay + 0.8 }}
                    className="mt-4 text-xs uppercase tracking-[0.3em] font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Profundidade: {depth}
                </motion.div>
            )}
        </div>
    );
}

// ========================================
// ARTIFACT CARD (Card de artefato)
// ========================================
export function ArtifactCard({
    name,
    date,
    material,
    location,
    discoveredBy,
    biblicalRef,
    significance,
    status = 'confirmed',
    imageSrc,
    children,
    delay = 0,
}) {
    const statusColors = {
        confirmed: colors.statusConfirmed,
        debated: colors.statusDebated,
        silent: colors.statusSilent,
    };
    const statusLabels = {
        confirmed: 'CONFIRMADO',
        debated: 'EM DEBATE',
        silent: 'SILÊNCIO',
    };
    const sc = statusColors[status] || statusColors.confirmed;
    const sl = statusLabels[status] || 'CONFIRMADO';

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6, type: 'spring', stiffness: 120 }}
            className="rounded-2xl overflow-hidden relative"
            style={{
                background: `${colors.bgSurface}`,
                border: `1px solid ${sc}25`,
                boxShadow: `0 8px 32px ${colors.bgDeep}80`,
            }}
        >
            {/* Brush reveal overlay */}
            <motion.div
                initial={{ x: '0%' }}
                animate={{ x: '110%' }}
                transition={{ delay: delay + 0.3, duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                    background: `linear-gradient(to right, ${colors.bgSurface} 0%, ${colors.bgSurface}80 60%, transparent 100%)`,
                }}
            />

            {/* Status bar */}
            <div className="px-5 py-2.5 flex items-center justify-between" style={{ background: `${sc}15` }}>
                <div className="flex items-center gap-3">
                    {date && <span className="text-sm font-mono font-bold" style={{ color: sc }}>{date}</span>}
                    {material && <span className="text-xs" style={{ color: colors.textMuted }}>· {material}</span>}
                </div>
                <span
                    className="text-xs font-bold tracking-wider px-3 py-1 rounded-full"
                    style={{ background: `${sc}20`, color: sc, border: `1px solid ${sc}40` }}
                >
                    {sl}
                </span>
            </div>

            <div className="flex flex-col md:flex-row">
                {/* Imagem */}
                {imageSrc && (
                    <div className="md:w-2/5 relative overflow-hidden" style={{ minHeight: 200 }}>
                        <img
                            src={imageSrc}
                            alt={name}
                            className="w-full h-full object-cover"
                            style={{ filter: 'sepia(15%) contrast(1.1)', minHeight: 200 }}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        {/* Fallback */}
                        <div
                            className="absolute inset-0 items-center justify-center hidden"
                            style={{ background: `${colors.bgDeep}`, display: 'none' }}
                        >
                            <div className="text-center">
                                <span className="text-5xl block mb-2">🏺</span>
                                <span className="text-sm" style={{ color: colors.textMuted }}>{name}</span>
                            </div>
                        </div>
                        {/* Gradient overlay */}
                        <div className="absolute inset-0" style={{
                            background: `linear-gradient(to right, transparent 60%, ${colors.bgSurface} 100%)`
                        }} />
                    </div>
                )}

                {/* Conteúdo */}
                <div className={`p-5 ${imageSrc ? 'md:w-3/5' : 'w-full'}`}>
                    <h3 className="text-xl font-bold mb-2" style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}>
                        {name}
                    </h3>

                    <div className="space-y-1.5 mb-3">
                        {location && (
                            <p className="text-sm flex items-center gap-2" style={{ color: colors.textMedium }}>
                                <span style={{ color: colors.excavationAmber }}>📍</span> {location}
                            </p>
                        )}
                        {discoveredBy && (
                            <p className="text-sm flex items-center gap-2" style={{ color: colors.textMedium }}>
                                <span style={{ color: colors.excavationAmber }}>🔍</span> {discoveredBy}
                            </p>
                        )}
                        {biblicalRef && (
                            <p className="text-sm flex items-center gap-2" style={{ color: colors.textMedium }}>
                                <span style={{ color: colors.excavationAmber }}>📖</span> {biblicalRef}
                            </p>
                        )}
                    </div>

                    {children}
                </div>
            </div>

            {/* Significância */}
            {significance && (
                <div className="px-5 py-3" style={{ background: `${sc}08`, borderTop: `1px solid ${sc}15` }}>
                    <p className="text-sm italic" style={{ color: colors.textMedium }}>
                        <span style={{ color: sc, fontWeight: 'bold' }}>↳</span> {significance}
                    </p>
                </div>
            )}
        </motion.div>
    );
}

// ========================================
// SOURCE CARD (Fontes históricas externas)
// ========================================
export function SourceCard({ author, work, date, quote, analysis, stance = 'hostile', children, delay = 0 }) {
    const stanceColors = {
        hostile: colors.clayRed,
        neutral: colors.excavationAmber,
        friendly: colors.fieldGreen,
    };
    const stanceLabels = {
        hostile: 'TESTEMUNHA HOSTIL',
        neutral: 'TESTEMUNHA NEUTRA',
        friendly: 'TESTEMUNHA FAVORÁVEL',
    };
    const stc = stanceColors[stance] || stanceColors.hostile;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: 0.5 }}
            transition={{ delay, duration: 0.5 }}
            className="rounded-xl overflow-hidden relative"
            style={{
                background: colors.bgSurface,
                border: `1px solid ${stc}25`,
                boxShadow: `0 8px 32px ${colors.bgDeep}80, 4px 4px 0 ${colors.bgDeep}40`,
            }}
        >
            {/* Header */}
            <div className="px-5 py-3 flex items-center justify-between" style={{ background: `${stc}10`, borderBottom: `1px solid ${stc}15` }}>
                <div>
                    <h3 className="text-lg font-bold" style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}>
                        {author}
                    </h3>
                    <p className="text-xs font-mono" style={{ color: colors.textMuted }}>
                        {work} · {date}
                    </p>
                </div>
                <span
                    className="text-xs font-bold tracking-wider px-3 py-1 rounded-full"
                    style={{ background: `${stc}20`, color: stc, border: `1px solid ${stc}40` }}
                >
                    {stanceLabels[stance]}
                </span>
            </div>

            {/* Citação */}
            {quote && (
                <div className="mx-5 my-4 p-4 rounded-lg" style={{
                    background: `${colors.bgDeep}`,
                    borderLeft: `3px solid ${stc}60`,
                }}>
                    <p className="text-base italic leading-relaxed" style={{ color: colors.textLight }}>
                        "{quote}"
                    </p>
                </div>
            )}

            {/* Análise */}
            {analysis && (
                <div className="px-5 pb-4">
                    <p className="text-sm" style={{ color: colors.textMedium }}>{analysis}</p>
                </div>
            )}

            {children && <div className="px-5 pb-4">{children}</div>}
        </motion.div>
    );
}

// ========================================
// EVIDENCE SCALE (Barra de status)
// ========================================
export function EvidenceScale({ items, delay = 0, vertical = false }) {
    return (
        <div className={`space-y-3 ${vertical ? '' : ''}`}>
            {items.map((item, i) => {
                const sc = item.status === 'confirmed' ? colors.statusConfirmed
                    : item.status === 'debated' ? colors.statusDebated
                    : colors.statusSilent;
                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: delay + i * 0.15, duration: 0.4 }}
                        className="flex items-center gap-3"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ delay: delay + i * 0.15 + 0.2, duration: 0.6 }}
                            className="h-8 rounded-lg flex items-center px-3 relative overflow-hidden"
                            style={{
                                background: `${sc}15`,
                                border: `1px solid ${sc}30`,
                                maxWidth: 500,
                            }}
                        >
                            <span className="text-sm font-medium relative z-10" style={{ color: sc }}>
                                {item.icon && <span className="mr-2">{item.icon}</span>}
                                {item.label}
                            </span>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: delay + i * 0.15 + 0.3, duration: 0.5 }}
                                className="absolute left-0 top-0 bottom-0 origin-left"
                                style={{ background: `${sc}10`, width: '100%' }}
                            />
                        </motion.div>
                        <span className="text-xs font-bold tracking-wider" style={{ color: sc }}>
                            {item.status === 'confirmed' ? '✓' : item.status === 'debated' ? '?' : '—'}
                        </span>
                    </motion.div>
                );
            })}
        </div>
    );
}

// ========================================
// BRUSH REVEAL (Animação de escovação)
// ========================================
export function BrushReveal({ children, delay = 0 }) {
    return (
        <div className="relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delay + 0.4, duration: 0.3 }}
            >
                {children}
            </motion.div>
            <motion.div
                initial={{ x: '0%' }}
                animate={{ x: '110%' }}
                transition={{ delay, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    background: `linear-gradient(to right, ${colors.bgExcavation} 0%, ${colors.bgExcavation}90 40%, transparent 100%)`,
                }}
            />
        </div>
    );
}

// ========================================
// COMPARISON TABLE (Tabela de campo)
// ========================================
export function ComparisonTable({ columns, rows, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay }}
            className="overflow-x-auto rounded-xl"
            style={{
                background: colors.bgSurface,
                border: `1px solid ${colors.excavationAmber}15`,
            }}
        >
            <table className="w-full text-sm">
                <thead>
                    <tr style={{ background: `${colors.excavationAmber}10`, borderBottom: `1px solid ${colors.excavationAmber}20` }}>
                        {columns.map((col, i) => (
                            <th key={i} className="px-4 py-3 text-left font-bold tracking-wider text-xs uppercase" style={{ color: colors.excavationAmber }}>
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <motion.tr
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: delay + 0.2 + i * 0.1 }}
                            style={{ borderBottom: `1px solid ${colors.excavationAmber}08` }}
                        >
                            {row.map((cell, j) => (
                                <td key={j} className="px-4 py-3" style={{ color: j === 0 ? colors.textLight : colors.textMedium }}>
                                    {cell}
                                </td>
                            ))}
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    );
}

// ========================================
// MUSEUM PLAQUE (Placa de museu)
// ========================================
export function MuseumPlaque({ name, date, museum, material, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay }}
            className="inline-block px-5 py-3 rounded-lg"
            style={{
                background: `linear-gradient(135deg, ${colors.bgSurface} 0%, ${colors.bgDeep} 100%)`,
                border: `2px solid ${colors.excavationAmber}30`,
                boxShadow: `0 4px 16px ${colors.bgDeep}60`,
            }}
        >
            <p className="font-bold text-base" style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}>{name}</p>
            <p className="text-xs mt-1 font-mono" style={{ color: colors.excavationAmber }}>
                {date} {material && `· ${material}`}
            </p>
            {museum && <p className="text-xs mt-0.5" style={{ color: colors.textMuted }}>📍 {museum}</p>}
        </motion.div>
    );
}

// ========================================
// DEPTH INDICATOR (Indicador de profundidade)
// ========================================
export function DepthIndicator({ currentSlide, totalSlides }) {
    const stratum = getStratum(currentSlide);
    const progress = currentSlide / Math.max(totalSlides - 1, 1);

    return (
        <div className="fixed left-0 top-0 bottom-12 w-12 z-40 hidden md:flex flex-col items-center py-8 transition-opacity duration-300 opacity-40 hover:opacity-80">
            {/* Linha vertical */}
            <div
                className="absolute left-1/2 top-8 bottom-8 w-0.5 -translate-x-1/2"
                style={{
                    background: `linear-gradient(180deg, ${colors.surface}30, ${colors.excavationAmber}40, ${colors.bedrock}30)`,
                }}
            />

            {/* Marcadores de estrato */}
            {STRATA.map(s => {
                const pos = s.range[0] / Math.max(totalSlides - 1, 1);
                const isActive = stratum.id === s.id;
                return (
                    <div
                        key={s.id}
                        className="absolute left-1/2 -translate-x-1/2 rounded-full transition-all duration-300"
                        style={{
                            top: `${8 + pos * 84}%`,
                            width: isActive ? 10 : 6,
                            height: isActive ? 10 : 6,
                            background: isActive ? s.particleColor : 'transparent',
                            border: `1.5px solid ${s.particleColor}80`,
                            boxShadow: isActive ? `0 0 8px ${s.particleColor}40` : 'none',
                        }}
                        title={`${s.label} · ${s.depth}`}
                    />
                );
            })}

            {/* Indicador de posição atual */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 rounded-full"
                style={{
                    width: 14,
                    height: 14,
                    background: colors.excavationAmber,
                    boxShadow: `0 0 12px ${colors.excavationAmber}60`,
                    top: `${8 + progress * 84}%`,
                }}
                layout
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
        </div>
    );
}

// ========================================
// STAMP BADGE
// ========================================
export function StampBadge({ text, color = colors.excavationAmber, delay = 0, rotate = -8 }) {
    return (
        <motion.div
            initial={{ scale: 0, rotate: rotate - 20 }}
            animate={{ scale: 1, rotate }}
            transition={{ delay, type: 'spring', stiffness: 300 }}
            className="inline-block px-6 py-2 rounded-lg"
            style={{
                borderWidth: '3px',
                borderStyle: 'solid',
                borderColor: color,
                color: color,
                fontFamily: "'Oswald', sans-serif",
                fontSize: '1.1rem',
                fontWeight: 800,
                letterSpacing: '0.15em',
            }}
        >
            {text}
        </motion.div>
    );
}

// ========================================
// NOTAS DO INSTRUTOR POR SLIDE
// ========================================
export const slideNotes = {
    0: {
        title: "Capa — Escavação",
        notes: [
            "'Hoje as pedras vão falar.'",
            "Tom: investigador de campo, não professor",
            "💡 Preparar expectativa: 'Vamos descer camada por camada.'"
        ]
    },
    1: {
        title: "Quiz — Perguntas 1-2",
        notes: [
            "5 perguntas — escala Concordo/Depende/Discordo",
            "💡 'Responda instintivamente. Não há resposta certa ou errada — ainda.'",
            "Perguntas calibram expectativas sobre arqueologia"
        ]
    },
    2: {
        title: "Quiz — Perguntas 3-5",
        notes: [
            "Continuar quiz",
            "Perguntas 4-5 serão revisitadas na seção de fontes externas",
            "💡 Anotar respostas para o fechamento"
        ]
    },
    3: {
        title: "Quando as pedras falam",
        notes: [
            "Pergunta retórica — deixar no ar",
            "'Quando as pedras falam, o que elas dizem?'",
            "💡 Pausa dramática antes de avançar"
        ]
    },
    4: {
        title: "Vamos descer",
        notes: [
            "Transição visual — a escavação começa",
            "'Vamos descer. Camada por camada.'",
            "💡 Este é o momento que a metáfora começa"
        ]
    },
    5: {
        title: "Header: Calibragem",
        notes: [
            "Entrada no estrato Topsoil",
            "'Antes de cavar, precisamos das ferramentas certas.'",
            "💡 Calibrar expectativas é CRUCIAL para a Guga"
        ]
    },
    6: {
        title: "O que arqueologia PODE fazer",
        notes: [
            "5 capacidades concretas",
            "💡 'Confirmar ≠ provar. São conceitos diferentes.'",
            "🔔 Retorno quiz pergunta 2"
        ]
    },
    7: {
        title: "O que NÃO pode fazer",
        notes: [
            "3 limitações honestas",
            "⚠️ 'Se eu dissesse que a arqueologia prova Deus, a Guga perderia a confiança imediatamente.'",
            "💡 Honestidade sobre limitações = credibilidade"
        ]
    },
    8: {
        title: "O problema do silêncio",
        notes: [
            "Analogia do Brasil em 3000 anos",
            "'Imagine que arqueólogos do futuro escavem o Brasil. Encontram São Paulo, Brasília... mas não encontram Votorantim.'",
            "🧠 Guga pode perguntar: 'Se a ausência não prova nada, então a presença também não deveria provar nada, certo?'",
            "💡 Resposta: 'Confirmação e prova são coisas diferentes. Evidência cumulativa.'",
            "🔔 Retorno quiz pergunta 1"
        ]
    },
    9: {
        title: "Padrão invertido",
        notes: [
            "Céticos duvidam → Evidência encontrada → Texto confirmado",
            "3 exemplos: Hititas, Belsazar, Betesda",
            "💡 'O padrão é consistente. Isso não prova tudo — mas sugere uma direção.'"
        ]
    },
    10: {
        title: "Resumo Calibragem",
        notes: [
            "Resumo rápido do bloco",
            "'O que estabelecemos: ferramentas corretas, expectativas calibradas.'",
            "💡 Transição: 'Agora vamos descer de verdade...'"
        ]
    },
    11: {
        title: "Header: Antigo Testamento",
        notes: [
            "Transição cross-estrato: Topsoil → Terracotta",
            "'6 artefatos que falam. Pedras reais, museus reais, datas verificáveis.'",
            "💡 Tom: rigor intelectual, não apologética barata"
        ]
    },
    12: {
        title: "Estela de Merneptá — Card",
        notes: [
            "PRIMEIRO ARTEFATO. Deixar o card respirar.",
            "'O faraó quer se gabar de ter destruído Israel. Ironicamente, isso confirma que Israel existia.'",
            "💡 Detalhe: hieróglifos marcam Israel como POVO, não como terra/cidade"
        ]
    },
    13: {
        title: "Estela de Merneptá — Detalhe",
        notes: [
            "Aprofundar significância",
            "Citação: 'Israel está devastado, sem semente.'",
            "💡 1208 a.C. = mais antiga referência extrabíblica a Israel"
        ]
    },
    14: {
        title: "Estela de Tel Dan — Card",
        notes: [
            "'Até 1993, céticos diziam que Davi era lenda. Depois disso, silêncio.'",
            "💡 A inscrição é de um INIMIGO de Israel — Hazael de Damasco"
        ]
    },
    15: {
        title: "Estela de Tel Dan — Detalhe",
        notes: [
            "'Casa de Davi' (bytdwd) aparece 26x na Bíblia Hebraica",
            "A Tel Dan mostra que VIZINHOS HOSTIS também usavam o termo",
            "🧠 Guga pode gostar do paralelo com 'Casa de Onri'"
        ]
    },
    16: {
        title: "Prisma de Senaqueribe — Card",
        notes: [
            "Prisma hexagonal, cuneiforme acádio",
            "'O silêncio é a evidência. O que ele NÃO diz é mais importante do que o que diz.'",
            "💡 Senaqueribe se gaba de TUDO — mas não diz que tomou Jerusalém"
        ]
    },
    17: {
        title: "Prisma de Senaqueribe — Detalhe",
        notes: [
            "'Trancou Ezequias como um pássaro na gaiola'",
            "Mas NUNCA diz que abriu a gaiola",
            "⚠️ Nota de honestidade: diferenças nos valores do tributo (300 vs 800 talentos)",
            "🧠 Guga: 'Ok, o texto assírio confirma o cerco, mas não o milagre.' Exato."
        ]
    },
    18: {
        title: "Cilindro de Ciro — Card",
        notes: [
            "Cilindro de argila, 539 a.C., Museu Britânico",
            "'A política de Ciro era real. O decreto descrito em Esdras não foi inventado.'",
            "💡 Não menciona Israel especificamente, mas descreve a política geral de retorno"
        ]
    },
    19: {
        title: "Cilindro de Ciro — Detalhe",
        notes: [
            "Conexão com Isaías 44:28-45:1 — Ciro chamado pelo nome",
            "⚠️ 'Céticos argumentam que Isaías foi escrito depois. A profecia é debatida.'",
            "💡 Honestidade intelectual: mencionar o debate, não ignorar"
        ]
    },
    20: {
        title: "Túnel de Ezequias — Card",
        notes: [
            "533 metros de rocha escavada à mão",
            "'Você pode caminhar dentro dele hoje. Em Jerusalém.'",
            "💡 Confirmação DIRETA e VISITÁVEL"
        ]
    },
    21: {
        title: "Túnel de Ezequias — Detalhe",
        notes: [
            "Inscrição de Siloé: duas equipes escavando de lados opostos",
            "'Quando os escavadores balançaram o machado, cada um em direção ao outro...'",
            "💡 Engenharia impressionante para o período"
        ]
    },
    22: {
        title: "Óstracos de Laquis — Card",
        notes: [
            "Cartas militares desesperadas, 588-586 a.C.",
            "'Não são propaganda real. São vozes humanas nos últimos momentos.'",
            "💡 Conexão terapêutica: 'como terapeuta, ela entende a diferença entre relatório e voz real'"
        ]
    },
    23: {
        title: "Óstracos de Laquis — Detalhe",
        notes: [
            "Carta IV: 'Estamos vigiando os sinais de Laquis... não podemos ver Azeca.'",
            "Jeremias 34:7: Laquis e Azeca = últimas cidades resistindo",
            "💡 'O silêncio sobre Azeca significa que Azeca já caiu. Laquis será a próxima.'"
        ]
    },
    24: {
        title: "Tabela resumo AT",
        notes: [
            "6 artefatos lado a lado",
            "💡 Reforçar o padrão: não é um achado isolado — são múltiplas convergências"
        ]
    },
    25: {
        title: "Transição AT → NT",
        notes: [
            "'Descemos mais fundo. As pedras do AT falaram. Agora: pedras do Novo Testamento.'",
            "💡 Pausa antes de mudar de estrato"
        ]
    },
    26: {
        title: "Header: Novo Testamento",
        notes: [
            "Transição cross-estrato: Terracotta → Limestone",
            "'5 descobertas que iluminam o texto do NT.'"
        ]
    },
    27: {
        title: "Pedra de Pilatos — Card",
        notes: [
            "PRIMEIRO ARTEFATO DO NT",
            "'Até 1961, a única evidência de Pilatos era literária. Agora temos pedra.'",
            "💡 Detalhe crucial: 'prefeito' (praefectus), não 'procurador' — título correto do período"
        ]
    },
    28: {
        title: "Pedra de Pilatos — Detalhe",
        notes: [
            "Transliteração: [PONT]IUS PILATUS [PRAEF]ECTUS IUDA[EA]E",
            "Tácito usou 'procurador' 80 anos depois — adaptando terminologia",
            "💡 Ambas as fontes são independentes — isso reforça autenticidade"
        ]
    },
    29: {
        title: "Piscina de Betesda — Card",
        notes: [
            "'5 pórticos' — céticos diziam que era simbolismo",
            "💡 O argumento era elegante: 5 pórticos = 5 livros de Moisés = alegoria. Aí acharam os 5 pórticos. Literal."
        ]
    },
    30: {
        title: "Piscina de Betesda — Detalhe",
        notes: [
            "Implicação: quem escreveu João 5 conhecia Jerusalém ANTES de 70 d.C.",
            "Piscina destruída pelos romanos em 70 d.C.",
            "🧠 Guga: conexão com futuro estudo de João — 'Quando chegarmos em João 5, você já sabe que o cenário é real.'"
        ]
    },
    31: {
        title: "Ossuário de Caifás — Card",
        notes: [
            "'O homem que condenou Jesus. Seus ossos foram encontrados.'",
            "'Yehosef bar Caiaphas' = José, filho de Caifás",
            "💡 Descoberto por ACIDENTE em 1990"
        ]
    },
    32: {
        title: "Ossuário de Caifás — Detalhe",
        notes: [
            "⚠️ Não é 100% certo que é O Caifás — mas combinação de nome, data, local e status torna altamente provável",
            "💡 Josefo também chama de 'José, que era chamado Caifás'"
        ]
    },
    33: {
        title: "Inscrição de Erasto — Card",
        notes: [
            "Romanos 16:23: 'Erasto, o tesoureiro da cidade'",
            "Em Corinto: inscrição de Erasto, oficial da cidade",
            "💡 Títulos diferentes (tesoureiro vs. edil) — debatido se é a mesma pessoa"
        ]
    },
    34: {
        title: "Inscrição de Erasto — Detalhe",
        notes: [
            "Nome raro + mesma cidade = coincidência pouco provável",
            "⚠️ Status: confirmado com ressalvas (debate acadêmico ativo)"
        ]
    },
    35: {
        title: "Lucas como Historiador — Tabela",
        notes: [
            "TABELA DE 5 TÍTULOS",
            "Tessalônica: politarcas. Malta: protos. Filipos: pretores. Éfeso: grammateus. Chipre: procônsul.",
            "💡 'Cada cidade tinha um título diferente. Lucas acerta TODOS.'"
        ]
    },
    36: {
        title: "Lucas como Historiador — Detalhe",
        notes: [
            "Ramsay: 'Lucas é um historiador de primeira classe'",
            "Politarcas: termo desconhecido fora da Bíblia até encontrarem 30+ inscrições",
            "💡 Mais um caso de 'cético corrigido pela arqueologia'"
        ]
    },
    37: {
        title: "Tabela resumo NT",
        notes: [
            "5 descobertas lado a lado",
            "Transição: 'Mais fundo ainda. As pedras já falaram. Agora, a tinta.'"
        ]
    },
    38: {
        title: "Header: Fontes Externas",
        notes: [
            "Transição cross-estrato: Limestone → Papyrus",
            "'Quando NÃO-cristãos falam de Cristo'",
            "💡 Tom: estas são testemunhas que não tinham interesse em promover o cristianismo"
        ]
    },
    39: {
        title: "Flávio Josefo — Card",
        notes: [
            "⚠️ CUIDADO com o Testimonium Flavianum",
            "Mostrar as 3 camadas: original / interpolação / debatido",
            "💡 Honestidade sobre adulteração = credibilidade do núcleo autêntico",
            "🧠 Guga: 'Se foi adulterado, como confiar?' → partes adulteradas são identificáveis"
        ]
    },
    40: {
        title: "Flávio Josefo — Detalhe (Tiago)",
        notes: [
            "Antiguidades XX.200: 'Tiago, irmão de Jesus, que era chamado Cristo'",
            "QUASE UNIVERSALMENTE aceita — até por céticos",
            "💡 'que era chamado Cristo' = identificador, não confissão de fé"
        ]
    },
    41: {
        title: "Tácito — Card",
        notes: [
            "TESTEMUNHA HOSTIL — conceito mais importante da seção",
            "'Tácito ODEIA os cristãos. Chama de superstição perniciosa. Mas confirma os fatos.'",
            "🔔 Retorno quiz pergunta 4",
            "💡 Confirma: Cristo, Pilatos, Tibério, execução, expansão até Roma"
        ]
    },
    42: {
        title: "Tácito — Detalhe",
        notes: [
            "3 confirmações na citação: pessoa (Christus), período (Tibério), executor (Pilatos)",
            "Como senador, Tácito tinha acesso a registros oficiais romanos",
            "💡 O tom hostil É a marca de autenticidade — um interpolador não chamaria de 'superstição perniciosa'"
        ]
    },
    43: {
        title: "Plínio — Card",
        notes: [
            "Governador romano pedindo instrução sobre como lidar com cristãos",
            "'Cristãos cantavam hinos a Cristo como a um deus, se reuniam antes do amanhecer'",
            "💡 'Não é sobre o que ele diz. É sobre o que ele inadvertidamente confirma.'"
        ]
    },
    44: {
        title: "Plínio — Detalhe",
        notes: [
            "112 d.C. = apenas 80 anos após a crucificação",
            "Comunidades organizadas no interior da Turquia",
            "💡 'O rápido crescimento de um movimento que começou com um homem crucificado na periferia do Império requer explicação.'"
        ]
    },
    45: {
        title: "Talmude — Card",
        notes: [
            "'Yeshu praticou feitiçaria e seduziu Israel'",
            "💡 PONTO ESTRATÉGICO: 'O Talmude não nega os milagres — os atribui a feitiçaria'",
            "🧠 Guga: paralelo com Mateus 12:24 (fariseus atribuem a Belzebu)"
        ]
    },
    46: {
        title: "Talmude — Detalhe + Síntese Fontes",
        notes: [
            "Tabela resumo das 4 fontes",
            "'Ninguém nega que Jesus existiu, que fez coisas extraordinárias, que foi executado.'",
            "💡 'A disputa é sobre a interpretação, não sobre os fatos.'"
        ]
    },
    47: {
        title: "Header: Síntese",
        notes: [
            "Transição cross-estrato: Papyrus → Bedrock",
            "'A rocha no fundo. O que encontramos depois de escavar.'",
            "💡 Veios de ouro no background — metáfora de valor encontrado nas profundezas",
            "🔔 Retorno quiz pergunta 5"
        ]
    },
    48: {
        title: "Argumento Cumulativo",
        notes: [
            "Tabela completa: 15+ evidências convergentes",
            "💡 'Nenhuma individualmente prova. Juntas, formam um padrão.'"
        ]
    },
    49: {
        title: "Bíblia vs Livro de Mórmon",
        notes: [
            "⚠️ Tom NEUTRO. Não é ataque — é aplicação consistente do critério.",
            "Bíblia: 15+ confirmações. Mórmon: zero.",
            "💡 'Mesmo teste. Resultados radicalmente diferentes.'"
        ]
    },
    50: {
        title: "Honestidade: o que NÃO sabemos",
        notes: [
            "⚠️ ESTE SLIDE É O QUE NOS DÁ CREDIBILIDADE",
            "Êxodo, Conquista de Canaã, Templo de Salomão — debates ativos",
            "💡 'Se fôssemos desonestos, não mostraríamos este slide. A força do argumento está na transparência.'"
        ]
    },
    51: {
        title: "Que tipo de texto é a Bíblia?",
        notes: [
            "Pergunta aberta — NÃO RESPONDER",
            "'Mitologia? Ficção histórica? Ou algo que opera no território da história verificável?'",
            "💡 Deixar a pergunta trabalhar. O peso cumulativo das evidências é a resposta."
        ]
    },
    52: {
        title: "Conexões Pessoais",
        notes: [
            "Jó: Deus opera dentro da história",
            "Grande Conflito: marcas no registro histórico",
            "Sermão do Monte + Tácito: o homem cujas palavras lemos existe",
            "João: Betesda confirmada — preparação para futuro estudo"
        ]
    },
    53: {
        title: "Quiz Revisitado",
        notes: [
            "🔔 Voltar às respostas do quiz de abertura",
            "💡 'Mudou alguma coisa? As respostas do começo ainda fazem sentido?'",
            "Não forçar mudança — apenas perguntar"
        ]
    },
    54: {
        title: "Frase Final",
        notes: [
            "'As pedras falam. A pergunta é: você está ouvindo?'",
            "💡 SILÊNCIO. Não adicionar nada. Não explicar. Deixar pesar.",
            "Lucas 19:40 — 'As pedras clamarão'"
        ]
    },
    55: {
        title: "Escavação Concluída",
        notes: [
            "Selo + stamp: ESCAVAÇÃO CONCLUÍDA",
            "Oração pessoal e honesta",
            "💡 Agradecer pela jornada intelectual compartilhada"
        ]
    },
};
