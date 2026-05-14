'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, RomanNumeral, QuietTitle, ThinRule, colors, fonts } from './shared';

export function Slide30({ slideIndex = 29 }) {
    return (
        <ParchmentWrapper dark>
            <div className="max-w-4xl mx-auto px-8 py-24 flex flex-col items-center text-center">
                <RomanNumeral
                    value="IV"
                    size="lg"
                    weight={400}
                    color={colors.gold}
                    opacity={0.95}
                    delay={0.3}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="mt-4 text-xs uppercase tracking-[0.4em]"
                    style={{
                        color: colors.gold,
                        fontFamily: fonts.body,
                        fontVariant: 'small-caps',
                        fontWeight: 600,
                    }}
                >
                    Movimento IV
                </motion.p>

                <div className="mt-14">
                    <QuietTitle size="xxl" delay={1.4} weight={500} color={colors.parchment}>
                        A Cruz
                    </QuietTitle>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.6, duration: 0.9 }}
                    className="mt-8 text-xl md:text-3xl italic"
                    style={{
                        color: colors.wineSoft,
                        fontFamily: fonts.accent,
                    }}
                >
                    A solidão de Deus
                </motion.p>

                <div className="mt-12">
                    <ThinRule width="180px" color={colors.gold} delay={3.6} opacity={0.45} />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
