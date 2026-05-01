'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

export function Slide04() {
    return (
        <ConvergenceWrapper stratum="aproximacao" withGlow glowIntensity={0.5}>
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-6 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    A peça que falta
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="text-5xl mb-6"
                >
                    🧩
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg md:text-xl leading-relaxed mb-6"
                    style={{
                        color: colors.textStarlight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    A Bíblia continua sendo uma biblioteca de 66 livros — coerente, preservada, traduzida, contextualizável, com gêneros distintos.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="text-lg md:text-xl mb-8"
                    style={{ color: colors.textNebula }}
                >
                    Mas ainda <span style={{ color: colors.warnRose, fontStyle: 'italic' }}>fragmentária</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.7 }}
                    className="rounded-2xl p-6 md:p-7"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.haloGold}40`,
                        borderLeft: `4px solid ${colors.haloGold}`,
                        boxShadow: `0 8px 32px ${colors.bgVoid}80, 0 0 24px ${colors.haloGold}10`,
                    }}
                >
                    <p
                        className="text-xl md:text-2xl font-bold leading-snug"
                        style={{
                            color: colors.haloGold,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        Existe um princípio interno ao próprio texto
                    </p>
                    <p
                        className="text-xl md:text-2xl font-bold leading-snug mt-1"
                        style={{
                            color: colors.textStarlight,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        que diga como lê-lo como um todo?
                    </p>
                </motion.div>
            </div>
        </ConvergenceWrapper>
    );
}
