'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, ProseBlock, colors } from './shared';

export function Slide14({ slideIndex = 13 }) {
    return (
        <ParchmentWrapper slideIndex={slideIndex}>
            <div className="max-w-3xl mx-auto px-8 py-12 flex flex-col items-center justify-center w-full">
                <div className="mb-8">
                    <SectionLabel align="center" delay={0.2}>
                        Próxima parada
                    </SectionLabel>
                </div>

                <ProseBlock
                    align="center"
                    size="md"
                    delay={0.5}
                    color={colors.inkSoft}
                    maxWidth="34rem"
                    lines={[
                        'Nas próximas três lições:',
                        'objeções honestas, método de estudo,',
                        'e então abrimos João.',
                        '',
                        { text: 'Por que João?', italic: true, bold: true },
                    ]}
                />

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.4, scaleX: 1 }}
                    transition={{ delay: 1.8, duration: 0.9 }}
                    className="h-px mx-auto my-12"
                    style={{ width: '120px', background: colors.inkMuted }}
                />

                <BiblicalQuote
                    reference="João 1:1, 14"
                    size="lg"
                    align="center"
                    delay={2.2}
                    useGold
                    lines={[
                        'No princípio era o Verbo,',
                        'e o Verbo se fez carne,',
                        'e habitou entre nós.',
                    ]}
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 4.2, duration: 1.0 }}
                    className="h-px mx-auto mt-12 mb-6"
                    style={{ width: '100px', background: colors.goldDawn }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.6, duration: 0.9 }}
                    className="text-center text-base md:text-lg italic"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: 'var(--font-cormorant), Georgia, serif',
                    }}
                >
                    Gênesis e Apocalipse encontrados num só versículo.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
