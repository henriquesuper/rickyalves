'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, QuietTitle, BiblicalQuote, colors, fonts } from './shared';

export function Slide10() {
    return (
        <ParchmentWrapper>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <SectionLabel align="center" delay={0.2} color={colors.inkMuted}>
                    Terça · A Lei de Deus
                </SectionLabel>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="mt-6 text-base md:text-lg"
                    style={{ color: colors.inkSoft, fontFamily: fonts.body, textAlign: 'center' }}
                >
                    Como você explicaria <em>o que é pecado</em> a quem não é cristão?
                </motion.p>

                <div className="mt-10">
                    <QuietTitle size="md" delay={1.4} color={colors.lapis} italic>
                        A Bíblia tem uma definição precisa:
                    </QuietTitle>
                </div>

                <div className="mt-10">
                    <BiblicalQuote
                        reference="1 João 3:4 · Romanos 3:20"
                        referenceTone="gold"
                        tone="wine"
                        lines={[
                            'O pecado é a transgressão da lei.',
                            'Pela lei vem o pleno conhecimento do pecado.',
                        ]}
                        emphasis={['transgressão da lei', 'conhecimento do pecado']}
                        size="lg"
                        align="center"
                        delay={2.0}
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.95 }}
                    transition={{ delay: 3.8, duration: 1.0 }}
                    className="mt-12 text-base"
                    style={{ color: colors.inkMuted, fontFamily: fonts.body, maxWidth: '30rem', textAlign: 'center' }}
                >
                    Sem a lei, o pecado fica invisível. A lei é o que o torna nítido.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
