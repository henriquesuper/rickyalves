'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ExcavationSeal, StratumHeader, EvidenceScale, BrushReveal, StampBadge, colors, quizQuestions } from './shared';

export function Slide04() {
    return (
        <ExcavationWrapper stratum="surface">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                {/* Primeira linha */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl md:text-5xl mb-2"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Quando as pedras falam,
                </motion.h2>

                {/* Segunda linha com BrushReveal */}
                <BrushReveal delay={0.8}>
                    <h2
                        className="text-3xl md:text-5xl font-bold"
                        style={{
                            color: colors.excavationAmber,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        o que elas dizem?
                    </h2>
                </BrushReveal>

                {/* Emoji sutil */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="text-4xl mt-8"
                >
                    🏺
                </motion.div>
            </div>
        </ExcavationWrapper>
    );
}
