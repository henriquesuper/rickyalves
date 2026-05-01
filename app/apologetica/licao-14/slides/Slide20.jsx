'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, EvidenceCard, VerseCard, colors } from './shared';

export function Slide20() {
    return (
        <ConvergenceWrapper stratum="orbitas">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <EvidenceCard
                    evidenceNumber="07"
                    title="1 Coríntios 15:3-4 — Fórmula pré-paulina"
                    icon="📜"
                    accentColor={colors.vectorBlue}
                    delay={0.3}
                >
                    <div className="space-y-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-sm leading-relaxed"
                            style={{ color: colors.textMedium }}
                        >
                            Paulo cita o que ele chama de &ldquo;tradição que recebeu&rdquo; — fórmula provavelmente{' '}
                            <span style={{ color: colors.vectorBlue, fontWeight: 600 }}>pré-paulina</span>, possivelmente dos primeiros 5 anos depois da crucificação:
                        </motion.p>

                        <VerseCard
                            reference="1 Coríntios 15:3-4"
                            text="Cristo morreu pelos nossos pecados, segundo as Escrituras... ressuscitou ao terceiro dia, segundo as Escrituras."
                            tone="blue"
                            delay={0.8}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 }}
                            className="rounded-lg p-4"
                            style={{
                                background: `${colors.vectorBlue}10`,
                                border: `1px solid ${colors.vectorBlue}30`,
                            }}
                        >
                            <p className="text-sm leading-relaxed" style={{ color: colors.textStarlight }}>
                                Note o &ldquo;<span style={{ color: colors.vectorBlue, fontWeight: 600 }}>segundo as Escrituras</span>&rdquo; repetido. Morte e ressurreição lidas pelos primeiros cristãos como cumprimento do AT —{' '}
                                <span style={{ color: colors.haloGold, fontStyle: 'italic' }}>desde o início</span>.
                            </p>
                            <p className="text-sm leading-relaxed mt-3" style={{ color: colors.textMedium }}>
                                Não é teologia tardia da igreja. É o ponto de partida.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="flex items-center justify-center gap-2 text-xs font-mono pt-2"
                            style={{ color: colors.textMuted }}
                        >
                            <span style={{ color: colors.vectorBlue }}>⊙</span>
                            <span>Datação: ~5 anos pós-crucificação</span>
                            <span style={{ color: colors.vectorBlue }}>⊙</span>
                        </motion.div>
                    </div>
                </EvidenceCard>
            </div>
        </ConvergenceWrapper>
    );
}
