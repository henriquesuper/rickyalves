'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

const sources = [
    { rank: 'Primária e final', name: 'Escritura',   color: colors.haloGold,    accent: true },
    { rank: 'Secundária',       name: 'Tradição',    color: colors.vectorPurple, accent: false },
    { rank: 'Secundária',       name: 'Experiência', color: colors.vectorBlue,   accent: false },
    { rank: 'Secundária',       name: 'Razão',       color: colors.vectorSea,    accent: false },
];

export function Slide48() {
    return (
        <ConvergenceWrapper stratum="metodo" withGlow glowIntensity={0.7}>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    Definição limpa
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-3xl font-bold mb-2 text-center"
                    style={{
                        color: colors.textStarlight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    O que sola Scriptura É
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.7 }}
                    className="rounded-2xl p-5 md:p-6 mt-6 mb-8"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.haloGold}40`,
                        boxShadow: `0 8px 32px ${colors.bgVoid}80, 0 0 24px ${colors.haloGold}10`,
                    }}
                >
                    <p
                        className="text-base md:text-lg leading-relaxed text-center italic"
                        style={{ color: colors.textStarlight, fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        A Escritura como <span style={{ color: colors.haloGold, fontWeight: 600 }}>autoridade primária e final</span> em matéria de fé e prática, com tradição, experiência e razão como autoridades <span style={{ color: colors.haloGold, fontWeight: 600 }}>secundárias e subordinadas</span>.
                    </p>
                </motion.div>

                <div className="space-y-2.5">
                    {sources.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.3 + i * 0.15 }}
                            className="flex items-center gap-4 p-4 rounded-xl"
                            style={{
                                background: s.accent ? `${s.color}15` : colors.bgSurface,
                                border: `1px solid ${s.color}${s.accent ? '60' : '30'}`,
                                boxShadow: s.accent ? `0 0 18px ${s.color}25` : 'none',
                            }}
                        >
                            <span
                                className="flex-shrink-0 text-xs font-mono px-2.5 py-1 rounded uppercase tracking-wider"
                                style={{
                                    background: `${s.color}20`,
                                    color: s.color,
                                    border: `1px solid ${s.color}40`,
                                    minWidth: 130,
                                    textAlign: 'center',
                                }}
                            >
                                {s.rank}
                            </span>
                            <p
                                className="text-base md:text-lg"
                                style={{
                                    color: s.accent ? colors.haloGold : colors.textStarlight,
                                    fontFamily: "'Playfair Display', Georgia, serif",
                                    fontWeight: s.accent ? 700 : 500,
                                }}
                            >
                                {s.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ConvergenceWrapper>
    );
}
