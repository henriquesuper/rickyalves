'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, QuietTitle, colors, fonts } from './shared';

const lines = [
    { text: 'O trecho mais filosófico do Novo Testamento.',                 delay: 1.0 },
    { text: 'Dialoga direto com a filosofia clássica.',                     delay: 2.0 },
    { text: 'Faz uma afirmação intelectualmente séria — não um milagre.',   delay: 3.0 },
];

export function Slide02({ slideIndex = 1 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-16">
                <div className="text-center">
                    <SectionLabel align="center" delay={0.2}>
                        Por que João como porta
                    </SectionLabel>

                    <div className="mt-6">
                        <QuietTitle size="md" align="center" delay={0.5}>
                            Profundidade,
                            <br />
                            não fechamento.
                        </QuietTitle>
                    </div>
                </div>

                <div className="mt-14 max-w-2xl mx-auto">
                    {lines.map((ln, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: ln.delay, duration: 0.9 }}
                            className="text-base md:text-lg italic mb-4"
                            style={{
                                color: colors.inkBody,
                                fontFamily: fonts.display,
                                lineHeight: 1.55,
                                textAlign: 'center',
                            }}
                        >
                            — {ln.text}
                        </motion.p>
                    ))}
                </div>
            </div>
        </ParchmentWrapper>
    );
}
