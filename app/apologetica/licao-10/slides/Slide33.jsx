'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierSeal, colors } from './shared';

export function Slide33() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.2 }} className="text-xs uppercase tracking-[0.4em] mb-6 font-mono" style={{ color: colors.textMuted }}>Estudo Bíblico Apologético · Módulo 4</motion.p>
                <motion.div className="flex justify-center mb-6"><DossierSeal number={10} size="lg" delay={0.3} /></motion.div>
                <motion.div initial={{ opacity: 0, y: -20, rotateY: 90 }} animate={{ opacity: 1, y: 0, rotateY: 0 }} transition={{ delay: 0.5, duration: 0.8, type: 'spring' }} className="text-6xl mb-4">📜</motion.div>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-4xl md:text-6xl font-bold mb-4" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif", textShadow: `0 2px 30px ${colors.amber}20` }}>
                    O MUNDO DO NOVO TESTAMENTO
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-xl md:text-2xl italic mb-8" style={{ color: colors.amber, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    O mundo que Jesus encontrou — e que os apóstolos navegaram
                </motion.p>
                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1, duration: 0.8 }} className="h-0.5 max-w-md mx-auto mb-8" style={{ background: `linear-gradient(to right, transparent, ${colors.mapBlue}, transparent)` }} />
                <motion.div initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: -8 }} transition={{ delay: 1.2, type: 'spring', stiffness: 300 }} className="inline-block px-6 py-2 rounded-lg" style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: colors.mapBlue, color: colors.mapBlue, fontFamily: "'Oswald', sans-serif", fontSize: '1.1rem', fontWeight: 800, letterSpacing: '0.15em' }}>
                    CONTEXTO HISTÓRICO E CULTURAL
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
