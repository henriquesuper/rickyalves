'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, QuietTitle, colors, fonts } from './shared';

export function Slide02({ slideIndex = 1 }) {
    const psalms = Array.from({ length: 150 }, (_, i) => i + 1);

    return (
        <ParchmentWrapper>
            <div className="w-full max-w-6xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
                {/* Texto à esquerda */}
                <div>
                    <SectionLabel align="left" delay={0.2}>
                        Onde começa
                    </SectionLabel>

                    <div className="mt-6">
                        <QuietTitle size="md" align="left" delay={0.5}>
                            150 salmos.
                        </QuietTitle>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.9 }}
                        className="mt-5 text-xl md:text-3xl italic"
                        style={{
                            color: colors.wine,
                            fontFamily: fonts.display,
                            fontWeight: 500,
                            lineHeight: 1.35,
                        }}
                    >
                        Um deles desce
                        <br />
                        e não sobe.
                    </motion.p>
                </div>

                {/* Grade dos 150 — o 88 destacado */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 1.2 }}
                    className="grid grid-cols-10 gap-x-3 gap-y-1 md:gap-x-2"
                    style={{ maxWidth: '320px' }}
                >
                    {psalms.map((n) => {
                        const isTheOne = n === 88;
                        return (
                            <motion.span
                                key={n}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isTheOne ? 1 : 0.25 }}
                                transition={{ delay: 3.0 + (isTheOne ? 0.6 : 0), duration: isTheOne ? 0.9 : 0.6 }}
                                className="text-[10px] md:text-xs text-center"
                                style={{
                                    color: isTheOne ? colors.wine : colors.inkMuted,
                                    fontFamily: fonts.mono,
                                    fontWeight: isTheOne ? 700 : 400,
                                    letterSpacing: '0.05em',
                                }}
                            >
                                {n}
                            </motion.span>
                        );
                    })}
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
