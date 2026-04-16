'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors, quizQuestions } from './shared';

export function Slide03() {
    const questions = [quizQuestions[2], quizQuestions[3], quizQuestions[4]];

    return (
        <LabWrapper stratum="naked-eye">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-8"
                >
                    <h2
                        className="text-2xl font-bold mb-2"
                        style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        CONTINUANDO...
                    </h2>
                </motion.div>

                <div className="space-y-5">
                    {questions.map((q, i) => (
                        <motion.div
                            key={q.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.2 }}
                            className="rounded-xl p-5"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${colors.lensBlue}15`,
                            }}
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <span className="text-3xl">{q.icon}</span>
                                <p className="text-base" style={{ color: colors.textLight }}>
                                    {q.question}
                                </p>
                            </div>
                            <div className="flex gap-3 ml-12">
                                <button
                                    className="px-4 py-2 rounded-lg text-sm font-medium transition-opacity hover:opacity-80"
                                    style={{ background: colors.quizConcordo + '20', color: colors.quizConcordo }}
                                >
                                    Concordo
                                </button>
                                <button
                                    className="px-4 py-2 rounded-lg text-sm font-medium transition-opacity hover:opacity-80"
                                    style={{ background: colors.quizDepende + '20', color: colors.quizDepende }}
                                >
                                    Depende
                                </button>
                                <button
                                    className="px-4 py-2 rounded-lg text-sm font-medium transition-opacity hover:opacity-80"
                                    style={{ background: colors.quizDiscordo + '20', color: colors.quizDiscordo }}
                                >
                                    Discordo
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </LabWrapper>
    );
}
