'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, EvidenceCard, colors } from './shared';

export function Slide40() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>PÔNCIO PILATOS: NÃO ERA UM JUIZ</motion.h2>
                <EvidenceCard delay={0.4} icon="🏴">
                    <p className="text-base" style={{ color: colors.textLight }}>Era um burocrata romano de segundo escalão — prefeito da Judeia. Conhecido por brutalidade.</p>
                </EvidenceCard>
                <EvidenceCard delay={0.6} icon="💀" variant="disputed" className="mt-4">
                    <p className="text-base" style={{ color: colors.textLight }}>Lucas 13:1 menciona galileus <span style={{ color: colors.stampDebate, fontStyle: 'italic' }}>&quot;cujo sangue Pilatos misturou com os sacrifícios deles&quot;</span> — massacre real, no Templo.</p>
                </EvidenceCard>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-6 p-5 rounded-xl text-center" style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}30` }}>
                    <p className="text-lg" style={{ color: colors.textLight }}>Quando Pilatos &quot;lava as mãos&quot; diante de Jesus, não é neutralidade. É <span style={{ color: colors.amber, fontWeight: 'bold' }}>covardia política</span>.</p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
