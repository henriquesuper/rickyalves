// Slide 20 - O Que Se Perde, O Que Se Ganha
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, colors } from './shared';

const losses = [
    'Jogos de palavras e trocadilhos',
    'Nuances de tempos verbais',
    'Camadas de significado de uma raiz',
    'Emoções corporais (nariz, útero...)',
];

const gains = [
    'Acessibilidade universal',
    'Preservação do significado central',
    'Tradições interpretativas acumuladas',
    'Possibilidade de comparar versões',
];

export default function Slide20_OQueSePerde() {
    return (
        <SlideWrapper variant="neutral">
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold mb-8 text-center"
                    style={{ color: colors.textLight }}
                >
                    O QUE SE <span style={{ color: colors.alertTerracota }}>PERDE</span> —
                    O QUE SE <span style={{ color: colors.portPrimary }}>GANHA</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl mb-8">
                    <PrismCard delay={0.3} variant="alert">
                        <h3 className="text-lg font-bold mb-3" style={{ color: colors.alertTerracota }}>
                            SE PERDE:
                        </h3>
                        <div className="space-y-2">
                            {losses.map((l, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.15 }}
                                    className="text-sm flex items-center gap-2"
                                    style={{ color: colors.textLight }}
                                >
                                    <span style={{ color: colors.alertTerracota }}>✗</span> {l}
                                </motion.p>
                            ))}
                        </div>
                    </PrismCard>

                    <PrismCard delay={0.5} variant="portuguese">
                        <h3 className="text-lg font-bold mb-3" style={{ color: colors.portPrimary }}>
                            SE GANHA:
                        </h3>
                        <div className="space-y-2">
                            {gains.map((g, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + i * 0.15 }}
                                    className="text-sm flex items-center gap-2"
                                    style={{ color: colors.textLight }}
                                >
                                    <span style={{ color: colors.portPrimary }}>✓</span> {g}
                                </motion.p>
                            ))}
                        </div>
                    </PrismCard>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="text-center"
                >
                    <p className="text-xl font-bold" style={{ color: colors.goldBright }}>
                        A tradução é uma janela.<br />
                        Não é o céu — mas você VÊ o céu.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
