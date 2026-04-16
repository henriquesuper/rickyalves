'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

export function Slide12() {
    return (
        <LabWrapper stratum="first-lens">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold mb-4"
                    style={{ color: colors.textLight }}
                >
                    7 lentes.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-lg italic mb-6"
                    style={{ color: colors.lensTeal }}
                >
                    Cada uma refina a imagem.
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="h-0.5 max-w-xs mx-auto mb-8"
                    style={{ background: `linear-gradient(to right, transparent, ${colors.lensTeal}, transparent)` }}
                />

                {/* 7 lens dots */}
                <motion.div className="flex justify-center gap-3">
                    {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                        <motion.div
                            key={n}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.2 + n * 0.1, type: 'spring' }}
                            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                            style={{
                                background: `${colors.lensTeal}15`,
                                border: `1px solid ${colors.lensTeal}40`,
                                color: colors.lensTeal,
                            }}
                        >
                            {n}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut', delay: 2.2 }}
                    className="text-2xl mt-8"
                    style={{ color: colors.lensTeal }}
                >
                    ↓
                </motion.div>
            </div>
        </LabWrapper>
    );
}
