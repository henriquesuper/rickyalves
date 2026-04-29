'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

const openings = [
    {
        opener: '"Era uma vez um rei que tinha três filhas..."',
        contract: 'Conto de fadas',
        expect: 'Conflito, resolução, lição moral',
        dontExpect: 'Precisão histórica, aplicação jurídica',
        color: colors.genrePurple,
        icon: '🏰',
    },
    {
        opener: '"Art. 5º — Todos são iguais perante a lei..."',
        contract: 'Constituição',
        expect: 'Precisão, aplicação normativa, consequência',
        dontExpect: 'Arco narrativo, metáfora',
        color: colors.genreBlue,
        icon: '⚖️',
    },
    {
        opener: '"2 xícaras de farinha, 3 ovos, 1 pitada de sal..."',
        contract: 'Receita culinária',
        expect: 'Sequência executável, proporção, resultado',
        dontExpect: 'Dilema moral, metáfora oculta',
        color: colors.genreAmber,
        icon: '🥘',
    },
];

export function Slide07() {
    return (
        <LibraryWrapper stratum="vestibulo">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-sm mb-2"
                    style={{ color: colors.textMuted }}
                >
                    As primeiras palavras já ativaram um contrato.
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-xl md:text-2xl font-bold mb-8 text-center"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Seu cérebro ajustou tudo — sem pedir permissão.
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {openings.map((o, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.2, type: 'spring', stiffness: 120 }}
                            className="rounded-xl p-5 flex flex-col"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${o.color}30`,
                            }}
                        >
                            <span className="text-2xl mb-2">{o.icon}</span>
                            <p
                                className="text-sm italic mb-3 min-h-16"
                                style={{
                                    color: colors.textLight,
                                    fontFamily: "'Playfair Display', Georgia, serif",
                                }}
                            >
                                {o.opener}
                            </p>
                            <div
                                className="text-xs font-bold uppercase tracking-wider mb-3"
                                style={{ color: o.color }}
                            >
                                {o.contract}
                            </div>
                            <div className="text-xs space-y-1" style={{ color: colors.textMedium }}>
                                <p>
                                    <span style={{ color: colors.goodGreen }}>◎</span> {o.expect}
                                </p>
                                <p>
                                    <span style={{ color: colors.warnRed }}>⊘</span> {o.dontExpect}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </LibraryWrapper>
    );
}
