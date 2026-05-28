'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, QuietTitle, BiblicalQuote, colors, fonts } from './shared';

export function Slide29({ slideIndex = 28 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-16">
                <div className="text-center mb-8">
                    <SectionLabel align="center" delay={0.2}>
                        Jo 1.45—51
                    </SectionLabel>

                    <div className="mt-5">
                        <QuietTitle size="lg" align="center" delay={0.5} weight={500}>
                            Natanael
                        </QuietTitle>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.85 }}
                        transition={{ delay: 1.2, duration: 0.9 }}
                        className="mt-3 text-sm md:text-base italic"
                        style={{
                            color: colors.wine,
                            fontFamily: fonts.accent,
                        }}
                    >
                        o cético honesto
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1.0 }}
                    className="mt-10"
                >
                    <BiblicalQuote
                        reference="o desprezo · 1.46"
                        lines={[
                            '"De Nazaré pode sair coisa boa?"',
                        ]}
                        tone="lapis"
                        size="lg"
                        italic
                        delay={0}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.0, duration: 1.0 }}
                    className="mt-10"
                >
                    <BiblicalQuote
                        reference="a leitura de Jesus · 1.47"
                        lines={[
                            '"Eis um israelita em quem não há falsidade."',
                        ]}
                        tone="gold"
                        size="lg"
                        italic
                        delay={0}
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 4.6, duration: 1.0 }}
                    className="mt-10 text-center text-sm md:text-base italic max-w-2xl mx-auto"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        lineHeight: 1.55,
                    }}
                >
                    Um cético declarado. Sem fingimento. E Jesus o reconhece.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
