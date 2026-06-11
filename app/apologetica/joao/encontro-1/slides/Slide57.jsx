'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, RomanNumeral, QuietTitle, colors, fonts } from './shared';

export function Slide57({ slideIndex = 56 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-20 text-center flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.lapisSoft}>
                    Movimento V · capítulo 4
                </SectionLabel>

                <div className="mt-6 mb-10">
                    <RomanNumeral value="V" size="xl" delay={0.5} color={colors.lapisSoft} opacity={0.9} weight={300} />
                </div>

                <QuietTitle size="lg" align="center" delay={1.0} weight={500} color={colors.inkDeep}>
                    O Poço
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
                    João 4 · Sicar, ao meio-dia
                </motion.p>

                <div className="relative flex justify-center items-center my-10">
                    {/* Glowing noon halo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.05, 1] }}
                        transition={{ duration: 6.0, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-32 h-32 rounded-full pointer-events-none"
                        style={{
                            background: `radial-gradient(circle, ${colors.gold} 0%, transparent 70%)`,
                            filter: 'blur(8px)',
                        }}
                    />
                    
                    <svg viewBox="0 0 100 100" className="w-24 h-24 relative z-10" stroke={colors.lapisSoft} fill="none" strokeWidth="1.5">
                        <circle cx="50" cy="50" r="40" strokeDasharray="3 3" />
                        <circle cx="50" cy="50" r="35" />
                        <line x1="50" y1="15" x2="50" y2="85" strokeWidth="0.5" opacity="0.3" />
                        <line x1="15" y1="50" x2="85" y2="50" strokeWidth="0.5" opacity="0.3" />
                    </svg>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 2.2, duration: 0.8 }}
                    className="mt-6 text-sm md:text-base italic max-w-md"
                    style={{
                        color: colors.inkBody,
                        fontFamily: fonts.accent,
                        lineHeight: 1.5,
                    }}
                >
                    Calor do meio-dia, poço profundo. Um Verbo com sede encontra quem tem sede de verdade.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
