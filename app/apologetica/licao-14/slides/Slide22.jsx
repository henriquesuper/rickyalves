'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, EvidenceCard, VerseCard, colors } from './shared';

export function Slide22() {
    return (
        <ConvergenceWrapper stratum="orbitas">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <EvidenceCard
                    evidenceNumber="09"
                    title="1 Pedro 1:10-12 — Os profetas indagaram"
                    icon="🕯"
                    accentColor={colors.vectorBlue}
                    delay={0.3}
                >
                    <div className="space-y-4">
                        <VerseCard
                            reference="1 Pedro 1:10-12"
                            text="Foi a respeito desta salvação que os profetas indagaram e inquiriram [...] investigando, atentamente, qual a ocasião ou quais as circunstâncias indicadas pelo Espírito de Cristo, que neles estava, ao dar de antemão testemunho sobre os sofrimentos referentes a Cristo."
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
                                Pedro afirma que os <span style={{ color: colors.vectorBlue, fontWeight: 600 }}>próprios profetas do AT</span> — sem entender plenamente — estavam apontando para Cristo, guiados pelo &ldquo;Espírito de Cristo neles.&rdquo;
                            </p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.3 }}
                            className="text-sm italic text-center pt-2"
                            style={{ color: colors.textMuted }}
                        >
                            A intenção cristológica não é projetada de fora — está na origem do texto.
                        </motion.p>
                    </div>
                </EvidenceCard>
            </div>
        </ConvergenceWrapper>
    );
}
