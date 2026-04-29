'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, GenreCard, colors } from './shared';

export function Slide27() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <GenreCard
                    shelfNumber={6}
                    title="Apocalíptica"
                    icon="🔥"
                    accentColor={colors.genreWine}
                    delay={0.2}
                >
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        Gênero distinto da profecia. Usa visões, bestas, números, cores, cavaleiros —
                        código altamente simbólico dirigido a comunidades{' '}
                        <span style={{ color: colors.genreWine, fontWeight: 600 }}>sob perseguição</span>.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="p-4 rounded-lg mb-4"
                        style={{
                            background: `${colors.genrePurple}10`,
                            border: `1px solid ${colors.genrePurple}28`,
                        }}
                    >
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            <span style={{ color: colors.genrePurple, fontWeight: 600 }}>Propósito primário:</span>{' '}
                            sustentar uma comunidade perseguida com a certeza de que Deus vence no fim.
                        </p>
                        <p className="text-xs italic mt-2" style={{ color: colors.textMuted }}>
                            É <em>literatura de consolo</em> — não código Morse para um calendário futuro.
                        </p>
                    </motion.div>

                    <div>
                        <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.genreWine }}>
                            Exemplos
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            Daniel 7–12 · Apocalipse · Ezequiel (partes) · Zacarias (partes) · Isaías 24–27
                        </p>
                    </div>
                </GenreCard>
            </div>
        </LibraryWrapper>
    );
}
