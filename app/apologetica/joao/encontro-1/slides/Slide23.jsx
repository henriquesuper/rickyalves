'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, RomanNumeral, QuietTitle, colors, fonts } from './shared';

export function Slide23({ slideIndex = 22 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-24 text-center flex flex-col items-center">
                <SectionLabel align="center" delay={0.2}>
                    Movimento II · 1.19—51
                </SectionLabel>

                <div className="mt-4 mb-12">
                    <RomanNumeral value="II" size="xl" delay={0.5} color={colors.gold} opacity={0.85} weight={300} />
                </div>

                <QuietTitle size="lg" align="center" delay={1.0} weight={500}>
                    Testemunhas
                </QuietTitle>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 1.8, duration: 1.0 }}
                    className="mt-8 text-base md:text-lg italic max-w-xl"
                    style={{
                        color: colors.inkBody,
                        fontFamily: fonts.display,
                        lineHeight: 1.55,
                    }}
                >
                    Depois do hino cósmico, João aterrissa abruptamente no concreto.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 2.6, duration: 0.9 }}
                    className="mt-6 text-sm md:text-base italic max-w-lg"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.accent,
                        lineHeight: 1.55,
                    }}
                >
                    O evangelho inteiro é construído como um processo —
                    com testemunhas e cross-examination.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
