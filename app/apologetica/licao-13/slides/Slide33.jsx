'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

const gospels = [
    {
        name: 'Mateus',
        theme: 'Rei messiânico',
        desc: 'Escreve para leitores judeus; Jesus como cumprimento das promessas.',
        color: colors.genreAmber,
    },
    {
        name: 'Marcos',
        theme: 'Servo sofredor',
        desc: 'Narrativa ágil, ação, cruz. Retrato humano de um Jesus intenso.',
        color: colors.genreWine,
    },
    {
        name: 'Lucas',
        theme: 'Salvador universal',
        desc: 'Escreve para gentios. Jesus com os pobres, estrangeiros, mulheres.',
        color: colors.genreSea,
    },
    {
        name: 'João',
        theme: 'Logos encarnado',
        desc: 'Teologia explícita, discursos longos. "No princípio era a Palavra."',
        color: colors.genrePurple,
    },
];

export function Slide33() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] font-mono text-center mb-3"
                    style={{ color: colors.textMuted }}
                >
                    Quatro enquadramentos teológicos
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-3xl font-bold text-center mb-8"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Um Jesus. Quatro ângulos deliberados.
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {gospels.map((g, i) => (
                        <motion.div
                            key={g.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.15 }}
                            className="rounded-xl p-5"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${g.color}30`,
                                borderLeft: `3px solid ${g.color}`,
                            }}
                        >
                            <p
                                className="text-xs font-bold uppercase tracking-wider mb-1"
                                style={{ color: g.color }}
                            >
                                {g.name}
                            </p>
                            <p
                                className="text-lg font-bold mb-2"
                                style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                            >
                                {g.theme}
                            </p>
                            <p className="text-sm" style={{ color: colors.textMedium }}>
                                {g.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </LibraryWrapper>
    );
}
