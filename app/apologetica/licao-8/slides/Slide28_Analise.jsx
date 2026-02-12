// Slide 28 - Análise — O que cada tradução priorizou
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, colors } from './shared';

const analyses = [
    {
        version: 'ARA',
        word: '"propiciação"',
        priorizou: 'Fidelidade ao campo semântico grego',
        problema: 'Poucos leitores sabem o que é "propiciação"',
        color: colors.greekPrimary,
    },
    {
        version: 'NVI',
        word: '"sacrifício propiciatório"',
        priorizou: 'Clareza — adicionou "sacrifício" para orientar',
        problema: 'A adição não está no grego',
        color: colors.portPrimary,
    },
    {
        version: 'NTLH',
        word: '"o meio pelo qual os pecados são perdoados"',
        priorizou: 'Compreensão imediata do leitor',
        problema: 'Perde toda a imagem do tabernáculo',
        color: colors.portSecondary,
    },
];

export default function Slide28_Analise() {
    return (
        <SlideWrapper variant="neutral">
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl md:text-3xl font-bold mb-8 text-center"
                    style={{ color: colors.textLight }}
                >
                    O QUE CADA TRADUÇÃO PRIORIZOU
                </motion.h2>

                <div className="space-y-4 w-full max-w-3xl mb-8">
                    {analyses.map((a, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.2 }}
                        >
                            <PrismCard variant="neutral">
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: `${a.color}15`,
                                            border: `1px solid ${a.color}40`
                                        }}
                                    >
                                        <span className="text-sm font-bold" style={{ color: a.color }}>{a.version}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold" style={{ color: colors.textLight }}>{a.word}</p>
                                        <p className="text-xs mt-1" style={{ color: colors.textLight }}>
                                            <span style={{ color: '#22c55e' }}>✓ Priorizou:</span> {a.priorizou}
                                        </p>
                                        <p className="text-xs mt-1" style={{ color: colors.textMedium }}>
                                            <span style={{ color: colors.alertTerracota }}>⚠ Trade-off:</span> {a.problema}
                                        </p>
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
                    className="text-center text-lg font-bold"
                    style={{ color: colors.goldBright }}
                >
                    Nenhuma está errada. São ângulos diferentes da mesma verdade.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
