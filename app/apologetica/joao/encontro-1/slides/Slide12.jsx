'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, QuietTitle, colors, fonts } from './shared';

export function Slide12({ slideIndex = 11 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <SectionLabel align="left" delay={0.2}>
                        ~20 a.C. — ~50 d.C. · Alexandria
                    </SectionLabel>

                    <div className="mt-5">
                        <QuietTitle size="lg" align="left" delay={0.5} weight={500}>
                            Fílon
                        </QuietTitle>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.9 }}
                        className="mt-5 text-lg md:text-xl italic"
                        style={{
                            color: colors.wine,
                            fontFamily: fonts.accent,
                            lineHeight: 1.45,
                        }}
                    >
                        Lógos — a ponte que protege
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.92 }}
                        transition={{ delay: 2.0, duration: 0.9 }}
                        className="mt-6 text-base md:text-lg"
                        style={{
                            color: colors.inkBody,
                            fontFamily: fonts.body,
                            lineHeight: 1.6,
                        }}
                    >
                        Judeu helenista, contemporâneo de Jesus.
                        Para Fílon, Deus é absolutamente transcendente —
                        e o Lógos é o intermediário que mantém Deus
                        a uma distância segura da matéria.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6, duration: 1.0 }}
                    className="p-6"
                    style={{
                        background: `${colors.gold}10`,
                        border: `1px solid ${colors.gold}77`,
                    }}
                >
                    <p
                        className="text-[10px] uppercase tracking-[0.4em] mb-4"
                        style={{
                            color: colors.gold,
                            fontFamily: fonts.mono,
                        }}
                    >
                        O ponto onde João discorda
                    </p>
                    <p
                        className="text-base md:text-lg italic"
                        style={{
                            color: colors.inkBody,
                            fontFamily: fonts.display,
                            lineHeight: 1.55,
                        }}
                    >
                        Fílon jamais — em hipótese alguma — diria que
                        o Lógos virou um homem judeu específico.
                    </p>
                    <p
                        className="mt-4 text-sm md:text-base"
                        style={{
                            color: colors.inkSoft,
                            fontFamily: fonts.body,
                            lineHeight: 1.55,
                        }}
                    >
                        Isso destruiria o propósito inteiro do conceito.
                    </p>
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
