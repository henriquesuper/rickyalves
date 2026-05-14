'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, BiblicalQuote, colors, fonts } from './shared';

const lines = [
    'O Senhor, o teu Deus, decretou',
    'esta desgraça contra este lugar,',
    'e agora o Senhor cumpriu o que disse.',
    '',
    'Tudo isso aconteceu porque vocês pecaram',
    'contra o Senhor e não obedeceram à sua voz.',
    '',
    'Agora eu o estou libertando das correntes',
    'que estão em suas mãos.',
];

export function Slide22({ slideIndex = 21 }) {
    return (
        <ParchmentWrapper lapisDark>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center text-center w-full">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xs uppercase tracking-[0.4em] mb-10"
                    style={{
                        color: colors.gold,
                        fontFamily: fonts.mono,
                        fontWeight: 600,
                    }}
                >
                    O discurso do comandante babilônico
                </motion.p>

                <BiblicalQuote
                    reference="Jeremias 40:2—4"
                    referenceTone="gold"
                    tone="parchment"
                    lines={lines}
                    size="md"
                    align="center"
                    delay={1.2}
                />
            </div>
        </ParchmentWrapper>
    );
}
