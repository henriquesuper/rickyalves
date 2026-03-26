'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, colors } from './shared';

export function Slide45() {
    const reveals = [
        { icon: '🎵', text: 'Culto a Cristo como divindade' },
        { icon: '📅', text: 'Reuniões regulares antes do amanhecer' },
        { icon: '⚖️', text: 'Código ético rigoroso' },
        { icon: '🍞', text: 'Refeição comunitária (eucaristia?)' },
    ];

    return (
        <ExcavationWrapper stratum="papyrus">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-6"
                    style={{ color: colors.textLight }}
                >
                    O QUE ELE INADVERTIDAMENTE CONFIRMA
                </motion.h2>

                {/* 2x2 grid of cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {reveals.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + i * 0.2 }}
                            className="p-4 rounded-xl flex items-center gap-3"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${colors.excavationAmber}20`,
                            }}
                        >
                            <span className="text-2xl">{item.icon}</span>
                            <p className="text-sm font-medium" style={{ color: colors.textLight }}>
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-sm mb-5"
                    style={{ color: colors.textMedium }}
                >
                    112 d.C. = apenas ~80 anos após a crucificação. Comunidades cristãs organizadas no interior da Turquia.
                </motion.p>

                {/* Insight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="p-4 rounded-xl"
                    style={{ background: `${colors.excavationAmber}12`, border: `1px solid ${colors.excavationAmber}30` }}
                >
                    <p className="text-sm" style={{ color: colors.excavationAmber }}>
                        O rápido crescimento de um movimento que começou com um homem crucificado na periferia do Império requer explicação.
                    </p>
                </motion.div>
            </div>
        </ExcavationWrapper>
    );
}
