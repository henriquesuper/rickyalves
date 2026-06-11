'use client';
import { motion } from 'framer-motion';

export {
    ParchmentWrapper,
    RomanNumeral,
    SectionLabel,
    BiblicalQuote,
    ProseBlock,
    QuietTitle,
    ThinRule,
    ThreeCardsRow,
    HonestyCard,
    IntertextPair,
    colors,
    fonts,
} from '../../../licao-16/slides/shared';

import { colors, fonts } from '../../../licao-16/slides/shared';

export const TOTAL_SLIDES = 94;

export const ENCONTRO_LABEL = 'Encontro 1 · João 1–6';

export function EncontroNumber({ size = 'md', delay = 0, color, label = ENCONTRO_LABEL }) {
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
            {label}
        </motion.p>
    );
}

export function PrologueFunnel({ delay = 0 }) {
    const levels = [
        { label: 'No princípio · cosmos',           ref: '1.1\u20132',   tone: colors.lapis },
        { label: 'Tudo veio a ser por ele',         ref: '1.3',           tone: colors.lapis },
        { label: 'Vida e luz',                      ref: '1.4\u20135',   tone: colors.lapisSoft },
        { label: 'Uma testemunha · João Batista',   ref: '1.6\u20138',   tone: colors.inkSoft },
        { label: 'A luz veio · não foi recebida',   ref: '1.9\u201311',  tone: colors.wineSoft },
        { label: 'Os que receberam · nasceram',     ref: '1.12\u201313', tone: colors.gold },
        { label: 'O Verbo se fez carne',            ref: '1.14',          tone: colors.gold },
        { label: 'O Filho o tornou conhecido',      ref: '1.18',          tone: colors.gold },
    ];

    return (
        <div className="w-full max-w-3xl mx-auto px-4">
            <div className="relative flex flex-col items-center">
                {levels.map((lv, i) => {
                    const widthPct = 100 - i * 7.5;
                    const isLast = i === levels.length - 1;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: delay + i * 0.55, duration: 0.7 }}
                            className="relative my-1.5 flex items-center justify-between px-5 py-2.5"
                            style={{
                                width: `${widthPct}%`,
                                minWidth: '260px',
                                background: isLast
                                    ? `linear-gradient(to right, ${colors.gold}22, ${colors.goldSoft}33)`
                                    : `${lv.tone}10`,
                                border: `1px solid ${lv.tone}${isLast ? 'AA' : '55'}`,
                                borderRadius: '1px',
                            }}
                        >
                            <span
                                className="text-[11px] md:text-sm italic"
                                style={{
                                    color: isLast ? colors.inkDeep : colors.inkBody,
                                    fontFamily: fonts.display,
                                    fontWeight: isLast ? 600 : 400,
                                    letterSpacing: '0.01em',
                                }}
                            >
                                {lv.label}
                            </span>
                            <span
                                className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase"
                                style={{
                                    color: lv.tone,
                                    fontFamily: fonts.mono,
                                    fontWeight: 600,
                                }}
                            >
                                {lv.ref}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

export function LogosTimeline({ delay = 0 }) {
    const marks = [
        { id: 'heraclito', label: 'Heráclito',   year: 'séc. V a.C.',  note: 'lógos como ordem oculta',                    x: 80 },
        { id: 'estoicos',  label: 'Estoicos',    year: 'séc. III a.C.', note: 'lógos divino · mas impessoal',               x: 240 },
        { id: 'filon',     label: 'Fílon',       year: '~20 a.C.',     note: 'lógos · ponte que protege',                  x: 400 },
        { id: 'joao',      label: 'João',        year: '~90 d.C.',     note: 'o Verbo se fez carne',                       x: 600 },
    ];

    const yLine = 90;
    const ySplit = 170;

    return (
        <div className="w-full max-w-5xl mx-auto px-4">
            <svg viewBox="0 0 720 220" width="100%" height="auto" style={{ display: 'block' }}>
                <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.55 }}
                    transition={{ delay: delay, duration: 1.2 }}
                    x1="40" y1={yLine} x2="600" y2={yLine}
                    stroke={colors.inkSoft}
                    strokeWidth="0.8"
                    strokeDasharray="3 4"
                />

                {marks.map((m, i) => {
                    const isJoao = m.id === 'joao';
                    return (
                        <motion.g
                            key={m.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: delay + 0.6 + i * 0.5, duration: 0.7 }}
                        >
                            <circle
                                cx={m.x}
                                cy={yLine}
                                r={isJoao ? 6 : 4}
                                fill={isJoao ? colors.gold : colors.lapis}
                            />
                            {isJoao && (
                                <circle
                                    cx={m.x}
                                    cy={yLine}
                                    r="11"
                                    fill="none"
                                    stroke={colors.gold}
                                    strokeWidth="0.7"
                                    opacity="0.55"
                                />
                            )}
                            <text
                                x={m.x}
                                y={yLine - 18}
                                fill={colors.inkDeep}
                                fontFamily="Georgia, serif"
                                fontSize="13"
                                fontStyle="italic"
                                textAnchor="middle"
                                fontWeight={isJoao ? 700 : 500}
                            >
                                {m.label}
                            </text>
                            <text
                                x={m.x}
                                y={yLine - 33}
                                fill={colors.inkMuted}
                                fontFamily="Courier New, monospace"
                                fontSize="9"
                                textAnchor="middle"
                                letterSpacing="0.1em"
                            >
                                {m.year.toUpperCase()}
                            </text>
                            <text
                                x={m.x}
                                y={yLine + 22}
                                fill={isJoao ? colors.wine : colors.inkSoft}
                                fontFamily="Georgia, serif"
                                fontSize="10"
                                fontStyle="italic"
                                textAnchor="middle"
                            >
                                {m.note}
                            </text>
                        </motion.g>
                    );
                })}

                {/* A "quebra" do eixo em João — desce pra "se fez carne" */}
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.85 }}
                    transition={{ delay: delay + 3.0, duration: 1.2 }}
                    d={`M 600 ${yLine + 8} Q 605 ${yLine + 50}, 600 ${ySplit}`}
                    fill="none"
                    stroke={colors.gold}
                    strokeWidth="1.4"
                />
                <motion.text
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + 4.0, duration: 0.8 }}
                    x="600"
                    y={ySplit + 18}
                    fill={colors.gold}
                    fontFamily="Georgia, serif"
                    fontSize="13"
                    fontStyle="italic"
                    textAnchor="middle"
                    fontWeight="700"
                >
                    "se fez carne"
                </motion.text>
            </svg>
        </div>
    );
}

export function JacobLadder({ delay = 0 }) {
    const steps = 7;
    const stepHeight = 28;
    const baseY = 280;
    const topY = baseY - steps * stepHeight;
    const baseLeftX = 230;
    const baseRightX = 320;
    const topLeftX = 290;
    const topRightX = 380;

    const angels = [
        { dir: 'up', delay: 0.4 },
        { dir: 'down', delay: 0.9 },
        { dir: 'up', delay: 1.4 },
        { dir: 'down', delay: 1.9 },
    ];

    return (
        <div className="w-full max-w-2xl mx-auto px-4">
            <svg viewBox="0 0 600 320" width="100%" height="auto" style={{ display: 'block' }}>
                {/* Solo */}
                <line x1="30" y1={baseY + 4} x2="570" y2={baseY + 4} stroke={colors.inkSoft} strokeWidth="0.6" strokeDasharray="2 4" />

                {/* "Céu" sutilíssimo */}
                <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ delay: delay, duration: 1.4 }}
                    x1="60" y1={topY - 6} x2="540" y2={topY - 6}
                    stroke={colors.gold}
                    strokeWidth="0.6"
                    strokeDasharray="3 6"
                />

                {/* Trilhos da escada */}
                <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.85 }}
                    transition={{ delay: delay + 0.2, duration: 1.6 }}
                    x1={baseLeftX} y1={baseY} x2={topLeftX} y2={topY}
                    stroke={colors.inkBody}
                    strokeWidth="1.4"
                />
                <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.85 }}
                    transition={{ delay: delay + 0.2, duration: 1.6 }}
                    x1={baseRightX} y1={baseY} x2={topRightX} y2={topY}
                    stroke={colors.inkBody}
                    strokeWidth="1.4"
                />

                {/* Degraus */}
                {Array.from({ length: steps }, (_, i) => {
                    const t = (i + 1) / steps;
                    const y = baseY - (i + 1) * stepHeight;
                    const xL = baseLeftX + (topLeftX - baseLeftX) * t;
                    const xR = baseRightX + (topRightX - baseRightX) * t;
                    return (
                        <motion.line
                            key={i}
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.85 }}
                            transition={{ delay: delay + 0.6 + i * 0.12, duration: 0.6 }}
                            x1={xL} y1={y} x2={xR} y2={y}
                            stroke={colors.inkBody}
                            strokeWidth="1.0"
                        />
                    );
                })}

                {/* Anjos */}
                {angels.map((a, i) => {
                    const xCenter = (baseLeftX + baseRightX) / 2 + (a.dir === 'up' ? 22 : -22) + (i * 4 - 6);
                    const startY = a.dir === 'up' ? baseY - 8 : topY + 6;
                    const endY = a.dir === 'up' ? topY + 6 : baseY - 8;
                    return (
                        <motion.g
                            key={i}
                            initial={{ opacity: 0, y: startY }}
                            animate={{ opacity: [0, 0.85, 0], y: endY }}
                            transition={{
                                delay: delay + a.delay + 1.6,
                                duration: 4.5,
                                repeat: Infinity,
                                repeatDelay: 1.5,
                                times: [0, 0.5, 1],
                            }}
                        >
                            <circle cx={xCenter} cy="0" r="3.2" fill={colors.gold} opacity="0.9" />
                            <path
                                d="M -7 4 L 7 4 L 9 18 L -9 18 Z"
                                transform={`translate(${xCenter} 0)`}
                                fill={colors.gold}
                                opacity="0.7"
                            />
                        </motion.g>
                    );
                })}

                {/* Eixo central — Filho do Homem */}
                <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.55 }}
                    transition={{ delay: delay + 2.4, duration: 1.2 }}
                    x1="300" y1={topY - 4} x2="300" y2={baseY + 4}
                    stroke={colors.gold}
                    strokeWidth="1.0"
                    strokeDasharray="2 3"
                />
                <motion.text
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + 3.0, duration: 0.9 }}
                    x="300"
                    y={baseY + 28}
                    fill={colors.wine}
                    fontFamily="Georgia, serif"
                    fontSize="14"
                    fontStyle="italic"
                    textAnchor="middle"
                    fontWeight="700"
                >
                    Filho do Homem
                </motion.text>

                <motion.text
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: delay + 0.4, duration: 0.9 }}
                    x="80"
                    y="40"
                    fill={colors.inkMuted}
                    fontFamily="Courier New, monospace"
                    fontSize="9"
                    letterSpacing="0.25em"
                >
                    GN 28.12 · JO 1.51
                </motion.text>
            </svg>
        </div>
    );
}

export function TabernacleThread({ delay = 0 }) {
    const panels = [
        {
            label: 'Tabernáculo',
            ref: 'Êxodo 40',
            verb: 'shakhan',
            text: 'A glória encheu a tenda no meio do povo.',
            tone: colors.lapis,
        },
        {
            label: 'Carne',
            ref: 'João 1.14',
            verb: 'eskēnōsen',
            text: 'O Verbo armou tenda entre nós.',
            tone: colors.gold,
        },
        {
            label: 'Corpo',
            ref: 'João 2.21',
            verb: 'naós',
            text: 'Ele falava do templo do seu corpo.',
            tone: colors.wine,
            cracked: true,
        },
    ];

    const items = [];
    panels.forEach((p, i) => {
        items.push(
            <motion.div
                key={`p-${i}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delay + i * 0.7, duration: 0.85 }}
                className="relative p-5"
                style={{
                    background: `${p.tone}12`,
                    border: `1px solid ${p.tone}66`,
                    minHeight: '160px',
                }}
            >
                <p
                    className="text-[10px] uppercase tracking-[0.35em] mb-2"
                    style={{
                        color: p.tone,
                        fontFamily: fonts.body,
                        fontVariant: 'small-caps',
                        fontWeight: 600,
                    }}
                >
                    {p.ref}
                </p>
                <p
                    className="text-xl md:text-2xl mb-1"
                    style={{
                        color: colors.inkDeep,
                        fontFamily: fonts.display,
                        fontWeight: 600,
                        letterSpacing: '-0.01em',
                    }}
                >
                    {p.label}
                </p>
                <p
                    className="text-xs italic mb-3"
                    style={{
                        color: p.tone,
                        fontFamily: fonts.accent,
                    }}
                >
                    {p.verb}
                </p>
                <p
                    className="text-sm md:text-base italic"
                    style={{
                        color: colors.inkBody,
                        fontFamily: fonts.display,
                        lineHeight: 1.5,
                    }}
                >
                    "{p.text}"
                </p>
                {p.cracked && (
                    <motion.svg
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.55 }}
                        transition={{ delay: delay + i * 0.7 + 1.2, duration: 1.0 }}
                        className="absolute inset-0 pointer-events-none"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M 25 0 L 35 30 L 25 55 L 40 80 L 30 100"
                            stroke={colors.wineDeep}
                            strokeWidth="0.4"
                            fill="none"
                            strokeDasharray="0.6 0.8"
                        />
                    </motion.svg>
                )}
            </motion.div>
        );
        if (i < panels.length - 1) {
            items.push(
                <motion.div
                    key={`c-${i}`}
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.7, scaleX: 1 }}
                    transition={{ delay: delay + i * 0.7 + 0.4, duration: 0.7 }}
                    className="hidden md:block h-px"
                    style={{
                        width: '40px',
                        background: `linear-gradient(to right, ${p.tone}, ${panels[i + 1].tone})`,
                    }}
                />
            );
        }
    });

    return (
        <div className="w-full max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3">
                {items}
            </div>
        </div>
    );
}

export function GreekGloss({
    word,
    transliteration,
    gloss,
    note,
    align = 'center',
    tone = 'lapis',
    size = 'md',
    delay = 0,
    dark = false,
}) {
    const isDark = dark;
    const toneColor = isDark
        ? {
            lapis: colors.lapisSoft,
            wine:  colors.wineSoft,
            gold:  colors.goldFaint,
            ink:   colors.parchment,
          }[tone] || colors.goldFaint
        : {
            lapis: colors.lapis,
            wine:  colors.wine,
            gold:  colors.gold,
            ink:   colors.inkDeep,
          }[tone] || colors.lapis;

    const sizeMap = {
        sm: { word: 'text-2xl md:text-3xl',  gloss: 'text-base md:text-lg' },
        md: { word: 'text-3xl md:text-5xl',  gloss: 'text-lg md:text-xl' },
        lg: { word: 'text-4xl md:text-6xl',  gloss: 'text-xl md:text-2xl' },
    };
    const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
    const sz = sizeMap[size] || sizeMap.md;

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.9, ease: 'easeOut' }}
            className={`${alignClass} max-w-2xl mx-auto`}
        >
            <p
                className={`${sz.word} italic`}
                style={{
                    color: toneColor,
                    fontFamily: fonts.display,
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                }}
            >
                {word}
            </p>
            {transliteration && (
                <p
                    className="mt-2 text-xs tracking-[0.4em] uppercase"
                    style={{
                        color: isDark ? colors.parchmentEdge : colors.inkMuted,
                        fontFamily: fonts.mono,
                    }}
                >
                    {transliteration}
                </p>
            )}
            {gloss && (
                <p
                    className={`mt-5 ${sz.gloss} italic`}
                    style={{
                        color: isDark ? colors.parchment : colors.inkBody,
                        fontFamily: fonts.display,
                        lineHeight: 1.45,
                    }}
                >
                    {gloss}
                </p>
            )}
            {note && (
                <p
                    className="mt-4 text-xs md:text-sm"
                    style={{
                        color: isDark ? colors.inkMuted : colors.inkSoft,
                        fontFamily: fonts.body,
                        lineHeight: 1.55,
                        letterSpacing: '0.01em',
                    }}
                >
                    {note}
                </p>
            )}
        </motion.div>
    );
}

export function EuSouProgress({ lit = 1, delay = 0.5 }) {
    const labels = [
        "Pão da Vida",
        "Luz do Mundo",
        "Porta",
        "Bom Pastor",
        "Ressurreição e Vida",
        "Caminho, Verdade e Vida",
        "Videira Verdadeira"
    ];
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-12 mb-4"
        >
            {labels.map((lbl, idx) => {
                const isLit = idx + 1 <= lit;
                return (
                    <div
                        key={idx}
                        className="flex flex-col items-center"
                        style={{ opacity: isLit ? 1 : 0.3 }}
                    >
                        <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-500"
                            style={{
                                background: isLit ? colors.gold : 'transparent',
                                border: `1px solid ${isLit ? colors.gold : colors.inkSoft}`,
                                color: isLit ? colors.parchment : colors.inkSoft,
                                boxShadow: isLit ? `0 0 8px ${colors.gold}88` : 'none',
                            }}
                        >
                            {idx + 1}
                        </div>
                        <span
                            className="text-[8px] uppercase tracking-wider mt-1.5 text-center font-medium block max-w-[70px] leading-tight"
                            style={{
                                color: isLit ? colors.gold : colors.inkMuted,
                                fontFamily: fonts.mono,
                            }}
                        >
                            {lbl}
                        </span>
                    </div>
                );
            })}
        </motion.div>
    );
}

