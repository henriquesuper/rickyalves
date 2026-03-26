'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, BrushReveal, colors } from './shared';

export function Slide26() {
    return (
        <ExcavationWrapper stratum="terracotta">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                {/* Main text */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-2xl font-bold mb-4"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Descemos mais fundo.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg mb-6"
                    style={{ color: colors.textMedium }}
                >
                    As pedras do Antigo Testamento falaram.
                </motion.p>

                {/* BrushReveal transition */}
                <BrushReveal delay={1.0}>
                    <p
                        className="text-lg italic"
                        style={{ color: colors.excavationAmber }}
                    >
                        Agora: pedras do Novo Testamento.
                    </p>
                </BrushReveal>

                {/* Animated arrow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6, y: [0, 10, 0] }}
                    transition={{
                        opacity: { delay: 1.5, duration: 0.5 },
                        y: { delay: 1.5, duration: 2, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    className="text-3xl mt-8"
                    style={{ color: colors.excavationAmber }}
                >
                    ↓
                </motion.div>
            </div>
        </ExcavationWrapper>
    );
}
