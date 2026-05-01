'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, BookSeal, StampBadge, colors } from './shared';

export function Slide01() {
    return (
        <ConvergenceWrapper stratum="aproximacao" withGlow glowIntensity={1.2}>
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-6 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Estudo Bíblico Apologético · Lição 14
                </motion.p>

                <motion.div className="flex justify-center mb-6">
                    <BookSeal number={14} size="lg" delay={0.3} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
                    className="text-6xl mb-4"
                    style={{ color: colors.coreGlow, textShadow: `0 0 30px ${colors.haloGold}80` }}
                >
                    ✦
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                    style={{
                        color: colors.textStarlight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                        textShadow: `0 2px 30px ${colors.haloGold}25`,
                    }}
                >
                    CRISTO COMO CENTRO
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.85 }}
                    className="text-xl italic mb-8"
                    style={{
                        color: colors.haloGold,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Como a Bíblia lê a si mesma
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.05, duration: 0.8 }}
                    className="h-0.5 max-w-md mx-auto mb-8"
                    style={{
                        background: `linear-gradient(to right, transparent, ${colors.haloGold}, transparent)`,
                    }}
                />

                <StampBadge text="CHAVE DE LEITURA" delay={1.25} />
            </div>
        </ConvergenceWrapper>
    );
}
