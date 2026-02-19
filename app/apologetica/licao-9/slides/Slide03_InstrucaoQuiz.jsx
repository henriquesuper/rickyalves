'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, DarkCaseHeader, colors } from './shared';

export default function Slide03_InstrucaoQuiz() {
    return (
        <SlideWrapper variant="quiz">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <DarkCaseHeader
                    title="Mapeamento de Critérios"
                    icon="🗺️"
                    protocol="BLOCO 2 — QUIZ INTERATIVO"
                    delay={0.2}
                />

                <DossierCard delay={0.4}>
                    <div className="text-center py-6">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl mb-6"
                            style={{ color: colors.warmWhite }}
                        >
                            6 afirmações. Nenhuma é sobre a Bíblia.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-base mb-8 italic"
                            style={{ color: colors.textMedium }}
                        >
                            Responda com o que você realmente pensa — não com o que acha que deveria pensar.
                        </motion.p>

                        {/* Escala visual */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="flex justify-center gap-4 mb-6"
                        >
                            {[
                                { label: 'CONCORDO', color: colors.quizConcordo, icon: '✅' },
                                { label: 'DEPENDE', color: colors.quizDepende, icon: '🤔' },
                                { label: 'DISCORDO', color: colors.quizDiscordo, icon: '❌' },
                            ].map((opt, i) => (
                                <motion.div
                                    key={opt.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1 + i * 0.15 }}
                                    className="px-6 py-3 rounded-xl border-2 text-center"
                                    style={{
                                        borderColor: opt.color,
                                        background: `${opt.color}15`,
                                    }}
                                >
                                    <span className="text-2xl block mb-1">{opt.icon}</span>
                                    <span
                                        className="text-sm font-bold uppercase tracking-wider"
                                        style={{ color: opt.color }}
                                    >
                                        {opt.label}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ delay: 1.5 }}
                            className="text-sm"
                            style={{ color: colors.textMuted }}
                        >
                            Estamos mapeando critérios — não testando conhecimento.
                        </motion.p>
                    </div>
                </DossierCard>
            </div>
        </SlideWrapper>
    );
}
