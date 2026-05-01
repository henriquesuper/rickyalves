'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

const passages = [
    {
        ref: 'Lc 24:25-27',
        title: 'Emaús',
        gist: '"Em todas as Escrituras, o que constava a meu respeito."',
        anchor: 'Totalidade do AT',
    },
    {
        ref: 'Lc 24:44',
        title: 'Tanakh inteiro',
        gist: '"Lei + Profetas + Salmos" — toda a Bíblia hebraica.',
        anchor: 'Cânon completo',
    },
    {
        ref: 'Jo 5:39-40',
        title: 'Testificam dele',
        gist: '"São elas mesmas que testificam de mim."',
        anchor: 'Reivindicação direta',
    },
    {
        ref: 'Jo 5:46',
        title: 'Moisés escreveu',
        gist: '"Ele escreveu a meu respeito" — Pentateuco mosaico.',
        anchor: 'Especificidade',
    },
    {
        ref: 'Mt 5:17',
        title: 'Plērōsai',
        gist: '"Não vim revogar — vim cumprir." Telos da Lei e Profetas.',
        anchor: 'Sentido grego',
    },
];

export function Slide14() {
    return (
        <ConvergenceWrapper stratum="nucleo" withGlow glowIntensity={0.8}>
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    Síntese — Estrato II
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-3xl font-bold mb-2 text-center"
                    style={{
                        color: colors.textStarlight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Cinco passagens, um padrão
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm italic mb-8"
                    style={{ color: colors.haloGold }}
                >
                    Jesus se interpreta como o referente de toda a Escritura.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    {passages.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + i * 0.13, type: 'spring', stiffness: 130 }}
                            className="rounded-xl p-4 flex flex-col"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${colors.haloGold}30`,
                                boxShadow: `0 6px 18px ${colors.bgVoid}80`,
                            }}
                        >
                            <span
                                className="text-[10px] font-mono font-bold mb-2 px-2 py-0.5 rounded self-start"
                                style={{
                                    background: `${colors.haloGold}20`,
                                    color: colors.haloGold,
                                    border: `1px solid ${colors.haloGold}40`,
                                }}
                            >
                                {p.ref}
                            </span>
                            <p
                                className="text-sm font-bold mb-1"
                                style={{
                                    color: colors.textStarlight,
                                    fontFamily: "'Playfair Display', Georgia, serif",
                                }}
                            >
                                {p.title}
                            </p>
                            <p className="text-xs italic mb-2" style={{ color: colors.textMedium }}>
                                {p.gist}
                            </p>
                            <p
                                className="text-[10px] uppercase tracking-wider mt-auto"
                                style={{ color: colors.haloGold }}
                            >
                                ◇ {p.anchor}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ConvergenceWrapper>
    );
}
