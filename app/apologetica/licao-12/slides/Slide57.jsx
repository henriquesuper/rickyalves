'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors, quizQuestions } from './shared';

export function Slide57() {
    return (
        <LabWrapper stratum="full-clarity">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-2 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Quiz Revisitado
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm text-center mb-6 italic"
                    style={{ color: colors.textMuted }}
                >
                    Lembra das suas respostas do início? Mudou alguma coisa?
                </motion.p>

                <div className="space-y-2">
                    {quizQuestions.map((q, i) => (
                        <motion.div
                            key={q.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.12 }}
                            className="flex items-start gap-3 p-3 rounded-xl"
                            style={{ background: colors.bgSurface, border: `1px solid ${colors.lensBlue}10` }}
                        >
                            <span className="text-lg">{q.icon}</span>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm" style={{ color: colors.textMedium }}>{q.question}</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span
                                        className="text-xs px-2 py-0.5 rounded-full font-bold"
                                        style={{ background: `${colors.quizDiscordo}20`, color: colors.quizDiscordo }}
                                    >
                                        Discordo
                                    </span>
                                    <span className="text-xs" style={{ color: colors.textMuted }}>
                                        → Lentes {q.revealSlides.map(s => s).join(', ')}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-4 text-sm text-center"
                    style={{ color: colors.lensTeal }}
                >
                    Se suas respostas mudaram, suas lentes estão funcionando.
                </motion.p>
            </div>
        </LabWrapper>
    );
}
