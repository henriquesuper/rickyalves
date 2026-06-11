'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, EncontroNumber, QuietTitle, ThinRule, colors, fonts } from './shared';

export function Slide94({ slideIndex = 93 }) {
    return (
        <ParchmentWrapper dark>
            <div className="max-w-4xl mx-auto px-8 text-center flex flex-col items-center justify-center py-16">
                <div className="mb-12">
                    <EncontroNumber size="lg" delay={0.2} label="Encontro 1 · João 1–6" />
                </div>

                <QuietTitle size="xl" delay={0.6} weight={400} italic color={colors.parchment}>
                    Qual passagem está começando a virar sua?
                </QuietTitle>

                <div className="mt-14">
                    <ThinRule width="160px" color={colors.gold} delay={1.4} opacity={0.45} />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 2.2, duration: 0.8 }}
                    className="mt-10 text-xs md:text-sm tracking-[0.2em] uppercase"
                    style={{
                        color: colors.goldFaint,
                        fontFamily: fonts.mono,
                    }}
                >
                    Próxima Leitura: João 7–8
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
