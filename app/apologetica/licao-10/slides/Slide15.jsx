'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

export function Slide15() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, type: 'spring' }} className="text-7xl mb-6">🤝</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-2xl md:text-4xl font-bold mb-4" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    ALIANÇAS: O CONCEITO MAIS IMPORTANTE
                </motion.h2>

                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.6, duration: 0.6 }} className="h-0.5 max-w-sm mx-auto mb-8" style={{ background: `linear-gradient(to right, transparent, ${colors.amber}, transparent)` }} />

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="p-5 rounded-xl inline-block" style={{ background: `${colors.amber}15`, border: `1px solid ${colors.amber}40` }}>
                    <p className="text-xl font-bold mb-1" style={{ color: colors.amber, fontFamily: "'Playfair Display', Georgia, serif" }}>בְּרִית</p>
                    <p className="text-sm" style={{ color: colors.textMedium }}>berit (hebraico) — aliança</p>
                </motion.div>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-8 text-xl" style={{ color: colors.textLight }}>
                    A espinha dorsal da Bíblia inteira.
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-2 text-lg" style={{ color: colors.textMedium }}>
                    Não temos nada parecido na vida moderna.
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-6 text-base" style={{ color: colors.mapBlue }}>
                    Dois tipos principais dominavam o Antigo Oriente Próximo →
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
