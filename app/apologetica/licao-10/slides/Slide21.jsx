'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, EvidenceCard, colors } from './shared';

export function Slide21() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.1 }} className="text-xs uppercase tracking-[0.3em] mb-4 font-mono text-center" style={{ color: colors.textMuted }}>Período Intertestamentário · 2 de 4</motion.p>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="text-6xl text-center mb-4">🏛️</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    ALEXANDRE E A HELENIZAÇÃO (332–167 a.C.)
                </motion.h2>
                <EvidenceCard delay={0.5} icon="⚔️">
                    <p className="text-base leading-relaxed" style={{ color: colors.textLight }}>Alexandre Magno conquista o império persa em velocidade absurda. Morre jovem (323 a.C.). Generais dividem o território.</p>
                </EvidenceCard>
                <EvidenceCard delay={0.7} icon="🗣️" className="mt-4">
                    <p className="text-base leading-relaxed" style={{ color: colors.textLight }}><span style={{ color: colors.amber, fontWeight: 'bold' }}>Grego</span> se torna a língua do Mediterrâneo. Por isso o NT é escrito em grego. Por isso a <span style={{ color: colors.mapBlue }}>Septuaginta (LXX)</span> é tão importante.</p>
                </EvidenceCard>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-6 p-5 rounded-xl text-center" style={{ background: `${colors.stampDebate}15`, border: `1px solid ${colors.stampDebate}40` }}>
                    <p className="text-lg" style={{ color: colors.textLight }}>Helenização traz ginásios, teatro, filosofia — e tensão enorme:</p>
                    <p className="text-xl font-bold mt-2" style={{ color: colors.stampDebate }}>Adaptar-se à cultura ou manter a identidade?</p>
                    <p className="text-sm mt-2 italic" style={{ color: colors.textMuted }}>O mesmo debate de toda comunidade religiosa hoje.</p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
