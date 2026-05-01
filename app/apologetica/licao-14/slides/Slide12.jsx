'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, EvidenceCard, VerseCard, colors } from './shared';

export function Slide12() {
    return (
        <ConvergenceWrapper stratum="nucleo">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <EvidenceCard
                    evidenceNumber="04"
                    title="João 5:46 — Moisés escreveu a meu respeito"
                    icon="📖"
                    delay={0.3}
                >
                    <div className="space-y-4">
                        <VerseCard
                            reference="João 5:46"
                            text="Pois, se vós crêsseis em Moisés, também crieríeis em mim, porque ele escreveu a meu respeito."
                            tone="focused"
                            delay={0.5}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
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
                                Especificidade pentateuca
                            </p>
                            <p className="text-sm md:text-base leading-relaxed" style={{ color: colors.textStarlight }}>
                                A reivindicação se estende{' '}
                                <span style={{ color: colors.haloGold, fontWeight: 600 }}>especificamente ao Pentateuco</span>{' '}
                                mosaico. Jesus está dizendo que o próprio Moisés escreveu sobre ele — não apenas os profetas messiânicos óbvios.
                            </p>
                        </motion.div>
                    </div>
                </EvidenceCard>
            </div>
        </ConvergenceWrapper>
    );
}
