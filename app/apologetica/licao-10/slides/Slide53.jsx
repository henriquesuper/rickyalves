'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, EvidenceCard, GreekText, colors } from './shared';

export function Slide53() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>O CULTO IMPERIAL — O ELEFANTE NA SALA</motion.h2>
                <GreekText text="Κύριος Καῖσαρ" size="md" delay={0.4} className="text-center mb-2" />
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 0.6 }} className="text-sm text-center mb-8 italic" style={{ color: colors.textMuted }}>Kyrios Kaisar — &quot;César é Senhor&quot;</motion.p>
                <EvidenceCard delay={0.8} icon="⚡">
                    <p className="text-base" style={{ color: colors.textLight }}><span style={{ color: colors.amber, fontWeight: 'bold' }}>Augusto</span> era chamado &quot;filho do deus (divino).&quot; Seu nascimento foi anunciado como <span style={{ fontStyle: 'italic' }}>&quot;boas novas&quot; (euangelion)</span> — a mesma palavra que os cristãos usaram para &quot;evangelho.&quot;</p>
                </EvidenceCard>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mt-6 p-5 rounded-xl text-center" style={{ background: `rgba(139,26,46,0.15)`, border: `1px solid rgba(139,26,46,0.40)` }}>
                    <p className="text-lg font-bold" style={{ color: '#E05555' }}>Dizer &quot;Kyrios Iesous&quot; (Jesus é Senhor) era ato de subversão política direta.</p>
                    <p className="text-sm mt-2" style={{ color: colors.textMedium }}>Isso não era religião privada — era declaração pública com consequências.</p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
