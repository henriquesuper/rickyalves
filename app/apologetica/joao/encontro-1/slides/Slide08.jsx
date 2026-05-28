'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, RomanNumeral, colors, fonts } from './shared';

export function Slide08({ slideIndex = 7 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-24 text-center flex flex-col items-center">
                <SectionLabel align="center" delay={0.2}>
                    Âncora II
                </SectionLabel>

                <div className="mt-4 mb-12">
                    <RomanNumeral value="II" size="xl" delay={0.5} color={colors.lapis} opacity={0.8} weight={300} />
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 1.0 }}
                    className="text-5xl md:text-7xl italic"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.display,
                        fontWeight: 500,
                        letterSpacing: '0.01em',
                    }}
                >
                    Λόγος
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 2.2, duration: 0.9 }}
                    className="mt-3 text-sm tracking-[0.45em] uppercase"
                    style={{
                        color: colors.inkMuted,
                        fontFamily: fonts.mono,
                    }}
                >
                    Lógos · Verbo · Palavra · Razão
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.0, duration: 0.9 }}
                    className="mt-12 text-base md:text-lg italic max-w-2xl"
                    style={{
                        color: colors.inkBody,
                        fontFamily: fonts.display,
                        lineHeight: 1.55,
                    }}
                >
                    Quando João escreve essa palavra, ela já carrega
                    quinhentos anos de discussão filosófica.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
