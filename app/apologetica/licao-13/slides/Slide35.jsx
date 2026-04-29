'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, GenreCard, colors } from './shared';

export function Slide35() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <GenreCard
                    shelfNumber={8}
                    title="Parábolas"
                    icon="🧭"
                    accentColor={colors.genreRose}
                    delay={0.2}
                >
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        Narrativas curtas com <span style={{ color: colors.genreRose, fontWeight: 600 }}>um ponto principal</span>.
                        Uma subcategoria especial dentro dos evangelhos — por sua frequência e
                        pelo mal-uso que sofrem, ganha estante própria.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="p-4 rounded-lg mb-4"
                        style={{
                            background: `${colors.genreRose}10`,
                            border: `1px solid ${colors.genreRose}28`,
                        }}
                    >
                        <p className="text-sm mb-2" style={{ color: colors.textLight }}>
                            Em geral têm <span style={{ color: colors.genreRose, fontWeight: 600 }}>um ponto central</span>.
                            Não são alegorias onde cada detalhe significa algo.
                        </p>
                        <p className="text-xs italic" style={{ color: colors.textMuted }}>
                            Algumas exceções existem, quando o próprio Jesus decifra cada elemento —
                            mas são exceções.
                        </p>
                    </motion.div>

                    <div>
                        <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.genreRose }}>
                            Exemplos clássicos
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            Bom Samaritano · Filho Pródigo · Talentos · Semeador · Ovelha Perdida
                        </p>
                    </div>
                </GenreCard>
            </div>
        </LibraryWrapper>
    );
}
