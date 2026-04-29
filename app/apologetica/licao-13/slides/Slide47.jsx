'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

export function Slide47() {
    return (
        <LibraryWrapper stratum="mesa-jo">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] font-mono text-center mb-3"
                    style={{ color: colors.textMuted }}
                >
                    O formato conta parte da mensagem
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
                    O envelope narrativo abriga o debate.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center text-sm mb-6"
                    style={{ color: colors.textMedium }}
                >
                    Duas páginas de prosa no começo. Duas páginas de prosa no final.
                    Quarenta capítulos de <em>poesia-debate</em> no meio.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="rounded-xl p-5 mb-4"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.inkGold}25`,
                        borderLeft: `3px solid ${colors.inkGold}`,
                    }}
                >
                    <p className="text-sm" style={{ color: colors.textLight }}>
                        Isso não é decoração literária — é{' '}
                        <span style={{ color: colors.inkGold, fontWeight: 600 }}>tese estrutural</span>.
                    </p>
                    <p className="text-sm mt-3" style={{ color: colors.textMedium }}>
                        O livro está te dizendo, pela forma: <em>a pergunta &ldquo;por que o justo sofre?&rdquo;
                        não resolve com uma historinha. Resolve — ou não resolve — por um debate prolongado,
                        incômodo, poético.</em>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="rounded-xl p-5"
                    style={{
                        background: `${colors.genrePurple}12`,
                        border: `1px solid ${colors.genrePurple}30`,
                    }}
                >
                    <p className="text-sm text-center" style={{ color: colors.textLight }}>
                        Literatura de sabedoria foi{' '}
                        <span style={{ color: colors.genrePurple, fontWeight: 600 }}>feita para sustentar a pergunta</span>{' '}
                        sem resolver prematuramente.
                    </p>
                </motion.div>
            </div>
        </LibraryWrapper>
    );
}
