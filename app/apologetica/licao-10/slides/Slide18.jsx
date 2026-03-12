'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, ScribeWriting, colors } from './shared';

export function Slide18() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-6xl text-center mb-4">💔</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    ALIANÇA NÃO É CONTRATO — É RELACIONAMENTO
                </motion.h2>

                <DossierCard delay={0.5} highlight>
                    <p className="text-lg leading-relaxed mb-4" style={{ color: colors.textLight }}>
                        Quando os profetas acusam Israel de &quot;quebrar a aliança,&quot; a metáfora mais comum é <span style={{ color: colors.stampDebate, fontWeight: 'bold' }}>adultério</span>.
                    </p>
                    <p className="text-base" style={{ color: colors.textMedium }}>
                        Não é violação contratual — é traição relacional.
                    </p>
                </DossierCard>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mt-6 p-5 rounded-xl"
                    style={{ background: `${colors.mapBlue}15`, border: `1px solid ${colors.mapBlue}40` }}
                >
                    <ScribeWriting text="Oseias casa com uma prostituta como dramatização disso." className="text-lg text-center" delay={1} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="mt-8 p-4 rounded-lg text-center"
                    style={{ background: `${colors.stampVerified}10`, border: `1px solid ${colors.stampVerified}30` }}
                >
                    <p className="text-sm" style={{ color: colors.stampVerified }}>🩺 NOTA PARA A GUGA</p>
                    <p className="text-base mt-2" style={{ color: colors.textLight }}>
                        Uma aliança terapêutica tem estrutura, compromisso, e pode ser quebrada. Quando vínculos de confiança são traídos, o problema não é &quot;regras violadas&quot; — é relação destruída.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
