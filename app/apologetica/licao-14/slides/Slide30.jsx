'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

const criteria = [
    {
        title: 'O próprio NT identifica os tipos',
        detail: 'Não é leitura inventada pelo intérprete tardio.',
        icon: '①',
    },
    {
        title: 'Correspondência estrutural',
        detail: 'Não similaridade superficial ou verbal solta.',
        icon: '②',
    },
    {
        title: 'Escalada (meizōn)',
        detail: 'O tipo é menor; o antitipo é maior. Palavra repetida em Mt 12 sobre Jesus.',
        icon: '③',
    },
    {
        title: 'Continuidade temática',
        detail: 'Não saltos arbitrários — o tema se desenvolve coerentemente.',
        icon: '④',
    },
];

export function Slide30() {
    return (
        <ConvergenceWrapper stratum="vetores">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.vectorSea }}
                >
                    Categoria B · Tipologia
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-3xl font-bold mb-8 text-center"
                    style={{
                        color: colors.textStarlight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Os quatro critérios da tipologia legítima
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {criteria.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + i * 0.18, type: 'spring', stiffness: 130 }}
                            className="rounded-xl p-5 flex gap-4"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${colors.vectorSea}40`,
                                boxShadow: `0 6px 18px ${colors.bgVoid}80`,
                            }}
                        >
                            <span
                                className="text-3xl flex-shrink-0"
                                style={{
                                    color: colors.vectorSea,
                                    fontFamily: "'Playfair Display', Georgia, serif",
                                    lineHeight: 1,
                                }}
                            >
                                {c.icon}
                            </span>
                            <div>
                                <p
                                    className="text-base font-bold mb-1"
                                    style={{
                                        color: colors.textStarlight,
                                        fontFamily: "'Playfair Display', Georgia, serif",
                                    }}
                                >
                                    {c.title}
                                </p>
                                <p className="text-xs leading-relaxed" style={{ color: colors.textMedium }}>
                                    {c.detail}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ConvergenceWrapper>
    );
}
