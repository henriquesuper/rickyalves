'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ScribeWriting, colors } from './shared';

export function Slide64() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="text-7xl mb-8">🤔</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-3xl md:text-4xl font-bold mb-10" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    PERGUNTA FINAL
                </motion.h2>
                <ScribeWriting text='"Se alguém te disser que a Bíblia é um livro antigo e irrelevante — o que você responderia agora que não responderia antes?"' className="text-xl md:text-2xl leading-relaxed" delay={0.6} />
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1.5 }} className="mt-10 text-sm" style={{ color: colors.textMuted }}>
                    Pause aqui. Deixe ela responder.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
