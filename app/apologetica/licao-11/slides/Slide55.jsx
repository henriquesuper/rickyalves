'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, BrushReveal, colors } from './shared';

export function Slide55() {
    return (
        <ExcavationWrapper stratum="bedrock">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center min-h-[60vh]">
                {/* Main quote */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-5xl font-bold mb-8"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    As pedras falam.
                </motion.h1>

                {/* Second line with BrushReveal */}
                <BrushReveal delay={1.0}>
                    <p
                        className="text-2xl md:text-3xl italic"
                        style={{
                            color: colors.excavationAmber,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        A pergunta é: você está ouvindo?
                    </p>
                </BrushReveal>

                {/* Reference */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 2.0 }}
                    className="text-xs mt-12"
                    style={{ color: colors.textMuted }}
                >
                    Lucas 19:40 — &ldquo;As pedras clamarão&rdquo;
                </motion.p>
            </div>
        </ExcavationWrapper>
    );
}
