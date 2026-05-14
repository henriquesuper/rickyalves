'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, BiblicalQuote, colors, fonts } from './shared';

const lines = [
    'Tu me enganaste, Senhor,',
    'e eu fui enganado.',
    '',
    'Maldito o dia em que nasci!',
    '',
    'Por que saí do ventre materno?',
    'Só para ver dificuldades e tristezas,',
    'e terminar minha vida na vergonha?',
];

export function Slide19({ slideIndex = 18 }) {
    return (
        <ParchmentWrapper dark>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-[10px] uppercase tracking-[0.4em] mb-12 text-center"
                    style={{
                        color: colors.wineSoft,
                        fontFamily: fonts.mono,
                    }}
                >
                    As Confissões de Jeremias
                </motion.p>

                <BiblicalQuote
                    reference="Jeremias 20:7, 14, 18"
                    referenceTone="gold"
                    tone="parchment"
                    lines={lines.map((l) => l)}
                    size="md"
                    align="center"
                    delay={1.2}
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 6.0, duration: 1.4 }}
                    className="mt-12"
                >
                    <span
                        style={{
                            color: colors.wineSoft,
                            fontFamily: fonts.accent,
                            fontSize: '1rem',
                            letterSpacing: '0.5em',
                        }}
                    >
                        ·   ·   ·
                    </span>
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
