// Slide 17 - O Experimento Não Planejado
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

export default function Slide17_ExperimentoNaoPlanejado() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-center"
                    style={{ color: colors.goldBright }}
                >
                    O Experimento Não Planejado
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg mb-10 text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    Uma comparação científica acidental
                </motion.p>

                {/* Comparação lado a lado */}
                <div className="grid md:grid-cols-2 gap-6 w-full mb-8">
                    {/* Manuscrito antigo */}
                    <ParchmentCard delay={0.4}>
                        <div className="text-center space-y-3">
                            <span className="text-4xl">📜</span>
                            <h3
                                className="text-xl font-bold"
                                style={{ color: colors.goldAged }}
                            >
                                Rolo de Isaías (Qumran)
                            </h3>
                            <div
                                className="text-4xl font-bold"
                                style={{ color: colors.parchmentLight }}
                            >
                                ~125 a.C.
                            </div>
                            <p
                                className="text-sm"
                                style={{ color: colors.parchmentMid }}
                            >
                                Escondido em caverna por 2.000 anos
                            </p>
                        </div>
                    </ParchmentCard>

                    {/* VS */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 hidden md:flex items-center justify-center"
                    >
                        <span
                            className="text-2xl font-bold px-4 py-2 rounded-xl"
                            style={{
                                background: colors.bgSurface,
                                color: colors.goldAged,
                                border: `1px solid ${colors.goldAged}50`
                            }}
                        >
                            VS
                        </span>
                    </motion.div>

                    {/* Manuscrito medieval */}
                    <ParchmentCard delay={0.5}>
                        <div className="text-center space-y-3">
                            <span className="text-4xl">📖</span>
                            <h3
                                className="text-xl font-bold"
                                style={{ color: colors.goldAged }}
                            >
                                Códice de Leningrado
                            </h3>
                            <div
                                className="text-4xl font-bold"
                                style={{ color: colors.parchmentLight }}
                            >
                                1008 d.C.
                            </div>
                            <p
                                className="text-sm"
                                style={{ color: colors.parchmentMid }}
                            >
                                Copiado através da tradição massorética
                            </p>
                        </div>
                    </ParchmentCard>
                </div>

                {/* Intervalo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mb-8 p-6 rounded-xl text-center"
                    style={{
                        background: `linear-gradient(135deg, ${colors.bgSurface}90, ${colors.woodMedium}60)`,
                        border: `2px solid ${colors.goldAged}40`
                    }}
                >
                    <p
                        className="text-lg mb-2"
                        style={{ color: colors.parchmentMid }}
                    >
                        Intervalo de transmissão:
                    </p>
                    <span
                        className="text-5xl md:text-6xl font-bold"
                        style={{
                            color: colors.goldBright,
                            textShadow: `0 0 30px ${colors.goldAged}40`
                        }}
                    >
                        1.133 anos
                    </span>
                </motion.div>

                {/* Resultado */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    <ParchmentCard highlight>
                        <p
                            className="text-center text-lg"
                            style={{ color: colors.parchmentLight }}
                        >
                            🔬 <strong style={{ color: colors.goldAged }}>Resultado:</strong> Concordância extraordinária!
                        </p>
                        <p
                            className="text-center text-sm mt-2"
                            style={{ color: colors.parchmentMid }}
                        >
                            Especialmente Isaías 53 — quase idêntico palavra por palavra.
                        </p>
                    </ParchmentCard>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
