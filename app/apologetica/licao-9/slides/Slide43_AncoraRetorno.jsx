'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, AnchorBadge, colors, quizQuestions } from './shared';

export default function Slide43_AncoraRetorno() {
    const q = quizQuestions[0]; // Pergunta 1 — âncora

    return (
        <SlideWrapper variant="quiz">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-xs uppercase tracking-[0.3em] mb-4 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    BLOCO 8 — RETORNO DA ÂNCORA
                </motion.p>

                <motion.div className="flex justify-center mb-6">
                    <AnchorBadge delay={0.3} />
                </motion.div>

                <DossierCard delay={0.4} highlight status="debate">
                    <div className="text-center py-6">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-sm uppercase tracking-wider mb-4"
                            style={{ color: colors.amber }}
                        >
                            Pergunta 1 — Você respondeu isso lá no início:
                        </motion.p>

                        <span className="text-4xl block mb-4">{q.icon}</span>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="text-xl md:text-2xl leading-relaxed mb-6"
                            style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                            &ldquo;{q.question}&rdquo;
                        </motion.p>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="h-0.5 max-w-xs mx-auto my-6"
                            style={{ background: `linear-gradient(to right, transparent, ${colors.amber}60, transparent)` }}
                        />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="space-y-3"
                        >
                            <p className="text-lg" style={{ color: colors.amber }}>
                                Agora aplique ao que vimos:
                            </p>
                            <p className="text-base" style={{ color: colors.warmWhite }}>
                                Os autores bíblicos se lembram &quot;perfeitamente&quot;?
                            </p>
                            <p className="text-base" style={{ color: colors.mossGreen }}>
                                Não. E isso é <span className="font-bold">exatamente o que esperamos</span> de testemunho genuíno.
                            </p>
                        </motion.div>
                    </div>
                </DossierCard>
            </div>
        </SlideWrapper>
    );
}
