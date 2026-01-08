import { motion } from 'framer-motion';
import { GiScales } from 'react-icons/gi';
import { SlideWrapper, colors } from './shared';

export default function Slide18_Encerramento() {
    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center z-10 max-w-4xl mx-auto px-8"
            >
                {/* Ícone decorativo */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, type: "spring" }}
                    className="mb-8"
                >
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#C9A227] to-[#00D9FF] p-1">
                        <div className="w-full h-full rounded-full bg-[#0D1117] flex items-center justify-center">
                            <GiScales className="text-6xl text-[#C9A227]" />
                        </div>
                    </div>
                </motion.div>

                {/* Título */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="font-['Cinzel'] text-4xl md:text-6xl font-bold mb-6"
                    style={{
                        background: `linear-gradient(135deg, ${colors.goldAncient} 0%, ${colors.truthCyan} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Obrigado!
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-xl text-[#E8D5B7] mb-10"
                >
                    Continue investigando. Continue perguntando.
                </motion.p>

                {/* Próximos passos */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    className="bg-gradient-to-br from-[#1E3A5F]/40 to-[#0D1117]/40 backdrop-blur-xl p-8 rounded-3xl border border-[#C9A227]/30 inline-block"
                >
                    <h3 className="text-lg font-bold text-[#C9A227] mb-4">📅 Próxima Lição</h3>
                    <p className="text-[#E8D5B7] mb-4">
                        <strong className="text-white">Lição 5:</strong> Jesus — Histórico ou Mítico?
                    </p>
                    <p className="text-sm text-white/50">
                        Evidências extrabíblicas para a existência de Jesus
                    </p>
                </motion.div>

                {/* Decoração inferior */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.3, duration: 1 }}
                    className="mt-12 h-0.5 w-48 mx-auto"
                    style={{ background: `linear-gradient(90deg, transparent, ${colors.goldAncient}, ${colors.truthCyan}, transparent)` }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-6 text-sm text-white/40"
                >
                    Estudo Bíblico Apologético • Lição 4
                </motion.p>
            </motion.div>
        </SlideWrapper>
    );
}
