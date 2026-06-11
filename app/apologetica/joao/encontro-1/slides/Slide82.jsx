'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, RomanNumeral, QuietTitle, colors, fonts } from './shared';

export function Slide82({ slideIndex = 81 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-20 text-center flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.gold}>
                    Movimento VII · capítulo 6
                </SectionLabel>

                <div className="mt-6 mb-10">
                    <RomanNumeral value="VII" size="xl" delay={0.5} color={colors.gold} opacity={0.9} weight={300} />
                </div>

                <QuietTitle size="lg" align="center" delay={1.0} weight={500} color={colors.inkDeep}>
                    O Pão
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
                    João 6 · Galileia, perto da Páscoa
                </motion.p>

                {/* SVG round bread broken in half */}
                <div className="my-10">
                    <svg viewBox="0 0 160 100" className="w-36 h-auto" fill="none" strokeWidth="1.5">
                        {/* Left half bread */}
                        <motion.path 
                            initial={{ x: 0, rotate: 0 }}
                            animate={{ x: -8, rotate: -2 }}
                            transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }}
                            d="M 78 20 C 50 20, 20 40, 20 65 L 75 65 Z" 
                            stroke={colors.gold} 
                            strokeWidth="1.5"
                            fill={`${colors.parchmentDeep}66`}
                        />
                        {/* Right half bread */}
                        <motion.path 
                            initial={{ x: 0, rotate: 0 }}
                            animate={{ x: 8, rotate: 2 }}
                            transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }}
                            d="M 82 20 C 110 20, 140 40, 140 65 L 85 65 Z" 
                            stroke={colors.gold} 
                            strokeWidth="1.5"
                            fill={`${colors.parchmentDeep}66`}
                        />

                        {/* Gold crumbs */}
                        <motion.circle cx="76" cy="74" r="1.5" fill={colors.gold} initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 2.5 }} />
                        <motion.circle cx="80" cy="80" r="1" fill={colors.gold} initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 2.7 }} />
                        <motion.circle cx="84" cy="75" r="1.5" fill={colors.gold} initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 2.6 }} />
                        <motion.circle cx="70" cy="78" r="1" fill={colors.gold} initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 2.8 }} />
                        <motion.circle cx="90" cy="78" r="1" fill={colors.gold} initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 2.9 }} />
                    </svg>
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
                    A Páscoa está no calendário e no ar. O deserto se torna o palco do grande sinal.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
