'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, EvidenceCard, VerseCard, colors } from './shared';

const themes = [
    { ref: 'Hb 4–7',   theme: 'Sumo sacerdócio', note: 'Melquisedeque como tipo' },
    { ref: 'Hb 8–10',  theme: 'Santuário e sacrifício', note: 'Sombra dos bens vindouros' },
    { ref: 'Hb 11',    theme: 'Heróis da fé', note: 'Todos apontando ao mesmo cumprimento' },
];

export function Slide21() {
    return (
        <ConvergenceWrapper stratum="orbitas">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <EvidenceCard
                    evidenceNumber="08"
                    title="Hebreus inteiro — Exegese sustentada"
                    icon="🏛"
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
                            A epístola aos Hebreus é uma exegese sustentada do AT à luz de Cristo. Não como alegorese livre, mas com critérios:
                        </motion.p>

                        <div className="space-y-2">
                            {themes.map((t, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + i * 0.18 }}
                                    className="flex items-center gap-3 p-3 rounded-lg"
                                    style={{
                                        background: `${colors.vectorBlue}10`,
                                        border: `1px solid ${colors.vectorBlue}25`,
                                    }}
                                >
                                    <span
                                        className="flex-shrink-0 px-2.5 py-1 rounded text-xs font-bold font-mono"
                                        style={{
                                            background: `${colors.vectorBlue}25`,
                                            color: colors.vectorBlue,
                                            border: `1px solid ${colors.vectorBlue}50`,
                                        }}
                                    >
                                        {t.ref}
                                    </span>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold" style={{ color: colors.textStarlight }}>
                                            {t.theme}
                                        </p>
                                        <p className="text-xs" style={{ color: colors.textMuted }}>
                                            {t.note}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <VerseCard
                            reference="Hebreus 10:1"
                            text="A lei tem sombra dos bens vindouros, e não a imagem real das coisas."
                            tone="blue"
                            delay={1.4}
                        />
                    </div>
                </EvidenceCard>
            </div>
        </ConvergenceWrapper>
    );
}
