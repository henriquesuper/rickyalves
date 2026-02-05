// Slide 30 - O Final de Marcos (16:9-20)
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

export default function Slide30_FinalMarcos() {
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
                    Marcos 16:9-20
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl mb-8 text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    O Final Longo — aparições e comissão
                </motion.p>

                {/* Visual do problema */}
                <div className="w-full max-w-2xl mb-8">
                    <ParchmentCard delay={0.4}>
                        <h3
                            className="text-lg font-bold mb-4 text-center"
                            style={{ color: colors.goldAged }}
                        >
                            📜 O Que Sabemos
                        </h3>

                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="p-3 rounded-lg"
                                style={{ background: `${colors.bgSurface}60` }}
                            >
                                <p className="text-sm" style={{ color: colors.parchmentMid }}>
                                    Marcos 16:8 original:
                                </p>
                                <p
                                    className="italic"
                                    style={{ color: colors.parchmentLight }}
                                >
                                    "...saíram correndo do sepulcro, tomadas de espanto e medo.
                                    E não disseram nada a ninguém, <span style={{ color: colors.inkBlood }}>porque tinham medo</span>."
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="text-center"
                            >
                                <span className="text-2xl">🤔</span>
                                <p
                                    className="text-sm mt-2"
                                    style={{ color: colors.parchmentMid }}
                                >
                                    Parece um final abrupto, não?
                                </p>
                            </motion.div>
                        </div>
                    </ParchmentCard>
                </div>

                {/* Evidências e conclusão */}
                <div className="grid md:grid-cols-2 gap-6 w-full mb-8">
                    <ParchmentCard delay={0.9} danger>
                        <h3
                            className="text-sm font-bold mb-3"
                            style={{ color: colors.inkBlood }}
                        >
                            ⚠️ Evidências Contra:
                        </h3>
                        <ul className="space-y-1 text-sm">
                            {[
                                "Ausente em א e B",
                                "Estilo e vocabulário diferentes",
                                "Algumas versões têm um final 'curto'"
                            ].map((item, i) => (
                                <li key={i} style={{ color: colors.parchmentLight }}>
                                    • {item}
                                </li>
                            ))}
                        </ul>
                    </ParchmentCard>

                    <ParchmentCard delay={1} highlight>
                        <h3
                            className="text-sm font-bold mb-3"
                            style={{ color: colors.goldAged }}
                        >
                            ✅ Mas Observe:
                        </h3>
                        <ul className="space-y-1 text-sm">
                            {[
                                "A RESSURREIÇÃO está no v.6!",
                                "Aparições em Mateus, Lucas, João, 1 Cor 15",
                                "Grande Comissão em Mateus 28"
                            ].map((item, i) => (
                                <li key={i} style={{ color: colors.parchmentLight }}>
                                    • {item}
                                </li>
                            ))}
                        </ul>
                    </ParchmentCard>
                </div>

                {/* Impacto */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="p-4 rounded-xl text-center"
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
                        Ressurreição e Grande Comissão confirmadas em múltiplos lugares
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
