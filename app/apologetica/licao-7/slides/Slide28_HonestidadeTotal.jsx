// Slide 28 - Honestidade Total
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, WaxSeal, colors } from './shared';

export default function Slide28_HonestidadeTotal() {
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
                    Honestidade Total
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg mb-10 text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    Vamos enfrentar as variantes que os céticos adoram citar
                </motion.p>

                {/* Selo de honestidade */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="mb-8"
                >
                    <WaxSeal icon="⚖️" size="lg" />
                </motion.div>

                {/* Princípio */}
                <ParchmentCard delay={0.6} highlight className="w-full max-w-xl mb-8">
                    <p
                        className="text-xl text-center"
                        style={{ color: colors.parchmentLight }}
                    >
                        <span style={{ color: colors.goldAged }}>Esconder problemas</span> enfraquece.
                        <br />
                        <span style={{ color: colors.goldAged }}>Enfrentar com honestidade</span> fortalece.
                    </p>
                </ParchmentCard>

                {/* Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="w-full max-w-md"
                >
                    <h3
                        className="text-lg font-bold mb-4 text-center"
                        style={{ color: colors.parchmentMid }}
                    >
                        Vamos examinar:
                    </h3>

                    <div className="space-y-3">
                        {[
                            { icon: "📖", text: "João 7:53-8:11 — A mulher adúltera" },
                            { icon: "📜", text: "Marcos 16:9-20 — O final longo" },
                            { icon: "✍️", text: "1 João 5:7-8 — Comma Johanneum" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.1 + i * 0.15 }}
                                className="flex items-center gap-3 p-3 rounded-lg"
                                style={{
                                    background: `${colors.bgSurface}80`,
                                    border: `1px solid ${colors.goldAged}20`
                                }}
                            >
                                <span className="text-xl">{item.icon}</span>
                                <span style={{ color: colors.parchmentLight }}>{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Teaser */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="mt-8 text-sm italic text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    💡 Spoiler: Nenhum desses afeta qualquer doutrina.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
