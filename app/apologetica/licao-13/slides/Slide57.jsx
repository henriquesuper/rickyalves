'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, BookSeal, StampBadge, colors } from './shared';

export function Slide57() {
    return (
        <LibraryWrapper stratum="saida" withCandle>
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-10 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Encerramento da Lição 13
                </motion.p>

                <motion.div className="flex justify-center mb-8">
                    <BookSeal number={13} size="lg" delay={0.4} />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Obrigado, Guga.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-base md:text-lg mb-8"
                    style={{
                        color: colors.textMedium,
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontStyle: 'italic',
                    }}
                >
                    Hoje a gente só afinou a lente — a pergunta fica com você.
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.7, duration: 0.8 }}
                    className="h-0.5 max-w-md mx-auto mb-10"
                    style={{
                        background: `linear-gradient(to right, transparent, ${colors.inkGold}, transparent)`,
                    }}
                />

                <StampBadge text="BIBLIOTECA ABERTA" delay={2} rotate={-6} />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.75 }}
                    transition={{ delay: 2.6 }}
                    className="text-xs mt-8 italic"
                    style={{ color: colors.textMuted }}
                >
                    A biblioteca não fecha. Fica aberta para visitas.
                </motion.p>
            </div>
        </LibraryWrapper>
    );
}
