'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ScribeWriting, colors } from './shared';

export function Slide31() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="text-7xl mb-8">🤔</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-3xl md:text-4xl font-bold mb-10" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    UMA PERGUNTA PARA LEVAR
                </motion.h2>
                <ScribeWriting text='"Depois de tudo que vimos hoje — o que muda na forma como você lê a Bíblia, sabendo que ela foi escrita nesse mundo?"' className="text-xl md:text-2xl leading-relaxed" delay={0.6} />
            </div>
        </SlideWrapper>
    );
}
