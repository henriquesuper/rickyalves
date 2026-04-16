'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

const meanings = [
    { ref: 'Gênesis 2:7', word: 'nephesh', meaning: 'Ser vivente', desc: '"O homem tornou-se alma vivente"', color: colors.lensTeal },
    { ref: 'Provérbios 25:25', word: 'nephesh', meaning: 'Garganta / Apetite', desc: '"Água fresca para a alma sedenta"', color: colors.lensBlue },
    { ref: 'Atos 2:41', word: 'psychē', meaning: 'Pessoa', desc: '"Quase três mil almas"', color: colors.lensAmber },
    { ref: 'Mateus 16:26', word: 'psychē', meaning: 'Vida', desc: '"Que dará o homem em troca da sua alma?"', color: colors.lensPurple },
];

export function Slide21() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-wider mb-2 text-center"
                    style={{ color: colors.lensTeal }}
                >
                    Lente 3 em ação
                </motion.h3>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold mb-2 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Uma Palavra, Quatro Significados
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm mb-6"
                    style={{ color: colors.textMuted }}
                >
                    A palavra &ldquo;alma&rdquo; (nephesh / psychē) na Bíblia:
                </motion.p>

                <div className="space-y-3">
                    {meanings.map((m, i) => (
                        <motion.div
                            key={m.ref}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.2 }}
                            className="p-4 rounded-xl flex items-start gap-4"
                            style={{ background: colors.bgSurface, border: `1px solid ${m.color}15` }}
                        >
                            <span
                                className="text-xs font-bold px-2 py-1 rounded-full shrink-0 mt-0.5"
                                style={{ background: `${m.color}20`, color: m.color }}
                            >
                                {m.meaning}
                            </span>
                            <div>
                                <p className="text-sm italic" style={{ color: colors.textLight }}>{m.desc}</p>
                                <p className="text-xs mt-1 font-mono" style={{ color: colors.textMuted }}>
                                    {m.ref} · {m.word}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="mt-4 text-xs text-center italic"
                    style={{ color: colors.textMuted }}
                >
                    Se você pega só um uso e constrói uma doutrina, erra. Se compara todos os usos, emerge um quadro completo.
                </motion.p>
            </div>
        </LabWrapper>
    );
}
