'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, EvidenceCard, VerseCard, colors } from './shared';

export function Slide11() {
    return (
        <ConvergenceWrapper stratum="nucleo">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <EvidenceCard
                    evidenceNumber="03"
                    title="João 5:39-40 — As Escrituras testificam dele"
                    icon="🔍"
                    delay={0.3}
                >
                    <div className="space-y-4">
                        <VerseCard
                            reference="João 5:39-40"
                            text="Examinais as Escrituras, porque julgais ter nelas a vida eterna, e são elas mesmas que testificam de mim. Contudo, não quereis vir a mim para terdes vida."
                            tone="focused"
                            delay={0.5}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                            <motion.div
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9 }}
                                className="rounded-lg p-4"
                                style={{
                                    background: `${colors.haloGold}10`,
                                    border: `1px solid ${colors.haloGold}30`,
                                }}
                            >
                                <p
                                    className="text-xs font-bold uppercase tracking-wider mb-2"
                                    style={{ color: colors.haloGold }}
                                >
                                    (a) Reivindicação positiva
                                </p>
                                <p className="text-sm leading-relaxed" style={{ color: colors.textStarlight }}>
                                    As Escrituras <span style={{ color: colors.haloGold, fontWeight: 600 }}>testificam dele</span>.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.1 }}
                                className="rounded-lg p-4"
                                style={{
                                    background: `${colors.warnRose}10`,
                                    border: `1px solid ${colors.warnRose}30`,
                                }}
                            >
                                <p
                                    className="text-xs font-bold uppercase tracking-wider mb-2"
                                    style={{ color: colors.warnRose }}
                                >
                                    (b) Diagnóstico negativo
                                </p>
                                <p className="text-sm leading-relaxed" style={{ color: colors.textStarlight }}>
                                    Ler as Escrituras sem chegar a ele é{' '}
                                    <span style={{ color: colors.warnRose, fontWeight: 600 }}>falhar em entendê-las</span>.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </EvidenceCard>
            </div>
        </ConvergenceWrapper>
    );
}
