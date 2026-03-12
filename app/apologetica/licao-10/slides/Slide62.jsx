'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

export function Slide62() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="text-6xl mb-4">📚</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl md:text-4xl font-bold mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>CONEXÃO COM AS LIÇÕES ANTERIORES</motion.h2>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="p-6 rounded-xl" style={{ background: `${colors.bgSurface}CC`, border: `1px solid ${colors.amber}20` }}>
                    <p className="text-base mb-3" style={{ color: colors.textLight }}>Lição 9: quem escreveu → <span style={{ color: colors.amber }}>o rosto do autor</span></p>
                    <p className="text-base mb-3" style={{ color: colors.textLight }}>Lição 10: de onde → <span style={{ color: colors.amber }}>o chão debaixo do texto</span></p>
                    <p className="text-base" style={{ color: colors.textLight }}>Próxima: para quê → <span style={{ color: colors.mapBlue }}>a intenção do texto</span></p>
                </motion.div>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-6 text-lg italic" style={{ color: colors.textMedium }}>
                    Cada camada que adicionamos torna a leitura mais honesta — e mais poderosa.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
