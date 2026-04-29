// Shared components and utilities for Lição 13 slides
// Tema: Biblioteca Viva — Os Gêneros Literários da Bíblia
import { motion } from 'framer-motion';

// ========================================
// PALETA DE CORES — TEMA BIBLIOTECA VIVA
// ========================================
export const colors = {
    // Biblioteca (fundos escuros, ambiente noturno de biblioteca antiga)
    bgLibrary:      '#1A1410',
    bgWood:         '#221912',
    bgSurface:      '#2C2319',
    bgDeep:         '#120E0A',

    // Luz e tinta
    inkGold:        '#D4A574',
    inkDeep:        '#8B6B3A',
    parchment:      '#F5E9D3',
    parchmentInk:   '#2C2013',
    candleGlow:     '#E8C591',

    // Gêneros (acentos cromáticos por estante)
    genreAmber:     '#E8A545',
    genreSea:       '#6BAA92',
    genreWine:      '#C84A3F',
    genrePurple:    '#8B7AB8',
    genreBlue:      '#6B8FAA',
    genreOlive:     '#A3A362',
    genreRose:      '#D88CA4',

    // Texto
    textLight:      '#F0E6D2',
    textMedium:     '#C9B896',
    textMuted:      '#8B7D68',
    textDim:        '#6B6052',

    // Status
    warnRed:        '#D64545',
    goodGreen:      '#7AB77A',
};

// ========================================
// SISTEMA DE ESTRATOS — ALAS DA BIBLIOTECA
// ========================================
export const STRATA = [
    {
        id: 'vestibulo',
        label: 'Vestíbulo',
        mag: 'Entrada',
        range: [0, 11],
        gradient: `linear-gradient(180deg, #1A1410 0%, #221912 50%, #1A1410 100%)`,
        particleColor: colors.candleGlow,
    },
    {
        id: 'acervo',
        label: 'Acervo Principal',
        mag: '9 estantes',
        range: [12, 39],
        gradient: `linear-gradient(180deg, #1A1410 0%, #1F1812 50%, #231A12 100%)`,
        particleColor: colors.inkGold,
    },
    {
        id: 'aberracoes',
        label: 'Sala de Aberrações',
        mag: '3 erros',
        range: [40, 43],
        gradient: `linear-gradient(180deg, #231A12 0%, #2A1812 50%, #2A1410 100%)`,
        particleColor: colors.genreWine,
    },
    {
        id: 'mesa-jo',
        label: 'Mesa Central — Jó',
        mag: 'Laboratório',
        range: [44, 48],
        gradient: `linear-gradient(180deg, #2A1410 0%, #1F1624 50%, #1A1420 100%)`,
        particleColor: colors.genrePurple,
    },
    {
        id: 'bancada',
        label: 'Bancada de Exercícios',
        mag: '3 textos',
        range: [49, 52],
        gradient: `linear-gradient(180deg, #1A1420 0%, #1A1A1F 50%, #18181C 100%)`,
        particleColor: colors.genreSea,
    },
    {
        id: 'saida',
        label: 'Saída',
        mag: 'Pastoral',
        range: [53, 57],
        gradient: `linear-gradient(180deg, #18181C 0%, #221810 50%, #2C1F12 100%)`,
        particleColor: colors.candleGlow,
    },
];

export function getStratum(slideIndex) {
    return STRATA.find(s => slideIndex >= s.range[0] && slideIndex <= s.range[1]) || STRATA[0];
}

// ========================================
// PARTÍCULAS DE PÓ (motas na luz de vela)
// ========================================
const dustPositions = [
    { left: 6,  top: 14, duration: 16, delay: 0.3, size: 3 },
    { left: 15, top: 68, duration: 18, delay: 1.4, size: 2 },
    { left: 24, top: 24, duration: 14, delay: 2.1, size: 4 },
    { left: 37, top: 56, duration: 17, delay: 0.9, size: 2 },
    { left: 46, top: 20, duration: 19, delay: 3.1, size: 3 },
    { left: 55, top: 76, duration: 15, delay: 1.7, size: 2 },
    { left: 63, top: 40, duration: 18, delay: 3.4, size: 4 },
    { left: 72, top: 60, duration: 16, delay: 0.5, size: 2 },
    { left: 81, top: 16, duration: 17, delay: 2.6, size: 3 },
    { left: 90, top: 48, duration: 15, delay: 4.0, size: 2 },
    { left: 19, top: 86, duration: 18, delay: 1.9, size: 3 },
    { left: 53, top: 44, duration: 16, delay: 2.9, size: 2 },
];

export function DustParticles({ stratumColor = colors.inkGold }) {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {dustPositions.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        background: `radial-gradient(circle, ${stratumColor}60, ${stratumColor}10)`,
                        boxShadow: `0 0 ${p.size * 3}px ${stratumColor}20`,
                    }}
                    animate={{
                        y: [0, -24, 12, -18, 0],
                        x: [0, Math.sin(i) * 12, 0],
                        opacity: [0.1, 0.4, 0.15, 0.3, 0.1],
                        scale: [0.8, 1.15, 0.8],
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
// CANDLE GLOW (para slides de pastoral/síntese)
// ========================================
export function CandleGlow() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <motion.div
                className="absolute"
                style={{
                    left: '50%',
                    top: '50%',
                    width: '60%',
                    height: '60%',
                    transform: 'translate(-50%, -50%)',
                    background: `radial-gradient(circle, ${colors.candleGlow}20 0%, ${colors.candleGlow}08 40%, transparent 70%)`,
                }}
                animate={{ opacity: [0.5, 0.8, 0.5], scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
        </div>
    );
}

// ========================================
// LIBRARY WRAPPER (Container base)
// ========================================
export function LibraryWrapper({ children, stratum = 'vestibulo', className = '', withCandle = false }) {
    const stratumData = STRATA.find(s => s.id === stratum) || STRATA[0];

    return (
        <div
            className={`min-h-screen flex flex-col items-center justify-center relative overflow-hidden ${className}`}
            style={{ background: stratumData.gradient }}
        >
            <DustParticles stratumColor={stratumData.particleColor} />
            {withCandle && <CandleGlow />}
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
}

// ========================================
// BOOK SEAL (Selo da lição)
// ========================================
export function BookSeal({ number = 13, size = 'md', delay = 0 }) {
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
                background: `linear-gradient(135deg, ${colors.bgSurface} 0%, ${colors.bgWood} 100%)`,
                boxShadow: `0 0 20px ${colors.inkGold}30, inset 0 0 15px ${colors.inkGold}10`,
                border: `2px solid ${colors.inkGold}50`,
            }}
        >
            <div className="text-center">
                <span className={`${s.icon} block`} style={{ color: colors.inkGold, opacity: 0.75, lineHeight: 1 }}>📖</span>
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
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay, duration: 0.6, ease: 'easeOut' }}
                className="h-0.5 max-w-2xl mx-auto mb-8"
                style={{
                    background: `linear-gradient(to right, transparent, ${colors.inkGold}, transparent)`,
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
                    textShadow: `0 2px 30px ${colors.inkGold}15`,
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
                    style={{ color: colors.inkGold }}
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
// GENRE CARD (Card de gênero — ficha de catálogo)
// ========================================
export function GenreCard({ shelfNumber, title, children, delay = 0, accentColor = colors.inkGold, icon }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6, type: 'spring', stiffness: 120 }}
            className="rounded-2xl overflow-hidden relative"
            style={{
                background: colors.bgSurface,
                border: `1px solid ${accentColor}30`,
                boxShadow: `0 8px 32px ${colors.bgDeep}80`,
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
                    ESTANTE {shelfNumber}
                </span>
                {icon && <span className="text-xl">{icon}</span>}
                <h3 className="text-lg font-bold" style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {title}
                </h3>
            </div>

            <div className="p-5">{children}</div>
        </motion.div>
    );
}

// ========================================
// TRAP CARD (Armadilha comum)
// ========================================
export function TrapCard({ title, description, children, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="rounded-2xl overflow-hidden"
            style={{
                background: colors.bgSurface,
                border: `1px solid ${colors.warnRed}25`,
                boxShadow: `0 8px 32px ${colors.bgDeep}80`,
            }}
        >
            <div
                className="px-5 py-3 flex items-center gap-3"
                style={{ background: `${colors.warnRed}10`, borderBottom: `1px solid ${colors.warnRed}18` }}
            >
                <span
                    className="text-xs font-bold tracking-wider px-3 py-1 rounded-full"
                    style={{ background: `${colors.warnRed}20`, color: colors.warnRed, border: `1px solid ${colors.warnRed}40` }}
                >
                    ⚠ ARMADILHA
                </span>
                <h3 className="text-lg font-bold" style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {title}
                </h3>
            </div>
            <div className="p-5">
                {description && <p className="text-sm mb-3" style={{ color: colors.textMedium }}>{description}</p>}
                {children}
            </div>
        </motion.div>
    );
}

// ========================================
// VERSE CARD (Versículo em pergaminho)
// ========================================
export function VerseCard({ reference, text, tone = 'focused', delay = 0 }) {
    const borderColors = {
        focused: colors.inkGold,
        warm: colors.genreAmber,
        deep: colors.genrePurple,
        danger: colors.warnRed,
        sea: colors.genreSea,
    };
    const bc = borderColors[tone] || borderColors.focused;

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
            <p
                className="text-base italic leading-relaxed mb-2"
                style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
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
// COMPARISON PANEL (Errado vs Correto)
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
                    background: `${colors.warnRed}08`,
                    border: `1px solid ${colors.warnRed}25`,
                }}
            >
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.warnRed }}>
                    {leftTitle || '⊘ ERRO DE GÊNERO'}
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
                    background: `${colors.goodGreen}08`,
                    border: `1px solid ${colors.goodGreen}25`,
                }}
            >
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.goodGreen }}>
                    {rightTitle || '◎ LEITURA NO GÊNERO'}
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
                background: `${colors.genrePurple}08`,
                border: `1px solid ${colors.genrePurple}25`,
            }}
        >
            <div className="px-4 py-2" style={{ background: `${colors.genrePurple}15`, borderBottom: `1px solid ${colors.genrePurple}18` }}>
                <p className="text-xs font-bold tracking-wider" style={{ color: colors.genrePurple }}>
                    🔗 PARALELO TERAPÊUTICO
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-4" style={{ borderRight: `1px solid ${colors.genrePurple}15` }}>
                    <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.genrePurple }}>
                        Na sessão
                    </p>
                    <p className="text-sm" style={{ color: colors.textMedium }}>{therapeutic}</p>
                </div>
                <div className="p-4">
                    <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.inkGold }}>
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
                border: `1px solid ${colors.inkGold}20`,
            }}
        >
            <table className="w-full text-sm">
                <thead>
                    <tr style={{ background: `${colors.inkGold}10`, borderBottom: `1px solid ${colors.inkGold}25` }}>
                        {columns.map((col, i) => (
                            <th
                                key={i}
                                className="px-4 py-3 text-left font-bold tracking-wider text-xs uppercase"
                                style={{ color: colors.inkGold }}
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
                            style={{ borderBottom: `1px solid ${colors.inkGold}10` }}
                        >
                            {row.map((cell, j) => (
                                <td
                                    key={j}
                                    className="px-4 py-3 align-top"
                                    style={{ color: j === 0 ? colors.textLight : colors.textMedium }}
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
export function StampBadge({ text, color = colors.inkGold, delay = 0, rotate = -8 }) {
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
// CONTRACT CARD (Contrato de leitura por gênero)
// ========================================
export function ContractCard({ expect, dontExpect, delay = 0, accentColor = colors.inkGold }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="rounded-xl overflow-hidden"
            style={{
                background: colors.bgSurface,
                border: `1px solid ${accentColor}25`,
            }}
        >
            <div
                className="px-4 py-2"
                style={{ background: `${accentColor}12`, borderBottom: `1px solid ${accentColor}20` }}
            >
                <p className="text-xs font-bold tracking-wider" style={{ color: accentColor }}>
                    📜 CONTRATO DE LEITURA
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-4" style={{ borderRight: `1px solid ${accentColor}15` }}>
                    <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.goodGreen }}>
                        ◎ Espere
                    </p>
                    <div className="text-sm space-y-1" style={{ color: colors.textMedium }}>
                        {expect.map((item, i) => (
                            <p key={i}>• {item}</p>
                        ))}
                    </div>
                </div>
                <div className="p-4">
                    <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.warnRed }}>
                        ⊘ Não cobre
                    </p>
                    <div className="text-sm space-y-1" style={{ color: colors.textMedium }}>
                        {dontExpect.map((item, i) => (
                            <p key={i}>• {item}</p>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// ========================================
// JOB STRUCTURE MAP (Diagrama das 5 seções de Jó)
// ========================================
export function JobStructureMap({ delay = 0 }) {
    const sections = [
        { range: 'Jó 1–2',   type: 'Prosa',                kind: 'narrativa',        color: colors.genreAmber,  width: 10 },
        { range: 'Jó 3–31',  type: 'Poesia · diálogo',     kind: 'Jó + 3 amigos',   color: colors.genreSea,    width: 38 },
        { range: 'Jó 32–37', type: 'Poesia · monólogo',    kind: 'Eliú',             color: colors.genrePurple, width: 18 },
        { range: 'Jó 38–41', type: 'Poesia · discurso',    kind: 'Javé responde',    color: colors.genreWine,   width: 22 },
        { range: 'Jó 42',    type: 'Prosa',                kind: 'epílogo',          color: colors.genreAmber,  width: 12 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay }}
            className="w-full"
        >
            {/* Barra de estrutura */}
            <div className="flex w-full rounded-lg overflow-hidden" style={{ height: 64, boxShadow: `0 4px 20px ${colors.bgDeep}80` }}>
                {sections.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ scaleX: 0, transformOrigin: 'left' }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: delay + 0.2 + i * 0.15, duration: 0.5, ease: 'easeOut' }}
                        className="flex flex-col items-center justify-center text-center px-2"
                        style={{
                            width: `${s.width}%`,
                            background: `${s.color}25`,
                            borderRight: i < sections.length - 1 ? `1px solid ${colors.bgLibrary}` : 'none',
                        }}
                    >
                        <span className="text-[10px] font-mono" style={{ color: s.color, opacity: 0.9 }}>
                            {s.range}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Legendas abaixo */}
            <div className="flex w-full mt-2">
                {sections.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: delay + 0.8 + i * 0.1 }}
                        className="flex flex-col items-center justify-start px-1 text-center"
                        style={{ width: `${s.width}%` }}
                    >
                        <span className="text-[11px] font-bold block" style={{ color: s.color }}>
                            {s.type}
                        </span>
                        <span className="text-[10px] block" style={{ color: colors.textMuted }}>
                            {s.kind}
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

// ========================================
// SHELF INDICATOR (Navegação lateral por ala)
// ========================================
export function ShelfIndicator({ currentSlide, totalSlides }) {
    const stratum = getStratum(currentSlide);
    const progress = currentSlide / Math.max(totalSlides - 1, 1);

    return (
        <div className="fixed left-0 top-0 bottom-12 w-12 z-40 hidden md:flex flex-col items-center py-8 transition-opacity duration-300 opacity-40 hover:opacity-80">
            <div
                className="absolute left-1/2 top-8 bottom-8 w-0.5 -translate-x-1/2"
                style={{
                    background: `linear-gradient(180deg, ${colors.inkGold}30, ${colors.genreSea}40, ${colors.genrePurple}30)`,
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
                            boxShadow: isActive ? `0 0 8px ${s.particleColor}60` : 'none',
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
                    background: colors.inkGold,
                    boxShadow: `0 0 12px ${colors.inkGold}70`,
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
        title: 'Capa — Biblioteca Viva',
        notes: [
            "'A Bíblia não é um livro. É uma biblioteca.' — esta é a tese-mãe da aula.",
            'Tom: curioso, hospitaleiro, não técnico.',
            '💡 Guga vem de semanas lendo Jó — a aula toda converge para ela no slide 48.',
        ],
    },
    2: {
        title: 'Gancho — "Eu tô morrendo, doutora."',
        notes: [
            'MOMENTO-CHAVE. Comece no terreno dela, não no bíblico.',
            'Deixe ela responder primeiro. A resposta dela vai ser: depende.',
            "💡 Pausa. A pergunta faz metade do trabalho."
        ],
    },
    4: {
        title: 'Entrega do ponto',
        notes: [
            "'Você já faz isso o dia inteiro. Hoje com a Bíblia.'",
            '💡 Não passar rápido. Deixar o insight sedimentar.',
        ],
    },
    8: {
        title: 'Slide-tese — Biblioteca',
        notes: [
            "'A Bíblia não é um livro. É uma biblioteca.' — tipografia gigante.",
            '💡 Se tem algum slide que vale repetir em voz alta, é esse.',
        ],
    },
    11: {
        title: 'Pergunta para Guga',
        notes: [
            "'Qual é o modo padrão que liga quando você abre a Bíblia?'",
            '💡 A resposta dela é preciosa. Ouvir. Não corrigir.',
        ],
    },
    14: {
        title: 'Narrativa — armadilha',
        notes: [
            'Descrição ≠ prescrição.',
            'Exemplos usados: Jacó enganando Isaque (Gn 27) e Abraão mentindo sobre Sara (Gn 12, 20).',
            '💡 NOTA PASTORAL: poligamia foi deliberadamente evitada como exemplo (contexto Guga).',
        ],
    },
    19: {
        title: 'Poesia — Sl 137',
        notes: [
            'Um dos momentos mais desafiadores da aula.',
            "'O texto documenta o grito; não o prescreve.'",
            '💡 Não suavizar. Deixar o verso chocar.',
        ],
    },
    20: {
        title: 'Paralelo terapêutico — Salmos',
        notes: [
            "'Os Salmos são a Bíblia dando permissão para falar o inominável.'",
            '💡 Guga vai reconhecer isso do atendimento dela.',
        ],
    },
    29: {
        title: '4 escolas de apocalíptica',
        notes: [
            'Honestidade total: preterismo / futurismo / idealismo / historicismo.',
            "'Cristãos sérios se distribuem entre elas.'",
            '💡 Não forçar posição agora.',
        ],
    },
    30: {
        title: 'Nota pessoal — historicismo',
        notes: [
            "'Historicismo é minha posição. Hoje só abro a porta.'",
            '💡 Transparência sem pressão. Abrir a porta sem entrar.',
        ],
    },
    45: {
        title: 'Mapa estrutural de Jó',
        notes: [
            'Mostrar visualmente: prosa / poesia-diálogo / poesia-monólogo / discurso divino / prosa.',
            '💡 O diagrama faz metade do trabalho. Deixar ela ver antes de explicar.',
        ],
    },
    47: {
        title: 'Momento Guga',
        notes: [
            "'O gênero está te autorizando a continuar perguntando.'",
            '💡 PICO EMOCIONAL DA AULA. Pausar. Respirar.',
        ],
    },
    48: {
        title: 'Jó vs os três amigos',
        notes: [
            "'Deus diz que Jó falou o que é reto.'",
            '💡 Se ela quiser ficar em silêncio, deixar.',
        ],
    },
    55: {
        title: 'Pastoral — você cabe no livro',
        notes: [
            "'O livro foi feito com gente como você dentro.'",
            '💡 Frase para deixar no ar. Não forçar comentário.',
        ],
    },
    56: {
        title: 'Ponte para Aula 14',
        notes: [
            "'A gente já tem o kit. Agora a gente usa.'",
            '💡 Gancho aberto — direção da 14 ainda flexível.',
        ],
    },
};
