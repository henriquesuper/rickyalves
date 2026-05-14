'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, QuietTitle, RomanNumeral, colors, fonts } from './shared';

const tempos = [
    {
        roman: 'I',
        title: 'Chamado',
        books: 'Gênesis a Deuteronômio',
        description: 'Deus cria, a humanidade cai, um povo é chamado.',
    },
    {
        roman: 'II',
        title: 'Falha',
        books: 'Josué a Ester',
        description: 'O povo recebe terra, reis, profetas — e falha em todos.',
    },
    {
        roman: 'III',
        title: 'Lamento',
        books: 'Jó a Cantares',
        description: 'Como viver na tensão entre o que foi prometido e o que está acontecendo.',
    },
    {
        roman: 'IV',
        title: 'Espera',
        books: 'Isaías a Malaquias',
        description: 'Os profetas denunciam o presente e prometem futuro. Quatrocentos anos de silêncio.',
    },
];

export function Slide06({ slideIndex = 5 }) {
    return (
        <ParchmentWrapper slideIndex={slideIndex}>
            <div className="max-w-5xl mx-auto px-8 py-6 flex flex-col justify-center w-full">
                <QuietTitle size="sm" align="center" delay={0.2}>
                    O Antigo Testamento <span style={{ color: colors.inkMuted, fontWeight: 400 }}>—</span> quatro tempos
                </QuietTitle>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.4, scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.9 }}
                    className="h-px mx-auto my-6"
                    style={{ width: '120px', background: colors.inkMuted }}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mt-2">
                    {tempos.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0 + i * 0.25, duration: 0.7 }}
                            className="flex gap-5"
                        >
                            <div className="flex-shrink-0 pt-1" style={{ width: '3rem' }}>
                                <RomanNumeral
                                    value={t.roman}
                                    size="md"
                                    weight={300}
                                    color={colors.inkFaint}
                                    opacity={0.85}
                                    delay={1.1 + i * 0.25}
                                />
                            </div>
                            <div className="flex-1">
                                <p
                                    className="text-lg md:text-xl"
                                    style={{
                                        color: colors.inkAntique,
                                        fontFamily: fonts.display,
                                        fontWeight: 600,
                                        lineHeight: 1.2,
                                    }}
                                >
                                    {t.title}
                                </p>
                                <p
                                    className="text-xs mt-0.5 italic"
                                    style={{
                                        color: colors.inkMuted,
                                        fontFamily: fonts.body,
                                    }}
                                >
                                    {t.books}
                                </p>
                                <p
                                    className="text-sm mt-1.5"
                                    style={{
                                        color: colors.inkSoft,
                                        fontFamily: fonts.body,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {t.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ParchmentWrapper>
    );
}
