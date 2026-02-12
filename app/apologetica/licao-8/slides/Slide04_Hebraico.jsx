// Slide 04 - Hebraico: A Língua do AT
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, LanguageBadge, colors } from './shared';

const features = [
    { icon: '✦', text: 'Escrita da DIREITA para ESQUERDA' },
    { icon: '✦', text: 'Originalmente só CONSOANTES (sem vogais)' },
    { icon: '✦', text: 'Raízes de 3 letras que geram famílias de palavras' },
    { icon: '✦', text: 'Extraordinariamente CONCRETA e SENSORIAL' },
    { icon: '✦', text: 'Extremamente ECONÔMICA (poucas palavras, muito significado)' },
];

export default function Slide04_Hebraico() {
    return (
        <SlideWrapper variant="hebrew">
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                <LanguageBadge language="hebrew" delay={0.2} className="mb-4" />

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-5xl font-bold mb-2 text-center"
                    style={{ color: colors.hebrewPrimary }}
                >
                    HEBRAICO BÍBLICO
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg mb-8"
                    style={{ color: colors.textMedium }}
                >
                    A língua do Antigo Testamento
                </motion.p>

                <PrismCard delay={0.5} variant="hebrew" className="w-full max-w-3xl mb-6">
                    <div className="space-y-3">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + i * 0.15 }}
                                className="flex items-center gap-3"
                            >
                                <span style={{ color: colors.hebrewPrimary }}>{f.icon}</span>
                                <span style={{ color: colors.textLight }}>{f.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </PrismCard>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="text-center p-4 rounded-lg"
                    style={{
                        background: `${colors.hebrewPrimary}15`,
                        border: `1px solid ${colors.hebrewPrimary}30`
                    }}
                >
                    <p style={{ color: colors.hebrewPrimary }} className="font-bold text-lg">
                        Gênesis 1:1 em hebraico = 7 palavras
                    </p>
                    <p style={{ color: colors.textMedium }}>
                        Em português = 10+ palavras
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
