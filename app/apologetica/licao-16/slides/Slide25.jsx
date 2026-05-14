'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

// Frame 1 — Rei coroado em pé
function FrameKing({ delay = 0 }) {
    return (
        <svg viewBox="0 0 120 180" width="100%" height="auto" style={{ display: 'block' }}>
            <motion.g
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay, duration: 1.0 }}
            >
                {/* Coroa */}
                <path d="M 40 22 L 40 10 L 50 18 L 60 5 L 70 18 L 80 10 L 80 22 Z" fill={colors.gold} />
                {/* Cabeça */}
                <circle cx="60" cy="35" r="11" fill={colors.lapisDeep} />
                {/* Corpo / manto */}
                <path d="M 40 50 L 80 50 L 90 170 L 30 170 Z" fill={colors.lapis} />
                {/* Cetro */}
                <line x1="86" y1="55" x2="86" y2="170" stroke={colors.gold} strokeWidth="2.5" />
                {/* Solo */}
                <line x1="10" y1="172" x2="110" y2="172" stroke={colors.inkSoft} strokeWidth="0.6" strokeDasharray="2 3" />
            </motion.g>
        </svg>
    );
}

// Frame 2 — Fera em 4 patas
function FrameBeast({ delay = 0 }) {
    return (
        <svg viewBox="0 0 120 180" width="100%" height="auto" style={{ display: 'block' }}>
            <motion.g
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay, duration: 1.0 }}
            >
                {/* Cabeça baixa (anjmal de quatro patas) */}
                <circle cx="32" cy="115" r="11" fill={colors.wine} />
                {/* Cabelos longos / juba */}
                <path d="M 28 110 L 18 95 L 22 102 L 14 92 L 22 110" fill={colors.wineSoft} stroke={colors.wine} strokeWidth="0.5" />
                {/* Corpo encurvado */}
                <path
                    d="M 32 115 Q 50 95 75 110 Q 90 120 88 140 L 75 142 L 70 140 L 30 142 Z"
                    fill={colors.wine}
                    opacity="0.9"
                />
                {/* Pernas — 4 patas */}
                <line x1="38" y1="142" x2="40" y2="170" stroke={colors.wine} strokeWidth="4" />
                <line x1="52" y1="142" x2="54" y2="170" stroke={colors.wine} strokeWidth="4" />
                <line x1="68" y1="142" x2="68" y2="170" stroke={colors.wine} strokeWidth="4" />
                <line x1="80" y1="142" x2="82" y2="170" stroke={colors.wine} strokeWidth="4" />
                {/* Solo */}
                <line x1="10" y1="172" x2="110" y2="172" stroke={colors.inkSoft} strokeWidth="0.6" strokeDasharray="2 3" />
            </motion.g>
        </svg>
    );
}

// Frame 3 — Homem ajoelhado olhando para cima
function FrameHumbled({ delay = 0 }) {
    return (
        <svg viewBox="0 0 120 180" width="100%" height="auto" style={{ display: 'block' }}>
            <motion.g
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay, duration: 1.0 }}
            >
                {/* Cabeça erguida para o alto */}
                <circle cx="55" cy="55" r="11" fill={colors.gold} />
                {/* Corpo ajoelhado */}
                <path
                    d="M 40 68 L 70 68 L 80 130 L 100 158 L 25 158 L 35 130 Z"
                    fill={colors.gold}
                    opacity="0.95"
                />
                {/* Raios de cima (céu) */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: delay + 0.8, duration: 1.0 }}
                >
                    <line x1="55" y1="10" x2="55" y2="32" stroke={colors.gold} strokeWidth="1" />
                    <line x1="35" y1="18" x2="48" y2="32" stroke={colors.gold} strokeWidth="1" />
                    <line x1="75" y1="18" x2="62" y2="32" stroke={colors.gold} strokeWidth="1" />
                </motion.g>
                {/* Solo */}
                <line x1="10" y1="160" x2="110" y2="160" stroke={colors.inkSoft} strokeWidth="0.6" strokeDasharray="2 3" />
            </motion.g>
        </svg>
    );
}

const frames = [
    { label: 'O rei',             year: 'I',   bg: colors.lapis,    comp: FrameKing },
    { label: 'A fera',            year: 'II',  bg: colors.wine,     comp: FrameBeast },
    { label: 'O rei humilhado',   year: 'III', bg: colors.gold,     comp: FrameHumbled },
];

export function Slide25({ slideIndex = 24 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-6xl mx-auto px-8 py-12">
                <div className="text-center mb-8">
                    <SectionLabel align="center" delay={0.2}>
                        Daniel 4 — sete anos no campo
                    </SectionLabel>
                </div>

                <div className="grid grid-cols-3 gap-4 md:gap-8">
                    {frames.map((f, i) => {
                        const Frame = f.comp;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + i * 1.2, duration: 0.9 }}
                                className="flex flex-col items-center"
                            >
                                <div
                                    className="w-full p-3"
                                    style={{
                                        background: `${colors.parchmentDeep}99`,
                                        borderTop: `2px solid ${f.bg}`,
                                    }}
                                >
                                    <Frame delay={0.9 + i * 1.2} />
                                </div>
                                <p
                                    className="mt-3 text-[10px] uppercase tracking-[0.3em]"
                                    style={{
                                        color: f.bg,
                                        fontFamily: fonts.mono,
                                    }}
                                >
                                    {f.year}
                                </p>
                                <p
                                    className="mt-1 text-sm md:text-base italic"
                                    style={{
                                        color: colors.inkDeep,
                                        fontFamily: fonts.display,
                                        fontWeight: 500,
                                    }}
                                >
                                    {f.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 5.4, duration: 0.9 }}
                    className="mt-10 text-center text-sm md:text-base italic"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        maxWidth: '38rem',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: 1.55,
                    }}
                >
                    O poder absoluto produzindo solidão absoluta.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
