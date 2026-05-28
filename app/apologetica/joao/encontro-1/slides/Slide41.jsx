'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

export function Slide41({ slideIndex = 40 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-16">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        A frase enigmática · Jo 2.19—21
                    </SectionLabel>
                </div>

                <BiblicalQuote
                    reference="Jo 2.19"
                    lines={[
                        'Destruam este templo,',
                        'e em três dias o levantarei.',
                    ]}
                    emphasis={['este templo', 'três dias']}
                    tone="wine"
                    referenceTone="gold"
                    size="xl"
                    delay={0.6}
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4, duration: 1.0 }}
                    className="mt-12 max-w-3xl mx-auto p-6 text-center"
                    style={{
                        background: `${colors.gold}10`,
                        border: `1px solid ${colors.gold}77`,
                    }}
                >
                    <p
                        className="text-[10px] uppercase tracking-[0.4em] mb-3"
                        style={{
                            color: colors.gold,
                            fontFamily: fonts.mono,
                        }}
                    >
                        a glosa do próprio João — 2.21
                    </p>
                    <p
                        className="text-base md:text-lg italic"
                        style={{
                            color: colors.inkBody,
                            fontFamily: fonts.display,
                            lineHeight: 1.55,
                        }}
                    >
                        "Ele falava do <em>templo do seu corpo</em>."
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 3.6, duration: 1.0 }}
                    className="mt-10 text-center text-base md:text-lg italic max-w-2xl mx-auto"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.accent,
                        lineHeight: 1.5,
                    }}
                >
                    Se o tabernáculo era onde Deus habitava — agora,
                    <br />o lugar onde Deus habita é uma pessoa.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 4.6, duration: 1.0 }}
                    className="mt-5 text-center text-sm md:text-base italic max-w-2xl mx-auto"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        lineHeight: 1.55,
                    }}
                >
                    O templo virou gente.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
