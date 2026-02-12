// Slide 32 - Encerramento — A Cadeia de Fidelidade
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, WaxSeal, ScribeWriting, colors } from './shared';

const chain = [
    { text: 'DEUS inspirou', color: colors.goldBright },
    { text: 'HUMANOS escreveram em Hebraico / Grego', color: colors.hebrewPrimary },
    { text: 'ESCRIBAS copiaram fielmente', color: colors.goldAged },
    { text: 'MANUSCRITOS sobreviveram (Lição 7 ✓)', color: colors.greekPrimary },
    { text: 'TRADUTORES verteram para o português', color: colors.portPrimary },
    { text: 'VOCÊ lê — com confiança.', color: colors.goldBright },
];

export default function Slide32_Encerramento() {
    return (
        <SlideWrapper variant="golden">
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto text-center">
                <WaxSeal number={8} size="md" delay={0.2} className="mb-6" />

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-4xl font-bold mb-8"
                    style={{ color: colors.textLight }}
                >
                    A CADEIA DE <span style={{ color: colors.goldBright }}>FIDELIDADE</span>
                </motion.h2>

                <div className="space-y-2 mb-8">
                    {chain.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.2 }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-8 h-8 rounded-full flex items-center justify-center"
                                style={{
                                    background: `${c.color}20`,
                                    border: `1px solid ${c.color}60`
                                }}
                            >
                                <span className="text-xs font-bold" style={{ color: c.color }}>{i + 1}</span>
                            </div>
                            <span className="text-base" style={{ color: c.color }}>{c.text}</span>
                            {i < chain.length - 1 && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.5 }}
                                    transition={{ delay: 0.7 + i * 0.2 }}
                                    className="text-xs"
                                    style={{ color: colors.textMedium }}
                                >→</motion.span>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Citação final */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.0 }}
                    className="mb-6"
                >
                    <ScribeWriting
                        text="«A tradução é uma janela. Não é o céu — mas por ela, você vê o céu.»"
                        className="text-xl md:text-2xl"
                    />
                </motion.div>

                {/* Preview da próxima lição */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="p-4 rounded-lg"
                    style={{
                        background: `${colors.textLight}05`,
                        border: `1px solid ${colors.goldAged}20`
                    }}
                >
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: colors.goldAged }}>
                        Próxima lição
                    </p>
                    <p className="text-sm" style={{ color: colors.textMedium }}>
                        Lição 9 — A Bíblia e a Ciência
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
