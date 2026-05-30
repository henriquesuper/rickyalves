'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

const barriers = [
    { ref: 'Mt 6:2', text: 'A vaidade — querer ser glorificado pelos homens.' },
    { ref: 'Mt 5:28', text: 'A cobiça — o adultério que começa no olhar.' },
    { ref: 'Mt 7:1', text: 'O juízo — ser crítico e julgador com os outros.' },
    { ref: 'Mt 5:44', text: 'O ódio — alimentar rancor contra os inimigos.' },
    { ref: 'Mt 5:22', text: 'A ira — justificar gritar com quem está perto.' },
];

export function Slide07() {
    return (
        <ParchmentWrapper>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <SectionLabel align="center" delay={0.2} color={colors.inkMuted}>
                    Segunda · Barreiras no relacionamento com Deus
                </SectionLabel>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="mt-6 text-2xl md:text-3xl"
                    style={{ color: colors.inkDeep, fontFamily: fonts.display, textAlign: 'center' }}
                >
                    O pecado raramente entra pela porta da frente.
                </motion.p>

                <div className="mt-12 w-full max-w-2xl flex flex-col gap-4">
                    {barriers.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4 + i * 0.6, duration: 0.7, ease: 'easeOut' }}
                            className="flex items-baseline gap-4 pb-3"
                            style={{ borderBottom: `1px solid ${colors.inkSoft}33` }}
                        >
                            <span
                                className="text-xs uppercase tracking-[0.2em] shrink-0"
                                style={{ color: colors.wine, fontFamily: fonts.mono, minWidth: '4.5rem' }}
                            >
                                {b.ref}
                            </span>
                            <span
                                className="text-base md:text-lg"
                                style={{ color: colors.inkBody, fontFamily: fonts.body }}
                            >
                                {b.text}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ParchmentWrapper>
    );
}
