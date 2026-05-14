'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, QuietTitle, BigNumber, colors, fonts } from './shared';

const data = [
    { value: '66',     label: 'Livros' },
    { value: '~40',    label: 'Autores' },
    { value: '~1.500', label: 'Anos' },
    { value: '3',      label: 'Línguas' },
];

export function Slide04({ slideIndex = 3 }) {
    return (
        <ParchmentWrapper slideIndex={slideIndex}>
            <div className="max-w-5xl mx-auto px-8 py-12 flex flex-col items-center justify-center">
                <div className="mb-4">
                    <SectionLabel align="center" delay={0.2}>
                        Antes de tudo
                    </SectionLabel>
                </div>

                <QuietTitle size="md" delay={0.5}>
                    Uma biblioteca, não um livro
                </QuietTitle>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.4, scaleX: 1 }}
                    transition={{ delay: 1.0, duration: 0.9 }}
                    className="h-px mx-auto my-12"
                    style={{ width: '120px', background: colors.inkMuted }}
                />

                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 mt-6">
                    {data.map((d, i) => (
                        <BigNumber
                            key={i}
                            value={d.value}
                            label={d.label}
                            delay={1.3 + i * 0.25}
                        />
                    ))}
                </div>
            </div>
        </ParchmentWrapper>
    );
}
