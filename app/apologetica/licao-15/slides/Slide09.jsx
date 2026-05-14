'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, ProseBlock, colors } from './shared';

export function Slide09({ slideIndex = 8 }) {
    return (
        <ParchmentWrapper slideIndex={slideIndex}>
            <div className="w-full max-w-6xl mx-auto px-12 py-8">
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-12 md:col-span-8 lg:col-span-7">
                        <div className="mb-6">
                            <SectionLabel align="left" delay={0.2}>
                                Por que quatro
                            </SectionLabel>
                        </div>

                        <ProseBlock
                            align="left"
                            size="md"
                            delay={0.5}
                            maxWidth="100%"
                            lines={[
                                'Quatro retratos independentes,',
                                'com diferenças no detalhe e concordância no essencial,',
                                '',
                                'são mais difíceis de inventar',
                                'do que um único definitivo.',
                            ]}
                        />

                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 0.4, scaleX: 1 }}
                            transition={{ delay: 1.5, duration: 0.9 }}
                            className="h-px my-7"
                            style={{ width: '120px', background: colors.inkMuted }}
                        />

                        <ProseBlock
                            align="left"
                            size="md"
                            italic
                            delay={1.8}
                            color={colors.inkSoft}
                            maxWidth="100%"
                            lines={[
                                'Testemunhas com narrativas idênticas',
                                'geralmente combinaram histórias.',
                            ]}
                        />
                    </div>
                    <div className="hidden md:block md:col-span-4 lg:col-span-5" />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
