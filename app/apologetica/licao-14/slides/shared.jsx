// Shared components and utilities for Lição 14 slides
// Tema: A Convergência — Cristo como centro hermenêutico das Escrituras
import { motion } from 'framer-motion';

// ========================================
// PALETA DE CORES — TEMA A CONVERGÊNCIA
// ========================================
export const colors = {
    // Cosmos (fundos profundos, campo estelar)
    bgVoid:         '#0B0E1F',
    bgDeepSpace:    '#141838',
    bgNebula:       '#1F1A3A',
    bgSurface:      '#1B1F38',
    bgPanel:        '#161A30',

    // Centro luminoso (Cristo como núcleo)
    haloGold:       '#E8B964',
    haloWhite:      '#FFE8B0',
    coreGlow:       '#FFD089',

    // Vetores (uma cor por categoria de apontamento cristológico)
    vectorAmber:    '#E8A545',  // Profecia direta
    vectorSea:      '#6BAA92',  // Tipologia
    vectorPurple:   '#9B82D9',  // Temas teológicos
    vectorBlue:     '#6B8FE0',  // Estrutura narrativa
    vectorRose:     '#D88CA4',  // Citações e ecos

    // Texto
    textStarlight:  '#F0EDD8',
    textNebula:     '#C4BCE6',
    textMedium:     '#B0AAC9',
    textMuted:      '#8889AB',
    textDim:        '#5C5E7A',

    // Citação / pergaminho
    inkSepia:       '#C9A876',
    parchment:      '#F5E9D3',

    // Status
    warnRed:        '#D64545',
    warnRose:       '#C8556B',
    goodGreen:      '#7AB77A',
};

// ========================================
// SISTEMA DE ESTRATOS — REGIÕES CÓSMICAS
// ========================================
export const STRATA = [
    {
        id: 'aproximacao',
        label: 'Aproximação',
        mag: 'Vestíbulo cósmico',
        range: [0, 6],
        gradient: `radial-gradient(ellipse at 50% 80%, #1A1A40 0%, #0F1230 45%, #0B0E1F 100%)`,
        particleColor: colors.textNebula,
    },
    {
        id: 'nucleo',
        label: 'O Núcleo',
        mag: 'Jesus se lê assim',
        range: [7, 16],
        gradient: `radial-gradient(circle at 50% 50%, #2C2240 0%, #1A1838 50%, #0B0E1F 100%)`,
        particleColor: colors.haloGold,
    },
    {
        id: 'orbitas',
        label: 'Órbitas',
        mag: 'O NT lê o AT',
        range: [17, 24],
        gradient: `radial-gradient(ellipse at 30% 50%, #1A2050 0%, #131840 50%, #0B0E1F 100%)`,
        particleColor: colors.vectorBlue,
    },
    {
        id: 'vetores',
        label: 'Vetores',
        mag: '5 categorias',
        range: [25, 37],
        gradient: `linear-gradient(180deg, #0B0E1F 0%, #181838 50%, #0E1028 100%)`,
        particleColor: colors.haloGold,
    },
    {
        id: 'ruido',
        label: 'Ruído',
        mag: 'Objeções honestas',
        range: [38, 44],
        gradient: `linear-gradient(180deg, #1F1428 0%, #2A1424 50%, #1A0F1F 100%)`,
        particleColor: colors.warnRose,
    },
    {
        id: 'metodo',
        label: 'Método',
        mag: 'Sola Scriptura',
        range: [45, 49],
        gradient: `linear-gradient(180deg, #14172A 0%, #1A1F38 50%, #14172A 100%)`,
        particleColor: colors.textNebula,
    },
    {
        id: 'porta-joao',
        label: 'Porta de João',
        mag: 'Entrada do estudo',
        range: [50, 53],
        gradient: `radial-gradient(ellipse at 50% 60%, #2A2238 0%, #1F1A35 50%, #100E20 100%)`,
        particleColor: colors.coreGlow,
    },
    {
        id: 'pastoral',
        label: 'Caráter de Deus',
        mag: 'Pastoral para Guga',
        range: [54, 57],
        gradient: `radial-gradient(ellipse at 50% 50%, #38241F 0%, #221830 50%, #0F0E1F 100%)`,
        particleColor: colors.coreGlow,
    },
];

export function getStratum(slideIndex) {
    return STRATA.find(s => slideIndex >= s.range[0] && slideIndex <= s.range[1]) || STRATA[0];
}

// ========================================
// CAMPO ESTELAR (estrelas distantes)
// ========================================
const starPositions = [
    { left: 6,  top: 14, duration: 4.5, delay: 0.3, size: 2 },
    { left: 15, top: 68, duration: 5.2, delay: 1.4, size: 1 },
    { left: 24, top: 24, duration: 3.8, delay: 2.1, size: 3 },
    { left: 37, top: 56, duration: 4.7, delay: 0.9, size: 1 },
    { left: 46, top: 20, duration: 5.4, delay: 3.1, size: 2 },
    { left: 55, top: 76, duration: 4.1, delay: 1.7, size: 1 },
    { left: 63, top: 40, duration: 5.0, delay: 3.4, size: 3 },
    { left: 72, top: 60, duration: 4.6, delay: 0.5, size: 1 },
    { left: 81, top: 16, duration: 4.9, delay: 2.6, size: 2 },
    { left: 90, top: 48, duration: 4.3, delay: 4.0, size: 1 },
    { left: 19, top: 86, duration: 5.1, delay: 1.9, size: 2 },
    { left: 53, top: 44, duration: 4.4, delay: 2.9, size: 1 },
    { left: 8,  top: 38, duration: 4.8, delay: 3.7, size: 1 },
    { left: 28, top: 82, duration: 5.3, delay: 0.6, size: 2 },
    { left: 68, top: 12, duration: 4.2, delay: 2.4, size: 1 },
    { left: 88, top: 78, duration: 5.5, delay: 1.1, size: 2 },
];

export function StarField({ stratumColor = colors.haloGold }) {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {starPositions.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        background: stratumColor,
                        boxShadow: `0 0 ${p.size * 4}px ${stratumColor}80, 0 0 ${p.size * 8}px ${stratumColor}30`,
                    }}
                    animate={{
                        opacity: [0.3, 0.95, 0.3],
                        scale: [0.85, 1.15, 0.85],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
}

// ========================================
// CONVERGENCE GLOW (halo central pulsante)
// ========================================
export function ConvergenceGlow({ intensity = 1 }) {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <motion.div
                className="absolute"
                style={{
                    left: '50%',
                    top: '50%',
                    width: '70%',
                    height: '70%',
                    transform: 'translate(-50%, -50%)',
                    background: `radial-gradient(circle, ${colors.coreGlow}${Math.round(intensity * 25).toString(16).padStart(2, '0')} 0%, ${colors.haloGold}${Math.round(intensity * 12).toString(16).padStart(2, '0')} 35%, transparent 70%)`,
                }}
                animate={{
                    opacity: [0.55, 0.9, 0.55],
                    scale: [0.92, 1.08, 0.92],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
        </div>
    );
}

// ========================================
// CONVERGENCE WRAPPER (Container base)
// ========================================
export function ConvergenceWrapper({ children, stratum = 'aproximacao', className = '', withGlow = false, glowIntensity = 1 }) {
    const stratumData = STRATA.find(s => s.id === stratum) || STRATA[0];

    return (
        <div
            className={`min-h-screen flex flex-col items-center justify-center relative overflow-hidden ${className}`}
            style={{ background: stratumData.gradient }}
        >
            <StarField stratumColor={stratumData.particleColor} />
            {withGlow && <ConvergenceGlow intensity={glowIntensity} />}
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
}

// ========================================
// BOOK SEAL (Selo da lição)
// ========================================
export function BookSeal({ number = 14, size = 'md', delay = 0 }) {
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
                background: `radial-gradient(circle at 30% 30%, ${colors.bgNebula} 0%, ${colors.bgVoid} 100%)`,
                boxShadow: `0 0 24px ${colors.haloGold}50, inset 0 0 18px ${colors.haloGold}15`,
                border: `2px solid ${colors.haloGold}60`,
            }}
        >
            <div className="text-center">
                <span className={`${s.icon} block`} style={{ color: colors.haloGold, opacity: 0.85, lineHeight: 1 }}>✦</span>
                <span className={`${s.text} font-bold block`} style={{ color: colors.textStarlight, fontFamily: "'Oswald', sans-serif", lineHeight: 1 }}>
                    {number}
                </span>
            </div>
        </motion.div>
    );
}

// ========================================
// FOCUS HEADER (Divisor de seção / entrada de estrato)
// ========================================
export function FocusHeader({ title, subtitle, magnification, icon, delay = 0 }) {
    return (
        <div className="text-center max-w-4xl mx-auto px-6">
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay, duration: 0.6, ease: 'easeOut' }}
                className="h-0.5 max-w-2xl mx-auto mb-8"
                style={{
                    background: `linear-gradient(to right, transparent, ${colors.haloGold}, transparent)`,
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
                    color: colors.textStarlight,
                    fontFamily: "'Playfair Display', Georgia, serif",
                    textShadow: `0 2px 30px ${colors.haloGold}25`,
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
                    style={{ color: colors.haloGold }}
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
                    {magnification}
                </motion.div>
            )}
        </div>
    );
}

// ========================================
// EVIDENCE CARD (Cartão de passagem-âncora)
// ========================================
export function EvidenceCard({ evidenceNumber, title, children, delay = 0, accentColor = colors.haloGold, icon }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6, type: 'spring', stiffness: 120 }}
            className="rounded-2xl overflow-hidden relative"
            style={{
                background: colors.bgSurface,
                border: `1px solid ${accentColor}30`,
                boxShadow: `0 8px 32px ${colors.bgVoid}80`,
            }}
        >
            <div
                className="px-5 py-3 flex items-center gap-3"
                style={{ background: `${accentColor}12`, borderBottom: `1px solid ${accentColor}20` }}
            >
                <span
                    className="text-xs font-bold tracking-wider px-3 py-1 rounded-full"
                    style={{ background: `${accentColor}20`, color: accentColor, border: `1px solid ${accentColor}40` }}
                >
                    EVIDÊNCIA {evidenceNumber}
                </span>
                {icon && <span className="text-xl">{icon}</span>}
                <h3 className="text-lg font-bold" style={{ color: colors.textStarlight, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {title}
                </h3>
            </div>

            <div className="p-5">{children}</div>
        </motion.div>
    );
}

// ========================================
// OBJECTION CARD (Objeção honesta + qualificações)
// ========================================
export function ObjectionCard({ objection, qualifications, response, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="rounded-2xl overflow-hidden"
            style={{
                background: colors.bgSurface,
                border: `1px solid ${colors.warnRose}30`,
                boxShadow: `0 8px 32px ${colors.bgVoid}80`,
            }}
        >
            <div
                className="px-5 py-3 flex items-center gap-3"
                style={{ background: `${colors.warnRose}10`, borderBottom: `1px solid ${colors.warnRose}20` }}
            >
                <span
                    className="text-xs font-bold tracking-wider px-3 py-1 rounded-full"
                    style={{ background: `${colors.warnRose}20`, color: colors.warnRose, border: `1px solid ${colors.warnRose}40` }}
                >
                    ⚑ OBJEÇÃO HONESTA
                </span>
            </div>
            <div className="p-5">
                {objection && (
                    <p
                        className="text-base italic mb-4 leading-relaxed"
                        style={{ color: colors.textStarlight, fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        &ldquo;{objection}&rdquo;
                    </p>
                )}
                {qualifications && qualifications.length > 0 && (
                    <div className="space-y-2 mb-4">
                        {qualifications.map((q, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-3 text-sm"
                                style={{ color: colors.textMedium }}
                            >
                                <span
                                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                                    style={{
                                        background: `${colors.haloGold}20`,
                                        color: colors.haloGold,
                                        border: `1px solid ${colors.haloGold}40`,
                                    }}
                                >
                                    {String.fromCharCode(97 + i)}
                                </span>
                                <span className="leading-relaxed">{q}</span>
                            </div>
                        ))}
                    </div>
                )}
                {response && (
                    <div
                        className="rounded-lg p-3 text-sm"
                        style={{
                            background: `${colors.goodGreen}10`,
                            borderLeft: `3px solid ${colors.goodGreen}`,
                            color: colors.textStarlight,
                        }}
                    >
                        {response}
                    </div>
                )}
            </div>
        </motion.div>
    );
}

// ========================================
// VERSE CARD (Versículo em pergaminho)
// ========================================
export function VerseCard({ reference, text, tone = 'focused', delay = 0 }) {
    const borderColors = {
        focused: colors.haloGold,
        warm:    colors.vectorAmber,
        deep:    colors.vectorPurple,
        danger:  colors.warnRed,
        sea:     colors.vectorSea,
        rose:    colors.vectorRose,
        blue:    colors.vectorBlue,
    };
    const bc = borderColors[tone] || borderColors.focused;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="rounded-xl p-4"
            style={{
                background: colors.bgVoid,
                borderLeft: `3px solid ${bc}`,
            }}
        >
            <p
                className="text-base italic leading-relaxed mb-2"
                style={{ color: colors.textStarlight, fontFamily: "'Playfair Display', Georgia, serif" }}
            >
                &ldquo;{text}&rdquo;
            </p>
            <p className="text-xs font-mono" style={{ color: colors.textMuted }}>
                — {reference}
            </p>
        </motion.div>
    );
}

// ========================================
// COMPARISON PANEL (Errado vs Correto / Antes vs Depois)
// ========================================
export function ComparisonPanel({ leftTitle, leftContent, rightTitle, rightContent, leftColor, rightColor, delay = 0 }) {
    const lc = leftColor || colors.warnRed;
    const rc = rightColor || colors.goodGreen;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay, duration: 0.5 }}
                className="rounded-xl p-4"
                style={{
                    background: `${lc}08`,
                    border: `1px solid ${lc}25`,
                }}
            >
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: lc }}>
                    {leftTitle || '⊘ EXTREMO A EVITAR'}
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
                    background: `${rc}08`,
                    border: `1px solid ${rc}25`,
                }}
            >
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: rc }}>
                    {rightTitle || '◎ POSTURA EQUILIBRADA'}
                </p>
                <div className="text-sm leading-relaxed" style={{ color: colors.textMedium }}>
                    {rightContent}
                </div>
            </motion.div>
        </div>
    );
}

// ========================================
// THERAPY PARALLEL (Na sessão vs No texto)
// ========================================
export function TherapyParallel({ therapeutic, hermeneutic, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="rounded-xl overflow-hidden"
            style={{
                background: `${colors.vectorPurple}08`,
                border: `1px solid ${colors.vectorPurple}25`,
            }}
        >
            <div className="px-4 py-2" style={{ background: `${colors.vectorPurple}15`, borderBottom: `1px solid ${colors.vectorPurple}18` }}>
                <p className="text-xs font-bold tracking-wider" style={{ color: colors.vectorPurple }}>
                    🔗 PARALELO TERAPÊUTICO
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-4" style={{ borderRight: `1px solid ${colors.vectorPurple}15` }}>
                    <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.vectorPurple }}>
                        Na sessão
                    </p>
                    <p className="text-sm" style={{ color: colors.textMedium }}>{therapeutic}</p>
                </div>
                <div className="p-4">
                    <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.haloGold }}>
                        No texto
                    </p>
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
                border: `1px solid ${colors.haloGold}20`,
            }}
        >
            <table className="w-full text-sm">
                <thead>
                    <tr style={{ background: `${colors.haloGold}10`, borderBottom: `1px solid ${colors.haloGold}25` }}>
                        {columns.map((col, i) => (
                            <th
                                key={i}
                                className="px-4 py-3 text-left font-bold tracking-wider text-xs uppercase"
                                style={{ color: colors.haloGold }}
                            >
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
                            style={{ borderBottom: `1px solid ${colors.haloGold}10` }}
                        >
                            {row.map((cell, j) => (
                                <td
                                    key={j}
                                    className="px-4 py-3 align-top"
                                    style={{ color: j === 0 ? colors.textStarlight : colors.textMedium }}
                                >
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
export function StampBadge({ text, color = colors.haloGold, delay = 0, rotate = -8 }) {
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
// CATEGORY CARD (Cartão de uma das 5 categorias de apontamento)
// ========================================
export function CategoryCard({ letter, title, description, criteria, examples, accentColor = colors.haloGold, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6, type: 'spring', stiffness: 120 }}
            className="rounded-2xl overflow-hidden"
            style={{
                background: colors.bgSurface,
                border: `1px solid ${accentColor}35`,
                boxShadow: `0 8px 32px ${colors.bgVoid}80, 0 0 24px ${accentColor}10`,
            }}
        >
            <div
                className="px-5 py-3 flex items-center gap-3"
                style={{ background: `${accentColor}15`, borderBottom: `1px solid ${accentColor}25` }}
            >
                <span
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-base"
                    style={{
                        background: `${accentColor}25`,
                        color: accentColor,
                        border: `1.5px solid ${accentColor}60`,
                        fontFamily: "'Oswald', sans-serif",
                    }}
                >
                    {letter}
                </span>
                <h3 className="text-lg md:text-xl font-bold" style={{ color: colors.textStarlight, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {title}
                </h3>
            </div>
            <div className="p-5 space-y-3">
                {description && (
                    <p className="text-sm leading-relaxed" style={{ color: colors.textMedium }}>
                        {description}
                    </p>
                )}
                {criteria && criteria.length > 0 && (
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>
                            Critérios
                        </p>
                        <ul className="space-y-1 text-sm" style={{ color: colors.textMedium }}>
                            {criteria.map((c, i) => (
                                <li key={i} className="flex gap-2">
                                    <span style={{ color: accentColor }}>◇</span>
                                    <span>{c}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {examples && examples.length > 0 && (
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>
                            Exemplos
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {examples.map((ex, i) => (
                                <span
                                    key={i}
                                    className="text-xs px-2 py-1 rounded-md"
                                    style={{
                                        background: `${accentColor}15`,
                                        color: colors.textStarlight,
                                        border: `1px solid ${accentColor}30`,
                                    }}
                                >
                                    {ex}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

// ========================================
// CONVERGENCE MAP (Diagrama: AT convergindo em Cristo)
// ========================================
export function ConvergenceMap({ delay = 0 }) {
    const sections = [
        { range: 'Pentateuco',     label: 'Lei',          color: colors.vectorAmber,  width: 18 },
        { range: 'Profetas',       label: 'Promessa',     color: colors.vectorBlue,   width: 22 },
        { range: 'Escritos',       label: 'Sapienciais',  color: colors.vectorSea,    width: 18 },
        { range: 'Pós-exílicos',   label: 'Esperança',    color: colors.vectorPurple, width: 18 },
        { range: 'Cristo',         label: 'Centro',       color: colors.haloGold,     width: 24 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay }}
            className="w-full"
        >
            {/* Barra de convergência */}
            <div className="flex w-full rounded-lg overflow-hidden relative" style={{ height: 64, boxShadow: `0 4px 20px ${colors.bgVoid}80` }}>
                {sections.map((s, i) => {
                    const isCenter = i === sections.length - 1;
                    return (
                        <motion.div
                            key={i}
                            initial={{ scaleX: 0, transformOrigin: 'left' }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: delay + 0.2 + i * 0.18, duration: 0.55, ease: 'easeOut' }}
                            className="flex flex-col items-center justify-center text-center px-2 relative"
                            style={{
                                width: `${s.width}%`,
                                background: isCenter
                                    ? `radial-gradient(circle at 50% 50%, ${s.color}55, ${s.color}25)`
                                    : `${s.color}25`,
                                borderRight: i < sections.length - 1 ? `1px solid ${colors.bgVoid}` : 'none',
                                boxShadow: isCenter ? `inset 0 0 24px ${s.color}50` : 'none',
                            }}
                        >
                            <span className="text-[10px] font-mono" style={{ color: s.color, opacity: 0.95 }}>
                                {s.range}
                            </span>
                            {isCenter && (
                                <span className="text-lg" style={{ color: colors.coreGlow }}>✦</span>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* Legendas abaixo */}
            <div className="flex w-full mt-2">
                {sections.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: delay + 0.9 + i * 0.1 }}
                        className="flex flex-col items-center justify-start px-1 text-center"
                        style={{ width: `${s.width}%` }}
                    >
                        <span className="text-[11px] font-bold block" style={{ color: s.color }}>
                            {s.label}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Setas convergentes */}
            <div className="flex w-full mt-3 items-center justify-center">
                <p className="text-xs italic font-mono" style={{ color: colors.textMuted }}>
                    → → → todas as linhas convergem → → →
                </p>
            </div>
        </motion.div>
    );
}

// ========================================
// ORBIT INDICATOR (Navegação lateral por estrato)
// ========================================
export function OrbitIndicator({ currentSlide, totalSlides }) {
    const stratum = getStratum(currentSlide);
    const progress = currentSlide / Math.max(totalSlides - 1, 1);

    return (
        <div className="fixed left-0 top-0 bottom-12 w-12 z-40 hidden md:flex flex-col items-center py-8 transition-opacity duration-300 opacity-40 hover:opacity-80">
            <div
                className="absolute left-1/2 top-8 bottom-8 w-0.5 -translate-x-1/2"
                style={{
                    background: `linear-gradient(180deg, ${colors.textNebula}40, ${colors.haloGold}50, ${colors.coreGlow}40)`,
                }}
            />

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
                            boxShadow: isActive ? `0 0 10px ${s.particleColor}80` : 'none',
                        }}
                        title={`${s.label} · ${s.mag}`}
                    />
                );
            })}

            <motion.div
                className="absolute left-1/2 -translate-x-1/2 rounded-full"
                style={{
                    width: 14,
                    height: 14,
                    background: colors.haloGold,
                    boxShadow: `0 0 14px ${colors.haloGold}80`,
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
        title: 'Capa — Cristo como Centro',
        notes: [
            "'Cristo é o centro hermenêutico de toda a Escritura' — tese-mãe da aula.",
            'Tom: aberto, exegético, sem ufanismo denominacional.',
            '💡 Esta aula é a chave que une tudo o que veio das Lições 1–13.',
        ],
    },
    5: {
        title: 'Pergunta-pivô para Guga',
        notes: [
            "'A Bíblia tem uma chave de leitura interna que ela mesma propõe?'",
            '💡 Esta é a postura de toda a aula. Sem "vamos te apresentar nosso sistema."',
            'Deixe respirar. A pergunta faz metade do trabalho.',
        ],
    },
    7: {
        title: 'Entrada no Núcleo — Jesus se lê assim',
        notes: [
            'Mudança de estrato. Halo dourado fica mais intenso.',
            '💡 Aqui começa a evidência interna mais forte: Jesus mesmo se interpreta cristocentricamente.',
        ],
    },
    9: {
        title: 'Lc 24:25-27 (Emaús)',
        notes: [
            'Três coisas a notar: "todas as Escrituras", "a seu respeito", "começando por Moisés".',
            '💡 Não é leitura de passagens isoladas — é a totalidade.',
        ],
    },
    15: {
        title: 'Implicação central',
        notes: [
            "'Se Jesus se entende dessa forma, a leitura cristocêntrica não é projeção retroativa — é discipulado.'",
            '💡 Deixar respirar. Este é um dos momentos-chave da aula.',
        ],
    },
    16: {
        title: 'Pausa-pergunta para Guga',
        notes: [
            "'Se Jesus se lê assim, o que isso muda na sua leitura?'",
            '💡 A resposta dela é preciosa. Ouvir. Não corrigir.',
        ],
    },
    20: {
        title: '1 Co 15:3-4 — fórmula pré-paulina',
        notes: [
            "Datação: ~5 anos pós-crucificação. A tese cristocêntrica é o ponto de partida, não desenvolvimento tardio.",
            '💡 Argumento histórico forte contra "projeção retroativa".',
        ],
    },
    25: {
        title: 'Datação como argumento',
        notes: [
            'Os textos NT mais antigos já têm a tese.',
            '💡 Fechamento do estrato Órbitas. Antes das categorias, ela tem que ver: a tese é antiga, não construção tardia.',
        ],
    },
    26: {
        title: 'Entrada nos 5 Vetores',
        notes: [
            'Slow down. Aqui começa o trabalho de rigor.',
            "'A leitura cristocêntrica não é homogênea. Identificar categorias dá rigor.'",
            '💡 Distinção importante: profecia direta ≠ tipologia ≠ tema ≠ estrutura ≠ citação.',
        ],
    },
    29: {
        title: 'Tipologia — o que é e o que NÃO é',
        notes: [
            'Honestidade: alegorese livre é abuso. Tipologia legítima tem critérios.',
            '💡 Filo de Alexandria como contra-exemplo (alegorese filônica).',
        ],
    },
    37: {
        title: 'Mapa de convergência',
        notes: [
            'Mostrar visualmente as 5 categorias como vetores apontando ao centro Cristo.',
            '💡 O diagrama faz metade do trabalho. Deixar ela ver antes de explicar.',
        ],
    },
    40: {
        title: 'Objeção 1 — "É projeção retroativa"',
        notes: [
            'A objeção mais importante. Antecipar — Guga vai trazer.',
            'Honestidade primeiro: sim, parcialmente. Depois 4 qualificações.',
            '💡 Não negar — qualificar.',
        ],
    },
    43: {
        title: 'Objeção 4 — "Diminui o AT?"',
        notes: [
            'Resposta: AT mantém valor próprio. Salmos, Provérbios, Eclesiastes, profetas continuam vivos.',
            '💡 As duas leituras coexistem — sentido próprio + apontamento cristológico.',
        ],
    },
    45: {
        title: 'Honestidade como método',
        notes: [
            "'Guga tem direito de avaliar honestamente.'",
            '💡 Esta é a postura que diferencia da apologética defensiva.',
        ],
    },
    46: {
        title: 'Sola Scriptura — sem bandeira denominacional',
        notes: [
            'Princípio metodológico, não bandeira.',
            "'Ela já vinha operando dentro de sola Scriptura sem o nome.'",
            '💡 Não vender. Nomear o que já está acontecendo.',
        ],
    },
    50: {
        title: 'Sola Scriptura + Cristo como centro',
        notes: [
            'Evita bibliolatria fundamentalista E subjetivismo "cristocêntrico" sem texto.',
            'Jo 5:39 é a vacina contra bibliolatria.',
            '💡 Os dois princípios juntos.',
        ],
    },
    54: {
        title: 'Ponte explícita para João',
        notes: [
            "'Ela vai chegar em João com a chave de leitura na mão.'",
            'Tipologia ativa: maná, serpente, pastor, cordeiro.',
            '💡 Eco de Gn 1 no prólogo de João — vai ser tema da Lição 19.',
        ],
    },
    55: {
        title: 'Risco do cristocentrismo mal aplicado',
        notes: [
            'Cristocentrismo, mal feito, vira reducionismo.',
            "'Para alguém que rejeita religião institucional, isso pode soar como mais uma fórmula.'",
            '💡 Evitar isso. A próxima slide é o que cristocentrismo bem feito significa.',
        ],
    },
    56: {
        title: 'PICO PASTORAL — Jo 14:9',
        notes: [
            "'Quem me viu a mim, viu o Pai.' — versículo central.",
            'Não há dois Deuses. Não há Pai severo escondido atrás de Filho misericordioso.',
            '💡 PAUSAR. Respirar. Este é o pico da aula.',
        ],
    },
    57: {
        title: 'Que Jesus é esse?',
        notes: [
            'Leitura lenta dos 6 retratos. Deixar cada um pousar.',
            'Come com pecadores. Toca leprosos. Chora com Maria. Cura sem ser pedido. Para por causa da mulher de 12 anos. Busca o perdido.',
            '💡 Para a Guga, este é o ponto de virada potencial.',
        ],
    },
    57.5: {
        title: 'Conexão com Alice / março — só se vier dela',
        notes: [
            "'Alice sobreviveu. Você sobreviveu. O que você faz com isso?'",
            'NÃO forçar. Reconhecimento, não argumento.',
            '💡 Se vier dela, ressoa. Se vier de você, soa como resposta forçada à dor dela.',
        ],
    },
    58: {
        title: 'Fechamento + ponte para Lição 15',
        notes: [
            "'O caráter de Deus se conhece em Cristo — não em projeções anteriores.'",
            "'Se você quer saber quem Deus é, tem um lugar para olhar.'",
            '💡 Slide deliberadamente UNIVERSAL — não conectar por ela. Se ela quiser conectar à imagem que carrega de Pai/Alice/março, a conexão vem dela.',
            '💡 Conectar os pontos no slide soa como resposta forçada à dor dela. Deixar o espaço aberto.',
            "'Lições 1–13: como ler. Lição 14: o que estamos lendo. Lição 15: como tudo se conecta.'",
        ],
    },
};
