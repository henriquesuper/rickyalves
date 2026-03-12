'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierSeal, StampBadge, colors } from './shared';

export function Slide66() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.2 }} className="text-xs uppercase tracking-[0.4em] mb-6 font-mono" style={{ color: colors.textMuted }}>Caso #10 · Encerramento</motion.p>
                <motion.div className="flex justify-center mb-6"><DossierSeal number={10} size="lg" delay={0.3} /></motion.div>
                <motion.div initial={{ rotateX: 0 }} animate={{ rotateX: [0, -20, 0] }} transition={{ delay: 0.5, duration: 1.5 }} className="text-6xl mb-4">📁</motion.div>
                <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>CONTEXTO HISTÓRICO E CULTURAL</motion.h2>
                <motion.div initial={{ scale: 0, rotate: 30 }} animate={{ scale: 1, rotate: -5 }} transition={{ delay: 1, type: 'spring', stiffness: 300 }} className="inline-block px-8 py-3 rounded-lg mb-8" style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: colors.stampVerified, color: colors.stampVerified, fontFamily: "'Oswald', sans-serif", fontSize: '1.3rem', fontWeight: 800, letterSpacing: '0.15em' }}>
                    CASO ENCERRADO
                </motion.div>
                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.3, duration: 0.6 }} className="h-0.5 max-w-md mx-auto mb-6" style={{ background: `linear-gradient(to right, transparent, ${colors.amber}, transparent)` }} />
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 2 }} className="mt-8 text-sm" style={{ color: colors.textMuted }}>🙏 Oração de encerramento</motion.p>
            </div>
        </SlideWrapper>
    );
}
