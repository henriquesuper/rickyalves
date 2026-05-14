'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, ProseBlock, colors, fonts } from './shared';

export function Slide09({ slideIndex = 8 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-6xl mx-auto px-10 py-12">
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-12 md:col-span-7">
                        <SectionLabel align="left" delay={0.2}>
                            A aposta
                        </SectionLabel>

                        <div className="mt-8">
                            <ProseBlock
                                align="left"
                                size="lg"
                                delay={0.6}
                                maxWidth="100%"
                                lines={[
                                    { text: 'Não é punição.', bold: true },
                                    { text: 'Não é indiferença.', bold: true },
                                ]}
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 0.4, scaleX: 1 }}
                            transition={{ delay: 1.6, duration: 0.9 }}
                            className="h-px my-8"
                            style={{ width: '120px', background: colors.wine }}
                        />

                        <ProseBlock
                            align="left"
                            size="md"
                            delay={2.0}
                            maxWidth="100%"
                            italic
                            color={colors.inkBody}
                            lines={[
                                'É uma disputa sobre',
                                'se humanos são',
                                'capazes de amar.',
                            ]}
                        />

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.85 }}
                            transition={{ delay: 3.4, duration: 0.9 }}
                            className="mt-10 text-sm md:text-base"
                            style={{
                                color: colors.inkSoft,
                                fontFamily: fonts.body,
                                fontStyle: 'italic',
                                lineHeight: 1.55,
                                maxWidth: '32rem',
                            }}
                        >
                            Jó está, sem saber, segurando uma das pontas
                            de uma disputa cósmica sobre o caráter do amor humano.
                        </motion.p>
                    </div>

                    <div className="hidden md:block md:col-span-5" />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
