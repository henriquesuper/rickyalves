'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, DarkCaseHeader, colors } from './shared';

export default function Slide10_TransicaoPosQuiz() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <DarkCaseHeader
                    title="Mapeamento Completo"
                    icon="✅"
                    delay={0.2}
                />

                <DossierCard delay={0.4} highlight>
                    <div className="text-center py-8">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-xl md:text-2xl leading-relaxed mb-6"
                            style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                            Seis perguntas — e nenhuma era sobre a Bíblia.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="text-lg mb-4"
                            style={{ color: colors.amber }}
                        >
                            Todas eram sobre como você avalia credibilidade.
                        </motion.p>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            className="h-0.5 max-w-xs mx-auto my-6"
                            style={{ background: `linear-gradient(to right, transparent, ${colors.amber}60, transparent)` }}
                        />

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.4 }}
                            className="text-base"
                            style={{ color: colors.textMedium }}
                        >
                            Agora vamos aplicar <span style={{ color: colors.mossGreen }}>esses mesmos critérios</span> a documentos históricos reais.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            transition={{ delay: 1.7 }}
                            className="text-sm mt-4 italic"
                            style={{ color: colors.textMuted }}
                        >
                            Os critérios são os seus — não os meus.
                        </motion.p>
                    </div>
                </DossierCard>
            </div>
        </SlideWrapper>
    );
}
