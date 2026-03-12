'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, EvidenceCard, colors } from './shared';

export function Slide20() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.1 }} className="text-xs uppercase tracking-[0.3em] mb-4 font-mono text-center" style={{ color: colors.textMuted }}>Período Intertestamentário · 1 de 4</motion.p>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    PÉRSIA (539–332 a.C.)
                </motion.h2>
                <EvidenceCard delay={0.4} icon="☮️">
                    <p className="text-base leading-relaxed" style={{ color: colors.textLight }}>Relativamente tranquilo. Persas tinham política de tolerância religiosa.</p>
                </EvidenceCard>
                <EvidenceCard delay={0.6} icon="🏗️" className="mt-4">
                    <p className="text-base leading-relaxed" style={{ color: colors.textLight }}>Judeus voltam, reconstroem o Templo — menor e menos glorioso. <span style={{ color: colors.amber, fontStyle: 'italic' }}>Os velhos choraram ao vê-lo</span> (Esdras 3:12).</p>
                </EvidenceCard>
                <EvidenceCard delay={0.8} icon="🕍" className="mt-4">
                    <p className="text-base leading-relaxed" style={{ color: colors.textLight }}>A <span style={{ color: colors.amber, fontWeight: 'bold' }}>sinagoga</span> provavelmente se consolida nesse período — lugar de estudo e oração quando o Templo está longe.</p>
                </EvidenceCard>
            </div>
        </SlideWrapper>
    );
}
