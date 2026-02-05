// Slide 18 - O Impacto
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, WaxSeal, colors } from './shared';

export default function Slide18_Impacto() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-8 text-center"
                    style={{ color: colors.goldBright }}
                >
                    O Impacto da Descoberta
                </motion.h2>

                {/* O que foi provado */}
                <ParchmentCard delay={0.3} highlight className="w-full max-w-2xl mb-8">
                    <h3
                        className="text-xl font-bold mb-4 text-center"
                        style={{ color: colors.goldAged }}
                    >
                        🔬 Um Experimento Científico Acidental
                    </h3>

                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-3"
                        >
                            <span className="text-xl">🧪</span>
                            <div>
                                <p style={{ color: colors.parchmentLight }}>
                                    <strong>Hipótese cética:</strong> "O texto foi alterado ao longo dos séculos"
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex items-center gap-3"
                        >
                            <span className="text-xl">📊</span>
                            <div>
                                <p style={{ color: colors.parchmentLight }}>
                                    <strong>Teste:</strong> Comparar manuscritos separados por 1.133 anos
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 }}
                            className="flex items-center gap-3"
                        >
                            <span className="text-xl">✅</span>
                            <div>
                                <p style={{ color: colors.parchmentLight }}>
                                    <strong style={{ color: colors.goldAged }}>Resultado:</strong>{' '}
                                    Concordância notável — texto preservado com fidelidade
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </ParchmentCard>

                {/* Citação acadêmica */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="p-6 rounded-xl mb-8"
                    style={{
                        background: `${colors.bgSurface}80`,
                        borderLeft: `4px solid ${colors.goldAged}`
                    }}
                >
                    <p
                        className="text-lg italic"
                        style={{ color: colors.parchmentLight }}
                    >
                        "O texto hebraico foi transmitido através dos séculos com uma fidelidade
                        que não tem paralelo na literatura antiga."
                    </p>
                    <p
                        className="text-sm mt-3"
                        style={{ color: colors.parchmentMid }}
                    >
                        — Gleason Archer, <em>A Survey of Old Testament Introduction</em>
                    </p>
                </motion.div>

                {/* Conclusão */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="flex items-center gap-4"
                >
                    <WaxSeal icon="📜" size="sm" delay={1.7} />
                    <p
                        className="text-lg"
                        style={{ color: colors.parchmentLight }}
                    >
                        <span style={{ color: colors.inkBlood }}>Resultado devastador</span> para o ceticismo
                        sobre a preservação do Antigo Testamento
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
