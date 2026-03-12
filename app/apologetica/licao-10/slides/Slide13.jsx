'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, StampBadge, ScribeWriting, colors } from './shared';

export function Slide13() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="text-6xl mb-4">👑</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl md:text-4xl font-bold mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    PÉRSIA — A SURPRESA
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="p-6 rounded-xl mb-6"
                    style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}30` }}
                >
                    <p className="text-lg mb-3" style={{ color: colors.textLight }}>
                        <span style={{ color: colors.amber, fontWeight: 'bold' }}>539 a.C.</span> — Ciro, o Grande, conquista a Babilônia e permite que os judeus voltem.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="p-6 rounded-xl mb-6"
                    style={{ background: `${colors.mapBlue}10`, border: `1px solid ${colors.mapBlue}30` }}
                >
                    <ScribeWriting text="Isaías 45 chama Ciro de 'ungido' (mashiach)" className="text-xl mb-2" delay={0.9} />
                    <p className="text-base" style={{ color: colors.textMedium }}>
                        Um rei pagão com um título messiânico.
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="flex justify-center">
                    <StampBadge type="investigation" delay={1.3} note="Deus opera fora de Israel" />
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
