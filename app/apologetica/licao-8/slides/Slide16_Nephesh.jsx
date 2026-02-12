// Slide 16 - Caso 1: Nephesh 
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, OriginalText, colors } from './shared';

const translations = [
    { version: 'ARC', text: '"alma vivente"', color: colors.hebrewPrimary },
    { version: 'NAA', text: '"ser vivente"', color: colors.greekPrimary },
    { version: 'NTLH', text: '"um ser vivo"', color: colors.portPrimary },
];

export default function Slide16_Nephesh() {
    return (
        <SlideWrapper variant="hebrew">
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mb-4"
                >
                    <p className="text-sm uppercase tracking-widest mb-2" style={{ color: colors.goldAged }}>Caso #1</p>
                    <OriginalText text="נֶפֶשׁ" language="hebrew" size="xl" delay={0.3} className="justify-center flex" />
                    <p className="text-2xl font-bold mt-2" style={{ color: colors.hebrewPrimary }}>NEPHESH</p>
                </motion.div>

                {/* Gn 2:7 — original + traduções empilhadas */}
                <PrismCard delay={0.5} variant="hebrew" className="w-full max-w-3xl mb-5">
                    <p className="text-xs uppercase tracking-widest mb-2 text-center" style={{ color: colors.goldAged }}>
                        Gênesis 2:7
                    </p>
                    <p className="text-base italic text-center mb-4" style={{ color: colors.textMedium }}>
                        «...e o homem tornou-se <strong style={{ color: colors.hebrewPrimary }}>nephesh</strong> chayyāh.»
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch gap-3">
                        {translations.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + i * 0.25 }}
                                className="flex-1 text-center p-3 rounded-lg"
                                style={{
                                    background: `${t.color}10`,
                                    border: `1px solid ${t.color}30`
                                }}
                            >
                                <p className="text-xs font-bold mb-1" style={{ color: t.color }}>{t.version}</p>
                                <p className="text-sm" style={{ color: colors.textLight }}>{t.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </PrismCard>

                <PrismCard delay={1.5} variant="hebrew" highlight className="max-w-2xl">
                    <div className="text-center">
                        <p className="text-sm mb-2" style={{ color: colors.textLight }}>
                            <span className="font-bold" style={{ color: colors.hebrewPrimary }}>Nephesh</span> aparece
                            {' '}<span className="font-bold" style={{ color: colors.goldBright }}>754 vezes</span> no AT.
                        </p>
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            É traduzida por <span className="font-bold" style={{ color: colors.alertTerracota }}>dezenas de palavras diferentes</span>.
                        </p>
                        <p className="text-sm mt-3 italic" style={{ color: colors.goldAged }}>
                            O conceito hebraico não tem divisão corpo/alma grega.<br />
                            Nephesh = a pessoa inteira, viva, que respira.
                        </p>
                    </div>
                </PrismCard>
            </div>
        </SlideWrapper>
    );
}
