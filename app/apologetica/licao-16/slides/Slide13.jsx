'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, RomanNumeral, QuietTitle, ThinRule, colors, fonts } from './shared';

export function Slide13({ slideIndex = 12 }) {
    return (
        <ParchmentWrapper lapisGradient>
            <div className="max-w-4xl mx-auto px-8 py-20 flex flex-col items-center text-center">
                <RomanNumeral
                    value="III"
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
                    Movimento III
                </motion.p>

                <div className="mt-12">
                    <QuietTitle size="xl" delay={1.4} weight={500} color={colors.inkDeep}>
                        O Exílio Babilônico
                    </QuietTitle>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4, duration: 0.9 }}
                    className="mt-6 text-lg md:text-2xl italic"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.accent,
                    }}
                >
                    A aposta em escala coletiva
                </motion.p>

                <div className="mt-12">
                    <ThinRule width="160px" color={colors.gold} delay={3.2} opacity={0.5} />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
