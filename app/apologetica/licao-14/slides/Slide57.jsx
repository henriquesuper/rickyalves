'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

const portraits = [
    {
        action: 'Come com pecadores',
        ref: 'Mt 9; Lc 15',
        icon: '🍞',
    },
    {
        action: 'Toca leprosos quando a Lei dizia "afaste-se"',
        ref: 'Mc 1:41',
        icon: '✋',
    },
    {
        action: 'Chora antes de ressuscitar Lázaro — chora com Maria',
        ref: 'Jo 11:35',
        icon: '💧',
    },
    {
        action: 'Cura sem ser pedido',
        ref: 'Jo 5; Lc 7:11-15',
        icon: '✦',
    },
    {
        action: 'Para na multidão para encontrar a mulher que sangrou por 12 anos',
        ref: 'Mc 5:25-34',
        icon: '🛑',
    },
    {
        action: 'Veio "buscar e salvar o que se havia perdido"',
        ref: 'Lc 19:10',
        icon: '🕯',
    },
];

export function Slide57() {
    return (
        <ConvergenceWrapper stratum="pastoral" withGlow glowIntensity={1.0}>
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.coreGlow }}
                >
                    Se Jesus revela o Pai...
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-4xl font-bold mb-3 text-center"
                    style={{
                        color: colors.textStarlight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Que Jesus é esse?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    className="text-center text-sm md:text-base italic mb-8"
                    style={{ color: colors.haloGold }}
                >
                    Seis retratos. Este pode ser o ponto de virada.
                </motion.p> 

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {portraits.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + i * 0.18, type: 'spring', stiffness: 110 }}
                            className="rounded-xl p-4 flex gap-4"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${colors.haloGold}35`,
                                boxShadow: `0 0 20px ${colors.haloGold}15, 0 6px 18px ${colors.bgVoid}80`,
                            }}
                        >
                            <span className="text-3xl shrink-0">{p.icon}</span>
                            <div className="flex-1">
                                <p
                                    className="text-base md:text-lg font-bold mb-1 leading-snug"
                                    style={{
                                        color: colors.textStarlight,
                                        fontFamily: "'Playfair Display', Georgia, serif",
                                    }}
                                >
                                    {p.action}
                                </p>
                                <p className="text-xs font-mono" style={{ color: colors.haloGold }}>
                                    — {p.ref}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="text-center text-sm md:text-base italic mt-8"
                    style={{ color: colors.coreGlow, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Se você quer saber quem Deus é, tem um lugar para olhar.
                </motion.p>
            </div>
        </ConvergenceWrapper>
    );
}
