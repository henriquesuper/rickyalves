'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ImpactNumber, EvidenceCard, colors } from './shared';

export function Slide43() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>O TEMPLO — A GRANDEZA</motion.h2>
                <ImpactNumber number="46" label="anos de construção (Jo 2:20)" delay={0.4} color={colors.amber} />
                <EvidenceCard delay={0.8} icon="🏗️" className="mt-6">
                    <p className="text-base" style={{ color: colors.textLight }}>Herodes expandiu a plataforma do Templo para <span style={{ color: colors.amber, fontWeight: 'bold' }}>144.000 m²</span> — o maior recinto religioso do mundo antigo. Mármore branco com detalhes em ouro.</p>
                </EvidenceCard>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-center mt-6 text-lg italic" style={{ color: colors.amber, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    &quot;Quem não viu o Templo de Herodes nunca viu um edifício bonito.&quot; — Talmude
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
