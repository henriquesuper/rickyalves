'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

export function Slide24({ slideIndex = 23 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-16">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        João Batista interrogado · Jo 1.19
                    </SectionLabel>
                </div>

                <BiblicalQuote
                    reference='registro quase jurídico'
                    lines={[
                        'Quem é você?',
                        'Por que você batiza?',
                        'O que diz de si mesmo?',
                    ]}
                    tone="lapis"
                    referenceTone="gold"
                    size="xl"
                    italic
                    delay={0.6}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 2.4, duration: 1.0 }}
                    className="mt-12 text-center text-base md:text-lg italic max-w-2xl mx-auto"
                    style={{
                        color: colors.inkBody,
                        fontFamily: fonts.display,
                        lineHeight: 1.55,
                    }}
                >
                    Não é um livro que pede crença cega.
                    É um livro que arrola provas.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 3.4, duration: 1.0 }}
                    className="mt-6 text-center text-xs md:text-sm tracking-[0.3em] uppercase"
                    style={{
                        color: colors.gold,
                        fontFamily: fonts.mono,
                    }}
                >
                    testemunha · evidência · depoimento
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
