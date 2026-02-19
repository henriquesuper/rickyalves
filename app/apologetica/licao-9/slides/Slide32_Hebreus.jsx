'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, StampBadge, QuizResponseBadge, ScribeWriting, colors } from './shared';

export default function Slide32_Hebreus() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="Hebreus: O Grande Mistério"
                    subtitle="O único livro do NT sem autor identificado"
                    icon="❓"
                    protocol="CASO NT-04 · ESPECIAL"
                    delay={0.2}
                />

                <div className="flex justify-end mb-4">
                    <QuizResponseBadge questionNumber={5} delay={0.3} />
                </div>

                <DossierCard delay={0.4} status="unknown" highlight>
                    <div className="py-4">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-xl" style={{ color: colors.warmWhite }}>
                                Autor: Desconhecido
                            </h3>
                            <StampBadge type="unknown" size="md" delay={0.6} />
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="p-4 rounded-lg mb-4"
                            style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}20` }}
                        >
                            <ScribeWriting
                                text="«Quem escreveu a epístola, em verdade, só Deus sabe.»"
                                delay={0.9}
                                className="text-xl text-center"
                            />
                            <p className="text-center text-sm mt-2" style={{ color: colors.textMuted }}>
                                — Orígenes de Alexandria, séc. III d.C.
                            </p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="text-base text-center"
                            style={{ color: colors.textLight }}
                        >
                            Dois mil anos de <span style={{ color: colors.mossGreen }}>honestidade intelectual</span> sobre uma limitação real.
                        </motion.p>
                    </div>
                </DossierCard>
            </div>
        </SlideWrapper>
    );
}
