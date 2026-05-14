'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, ArcDiagram, ProseBlock, colors } from './shared';

export function Slide12({ slideIndex = 11 }) {
    return (
        <ParchmentWrapper slideIndex={slideIndex}>
            <div className="max-w-5xl mx-auto px-8 py-12 flex flex-col items-center justify-center w-full">
                <div className="mb-12">
                    <SectionLabel align="center" delay={0.2}>
                        O arco
                    </SectionLabel>
                </div>

                <ArcDiagram
                    leftRef="Gênesis 3"
                    leftLabel="a morte entra"
                    rightRef="Apocalipse 21"
                    rightLabel="a morte sai"
                    delay={0.6}
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 3.0, duration: 1.0 }}
                    className="h-px mx-auto mt-16 mb-10"
                    style={{ width: '120px', background: colors.inkMuted }}
                />

                <ProseBlock
                    align="center"
                    size="lg"
                    italic
                    delay={3.4}
                    color={colors.inkAntique}
                    maxWidth="38rem"
                    lines={[
                        'Tudo entre os dois pontos',
                        'é uma única história de resgate.',
                    ]}
                />
            </div>
        </ParchmentWrapper>
    );
}
