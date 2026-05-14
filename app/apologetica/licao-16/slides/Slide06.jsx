'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, RomanNumeral, QuietTitle, ThinRule, colors, fonts } from './shared';

export function Slide06({ slideIndex = 5 }) {
    return (
        <ParchmentWrapper>
            <div className="max-w-4xl mx-auto px-8 py-20 flex flex-col items-center text-center">
                <RomanNumeral
                    value="II"
                    size="lg"
                    weight={300}
                    color={colors.inkFaint}
                    opacity={0.7}
                    delay={0.3}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="mt-4 text-xs uppercase tracking-[0.4em]"
                    style={{
                        color: colors.inkMuted,
                        fontFamily: fonts.body,
                        fontVariant: 'small-caps',
                    }}
                >
                    Movimento II
                </motion.p>

                <div className="mt-12">
                    <QuietTitle size="xl" delay={1.4} weight={500}>
                        Jó 1—2
                    </QuietTitle>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 0.9 }}
                    className="mt-6 text-lg md:text-2xl italic"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.accent,
                    }}
                >
                    A aposta em escala pessoal
                </motion.p>

                <div className="mt-12">
                    <ThinRule width="140px" color={colors.gold} delay={3.0} opacity={0.4} />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
