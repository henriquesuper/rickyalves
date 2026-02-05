// Slide 23 - A Matemática das Variantes
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

export default function Slide23_MatematicaVariantes() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mb-8 text-center"
                    style={{ color: colors.goldBright }}
                >
                    A Matemática das Variantes
                </motion.h2>

                {/* Exemplo visual */}
                <div className="w-full max-w-2xl mb-8">
                    <ParchmentCard delay={0.3}>
                        <h3
                            className="text-lg font-bold mb-4 text-center"
                            style={{ color: colors.goldAged }}
                        >
                            📊 Exemplo: Um versículo em 10 manuscritos
                        </h3>

                        {/* Manuscritos */}
                        <div className="space-y-2 mb-6">
                            {[
                                { id: "MS 1", text: "Jesus chorou", variant: false },
                                { id: "MS 2", text: "Jesus chorou", variant: false },
                                { id: "MS 3", text: "Jezus chorou", variant: true },
                                { id: "MS 4", text: "Jesus chorou", variant: false },
                                { id: "MS 5", text: "Jesus chorou", variant: false },
                                { id: "MS 6", text: "Jesus chorou", variant: false },
                                { id: "MS 7", text: "Jesús chorou", variant: true },
                                { id: "MS 8", text: "Jesus chorou", variant: false },
                                { id: "MS 9", text: "Jesus chorou", variant: false },
                                { id: "MS 10", text: "Jesus chorou", variant: false }
                            ].map((ms, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.05 }}
                                    className="flex items-center gap-3 text-sm"
                                >
                                    <span
                                        className="w-12 text-right"
                                        style={{ color: colors.parchmentMid }}
                                    >
                                        {ms.id}:
                                    </span>
                                    <span
                                        className={`px-2 py-1 rounded ${ms.variant ? 'font-bold' : ''}`}
                                        style={{
                                            color: ms.variant ? colors.inkBlood : colors.parchmentLight,
                                            background: ms.variant ? `${colors.inkBlood}15` : 'transparent'
                                        }}
                                    >
                                        "{ms.text}"
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </ParchmentCard>
                </div>

                {/* A contagem */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="grid md:grid-cols-2 gap-6 w-full max-w-2xl"
                >
                    <ParchmentCard delay={1.3} danger>
                        <div className="text-center">
                            <p className="text-sm mb-2" style={{ color: colors.parchmentMid }}>
                                Como céticos contam:
                            </p>
                            <p
                                className="text-3xl font-bold"
                                style={{ color: colors.inkBlood }}
                            >
                                2 variantes
                            </p>
                            <p className="text-xs mt-2" style={{ color: colors.parchmentMid }}>
                                (cada diferença é contada)
                            </p>
                        </div>
                    </ParchmentCard>

                    <ParchmentCard delay={1.4} highlight>
                        <div className="text-center">
                            <p className="text-sm mb-2" style={{ color: colors.parchmentMid }}>
                                Mas nós sabemos:
                            </p>
                            <p
                                className="text-3xl font-bold"
                                style={{ color: colors.goldAged }}
                            >
                                8/10 concordam
                            </p>
                            <p className="text-xs mt-2" style={{ color: colors.parchmentMid }}>
                                (o original é óbvio)
                            </p>
                        </div>
                    </ParchmentCard>
                </motion.div>

                {/* Insight */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="mt-8 text-center text-lg"
                    style={{ color: colors.parchmentLight }}
                >
                    💡 <span style={{ color: colors.goldAged }}>Mais manuscritos = mais variantes contadas</span>
                    <br />
                    <span className="text-sm" style={{ color: colors.parchmentMid }}>
                        MAS também = mais certeza sobre o original!
                    </span>
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
