'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, BiblicalQuote, colors, fonts } from './shared';

export function Slide24() {
    return (
        <ParchmentWrapper dark>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 0.3, duration: 0.9 }}
                    className="text-base md:text-lg"
                    style={{ color: colors.goldFaint, fontFamily: fonts.body, maxWidth: '34rem', textAlign: 'center' }}
                >
                    Os rejeitados nos versos seguintes são justamente
                    os que <em>mais fizeram obras</em>:
                </motion.p>

                <div className="mt-8">
                    <BiblicalQuote
                        reference="Mateus 7:22"
                        referenceTone="gold"
                        tone="parchment"
                        lines={[
                            'Não profetizamos em Teu nome?',
                            'Não expulsamos demônios?',
                        ]}
                        size="md"
                        align="center"
                        delay={1.0}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.0, duration: 1.4 }}
                    className="mt-14"
                >
                    <BiblicalQuote
                        reference="Mateus 7:23"
                        referenceTone="wine"
                        tone="parchment"
                        lines={['Nunca vos conheci.']}
                        emphasis={['conheci']}
                        size="xxl"
                        align="center"
                        delay={3.0}
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.92 }}
                    transition={{ delay: 4.8, duration: 1.0 }}
                    className="mt-12 text-lg md:text-xl"
                    style={{ color: colors.goldFaint, fontFamily: fonts.display, fontStyle: 'italic', textAlign: 'center' }}
                >
                    O veredito não foi sobre obras. Foi sobre relacionamento.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
