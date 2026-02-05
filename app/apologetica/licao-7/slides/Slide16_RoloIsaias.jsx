// Slide 16 - O Grande Rolo de Isaías
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, ManuscriptFragment, colors } from './shared';

export default function Slide16_RoloIsaias() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-8 text-center"
                    style={{ color: colors.goldBright }}
                >
                    O Grande Rolo de Isaías
                </motion.h2>

                {/* Visual do rolo */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="relative w-full max-w-3xl h-32 mb-8"
                >
                    {/* Rolo visual */}
                    <div
                        className="absolute inset-0 rounded-lg"
                        style={{
                            background: `linear-gradient(90deg, 
                                ${colors.woodMedium} 0%, 
                                ${colors.parchmentDark}40 5%, 
                                ${colors.parchmentMid}30 50%, 
                                ${colors.parchmentDark}40 95%, 
                                ${colors.woodMedium} 100%)`,
                            border: `2px solid ${colors.goldAged}40`
                        }}
                    />

                    {/* Texto no rolo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-center"
                        >
                            <span
                                className="text-3xl md:text-4xl font-bold"
                                style={{ color: colors.goldAged }}
                            >
                                1QIsaᵃ
                            </span>
                            <p
                                className="text-sm mt-2"
                                style={{ color: colors.parchmentLight }}
                            >
                                O manuscrito bíblico mais completo de Qumran
                            </p>
                        </motion.div>
                    </div>

                    {/* Medida */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="absolute -bottom-6 left-0 right-0 flex justify-center"
                    >
                        <span
                            className="text-sm px-3 py-1 rounded-full"
                            style={{
                                background: `${colors.inkSepia}40`,
                                color: colors.parchmentLight
                            }}
                        >
                            ← 7,34 metros →
                        </span>
                    </motion.div>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 w-full max-w-xl mb-8 mt-8">
                    {[
                        { number: "66", label: "capítulos completos" },
                        { number: "54", label: "colunas de texto" },
                        { number: "~125", label: "a.C. (datação)" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 + i * 0.15 }}
                            className="text-center"
                        >
                            <span
                                className="text-3xl md:text-4xl font-bold block"
                                style={{ color: colors.goldAged }}
                            >
                                {stat.number}
                            </span>
                            <span
                                className="text-sm"
                                style={{ color: colors.parchmentMid }}
                            >
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Destaque */}
                <ParchmentCard delay={1.8} highlight>
                    <p
                        className="text-center text-lg"
                        style={{ color: colors.parchmentLight }}
                    >
                        💡 Isso é <strong style={{ color: colors.goldAged }}>1.000 anos mais antigo</strong>{' '}
                        que o Códice de Leningrado!
                    </p>
                    <p
                        className="text-center text-sm mt-2"
                        style={{ color: colors.parchmentMid }}
                    >
                        Finalmente podemos comparar e verificar a precisão da transmissão.
                    </p>
                </ParchmentCard>
            </div>
        </SlideWrapper>
    );
}
