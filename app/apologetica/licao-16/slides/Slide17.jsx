'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

const prohibitions = [
    { label: 'Não casar.',                  ref: 'Jr 16:2' },
    { label: 'Não chorar em velórios.',     ref: 'Jr 16:5' },
    { label: 'Não celebrar em casamentos.', ref: 'Jr 16:8—9' },
];

export function Slide17({ slideIndex = 16 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-16 text-center">
                <SectionLabel align="center" delay={0.2}>
                    Jeremias 16
                </SectionLabel>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.9 }}
                    className="mt-8 text-lg md:text-xl"
                    style={{
                        color: colors.inkBody,
                        fontFamily: fonts.body,
                        fontStyle: 'italic',
                    }}
                >
                    Três ordens incomuns. Uma profecia feita de ausências.
                </motion.p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    {prohibitions.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 + i * 0.6, duration: 0.7 }}
                            className="p-5"
                            style={{
                                borderTop: `2px solid ${colors.wine}`,
                                background: `${colors.parchmentDeep}99`,
                            }}
                        >
                            <p
                                className="text-base md:text-lg italic"
                                style={{
                                    color: colors.inkDeep,
                                    fontFamily: fonts.display,
                                    fontWeight: 500,
                                    lineHeight: 1.4,
                                }}
                            >
                                {p.label}
                            </p>
                            <p
                                className="text-[10px] uppercase tracking-[0.3em] mt-3"
                                style={{
                                    color: colors.wine,
                                    fontFamily: fonts.body,
                                    fontVariant: 'small-caps',
                                }}
                            >
                                {p.ref}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.2, duration: 0.9 }}
                    className="mt-14 text-xl md:text-2xl italic"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.display,
                        fontWeight: 500,
                        letterSpacing: '-0.005em',
                    }}
                >
                    A própria solidão do profeta é a profecia.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
