'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, RomanNumeral, QuietTitle, ThinRule, colors, fonts } from './shared';

export function Slide36({ slideIndex = 35 }) {
    return (
        <ParchmentWrapper>
            <div className="max-w-4xl mx-auto px-8 py-24 flex flex-col items-center text-center">
                <RomanNumeral
                    value="V"
                    size="lg"
                    weight={300}
                    color={colors.gold}
                    opacity={0.75}
                    delay={0.3}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="mt-4 text-xs uppercase tracking-[0.4em]"
                    style={{
                        color: colors.gold,
                        fontFamily: fonts.body,
                        fontVariant: 'small-caps',
                    }}
                >
                    Movimento V
                </motion.p>

                <div className="mt-14">
                    <QuietTitle size="xl" delay={1.4} weight={500} color={colors.inkDeep}>
                        Solidão e Direção
                    </QuietTitle>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4, duration: 0.9 }}
                    className="mt-6 text-lg md:text-2xl italic"
                    style={{
                        color: colors.gold,
                        fontFamily: fonts.accent,
                    }}
                >
                    O arco aberto
                </motion.p>

                <div className="mt-12">
                    <ThinRule width="160px" color={colors.gold} delay={3.2} opacity={0.55} />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
