'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, RomanNumeral, QuietTitle, colors, fonts } from './shared';

export function Slide35({ slideIndex = 34 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-24 text-center flex flex-col items-center">
                <SectionLabel align="center" delay={0.2}>
                    Movimento III · capítulo 2
                </SectionLabel>

                <div className="mt-4 mb-12">
                    <RomanNumeral value="III" size="xl" delay={0.5} color={colors.gold} opacity={0.85} weight={300} />
                </div>

                <QuietTitle size="lg" align="center" delay={1.0} weight={500}>
                    O Sinal e o Templo
                </QuietTitle>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 1.8, duration: 1.0 }}
                    className="mt-8 text-base md:text-lg italic max-w-xl"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.accent,
                        lineHeight: 1.55,
                    }}
                >
                    A primeira assinatura de Jesus em João — abundância onde havia falta.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
