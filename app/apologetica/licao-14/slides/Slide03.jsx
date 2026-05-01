'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

const tools = [
    { lesson: 'L 3',     tool: 'Critérios para avaliar revelações' },
    { lesson: 'L 7',     tool: 'Confiança nos manuscritos' },
    { lesson: 'L 8',     tool: 'Complexidades de tradução' },
    { lesson: 'L 9–10',  tool: 'Autoria e contexto' },
    { lesson: 'L 11',    tool: 'Evidências arqueológicas' },
    { lesson: 'L 12',    tool: 'Princípios interpretativos' },
    { lesson: 'L 13',    tool: 'Gêneros literários' },
];

export function Slide03() {
    return (
        <ConvergenceWrapper stratum="aproximacao">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    O que você já tem em mãos
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-4xl font-bold mb-3 text-center"
                    style={{
                        color: colors.textStarlight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Sete instrumentos já reunidos
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    className="text-center text-base italic mb-8"
                    style={{ color: colors.haloGold }}
                >
                    Um arsenal hermenêutico construído lição a lição.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {tools.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                            className="flex items-center gap-3 p-3 rounded-xl"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${colors.haloGold}25`,
                            }}
                        >
                            <span
                                className="flex-shrink-0 px-2.5 py-1 rounded-md text-xs font-bold font-mono"
                                style={{
                                    background: `${colors.haloGold}20`,
                                    color: colors.haloGold,
                                    border: `1px solid ${colors.haloGold}40`,
                                }}
                            >
                                {t.lesson}
                            </span>
                            <span className="text-sm" style={{ color: colors.textStarlight }}>
                                {t.tool}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="mt-6 p-4 rounded-xl text-center"
                    style={{
                        background: `${colors.bgVoid}90`,
                        border: `1px dashed ${colors.haloGold}40`,
                    }}
                >
                    <p className="text-sm md:text-base italic" style={{ color: colors.textNebula, fontFamily: "'Playfair Display', Georgia, serif" }}>
                        Mas falta uma peça.
                    </p>
                </motion.div>
            </div>
        </ConvergenceWrapper>
    );
}
