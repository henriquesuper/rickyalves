'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

export function Slide26() {
    return (
        <ParchmentWrapper>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <SectionLabel align="center" delay={0.2} color={colors.inkMuted}>
                    Como Jesus encerra o Sermão · Mateus 7:24
                </SectionLabel>

                <div className="mt-10">
                    <BiblicalQuote
                        reference="Mateus 7:24"
                        referenceTone="lapis"
                        tone="inkDeep"
                        lines={[
                            'Quem ouve estas palavras e as pratica',
                            'é como o homem que edificou',
                            'a sua casa sobre a rocha.',
                        ]}
                        emphasis={['pratica', 'sobre a rocha']}
                        size="md"
                        align="center"
                        delay={0.7}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.4, duration: 1.0 }}
                    className="mt-14 text-center"
                    style={{ maxWidth: '34rem' }}
                >
                    <p className="text-2xl md:text-3xl" style={{ color: colors.gold, fontFamily: fonts.display, fontStyle: 'italic', lineHeight: 1.4 }}>
                        A Rocha é Cristo.
                    </p>
                    <p className="mt-3 text-lg md:text-xl" style={{ color: colors.inkBody, fontFamily: fonts.body, lineHeight: 1.55 }}>
                        A obediência é a casa que prova que o fundamento é real.
                    </p>
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
