'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, QuietTitle, colors, fonts } from './shared';

const blocos = [
    {
        title: 'As Cartas',
        lines: [
            'Vinte e uma cartas para situações específicas.',
            'A comunidade aprendendo, em tempo real,',
            'como viver à luz da virada.',
        ],
    },
    {
        title: 'O Apocalipse',
        lines: [
            'Visão dada a João no exílio. Linguagem simbólica.',
            'Não cronograma de eventos — teologia visionária.',
            'O arco se fechando.',
        ],
    },
];

export function Slide10({ slideIndex = 9 }) {
    return (
        <ParchmentWrapper slideIndex={slideIndex}>
            <div className="max-w-5xl mx-auto px-8 py-6 flex flex-col justify-center w-full">
                <QuietTitle size="sm" align="center" delay={0.2}>
                    Depois da virada
                </QuietTitle>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.4, scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.9 }}
                    className="h-px mx-auto my-7"
                    style={{ width: '120px', background: colors.inkMuted }}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-2">
                    {blocos.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0 + i * 0.35, duration: 0.7 }}
                            className="flex flex-col"
                        >
                            <p
                                className="text-xl md:text-2xl mb-3"
                                style={{
                                    color: colors.inkAntique,
                                    fontFamily: fonts.display,
                                    fontWeight: 600,
                                }}
                            >
                                {b.title}
                            </p>
                            {b.lines.map((line, j) => (
                                <p
                                    key={j}
                                    className="text-sm md:text-base"
                                    style={{
                                        color: colors.inkSoft,
                                        fontFamily: fonts.body,
                                        lineHeight: 1.55,
                                    }}
                                >
                                    {line}
                                </p>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </ParchmentWrapper>
    );
}
