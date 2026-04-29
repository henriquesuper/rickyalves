'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

export function Slide05() {
    return (
        <LibraryWrapper stratum="vestibulo">
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-6 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    A entrega
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl leading-relaxed mb-6"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Você já faz isso <span style={{ color: colors.inkGold, fontStyle: 'italic' }}>intuitivamente</span> o dia inteiro.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="text-base md:text-lg mb-8"
                    style={{ color: colors.textMedium }}
                >
                    Você lê o gênero da fala do paciente <em>antes</em> de decidir o que ela significa.
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.3, duration: 0.6 }}
                    className="h-0.5 max-w-xs mx-auto mb-8"
                    style={{
                        background: `linear-gradient(to right, transparent, ${colors.inkGold}, transparent)`,
                    }}
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="text-lg md:text-xl"
                    style={{ color: colors.textLight }}
                >
                    Hoje a gente vai aprender a fazer a mesma coisa
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="text-2xl md:text-3xl font-bold mt-2"
                    style={{
                        color: colors.inkGold,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    com a Bíblia.
                </motion.p>
            </div>
        </LibraryWrapper>
    );
}
