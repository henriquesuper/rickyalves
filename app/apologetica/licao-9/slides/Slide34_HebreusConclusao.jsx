'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, QuizResponseBadge, colors } from './shared';

export default function Slide34_HebreusConclusao() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="Hebreus: A Conclusão"
                    icon="📋"
                    delay={0.2}
                />

                <div className="flex justify-end mb-4">
                    <QuizResponseBadge questionNumber={5} delay={0.3} />
                </div>

                <DossierCard delay={0.4} highlight status="verified">
                    <div className="py-6 text-center">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl md:text-2xl leading-relaxed mb-4"
                            style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                            Hebreus está no cânon pelo <span style={{ color: colors.mossGreen }}>conteúdo</span> e pela circulação nas comunidades apostólicas — não pela identificação do autor.
                        </motion.p>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.8 }}
                            className="h-0.5 max-w-xs mx-auto my-6"
                            style={{ background: `linear-gradient(to right, transparent, ${colors.mossGreen}60, transparent)` }}
                        />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="space-y-2"
                        >
                            <p className="text-lg" style={{ color: colors.warmWhite }}>Isso significa:</p>
                            <p className="text-base" style={{ color: colors.mossGreen }}>
                                A preservação foi baseada em avaliação real.
                            </p>
                            <p className="text-base" style={{ color: colors.amber }}>
                                Não em assinatura automática.
                            </p>
                        </motion.div>
                    </div>
                </DossierCard>
            </div>
        </SlideWrapper>
    );
}
