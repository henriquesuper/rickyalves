// Shared components and utilities for Escola Sabatina — Lição 9 slides
// Tema: Pecado, Evangelho e Lei
// Semântica de cor: pecado/Cruz = wine · Lei = lapis · graça/evangelho = gold
'use client';
import { motion, useReducedMotion } from 'framer-motion';

export const TOTAL_SLIDES = 32;

// ========================================
// PALETA DE CORES — DOSSIÊ + LITÚRGICO
// ========================================
export const colors = {
    parchment:     '#F4E8D0',
    parchmentDeep: '#EBDDB8',
    parchmentEdge: '#E0D0A8',

    inkDeep:       '#2A1810',
    inkBody:       '#3E2C1C',
    inkSoft:       '#6E5836',
    inkMuted:      '#806841',
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

    snow:          '#F7F4EC',
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
// Modo `dark` muda o fundo para ink-deep (slides de peso/silêncio)
// ========================================
export function ParchmentWrapper({
    children,
    dark = false,
    deepGradient = false,
    lapisGradient = false,
    lapisDark = false,
    wineDark = false,
    grain = true,
    overlay = null,
    className = '',
}) {
    const bg = dark
        ? colors.inkDeep
        : wineDark
            ? `radial-gradient(ellipse at 50% 50%, ${colors.wineDeep} 0%, ${colors.inkDeep} 120%)`
            : lapisDark
                ? `radial-gradient(ellipse at 50% 50%, ${colors.lapis} 0%, ${colors.lapisDeep} 100%)`
                : deepGradient
                    ? `radial-gradient(ellipse at 50% 50%, ${colors.parchment} 0%, ${colors.inkDeep} 130%)`
                    : lapisGradient
                        ? `radial-gradient(ellipse at 50% 50%, ${colors.parchment} 0%, ${colors.lapisDeep} 140%)`
                        : colors.parchment;

    const isDarkBg = dark || lapisDark || wineDark;
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
            {overlay && (
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                    {overlay}
                </div>
            )}
            {grain && <FilmGrain opacity={isDarkBg ? 0.06 : 0.045} />}
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
}

// ========================================
// LESSON NUMBER — "LIÇÃO 9" (label configurável)
// ========================================
export function LessonNumber({ size = 'md', delay = 0, color, label = 'Lição 9' }) {
    const sizeMap = {
        sm: 'text-[10px]',
        md: 'text-xs',
        lg: 'text-sm',
    };
    return (
        <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ delay, duration: 0.6 }}
            className={`${sizeMap[size]} uppercase tracking-[0.45em] font-medium`}
            style={{
                color: color || colors.inkMuted,
                fontFamily: fonts.body,
                fontVariant: 'small-caps',
            }}
        >
            {label}
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
// BREATH — glow "respirando" sutil (efeito ambiente reutilizável)
// Envolve um elemento e pulsa um halo suave atrás dele.
// ========================================
export function Breath({ children, color, size = 420, delay = 0, intensity = 0.28 }) {
    const glow = color || colors.gold;
    return (
        <div className="relative inline-flex items-center justify-center">
            <motion.div
                aria-hidden
                initial={{ opacity: 0 }}
                animate={{ opacity: [intensity * 0.5, intensity, intensity * 0.5] }}
                transition={{ delay, duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: size,
                    height: size,
                    background: `radial-gradient(circle, ${glow}55 0%, transparent 68%)`,
                    filter: 'blur(28px)',
                    zIndex: 0,
                }}
            />
            <div className="relative" style={{ zIndex: 1 }}>{children}</div>
        </div>
    );
}

// ========================================
// LIGHT BEAM — raio de luz com crescendo lento (para a Cruz)
// Camada absoluta; posicionar dentro de um container relative.
// ========================================
export function LightBeam({ color, width = 320, delay = 0, duration = 4.5, intensity = 0.5 }) {
    const glow = color || colors.goldFaint;
    return (
        <motion.div
            aria-hidden
            initial={{ opacity: 0, scaleY: 0.4 }}
            animate={{ opacity: [0, intensity, intensity * 0.82], scaleY: 1 }}
            transition={{ delay, duration, ease: 'easeOut', times: [0, 0.7, 1] }}
            className="absolute pointer-events-none"
            style={{
                top: 0,
                left: '50%',
                width,
                height: '100%',
                marginLeft: -width / 2,
                transformOrigin: 'center top',
                background: `radial-gradient(ellipse 38% 60% at 50% 38%, ${glow}66 0%, ${glow}22 38%, transparent 72%)`,
                filter: 'blur(14px)',
                zIndex: 0,
            }}
        />
    );
}

// ========================================
// STAMP — impacto de carimbo/selo para palavras de peso
// ========================================
export function Stamp({ children, delay = 0, rotate = -4 }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 1.6, rotate: rotate * 2.2 }}
            animate={{ opacity: [0, 1, 1], scale: [1.6, 0.93, 1], rotate: [rotate * 2.2, rotate, rotate] }}
            transition={{ delay, duration: 0.5, ease: [0.2, 0.8, 0.2, 1], times: [0, 0.62, 1] }}
            style={{ display: 'inline-block' }}
        >
            {children}
        </motion.div>
    );
}

// ========================================
// STRUCK SEAL — carimbo que depois é riscado/anulado
// Fecha o arco "condenar → nenhuma condenação".
// ========================================
export function StruckSeal({ children, delay = 0, strikeDelay = 1.6, color, rotate = -4 }) {
    const c = color || colors.wine;
    return (
        <span className="relative inline-block">
            <Stamp delay={delay} rotate={rotate}>{children}</Stamp>
            <motion.span
                aria-hidden
                initial={{ scaleX: 0, opacity: 0, rotate: -3 }}
                animate={{ scaleX: 1, opacity: 0.92, rotate: -3 }}
                transition={{ delay: strikeDelay, duration: 0.55, ease: 'easeOut' }}
                className="absolute pointer-events-none"
                style={{
                    left: '-5%',
                    width: '110%',
                    top: '50%',
                    marginTop: '-2px',
                    height: '4px',
                    background: c,
                    borderRadius: 3,
                    transformOrigin: 'center',
                    boxShadow: `0 0 10px ${c}88`,
                }}
            />
        </span>
    );
}

// ========================================
// SHEEN — varredura de brilho refletido (para o espelho)
// Camada absoluta; o container precisa ser relative + overflow-hidden.
// ========================================
export function Sheen({ delay = 0, duration = 1.7, repeatDelay = 4.5, color = '#FFFFFF', angle = 105 }) {
    const reduce = useReducedMotion();
    if (reduce) return null;
    return (
        <motion.div
            aria-hidden
            initial={{ x: '-130%' }}
            animate={{ x: '130%' }}
            transition={{ delay, duration, repeat: Infinity, repeatDelay, ease: 'easeInOut' }}
            className="absolute inset-0 pointer-events-none"
            style={{ background: `linear-gradient(${angle}deg, transparent 32%, ${color}38 50%, transparent 68%)` }}
        />
    );
}

// ========================================
// SCARLET TO SNOW — Isaías 1:18 (o "água→vinho" desta lição)
// Wash escarlate que se resolve em neve, com flocos caindo.
// Camada absoluta; posicionar dentro de um container relative.
// ========================================
export function ScarletToSnow({ delay = 0, duration = 3.4, flakeCount = 26 }) {
    const reduce = useReducedMotion();
    const snowStart = delay + duration * 0.45;
    const flakes = Array.from({ length: flakeCount }, (_, i) => ({
        left: (i * 37) % 100,
        size: 2 + (i % 3),
        drift: ((i % 5) - 2) * 14,
        dur: 5 + (i % 4),
        delay: snowStart + (i % 7) * 0.55,
    }));
    return (
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0, background: colors.wine }}
                animate={{
                    opacity: [0, 0.42, 0.42, 0.2],
                    background: [colors.wine, colors.wineSoft, colors.snow, colors.snow],
                }}
                transition={{ delay, duration: duration + 1.2, ease: 'easeInOut', times: [0, 0.32, 0.62, 1] }}
                style={{ mixBlendMode: 'soft-light' }}
            />
            {!reduce && flakes.map((f, i) => (
                <motion.span
                    key={i}
                    className="absolute rounded-full"
                    initial={{ top: '-6%', opacity: 0 }}
                    animate={{ top: '106%', opacity: [0, 0.9, 0.9, 0], x: [0, f.drift] }}
                    transition={{ delay: f.delay, duration: f.dur, repeat: Infinity, repeatDelay: 1.2, ease: 'easeIn' }}
                    style={{ left: `${f.left}%`, width: f.size, height: f.size, background: colors.snow, boxShadow: `0 0 6px ${colors.snow}` }}
                />
            ))}
        </div>
    );
}

// ========================================
// TABLETS GOLD — tábuas da Lei que se aquecem de pedra para ouro
// Camada de fundo sutil (Mov. II).
// ========================================
export function TabletsGold({ size = 320, delay = 0, opacity = 0.18 }) {
    const stone = '#8B8378';
    return (
        <motion.svg
            aria-hidden
            width={size}
            height={size}
            viewBox="0 0 200 210"
            initial={{ opacity: 0 }}
            animate={{ opacity }}
            transition={{ delay, duration: 1.4 }}
            style={{ overflow: 'visible' }}
        >
            {[
                'M25,72 Q25,40 50,40 Q75,40 75,72 L75,188 L25,188 Z',
                'M125,72 Q125,40 150,40 Q175,40 175,72 L175,188 L125,188 Z',
            ].map((d, i) => (
                <motion.path
                    key={i}
                    d={d}
                    initial={{ fill: stone }}
                    animate={{ fill: [stone, stone, colors.gold] }}
                    transition={{ delay: delay + 0.6 + i * 0.25, duration: 2.6, times: [0, 0.4, 1], ease: 'easeInOut' }}
                    stroke={colors.goldFaint}
                    strokeWidth="1.5"
                />
            ))}
            {[88, 108, 128, 148].map((y, i) => (
                <g key={`l-${i}`}>
                    <rect x="33" y={y} width="34" height="3" rx="1.5" fill={colors.parchment} opacity="0.35" />
                    <rect x="133" y={y} width="34" height="3" rx="1.5" fill={colors.parchment} opacity="0.35" />
                </g>
            ))}
        </motion.svg>
    );
}

// ========================================
// FILM GRAIN — textura de grão sutil (overlay ambiente)
// ========================================
export function FilmGrain({ opacity = 0.05 }) {
    return (
        <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ opacity, mixBlendMode: 'multiply', zIndex: 5 }}
        >
            <svg width="100%" height="100%">
                <filter id="ls9-grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#ls9-grain)" />
            </svg>
        </div>
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
// MOVEMENT OPENER — abre cada movimento
// ========================================
export function MovementOpener({ roman, title, subtitle, accent, delay = 0, dark = false }) {
    const accentColor = accent || colors.gold;
    return (
        <div className="max-w-3xl mx-auto px-8 text-center flex flex-col items-center justify-center">
            <RomanNumeral value={roman} size="xl" color={accentColor} opacity={0.9} delay={delay} />
            <div className="mt-8">
                <QuietTitle size="xl" delay={delay + 0.5} color={dark ? colors.parchment : colors.inkDeep}>
                    {title}
                </QuietTitle>
            </div>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: delay + 1.2, duration: 0.9 }}
                    className="mt-6 text-lg md:text-xl italic"
                    style={{ color: accentColor, fontFamily: fonts.accent, letterSpacing: '0.02em' }}
                >
                    {subtitle}
                </motion.p>
            )}
            <div className="mt-10">
                <ThinRule width="120px" color={accentColor} delay={delay + 1.8} opacity={0.45} />
            </div>
        </div>
    );
}

// ========================================
// THREE CARDS ROW — três cards horizontais
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
export function HonestyCard({ children, title = 'Honestidade Intelectual', delay = 0, maxWidth = '42rem' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.8 }}
            className="mx-auto p-6"
            style={{
                maxWidth,
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
                {title}
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
// QUESTION CARD — pergunta para a classe
// ========================================
export function QuestionCard({ children, label = 'Pergunta para a classe', delay = 0, accent, maxWidth = '40rem' }) {
    const accentColor = accent || colors.gold;
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.9, ease: 'easeOut' }}
            className="mx-auto p-7 text-center"
            style={{
                maxWidth,
                background: `${accentColor}12`,
                borderTop: `2px solid ${accentColor}`,
                borderBottom: `2px solid ${accentColor}`,
            }}
        >
            <p
                className="text-[10px] uppercase tracking-[0.35em] mb-4"
                style={{
                    color: accentColor,
                    fontFamily: fonts.body,
                    fontVariant: 'small-caps',
                    fontWeight: 600,
                }}
            >
                {label}
            </p>
            <div
                className="text-xl md:text-2xl italic"
                style={{
                    color: colors.inkDeep,
                    fontFamily: fonts.display,
                    lineHeight: 1.45,
                }}
            >
                {children}
            </div>
        </motion.div>
    );
}

// ========================================
// INTERTEXT PAIR — duas colunas conectadas
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
