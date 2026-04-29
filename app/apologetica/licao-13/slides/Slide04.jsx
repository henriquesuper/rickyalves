'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

const readings = [
    {
        label: 'Literal',
        color: colors.warnRed,
        desc: 'Ideação suicida. Pânico somático. Risco imediato.',
    },
    {
        label: 'Hipérbole',
        color: colors.genreAmber,
        desc: 'Está exausto. A frase ampliou a vivência real.',
    },
    {
        label: 'Metáfora',
        color: colors.genrePurple,
        desc: 'Sente que algo dele está morrendo — casamento, fase, identidade.',
    },
    {
        label: 'Performática',
        color: colors.genreSea,
        desc: 'Queixa buscando atenção, cuidado, presença.',
    },
];

export function Slide04() {
    return (
        <LibraryWrapper stratum="vestibulo">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-8"
                >
                    <p className="text-sm italic mb-2" style={{ color: colors.textMuted }}>
                        A mesma frase. Sentidos radicalmente diferentes.
                    </p>
                    <h2
                        className="text-2xl md:text-3xl font-bold"
                        style={{
                            color: colors.textLight,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        E o tratamento muda em cada caso.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {readings.map((r, i) => (
                        <motion.div
                            key={r.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + i * 0.18, type: 'spring', stiffness: 120 }}
                            className="rounded-xl p-5"
                            style={{
                                background: colors.bgSurface,
                                borderLeft: `3px solid ${r.color}`,
                                border: `1px solid ${r.color}25`,
                            }}
                        >
                            <p
                                className="text-xs font-bold uppercase tracking-wider mb-2"
                                style={{ color: r.color }}
                            >
                                {r.label}
                            </p>
                            <p className="text-sm" style={{ color: colors.textMedium }}>
                                {r.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="text-center mt-8 text-sm italic"
                    style={{ color: colors.inkGold }}
                >
                    Se você errar o gênero da fala, erra o tratamento.
                </motion.p>
            </div>
        </LibraryWrapper>
    );
}
