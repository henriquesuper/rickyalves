'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, EvidenceCard, VerseCard, colors } from './shared';

export function Slide19() {
    return (
        <ConvergenceWrapper stratum="orbitas">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <EvidenceCard
                    evidenceNumber="06"
                    title="Atos 8:30-35 — Filipe e o eunuco etíope"
                    icon="🛤"
                    accentColor={colors.vectorBlue}
                    delay={0.3}
                >
                    <div className="space-y-4">
                        <VerseCard
                            reference="Atos 8:34-35"
                            text="O eunuco perguntou a Filipe: 'de quem fala o profeta? De si mesmo, ou de algum outro?' — e Filipe, começando por esta passagem da Escritura [Isaías 53], anunciou-lhe Jesus."
                            tone="blue"
                            delay={0.5}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="rounded-lg p-4"
                            style={{
                                background: `${colors.vectorBlue}10`,
                                border: `1px solid ${colors.vectorBlue}30`,
                            }}
                        >
                            <p
                                className="text-xs font-bold uppercase tracking-wider mb-2"
                                style={{ color: colors.vectorBlue }}
                            >
                                Cena programática
                            </p>
                            <p className="text-sm leading-relaxed" style={{ color: colors.textStarlight }}>
                                Esta cena <span style={{ color: colors.vectorBlue, fontWeight: 600 }}>mostra como os primeiros pregadores cristãos liam o AT</span> — partiam de uma passagem, e ela os levava a Jesus.
                            </p>
                            <p className="text-sm leading-relaxed mt-2" style={{ color: colors.textMedium }}>
                                Não inventando conexões, mas seguindo um princípio interpretativo que eles entendiam estar no texto.
                            </p>
                        </motion.div>
                    </div>
                </EvidenceCard>
            </div>
        </ConvergenceWrapper>
    );
}
