'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

const negatives = [
    {
        title: 'Não é "Bíblia sem interpretação"',
        detail: 'Impossível — toda leitura é interpretada.',
    },
    {
        title: 'Não é rejeição de toda tradição',
        detail: 'Também impossível — recebemos o cânon através da tradição.',
    },
    {
        title: 'Não é anti-intelectualismo',
        detail: 'Pelo contrário — exige rigor exegético.',
    },
];

export function Slide47() {
    return (
        <ConvergenceWrapper stratum="metodo">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    Sola Scriptura
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
                    Antes da definição — três negativas
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm italic mb-8"
                    style={{ color: colors.warnRose }}
                >
                    O que sola Scriptura NÃO é
                </motion.p>

                <div className="space-y-3">
                    {negatives.map((n, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + i * 0.18 }}
                            className="flex gap-4 p-4 rounded-xl"
                            style={{
                                background: `${colors.warnRose}08`,
                                border: `1px solid ${colors.warnRose}30`,
                            }}
                        >
                            <span
                                className="flex-shrink-0 text-2xl font-bold"
                                style={{ color: colors.warnRose }}
                            >
                                ×
                            </span>
                            <div>
                                <p
                                    className="text-base md:text-lg font-bold mb-1"
                                    style={{
                                        color: colors.textStarlight,
                                        fontFamily: "'Playfair Display', Georgia, serif",
                                    }}
                                >
                                    {n.title}
                                </p>
                                <p className="text-sm leading-relaxed" style={{ color: colors.textMedium }}>
                                    {n.detail}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ConvergenceWrapper>
    );
}
