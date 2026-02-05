// Slide 21 - A Contagem Obsessiva
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

export default function Slide21_ContagemObsessiva() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-4 text-center"
                    style={{ color: colors.goldBright }}
                >
                    A Contagem Obsessiva
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg mb-10 text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    Verificação matemática do texto sagrado
                </motion.p>

                {/* O que contavam */}
                <ParchmentCard delay={0.4} highlight className="w-full max-w-xl mb-8">
                    <h3
                        className="text-xl font-bold mb-4 text-center"
                        style={{ color: colors.goldAged }}
                    >
                        🔢 O Que Contavam?
                    </h3>

                    <div className="space-y-4">
                        {[
                            { label: "Todas as letras", example: "Torah = 304.805 letras" },
                            { label: "Todas as palavras", example: "Torah = 79.856 palavras" },
                            { label: "Todos os versículos", example: "Torah = 5.845 versículos" },
                            { label: "A letra do meio de cada livro", example: "Verificação central" },
                            { label: "A palavra do meio de cada livro", example: "Checkpoint matemático" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + i * 0.1 }}
                                className="flex items-center justify-between gap-4"
                            >
                                <span style={{ color: colors.parchmentLight }}>
                                    <span style={{ color: colors.goldAged }}>•</span> {item.label}
                                </span>
                                <span
                                    className="text-xs px-2 py-1 rounded"
                                    style={{
                                        background: `${colors.inkSepia}30`,
                                        color: colors.parchmentMid
                                    }}
                                >
                                    {item.example}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </ParchmentCard>

                {/* O resultado */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="p-6 rounded-xl text-center"
                    style={{
                        background: `linear-gradient(135deg, ${colors.bgSurface}90, ${colors.woodMedium}60)`,
                        border: `2px solid ${colors.goldAged}40`
                    }}
                >
                    <p
                        className="text-2xl font-bold mb-3"
                        style={{ color: colors.goldBright }}
                    >
                        🧮 Se a contagem não batesse...
                    </p>
                    <p
                        className="text-lg"
                        style={{ color: colors.parchmentLight }}
                    >
                        Significava que havia um <span style={{ color: colors.inkBlood }}>erro</span>.
                    </p>
                    <p
                        className="text-sm mt-3"
                        style={{ color: colors.parchmentMid }}
                    >
                        E começavam de novo.
                    </p>
                </motion.div>

                {/* Analogia moderna */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="mt-8 text-sm italic text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    💡 Como um checksum em arquivos digitais — mas feito à mão, há 1.000 anos.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
