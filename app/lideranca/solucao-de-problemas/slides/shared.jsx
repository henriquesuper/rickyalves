// Componentes e utilidades compartilhadas — Solução de Problemas (curso de liderança)
// Tema corporativo/escuro. Cor semântica: âmbar = destaque/ação · vermelho = tensão/sintoma
// · verde = reversível/ok · teal = calma/resolução.
//
// Animação por BEATS (passos): cada slide recebe a prop `step`. Os elementos de conteúdo
// são embrulhados em <Reveal step={step} at={n}> e aparecem quando step >= n. O título/contexto
// fica visível desde o início (sem Reveal). Cada slide declara SlideXX.steps = N.
'use client';
import { motion, useReducedMotion } from 'framer-motion';

export const TOTAL_SLIDES = 33;

// ========================================
// PALETA — CORPORATIVO ESCURO
// ========================================
export const colors = {
    base:        '#0E1217',
    baseDeep:    '#090C10',
    surface:     '#161B22',
    surfaceSoft: '#1C232C',
    surfaceEdge: '#242C37',
    line:        '#2A323D',

    textHigh:    '#F3F5F8',
    textBody:    '#C5CDD8',
    textMuted:   '#8A95A3',
    textFaint:   '#5A6573',

    amber:       '#F2A33C',
    amberSoft:   '#F7BE6B',
    amberDeep:   '#C77F26',

    teal:        '#3FBDB3',
    tealSoft:    '#6FD3CB',

    red:         '#E5564B',
    redSoft:     '#F07A71',

    green:       '#54B981',
    greenSoft:   '#79CB9C',
};

// ========================================
// FONTES (CSS variables vindas do layout)
// ========================================
export const fonts = {
    display: "var(--font-grotesk), 'Inter', system-ui, sans-serif",
    body:    "var(--font-inter), system-ui, -apple-system, sans-serif",
    mono:    "var(--font-mono), 'JetBrains Mono', ui-monospace, monospace",
};

const toneToColor = (tone) => ({
    amber: colors.amber,
    teal:  colors.teal,
    red:   colors.red,
    green: colors.green,
    high:  colors.textHigh,
    muted: colors.textMuted,
}[tone] || colors.amber);

// ========================================
// REVEAL — aparece por beat (step >= at)
// Mantém o espaço no layout; só anima opacidade/posição.
// ========================================
export function Reveal({
    step = 99,
    at = 1,
    children,
    y = 18,
    x = 0,
    scale = 1,
    duration = 0.55,
    className = '',
    style = {},
}) {
    const shown = step >= at;
    return (
        <motion.div
            initial={{ opacity: 0, y, x, scale }}
            animate={shown
                ? { opacity: 1, y: 0, x: 0, scale: 1 }
                : { opacity: 0, y, x, scale }}
            transition={{ duration, ease: [0.22, 0.61, 0.36, 1] }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}

// ========================================
// WRAPPER base — fundo escuro, com tom ambiente opcional
// tones: 'default' | 'alert' | 'calm' | 'accent'
// ========================================
export function StageWrapper({ children, tone = 'default', grain = true, className = '' }) {
    const glow = {
        default: `radial-gradient(ellipse at 22% 18%, ${colors.surfaceEdge}66 0%, transparent 55%),
                  radial-gradient(ellipse at 82% 88%, ${colors.surface}88 0%, transparent 60%)`,
        accent:  `radial-gradient(ellipse at 50% 28%, ${colors.amberDeep}26 0%, transparent 60%),
                  radial-gradient(ellipse at 80% 90%, ${colors.surface}88 0%, transparent 60%)`,
        alert:   `radial-gradient(ellipse at 30% 22%, ${colors.red}1F 0%, transparent 58%),
                  radial-gradient(ellipse at 84% 86%, ${colors.surface}88 0%, transparent 60%)`,
        calm:    `radial-gradient(ellipse at 50% 30%, ${colors.teal}1C 0%, transparent 60%),
                  radial-gradient(ellipse at 80% 88%, ${colors.surface}88 0%, transparent 60%)`,
    }[tone];

    return (
        <div
            className={`relative w-full flex flex-col items-center justify-center ${className}`}
            style={{
                background: colors.base,
                color: colors.textBody,
                fontFamily: fonts.body,
                minHeight: '100vh',
                paddingTop: '24px',
                paddingBottom: '84px',
                overflow: 'hidden',
            }}
        >
            <div className="absolute inset-0 pointer-events-none" style={{ background: glow }} />
            {grain && <FilmGrain opacity={0.05} />}
            <div className="relative z-10 w-full">{children}</div>
        </div>
    );
}

// ========================================
// KICKER — rótulo pequeno mono em maiúsculas
// ========================================
export function Kicker({ children, color, align = 'center', className = '' }) {
    const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
    return (
        <p
            className={`text-[11px] md:text-xs uppercase ${alignClass} ${className}`}
            style={{
                color: color || colors.amber,
                fontFamily: fonts.mono,
                letterSpacing: '0.32em',
                fontWeight: 500,
            }}
        >
            {children}
        </p>
    );
}

// ========================================
// DISPLAY TITLE — título grande sans
// ========================================
export function DisplayTitle({ children, align = 'center', size = 'lg', color, weight = 600, className = '' }) {
    const sizeMap = {
        sm:  'text-2xl md:text-3xl',
        md:  'text-3xl md:text-4xl',
        lg:  'text-4xl md:text-5xl',
        xl:  'text-5xl md:text-6xl',
        xxl: 'text-6xl md:text-7xl',
    };
    const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
    return (
        <h1
            className={`${sizeMap[size]} ${alignClass} ${className}`}
            style={{
                color: color || colors.textHigh,
                fontFamily: fonts.display,
                fontWeight: weight,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
            }}
        >
            {children}
        </h1>
    );
}

// ========================================
// LEAD — frase de apoio (a "batida" do slide)
// ========================================
export function Lead({ children, align = 'center', color, size = 'md', italic = true, className = '' }) {
    const sizeMap = {
        sm: 'text-base md:text-lg',
        md: 'text-lg md:text-2xl',
        lg: 'text-xl md:text-3xl',
    };
    const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
    return (
        <p
            className={`${sizeMap[size]} ${alignClass} ${className}`}
            style={{
                color: color || colors.amberSoft,
                fontFamily: fonts.display,
                fontStyle: italic ? 'italic' : 'normal',
                fontWeight: 400,
                lineHeight: 1.4,
            }}
        >
            {children}
        </p>
    );
}

// ========================================
// PROSE — parágrafo(s) de corpo
// ========================================
export function Prose({ children, align = 'center', size = 'md', color, maxWidth = '46rem', className = '' }) {
    const sizeMap = {
        sm: 'text-base md:text-lg',
        md: 'text-lg md:text-xl',
        lg: 'text-xl md:text-2xl',
    };
    const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
    return (
        <p
            className={`${sizeMap[size]} ${alignClass} mx-auto ${className}`}
            style={{
                color: color || colors.textBody,
                fontFamily: fonts.body,
                lineHeight: 1.6,
                maxWidth,
            }}
        >
            {children}
        </p>
    );
}

// ========================================
// THIN RULE — linha fina decorativa
// ========================================
export function ThinRule({ width = '120px', color, className = '' }) {
    return (
        <div
            className={`h-px ${className}`}
            style={{ width, background: color || colors.line, opacity: 0.9 }}
        />
    );
}

// ========================================
// AMBIENT GLOW — halo "respirando" (sempre animando, não depende de beat)
// ========================================
export function AmbientGlow({ color, size = 460, intensity = 0.22, className = '' }) {
    const reduce = useReducedMotion();
    const glow = color || colors.amber;
    return (
        <motion.div
            aria-hidden
            initial={{ opacity: intensity * 0.6 }}
            animate={reduce ? { opacity: intensity } : { opacity: [intensity * 0.55, intensity, intensity * 0.55] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className={`absolute rounded-full pointer-events-none ${className}`}
            style={{
                width: size,
                height: size,
                background: `radial-gradient(circle, ${glow}44 0%, transparent 68%)`,
                filter: 'blur(34px)',
                zIndex: 0,
            }}
        />
    );
}

// ========================================
// FILM GRAIN — textura sutil
// ========================================
export function FilmGrain({ opacity = 0.05 }) {
    return (
        <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ opacity, mixBlendMode: 'overlay', zIndex: 1 }}
        >
            <svg width="100%" height="100%">
                <filter id="sp-grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#sp-grain)" />
            </svg>
        </div>
    );
}

// ========================================
// MOVEMENT OPENER — abre cada movimento (numeral + título)
// ========================================
export function MovementOpener({ roman, title, subtitle, accent, climax = false }) {
    const accentColor = accent || colors.amber;
    return (
        <div className="max-w-3xl mx-auto px-8 text-center flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center">
                <AmbientGlow color={accentColor} size={climax ? 520 : 420} intensity={climax ? 0.3 : 0.2} />
                <span
                    className="relative block leading-none"
                    style={{
                        fontFamily: fonts.display,
                        fontSize: climax ? 'clamp(5rem, 16vw, 11rem)' : 'clamp(4rem, 13vw, 9rem)',
                        fontWeight: 700,
                        color: accentColor,
                        letterSpacing: '-0.03em',
                        zIndex: 1,
                    }}
                >
                    {roman}
                </span>
            </div>
            <div className="mt-6">
                <DisplayTitle size="xl" weight={600}>{title}</DisplayTitle>
            </div>
            {subtitle && (
                <p
                    className="mt-5 text-lg md:text-2xl"
                    style={{ color: colors.textMuted, fontFamily: fonts.display, fontStyle: 'italic' }}
                >
                    {subtitle}
                </p>
            )}
            <div className="mt-9 flex justify-center">
                <ThinRule width="100px" color={accentColor} />
            </div>
            {climax && (
                <p
                    className="mt-7 text-[11px] uppercase"
                    style={{ color: accentColor, fontFamily: fonts.mono, letterSpacing: '0.3em' }}
                >
                    o salto de liderança
                </p>
            )}
        </div>
    );
}

// ========================================
// THESIS FRAMES — três frases numeradas (revela por beat)
// items: [{ strong, rest }]
// ========================================
export function ThesisFrames({ items, step, startAt = 1 }) {
    return (
        <div className="w-full max-w-3xl mx-auto flex flex-col gap-7">
            {items.map((it, i) => (
                <Reveal key={i} step={step} at={startAt + i} x={-18} y={0}>
                    <div className="flex items-start gap-5">
                        <span
                            className="shrink-0 leading-none"
                            style={{
                                fontFamily: fonts.mono,
                                fontSize: '1.5rem',
                                color: colors.amber,
                                fontWeight: 600,
                                paddingTop: '2px',
                            }}
                        >
                            {String(i + 1).padStart(2, '0')}
                        </span>
                        <p
                            className="text-xl md:text-3xl"
                            style={{ color: colors.textHigh, fontFamily: fonts.display, lineHeight: 1.3, fontWeight: 500 }}
                        >
                            <span style={{ color: colors.amberSoft }}>{it.strong}</span>
                            {it.rest ? ` — ${it.rest}` : ''}
                        </p>
                    </div>
                </Reveal>
            ))}
        </div>
    );
}

// ========================================
// SIX-P STRIP — o mapa dos 6 P (revela por beat)
// ========================================
const SIX_P = [
    { roman: 'I',   p: 'Pausa',    hint: 'não reaja ao sintoma' },
    { roman: 'II',  p: 'Pessoa',   hint: 'separe a pessoa do problema' },
    { roman: 'III', p: 'Problema', hint: 'qual é o problema de verdade' },
    { roman: 'IV',  p: 'Porquê',   hint: 'desça até a causa raiz' },
    { roman: 'V',   p: 'Plano',    hint: 'decida e aja' },
    { roman: 'VI',  p: 'Prevenir', hint: 'faça não voltar', climax: true },
];

export function SixPStrip({ step = 99, reveal = false, startAt = 1, spotlightAt, highlight }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-5xl mx-auto">
            {SIX_P.map((s, i) => {
                const accent = s.climax ? colors.amber : colors.textHigh;
                const lit = (highlight === s.p) || (s.climax && spotlightAt != null && step >= spotlightAt);
                return (
                    <Reveal key={s.p} step={step} at={reveal ? startAt + i : 0} y={14}>
                        <motion.div
                            animate={{ scale: lit ? 1.04 : 1 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            className="rounded-lg p-4 md:p-5 h-full flex flex-col gap-1"
                            style={{
                                background: s.climax ? `${colors.amber}14` : colors.surface,
                                border: `1px solid ${s.climax ? `${colors.amber}66` : colors.line}`,
                                boxShadow: lit ? `0 0 0 2px ${colors.amber}, 0 0 28px ${colors.amber}44` : 'none',
                            }}
                        >
                            <span style={{ fontFamily: fonts.mono, fontSize: '0.7rem', color: s.climax ? colors.amber : colors.textFaint, letterSpacing: '0.2em' }}>
                                {s.roman}
                            </span>
                            <span style={{ fontFamily: fonts.display, fontSize: '1.35rem', fontWeight: 600, color: accent }}>
                                {s.p}
                            </span>
                            <span style={{ fontFamily: fonts.body, fontSize: '0.85rem', color: colors.textMuted }}>
                                {s.hint}
                            </span>
                        </motion.div>
                    </Reveal>
                );
            })}
        </div>
    );
}

// ========================================
// WHY LADDER — escada dos 5 porquês (revela degrau por beat)
// steps: [{ q, a }] · top = problema; último = causa raiz
// ========================================
export function WhyLadder({ top, rungs, step, startAt = 1 }) {
    return (
        <div className="w-full max-w-3xl mx-auto flex flex-col gap-2.5">
            <Reveal step={step} at={startAt - 1 < 0 ? 0 : startAt - 1} y={10}>
                <div
                    className="rounded-lg px-5 py-4"
                    style={{ background: `${colors.red}1A`, border: `1px solid ${colors.red}55` }}
                >
                    <span style={{ fontFamily: fonts.mono, fontSize: '0.66rem', color: colors.redSoft, letterSpacing: '0.22em' }}>SINTOMA</span>
                    <p style={{ fontFamily: fonts.display, fontSize: '1.2rem', color: colors.textHigh, marginTop: 2 }}>{top}</p>
                </div>
            </Reveal>
            {rungs.map((r, i) => {
                const isRoot = i === rungs.length - 1;
                return (
                    <Reveal key={i} step={step} at={startAt + i} x={22} y={0}>
                        <div className="flex items-stretch gap-3" style={{ marginLeft: `${(i + 1) * 14}px` }}>
                            <span style={{ width: 2, background: isRoot ? colors.amber : colors.line, flexShrink: 0 }} />
                            <div
                                className="rounded-lg px-4 py-3 flex-1"
                                style={{
                                    background: isRoot ? `${colors.amber}16` : colors.surface,
                                    border: `1px solid ${isRoot ? `${colors.amber}66` : colors.line}`,
                                }}
                            >
                                <span style={{ fontFamily: fonts.mono, fontSize: '0.66rem', color: isRoot ? colors.amber : colors.textFaint, letterSpacing: '0.2em' }}>
                                    {isRoot ? 'CAUSA RAIZ' : 'POR QUÊ?'}
                                </span>
                                <p style={{ fontFamily: fonts.body, fontSize: '1.02rem', color: isRoot ? colors.textHigh : colors.textBody, marginTop: 2, lineHeight: 1.45 }}>
                                    {r}
                                </p>
                            </div>
                        </div>
                    </Reveal>
                );
            })}
        </div>
    );
}

// ========================================
// CONTRAST PAIR — duas colunas, enxutas. Visíveis por padrão (leftAt/rightAt = 0).
// Use leftAt/rightAt > 0 só quando a revelação for o suspense.
// left/right: { kicker, title, text, tone }  — texto curto (≤ ~8 palavras)
// ========================================
export function ContrastPair({ left, right, step = 99, leftAt = 0, rightAt = 0 }) {
    const Card = ({ data, at }) => {
        const c = toneToColor(data.tone);
        return (
            <Reveal step={step} at={at} y={16}>
                <div
                    className="rounded-xl p-6 md:p-7 h-full flex flex-col items-center text-center"
                    style={{ background: colors.surface, border: `1px solid ${c}55`, boxShadow: `inset 0 0 60px ${c}0D` }}
                >
                    {data.kicker && (
                        <span style={{ fontFamily: fonts.mono, fontSize: '0.66rem', color: c, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                            {data.kicker}
                        </span>
                    )}
                    {data.title && (
                        <p style={{ fontFamily: fonts.display, fontSize: '1.7rem', fontWeight: 600, color: colors.textHigh, marginTop: 8, lineHeight: 1.2 }}>
                            {data.title}
                        </p>
                    )}
                    {data.text && (
                        <p style={{ fontFamily: fonts.body, fontSize: '0.98rem', color: colors.textMuted, marginTop: 10, lineHeight: 1.5 }}>
                            {data.text}
                        </p>
                    )}
                </div>
            </Reveal>
        );
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-4xl mx-auto">
            <Card data={left} at={leftAt} />
            <Card data={right} at={rightAt} />
        </div>
    );
}

// ========================================
// BULLETS — lista curta. Visível por padrão (reveal=false).
// Passe reveal e startAt só quando quiser revelar item por beat (suspense).
// items: string[] curtos (≤ ~6 palavras)
// ========================================
export function Bullets({ items, step = 99, startAt = 1, reveal = false, accent, align = 'left', maxWidth = '40rem', size = 'md' }) {
    const c = accent || colors.amber;
    const fs = size === 'lg' ? '1.5rem' : '1.2rem';
    return (
        <ul className="mx-auto flex flex-col gap-4" style={{ maxWidth, listStyle: 'none', padding: 0 }}>
            {items.map((it, i) => (
                <Reveal key={i} step={step} at={reveal ? startAt + i : 0} x={-14} y={0}>
                    <li className="flex items-start gap-3" style={{ textAlign: align }}>
                        <span style={{ color: c, marginTop: fs === '1.5rem' ? 12 : 10, flexShrink: 0, width: 8, height: 8, borderRadius: 999, background: c, display: 'inline-block' }} />
                        <span style={{ fontFamily: fonts.display, fontSize: fs, fontWeight: 500, color: colors.textHigh, lineHeight: 1.4 }}>
                            {it}
                        </span>
                    </li>
                </Reveal>
            ))}
        </ul>
    );
}

// ========================================
// BIG STAT — número/keyword gigante (o visual é o número)
// ========================================
export function BigStat({ value, label, color, size = 'xl' }) {
    const c = color || colors.amber;
    const fs = size === 'xl' ? 'clamp(5rem, 18vw, 12rem)' : 'clamp(3.5rem, 12vw, 8rem)';
    return (
        <div className="flex flex-col items-center">
            <span style={{ fontFamily: fonts.display, fontSize: fs, fontWeight: 700, color: c, lineHeight: 0.9, letterSpacing: '-0.04em' }}>
                {value}
            </span>
            {label && (
                <span className="mt-3" style={{ fontFamily: fonts.mono, fontSize: '0.78rem', color: colors.textMuted, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                    {label}
                </span>
            )}
        </div>
    );
}

// ========================================
// ICEBERG — sintoma (ponta, acima d'água) × problema/causa (massa submersa)
// A massa submersa revela no beat `at`.
// ========================================
export function Iceberg({ symptom, problem, step = 99, at = 1 }) {
    return (
        <div className="relative mx-auto w-full" style={{ maxWidth: 460 }}>
            {/* Acima da linha d'água — o sintoma */}
            <div className="flex flex-col items-center" style={{ paddingBottom: 14 }}>
                <div
                    style={{
                        width: 0, height: 0,
                        borderLeft: '34px solid transparent',
                        borderRight: '34px solid transparent',
                        borderBottom: `46px solid ${colors.red}`,
                        opacity: 0.92,
                        filter: `drop-shadow(0 0 18px ${colors.red}55)`,
                    }}
                />
                <span className="mt-3" style={{ fontFamily: fonts.mono, fontSize: '0.66rem', color: colors.redSoft, letterSpacing: '0.22em' }}>SINTOMA</span>
                <p style={{ fontFamily: fonts.display, fontSize: '1.25rem', fontWeight: 600, color: colors.textHigh, marginTop: 2 }}>{symptom}</p>
            </div>

            {/* Linha d'água */}
            <div style={{ height: 1, width: '100%', borderTop: `1px dashed ${colors.teal}`, opacity: 0.8 }} />

            {/* Abaixo — a massa (problema/causa) */}
            <Reveal step={step} at={at} y={20}>
                <div className="relative flex flex-col items-center" style={{ paddingTop: 18 }}>
                    <div
                        style={{
                            width: 0, height: 0,
                            borderLeft: '130px solid transparent',
                            borderRight: '130px solid transparent',
                            borderTop: `170px solid ${colors.surfaceEdge}`,
                            position: 'absolute', top: 8, zIndex: 0,
                        }}
                    />
                    <div className="relative flex flex-col items-center" style={{ zIndex: 1, paddingTop: 30 }}>
                        <span style={{ fontFamily: fonts.mono, fontSize: '0.66rem', color: colors.amber, letterSpacing: '0.22em' }}>PROBLEMA · CAUSA</span>
                        <p style={{ fontFamily: fonts.display, fontSize: '1.5rem', fontWeight: 600, color: colors.amberSoft, marginTop: 4, textAlign: 'center', maxWidth: 320, lineHeight: 1.2 }}>{problem}</p>
                    </div>
                </div>
            </Reveal>
        </div>
    );
}

// ========================================
// DOORS — porta de duas vias (reversível) × uma via (irreversível)
// A segunda porta revela no beat `rightAt`.
// ========================================
export function Doors({ left, right, step = 99, leftAt = 0, rightAt = 0 }) {
    const Door = ({ data, at }) => {
        const c = toneToColor(data.tone);
        return (
            <Reveal step={step} at={at} y={16}>
                <div
                    className="flex flex-col items-center p-6 md:p-7 h-full"
                    style={{
                        background: colors.surface,
                        border: `1.5px solid ${c}`,
                        borderRadius: '14px 14px 4px 4px',
                        boxShadow: `inset 0 0 70px ${c}12`,
                    }}
                >
                    <span style={{ fontSize: '2.4rem', color: c, lineHeight: 1 }}>{data.arrow}</span>
                    <span className="mt-3" style={{ fontFamily: fonts.mono, fontSize: '0.66rem', color: c, letterSpacing: '0.2em', textTransform: 'uppercase' }}>{data.kicker}</span>
                    <p style={{ fontFamily: fonts.display, fontSize: '1.6rem', fontWeight: 600, color: colors.textHigh, marginTop: 6, textAlign: 'center', lineHeight: 1.2 }}>{data.title}</p>
                    {data.rule && (
                        <p style={{ fontFamily: fonts.body, fontSize: '0.95rem', color: colors.textMuted, marginTop: 10, textAlign: 'center' }}>{data.rule}</p>
                    )}
                </div>
            </Reveal>
        );
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-3xl mx-auto">
            <Door data={left} at={leftAt} />
            <Door data={right} at={rightAt} />
        </div>
    );
}

// ========================================
// PULL QUOTE — citação de impacto (revela por beat)
// ========================================
export function PullQuote({ children, source, tone = 'amber', step, at = 1, size = 'lg' }) {
    const c = toneToColor(tone);
    const sizeMap = { md: 'text-2xl md:text-3xl', lg: 'text-3xl md:text-4xl', xl: 'text-4xl md:text-5xl' };
    return (
        <Reveal step={step} at={at} y={20}>
            <figure className="max-w-3xl mx-auto text-center">
                <blockquote
                    className={sizeMap[size]}
                    style={{ color: colors.textHigh, fontFamily: fonts.display, fontStyle: 'italic', lineHeight: 1.3, fontWeight: 500 }}
                >
                    &ldquo;{children}&rdquo;
                </blockquote>
                {source && (
                    <figcaption className="mt-5 text-xs uppercase" style={{ color: c, fontFamily: fonts.mono, letterSpacing: '0.28em' }}>
                        {source}
                    </figcaption>
                )}
            </figure>
        </Reveal>
    );
}

// ========================================
// QUESTION CARD — pergunta para a turma
// ========================================
export function QuestionCard({ children, label = 'Pergunta para a turma', accent, step, at = 1 }) {
    const c = accent || colors.amber;
    return (
        <Reveal step={step} at={at} y={18}>
            <div
                className="mx-auto p-8 md:p-10 text-center"
                style={{ maxWidth: '40rem', background: `${c}10`, borderTop: `2px solid ${c}`, borderBottom: `2px solid ${c}`, borderRadius: 4 }}
            >
                <p className="text-[11px] uppercase mb-5" style={{ color: c, fontFamily: fonts.mono, letterSpacing: '0.3em' }}>
                    {label}
                </p>
                <p className="text-2xl md:text-3xl" style={{ color: colors.textHigh, fontFamily: fonts.display, fontStyle: 'italic', lineHeight: 1.35 }}>
                    {children}
                </p>
            </div>
        </Reveal>
    );
}

// ========================================
// BREATHE RING — anel respirando (slide da pausa) — sempre anima
// ========================================
export function BreatheRing({ label = '3 segundos', sub = 'respira · observa', color }) {
    const reduce = useReducedMotion();
    const c = color || colors.teal;
    return (
        <div className="relative flex items-center justify-center" style={{ width: 300, height: 300 }}>
            <motion.div
                aria-hidden
                className="absolute rounded-full"
                initial={{ scale: 0.85, opacity: 0.5 }}
                animate={reduce ? { scale: 1, opacity: 0.6 } : { scale: [0.82, 1.06, 0.82], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ width: 260, height: 260, border: `1px solid ${c}`, boxShadow: `0 0 60px ${c}33` }}
            />
            <motion.div
                aria-hidden
                className="absolute rounded-full"
                initial={{ scale: 1, opacity: 0.25 }}
                animate={reduce ? { scale: 1, opacity: 0.3 } : { scale: [1, 1.18, 1], opacity: [0.15, 0.4, 0.15] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ width: 260, height: 260, border: `1px solid ${c}` }}
            />
            <div className="relative text-center" style={{ zIndex: 1 }}>
                <p style={{ fontFamily: fonts.display, fontSize: '2rem', fontWeight: 600, color: colors.textHigh }}>{label}</p>
                <p style={{ fontFamily: fonts.mono, fontSize: '0.75rem', color: c, letterSpacing: '0.25em', marginTop: 6, textTransform: 'uppercase' }}>{sub}</p>
            </div>
        </div>
    );
}
