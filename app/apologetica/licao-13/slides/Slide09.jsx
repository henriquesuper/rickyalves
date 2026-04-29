'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

export function Slide09() {
    return (
        <LibraryWrapper stratum="vestibulo" withCandle>
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.3 }}
                    className="text-xs uppercase tracking-[0.4em] mb-8 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    A tese da aula
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                    className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    A Bíblia não é um livro.
                </motion.h1>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="h-0.5 max-w-xs mx-auto mb-6"
                    style={{
                        background: `linear-gradient(to right, transparent, ${colors.inkGold}, transparent)`,
                    }}
                />

                <motion.h2
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.8, type: 'spring' }}
                    className="text-5xl md:text-7xl font-bold mb-8"
                    style={{
                        color: colors.inkGold,
                        fontFamily: "'Playfair Display', Georgia, serif",
                        textShadow: `0 4px 40px ${colors.inkGold}35`,
                    }}
                >
                    É uma biblioteca.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4 }}
                    className="text-3xl"
                >
                    📚
                </motion.div>
            </div>
        </LibraryWrapper>
    );
}
