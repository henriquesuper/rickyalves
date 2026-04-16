'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

export function Slide06() {
    return (
        <LabWrapper stratum="naked-eye">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold mb-6"
                    style={{ color: colors.textLight }}
                >
                    Vamos calibrar os instrumentos.
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="h-0.5 max-w-xs mx-auto mb-6"
                    style={{
                        background: `linear-gradient(to right, transparent, ${colors.lensBlue}, transparent)`,
                    }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-lg italic mb-8"
                    style={{ color: colors.textMedium }}
                >
                    Primeira lente: o que é hermenêutica?
                </motion.p>

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
