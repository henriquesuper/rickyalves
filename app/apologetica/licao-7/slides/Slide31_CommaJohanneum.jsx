// Slide 31 - Comma Johanneum (1 João 5:7-8)
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

export default function Slide31_CommaJohanneum() {
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
                    1 João 5:7-8
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl mb-8 text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    O "Comma Johanneum" — A passagem trinitariana
                </motion.p>

                {/* Comparação dos textos */}
                <div className="grid md:grid-cols-2 gap-6 w-full mb-8">
                    <ParchmentCard delay={0.4} danger>
                        <h3
                            className="text-sm font-bold mb-3 text-center"
                            style={{ color: colors.inkBlood }}
                        >
                            📖 Com o Comma (Bíblias Antigas)
                        </h3>
                        <p
                            className="text-sm italic"
                            style={{ color: colors.parchmentLight }}
                        >
                            "Porque três são os que testificam{' '}
                            <span style={{ color: colors.inkBlood, fontWeight: 'bold' }}>
                                no céu: o Pai, a Palavra e o Espírito Santo; e estes três são um.
                                E três são os que testificam na terra:
                            </span>{' '}
                            o Espírito, a água e o sangue..."
                        </p>
                    </ParchmentCard>

                    <ParchmentCard delay={0.5} highlight>
                        <h3
                            className="text-sm font-bold mb-3 text-center"
                            style={{ color: colors.goldAged }}
                        >
                            📜 Sem o Comma (Manuscritos Gregos)
                        </h3>
                        <p
                            className="text-sm italic"
                            style={{ color: colors.parchmentLight }}
                        >
                            "Porque três são os que testificam: o Espírito, a água e o sangue;
                            e os três são unânimes."
                        </p>
                    </ParchmentCard>
                </div>

                {/* Estatísticas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="w-full max-w-xl mb-8"
                >
                    <ParchmentCard>
                        <h3
                            className="text-lg font-bold mb-4 text-center"
                            style={{ color: colors.goldAged }}
                        >
                            📊 Os Números
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                                <p
                                    className="text-3xl font-bold"
                                    style={{ color: colors.inkBlood }}
                                >
                                    ~8
                                </p>
                                <p className="text-sm" style={{ color: colors.parchmentMid }}>
                                    Manuscritos gregos com o Comma
                                </p>
                                <p className="text-xs" style={{ color: colors.parchmentMid }}>
                                    (todos tardios, séc. XIV+)
                                </p>
                            </div>
                            <div>
                                <p
                                    className="text-3xl font-bold"
                                    style={{ color: colors.goldAged }}
                                >
                                    5.800+
                                </p>
                                <p className="text-sm" style={{ color: colors.parchmentMid }}>
                                    Manuscritos gregos SEM o Comma
                                </p>
                            </div>
                        </div>
                    </ParchmentCard>
                </motion.div>

                {/* Conclusão */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
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
                        A Trindade NÃO depende deste versículo — confirmada em Mateus 28:19, João 1, etc.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
