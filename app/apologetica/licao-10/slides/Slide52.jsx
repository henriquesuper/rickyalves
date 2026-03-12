'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, colors } from './shared';

export function Slide52() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>HONRA E VERGONHA — O SISTEMA OPERACIONAL</motion.h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <DossierCard delay={0.4} status="debate">
                        <div className="text-center">
                            <p className="text-3xl mb-2">🏆</p>
                            <h3 className="font-bold text-lg mb-2" style={{ color: colors.stampDebate }}>Cultura Ocidental Moderna</h3>
                            <p className="text-base" style={{ color: colors.textLight }}>Culpa individual. &quot;Eu errei.&quot;</p>
                            <p className="text-sm mt-1" style={{ color: colors.textMuted }}>Baseada em regras internas e consciência.</p>
                        </div>
                    </DossierCard>
                    <DossierCard delay={0.6} status="verified" highlight>
                        <div className="text-center">
                            <p className="text-3xl mb-2">👁️</p>
                            <h3 className="font-bold text-lg mb-2" style={{ color: colors.stampVerified }}>Cultura do Mediterrâneo Antigo</h3>
                            <p className="text-base" style={{ color: colors.textLight }}>Honra e vergonha pública. &quot;O que vão pensar?&quot;</p>
                            <p className="text-sm mt-1" style={{ color: colors.textMuted }}>Baseada em reputação comunitária.</p>
                        </div>
                    </DossierCard>
                </div>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-center mt-6 text-lg font-medium" style={{ color: colors.amber }}>
                    Jesus lavando pés de discípulos é o gesto mais anti-honra que um mestre poderia fazer.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
