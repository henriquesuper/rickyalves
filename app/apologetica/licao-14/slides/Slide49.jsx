'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

const reasons = [
    {
        letter: '(a)',
        title: 'Princípio antigo',
        detail: 'Não invenção do século XVI. Antes da Reforma, há linhas no cristianismo que sempre defenderam a primazia da Escritura sobre tradição em caso de conflito.',
    },
    {
        letter: '(b)',
        title: 'Libertador para o cético',
        detail: 'Significa que podemos verificar. O texto está aberto a escrutínio. Não há doutrina secreta, autoridade inacessível, conhecimento gnóstico restrito a iniciados.',
    },
    {
        letter: '(c)',
        title: 'Pressupõe tudo o que já vimos',
        detail: 'Critérios (L 3), confiabilidade (L 7), tradução (L 8), autoria (L 9), contexto (L 10), arqueologia (L 11), hermenêutica (L 12), gêneros (L 13). Ela já operava dentro de sola Scriptura sem o nome.',
    },
];

export function Slide49() {
    return (
        <ConvergenceWrapper stratum="metodo">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    Por que importa para Guga
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
                    Três razões — sem bandeira
                </motion.h2>

                <div className="space-y-4">
                    {reasons.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + i * 0.2, type: 'spring', stiffness: 110 }}
                            className="rounded-xl p-5 flex gap-4"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${colors.haloGold}30`,
                                boxShadow: `0 6px 18px ${colors.bgVoid}80`,
                            }}
                        >
                            <span
                                className="flex-shrink-0 text-2xl font-bold"
                                style={{
                                    color: colors.haloGold,
                                    fontFamily: "'Playfair Display', Georgia, serif",
                                }}
                            >
                                {r.letter}
                            </span>
                            <div>
                                <p
                                    className="text-base md:text-lg font-bold mb-1"
                                    style={{
                                        color: colors.textStarlight,
                                        fontFamily: "'Playfair Display', Georgia, serif",
                                    }}
                                >
                                    {r.title}
                                </p>
                                <p className="text-sm leading-relaxed" style={{ color: colors.textMedium }}>
                                    {r.detail}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ConvergenceWrapper>
    );
}
