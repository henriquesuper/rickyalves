import { motion } from 'framer-motion';
import { GiScales } from 'react-icons/gi';
import { SlideWrapper, colors } from './shared';

export default function Slide01_Titulo() {
    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center z-10 max-w-5xl mx-auto px-8"
            >
                {/* Ícone decorativo */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, type: "spring" }}
                    className="mb-8"
                >
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#C9A227] to-[#1E3A5F] p-1">
                        <div className="w-full h-full rounded-full bg-[#0D1117] flex items-center justify-center">
                            <GiScales className="text-6xl text-[#C9A227]" />
                        </div>
                    </div>
                </motion.div>

                {/* Título principal */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="font-['Cinzel'] text-5xl md:text-7xl font-bold mb-6"
                    style={{
                        background: `linear-gradient(135deg, ${colors.goldAncient} 0%, ${colors.goldLight} 50%, ${colors.goldAncient} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 0 60px rgba(201, 162, 39, 0.3)'
                    }}
                >
                    Por Que a Bíblia?
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-2xl md:text-3xl text-[#E8D5B7] mb-8 font-light"
                >
                    E Não Outros Textos Sagrados?
                </motion.p>

                {/* Subtítulo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                    className="inline-block bg-gradient-to-r from-[#1E3A5F]/60 to-[#0D1117]/60 backdrop-blur-xl px-8 py-4 rounded-2xl border border-[#C9A227]/30"
                >
                    <p className="text-lg text-[#E8D5B7]/80">
                        Lição 4 • Estudo Bíblico Apologético
                    </p>
                </motion.div>

                {/* Decoração inferior */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-12 h-0.5 w-48 mx-auto"
                    style={{ background: `linear-gradient(90deg, transparent, ${colors.goldAncient}, transparent)` }}
                />
            </motion.div>
        </SlideWrapper>
    );
}
