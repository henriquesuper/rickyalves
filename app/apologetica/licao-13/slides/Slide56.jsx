'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

const kit = [
    { title: 'Gênero', desc: 'O contrato de leitura de cada texto (hoje).', color: colors.inkGold },
    { title: 'Manuscritos', desc: 'Como o texto chegou até nós.', color: colors.genreSea },
    { title: 'Tradução', desc: 'As escolhas feitas para ele caber em português.', color: colors.genreBlue },
    { title: 'Cânon', desc: 'Quais livros, por que esses, por que assim.', color: colors.genreAmber },
    { title: 'Contexto', desc: 'Quem escreveu, para quem, quando, por quê.', color: colors.genrePurple },
];

export function Slide56() {
    return (
        <LibraryWrapper stratum="saida">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] font-mono text-center mb-3"
                    style={{ color: colors.textMuted }}
                >
                    Ponte para a próxima aula
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-3xl font-bold text-center mb-3"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    A gente já tem o kit.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    className="text-center text-sm mb-6"
                    style={{ color: colors.inkGold, fontStyle: 'italic' }}
                >
                    Agora a gente usa.
                </motion.p>

                <div className="space-y-2 mb-6">
                    {kit.map((k, i) => (
                        <motion.div
                            key={k.title}
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + i * 0.1 }}
                            className="flex items-center gap-3 p-3 rounded-lg"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${k.color}20`,
                            }}
                        >
                            <span
                                className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded flex-shrink-0"
                                style={{ background: `${k.color}20`, color: k.color, minWidth: '100px', textAlign: 'center' }}
                            >
                                {k.title}
                            </span>
                            <p className="text-xs" style={{ color: colors.textMedium }}>
                                {k.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="p-5 rounded-xl text-center"
                    style={{
                        background: `${colors.inkGold}12`,
                        border: `1px solid ${colors.inkGold}30`,
                    }}
                >
                    <p
                        className="text-base md:text-lg"
                        style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        Aula 14 · <em>a gente leva um texto real, junto, até o fim.</em>
                    </p>
                </motion.div>
            </div>
        </LibraryWrapper>
    );
}
