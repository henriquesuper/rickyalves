'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

const types = [
    { type: 'Adão',                 ref: 'Rm 5:14 / 1 Co 15:45', anti: 'O último Adão' },
    { type: 'Cordeiro pascal',      ref: '1 Co 5:7',             anti: '"Cristo, nosso cordeiro pascal"' },
    { type: 'Melquisedeque',        ref: 'Hb 7',                 anti: 'Sumo sacerdócio de Cristo' },
    { type: 'Serpente de bronze',   ref: 'Jo 3:14 (Nm 21)',      anti: '"Filho do Homem levantado"' },
    { type: 'Maná',                 ref: 'Jo 6',                 anti: '"Eu sou o pão da vida"' },
    { type: 'Jonas',                ref: 'Mt 12:40',             anti: 'Três dias e três noites' },
    { type: 'Templo',               ref: 'Jo 2:19-21',           anti: '"Em três dias o reconstruirei"' },
    { type: 'Davi',                 ref: 'Mt 1 / Lc 1:32',       anti: 'O Davi maior' },
    { type: 'Moisés',               ref: 'Atos 3:22 (Dt 18:15)', anti: '"O profeta como Moisés"' },
];

export function Slide31() {
    return (
        <ConvergenceWrapper stratum="vetores">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
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
                    className="text-2xl md:text-3xl font-bold mb-2 text-center"
                    style={{
                        color: colors.textStarlight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Nove exemplos identificados pelo NT
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm italic mb-8"
                    style={{ color: colors.textMuted }}
                >
                    Tipo → Antitipo, todos com escalada (meizōn).
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {types.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
                            className="rounded-lg p-3.5"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${colors.vectorSea}30`,
                            }}
                        >
                            <div className="flex items-baseline gap-2 mb-2">
                                <p
                                    className="text-base font-bold"
                                    style={{
                                        color: colors.vectorSea,
                                        fontFamily: "'Playfair Display', Georgia, serif",
                                    }}
                                >
                                    {t.type}
                                </p>
                                <span
                                    className="text-[10px] font-mono opacity-70"
                                    style={{ color: colors.textMuted }}
                                >
                                    {t.ref}
                                </span>
                            </div>
                            <p className="text-xs italic" style={{ color: colors.textMedium }}>
                                → {t.anti}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ConvergenceWrapper>
    );
}
