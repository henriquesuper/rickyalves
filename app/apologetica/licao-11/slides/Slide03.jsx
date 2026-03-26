'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ExcavationSeal, StratumHeader, EvidenceScale, BrushReveal, StampBadge, colors, quizQuestions } from './shared';

export function Slide03() {
    const questions = [quizQuestions[2], quizQuestions[3], quizQuestions[4]];

    return (
        <ExcavationWrapper stratum="surface">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-6"
                >
                    <h2
                        className="text-2xl font-bold mb-2"
                        style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        ANTES DE DESCER...
                    </h2>
                    <p style={{ color: colors.textMedium }}>
                        O que você pensa sobre isso?
                    </p>
                </motion.div>

                {/* Cards de perguntas */}
                <div className="space-y-4">
                    {questions.map((q, i) => (
                        <motion.div
                            key={q.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.2 }}
                            className="rounded-xl p-4"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${colors.excavationAmber}15`,
                            }}
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <span className="text-3xl">{q.icon}</span>
                                <p className="text-sm" style={{ color: colors.textLight }}>
                                    {q.question}
                                </p>
                            </div>
                            <div className="flex gap-3 ml-11">
                                <button
                                    className="px-4 py-1.5 rounded-lg text-sm font-medium transition-opacity hover:opacity-80"
                                    style={{
                                        background: colors.quizConcordo + '20',
                                        color: colors.quizConcordo,
                                    }}
                                >
                                    Concordo
                                </button>
                                <button
                                    className="px-4 py-1.5 rounded-lg text-sm font-medium transition-opacity hover:opacity-80"
                                    style={{
                                        background: colors.quizDepende + '20',
                                        color: colors.quizDepende,
                                    }}
                                >
                                    Depende
                                </button>
                                <button
                                    className="px-4 py-1.5 rounded-lg text-sm font-medium transition-opacity hover:opacity-80"
                                    style={{
                                        background: colors.quizDiscordo + '20',
                                        color: colors.quizDiscordo,
                                    }}
                                >
                                    Discordo
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ExcavationWrapper>
    );
}
