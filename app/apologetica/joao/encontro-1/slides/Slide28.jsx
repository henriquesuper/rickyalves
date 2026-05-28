'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, QuietTitle, colors, fonts } from './shared';

export function Slide28({ slideIndex = 27 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-24 text-center flex flex-col items-center">
                <SectionLabel align="center" delay={0.2}>
                    Jo 1.39, 1.46
                </SectionLabel>

                <div className="mt-8 mb-6">
                    <QuietTitle size="xl" align="center" delay={0.6} weight={500} italic>
                        Vinde
                    </QuietTitle>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 1.4, duration: 0.9 }}
                    className="text-3xl md:text-5xl"
                    style={{ color: colors.gold, fontFamily: fonts.display }}
                >
                    e
                </motion.p>

                <div className="mt-6 mb-12">
                    <QuietTitle size="xl" align="center" delay={2.2} weight={500} italic color={colors.wine}>
                        vede.
                    </QuietTitle>
                </div>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.5, scaleX: 1 }}
                    transition={{ delay: 3.2, duration: 1.0 }}
                    className="h-px"
                    style={{
                        width: '120px',
                        background: colors.gold,
                    }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.0, duration: 1.0 }}
                    className="mt-10 text-base md:text-lg italic max-w-2xl"
                    style={{
                        color: colors.inkBody,
                        fontFamily: fonts.display,
                        lineHeight: 1.55,
                    }}
                >
                    Quando perguntam onde Jesus mora, ele não faz um sermão.
                    Quando Natanael despreza, Filipe não argumenta.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 5.0, duration: 1.0 }}
                    className="mt-6 text-sm md:text-base italic max-w-2xl"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.accent,
                        lineHeight: 1.55,
                    }}
                >
                    A epistemologia do evangelho é convidativa e empírica.
                    Não "creia agora". "Venha ver."
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
