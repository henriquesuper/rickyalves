'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ExcavationSeal, StratumHeader, EvidenceScale, BrushReveal, StampBadge, colors, quizQuestions } from './shared';

export function Slide10() {
    const steps = [
        { number: 1, text: 'Céticos duvidam' },
        { number: 2, text: 'Evidência encontrada' },
        { number: 3, text: 'Texto confirmado' },
    ];

    const examples = [
        'Hititas — considerados fictícios até 1906',
        'Belsazar — considerado erro até cuneiforme confirmar',
        'Betesda — "simbólico" até encontrarem os 5 pórticos',
    ];

    return (
        <ExcavationWrapper stratum="topsoil">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-8 text-center"
                    style={{ color: colors.textLight }}
                >
                    O PADRÃO QUE SE REPETE
                </motion.h2>

                {/* Fluxo de 3 passos */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-10">
                    {steps.map((step, i) => (
                        <div key={step.number} className="flex items-center gap-3 md:gap-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 + i * 0.2 }}
                                className="rounded-xl p-4 text-center"
                                style={{
                                    background: colors.bgSurface,
                                    border: `1px solid ${colors.excavationAmber}20`,
                                    minWidth: 160,
                                }}
                            >
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold"
                                    style={{
                                        background: colors.excavationAmber,
                                        color: colors.textDark,
                                    }}
                                >
                                    {step.number}
                                </div>
                                <p className="text-sm font-medium" style={{ color: colors.textLight }}>
                                    {step.text}
                                </p>
                            </motion.div>
                            {/* Seta entre passos */}
                            {i < steps.length - 1 && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 + i * 0.2 }}
                                    className="text-xl hidden md:block"
                                    style={{ color: colors.excavationAmber }}
                                >
                                    →
                                </motion.span>
                            )}
                            {i < steps.length - 1 && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 + i * 0.2 }}
                                    className="text-xl md:hidden"
                                    style={{ color: colors.excavationAmber }}
                                >
                                    ↓
                                </motion.span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Exemplos */}
                <div className="space-y-3">
                    {examples.map((ex, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + i * 0.15 }}
                            className="flex items-center gap-3"
                        >
                            <span className="text-sm" style={{ color: colors.fieldGreen }}>✓</span>
                            <p className="text-sm" style={{ color: colors.textMedium }}>
                                {ex}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ExcavationWrapper>
    );
}
