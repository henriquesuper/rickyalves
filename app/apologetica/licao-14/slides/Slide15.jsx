'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

export function Slide15() {
    return (
        <ConvergenceWrapper stratum="nucleo" withGlow glowIntensity={1.4}>
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-8 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Implicação central
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="text-5xl mb-6"
                    style={{ color: colors.coreGlow, textShadow: `0 0 24px ${colors.haloGold}80` }}
                >
                    ✦
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-lg md:text-xl leading-relaxed mb-2"
                    style={{ color: colors.textNebula }}
                >
                    Se Jesus se entende dessa forma...
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.8 }}
                    className="rounded-2xl p-6 md:p-8 mb-6 mt-6"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.haloGold}50`,
                        borderLeft: `4px solid ${colors.haloGold}`,
                        boxShadow: `0 8px 32px ${colors.bgVoid}90, 0 0 32px ${colors.haloGold}25`,
                    }}
                >
                    <p
                        className="text-xl md:text-3xl font-bold leading-snug mb-2"
                        style={{
                            color: colors.haloGold,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        a leitura cristocêntrica do AT
                    </p>
                    <p
                        className="text-xl md:text-3xl font-bold leading-snug"
                        style={{
                            color: colors.textStarlight,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        não é projeção retroativa.
                    </p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.3 }}
                        className="text-2xl md:text-3xl font-bold leading-snug mt-4 italic"
                        style={{
                            color: colors.coreGlow,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        É discipulado.
                    </motion.p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.0 }}
                    className="text-sm italic"
                    style={{ color: colors.textMedium }}
                >
                    Os primeiros cristãos estão lendo como ele leu.
                </motion.p>
            </div>
        </ConvergenceWrapper>
    );
}
