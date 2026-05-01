'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, EvidenceCard, VerseCard, colors } from './shared';

export function Slide23() {
    return (
        <ConvergenceWrapper stratum="orbitas" withGlow glowIntensity={0.7}>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <EvidenceCard
                    evidenceNumber="10"
                    title="Apocalipse 19:10 — Frase densa"
                    icon="✦"
                    accentColor={colors.vectorBlue}
                    delay={0.3}
                >
                    <div className="space-y-4">
                        <VerseCard
                            reference="Apocalipse 19:10"
                            text="O testemunho de Jesus é o espírito da profecia."
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
                            <p className="text-sm leading-relaxed" style={{ color: colors.textStarlight }}>
                                No mínimo: a profecia bíblica encontra seu{' '}
                                <span style={{ color: colors.haloGold, fontWeight: 600 }}>núcleo no testemunho a respeito de Jesus</span>.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.3 }}
                            className="text-center pt-2"
                        >
                            <span
                                className="text-xs uppercase tracking-[0.3em] font-mono px-3 py-1 rounded-full"
                                style={{
                                    background: `${colors.haloGold}15`,
                                    color: colors.haloGold,
                                    border: `1px solid ${colors.haloGold}40`,
                                }}
                            >
                                Profecia → Cristo é o centro
                            </span>
                        </motion.div>
                    </div>
                </EvidenceCard>
            </div>
        </ConvergenceWrapper>
    );
}
