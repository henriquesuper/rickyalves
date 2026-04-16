'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

export function Slide34() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl mb-4"
                    style={{ color: colors.textLight }}
                >
                    Mas toda lente precisa ser protegida contra
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-3xl font-bold mb-8"
                    style={{ color: colors.lensAmber, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    aberrações ópticas.
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="h-0.5 max-w-xs mx-auto mb-6"
                    style={{ background: `linear-gradient(to right, transparent, ${colors.lensAmber}, transparent)` }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="text-sm italic"
                    style={{ color: colors.textMuted }}
                >
                    5 erros interpretativos comuns — e como evitar cada um.
                </motion.p>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut', delay: 1.5 }}
                    className="text-2xl mt-6"
                    style={{ color: colors.lensAmber }}
                >
                    ↓
                </motion.div>
            </div>
        </LabWrapper>
    );
}
