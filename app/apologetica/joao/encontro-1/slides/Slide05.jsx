'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, IntertextPair, colors, fonts } from './shared';

export function Slide05({ slideIndex = 4 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-6xl mx-auto px-8 py-16">
                <div className="text-center mb-12">
                    <SectionLabel align="center" delay={0.2}>
                        Os dois "princípios"
                    </SectionLabel>
                </div>

                <IntertextPair
                    left={{
                        ref: 'Gênesis 1.1',
                        text: 'No princípio criou Deus os céus e a terra.',
                        refColor: colors.lapis,
                    }}
                    right={{
                        ref: 'João 1.1',
                        text: 'No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.',
                        refColor: colors.gold,
                    }}
                    delay={0.6}
                    connectorDelay={1.4}
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.6, duration: 1.0 }}
                    className="mt-14 text-center"
                >
                    <p
                        className="text-xs md:text-sm tracking-[0.45em] uppercase mb-3"
                        style={{
                            color: colors.inkMuted,
                            fontFamily: fonts.mono,
                        }}
                    >
                        em grego (Septuaginta · João)
                    </p>
                    <p
                        className="text-2xl md:text-4xl italic"
                        style={{
                            color: colors.wine,
                            fontFamily: fonts.display,
                            fontWeight: 500,
                            letterSpacing: '0.02em',
                        }}
                    >
                        ἐν ἀρχῇ — en archē
                    </p>
                    <p
                        className="mt-5 text-sm md:text-base italic max-w-2xl mx-auto"
                        style={{
                            color: colors.inkBody,
                            fontFamily: fonts.body,
                            lineHeight: 1.55,
                        }}
                    >
                        Idêntico. Ninguém ouviria isso por acaso.
                    </p>
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
