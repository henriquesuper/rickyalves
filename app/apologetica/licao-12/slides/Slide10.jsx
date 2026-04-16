'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

export function Slide10() {
    return (
        <LabWrapper stratum="first-lens">
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="text-5xl mb-6"
                >
                    🔭
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl font-bold mb-6"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    O Problema
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg mb-4"
                    style={{ color: colors.textMedium }}
                >
                    Todo mundo pode olhar pelo telescópio.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-lg mb-8"
                    style={{ color: colors.textLight }}
                >
                    Mas um astrônomo vê <span style={{ color: colors.lensTeal, fontWeight: 600 }}>galáxias</span> onde
                    você vê <span style={{ color: colors.lensRed, fontWeight: 600 }}>borrões</span>.
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    className="h-0.5 max-w-xs mx-auto mb-6"
                    style={{ background: `linear-gradient(to right, transparent, ${colors.lensBlue}, transparent)` }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="text-sm italic"
                    style={{ color: colors.textMuted }}
                >
                    O problema não é que a Bíblia &ldquo;pode ser interpretada de qualquer jeito&rdquo; —
                    é que a maioria das pessoas a interpreta sem método nenhum, e aí reclama que o texto é confuso.
                </motion.p>
            </div>
        </LabWrapper>
    );
}
