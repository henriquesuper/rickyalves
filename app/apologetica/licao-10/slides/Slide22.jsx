'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

export function Slide22() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.1 }} className="text-xs uppercase tracking-[0.3em] mb-4 font-mono" style={{ color: colors.textMuted }}>Período Intertestamentário · 3 de 4</motion.p>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="text-6xl mb-4">😈</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl md:text-4xl font-bold mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    ANTÍOCO IV EPÍFANES (167 a.C.)
                </motion.h2>
                <div className="space-y-4">
                    {['Proibiu a circuncisão', 'Proibiu a observância do sábado', 'Proibiu a leitura da Torah', 'Tudo sob pena de morte'].map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.15 }} className="px-5 py-3 rounded-lg text-left flex items-center gap-3" style={{ background: `${colors.stampDebate}15`, border: `1px solid ${colors.stampDebate}30` }}>
                            <span style={{ color: colors.stampDebate }}>✕</span>
                            <p className="text-lg" style={{ color: colors.textLight }}>{item}</p>
                        </motion.div>
                    ))}
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="mt-8 p-5 rounded-xl" style={{ background: `rgba(139,26,46,0.15)`, border: `1px solid rgba(139,26,46,0.40)` }}>
                    <p className="text-lg font-bold" style={{ color: '#E05555' }}>O clímax: profanou o Templo de Jerusalém.</p>
                    <p className="text-base mt-2" style={{ color: colors.textMedium }}>Altar a Zeus. Sacrifício de porco no lugar santo.</p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
