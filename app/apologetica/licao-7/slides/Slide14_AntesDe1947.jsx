// Slide 14 - O Problema Antes de 1947
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, ImpactNumber, colors } from './shared';

export default function Slide14_AntesDe1947() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-6 text-center"
                    style={{ color: colors.goldBright }}
                >
                    O Velho Testamento: E Aí?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg mb-10 text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    Até 1947, havia uma dúvida legítima...
                </motion.p>

                {/* Card do problema */}
                <ParchmentCard delay={0.4} danger className="w-full max-w-xl mb-8">
                    <div className="text-center">
                        <p
                            className="text-xl mb-4"
                            style={{ color: colors.parchmentLight }}
                        >
                            O manuscrito hebraico mais antigo que tínhamos era:
                        </p>

                        <div className="flex items-center justify-center gap-6">
                            <div>
                                <p
                                    className="text-sm mb-2"
                                    style={{ color: colors.parchmentMid }}
                                >
                                    Códice de Leningrado
                                </p>
                                <ImpactNumber number="1008" label="d.C." delay={0.8} />
                            </div>
                        </div>
                    </div>
                </ParchmentCard>

                {/* A dúvida */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-center space-y-4"
                >
                    <p
                        className="text-xl"
                        style={{ color: colors.parchmentLight }}
                    >
                        <span style={{ color: colors.inkBlood }}>⚠️ Problema:</span>
                    </p>

                    <p
                        className="text-lg"
                        style={{ color: colors.parchmentMid }}
                    >
                        Isaías escreveu por volta de <strong style={{ color: colors.goldAged }}>700 a.C.</strong>
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6 }}
                        className="p-4 rounded-xl"
                        style={{
                            background: `${colors.inkBlood}15`,
                            border: `1px solid ${colors.inkBlood}30`
                        }}
                    >
                        <p
                            className="text-2xl font-bold"
                            style={{ color: colors.inkBlood }}
                        >
                            ~1.700 anos
                        </p>
                        <p
                            className="text-sm mt-2"
                            style={{ color: colors.parchmentMid }}
                        >
                            de intervalo sem como verificar a precisão da cópia
                        </p>
                    </motion.div>
                </motion.div>

                {/* Pergunta cética legítima */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="mt-8 text-lg italic text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    🤔 "Como saber se não alteraram ao longo de 1.700 anos?"
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
