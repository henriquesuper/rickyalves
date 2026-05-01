'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, EvidenceCard, VerseCard, colors } from './shared';

const senses = [
    { word: 'levar à plenitude', accent: false },
    { word: 'completar',         accent: false },
    { word: 'dar plena expressão', accent: true },
];

export function Slide13() {
    return (
        <ConvergenceWrapper stratum="nucleo">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <EvidenceCard
                    evidenceNumber="05"
                    title="Mateus 5:17 — Cumprir, plērōsai"
                    icon="✓"
                    delay={0.3}
                >
                    <div className="space-y-4">
                        <VerseCard
                            reference="Mateus 5:17 (Sermão do Monte)"
                            text="Não cuideis que vim revogar a Lei ou os Profetas; não vim para revogar, vim para cumprir."
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
                                Em grego
                            </p>
                            <p className="text-base mb-2" style={{ color: colors.textStarlight }}>
                                <span
                                    className="font-bold italic text-xl"
                                    style={{ color: colors.haloGold, fontFamily: "'Playfair Display', Georgia, serif" }}
                                >
                                    plērōsai
                                </span>{' '}
                                — carrega sentido de:
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {senses.map((s, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1.2 + i * 0.18 }}
                                        className="px-3 py-1.5 rounded-md text-sm"
                                        style={{
                                            background: s.accent ? colors.haloGold : `${colors.haloGold}20`,
                                            color: s.accent ? colors.bgVoid : colors.textStarlight,
                                            border: `1px solid ${colors.haloGold}40`,
                                            fontWeight: s.accent ? 600 : 400,
                                        }}
                                    >
                                        {s.word}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.9 }}
                            className="text-base italic text-center"
                            style={{ color: colors.haloGold, fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                            Jesus se vê como aquele em quem &ldquo;Lei e Profetas&rdquo; encontram seu telos.
                        </motion.p>
                    </div>
                </EvidenceCard>
            </div>
        </ConvergenceWrapper>
    );
}
