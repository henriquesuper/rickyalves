'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, CandleGlow, colors } from './shared';

export function Slide48() {
    return (
        <LibraryWrapper stratum="mesa-jo" withCandle>
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.3 }}
                    className="text-xs uppercase tracking-[0.4em] font-mono mb-8"
                    style={{ color: colors.textMuted }}
                >
                    Pausa · este slide é para você
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-xl md:text-2xl leading-relaxed mb-6"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    As perguntas duras que você tem feito nessas últimas semanas...
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="text-2xl md:text-3xl font-bold mb-6"
                    style={{
                        color: colors.inkGold,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    elas cabem no livro de Jó.
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.9, duration: 0.6 }}
                    className="h-0.5 max-w-xs mx-auto mb-6"
                    style={{
                        background: `linear-gradient(to right, transparent, ${colors.inkGold}, transparent)`,
                    }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className="text-base md:text-lg mb-6"
                    style={{ color: colors.textLight }}
                >
                    O gênero está te autorizando a continuar perguntando.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.7 }}
                    className="text-base italic"
                    style={{ color: colors.textMedium, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    O livro foi feito com gente como você dentro.
                </motion.p>
            </div>
        </LibraryWrapper>
    );
}
