'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, colors, quizQuestions } from './shared';

export function Slide54() {
    return (
        <ExcavationWrapper stratum="bedrock">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-2"
                    style={{ color: colors.textLight }}
                >
                    VOLTANDO ÀS SUAS RESPOSTAS
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-6"
                    style={{ color: colors.textMedium }}
                >
                    No começo da escavação, você respondeu...
                </motion.p>

                {/* Quiz questions compact */}
                <div className="space-y-3">
                    {quizQuestions.map((q, i) => (
                        <motion.div
                            key={q.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.15 }}
                            className="p-3 rounded-xl flex flex-col md:flex-row md:items-center gap-3"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${colors.excavationAmber}15`,
                            }}
                        >
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                                <span className="text-lg shrink-0">{q.icon}</span>
                                <p className="text-xs leading-snug" style={{ color: colors.textMedium }}>
                                    {q.question}
                                </p>
                            </div>
                            <div className="flex gap-2 shrink-0">
                                <span
                                    className="text-xs px-3 py-1 rounded-full cursor-default"
                                    style={{ background: `${colors.quizConcordo}20`, color: colors.quizConcordo, border: `1px solid ${colors.quizConcordo}40` }}
                                >
                                    Concordo
                                </span>
                                <span
                                    className="text-xs px-3 py-1 rounded-full cursor-default"
                                    style={{ background: `${colors.quizDepende}20`, color: colors.quizDepende, border: `1px solid ${colors.quizDepende}40` }}
                                >
                                    Depende
                                </span>
                                <span
                                    className="text-xs px-3 py-1 rounded-full cursor-default"
                                    style={{ background: `${colors.quizDiscordo}20`, color: colors.quizDiscordo, border: `1px solid ${colors.quizDiscordo}40` }}
                                >
                                    Discordo
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Insight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="mt-6 p-4 rounded-xl"
                    style={{ background: `${colors.excavationAmber}12`, border: `1px solid ${colors.excavationAmber}30` }}
                >
                    <p className="text-sm italic" style={{ color: colors.excavationAmber }}>
                        Mudou alguma coisa? As respostas do começo ainda fazem sentido?
                    </p>
                </motion.div>
            </div>
        </ExcavationWrapper>
    );
}
