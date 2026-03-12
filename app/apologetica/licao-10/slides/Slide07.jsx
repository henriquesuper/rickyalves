'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

export function Slide07() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="text-8xl mb-8"
                >
                    🌍
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-3xl md:text-5xl font-bold mb-6"
                    style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    O MAPA DO MUNDO BÍBLICO
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-xl mb-10"
                    style={{ color: colors.textLight }}
                >
                    Israel: um território minúsculo espremido entre impérios gigantes.
                </motion.p>

                {/* Visualização do mapa estilizado */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex items-center justify-center gap-4 flex-wrap"
                >
                    <div className="px-6 py-4 rounded-xl text-center" style={{ background: `${colors.stampDebate}20`, border: `1px solid ${colors.stampDebate}40`, minWidth: '150px' }}>
                        <p className="text-3xl mb-1">🏛️</p>
                        <p className="font-bold" style={{ color: colors.stampDebate }}>EGITO</p>
                        <p className="text-xs" style={{ color: colors.textMuted }}>Sudoeste</p>
                    </div>
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-2xl" style={{ color: colors.amber }}
                    >
                        ←
                    </motion.div>
                    <div className="px-6 py-4 rounded-xl text-center" style={{ background: `${colors.amber}20`, border: `2px solid ${colors.amber}`, minWidth: '150px' }}>
                        <p className="text-3xl mb-1">⛰️</p>
                        <p className="font-bold text-lg" style={{ color: colors.amber }}>ISRAEL</p>
                        <p className="text-xs" style={{ color: colors.textMuted }}>Pequeno · Estratégico</p>
                    </div>
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-2xl" style={{ color: colors.amber }}
                    >
                        →
                    </motion.div>
                    <div className="px-6 py-4 rounded-xl text-center" style={{ background: `${colors.mapBlue}20`, border: `1px solid ${colors.mapBlue}40`, minWidth: '150px' }}>
                        <p className="text-3xl mb-1">🏺</p>
                        <p className="font-bold" style={{ color: colors.mapBlue }}>MESOPOTÂMIA</p>
                        <p className="text-xs" style={{ color: colors.textMuted }}>Nordeste</p>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 1.3 }}
                    className="mt-8 text-base italic"
                    style={{ color: colors.textMuted }}
                >
                    Pense nele como a Bélgica entre a França e a Alemanha — pequeno, estratégico, e constantemente pressionado.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
