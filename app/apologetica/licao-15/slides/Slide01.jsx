'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, LessonNumber, QuietTitle, RomanNumeral, colors, fonts } from './shared';

export function Slide01({ slideIndex = 0 }) {
    return (
        <ParchmentWrapper slideIndex={slideIndex}>
            <div className="max-w-4xl mx-auto px-8 text-center flex flex-col items-center justify-center py-12">
                <div className="mb-16">
                    <LessonNumber size="lg" delay={0.2} />
                </div>

                <QuietTitle size="xl" delay={0.5}>
                    A Bíblia como
                    <br />
                    Uma Só História
                </QuietTitle>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.5, scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 1.0, ease: 'easeOut' }}
                    className="h-px mx-auto mt-12 mb-12"
                    style={{
                        width: '160px',
                        background: colors.inkMuted,
                    }}
                />

                <RomanNumeral
                    value="XV"
                    size="xl"
                    weight={300}
                    color={colors.inkFaint}
                    opacity={0.6}
                    delay={1.6}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 2.2, duration: 0.8 }}
                    className="mt-10 text-xs"
                    style={{
                        color: colors.inkMuted,
                        fontFamily: fonts.body,
                        letterSpacing: '0.3em',
                    }}
                >
                    Curso Apologético
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
