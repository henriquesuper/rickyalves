'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, ProseBlock, colors } from './shared';

export function Slide05({ slideIndex = 4 }) {
    return (
        <ParchmentWrapper slideIndex={slideIndex}>
            <div className="w-full max-w-6xl mx-auto px-12 py-8">
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-12 md:col-span-8 lg:col-span-7">
                        <div className="mb-6">
                            <SectionLabel align="left" delay={0.2}>
                                Coerência honesta
                            </SectionLabel>
                        </div>

                        <ProseBlock
                            align="left"
                            size="md"
                            delay={0.5}
                            maxWidth="100%"
                            lines={[
                                'A unidade da Bíblia não é uniformidade.',
                                '',
                                'Há tensões. Há ênfases distintas.',
                                'Há contradições aparentes.',
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
                            delay={1.8}
                            maxWidth="100%"
                            lines={[
                                'A unidade é narrativa, não monolítica.',
                                '',
                                { text: 'Como quatro testemunhas de um mesmo acidente:', italic: true },
                                { text: 'os relatos não são idênticos — mas o evento é o mesmo.', italic: true },
                            ]}
                        />
                    </div>
                    <div className="hidden md:block md:col-span-4 lg:col-span-5" />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
