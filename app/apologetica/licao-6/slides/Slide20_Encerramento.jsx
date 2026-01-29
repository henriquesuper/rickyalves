'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, WaxSeal, ParchmentCard, colors } from './shared';

export default function Slide20_Encerramento() {
    const keyPoints = [
        "O cânon foi RECONHECIDO, não criado por votação",
        "22 ou 39 livros = mesmo conteúdo, contagem diferente",
        "Jesus citava 'de Abel a Zacarias' — o cânon hebraico",
        "Diferenças católico/protestantes refletem critérios, não erros",
        "Cantares celebra intimidade no casamento como dom de Deus"
    ];

    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-4xl mx-auto px-8 z-10 text-center"
            >
                {/* Selo */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="mb-8 flex justify-center"
                >
                    <WaxSeal icon="✓" size="lg" />
                </motion.div>

                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="font-['Cinzel'] text-4xl md:text-5xl mb-4"
                    style={{
                        color: colors.goldLeaf,
                        textShadow: `0 0 30px ${colors.goldLeaf}30`
                    }}
                >
                    Encerramento
                </motion.h2>

                {/* Resumo dos pontos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-8"
                >
                    <ParchmentCard>
                        <h3 className="text-lg font-bold mb-4" style={{ color: colors.goldLeaf }}>
                            📜 O Que Aprendemos
                        </h3>
                        <div className="space-y-2">
                            {keyPoints.map((point, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 + i * 0.1 }}
                                    className="flex items-start gap-2 text-left"
                                    style={{ color: colors.parchmentLight }}
                                >
                                    <span style={{ color: colors.goldLeaf }}>✓</span>
                                    <span>{point}</span>
                                </motion.div>
                            ))}
                        </div>
                    </ParchmentCard>
                </motion.div>

                {/* Próxima lição */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="mb-8"
                >
                    <ParchmentCard highlight>
                        <p style={{ color: colors.parchmentLight }}>
                            <strong style={{ color: colors.goldLeaf }}>Próxima Lição:</strong>
                            <span className="block mt-2 text-lg">
                                Lição 7 — Métodos de Interpretação Bíblica
                            </span>
                        </p>
                    </ParchmentCard>
                </motion.div>

                {/* Oração */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <p className="text-xl italic" style={{ color: colors.parchmentMid }}>
                        🙏 Vamos orar
                    </p>
                </motion.div>

                {/* Decoração inferior */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.7, duration: 1 }}
                    className="mt-8 h-0.5 w-48 mx-auto"
                    style={{ background: `linear-gradient(90deg, transparent, ${colors.goldLeaf}, transparent)` }}
                />
            </motion.div>
        </SlideWrapper>
    );
}
