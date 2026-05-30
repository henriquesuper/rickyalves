'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, QuietTitle, BiblicalQuote, ProseBlock, colors, fonts } from './shared';

export function Slide06() {
    return (
        <ParchmentWrapper>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <SectionLabel align="center" delay={0.2} color={colors.inkMuted}>
                    Domingo · Distrações e tentações
                </SectionLabel>

                <div className="mt-6">
                    <QuietTitle size="lg" delay={0.6} color={colors.inkDeep}>
                        Sansão
                    </QuietTitle>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.9 }}
                    className="mt-6 text-xl md:text-2xl"
                    style={{ color: colors.wine, fontFamily: fonts.display, fontStyle: 'italic', textAlign: 'center' }}
                >
                    Caiu porque pensou que era forte.
                </motion.p>

                <div className="mt-10">
                    <ProseBlock
                        align="center"
                        size="sm"
                        delay={2.2}
                        maxWidth="32rem"
                        lines={[
                            'Chamado por Deus, dotado de força sobrenatural —',
                            'e mesmo assim confiou na própria força para vencer a tentação.',
                            'O inimigo conhece nossas fraquezas e mira exatamente nelas.',
                        ]}
                    />
                </div>

                <div className="mt-12">
                    <BiblicalQuote
                        reference="1 Coríntios 10:12"
                        referenceTone="gold"
                        tone="lapis"
                        lines={['Aquele que pensa estar em pé', 'veja que não caia.']}
                        emphasis={['não caia']}
                        size="md"
                        align="center"
                        delay={3.2}
                    />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
