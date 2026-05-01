'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, ObjectionCard, colors } from './shared';

const preserved = [
    { book: 'Salmos',     value: 'o livro mais íntimo de oração e lamento do mundo' },
    { book: 'Provérbios', value: 'sabedoria viva, prática, do dia a dia' },
    { book: 'Eclesiastes', value: 'a filosofia mais corajosa sobre o vazio' },
    { book: 'Profetas',   value: 'denúncia de injustiça e opressão com força profética' },
];

export function Slide43() {
    return (
        <ConvergenceWrapper stratum="ruido">
            <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
                <ObjectionCard
                    objection="Mas isso não diminui o AT? Ele vira só preparação?"
                    response="Boa objeção. A resposta: o AT mantém seu valor próprio. Ele não é diminuído por apontar para Cristo — ele ganha camada adicional de significado sem perder seu sentido próprio."
                    delay={0.3}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="rounded-xl p-4"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.haloGold}30`,
                    }}
                >
                    <p
                        className="text-xs font-bold uppercase tracking-wider mb-3"
                        style={{ color: colors.haloGold }}
                    >
                        ◎ O AT mantém seu valor próprio
                    </p>
                    <div className="space-y-2">
                        {preserved.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.1 + i * 0.13 }}
                                className="flex gap-3 text-sm"
                            >
                                <span
                                    className="flex-shrink-0 px-2 py-0.5 rounded font-bold text-xs"
                                    style={{
                                        background: `${colors.haloGold}20`,
                                        color: colors.haloGold,
                                        border: `1px solid ${colors.haloGold}40`,
                                        minWidth: 100,
                                        textAlign: 'center',
                                        height: 'fit-content',
                                    }}
                                >
                                    {p.book}
                                </span>
                                <span style={{ color: colors.textMedium }}>{p.value}</span>
                            </motion.div>
                        ))}
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8 }}
                        className="text-xs italic mt-4 text-center"
                        style={{ color: colors.textNebula }}
                    >
                        Isaías 53 continua sendo Isaías 53 no contexto histórico — e também aponta para Cristo. As duas leituras coexistem.
                    </motion.p>
                </motion.div>
            </div>
        </ConvergenceWrapper>
    );
}
