import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { SlideWrapper, colors } from './shared';

export default function Slide16_Conclusao() {
    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-4xl mx-auto px-8 z-10"
            >
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-['Cinzel'] text-4xl md:text-5xl text-center mb-12"
                    style={{ color: colors.goldAncient }}
                >
                    Conclusão
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-[#1E3A5F]/40 to-[#0D1117]/40 backdrop-blur-xl p-10 rounded-3xl border border-[#C9A227]/30"
                >
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* O que NÃO estamos dizendo */}
                        <div>
                            <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                                <span className="text-2xl">❌</span> Não dissemos
                            </h3>
                            <ul className="space-y-3 text-[#E8D5B7]">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    "Todas as outras religiões são malígnas"
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    "Pessoas de outras fés são más"
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    "Nada há de bom em outras tradições"
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    "A Bíblia não tem problemas"
                                </li>
                            </ul>
                        </div>

                        {/* O que ESTAMOS dizendo */}
                        <div>
                            <h3 className="text-xl font-bold text-[#00D9FF] mb-4 flex items-center gap-2">
                                <span className="text-2xl">✅</span> Dissemos
                            </h3>
                            <ul className="space-y-3 text-[#E8D5B7]">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00D9FF] mt-1">•</span>
                                    Aplicamos os mesmos critérios a todas
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00D9FF] mt-1">•</span>
                                    A Bíblia se destaca <em>nesses</em> critérios
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00D9FF] mt-1">•</span>
                                    Merece investigação séria de qualquer buscador
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#00D9FF] mt-1">•</span>
                                    Isso não é fé cega — é fé <strong className="text-[#C9A227]">razoável</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Citação final */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-10 text-center"
                >
                    <div className="inline-block bg-[#C9A227]/10 backdrop-blur-xl px-8 py-6 rounded-2xl border border-[#C9A227]/30">
                        <FaQuoteLeft className="text-2xl text-[#C9A227] mb-3 mx-auto" />
                        <p className="text-xl text-[#E8D5B7] italic mb-3">
                            "A glória de Deus é encobrir as coisas, mas a glória dos reis é esquadrinhá-las"
                        </p>
                        <p className="text-[#C9A227] font-medium">— Provérbios 25:2</p>
                    </div>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
