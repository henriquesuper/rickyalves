'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

export function Slide51() {
    return (
        <LabWrapper stratum="advanced-optics">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl mb-4"
                    style={{ color: colors.textLight }}
                >
                    Ferramentas avançadas calibradas.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-lg italic mb-8"
                    style={{ color: colors.lensPurple }}
                >
                    Um último exercício. Todas as lentes juntas.
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="h-0.5 max-w-xs mx-auto mb-6"
                    style={{ background: `linear-gradient(to right, transparent, ${colors.lensBlue}, transparent)` }}
                />

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    className="text-2xl"
                    style={{ color: colors.lensBlue }}
                >
                    ↓
                </motion.div>
            </div>
        </LabWrapper>
    );
}
