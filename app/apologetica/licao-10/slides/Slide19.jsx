'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

export function Slide19() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, type: 'spring' }} className="text-7xl mb-6">⏳</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-3xl md:text-5xl font-bold mb-6" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    OS 400 ANOS &quot;SILENCIOSOS&quot;
                </motion.h2>

                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.6, duration: 0.6 }} className="h-0.5 max-w-sm mx-auto mb-8" style={{ background: `linear-gradient(to right, transparent, ${colors.amber}, transparent)` }} />

                <div className="flex items-center justify-center gap-6 flex-wrap mb-10">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="px-5 py-3 rounded-xl" style={{ background: `${colors.amber}15`, border: `1px solid ${colors.amber}40` }}>
                        <p className="text-sm" style={{ color: colors.textMuted }}>AT termina</p>
                        <p className="text-xl font-bold" style={{ color: colors.amber }}>~430 a.C.</p>
                    </motion.div>
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2 }} className="text-2xl" style={{ color: colors.textMuted }}>· · · · ·</motion.div>
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="px-5 py-3 rounded-xl" style={{ background: `${colors.mapBlue}15`, border: `1px solid ${colors.mapBlue}40` }}>
                        <p className="text-sm" style={{ color: colors.textMuted }}>NT começa</p>
                        <p className="text-xl font-bold" style={{ color: colors.mapBlue }}>~6-4 a.C.</p>
                    </motion.div>
                </div>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-xl" style={{ color: colors.textLight }}>
                    De silêncio não tiveram nada.
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-2 text-lg italic" style={{ color: colors.textMedium }}>
                    Foram talvez os mais turbulentos da história judaica.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
