'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

const witnesses = [
    { ref: 'Atos 8:30-35', title: 'Filipe / Eunuco', gist: 'Cena programática: do AT até Jesus.' },
    { ref: '1 Co 15:3-4',  title: 'Fórmula pré-paulina', gist: '"Segundo as Escrituras" — desde o início.' },
    { ref: 'Hebreus',      title: 'Exegese sustentada', gist: 'Sumo sacerdócio, sacrifício, sombra.' },
    { ref: '1 Pe 1:10-12', title: 'Profetas indagaram', gist: '"Espírito de Cristo neles."' },
    { ref: 'Ap 19:10',     title: 'Núcleo da profecia', gist: '"Testemunho de Jesus = espírito da profecia."' },
];

export function Slide24() {
    return (
        <ConvergenceWrapper stratum="orbitas">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    Síntese — Estrato III
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
                    Cinco testemunhos do NT, um padrão
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm italic mb-8"
                    style={{ color: colors.vectorBlue }}
                >
                    Pregadores, fórmulas litúrgicas, epístolas teológicas, apocalíptica — todos no mesmo eixo.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    {witnesses.map((w, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + i * 0.13, type: 'spring', stiffness: 130 }}
                            className="rounded-xl p-4 flex flex-col"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${colors.vectorBlue}30`,
                                boxShadow: `0 6px 18px ${colors.bgVoid}80`,
                            }}
                        >
                            <span
                                className="text-[10px] font-mono font-bold mb-2 px-2 py-0.5 rounded self-start"
                                style={{
                                    background: `${colors.vectorBlue}20`,
                                    color: colors.vectorBlue,
                                    border: `1px solid ${colors.vectorBlue}40`,
                                }}
                            >
                                {w.ref}
                            </span>
                            <p
                                className="text-sm font-bold mb-1"
                                style={{
                                    color: colors.textStarlight,
                                    fontFamily: "'Playfair Display', Georgia, serif",
                                }}
                            >
                                {w.title}
                            </p>
                            <p className="text-xs italic" style={{ color: colors.textMedium }}>
                                {w.gist}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ConvergenceWrapper>
    );
}
