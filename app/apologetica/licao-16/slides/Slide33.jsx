'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, IntertextPair, colors, fonts } from './shared';

export function Slide33({ slideIndex = 32 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-6xl mx-auto px-8 py-16">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        O grito que cita o Saltério
                    </SectionLabel>
                </div>

                <IntertextPair
                    delay={0.6}
                    left={{
                        ref: 'Mateus 27:46',
                        refColor: colors.wine,
                        text: 'Eloí, Eloí, lamá sabactâni? — Meu Deus, meu Deus, por que me abandonaste?',
                    }}
                    right={{
                        ref: 'Salmo 22:1',
                        refColor: colors.gold,
                        text: 'Deus meu, Deus meu, por que me desamparaste? Por que estás longe das palavras do meu bramido?',
                    }}
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.2, duration: 1.0 }}
                    className="mt-12 text-center"
                >
                    <p
                        className="text-lg md:text-2xl italic"
                        style={{
                            color: colors.inkDeep,
                            fontFamily: fonts.display,
                            fontWeight: 500,
                            maxWidth: '40rem',
                            margin: '0 auto',
                            lineHeight: 1.5,
                        }}
                    >
                        Jesus tem acesso ao Saltério dentro da agonia —
                        e escolhe o salmo que abre com abandono.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 5.2, duration: 0.9 }}
                    className="mt-8 text-center text-sm md:text-base italic"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        maxWidth: '38rem',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: 1.55,
                    }}
                >
                    Nenhum deus do panteão grego ou romano fez isso.
                    Apolo não gritava de abandono. Mitra não chorava.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
