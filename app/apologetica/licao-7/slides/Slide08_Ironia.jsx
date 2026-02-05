// Slide 08 - A Ironia
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

export default function Slide08_Ironia() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-10 text-center"
                    style={{ color: colors.goldBright }}
                >
                    A Ironia
                </motion.h2>

                {/* A Bíblia tem... */}
                <ParchmentCard delay={0.4} highlight className="mb-8 w-full">
                    <h3
                        className="text-xl font-bold mb-4 text-center"
                        style={{ color: colors.goldAged }}
                    >
                        A Bíblia tem:
                    </h3>
                    <ul className="space-y-3">
                        {[
                            { icon: "📜", text: "MIL vezes mais evidência manuscrita que qualquer outro texto antigo" },
                            { icon: "⏱️", text: "Intervalo temporal dramaticamente menor" },
                            { icon: "🌍", text: "Múltiplas línguas e regiões confirmando o texto" }
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 + index * 0.2 }}
                                className="flex items-start gap-3"
                            >
                                <span className="text-xl">{item.icon}</span>
                                <span style={{ color: colors.parchmentLight }}>{item.text}</span>
                            </motion.li>
                        ))}
                    </ul>
                </ParchmentCard>

                {/* E ainda assim... */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-2xl text-center mb-8"
                    style={{ color: colors.parchmentMid }}
                >
                    E ainda assim é a <span style={{ color: colors.inkBlood }}>mais questionada</span>.
                </motion.p>

                {/* Pergunta para reflexão */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    className="p-6 rounded-xl text-center"
                    style={{
                        background: `${colors.bgSurface}80`,
                        border: `1px dashed ${colors.goldAged}50`
                    }}
                >
                    <p
                        className="text-lg font-bold mb-2"
                        style={{ color: colors.goldAged }}
                    >
                        🤔 PERGUNTA:
                    </p>
                    <p
                        className="text-xl"
                        style={{ color: colors.parchmentLight }}
                    >
                        Por que você acha que o texto com<br />
                        <strong>mais evidência</strong> é o <strong>mais atacado</strong>?
                    </p>
                </motion.div>

                {/* Resposta implícita */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.8 }}
                    className="mt-8 text-sm italic text-center"
                    style={{ color: `${colors.parchmentMid}90` }}
                >
                    💡 Porque as implicações são enormes.
                    <br />Ninguém muda de vida por causa de Platão.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
