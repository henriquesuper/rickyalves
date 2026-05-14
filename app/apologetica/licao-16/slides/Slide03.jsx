'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, BiblicalQuote, colors, fonts } from './shared';

const lines = [
    'Tiraste de mim os amigos',
    'e os companheiros;',
    'as trevas são as minhas',
    'únicas amigas.',
];

export function Slide03({ slideIndex = 2 }) {
    return (
        <ParchmentWrapper dark>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <BiblicalQuote
                    reference="Salmo 88:18"
                    referenceTone="gold"
                    tone="parchment"
                    lines={lines}
                    size="xl"
                    align="center"
                    delay={1.2}
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 6.0, duration: 1.4 }}
                    className="mt-16"
                >
                    <span
                        style={{
                            color: colors.gold,
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
