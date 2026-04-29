'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, JobStructureMap, colors } from './shared';

export function Slide46() {
    return (
        <LibraryWrapper stratum="mesa-jo">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] font-mono text-center mb-3"
                    style={{ color: colors.textMuted }}
                >
                    Anatomia literária de Jó
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-xl md:text-2xl font-bold text-center mb-8"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Olha o que acontece quando você abre este livro:
                </motion.h2>

                <JobStructureMap delay={0.5} />

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    className="mt-8 p-5 rounded-xl"
                    style={{
                        background: `${colors.genrePurple}10`,
                        border: `1px solid ${colors.genrePurple}28`,
                    }}
                >
                    <p className="text-sm text-center" style={{ color: colors.textLight }}>
                        Jó é <span style={{ color: colors.genrePurple, fontWeight: 600 }}>majoritariamente poesia</span>.
                        A narrativa é envelope — abre e fecha o livro, mas não é o livro.
                    </p>
                    <p className="text-xs italic text-center mt-2" style={{ color: colors.textMuted }}>
                        Se você lê tudo como narrativa, o livro de Jó quebra na primeira página.
                    </p>
                </motion.div>
            </div>
        </LibraryWrapper>
    );
}
