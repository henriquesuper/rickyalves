'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, EvidenceCard, GreekText, colors } from './shared';

export function Slide57() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>FILIPOS — COLÔNIA ROMANA</motion.h2>
                <EvidenceCard delay={0.4} icon="🎖️">
                    <p className="text-base" style={{ color: colors.textLight }}>Colônia de veteranos militares. Cidade orgulhosamente romana onde <span style={{ color: colors.amber, fontWeight: 'bold' }}>cidadania romana</span> era o status supremo.</p>
                </EvidenceCard>
                <EvidenceCard delay={0.6} icon="📜" className="mt-4">
                    <p className="text-base" style={{ color: colors.textLight }}><span style={{ color: colors.amber }}>Filipenses 3:20</span> — &quot;Nossa <span style={{ fontWeight: 'bold' }}>cidadania</span> está nos céus.&quot;</p>
                    <p className="text-sm mt-1" style={{ color: colors.textMedium }}>Numa colônia onde cidadania romana era tudo, Paulo diz: &quot;vocês têm uma cidadania melhor.&quot;</p>
                </EvidenceCard>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-6 p-5 rounded-xl text-center" style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}30` }}>
                    <p className="text-base mb-1" style={{ color: colors.textLight }}><span style={{ fontWeight: 'bold', color: colors.amber }}>Filipenses 2:10-11</span> — &quot;todo joelho se dobre... e toda língua confesse que Jesus é Senhor.&quot;</p>
                    <p className="text-sm" style={{ color: colors.textMedium }}>Numa cidade onde todo joelho se dobrava a César — isso era declaração de guerra.</p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
