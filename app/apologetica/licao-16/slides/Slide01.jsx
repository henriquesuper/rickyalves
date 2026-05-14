'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, LessonNumber, QuietTitle, ThinRule, colors, fonts } from './shared';

export function Slide01({ slideIndex = 0 }) {
    return (
        <ParchmentWrapper deepGradient>
            <div className="max-w-4xl mx-auto px-8 text-center flex flex-col items-center justify-center py-16">
                <div className="mb-14">
                    <LessonNumber size="lg" delay={0.2} />
                </div>

                <QuietTitle size="xxl" delay={0.6} weight={500}>
                    O Mundo Quebrado
                </QuietTitle>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 1.6, duration: 1.0 }}
                    className="mt-8 text-lg md:text-2xl italic"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.accent,
                        letterSpacing: '0.02em',
                    }}
                >
                    Solidão, Sofrimento e a Aposta Cósmica
                </motion.p>

                <div className="mt-14">
                    <ThinRule width="160px" color={colors.gold} delay={2.4} opacity={0.45} />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 3.2, duration: 0.8 }}
                    className="mt-10 text-xs"
                    style={{
                        color: colors.inkMuted,
                        fontFamily: fonts.body,
                        letterSpacing: '0.3em',
                    }}
                >
                    Curso Apologético · Lição 16 de 19
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
