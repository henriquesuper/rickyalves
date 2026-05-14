'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, QuietTitle, ProseBlock, colors } from './shared';

export function Slide04({ slideIndex = 3 }) {
    return (
        <ParchmentWrapper>
            <div className="max-w-3xl mx-auto px-8 py-16 flex flex-col items-center justify-center text-center">
                <SectionLabel align="center" delay={0.2}>
                    E ainda assim, está no cânon
                </SectionLabel>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.4, scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.9 }}
                    className="h-px mx-auto my-10"
                    style={{ width: '120px', background: colors.inkSoft }}
                />

                <QuietTitle size="sm" delay={1.0} italic weight={500}>
                    Israel cantou este salmo.
                    <br />
                    A Igreja o leu por séculos.
                </QuietTitle>

                <div className="mt-12">
                    <ProseBlock
                        align="center"
                        size="lg"
                        delay={2.4}
                        color={colors.wine}
                        maxWidth="34rem"
                        italic
                        lines={[
                            'A Bíblia canonizou',
                            'o lamento sem saída.',
                        ]}
                    />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
