'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, RomanNumeral, QuietTitle, colors, fonts } from './shared';

export function Slide71({ slideIndex = 70 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-20 text-center flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.wine}>
                    Movimento VI · capítulo 5
                </SectionLabel>

                <div className="mt-6 mb-10">
                    <RomanNumeral value="VI" size="xl" delay={0.5} color={colors.wine} opacity={0.9} weight={300} />
                </div>

                <QuietTitle size="lg" align="center" delay={1.0} weight={500} color={colors.inkDeep}>
                    Betesda
                </QuietTitle>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 1.5, duration: 1.0 }}
                    className="mt-4 text-xs md:text-sm tracking-[0.2em] uppercase"
                    style={{
                        color: colors.inkMuted,
                        fontFamily: fonts.mono,
                    }}
                >
                    João 5 · Jerusalém, um tanque, trinta e oito anos
                </motion.p>

                {/* 5 vertical thin lines (porticos) */}
                <div className="relative flex justify-center items-center gap-6 my-12 h-20">
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ scaleY: 0, opacity: 0 }}
                            animate={{ scaleY: 1, opacity: 0.6 }}
                            transition={{ delay: 1.8 + idx * 0.2, duration: 0.8, ease: "easeOut" }}
                            className="w-[1.5px] h-full origin-bottom"
                            style={{ background: colors.wine }}
                        />
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 2.8, duration: 0.8 }}
                    className="mt-4 text-sm md:text-base italic max-w-md"
                    style={{
                        color: colors.inkBody,
                        fontFamily: fonts.accent,
                        lineHeight: 1.5,
                    }}
                >
                    Aqui o clima muda. O vinho e a água viva ficam para trás; começa o conflito.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
