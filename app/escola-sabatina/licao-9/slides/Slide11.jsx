'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, QuietTitle, Sheen, colors, fonts } from './shared';

const metaphors = [
    { label: 'Óculos', text: 'Traz clareza — você passa a ver com nitidez o que está ao seu redor.' },
    { label: 'Espelho', text: 'Mostra como você realmente é — o caráter, os motivos, o coração.' },
];

export function Slide11() {
    return (
        <ParchmentWrapper>
            <div className="max-w-4xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <QuietTitle size="md" delay={0.3} color={colors.lapis}>
                    A lei é como um espelho
                </QuietTitle>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                    {metaphors.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 + i * 0.7, duration: 0.8 }}
                            className="relative overflow-hidden rounded-sm p-6 text-center"
                            style={{ background: `${colors.lapis}12`, border: `1px solid ${colors.lapis}40` }}
                        >
                            <Sheen delay={2.0 + i * 0.5} duration={1.7} repeatDelay={5.5} color={colors.parchment} />
                            <p
                                className="relative text-sm uppercase tracking-[0.3em] mb-3"
                                style={{ color: colors.lapis, fontFamily: fonts.body, fontVariant: 'small-caps', fontWeight: 600 }}
                            >
                                {m.label}
                            </p>
                            <p
                                className="relative text-base md:text-lg"
                                style={{ color: colors.inkBody, fontFamily: fonts.body, lineHeight: 1.55 }}
                            >
                                {m.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.8, duration: 1.0 }}
                    className="mt-14 px-6 py-5 text-center"
                    style={{ borderTop: `2px solid ${colors.wine}`, maxWidth: '36rem' }}
                >
                    <p className="text-xl md:text-2xl" style={{ color: colors.wine, fontFamily: fonts.display, fontStyle: 'italic', lineHeight: 1.4 }}>
                        Mas um espelho mostra a sujeira —
                        <br />
                        nunca consegue lavá-la.
                    </p>
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
