// Slide 05 - Raízes Trilíteras
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, OriginalText, colors } from './shared';

const derivations = [
    { hebrew: 'katáv', meaning: 'ele escreveu' },
    { hebrew: 'ketáv', meaning: 'escrita' },
    { hebrew: 'miktáv', meaning: 'carta' },
    { hebrew: 'katúv', meaning: 'escrito (adjetivo)' },
    { hebrew: 'kātáv', meaning: 'escriba' },
];

export default function Slide05_RaizesTriliteras() {
    return (
        <SlideWrapper variant="hebrew">
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold mb-2 text-center"
                    style={{ color: colors.hebrewPrimary }}
                >
                    RAÍZES TRILÍTERAS
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg mb-8 text-center"
                    style={{ color: colors.textMedium }}
                >
                    Uma raiz → uma família de significados
                </motion.p>

                {/* Raiz central */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="mb-8 text-center"
                >
                    <OriginalText text="כ – ת – ב" language="hebrew" size="xl" delay={0.5} />
                    <p className="text-xl mt-2" style={{ color: colors.hebrewPrimary }}>k – t – b</p>
                    <p className="text-sm" style={{ color: colors.textMedium }}>(escrever)</p>
                </motion.div>

                {/* Derivações - ramificações */}
                <div className="flex flex-wrap gap-3 justify-center mb-8">
                    {derivations.map((d, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.2, type: 'spring' }}
                            className="px-4 py-3 rounded-lg text-center"
                            style={{
                                background: `${colors.bgSurface}CC`,
                                border: `1px solid ${colors.hebrewPrimary}40`
                            }}
                        >
                            <span className="font-bold block" style={{ color: colors.hebrewPrimary }}>
                                {d.hebrew}
                            </span>
                            <span className="text-sm" style={{ color: colors.textMedium }}>
                                {d.meaning}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <PrismCard delay={1.8} variant="hebrew" className="max-w-2xl">
                    <p className="text-center text-sm" style={{ color: colors.textLight }}>
                        Quando um autor usa várias palavras da mesma raiz,<br />
                        está criando um <span style={{ color: colors.goldAged }} className="font-bold">jogo linguístico</span>
                        {' '}que quase sempre se perde na tradução.
                    </p>
                </PrismCard>
            </div>
        </SlideWrapper>
    );
}
