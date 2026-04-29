'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

export function Slide36() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] font-mono text-center mb-3"
                    style={{ color: colors.textMuted }}
                >
                    Parábola infiltrada · 2 Samuel 12
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-3xl font-bold text-center mb-6"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Natã conta uma parábola no rei
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="rounded-xl p-5 mb-4"
                    style={{
                        background: colors.bgSurface,
                        borderLeft: `3px solid ${colors.genreRose}`,
                        border: `1px solid ${colors.genreRose}25`,
                    }}
                >
                    <p className="text-sm mb-3" style={{ color: colors.textMedium }}>
                        Havia um rico com muitas ovelhas e um pobre com uma só. O rico toma a
                        cordeira do pobre para servir a um visitante.
                    </p>
                    <p className="text-base italic" style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}>
                        &ldquo;O homem que fez isso merece a morte!&rdquo;
                    </p>
                    <p className="text-xs mt-2" style={{ color: colors.textMuted }}>
                        — Davi, acusando-se sem saber
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="rounded-xl p-5 mb-4"
                    style={{
                        background: `${colors.inkGold}15`,
                        border: `1px solid ${colors.inkGold}30`,
                    }}
                >
                    <p
                        className="text-xl md:text-2xl text-center font-bold"
                        style={{
                            color: colors.inkGold,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        &ldquo;Tu és o homem.&rdquo;
                    </p>
                    <p className="text-xs text-center mt-2" style={{ color: colors.textMuted }}>
                        — Natã, 2 Sm 12.7
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="p-4 rounded-lg"
                    style={{
                        background: `${colors.genrePurple}10`,
                        border: `1px solid ${colors.genrePurple}28`,
                    }}
                >
                    <p className="text-sm" style={{ color: colors.textLight }}>
                        A parábola só &ldquo;funcionou&rdquo; porque Davi{' '}
                        <span style={{ color: colors.genrePurple, fontWeight: 600 }}>não percebeu que era uma parábola</span>.
                    </p>
                    <p className="text-xs italic mt-2" style={{ color: colors.textMuted }}>
                        O micro-gênero entrou por dentro do macro-gênero narrativa histórica.
                    </p>
                </motion.div>
            </div>
        </LibraryWrapper>
    );
}
