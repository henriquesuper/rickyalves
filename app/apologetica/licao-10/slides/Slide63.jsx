'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

export function Slide63() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="text-6xl mb-4">→</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>PREVIEW DA LIÇÃO 11</motion.h2>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-xl mb-2" style={{ color: colors.amber, fontFamily: "'Playfair Display', Georgia, serif" }}>Gêneros Literários da Bíblia</motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-base" style={{ color: colors.textMedium }}>Poesia não é prosa. Profecia não é previsão. Apocalipse não é ficção científica. E parábola não é alegoria.</motion.p>
            </div>
        </SlideWrapper>
    );
}
