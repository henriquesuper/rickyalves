'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, GenreCard, colors } from './shared';

const strata = [
    {
        label: 'Moral',
        desc: 'Dizem respeito ao caráter. "Não matarás."',
        color: colors.inkGold,
    },
    {
        label: 'Cerimonial',
        desc: 'Sistema de culto, sacrifícios, pureza ritual.',
        color: colors.genreSea,
    },
    {
        label: 'Civil',
        desc: 'Organização social de Israel antigo.',
        color: colors.genreBlue,
    },
];

export function Slide16() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <GenreCard
                    shelfNumber={2}
                    title="Lei · Código legal"
                    icon="⚖️"
                    accentColor={colors.genreAmber}
                    delay={0.2}
                >
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        Material normativo, prescritivo, regulatório. Estabelece obrigações,
                        proibições, rituais. Toda lei aqui pressupõe uma{' '}
                        <span style={{ color: colors.genreAmber, fontWeight: 600 }}>aliança específica</span>{' '}
                        entre Deus e Israel, mediada por Moisés.
                    </p>

                    <div className="mb-5">
                        <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.genreAmber }}>
                            Exemplos
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            Êxodo 20–40 · Levítico · partes de Números · Deuteronômio
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <p className="text-xs uppercase tracking-wider mb-3 font-bold" style={{ color: colors.genreAmber }}>
                            Três estratos internos
                        </p>
                        <div className="space-y-2">
                            {strata.map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 + i * 0.15 }}
                                    className="flex items-start gap-3 p-3 rounded-lg"
                                    style={{ background: `${s.color}10`, border: `1px solid ${s.color}25` }}
                                >
                                    <span
                                        className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded flex-shrink-0"
                                        style={{ background: `${s.color}22`, color: s.color }}
                                    >
                                        {s.label}
                                    </span>
                                    <p className="text-xs" style={{ color: colors.textMedium }}>{s.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-xs italic mt-3" style={{ color: colors.textMuted }}>
                            A aplicação de cada estrato hoje é debatida — voltamos a isso adiante.
                        </p>
                    </motion.div>
                </GenreCard>
            </div>
        </LibraryWrapper>
    );
}
