'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, EvidenceCard, VerseCard, colors } from './shared';

const highlights = [
    {
        anchor: '"Todas as Escrituras"',
        explain: 'não passagens isoladas — a totalidade.',
    },
    {
        anchor: '"A seu respeito"',
        explain: 'Jesus se identifica como o referente.',
    },
    {
        anchor: '"Começando por Moisés"',
        explain: 'inclui o Pentateuco, não só os profetas messiânicos óbvios.',
    },
];

export function Slide09() {
    return (
        <ConvergenceWrapper stratum="nucleo">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <EvidenceCard
                    evidenceNumber="01"
                    title="Lucas 24:25-27 — Caminho de Emaús"
                    icon="🌅"
                    delay={0.3}
                >
                    <div className="space-y-4">
                        <VerseCard
                            reference="Lucas 24:25-27"
                            text="Ó néscios e tardos de coração para crer tudo o que os profetas disseram! [...] começando por Moisés e por todos os profetas, expôs-lhes o que constava a seu respeito em todas as Escrituras."
                            tone="focused"
                            delay={0.5}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                            {highlights.map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 + i * 0.18 }}
                                    className="rounded-lg p-3"
                                    style={{
                                        background: `${colors.haloGold}10`,
                                        border: `1px solid ${colors.haloGold}25`,
                                    }}
                                >
                                    <p
                                        className="text-sm font-bold mb-1"
                                        style={{ color: colors.haloGold, fontFamily: "'Playfair Display', Georgia, serif" }}
                                    >
                                        {h.anchor}
                                    </p>
                                    <p className="text-xs" style={{ color: colors.textMedium }}>
                                        {h.explain}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </EvidenceCard>
            </div>
        </ConvergenceWrapper>
    );
}
