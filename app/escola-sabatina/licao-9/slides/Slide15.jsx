'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, QuietTitle, Stamp, colors, fonts } from './shared';

export function Slide15() {
    return (
        <ParchmentWrapper>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <SectionLabel align="center" delay={0.2} color={colors.inkMuted}>
                    Quarta · Lei e evangelho
                </SectionLabel>

                <div className="mt-10">
                    <QuietTitle size="md" delay={0.7} color={colors.inkDeep}>
                        Diante de Deus, a lei só sabe fazer uma coisa:
                    </QuietTitle>
                </div>

                <div className="mt-10">
                    <Stamp delay={1.7} rotate={-4}>
                        <span
                            className="block text-5xl md:text-7xl"
                            style={{
                                color: colors.wine,
                                fontFamily: fonts.display,
                                fontWeight: 600,
                                letterSpacing: '0.02em',
                                textShadow: `0 1px 0 ${colors.wineDeep}55`,
                            }}
                        >
                            condenar.
                        </span>
                    </Stamp>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.8, duration: 1.0 }}
                    className="mt-12 text-lg md:text-xl"
                    style={{ color: colors.inkBody, fontFamily: fonts.body, maxWidth: '34rem', textAlign: 'center', lineHeight: 1.6 }}
                >
                    A lei nunca perdoa. Nunca justifica. Nunca expia.
                    <span className="block mt-3" style={{ color: colors.inkSoft }}>
                        Ela só revela <em>por que</em> precisamos de perdão, de justificação, de expiação.
                    </span>
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
