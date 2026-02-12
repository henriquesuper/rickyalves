// Slide 26 - Ferramentas Online Gratuitas
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, colors } from './shared';

const tools = [
    {
        icon: '🌐',
        name: 'BibleHub.com',
        desc: 'Interlinear grego/hebraico com parsing, léxicos Strong, paralelos entre versões.',
        highlight: 'THE ferramenta gratuita mais completa.',
        color: colors.greekPrimary,
    },
    {
        icon: '📖',
        name: 'BlueLetterBible.org',
        desc: 'Bíblia interlinear, comentários, Strong Numbers, dados de frequência.',
        highlight: 'Excelente para iniciar.',
        color: colors.portPrimary,
    },
    {
        icon: '📚',
        name: 'biblia.com.br',
        desc: 'Versões em paralelo: ARA, NAA, NVI, NVT, NTLH lado a lado.',
        highlight: 'Comparação rápida em português.',
        color: colors.hebrewPrimary,
    },
    {
        icon: '🔬',
        name: 'StepBible.org',
        desc: 'Análise morfológica detalhada, timeline cronológica.',
        highlight: 'Para estudo avançado.',
        color: colors.goldAged,
    },
];

export default function Slide26_Ferramentas() {
    return (
        <SlideWrapper variant="neutral">
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold mb-8 text-center"
                    style={{ color: colors.goldBright }}
                >
                    🛠️ FERRAMENTAS ONLINE GRATUITAS
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-4 w-full max-w-4xl">
                    {tools.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.15 }}
                        >
                            <PrismCard variant="neutral" className="h-full">
                                <div className="flex items-start gap-3">
                                    <span className="text-3xl flex-shrink-0">{t.icon}</span>
                                    <div>
                                        <p className="font-bold" style={{ color: t.color }}>{t.name}</p>
                                        <p className="text-xs" style={{ color: colors.textLight }}>{t.desc}</p>
                                        <p className="text-xs mt-1 italic" style={{ color: colors.goldAged }}>{t.highlight}</p>
                                    </div>
                                </div>
                            </PrismCard>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-8 text-center text-sm"
                    style={{ color: colors.textMedium }}
                >
                    Nenhuma desculpa para não comparar versões. É grátis.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
