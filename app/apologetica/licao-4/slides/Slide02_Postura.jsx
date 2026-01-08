import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { SlideWrapper, colors } from './shared';

export default function Slide02_Postura() {
    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-5xl mx-auto px-8 z-10"
            >
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-['Cinzel'] text-4xl md:text-5xl text-center mb-12"
                    style={{ color: colors.goldAncient }}
                >
                    Antes de Começar
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* O que NÃO estamos dizendo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-gradient-to-br from-red-900/20 to-red-950/30 backdrop-blur-xl p-8 rounded-3xl border border-red-500/20"
                    >
                        <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                            <span className="text-3xl">❌</span> Postura Errada
                        </h3>
                        <ul className="space-y-4 text-lg text-red-200/80">
                            <li className="flex items-start gap-3">
                                <span className="mt-1">•</span>
                                "Nossa religião é melhor que a deles"
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1">•</span>
                                "Eles estão todos errados"
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1">•</span>
                                Arrogância ou desrespeito
                            </li>
                        </ul>
                    </motion.div>

                    {/* O que ESTAMOS dizendo */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-gradient-to-br from-[#1E3A5F]/40 to-[#0D1117]/40 backdrop-blur-xl p-8 rounded-3xl border border-[#00D9FF]/30"
                    >
                        <h3 className="text-2xl font-bold text-[#00D9FF] mb-6 flex items-center gap-3">
                            <span className="text-3xl">✅</span> Postura Correta
                        </h3>
                        <ul className="space-y-4 text-lg text-[#E8D5B7]">
                            <li className="flex items-start gap-3">
                                <span className="mt-1">•</span>
                                <span>"Usar os <strong className="text-[#00D9FF]">mesmos critérios</strong> para avaliar todas as alegações"</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1">•</span>
                                "A Bíblia não ganha passe livre — entra na fila como qualquer outra"
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1">•</span>
                                "Se ela não passar nos critérios, descartamos. Simples assim."
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Citação */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-block bg-[#1E3A5F]/30 backdrop-blur-xl px-8 py-6 rounded-2xl border border-[#C9A227]/30">
                        <FaQuoteLeft className="text-2xl text-[#C9A227] mb-3 mx-auto" />
                        <p className="text-xl text-[#E8D5B7] italic">
                            Não estamos perguntando "qual religião é certa?" — estamos perguntando "qual texto sobrevive ao escrutínio?"
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
