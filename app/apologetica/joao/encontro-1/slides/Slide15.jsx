'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, QuietTitle, colors, fonts } from './shared';

const horns = [
    {
        title:    'Perde o contato',
        examples: 'Aristóteles · Fílon',
        line:     'Deus fica real — mas irrelevante e inacessível.',
        tone:     colors.lapis,
    },
    {
        title:    'Perde a transcendência',
        examples: 'Estoicos',
        line:     'Deus fica próximo — mas vira o mundo.',
        tone:     colors.wine,
    },
];

export function Slide15({ slideIndex = 14 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-14">
                <div className="text-center mb-8">
                    <SectionLabel align="center" delay={0.2}>
                        Por que a encarnação é uma resposta filosófica
                    </SectionLabel>

                    <div className="mt-5">
                        <QuietTitle size="md" align="center" delay={0.5} weight={500}>
                            O falso dilema
                        </QuietTitle>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
                    {horns.map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0 + i * 0.7, duration: 0.85 }}
                            className="p-6"
                            style={{
                                background: `${h.tone}12`,
                                border: `1px solid ${h.tone}66`,
                            }}
                        >
                            <p
                                className="text-[11px] uppercase tracking-[0.35em] mb-2"
                                style={{
                                    color: h.tone,
                                    fontFamily: fonts.body,
                                    fontVariant: 'small-caps',
                                    fontWeight: 600,
                                }}
                            >
                                {h.examples}
                            </p>
                            <p
                                className="text-xl md:text-2xl mb-3"
                                style={{
                                    color: colors.inkDeep,
                                    fontFamily: fonts.display,
                                    fontWeight: 600,
                                }}
                            >
                                {h.title}
                            </p>
                            <p
                                className="text-base italic"
                                style={{
                                    color: colors.inkBody,
                                    fontFamily: fonts.display,
                                    lineHeight: 1.55,
                                }}
                            >
                                {h.line}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.0, duration: 1.0 }}
                    className="mt-10 max-w-3xl mx-auto p-7 text-center"
                    style={{
                        background: `${colors.gold}15`,
                        border: `1px solid ${colors.gold}99`,
                    }}
                >
                    <p
                        className="text-[11px] uppercase tracking-[0.4em] mb-3"
                        style={{
                            color: colors.gold,
                            fontFamily: fonts.body,
                            fontVariant: 'small-caps',
                            fontWeight: 600,
                        }}
                    >
                        Uma terceira opção
                    </p>
                    <p
                        className="text-lg md:text-2xl italic"
                        style={{
                            color: colors.wine,
                            fontFamily: fonts.display,
                            lineHeight: 1.5,
                        }}
                    >
                        O Deus plenamente transcendente entra plenamente no finito —
                        sem deixar de ser Deus, e sem intermediário-tampão.
                    </p>
                    <p
                        className="mt-4 text-sm md:text-base"
                        style={{
                            color: colors.inkSoft,
                            fontFamily: fonts.body,
                            lineHeight: 1.55,
                        }}
                    >
                        Uma pessoa. Em carne. "O Verbo era Deus... o Verbo se fez carne."
                    </p>
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
