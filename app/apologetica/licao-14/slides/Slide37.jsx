'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, ConvergenceMap, colors } from './shared';

const vectors = [
    { letter: 'A', name: 'Profecia direta',     color: colors.vectorAmber },
    { letter: 'B', name: 'Tipologia',           color: colors.vectorSea },
    { letter: 'C', name: 'Temas teológicos',    color: colors.vectorPurple },
    { letter: 'D', name: 'Estrutura narrativa', color: colors.vectorBlue },
    { letter: 'E', name: 'Citações e ecos',     color: colors.vectorRose },
];

export function Slide37() {
    return (
        <ConvergenceWrapper stratum="vetores" withGlow glowIntensity={1.3}>
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    Mapa visual
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-3xl font-bold mb-3 text-center"
                    style={{
                        color: colors.textStarlight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Cinco vetores, um centro
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm italic mb-8"
                    style={{ color: colors.haloGold }}
                >
                    Cada categoria opera em registro próprio. Todas convergem no mesmo lugar.
                </motion.p>

                <ConvergenceMap delay={0.7} />

                <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mt-8">
                    {vectors.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8 + i * 0.1 }}
                            className="text-center p-2 rounded-lg"
                            style={{
                                background: `${v.color}10`,
                                border: `1px solid ${v.color}30`,
                            }}
                        >
                            <p
                                className="text-xs font-bold mb-0.5"
                                style={{ color: v.color, fontFamily: "'Oswald', sans-serif" }}
                            >
                                {v.letter}
                            </p>
                            <p className="text-[11px]" style={{ color: colors.textMedium }}>
                                {v.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ConvergenceWrapper>
    );
}
