'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, colors, quizQuestions } from './shared';

export default function Slide07_Pergunta4() {
    const q = quizQuestions[3];
    return (
        <SlideWrapper variant="quiz">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-xs uppercase tracking-[0.3em] mb-6 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Pergunta 4 de 6
                </motion.p>
                <DossierCard delay={0.3}>
                    <div className="text-center py-8">
                        <span className="text-4xl block mb-4">{q.icon}</span>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl md:text-2xl leading-relaxed"
                            style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                            &ldquo;{q.question}&rdquo;
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex justify-center gap-4 mt-8"
                        >
                            {[
                                { label: 'CONCORDO', color: colors.quizConcordo },
                                { label: 'DEPENDE', color: colors.quizDepende },
                                { label: 'DISCORDO', color: colors.quizDiscordo },
                            ].map((opt) => (
                                <div key={opt.label} className="px-5 py-2 rounded-lg border-2 text-sm font-bold uppercase tracking-wider"
                                    style={{ borderColor: `${opt.color}60`, color: opt.color, background: `${opt.color}10` }}>
                                    {opt.label}
                                </div>
                            ))}
                        </motion.div>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1.1 }}
                            className="text-sm mt-6" style={{ color: colors.textMuted }}>
                            Responda pelo celular
                        </motion.p>
                    </div>
                </DossierCard>
            </div>
        </SlideWrapper>
    );
}
