'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, BiblicalQuote, colors, fonts } from './shared';

export function Slide19({ slideIndex = 18 }) {
    return (
        <ParchmentWrapper lapisDark>
            <div className="w-full max-w-4xl mx-auto px-8 py-28 flex flex-col items-center text-center">
                <BiblicalQuote
                    reference="João 1.5"
                    lines={[
                        'A luz brilha nas trevas,',
                        'e as trevas não a venceram.',
                    ]}
                    emphasis={['luz', 'trevas', 'venceram']}
                    tone="parchment"
                    referenceTone="gold"
                    size="xl"
                    delay={0.6}
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 3.4, duration: 1.4 }}
                    className="mt-16 text-xs md:text-sm tracking-[0.4em] uppercase"
                    style={{
                        color: colors.goldFaint,
                        fontFamily: fonts.mono,
                    }}
                >
                    katelaben
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 4.4, duration: 1.4 }}
                    className="mt-4 text-sm md:text-base italic max-w-md"
                    style={{
                        color: colors.parchmentEdge,
                        fontFamily: fonts.body,
                        lineHeight: 1.6,
                    }}
                >
                    no grego, "vencer" e "compreender" — ao mesmo tempo.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
