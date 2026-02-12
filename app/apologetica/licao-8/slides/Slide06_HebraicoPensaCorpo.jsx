// Slide 06 - O Hebraico Pensa com o Corpo ★
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, OriginalText, colors } from './shared';

const bodyWords = [
    {
        emoji: '👃',
        hebrew: 'אַף',
        transliteration: 'AF',
        meaning: '"Raiva"',
        literal: 'Literalmente: "NARIZ"',
        explanation: '(quando você fica com raiva, seu nariz bufa)'
    },
    {
        emoji: '🤰',
        hebrew: 'רַחֲמִים',
        transliteration: 'RACHAMIM',
        meaning: '"Compaixão"',
        literal: 'Literalmente: de RECHEM = "ÚTERO"',
        explanation: '(a compaixão de Deus é visceral, maternal, uterina)'
    },
    {
        emoji: '👃',
        hebrew: 'אֶרֶךְ אַפַּיִם',
        transliteration: 'EREKH APAYIM',
        meaning: '"Paciência"',
        literal: 'Literalmente: "NARIZ LONGO"',
        explanation: '(demora para o nariz bufar)'
    }
];

export default function Slide06_HebraicoPensaCorpo() {
    return (
        <SlideWrapper variant="hebrew">
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold mb-8 text-center"
                    style={{ color: colors.hebrewPrimary }}
                >
                    O HEBRAICO PENSA COM O CORPO
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-4 w-full mb-8">
                    {bodyWords.map((word, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.3 }}
                        >
                            <PrismCard variant="hebrew" className="h-full">
                                <div className="text-center">
                                    <span className="text-4xl block mb-2">{word.emoji}</span>
                                    <p className="text-sm uppercase tracking-wider mb-1" style={{ color: colors.textMedium }}>
                                        {word.meaning}
                                    </p>
                                    <p className="text-xl font-bold mb-1" style={{ color: colors.hebrewPrimary }}>
                                        {word.transliteration}
                                    </p>
                                    <OriginalText text={word.hebrew} language="hebrew" size="sm" delay={0.5 + i * 0.3} className="mb-2 justify-center flex" />
                                    <p className="text-sm font-bold" style={{ color: colors.goldAged }}>
                                        {word.literal}
                                    </p>
                                    <p className="text-xs mt-1" style={{ color: colors.textMedium }}>
                                        {word.explanation}
                                    </p>
                                </div>
                            </PrismCard>
                        </motion.div>
                    ))}
                </div>

                {/* Destaque - Salmo 103 */}
                <PrismCard delay={1.5} variant="hebrew" highlight className="max-w-3xl">
                    <div className="text-center">
                        <p className="text-sm mb-2" style={{ color: colors.goldAged }}>
                            Salmo 103:8 — «O Senhor é compassivo e misericordioso, tardio em irar-se...»
                        </p>
                        <p className="text-base font-bold" style={{ color: colors.textLight }}>
                            O que o hebraico ouve:
                        </p>
                        <p className="text-lg italic mt-1" style={{ color: colors.hebrewPrimary }}>
                            «Deus sente compaixão <span className="font-bold">NAS ENTRANHAS</span>,<br />
                            concede graça livremente,<br />
                            e tem o <span className="font-bold">NARIZ COMPRIDO</span>.»
                        </p>
                        <p className="text-sm mt-3" style={{ color: colors.textMedium }}>
                            Toda tradução perde essas camadas.
                        </p>
                    </div>
                </PrismCard>
            </div>
        </SlideWrapper>
    );
}
