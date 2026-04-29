'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

const stats = [
    { number: '66', label: 'livros', color: colors.inkGold },
    { number: '~40', label: 'autores', color: colors.genreAmber },
    { number: '1.500', label: 'anos', color: colors.genreSea },
    { number: '3', label: 'línguas', color: colors.genreBlue },
    { number: '~10', label: 'gêneros literários', color: colors.genrePurple },
];

export function Slide10() {
    return (
        <LibraryWrapper stratum="vestibulo">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    O tamanho do acervo
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-3xl font-bold mb-10 text-center"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Uma biblioteca inteira
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + i * 0.15, type: 'spring', stiffness: 140 }}
                            className="rounded-xl p-5 text-center"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${s.color}30`,
                            }}
                        >
                            <p
                                className="text-3xl md:text-4xl font-bold mb-1"
                                style={{
                                    color: s.color,
                                    fontFamily: "'Oswald', sans-serif",
                                }}
                            >
                                {s.number}
                            </p>
                            <p
                                className="text-xs uppercase tracking-wider"
                                style={{ color: colors.textMuted }}
                            >
                                {s.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7 }}
                    className="text-center mt-10 text-base italic"
                    style={{ color: colors.inkGold }}
                >
                    E a gente abre tudo como se fosse um único livro.
                </motion.p>
            </div>
        </LibraryWrapper>
    );
}
