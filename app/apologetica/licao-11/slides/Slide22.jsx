'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, colors } from './shared';

export function Slide22() {
    return (
        <ExcavationWrapper stratum="terracotta">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    533 METROS DE EVIDÊNCIA
                </motion.h2>

                {/* Quote box */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-5 rounded-lg mb-6"
                    style={{
                        background: colors.bgDeep,
                        borderLeft: `3px solid ${colors.excavationAmber}`,
                    }}
                >
                    <p className="text-base italic leading-relaxed" style={{ color: colors.textLight }}>
                        "E quando os escavadores balançaram o machado, cada um em direção ao outro... as águas fluíram da fonte para o reservatório."
                    </p>
                    <p className="text-sm mt-2" style={{ color: colors.textMuted }}>
                        — Inscrição de Siloé
                    </p>
                </motion.div>

                {/* Key points */}
                <div className="space-y-3 mb-6">
                    {[
                        'Duas equipes escavaram de lados opostos e se encontraram no meio',
                        'Engenharia impressionante para o século VIII a.C.',
                        'Construído para preparar Jerusalém para o cerco assírio',
                    ].map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.15 }}
                            className="flex items-start gap-3 p-3 rounded-lg"
                            style={{ background: colors.bgSurface, border: `1px solid ${colors.excavationAmber}10` }}
                        >
                            <span className="text-sm font-bold mt-0.5" style={{ color: colors.excavationAmber }}>
                                {i + 1}.
                            </span>
                            <p className="text-sm" style={{ color: colors.textLight }}>
                                {point}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Highlight */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="text-center"
                >
                    <p className="text-base font-bold" style={{ color: colors.fieldGreen }}>
                        Visitável hoje. 533 metros de pedra escavada à mão.
                    </p>
                </motion.div>
            </div>
        </ExcavationWrapper>
    );
}
