// Slide 29 - A Mulher Adúltera (João 7:53-8:11)
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, ManuscriptFragment, colors } from './shared';

export default function Slide29_MulherAdultera() {
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
                    João 7:53-8:11
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl mb-8 text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    A Mulher Adúltera — "Quem não tem pecado..."
                </motion.p>

                <div className="grid md:grid-cols-2 gap-8 w-full mb-8">
                    {/* A evidência */}
                    <ParchmentCard delay={0.4} danger>
                        <h3
                            className="text-lg font-bold mb-4"
                            style={{ color: colors.inkBlood }}
                        >
                            ⚠️ O Problema
                        </h3>
                        <ul className="space-y-2">
                            {[
                                "Ausente nos manuscritos mais antigos (P66, P75, א, B)",
                                "Ausente em muitos manuscritos latinos, siríacos",
                                "Alguns manuscritos colocam após Lucas 21 ou João 21",
                                "Estilo literário diferente do resto de João"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    className="flex items-start gap-2 text-sm"
                                    style={{ color: colors.parchmentLight }}
                                >
                                    <span style={{ color: colors.inkBlood }}>•</span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </ParchmentCard>

                    {/* A conclusão */}
                    <ParchmentCard delay={0.6} highlight>
                        <h3
                            className="text-lg font-bold mb-4"
                            style={{ color: colors.goldAged }}
                        >
                            ✅ A Conclusão Honesta
                        </h3>
                        <ul className="space-y-2">
                            {[
                                "Provavelmente não fazia parte do original de João",
                                "MAS não significa que a história é falsa",
                                "Pode ser uma tradição oral autêntica",
                                "Claramente antiga (mencionada desde séc. III)"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 + i * 0.1 }}
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

                {/* Impacto doutrinário */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="p-4 rounded-xl text-center w-full max-w-xl"
                    style={{
                        background: `${colors.goldAged}10`,
                        border: `1px solid ${colors.goldAged}30`
                    }}
                >
                    <p style={{ color: colors.parchmentLight }}>
                        🎯 <strong style={{ color: colors.goldAged }}>Impacto Doutrinário:</strong> Zero
                    </p>
                    <p
                        className="text-sm mt-2"
                        style={{ color: colors.parchmentMid }}
                    >
                        Perdão, graça, não julgar — ensinados em dezenas de outras passagens
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
