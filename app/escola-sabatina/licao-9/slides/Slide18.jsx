'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

export function Slide18() {
    return (
        <ParchmentWrapper>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <SectionLabel align="center" delay={0.2} color={colors.inkMuted}>
                    A palavra que o evangelho usa: justificação
                </SectionLabel>

                <div className="mt-10">
                    <BiblicalQuote
                        reference="Romanos 3:28"
                        referenceTone="gold"
                        tone="wine"
                        lines={[
                            'Concluímos que o homem é justificado pela fé,',
                            'independentemente das obras da lei.',
                        ]}
                        emphasis={['justificado pela fé', 'independentemente']}
                        size="lg"
                        align="center"
                        delay={0.7}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.6, duration: 1.0 }}
                    className="mt-12"
                >
                    <BiblicalQuote
                        reference="Gálatas 2:16"
                        referenceTone="lapis"
                        tone="inkDeep"
                        lines={[
                            'O homem não é justificado por obras da lei,',
                            'mas pela fé em Jesus Cristo.',
                        ]}
                        size="sm"
                        align="center"
                        delay={2.6}
                    />
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
