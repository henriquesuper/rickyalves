'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

const books = [
    { icon: '🖋️', title: 'Livro de sonetos', color: colors.genrePurple },
    { icon: '🔌', title: 'Manual de eletricista', color: colors.genreAmber },
    { icon: '📖', title: 'Tratado de filosofia', color: colors.genreBlue },
    { icon: '📋', title: 'Ata da câmara municipal', color: colors.genreSea },
];

export function Slide11() {
    return (
        <LibraryWrapper stratum="vestibulo">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    Experimento mental
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-xl md:text-2xl font-bold mb-2 text-center"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Entre numa biblioteca pública.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center text-sm mb-8"
                    style={{ color: colors.textMedium }}
                >
                    Pegue quatro livros ao acaso.
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                    {books.map((b, i) => (
                        <motion.div
                            key={b.title}
                            initial={{ opacity: 0, y: 30, rotateZ: -3 }}
                            animate={{ opacity: 1, y: 0, rotateZ: (i - 1.5) * 2 }}
                            transition={{ delay: 0.8 + i * 0.15, type: 'spring', stiffness: 130 }}
                            className="rounded-lg p-4 text-center"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${b.color}35`,
                                boxShadow: `0 4px 16px ${colors.bgDeep}60`,
                            }}
                        >
                            <div className="text-3xl mb-2">{b.icon}</div>
                            <p className="text-xs font-bold" style={{ color: b.color }}>
                                {b.title}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7 }}
                    className="rounded-xl p-5"
                    style={{
                        background: `${colors.warnRed}10`,
                        border: `1px solid ${colors.warnRed}30`,
                    }}
                >
                    <p className="text-base md:text-lg text-center" style={{ color: colors.textLight }}>
                        Agora leia todos <span style={{ color: colors.warnRed, fontWeight: 600 }}>do mesmo jeito</span>.
                    </p>
                    <p className="text-sm text-center mt-2" style={{ color: colors.textMedium }}>
                        Você vai sair com uma impressão absurda do que eles dizem.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.3 }}
                    className="text-center mt-6 text-base italic"
                    style={{ color: colors.inkGold, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    É o vício de leitura mais comum da Bíblia entre pessoas religiosas.
                </motion.p>
            </div>
        </LibraryWrapper>
    );
}
