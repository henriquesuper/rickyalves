'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

const objections = [
    {
        n: '01',
        title: 'Projeção retroativa',
        gist: 'Jesus se interpreta assim, textos pré-cristãos messiânicos, fórmulas ~5 anos pós-cruz.',
    },
    {
        n: '02',
        title: 'Privilégio da leitura cristã',
        gist: 'Justifica-se pelos mesmos critérios que qualquer leitura — não por decreto.',
    },
    {
        n: '03',
        title: 'Tipologia frouxa',
        gist: 'Tipologia legítima tem 4 critérios. Distinta de alegorese livre.',
    },
    {
        n: '04',
        title: 'Diminui o AT?',
        gist: 'AT mantém valor próprio. Ganha camada — não perde sentido.',
    },
];

export function Slide44() {
    return (
        <ConvergenceWrapper stratum="ruido">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.warnRose }}
                >
                    Síntese das objeções
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
                    Quatro objeções, quatro respostas honestas
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {objections.map((o, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.18, type: 'spring', stiffness: 120 }}
                            className="rounded-xl p-5"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${colors.warnRose}30`,
                            }}
                        >
                            <div className="flex items-baseline gap-3 mb-2">
                                <span
                                    className="text-2xl font-bold"
                                    style={{
                                        color: colors.warnRose,
                                        fontFamily: "'Oswald', sans-serif",
                                    }}
                                >
                                    {o.n}
                                </span>
                                <p
                                    className="text-base font-bold"
                                    style={{
                                        color: colors.textStarlight,
                                        fontFamily: "'Playfair Display', Georgia, serif",
                                    }}
                                >
                                    {o.title}
                                </p>
                            </div>
                            <p className="text-sm leading-relaxed" style={{ color: colors.textMedium }}>
                                {o.gist}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ConvergenceWrapper>
    );
}
