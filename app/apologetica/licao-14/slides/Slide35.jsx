'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, VerseCard, colors } from './shared';

const arcs = [
    {
        ref: 'Gn 3:15',
        title: 'O protoevangelho',
        gist: 'A "semente da mulher" — a primeira promessa de redenção.',
    },
    {
        ref: 'Gn 12:3',
        title: 'Promessa abraâmica',
        gist: '"Em ti serão benditas todas as famílias da terra" — universalismo cumprido em Cristo.',
    },
    {
        ref: '2 Sm 7',
        title: 'Reino davídico',
        gist: 'Promessa de trono eterno — cumprida no Messias.',
    },
    {
        ref: 'Toda história',
        title: 'Exílio e retorno',
        gist: 'Padrão de queda e restauração — recapitulado em Cristo.',
    },
];

export function Slide35() {
    return (
        <ConvergenceWrapper stratum="vetores">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.vectorBlue }}
                >
                    Categoria D · Estrutura narrativa
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
                    Quatro arcos do cânon
                </motion.h2>

                <div className="space-y-3">
                    {arcs.map((a, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.18 }}
                            className="flex items-start gap-4 p-4 rounded-xl"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${colors.vectorBlue}30`,
                            }}
                        >
                            <span
                                className="flex-shrink-0 px-2.5 py-1 rounded text-xs font-bold font-mono"
                                style={{
                                    background: `${colors.vectorBlue}25`,
                                    color: colors.vectorBlue,
                                    border: `1px solid ${colors.vectorBlue}50`,
                                    minWidth: 90,
                                    textAlign: 'center',
                                }}
                            >
                                {a.ref}
                            </span>
                            <div className="flex-1">
                                <p
                                    className="text-base font-bold mb-1"
                                    style={{
                                        color: colors.textStarlight,
                                        fontFamily: "'Playfair Display', Georgia, serif",
                                    }}
                                >
                                    {a.title}
                                </p>
                                <p className="text-sm leading-relaxed" style={{ color: colors.textMedium }}>
                                    {a.gist}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ConvergenceWrapper>
    );
}
