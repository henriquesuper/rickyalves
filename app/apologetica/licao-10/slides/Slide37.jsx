'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ImpactNumber, colors } from './shared';

export function Slide37() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>A IRONIA DA INFRAESTRUTURA</motion.h2>
                <ImpactNumber number="80.000" label="km de estradas pavimentadas" delay={0.4} color={colors.mapBlue} />
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-lg mt-6 mb-4" style={{ color: colors.textLight }}>Paulo viaja por estradas romanas, escreve em grego, e usa o sistema legal romano para apelar a César.</motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="p-5 rounded-xl" style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}30` }}>
                    <p className="text-lg font-medium" style={{ color: colors.amber }}>O evangelho se espalhou usando a infraestrutura do império que matou Jesus.</p>
                    <p className="text-sm mt-2 italic" style={{ color: colors.textMuted }}>Os primeiros cristãos não deixaram de notar a ironia.</p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
