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
                    className="w-full max-w-3xl p-5 rounded-lg text-center"
                    style={{
                        background: `${colors.hebrewPrimary}10`,
                        border: `1px solid ${colors.hebrewPrimary}30`
                    }}
                >
                    <p className="text-xs uppercase tracking-widest mb-3" style={{ color: colors.goldAged }}>
                        Gênesis 1:1 — Exemplo ao vivo
                    </p>

                    {/* Hebraico original */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8 }}
                        className="text-2xl md:text-3xl mb-1"
                        style={{ color: colors.hebrewPrimary, direction: 'rtl', fontFamily: 'serif' }}
                    >
                        בְּרֵאשִׁ֖ית בָּרָ֣א אֱלֹהִ֑ים אֵ֥ת הַשָּׁמַ֖יִם וְאֵ֥ת הָאָֽרֶץ
                    </motion.p>

                    {/* Transliteração */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.1 }}
                        className="text-sm italic mb-3"
                        style={{ color: colors.hebrewLight }}
                    >
                        Bereshít bará Elohím et hashamáyim ve'ét ha'árets
                    </motion.p>

                    {/* Tradução */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.4 }}
                        className="text-base mb-3"
                        style={{ color: colors.textLight }}
                    >
                        «No princípio, criou Deus os céus e a terra.»
                    </motion.p>

                    {/* Comparação */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.7 }}
                        className="flex items-center justify-center gap-6 text-sm"
                    >
                        <span style={{ color: colors.hebrewPrimary }}>
                            <strong>7</strong> palavras em hebraico
                        </span>
                        <span style={{ color: colors.textMedium }}>→</span>
                        <span style={{ color: colors.portPrimary }}>
                            <strong>10</strong> palavras em português
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
