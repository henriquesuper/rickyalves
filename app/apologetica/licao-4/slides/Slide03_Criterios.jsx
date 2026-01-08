import { motion } from 'framer-motion';
import { SlideWrapper, colors, criteria } from './shared';

export default function Slide03_Criterios() {
    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-6xl mx-auto px-8 z-10"
            >
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-['Cinzel'] text-4xl md:text-5xl text-center mb-4"
                    style={{ color: colors.goldAncient }}
                >
                    Os 5 Critérios
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-[#E8D5B7]/70 mb-12 text-lg"
                >
                    Da Lição 3 — Como avaliar alegações de revelação
                </motion.p>

                <div className="grid md:grid-cols-5 gap-4">
                    {criteria.map((criterion, index) => (
                        <motion.div
                            key={criterion.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="bg-gradient-to-br from-[#1E3A5F]/50 to-[#0D1117]/50 backdrop-blur-xl p-6 rounded-2xl border border-[#C9A227]/30 text-center hover:border-[#00D9FF]/50 transition-all duration-300"
                        >
                            <div className="text-4xl mb-4">{criterion.icon}</div>
                            <h3 className="text-lg font-bold text-[#C9A227] mb-2">{criterion.name}</h3>
                            <p className="text-sm text-[#E8D5B7]/70">{criterion.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-12 text-center"
                >
                    <p className="text-xl text-[#00D9FF]">
                        Vamos aplicar esses critérios a cada tradição...
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
