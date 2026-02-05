// Slide 32 - Por Que Bíblias Diferentes?
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

export default function Slide32_PorQueBibliasDiferentes() {
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
                    Por Que Bíblias Diferentes?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg mb-10 text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    "Por que minha Bíblia não tem esse versículo?"
                </motion.p>

                {/* Comparação */}
                <div className="grid md:grid-cols-2 gap-8 w-full mb-8">
                    <ParchmentCard delay={0.4}>
                        <h3
                            className="text-lg font-bold mb-4 text-center"
                            style={{ color: colors.parchmentMid }}
                        >
                            📖 Bíblias Antigas
                        </h3>
                        <p className="text-sm mb-3" style={{ color: colors.parchmentMid }}>
                            (King James, Almeida Corrigida)
                        </p>
                        <ul className="space-y-2">
                            {[
                                "Baseadas no Textus Receptus (1516+)",
                                "Usavam manuscritos mais recentes",
                                "Erasmo tinha ~6 manuscritos disponíveis"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    className="flex items-start gap-2 text-sm"
                                    style={{ color: colors.parchmentLight }}
                                >
                                    <span>•</span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </ParchmentCard>

                    <ParchmentCard delay={0.5} highlight>
                        <h3
                            className="text-lg font-bold mb-4 text-center"
                            style={{ color: colors.goldAged }}
                        >
                            📜 Bíblias Modernas
                        </h3>
                        <p className="text-sm mb-3" style={{ color: colors.parchmentMid }}>
                            (NVI, NAA, ESV, NIV)
                        </p>
                        <ul className="space-y-2">
                            {[
                                "Baseadas em manuscritos mais antigos",
                                "Usam P75, Sinaítico, Vaticano...",
                                "Temos 25.000+ manuscritos disponíveis"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + i * 0.1 }}
                                    className="flex items-start gap-2 text-sm"
                                    style={{ color: colors.parchmentLight }}
                                >
                                    <span style={{ color: colors.goldAged }}>•</span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </ParchmentCard>
                </div>

                {/* Explicação */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="w-full max-w-xl"
                >
                    <ParchmentCard highlight>
                        <div className="text-center">
                            <p
                                className="text-lg mb-3"
                                style={{ color: colors.parchmentLight }}
                            >
                                💡 <strong style={{ color: colors.goldAged }}>Isso é bom, não ruim!</strong>
                            </p>
                            <p
                                className="text-sm"
                                style={{ color: colors.parchmentMid }}
                            >
                                Significa que estamos sendo{' '}
                                <span style={{ color: colors.goldAged }}>honestos e transparentes</span> sobre
                                o que os manuscritos mais antigos dizem.
                            </p>
                        </div>
                    </ParchmentCard>
                </motion.div>

                {/* Nota final */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="mt-6 text-sm text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    Notas de rodapé modernas: "Alguns manuscritos dizem..." — transparência total!
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
