'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

export function Slide45() {
    return (
        <ConvergenceWrapper stratum="ruido">
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="text-5xl mb-6"
                >
                    🤝
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.5 }}
                    className="text-xs uppercase tracking-[0.4em] mb-6 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Honestidade como método
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                    className="rounded-2xl p-6 md:p-7"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.haloGold}40`,
                        borderLeft: `4px solid ${colors.haloGold}`,
                        boxShadow: `0 8px 32px ${colors.bgVoid}80`,
                    }}
                >
                    <p
                        className="text-xl md:text-2xl font-bold leading-snug mb-3"
                        style={{
                            color: colors.haloGold,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        Avaliando honestamente.
                    </p>
                    <p
                        className="text-base md:text-lg leading-relaxed"
                        style={{ color: colors.textStarlight, fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        Apresentar as objeções <span style={{ color: colors.haloGold, fontWeight: 600 }}>antes que apareçam</span> é mais respeitoso que defender de antemão.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="text-sm italic mt-6"
                    style={{ color: colors.textNebula }}
                >
                    A leitura cristocêntrica resiste ao escrutínio. Quem confia no texto não tem medo de questionamento.
                </motion.p>
            </div>
        </ConvergenceWrapper>
    );
}
