// Slide 36 - Encerramento
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, WaxSeal, colors } from './shared';

export default function Slide36_Encerramento() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto min-h-[80vh]">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-8 text-center"
                    style={{ color: colors.goldBright }}
                >
                    Encerramento
                </motion.h2>

                {/* O que aprendemos */}
                <ParchmentCard delay={0.3} highlight className="w-full max-w-xl mb-8">
                    <h3
                        className="text-lg font-bold mb-4 text-center"
                        style={{ color: colors.goldAged }}
                    >
                        📚 O Que Aprendemos Hoje
                    </h3>
                    <ul className="space-y-2">
                        {[
                            "Não temos originais — mas isso é normal para textos antigos",
                            "A Bíblia tem MIL vezes mais evidência que qualquer outro texto",
                            "Variantes existem, mas 0% afetam doutrinas",
                            "Mar Morto confirmou a preservação do AT",
                            "Podemos confiar no que temos"
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="flex items-start gap-2 text-sm"
                                style={{ color: colors.parchmentLight }}
                            >
                                <span style={{ color: colors.goldAged }}>✓</span>
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </ParchmentCard>

                {/* Preview próxima lição */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="p-4 rounded-xl text-center mb-8"
                    style={{
                        background: `${colors.bgSurface}80`,
                        border: `1px dashed ${colors.goldAged}40`
                    }}
                >
                    <p className="text-sm mb-2" style={{ color: colors.parchmentMid }}>
                        🔮 Próxima Lição:
                    </p>
                    <p
                        className="text-xl font-bold"
                        style={{ color: colors.parchmentLight }}
                    >
                        Lição 8 — Tradução Bíblica
                    </p>
                    <p className="text-sm mt-2" style={{ color: colors.parchmentMid }}>
                        Como os manuscritos se tornaram a Bíblia que você lê hoje?
                    </p>
                </motion.div>

                {/* Selo final */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.4, type: "spring" }}
                    className="mb-6"
                >
                    <WaxSeal icon="🙏" size="lg" />
                </motion.div>

                {/* Oração */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="text-lg italic text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    Vamos encerrar em oração...
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
