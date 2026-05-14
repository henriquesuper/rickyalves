'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, BiblicalQuote, colors, fonts } from './shared';

const lines = [
    'O seu domínio é um domínio eterno;',
    'o seu reino dura',
    'de geração em geração.',
    '',
    'Todos os habitantes da terra',
    'são considerados como nada.',
    '',
    'Ninguém pode deter a sua mão',
    'ou dizer-lhe: "O que fizeste?"',
];

export function Slide26({ slideIndex = 25 }) {
    return (
        <ParchmentWrapper deepGradient>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center text-center w-full">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-[10px] uppercase tracking-[0.4em] mb-10"
                    style={{
                        color: colors.gold,
                        fontFamily: fonts.mono,
                    }}
                >
                    A confissão imperial
                </motion.p>

                <BiblicalQuote
                    reference="Daniel 4:34—35"
                    referenceTone="gold"
                    tone="inkDeep"
                    lines={lines}
                    size="md"
                    align="center"
                    delay={1.2}
                />
            </div>
        </ParchmentWrapper>
    );
}
