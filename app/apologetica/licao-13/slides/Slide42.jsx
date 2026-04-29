'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

const days = [
    { day: '1', label: 'luz', pair: 'A', color: colors.inkGold },
    { day: '2', label: 'céus · águas', pair: 'B', color: colors.genreSea },
    { day: '3', label: 'terra · plantas', pair: 'C', color: colors.genreAmber },
];
const fill = [
    { day: '4', label: 'luminares', pair: 'A', color: colors.inkGold },
    { day: '5', label: 'aves · peixes', pair: 'B', color: colors.genreSea },
    { day: '6', label: 'animais · humano', pair: 'C', color: colors.genreAmber },
];

export function Slide42() {
    return (
        <LibraryWrapper stratum="aberracoes">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] font-mono text-center mb-3"
                    style={{ color: colors.textMuted }}
                >
                    Erro 1 · Poesia como ciência
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-xl md:text-2xl font-bold text-center mb-6"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Gênesis 1 é estruturado como poesia hebraica
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    className="mb-4"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-xs uppercase tracking-wider text-center mb-3 font-bold" style={{ color: colors.inkGold }}>
                                Dias de formação
                            </p>
                            <div className="space-y-2">
                                {days.map((d, i) => (
                                    <motion.div
                                        key={d.day}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.7 + i * 0.12 }}
                                        className="flex items-center gap-3 p-3 rounded-lg"
                                        style={{ background: `${d.color}12`, border: `1px solid ${d.color}30` }}
                                    >
                                        <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: `${d.color}22`, color: d.color }}>
                                            Dia {d.day}
                                        </span>
                                        <span className="text-sm" style={{ color: colors.textLight }}>{d.label}</span>
                                        <span className="ml-auto text-xs font-mono opacity-70" style={{ color: d.color }}>{d.pair}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-wider text-center mb-3 font-bold" style={{ color: colors.inkGold }}>
                                Dias de preenchimento
                            </p>
                            <div className="space-y-2">
                                {fill.map((d, i) => (
                                    <motion.div
                                        key={d.day}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.1 + i * 0.12 }}
                                        className="flex items-center gap-3 p-3 rounded-lg"
                                        style={{ background: `${d.color}12`, border: `1px solid ${d.color}30` }}
                                    >
                                        <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: `${d.color}22`, color: d.color }}>
                                            Dia {d.day}
                                        </span>
                                        <span className="text-sm" style={{ color: colors.textLight }}>{d.label}</span>
                                        <span className="ml-auto text-xs font-mono opacity-70" style={{ color: d.color }}>{d.pair}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6 }}
                        className="text-center text-xs italic mt-4"
                        style={{ color: colors.textMuted }}
                    >
                        Paralelismo · dois trios simétricos · refrão &ldquo;e viu que era bom&rdquo; · &ldquo;tarde e manhã&rdquo; sete vezes
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.9 }}
                    className="p-4 rounded-lg"
                    style={{
                        background: `${colors.warnRed}10`,
                        border: `1px solid ${colors.warnRed}25`,
                    }}
                >
                    <p className="text-sm text-center" style={{ color: colors.textLight }}>
                        Tratar o texto como{' '}
                        <span style={{ color: colors.warnRed, fontWeight: 600 }}>relatório científico de cronograma geológico</span>{' '}
                        é errar o gênero — e depois discutir um fantasma.
                    </p>
                </motion.div>
            </div>
        </LibraryWrapper>
    );
}
