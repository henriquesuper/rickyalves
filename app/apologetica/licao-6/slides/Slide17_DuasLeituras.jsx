'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

export default function Slide17_DuasLeituras() {
    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-5xl mx-auto px-8 z-10"
            >
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-['Cinzel'] text-4xl md:text-5xl text-center mb-4"
                    style={{
                        color: colors.goldLeaf,
                        textShadow: `0 0 30px ${colors.goldLeaf}30`
                    }}
                >
                    Duas Leituras de Cantares
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-10"
                    style={{ color: colors.parchmentMid }}
                >
                    Ambas são válidas e complementares
                </motion.p>

                {/* Duas colunas */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Alegoria Cristo-Igreja */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <ParchmentCard highlight>
                            <div className="text-center mb-4">
                                <span className="text-5xl">⛪</span>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4" style={{ color: colors.lapis }}>
                                Alegoria: Cristo e a Igreja
                            </h3>
                            <div style={{ color: colors.parchmentLight }}>
                                <p className="mb-4">
                                    A tradição judaica via o noivo como Deus e a noiva como Israel.
                                    Cristãos viram Cristo e a Igreja.
                                </p>
                                <div className="p-3 rounded-lg text-sm italic" style={{ background: `${colors.lapis}15` }}>
                                    <p>
                                        <strong style={{ color: colors.lapis }}>Efésios 5:25-32</strong> —
                                        Paulo compara o casamento ao amor de Cristo pela Igreja:
                                        <em className="block mt-2">
                                            "Este mistério é grande: refiro-me a Cristo e à igreja."
                                        </em>
                                    </p>
                                </div>
                                <p className="mt-4 text-sm" style={{ color: colors.parchmentMid }}>
                                    A linguagem íntima ilustra o amor de Deus pelo Seu povo.
                                </p>
                            </div>
                        </ParchmentCard>
                    </motion.div>

                    {/* Literal: Casamento Santo */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <ParchmentCard highlight>
                            <div className="text-center mb-4">
                                <span className="text-5xl">💍</span>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4" style={{ color: colors.vermillion }}>
                                Literal: Casamento Santo
                            </h3>
                            <div style={{ color: colors.parchmentLight }}>
                                <p className="mb-4">
                                    Deus projetou o casamento para intimidade física e emocional.
                                    Cantares <strong>celebra</strong> isso como bom e sagrado.
                                </p>
                                <div className="p-3 rounded-lg text-sm italic" style={{ background: `${colors.vermillion}15` }}>
                                    <p>
                                        <strong style={{ color: colors.vermillion }}>Hebreus 13:4</strong> —
                                        <em>
                                            "Seja o casamento honrado por todos, e o leito conjugal, sem mácula."
                                        </em>
                                    </p>
                                </div>
                                <p className="mt-4 text-sm" style={{ color: colors.parchmentMid }}>
                                    A Bíblia não envergonha a sexualidade dentro do casamento.
                                </p>
                            </div>
                        </ParchmentCard>
                    </motion.div>
                </div>

                {/* Sobre as metáforas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <ParchmentCard>
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: colors.goldLeaf }}>
                            <span>😄</span> Sobre as Metáforas Estranhas
                        </h3>
                        <div style={{ color: colors.parchmentLight }}>
                            <p className="mb-3">
                                "Seu nariz é como a torre do Líbano", "cabelos como rebanho de cabras"...
                                <strong style={{ color: colors.goldLeaf }}> Contexto cultural!</strong>
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span style={{ color: colors.vermillion }}>▸</span>
                                    <span><strong>Torre do Líbano</strong> = imponência, elegância, não nariz grande!</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span style={{ color: colors.vermillion }}>▸</span>
                                    <span><strong>Cabras descendo a montanha</strong> = ondulação, movimento, brilho</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span style={{ color: colors.vermillion }}>▸</span>
                                    <span><strong>Dentes como ovelhas tosquiadas</strong> = brancos, completos, limpos</span>
                                </li>
                            </ul>
                            <p className="mt-3 text-sm italic" style={{ color: colors.parchmentMid }}>
                                🎯 Regra hermenêutica: entenda o contexto antes de rir das metáforas antigas!
                            </p>
                        </div>
                    </ParchmentCard>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
