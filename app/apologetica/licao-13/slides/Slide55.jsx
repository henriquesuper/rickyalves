'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

export function Slide55() {
    return (
        <LibraryWrapper stratum="saida" withCandle>
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] font-mono mb-8"
                    style={{ color: colors.textMuted }}
                >
                    Nota pastoral
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl md:text-2xl leading-relaxed mb-4"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Essa biblioteca inclui o cético.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="text-xl md:text-2xl leading-relaxed mb-4"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Inclui o enlutado.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="text-xl md:text-2xl leading-relaxed mb-4"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Inclui o questionador.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.7 }}
                    className="text-2xl md:text-3xl font-bold mt-8"
                    style={{
                        color: colors.inkGold,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Inclui quem reclama — e é chamada de justa por reclamar.
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 2.5, duration: 0.6 }}
                    className="h-0.5 max-w-xs mx-auto my-8"
                    style={{
                        background: `linear-gradient(to right, transparent, ${colors.inkGold}, transparent)`,
                    }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.9 }}
                    className="text-base md:text-lg italic"
                    style={{ color: colors.textMedium, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Ninguém foi feito para caber pela metade num livro assim.
                </motion.p>
            </div>
        </LibraryWrapper>
    );
}
