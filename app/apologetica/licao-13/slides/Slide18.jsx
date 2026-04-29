'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, GenreCard, colors } from './shared';

export function Slide18() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <GenreCard
                    shelfNumber={3}
                    title="Poesia"
                    icon="🎼"
                    accentColor={colors.genreSea}
                    delay={0.2}
                >
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        Linguagem rítmica, imagética, concentrada. Na poesia hebraica, o recurso
                        central não é rima nem métrica silábica. É{' '}
                        <span style={{ color: colors.genreSea, fontWeight: 600 }}>paralelismo</span>{' '}
                        — a mesma ideia em outro registro.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="rounded-xl p-5 mb-4"
                        style={{
                            background: colors.bgDeep,
                            border: `1px solid ${colors.genreSea}30`,
                            borderLeft: `3px solid ${colors.genreSea}`,
                        }}
                    >
                        <p
                            className="text-base md:text-lg italic leading-relaxed mb-1"
                            style={{
                                color: colors.textLight,
                                fontFamily: "'Playfair Display', Georgia, serif",
                            }}
                        >
                            &ldquo;Os céus declaram a glória de Deus,
                        </p>
                        <p
                            className="text-base md:text-lg italic leading-relaxed pl-6"
                            style={{
                                color: colors.genreSea,
                                fontFamily: "'Playfair Display', Georgia, serif",
                            }}
                        >
                            e o firmamento anuncia a obra das suas mãos.&rdquo;
                        </p>
                        <p className="text-xs font-mono mt-3" style={{ color: colors.textMuted }}>
                            — Sl 19.1
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="text-sm italic text-center"
                        style={{ color: colors.genreSea }}
                    >
                        Duas linhas dizendo a mesma coisa por ângulos diferentes.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 }}
                        className="text-xs text-center mt-1"
                        style={{ color: colors.textMuted }}
                    >
                        A assinatura do verso hebraico.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="mt-4"
                    >
                        <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.genreSea }}>
                            Exemplos
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            Salmos · Lamentações · grande parte dos profetas · partes de Jó · Cântico dos Cânticos · Cânticos de Moisés (Êx 15, Dt 32)
                        </p>
                    </motion.div>
                </GenreCard>
            </div>
        </LibraryWrapper>
    );
}
