'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, EvidenceCard, colors } from './shared';

export function Slide56() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>ÉFESO — ONDE AS LETRAS GANHARAM VIDA</motion.h2>
                <EvidenceCard delay={0.4} icon="🏛️">
                    <p className="text-base" style={{ color: colors.textLight }}>Templo de Ártemis — uma das sete maravilhas do mundo antigo. A cidade inteira girava em torno dele: economia, turismo, identidade.</p>
                </EvidenceCard>
                <EvidenceCard delay={0.6} icon="📣" className="mt-4">
                    <p className="text-base" style={{ color: colors.textLight }}><span style={{ color: colors.amber, fontWeight: 'bold' }}>Atos 19</span> — os ourives iniciam um tumulto contra Paulo porque a conversão está prejudicando o comércio de ídolos de Ártemis. Não era perseguição religiosa; era <span style={{ color: colors.stampDebate, fontWeight: 'bold' }}>interesse econômico</span>.</p>
                </EvidenceCard>
                <EvidenceCard delay={0.8} icon="✉️" className="mt-4">
                    <p className="text-base" style={{ color: colors.textLight }}><span style={{ color: colors.amber, fontWeight: 'bold' }}>Efésios 6</span>: &quot;armadura de Deus&quot; — os leitores viam soldados romanos todos os dias. A metáfora era visual, não abstrata.</p>
                </EvidenceCard>
            </div>
        </SlideWrapper>
    );
}
