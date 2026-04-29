'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

export function Slide58() {
    return (
        <LibraryWrapper stratum="saida" withCandle>
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 140 }}
                    className="text-6xl mb-6"
                >
                    📚
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-xl md:text-2xl leading-relaxed mb-5"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Se você se lembrar de{' '}
                    <span style={{ color: colors.inkGold, fontWeight: 600 }}>uma coisa só</span>{' '}
                    dessa aula...
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.7 }}
                    className="rounded-2xl p-6 md:p-8 mb-8"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.inkGold}30`,
                        borderLeft: `4px solid ${colors.inkGold}`,
                        boxShadow: `0 8px 32px ${colors.bgDeep}80`,
                    }}
                >
                    <p
                        className="text-2xl md:text-3xl font-bold leading-snug"
                        style={{
                            color: colors.inkGold,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        Antes de perguntar o que um texto <em>significa</em>,
                    </p>
                    <p
                        className="text-2xl md:text-3xl font-bold leading-snug mt-2"
                        style={{
                            color: colors.textLight,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        pergunte que tipo de texto ele é.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="text-sm italic"
                    style={{ color: colors.textMedium }}
                >
                    Essa única pausa já resolve 80% dos mal-entendidos sérios com a Bíblia.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 2.6 }}
                    className="text-xs uppercase tracking-[0.3em] mt-10 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Até a Aula 14
                </motion.p>
            </div>
        </LibraryWrapper>
    );
}
