'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, ProseBlock, colors, fonts } from './shared';

export function Slide02({ slideIndex = 1 }) {
    return (
        <ParchmentWrapper slideIndex={slideIndex}>
            <div className="w-full max-w-6xl mx-auto px-12 py-8">
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-12 md:col-span-7 lg:col-span-6">
                        <div className="mb-6">
                            <SectionLabel align="left" delay={0.2}>
                                Onde estamos
                            </SectionLabel>
                        </div>

                        <ProseBlock
                            align="left"
                            size="md"
                            delay={0.5}
                            maxWidth="100%"
                            lines={[
                                'Já passamos catorze lições investigando',
                                'se este livro merece confiança.',
                                '',
                                'A resposta foi: sim, mais do que se imagina.',
                            ]}
                        />

                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 0.4, scaleX: 1 }}
                            transition={{ delay: 1.4, duration: 0.9 }}
                            className="h-px my-7"
                            style={{ width: '120px', background: colors.inkMuted }}
                        />

                        <ProseBlock
                            align="left"
                            size="md"
                            delay={1.7}
                            maxWidth="100%"
                            lines={[
                                'Hoje a pergunta muda.',
                                { text: 'Não mais podemos confiar nele?', italic: true },
                                { text: 'Mas que história ele está contando?', italic: true },
                            ]}
                        />
                    </div>

                    <div className="hidden md:block md:col-span-5 lg:col-span-6" />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
