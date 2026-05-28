'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

const stops = [
    {
        ref:  'Jo 3',
        when: 'noite',
        line: 'vem em segredo, faz a pergunta, sai sem decisão.',
        tone: colors.lapis,
    },
    {
        ref:  'Jo 7.50—51',
        when: 'no Sinédrio',
        line: 'defende o devido processo: "a nossa lei julga alguém antes de ouvi-lo?"',
        tone: colors.wineSoft,
    },
    {
        ref:  'Jo 19.39',
        when: 'depois da cruz',
        line: 'aparece com cem libras de mirra e aloés — para sepultá-lo.',
        tone: colors.gold,
    },
];

export function Slide51({ slideIndex = 50 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-14">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        A trajetória de Nicodemos
                    </SectionLabel>
                </div>

                <div className="space-y-4 max-w-3xl mx-auto">
                    {stops.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.7, duration: 0.85 }}
                            className="flex flex-col md:flex-row gap-3 md:gap-6 items-baseline p-5"
                            style={{
                                background: `${s.tone}10`,
                                borderLeft: `2px solid ${s.tone}`,
                            }}
                        >
                            <div className="md:w-44 shrink-0">
                                <p
                                    className="text-[10px] uppercase tracking-[0.3em] mb-1"
                                    style={{ color: s.tone, fontFamily: fonts.body, fontVariant: 'small-caps', fontWeight: 600 }}
                                >
                                    {s.ref}
                                </p>
                                <p
                                    className="text-sm italic"
                                    style={{ color: colors.inkSoft, fontFamily: fonts.accent }}
                                >
                                    {s.when}
                                </p>
                            </div>
                            <p
                                className="text-base md:text-lg italic"
                                style={{ color: colors.inkBody, fontFamily: fonts.display, lineHeight: 1.5 }}
                            >
                                {s.line}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 3.6, duration: 1.0 }}
                    className="mt-10 text-center text-sm md:text-base italic max-w-2xl mx-auto"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.accent,
                        lineHeight: 1.55,
                    }}
                >
                    O cético de queima lenta, que se aproxima aos poucos —
                    sem nunca ser pressionado.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 4.4, duration: 1.0 }}
                    className="mt-4 text-center text-xs md:text-sm italic max-w-md mx-auto"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        lineHeight: 1.55,
                    }}
                >
                    (não há prazo)
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
