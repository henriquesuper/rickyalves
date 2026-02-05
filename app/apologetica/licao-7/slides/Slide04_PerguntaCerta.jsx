// Slide 04 - A Pergunta Certa
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

export default function Slide04_PerguntaCerta() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto">
                {/* Pergunta Errada */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="w-full mb-8"
                >
                    <ParchmentCard danger>
                        <div className="relative">
                            {/* Linha de risco */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="absolute top-1/2 left-0 right-0 h-1 origin-left"
                                style={{ background: colors.inkBlood }}
                            />
                            <h3
                                className="text-xl font-bold mb-2 uppercase tracking-wide"
                                style={{ color: colors.inkBlood }}
                            >
                                ❌ A PERGUNTA ERRADA:
                            </h3>
                            <p
                                className="text-2xl italic"
                                style={{ color: colors.parchmentMid }}
                            >
                                "Temos os originais?"
                            </p>
                            <p
                                className="text-sm mt-2"
                                style={{ color: `${colors.parchmentLight}60` }}
                            >
                                (Ninguém tem. De nada.)
                            </p>
                        </div>
                    </ParchmentCard>
                </motion.div>

                {/* Divisor */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1 }}
                    className="w-3/4 h-0.5 mb-8"
                    style={{
                        background: `linear-gradient(90deg, transparent, ${colors.goldAged}, transparent)`
                    }}
                />

                {/* Pergunta Certa */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className="w-full"
                >
                    <ParchmentCard highlight>
                        <h3
                            className="text-xl font-bold mb-2 uppercase tracking-wide"
                            style={{ color: colors.goldAged }}
                        >
                            ✓ A PERGUNTA CERTA:
                        </h3>
                        <p
                            className="text-2xl md:text-3xl font-bold"
                            style={{ color: colors.parchmentLight }}
                        >
                            "As cópias que temos são <span style={{ color: colors.goldBright }}>confiáveis</span>?"
                        </p>
                    </ParchmentCard>
                </motion.div>

                {/* Nota de contexto */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="mt-10 text-center"
                >
                    <p className="text-lg" style={{ color: colors.parchmentMid }}>
                        Isso não é exclusivo da Bíblia.
                    </p>
                    <p className="mt-2" style={{ color: `${colors.parchmentLight}80` }}>
                        Não temos os originais de <strong>nenhum</strong> texto antigo.
                        <br />Nem Platão. Nem Aristóteles. Nem Homero. Nem César.
                    </p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.2 }}
                        className="mt-4 text-xl font-bold"
                        style={{ color: colors.goldAged }}
                    >
                        A Bíblia não é exceção. Mas ela é <em>excepcional</em>.
                    </motion.p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
