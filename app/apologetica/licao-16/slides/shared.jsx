// Shared components and utilities for Lição 16 slides
// Tema: O Mundo Quebrado — paleta estendida (parchment + ink-deep + wine + lapis + gold)
'use client';
import { motion } from 'framer-motion';

export const TOTAL_SLIDES = 40;

// ========================================
// PALETA DE CORES — DOSSIÊ + LITÚRGICO
// ========================================
export const colors = {
    parchment:     '#F4E8D0',
    parchmentDeep: '#EBDDB8',
    parchmentEdge: '#E0D0A8',

    inkDeep:       '#2A1810',
    inkBody:       '#3E2C1C',
    inkSoft:       '#8B7355',
    inkMuted:      '#A89570',
    inkFaint:      '#C4B595',

    gold:          '#B8860B',
    goldSoft:      '#D4A82A',
    goldFaint:     '#E5C966',

    lapis:         '#1F4068',
    lapisSoft:     '#365A85',
    lapisDeep:     '#142A45',

    wine:          '#722F37',
    wineSoft:      '#9A4A52',
    wineDeep:      '#4E1F25',
};

// ========================================
// FONTES (consumidas via CSS variables do layout)
// ========================================
export const fonts = {
    display: "var(--font-playfair), Georgia, 'Times New Roman', serif",
    body:    "Georgia, 'Times New Roman', serif",
    accent:  "var(--font-cormorant), Georgia, serif",
    mono:    "'Courier New', ui-monospace, monospace",
};

// ========================================
// PARCHMENT WRAPPER — container base
// Modo `dark` muda o fundo para ink-deep (slides de luto/silêncio)
// ========================================
export function ParchmentWrapper({
    children,
    dark = false,
    deepGradient = false,
    lapisGradient = false,
    lapisDark = false,
    className = '',
}) {
    const bg = dark
        ? colors.inkDeep
        : lapisDark
            ? `radial-gradient(ellipse at 50% 50%, ${colors.lapis} 0%, ${colors.lapisDeep} 100%)`
            : deepGradient
                ? `radial-gradient(ellipse at 50% 50%, ${colors.parchment} 0%, ${colors.inkDeep} 130%)`
                : lapisGradient
                    ? `radial-gradient(ellipse at 50% 50%, ${colors.parchment} 0%, ${colors.lapisDeep} 140%)`
                    : colors.parchment;

    const isDarkBg = dark || lapisDark;
    const baseTextColor = isDarkBg ? colors.parchment : colors.inkBody;

    return (
        <div
            className={`relative w-full flex flex-col items-center justify-center ${className}`}
            style={{
                background: bg,
                color: baseTextColor,
                fontFamily: fonts.body,
                minHeight: '100vh',
                paddingTop: '16px',
                paddingBottom: '80px',
            }}
        >
            {/* Textura sutil */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: isDarkBg
                        ? `
                            radial-gradient(ellipse at 25% 15%, ${colors.wineDeep}22 0%, transparent 55%),
                            radial-gradient(ellipse at 80% 85%, ${colors.lapisDeep}33 0%, transparent 60%)
                        `
                        : `
                            radial-gradient(ellipse at 25% 15%, ${colors.parchmentDeep}66 0%, transparent 50%),
                            radial-gradient(ellipse at 80% 85%, ${colors.parchmentEdge}55 0%, transparent 55%)
                        `,
                }}
            />
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
}

// ========================================
// LESSON NUMBER — "LIÇÃO 16"
// ========================================
export function LessonNumber({ size = 'md', delay = 0, color }) {
    const sizeMap = {
        sm: 'text-[10px]',
        md: 'text-xs',
        lg: 'text-sm',
    };
    return (
        <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay, duration: 0.6 }}
            className={`${sizeMap[size]} uppercase tracking-[0.45em] font-medium`}
            style={{
                color: color || colors.inkMuted,
                fontFamily: fonts.body,
                fontVariant: 'small-caps',
            }}
        >
            Lição 16
        </motion.p>
    );
}

// ========================================
// ROMAN NUMERAL — algarismo decorativo
// ========================================
export function RomanNumeral({ value, size = 'md', weight = 300, color, opacity = 0.85, delay = 0 }) {
    const sizeMap = {
        sm: 'text-2xl',
        md: 'text-4xl',
        lg: 'text-6xl',
        xl: 'text-8xl',
    };
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity }}
            transition={{ delay, duration: 0.8 }}
            className={`${sizeMap[size]} block leading-none`}
            style={{
                color: color || colors.inkMuted,
                fontFamily: fonts.accent,
                fontWeight: weight,
                letterSpacing: '0.05em',
            }}
        >
            {value}
        </motion.span>
    );
}

// ========================================
// SECTION LABEL — pequeno cabeçalho
// ========================================
export function SectionLabel({ children, align = 'left', delay = 0, color }) {
    const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
    return (
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay, duration: 0.6 }}
            className={`text-xs uppercase tracking-[0.35em] font-medium ${alignClass}`}
            style={{
                color: color || colors.inkMuted,
                fontFamily: fonts.body,
                fontVariant: 'small-caps',
            }}
        >
            {children}
        </motion.p>
    );
}

// ========================================
// BIBLICAL QUOTE — citação com tom configurável
// ========================================
function renderWithEmphasis(text, emphasis) {
    if (!emphasis || emphasis.length === 0) return text;
    const escape = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(${emphasis.map(escape).join('|')})`, 'g');
    return text.split(re).map((part, i) =>
        emphasis.includes(part)
            ? <strong key={i} style={{ fontWeight: 600 }}>{part}</strong>
            : <span key={i}>{part}</span>
    );
}

const toneToColor = (tone) => {
    switch (tone) {
        case 'wine':      return colors.wine;
        case 'gold':      return colors.gold;
        case 'lapis':     return colors.lapis;
        case 'parchment': return colors.parchment;
        case 'inkDeep':   return colors.inkDeep;
        default:          return colors.wine;
    }
};

export function BiblicalQuote({
    reference,
    text,
    lines,
    emphasis = [],
    tone = 'wine',
    referenceTone,
    align = 'center',
    size = 'md',
    delay = 0,
    italic = true,
}) {
    const sizeMap = {
        xs: 'text-sm md:text-base',
        sm: 'text-base md:text-lg',
        md: 'text-lg md:text-xl',
        lg: 'text-xl md:text-2xl',
        xl: 'text-2xl md:text-3xl',
        xxl: 'text-3xl md:text-5xl',
    };
    const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
    const color = toneToColor(tone);
    const refColor = referenceTone ? toneToColor(referenceTone) : (tone === 'parchment' ? colors.inkFaint : colors.inkMuted);

    const renderedLines = lines ? lines : (text ? text.split('\n') : []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.9, ease: 'easeOut' }}
            className={`${alignClass} max-w-3xl mx-auto`}
        >
            <div
                className={sizeMap[size]}
                style={{
                    color,
                    fontFamily: fonts.display,
                    fontStyle: italic ? 'italic' : 'normal',
                    lineHeight: 1.5,
                }}
            >
                {renderedLines.map((line, i) => (
                    <div key={i} style={{ marginBottom: '0.1em' }}>
                        {renderWithEmphasis(line, emphasis)}
                    </div>
                ))}
            </div>
            {reference && (
                <p
                    className="mt-5 text-xs tracking-[0.35em] uppercase"
                    style={{
                        color: refColor,
                        fontFamily: fonts.body,
                        fontVariant: 'small-caps',
                        opacity: 0.85,
                    }}
                >
                    {reference}
                </p>
            )}
        </motion.div>
    );
}

// ========================================
// PROSE BLOCK — texto Georgia com quebras intencionais
// ========================================
export function ProseBlock({
    lines,
    align = 'left',
    size = 'md',
    italic = false,
    color,
    delay = 0,
    maxWidth = '34rem',
}) {
    const sizeMap = {
        sm: 'text-base',
        md: 'text-lg md:text-xl',
        lg: 'text-xl md:text-2xl',
        xl: 'text-2xl md:text-3xl',
    };
    const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
    const renderedLines = Array.isArray(lines) ? lines : [lines];

    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.8, ease: 'easeOut' }}
            className={`${alignClass} mx-auto`}
            style={{ maxWidth }}
        >
            {renderedLines.map((line, i) => {
                if (line === '') return <div key={i} style={{ height: '1.4em' }} />;
                const isItalic = typeof line === 'object' && line.italic;
                const lineText = typeof line === 'object' ? line.text : line;
                const lineWeight = typeof line === 'object' && line.bold ? 600 : 400;
                const lineColor = (typeof line === 'object' && line.color) || color || colors.inkBody;
                return (
                    <p
                        key={i}
                        className={sizeMap[size]}
                        style={{
                            color: lineColor,
                            fontFamily: fonts.body,
                            fontStyle: italic || isItalic ? 'italic' : 'normal',
                            fontWeight: lineWeight,
                            lineHeight: 1.55,
                            margin: 0,
                        }}
                    >
                        {lineText}
                    </p>
                );
            })}
        </motion.div>
    );
}

// ========================================
// QUIET TITLE — título sóbrio (não enorme)
// ========================================
export function QuietTitle({ children, align = 'center', size = 'lg', delay = 0, color, italic = false, weight = 500 }) {
    const sizeMap = {
        xs: 'text-xl md:text-2xl',
        sm: 'text-2xl md:text-3xl',
        md: 'text-3xl md:text-4xl',
        lg: 'text-4xl md:text-5xl',
        xl: 'text-5xl md:text-6xl',
        xxl: 'text-6xl md:text-7xl',
    };
    const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
    return (
        <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.9, ease: 'easeOut' }}
            className={`${sizeMap[size]} ${alignClass}`}
            style={{
                color: color || colors.inkDeep,
                fontFamily: fonts.display,
                fontWeight: weight,
                fontStyle: italic ? 'italic' : 'normal',
                lineHeight: 1.18,
                letterSpacing: '-0.005em',
            }}
        >
            {children}
        </motion.h1>
    );
}

// ========================================
// THIN RULE — fina linha decorativa
// ========================================
export function ThinRule({ width = '160px', color, delay = 0.6, opacity = 0.5 }) {
    return (
        <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity, scaleX: 1 }}
            transition={{ delay, duration: 0.9, ease: 'easeOut' }}
            className="h-px"
            style={{
                width,
                background: color || colors.inkMuted,
            }}
        />
    );
}

// ========================================
// THREE CARDS ROW — três cards horizontais (slide 11)
// ========================================
export function ThreeCardsRow({ cards, delay = 0 }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl mx-auto">
            {cards.map((c, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: delay + i * 0.9, duration: 0.8, ease: 'easeOut' }}
                    className="rounded-sm p-5 flex flex-col"
                    style={{
                        background: `${c.bg}1A`,
                        border: `1px solid ${c.bg}55`,
                    }}
                >
                    <p
                        className="text-xs uppercase tracking-[0.3em] mb-3"
                        style={{
                            color: c.bg,
                            fontFamily: fonts.body,
                            fontVariant: 'small-caps',
                            fontWeight: 600,
                        }}
                    >
                        {c.ref}
                    </p>
                    <p
                        className="text-sm md:text-base italic"
                        style={{
                            color: colors.inkBody,
                            fontFamily: fonts.display,
                            lineHeight: 1.55,
                        }}
                    >
                        {c.text}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}

// ========================================
// HONESTY CARD — bloco "honestidade intelectual"
// ========================================
export function HonestyCard({ children, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.8 }}
            className="max-w-2xl mx-auto p-6"
            style={{
                background: `${colors.parchmentDeep}AA`,
                border: `1px dashed ${colors.inkSoft}`,
            }}
        >
            <p
                className="text-[10px] uppercase tracking-[0.3em] mb-3"
                style={{
                    color: colors.gold,
                    fontFamily: fonts.mono,
                    letterSpacing: '0.25em',
                }}
            >
                Honestidade Intelectual
            </p>
            <div
                className="text-sm md:text-base"
                style={{
                    color: colors.inkBody,
                    fontFamily: fonts.body,
                    lineHeight: 1.6,
                }}
            >
                {children}
            </div>
        </motion.div>
    );
}

// ========================================
// INTERTEXT PAIR — duas colunas conectadas (Dn ↔ Is/Sl, Mt 27 ↔ Sl 22)
// ========================================
export function IntertextPair({ left, right, connectorDelay = 1.2, delay = 0, accentColor }) {
    const accent = accentColor || colors.gold;
    return (
        <div className="w-full max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-2 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: delay + 0.2, duration: 0.8 }}
                    className="text-center md:text-right"
                >
                    <p
                        className="text-xs uppercase tracking-[0.3em] mb-3"
                        style={{
                            color: left.refColor || colors.lapis,
                            fontFamily: fonts.body,
                            fontVariant: 'small-caps',
                            fontWeight: 600,
                        }}
                    >
                        {left.ref}
                    </p>
                    <p
                        className="text-base md:text-lg italic"
                        style={{
                            color: colors.inkBody,
                            fontFamily: fonts.display,
                            lineHeight: 1.55,
                        }}
                    >
                        &ldquo;{left.text}&rdquo;
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.6, scaleX: 1 }}
                    transition={{ delay: delay + connectorDelay, duration: 0.9 }}
                    className="hidden md:block h-px mx-3"
                    style={{
                        width: '64px',
                        background: `linear-gradient(to right, ${left.refColor || colors.lapis}, ${right.refColor || accent})`,
                    }}
                />

                <motion.div
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: delay + 0.6, duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <p
                        className="text-xs uppercase tracking-[0.3em] mb-3"
                        style={{
                            color: right.refColor || accent,
                            fontFamily: fonts.body,
                            fontVariant: 'small-caps',
                            fontWeight: 600,
                        }}
                    >
                        {right.ref}
                    </p>
                    <p
                        className="text-base md:text-lg italic"
                        style={{
                            color: colors.inkBody,
                            fontFamily: fonts.display,
                            lineHeight: 1.55,
                        }}
                    >
                        &ldquo;{right.text}&rdquo;
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
