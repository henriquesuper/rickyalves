// Slide 24 - Recomendação Prática
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, colors } from './shared';

const recommendations = [
    {
        purpose: 'ESTUDO',
        versions: ['NAA', 'ARA'],
        icon: '📖',
        note: 'Mais literais, preservam ambiguidades do texto.',
    },
    {
        purpose: 'DEVOCIONAL',
        versions: ['NVT', 'NVI'],
        icon: '🙏',
        note: 'Linguagem moderna, flui naturalmente.',
    },
    {
        purpose: 'COMPARAÇÃO',
        versions: ['NAA + NVT', 'ARA + NTLH'],
        icon: '🔍',
        note: 'Uma formal + uma dinâmica = visão mais completa.',
    },
    {
        purpose: 'NOVOS LEITORES',
        versions: ['NTLH', 'NVT'],
        icon: '🌱',
        note: 'Acessíveis, sem vocabulário teológico pesado.',
    },
];

export default function Slide24_Recomendacao() {
    return (
        <SlideWrapper variant="neutral">
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold mb-8 text-center"
                    style={{ color: colors.goldBright }}
                >
                    RECOMENDAÇÃO PRÁTICA
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-4 w-full max-w-4xl mb-8">
                    {recommendations.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.15 }}
                        >
                            <PrismCard variant="neutral" className="h-full">
                                <div className="flex items-start gap-3">
                                    <span className="text-3xl">{r.icon}</span>
                                    <div>
                                        <p className="text-sm uppercase tracking-wider font-bold" style={{ color: colors.goldAged }}>
                                            {r.purpose}
                                        </p>
                                        <p className="text-lg font-bold" style={{ color: colors.textLight }}>
                                            {r.versions.join(' / ')}
                                        </p>
                                        <p className="text-xs" style={{ color: colors.textMedium }}>
                                            {r.note}
                                        </p>
                                    </div>
                                </div>
                            </PrismCard>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-center p-4 rounded-lg"
                    style={{
                        background: `${colors.portPrimary}10`,
                        border: `1px solid ${colors.portPrimary}30`
                    }}
                >
                    <p className="text-lg font-bold" style={{ color: colors.portPrimary }}>
                        🎯 Regra de ouro: COMPARE sempre duas versões.
                    </p>
                    <p className="text-sm" style={{ color: colors.textMedium }}>
                        (Uma formal e uma dinâmica)
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
