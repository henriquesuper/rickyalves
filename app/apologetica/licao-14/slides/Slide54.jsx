'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

const expectations = [
    {
        title: 'Citações do AT lidas cristocentricamente',
        refs: 'Jo 2:17 · Jo 6:31 · Jo 12:38-41 · Jo 19:24 · Jo 19:36-37',
        color: colors.vectorRose,
    },
    {
        title: 'Tipologia ativa',
        refs: 'maná → pão da vida (Jo 6) · serpente no deserto → cruz (Jo 3:14) · pastor de Ez 34 → bom pastor (Jo 10) · cordeiro pascal → cordeiro de Deus (Jo 1:29; 19:36)',
        color: colors.vectorSea,
    },
    {
        title: 'Diálogo deliberado com Gênesis',
        refs: 'Jo 1:1 ecoa Gn 1:1 — "No princípio..."',
        color: colors.vectorBlue,
    },
];

export function Slide54() {
    return (
        <ConvergenceWrapper stratum="porta-joao" withGlow glowIntensity={0.9}>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    O que esperar ao ler João
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-3xl font-bold mb-3 text-center"
                    style={{
                        color: colors.textStarlight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Com a chave de leitura na mão
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm italic mb-8"
                    style={{ color: colors.haloGold }}
                >
                    A Guga vai reconhecer o que está acontecendo no texto.
                </motion.p>

                <div className="space-y-4">
                    {expectations.map((e, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + i * 0.18 }}
                            className="rounded-xl p-5"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${e.color}30`,
                            }}
                        >
                            <p
                                className="text-base md:text-lg font-bold mb-2"
                                style={{
                                    color: e.color,
                                    fontFamily: "'Playfair Display', Georgia, serif",
                                }}
                            >
                                {e.title}
                            </p>
                            <p className="text-sm leading-relaxed" style={{ color: colors.textMedium }}>
                                {e.refs}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-center text-sm md:text-base italic mt-8"
                    style={{ color: colors.haloGold, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Quando ela ler &ldquo;No princípio era o Verbo&rdquo;, ela já vai saber por que essa frase ecoa Gênesis 1:1.
                </motion.p>
            </div>
        </ConvergenceWrapper>
    );
}
