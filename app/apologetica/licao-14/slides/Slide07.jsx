'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

const negatives = [
    'que cada versículo do AT contenha referência velada a Jesus (alegorese livre)',
    'que o AT só tenha valor à luz do NT (marcionismo invertido)',
    'que os autores do AT escreveram conscientemente sobre Jesus de Nazaré (anacronismo)',
];

const positives = [
    'O AT estabelece um arco — promessas, tipos, esperança messiânica — que aponta para um cumprimento futuro.',
    'Esse cumprimento, segundo o NT, é Jesus.',
    'Jesus mesmo se interpreta dentro desse arco.',
    'Os primeiros cristãos não inventaram essa leitura; herdaram-na de Jesus.',
];

export function Slide07() {
    return (
        <ConvergenceWrapper stratum="aproximacao">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    A tese cristocêntrica
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
                    Em forma limpa
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                    className="rounded-2xl p-5 md:p-6 mb-8"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.haloGold}40`,
                        boxShadow: `0 8px 32px ${colors.bgVoid}80, 0 0 24px ${colors.haloGold}10`,
                    }}
                >
                    <p
                        className="text-base md:text-lg leading-relaxed text-center italic"
                        style={{ color: colors.textStarlight, fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        Toda a Escritura — Antigo e Novo Testamento — converge para Cristo, e essa convergência não é projeção retroativa cristã, mas reivindicação que aparece <span style={{ color: colors.haloGold, fontWeight: 600 }}>no próprio texto</span>.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0 }}
                        className="rounded-xl p-5"
                        style={{
                            background: `${colors.warnRose}08`,
                            border: `1px solid ${colors.warnRose}30`,
                        }}
                    >
                        <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: colors.warnRose }}>
                            ⊘ NÃO está sendo afirmado
                        </p>
                        <ul className="space-y-2">
                            {negatives.map((n, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.2 + i * 0.15 }}
                                    className="text-sm leading-relaxed flex gap-2"
                                    style={{ color: colors.textMedium }}
                                >
                                    <span style={{ color: colors.warnRose }}>×</span>
                                    <span>{n}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0 }}
                        className="rounded-xl p-5"
                        style={{
                            background: `${colors.goodGreen}08`,
                            border: `1px solid ${colors.goodGreen}30`,
                        }}
                    >
                        <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: colors.goodGreen }}>
                            ◎ Está sendo afirmado
                        </p>
                        <ul className="space-y-2">
                            {positives.map((p, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.2 + i * 0.15 }}
                                    className="text-sm leading-relaxed flex gap-2"
                                    style={{ color: colors.textMedium }}
                                >
                                    <span style={{ color: colors.goodGreen }}>◇</span>
                                    <span>{p}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </ConvergenceWrapper>
    );
}
