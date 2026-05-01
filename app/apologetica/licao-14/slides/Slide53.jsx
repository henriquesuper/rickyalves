'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

const euSou = [
    'O pão da vida (Jo 6)',
    'A luz do mundo (Jo 8)',
    'A porta (Jo 10)',
    'O bom pastor (Jo 10)',
    'A ressurreição e a vida (Jo 11)',
    'O caminho, a verdade, a vida (Jo 14)',
    'A videira verdadeira (Jo 15)',
];

const sinais = [
    'Água em vinho (Caná)',
    'Filho do oficial real',
    'Paralítico de Betesda',
    'Multiplicação dos pães',
    'Andar sobre as águas',
    'Cego de nascença',
    'Ressurreição de Lázaro',
];

export function Slide53() {
    return (
        <ConvergenceWrapper stratum="porta-joao">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    O evangelho mais explicitamente cristocêntrico
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
                    Prólogo, sete &ldquo;Eu Sou&rdquo;, sete sinais
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm italic mb-8"
                    style={{ color: colors.haloGold }}
                >
                    Tudo selecionado deliberadamente para a tese.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="rounded-2xl p-5 mb-6"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.haloGold}30`,
                    }}
                >
                    <p
                        className="text-xs font-bold uppercase tracking-wider mb-2"
                        style={{ color: colors.haloGold }}
                    >
                        Prólogo (Jo 1:1-18)
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: colors.textMedium }}>
                        Articula em densa concentração teológica quem Jesus é. Diálogo deliberado com Gn 1:1.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                        className="rounded-xl p-4"
                        style={{
                            background: `${colors.vectorPurple}10`,
                            border: `1px solid ${colors.vectorPurple}30`,
                        }}
                    >
                        <p
                            className="text-xs font-bold uppercase tracking-wider mb-3"
                            style={{ color: colors.vectorPurple }}
                        >
                            ✦ Os sete &ldquo;Eu Sou&rdquo;
                        </p>
                        <ul className="space-y-1.5">
                            {euSou.map((e, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.1 + i * 0.08 }}
                                    className="text-sm flex gap-2"
                                    style={{ color: colors.textStarlight }}
                                >
                                    <span style={{ color: colors.vectorPurple }}>◇</span>
                                    <span>{e}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <p className="text-[11px] italic mt-3" style={{ color: colors.textMuted }}>
                            Eco do &ldquo;Eu Sou&rdquo; do êxodo (Êx 3:14).
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                        className="rounded-xl p-4"
                        style={{
                            background: `${colors.vectorBlue}10`,
                            border: `1px solid ${colors.vectorBlue}30`,
                        }}
                    >
                        <p
                            className="text-xs font-bold uppercase tracking-wider mb-3"
                            style={{ color: colors.vectorBlue }}
                        >
                            ◯ Os sete sinais
                        </p>
                        <ul className="space-y-1.5">
                            {sinais.map((s, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.1 + i * 0.08 }}
                                    className="text-sm flex gap-2"
                                    style={{ color: colors.textStarlight }}
                                >
                                    <span style={{ color: colors.vectorBlue }}>◇</span>
                                    <span>{s}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </ConvergenceWrapper>
    );
}
