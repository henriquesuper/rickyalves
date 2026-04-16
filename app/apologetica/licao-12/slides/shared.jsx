// Shared components and utilities for Lição 12 slides
// Tema: Laboratório Óptico — Hermenêutica Bíblica
import { motion } from 'framer-motion';

// ========================================
// PALETA DE CORES — TEMA LABORATÓRIO ÓPTICO
// ========================================
export const colors = {
    // Ambiente do laboratório (fundos escuros)
    labDark:        '#0D1117',
    labSurface:     '#161B22',
    labMid:         '#1E2530',

    // Lentes (progressão de clareza)
    lensBlue:       '#4A9EFF',
    lensTeal:       '#2DD4BF',
    lensAmber:      '#F5B963',
    lensRed:        '#F46565',
    lensPurple:     '#A78BFA',

    // Espectro prismático
    prismRed:       '#FF6B6B',
    prismOrange:    '#FFA94D',
    prismYellow:    '#FFD43B',
    prismGreen:     '#51CF66',
    prismBlue:      '#339AF0',
    prismIndigo:    '#5C7CFA',
    prismViolet:    '#CC5DE8',

    // Texto
    textLight:      '#F0F6FC',
    textMedium:     '#C9D1D9',
    textMuted:      '#8B949E',
    textDark:       '#2C2C2C',
    warmWhite:      '#FFFDF7',

    // Status
    statusFocused:  '#2DD4BF',
    statusBlurry:   '#F5B963',
    statusDistorted:'#F46565',

    // Quiz
    quizConcordo:   '#2DD4BF',
    quizDepende:    '#F5B963',
    quizDiscordo:   '#F46565',

    // Backgrounds
    bgLab:          '#0D1117',
    bgDeep:         '#0A0E14',
    bgSurface:      '#161B22',
};

// ========================================
// SISTEMA DE ESTRATOS — CAMADAS DE LEITURA
// ========================================
export const STRATA = [
    {
        id: 'naked-eye',
        label: 'Superfície',
        mag: '1x',
        range: [0, 5],
        gradient: `linear-gradient(180deg, #0D1117 0%, #111827 50%, #0D1117 100%)`,
        particleColor: colors.lensBlue,
    },
    {
        id: 'first-lens',
        label: 'Calibração',
        mag: '2x',
        range: [6, 11],
        gradient: `linear-gradient(180deg, #0D1117 0%, #0F1A2A 50%, #0D1520 100%)`,
        particleColor: colors.lensTeal,
    },
    {
        id: 'lens-array',
        label: '7 Princípios',
        mag: '5x',
        range: [12, 33],
        gradient: `linear-gradient(180deg, #0D1520 0%, #0D1A1A 50%, #0D1117 100%)`,
        particleColor: colors.lensTeal,
    },
    {
        id: 'warning-filter',
        label: '5 Perigos',
        mag: '10x',
        range: [34, 43],
        gradient: `linear-gradient(180deg, #0D1117 0%, #1A1510 50%, #17130D 100%)`,
        particleColor: colors.lensAmber,
    },
    {
        id: 'advanced-optics',
        label: 'Ferramentas',
        mag: '20x',
        range: [44, 50],
        gradient: `linear-gradient(180deg, #17130D 0%, #1A1418 50%, #150F18 100%)`,
        particleColor: colors.lensPurple,
    },
    {
        id: 'full-clarity',
        label: 'Síntese',
        mag: '50x',
        range: [51, 57],
        gradient: `linear-gradient(180deg, #150F18 0%, #0D1117 50%, #0A0E14 100%)`,
        particleColor: colors.lensBlue,
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
        question: "Se um versículo bíblico parece claro por si só, não preciso verificar o contexto ao redor para entendê-lo.",
        icon: "📖",
        correctAnswer: "discordo",
        revealSlides: [14, 15],
    },
    {
        id: 2,
        question: "Quando leio um texto antigo, o significado que eu encontro nele é tão válido quanto o que o autor original quis dizer.",
        icon: "🧠",
        correctAnswer: "discordo",
        revealSlides: [22, 23],
    },
    {
        id: 3,
        question: "Se dois versículos parecem se contradizer, pelo menos um deles deve estar errado.",
        icon: "⚖️",
        correctAnswer: "discordo",
        revealSlides: [24, 25],
    },
    {
        id: 4,
        question: "Todas as regras do Antigo Testamento se aplicam diretamente a nós hoje — ou nenhuma se aplica.",
        icon: "📜",
        correctAnswer: "discordo",
        revealSlides: [29, 30, 31],
    },
    {
        id: 5,
        question: "Quando alguém cita um versículo para provar um ponto, isso encerra a discussão.",
        icon: "🔍",
        correctAnswer: "discordo",
        revealSlides: [35, 36],
    },
];

export const TOTAL_QUIZ_QUESTIONS = quizQuestions.length;

// ========================================
// PARTÍCULAS ÓPTICAS (Bokeh)
// ========================================
const bokehPositions = [
    { left: 5,  top: 12, duration: 12, delay: 0.2, size: 4 },
    { left: 14, top: 72, duration: 14, delay: 1.2, size: 3 },
    { left: 25, top: 22, duration: 10, delay: 2.0, size: 5 },
    { left: 36, top: 58, duration: 13, delay: 0.8, size: 3 },
    { left: 45, top: 18, duration: 15, delay: 3.2, size: 4 },
    { left: 56, top: 78, duration: 11, delay: 1.5, size: 3 },
    { left: 64, top: 38, duration: 14, delay: 3.5, size: 5 },
    { left: 73, top: 62, duration: 12, delay: 0.6, size: 3 },
    { left: 82, top: 15, duration: 13, delay: 2.5, size: 4 },
    { left: 91, top: 45, duration: 11, delay: 4.0, size: 3 },
    { left: 18, top: 88, duration: 14, delay: 1.8, size: 4 },
    { left: 52, top: 42, duration: 12, delay: 3.0, size: 3 },
];

export function OpticalParticles({ stratumColor = colors.lensBlue }) {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {bokehPositions.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        background: `radial-gradient(circle, ${stratumColor}50, ${stratumColor}10)`,
                        boxShadow: `0 0 ${p.size * 2}px ${stratumColor}15`,
                    }}
                    animate={{
                        y: [0, -20, 10, -15, 0],
                        x: [0, Math.sin(i) * 10, 0],
                        opacity: [0.1, 0.35, 0.1, 0.25, 0.1],
                        scale: [0.8, 1.2, 0.8],
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
// PRISMATIC BACKGROUND (para Síntese)
// ========================================
export function PrismaticBackground() {
    const prismColors = [
        colors.prismRed, colors.prismOrange, colors.prismYellow,
        colors.prismGreen, colors.prismBlue, colors.prismIndigo, colors.prismViolet,
    ];

    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                {prismColors.map((color, i) => (
                    <motion.path
                        key={i}
                        d={`M0,${100 + i * 70} Q${200 + i * 30},${80 + i * 70} ${400 + i * 20},${110 + i * 70} T800,${95 + i * 70}`}
                        fill="none"
                        stroke={color}
                        strokeWidth="1"
                        animate={{ opacity: [0.03, 0.12, 0.03] }}
                        transition={{
                            duration: 6 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.8,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

// ========================================
// LAB WRAPPER (Container base)
// ========================================
export function LabWrapper({ children, stratum = 'naked-eye', className = '' }) {
    const stratumData = STRATA.find(s => s.id === stratum) || STRATA[0];
    const isFullClarity = stratum === 'full-clarity';

    return (
        <div
            className={`min-h-screen flex flex-col items-center justify-center relative overflow-hidden ${className}`}
            style={{ background: stratumData.gradient }}
        >
            <OpticalParticles stratumColor={stratumData.particleColor} />
            {isFullClarity && <PrismaticBackground />}
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
}

// ========================================
// LENS SEAL (Badge da lição)
// ========================================
export function LensSeal({ number = 12, size = 'md', delay = 0 }) {
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
                background: `linear-gradient(135deg, ${colors.labMid} 0%, ${colors.labDark} 100%)`,
                boxShadow: `0 0 20px ${colors.lensBlue}30, inset 0 0 15px ${colors.lensBlue}10`,
                border: `2px solid ${colors.lensBlue}50`,
            }}
        >
            <div className="text-center">
                <span className={`${s.icon} block`} style={{ color: colors.lensBlue, opacity: 0.7, lineHeight: 1 }}>🔬</span>
                <span className={`${s.text} font-bold block`} style={{ color: colors.textLight, fontFamily: "'Oswald', sans-serif", lineHeight: 1 }}>
                    {number}
                </span>
            </div>
        </motion.div>
    );
}

// ========================================
// FOCUS HEADER (Divisor de seção)
// ========================================
export function FocusHeader({ title, subtitle, magnification, icon, delay = 0 }) {
    return (
        <div className="text-center max-w-4xl mx-auto px-6">
            {/* Laser line */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay, duration: 0.6, ease: 'easeOut' }}
                className="h-0.5 max-w-2xl mx-auto mb-8"
                style={{
                    background: `linear-gradient(to right, transparent, ${colors.lensBlue}, transparent)`,
                }}
            />

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

            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delay + 0.4, type: 'spring', stiffness: 200 }}
                className="text-3xl md:text-5xl font-bold mb-3"
                style={{
                    color: colors.textLight,
                    fontFamily: "'Playfair Display', Georgia, serif",
                    textShadow: `0 2px 30px ${colors.lensBlue}15`,
                }}
            >
                {title}
            </motion.h2>

            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + 0.6 }}
                    className="text-lg italic"
                    style={{ color: colors.lensBlue }}
                >
                    {subtitle}
                </motion.p>
            )}

            {magnification && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: delay + 0.8 }}
                    className="mt-4 text-xs uppercase tracking-[0.3em] font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Magnificação: {magnification}
                </motion.div>
            )}
        </div>
    );
}

// ========================================
// LENS CARD (Card de princípio)
// ========================================
export function LensCard({ lensNumber, title, children, delay = 0, accentColor = colors.lensBlue }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6, type: 'spring', stiffness: 120 }}
            className="rounded-2xl overflow-hidden relative"
            style={{
                background: colors.bgSurface,
                border: `1px solid ${accentColor}25`,
                boxShadow: `0 8px 32px ${colors.bgDeep}80`,
            }}
        >
            {/* Header */}
            <div className="px-5 py-3 flex items-center gap-3" style={{ background: `${accentColor}10`, borderBottom: `1px solid ${accentColor}15` }}>
                <span
                    className="text-xs font-bold tracking-wider px-3 py-1 rounded-full"
                    style={{ background: `${accentColor}20`, color: accentColor, border: `1px solid ${accentColor}40` }}
                >
                    LENTE {lensNumber}
                </span>
                <h3 className="text-lg font-bold" style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {title}
                </h3>
            </div>

            <div className="p-5">
                {children}
            </div>
        </motion.div>
    );
}

// ========================================
// VERSE CARD (Versículo com interpretação)
// ========================================
export function VerseCard({ reference, text, readingType = 'focused', delay = 0 }) {
    const borderColors = {
        focused: colors.statusFocused,
        distorted: colors.statusDistorted,
        blurry: colors.statusBlurry,
    };
    const bc = borderColors[readingType] || borderColors.focused;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="rounded-xl p-4"
            style={{
                background: colors.bgDeep,
                borderLeft: `3px solid ${bc}`,
            }}
        >
            <p className="text-base italic leading-relaxed mb-2" style={{ color: colors.textLight }}>
                &ldquo;{text}&rdquo;
            </p>
            <p className="text-xs font-mono" style={{ color: colors.textMuted }}>
                — {reference}
            </p>
        </motion.div>
    );
}

// ========================================
// DANGER CARD (Card de perigo)
// ========================================
export function DangerCard({ number, title, description, children, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="rounded-2xl overflow-hidden"
            style={{
                background: colors.bgSurface,
                border: `1px solid ${colors.lensRed}20`,
                boxShadow: `0 8px 32px ${colors.bgDeep}80`,
            }}
        >
            {/* Header */}
            <div className="px-5 py-3 flex items-center gap-3" style={{ background: `${colors.lensRed}10`, borderBottom: `1px solid ${colors.lensRed}15` }}>
                <span
                    className="text-xs font-bold tracking-wider px-3 py-1 rounded-full"
                    style={{ background: `${colors.lensRed}20`, color: colors.lensRed, border: `1px solid ${colors.lensRed}40` }}
                >
                    ABERRAÇÃO {number}
                </span>
                <h3 className="text-lg font-bold" style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {title}
                </h3>
            </div>

            <div className="p-5">
                {description && (
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>{description}</p>
                )}
                {children}
            </div>
        </motion.div>
    );
}

// ========================================
// COMPARISON PANEL (Distorcido vs Focado)
// ========================================
export function ComparisonPanel({ leftTitle, leftContent, rightTitle, rightContent, delay = 0 }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay, duration: 0.5 }}
                className="rounded-xl p-4"
                style={{
                    background: `${colors.lensRed}08`,
                    border: `1px solid ${colors.lensRed}25`,
                }}
            >
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.lensRed }}>
                    {leftTitle || '⊘ DISTORCIDO'}
                </p>
                <div className="text-sm leading-relaxed" style={{ color: colors.textMedium }}>
                    {leftContent}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.2, duration: 0.5 }}
                className="rounded-xl p-4"
                style={{
                    background: `${colors.lensTeal}08`,
                    border: `1px solid ${colors.lensTeal}25`,
                }}
            >
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.lensTeal }}>
                    {rightTitle || '◎ FOCADO'}
                </p>
                <div className="text-sm leading-relaxed" style={{ color: colors.textMedium }}>
                    {rightContent}
                </div>
            </motion.div>
        </div>
    );
}

// ========================================
// THERAPY PARALLEL (No Atendimento vs No Texto)
// ========================================
export function TherapyParallel({ therapeutic, hermeneutic, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="rounded-xl overflow-hidden"
            style={{
                background: `${colors.lensPurple}08`,
                border: `1px solid ${colors.lensPurple}20`,
            }}
        >
            <div className="px-4 py-2" style={{ background: `${colors.lensPurple}10`, borderBottom: `1px solid ${colors.lensPurple}15` }}>
                <p className="text-xs font-bold tracking-wider" style={{ color: colors.lensPurple }}>
                    🔗 PARALELO TERAPÊUTICO
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-4" style={{ borderRight: `1px solid ${colors.lensPurple}10` }}>
                    <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.lensPurple }}>No Atendimento</p>
                    <p className="text-sm" style={{ color: colors.textMedium }}>{therapeutic}</p>
                </div>
                <div className="p-4">
                    <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.lensBlue }}>No Texto</p>
                    <p className="text-sm" style={{ color: colors.textMedium }}>{hermeneutic}</p>
                </div>
            </div>
        </motion.div>
    );
}

// ========================================
// COMPARISON TABLE
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
                border: `1px solid ${colors.lensBlue}15`,
            }}
        >
            <table className="w-full text-sm">
                <thead>
                    <tr style={{ background: `${colors.lensBlue}10`, borderBottom: `1px solid ${colors.lensBlue}20` }}>
                        {columns.map((col, i) => (
                            <th key={i} className="px-4 py-3 text-left font-bold tracking-wider text-xs uppercase" style={{ color: colors.lensBlue }}>
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
                            style={{ borderBottom: `1px solid ${colors.lensBlue}08` }}
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
// STAMP BADGE
// ========================================
export function StampBadge({ text, color = colors.lensBlue, delay = 0, rotate = -8 }) {
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
// MAGNIFICATION INDICATOR (Sidebar nav)
// ========================================
export function MagnificationIndicator({ currentSlide, totalSlides }) {
    const stratum = getStratum(currentSlide);
    const progress = currentSlide / Math.max(totalSlides - 1, 1);

    return (
        <div className="fixed left-0 top-0 bottom-12 w-12 z-40 hidden md:flex flex-col items-center py-8 transition-opacity duration-300 opacity-40 hover:opacity-80">
            {/* Linha vertical */}
            <div
                className="absolute left-1/2 top-8 bottom-8 w-0.5 -translate-x-1/2"
                style={{
                    background: `linear-gradient(180deg, ${colors.lensBlue}30, ${colors.lensTeal}40, ${colors.lensPurple}30)`,
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
                        title={`${s.label} · MAG ${s.mag}`}
                    />
                );
            })}

            {/* Indicador de posição atual */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 rounded-full"
                style={{
                    width: 14,
                    height: 14,
                    background: colors.lensBlue,
                    boxShadow: `0 0 12px ${colors.lensBlue}60`,
                    top: `${8 + progress * 84}%`,
                }}
                layout
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
        </div>
    );
}

// ========================================
// NOTAS DO INSTRUTOR POR SLIDE
// ========================================
export const slideNotes = {
    0: {
        title: "Capa — Laboratório Óptico",
        notes: [
            "'Hoje vamos aprender a LER. De verdade.'",
            "Tom: preciso, técnico, mas acessível",
            "💡 Guga tem computador emprestado — aproveitar o visual!"
        ]
    },
    1: {
        title: "Quiz — Perguntas 1-2",
        notes: [
            "5 perguntas — escala Concordo/Depende/Discordo",
            "💡 'Responda com o instinto. Sem pensar muito.'",
            "Perguntas calibram o que ela acha que sabe sobre leitura bíblica"
        ]
    },
    2: {
        title: "Quiz — Perguntas 3-5",
        notes: [
            "Continuar quiz",
            "💡 Anotar respostas para o fechamento"
        ]
    },
    3: {
        title: "Analogia WhatsApp",
        notes: [
            "MOMENTO CHAVE. Essa analogia é o gancho da aula inteira.",
            "'Imagine que alguém pega uma mensagem sua de 3 anos atrás, tira do contexto, ignora o tom, ignora pra quem você estava escrevendo...'",
            "💡 PAUSA. Deixar ela responder.",
            "Punchline: 'Fazem isso com a Bíblia todo dia.'"
        ]
    },
    4: {
        title: "Punchline — Hermenêutica",
        notes: [
            "'Hermenêutica é simplesmente a ciência de NÃO fazer isso.'",
            "💡 Desmistificar o termo. Não é coisa de teólogo — é proteção contra manipulação."
        ]
    },
    5: {
        title: "Transição — Calibração",
        notes: [
            "'Vamos calibrar os instrumentos.'",
            "💡 Tom investigativo"
        ]
    },
    6: {
        title: "Header: Calibração",
        notes: [
            "'O que é hermenêutica? De onde vem essa palavra?'",
            "💡 Começar com etimologia — a Guga gosta de origens"
        ]
    },
    7: {
        title: "Etimologia — hermēneuō",
        notes: [
            "Lucas 24:27 — Jesus no caminho de Emaús",
            "'A palavra hermenêutica vem do momento mais icônico de estudo bíblico da história.'",
            "💡 Jesus INTERPRETOU as Escrituras — não apenas leu"
        ]
    },
    8: {
        title: "Ciência e Arte",
        notes: [
            "PARALELO TERAPÊUTICO: 'No atendimento, você tem protocolos (ciência) e intuição clínica (arte).'",
            "💡 Guga vai se identificar imediatamente"
        ]
    },
    9: {
        title: "O Problema",
        notes: [
            "'Todo mundo acha que sabe ler a Bíblia. Assim como todo mundo acha que sabe ouvir.'",
            "💡 Paralelo com escuta terapêutica: ouvir ≠ ouvir bem"
        ]
    },
    10: {
        title: "Conexão Jurídica",
        notes: [
            "SLIDE PERSONALIZADO PARA GUGA",
            "'Você estudou hermenêutica jurídica. Interpretação gramatical, histórica, teleológica, sistemática.'",
            "'Hermenêutica bíblica usa as MESMAS categorias.'",
            "💡 Empoderar, não ensinar do zero"
        ]
    },
    11: {
        title: "Transição — 7 Lentes",
        notes: [
            "'7 lentes. Cada uma refina a imagem.'",
        ]
    },
    12: {
        title: "Lente 1 — Contexto",
        notes: [
            "'Contexto não é opcional. É oxigênio.'",
            "💡 Este é o princípio-mãe. Quase todo erro é erro de contexto."
        ]
    },
    14: {
        title: "Filipenses 4:13",
        notes: [
            "MOMENTO DE DESCONSTRUÇÃO",
            "'Posso todas as coisas...' — versículo de camiseta, tatuagem, bio do Instagram",
            "'Paulo está preso. Não na academia. Está falando de contentamento no sofrimento.'",
            "💡 O significado real é MAIS bonito que o mau uso"
        ]
    },
    16: {
        title: "Lente 2 — Exegese vs Eisegese",
        notes: [
            "PONTO CRUCIAL",
            "'Na terapia, isso se chama PROJEÇÃO.'",
            "💡 Guga vai reconhecer o conceito instantaneamente"
        ]
    },
    22: {
        title: "Lente 4 — Intenção Autoral",
        notes: [
            "'O significado é o que o AUTOR quis dizer, não o que o LEITOR sente.'",
            "💡 Jr 29:11 — o versículo mais mal interpretado depois de Fp 4:13"
        ]
    },
    29: {
        title: "Lente 7 — Sensibilidade de Aliança",
        notes: [
            "'Por que cristãos comem camarão?' — a pergunta mais frequente de céticos",
            "💡 Três categorias: moral, cerimonial, civil. A ferramenta de categorização."
        ]
    },
    35: {
        title: "Perigo 1 — Proof-texting",
        notes: [
            "PERIGO MAIS COMUM",
            "Mt 18:20: 'Onde dois ou três estiverem reunidos...' — NÃO é sobre culto.",
            "💡 É sobre disciplina eclesiástica. Contexto: vv. 15-19."
        ]
    },
    38: {
        title: "Perigo 3 — Espiritualização",
        notes: [
            "Bom Samaritano: Samaritano=Cristo, jumento=Espírito Santo...",
            "'Isso é criativo, mas não é o que Jesus quis dizer.'",
            "'Às vezes, uma estrada é só uma estrada.'"
        ]
    },
    48: {
        title: "A Grande Pergunta — Denominações",
        notes: [
            "PERGUNTA QUE A GUGA PROVAVELMENTE JÁ FEZ",
            "Resposta honesta em 4 pontos.",
            "1 Co 13:12 — 'vemos como por espelho' — a metáfora óptica está NA BÍBLIA"
        ]
    },
    52: {
        title: "Mt 7:1 — Setup",
        notes: [
            "EXERCÍCIO PRÁTICO FINAL",
            "'Não julgueis.' O versículo mais citado por quem nunca leu a Bíblia.",
            "'Guga, vamos passar por TODAS as lentes.'",
            "💡 Deixar ela participar ativamente"
        ]
    },
    56: {
        title: "Quiz Revisitado",
        notes: [
            "🔔 Voltar às respostas do quiz de abertura",
            "'Mudou alguma coisa?'",
            "💡 Não forçar mudança — apenas perguntar"
        ]
    },
    57: {
        title: "Encerramento",
        notes: [
            "'Você agora tem as ferramentas para verificar por si mesma.'",
            "Não dizer 'acredite' — dizer 'verifique'",
            "Transição: Lição 13 — Gêneros Literários",
            "💡 Oração pessoal. Agradecer pela jornada intelectual compartilhada."
        ]
    },
};
