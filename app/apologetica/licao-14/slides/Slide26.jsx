'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, FocusHeader, colors } from './shared';

const vectorPreview = [
    { letter: 'A', label: 'Profecia direta',     color: colors.vectorAmber },
    { letter: 'B', label: 'Tipologia',           color: colors.vectorSea },
    { letter: 'C', label: 'Temas teológicos',    color: colors.vectorPurple },
    { letter: 'D', label: 'Estrutura narrativa', color: colors.vectorBlue },
    { letter: 'E', label: 'Citações e ecos',     color: colors.vectorRose },
];

export function Slide26() {
    return (
        <ConvergenceWrapper stratum="vetores" withGlow glowIntensity={0.9}>
            <div className="w-full max-w-5xl mx-auto px-6 relative z-10">
                <FocusHeader
                    title="Cinco vetores convergem para o centro"
                    subtitle="Identificar as categorias dá rigor à leitura"
                    magnification="Estrato IV — Vetores"
                    icon="◈"
                    delay={0.2}
                />

                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-10">
                    {vectorPreview.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0 + i * 0.13, type: 'spring', stiffness: 130 }}
                            className="rounded-xl p-4 text-center"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${v.color}40`,
                                boxShadow: `0 0 18px ${v.color}25`,
                            }}
                        >
                            <span
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg mb-2"
                                style={{
                                    background: `${v.color}25`,
                                    color: v.color,
                                    border: `1.5px solid ${v.color}60`,
                                    fontFamily: "'Oswald', sans-serif",
                                }}
                            >
                                {v.letter}
                            </span>
                            <p className="text-sm font-bold" style={{ color: colors.textStarlight }}>
                                {v.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.9 }}
                    className="text-center text-sm italic mt-8"
                    style={{ color: colors.textMuted }}
                >
                    O AT aponta para Cristo de formas diferentes — e cada forma tem critérios próprios.
                </motion.p>
            </div>
        </ConvergenceWrapper>
    );
}
