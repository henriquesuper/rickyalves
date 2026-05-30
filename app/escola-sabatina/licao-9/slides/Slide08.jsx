'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, BiblicalQuote, colors, fonts } from './shared';

export function Slide08() {
    return (
        <ParchmentWrapper dark>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <BiblicalQuote
                    reference="Marcos 9:43, 47"
                    referenceTone="gold"
                    tone="parchment"
                    lines={[
                        'Se a tua mão te faz tropeçar, corta-a...',
                        'Se o teu olho te faz tropeçar, lança-o de ti.',
                    ]}
                    emphasis={['corta-a', 'lança-o de ti']}
                    size="lg"
                    align="center"
                    delay={0.6}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.92 }}
                    transition={{ delay: 2.6, duration: 1.2 }}
                    className="mt-16 text-lg md:text-xl"
                    style={{
                        color: colors.parchment,
                        fontFamily: fonts.body,
                        maxWidth: '34rem',
                        textAlign: 'center',
                        lineHeight: 1.6,
                    }}
                >
                    Linguagem forte — e essa é a intenção.
                    Jesus não banaliza o pecado. Ele o leva tão a sério
                    que usa a imagem mais chocante possível.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.95 }}
                    transition={{ delay: 4.2, duration: 1.2 }}
                    className="mt-10 text-base md:text-lg italic"
                    style={{ color: colors.goldFaint, fontFamily: fonts.display, textAlign: 'center' }}
                >
                    Guarde esta seriedade. Ela vai pedir uma solução à altura.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
