'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

const verbs = [
    {
        ref:    'Jo 1.1—2',
        greek:  'ἦν · ēn',
        tense:  'imperfeito',
        gloss:  'o Verbo era',
        nuance: 'existência contínua, sem origem',
        tone:   colors.lapis,
    },
    {
        ref:    'Jo 1.3',
        greek:  'ἐγένετο · egeneto',
        tense:  'aoristo',
        gloss:  'tudo veio a ser',
        nuance: 'um ponto de origem — a criação',
        tone:   colors.inkSoft,
    },
    {
        ref:    'Jo 1.14',
        greek:  'ἐγένετο · egeneto',
        tense:  'aoristo',
        gloss:  'o Verbo se fez carne',
        nuance: 'o eterno entrou no tempo',
        tone:   colors.gold,
    },
];

export function Slide07({ slideIndex = 6 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-6xl mx-auto px-8 py-14">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        A própria gramática carrega a teologia
                    </SectionLabel>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
                    {verbs.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + i * 0.7, duration: 0.85 }}
                            className="p-6"
                            style={{
                                background: `${v.tone}10`,
                                border: `1px solid ${v.tone}55`,
                            }}
                        >
                            <p
                                className="text-[10px] uppercase tracking-[0.35em] mb-4"
                                style={{
                                    color: v.tone,
                                    fontFamily: fonts.body,
                                    fontVariant: 'small-caps',
                                    fontWeight: 600,
                                }}
                            >
                                {v.ref}
                            </p>
                            <p
                                className="text-xl md:text-2xl italic mb-2"
                                style={{
                                    color: colors.inkDeep,
                                    fontFamily: fonts.display,
                                    fontWeight: 500,
                                }}
                            >
                                {v.greek}
                            </p>
                            <p
                                className="text-[11px] uppercase tracking-[0.3em] mb-4"
                                style={{
                                    color: colors.inkMuted,
                                    fontFamily: fonts.mono,
                                }}
                            >
                                {v.tense}
                            </p>
                            <p
                                className="text-base md:text-lg italic mb-2"
                                style={{
                                    color: v.tone,
                                    fontFamily: fonts.accent,
                                    fontWeight: 500,
                                }}
                            >
                                "{v.gloss}"
                            </p>
                            <p
                                className="text-sm"
                                style={{
                                    color: colors.inkBody,
                                    fontFamily: fonts.body,
                                    lineHeight: 1.55,
                                }}
                            >
                                {v.nuance}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ParchmentWrapper>
    );
}
