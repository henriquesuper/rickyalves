'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, BrushReveal, colors } from './shared';

export function Slide52() {
    return (
        <ExcavationWrapper stratum="bedrock">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                {/* Large question */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-4xl font-bold mb-10"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Que tipo de texto é a Bíblia?
                </motion.h2>

                {/* 3 options */}
                <div className="space-y-4 mb-10">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 0.5, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-lg"
                        style={{ color: colors.textMuted, textDecoration: 'line-through' }}
                    >
                        Mitologia?
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 0.5, x: 0 }}
                        transition={{ delay: 1.2 }}
                        className="text-lg"
                        style={{ color: colors.textMuted, textDecoration: 'line-through' }}
                    >
                        Ficção histórica?
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6 }}
                    >
                        <BrushReveal delay={1.8}>
                            <p className="text-lg" style={{ color: colors.excavationAmber }}>
                                Um texto que opera no território da história verificável.
                            </p>
                        </BrushReveal>
                    </motion.div>
                </div>

                {/* Small note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 2.6 }}
                    className="text-xs italic"
                    style={{ color: colors.textMuted }}
                >
                    A pergunta fica no ar.
                </motion.p>
            </div>
        </ExcavationWrapper>
    );
}
