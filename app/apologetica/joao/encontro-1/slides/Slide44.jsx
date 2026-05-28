'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

const traits = [
    { label: 'fariseu',                  tone: colors.lapis },
    { label: '"príncipe dos judeus"',    tone: colors.lapis },
    { label: 'mestre',                   tone: colors.lapis },
    { label: 'intelectual de alto status', tone: colors.lapis },
];

export function Slide44({ slideIndex = 43 }) {
    return (
        <ParchmentWrapper lapisGradient>
            <div className="w-full max-w-5xl mx-auto px-8 py-16">
                <div className="text-center mb-8">
                    <SectionLabel align="center" delay={0.2}>
                        O retrato · Jo 3.1—2
                    </SectionLabel>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1.0 }}
                    className="flex flex-wrap justify-center gap-3 mb-10 max-w-2xl mx-auto"
                >
                    {traits.map((t, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + i * 0.4, duration: 0.6 }}
                            className="px-4 py-2 text-sm md:text-base italic"
                            style={{
                                background: `${t.tone}15`,
                                border: `1px solid ${t.tone}66`,
                                color: colors.inkDeep,
                                fontFamily: fonts.display,
                            }}
                        >
                            {t.label}
                        </motion.span>
                    ))}
                </motion.div>

                <BiblicalQuote
                    reference="Jo 3.2"
                    lines={[
                        'Este foi ter com Jesus,',
                        'à noite.',
                    ]}
                    emphasis={['à noite']}
                    tone="wine"
                    referenceTone="gold"
                    size="xl"
                    delay={2.6}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 4.0, duration: 1.0 }}
                    className="mt-12 text-center text-base md:text-lg italic max-w-2xl mx-auto"
                    style={{
                        color: colors.inkBody,
                        fontFamily: fonts.display,
                        lineHeight: 1.55,
                    }}
                >
                    A noite é o medo de ser visto —
                    <br />a busca sincera que não pode se expor socialmente.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
