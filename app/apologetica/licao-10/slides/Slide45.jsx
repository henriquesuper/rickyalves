'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, EvidenceCard, colors } from './shared';

export function Slide45() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>O TEMPLO — A MÁQUINA ECONÔMICA</motion.h2>
                <EvidenceCard delay={0.4} icon="💱">
                    <p className="text-base" style={{ color: colors.textLight }}>Jesus virou as mesas dos cambistas no <span style={{ color: colors.amber, fontWeight: 'bold' }}>Pátio dos Gentios</span> — o único espaço onde não-judeus podiam orar.</p>
                </EvidenceCard>
                <EvidenceCard delay={0.6} icon="🐂" className="mt-4">
                    <p className="text-base" style={{ color: colors.textLight }}>Animais para sacrifício vendidos a preços inflados. Moedas romanas não aceitas (tinham a imagem de César/deus) — câmbio obrigatório com taxa.</p>
                </EvidenceCard>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-6 p-5 rounded-xl text-center" style={{ background: `${colors.stampDebate}15`, border: `1px solid ${colors.stampDebate}40` }}>
                    <p className="text-lg" style={{ color: colors.textLight }}>Jesus cita Isaías 56:7 e Jeremias 7:11:</p>
                    <p className="text-xl font-bold mt-2" style={{ color: colors.amber, fontFamily: "'Playfair Display', Georgia, serif" }}>&quot;Casa de oração para todos os povos&quot;</p>
                    <p className="text-base mt-1 italic" style={{ color: colors.stampDebate }}>→ &quot;vocês fizeram dela covil de ladrões&quot;</p>
                    <p className="text-sm mt-3" style={{ color: colors.textMedium }}>Não é raiva genérica contra comércio. É <span style={{ fontWeight: 'bold' }}>acusação de que a élite religiosa estava excluindo os gentios do acesso a Deus</span>.</p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
