'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

export function Slide32() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.2 }} className="text-xs uppercase tracking-[0.3em] mb-6 font-mono" style={{ color: colors.textMuted }}>Próxima aula</motion.p>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-6xl mb-4">→</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-3xl md:text-5xl font-bold mb-4" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    LIÇÃO 10B
                </motion.h2>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-xl mb-3" style={{ color: colors.amber, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    O Mundo do Novo Testamento
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="text-base" style={{ color: colors.textMedium }}>
                    Roma por dentro. A cultura greco-romana. O Templo como máquina. As cartas de Paulo no contexto de cada cidade.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
