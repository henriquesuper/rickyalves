'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

const arc = [
    { lesson: 'L 1–13', label: 'Como ler' },
    { lesson: 'L 14',   label: 'O que estamos lendo' },
    { lesson: 'L 15',   label: 'Como tudo se conecta' },
    { lesson: 'L 16',   label: 'Por que dói' },
    { lesson: 'L 17',   label: 'Como vamos prosseguir' },
    { lesson: 'L 18',   label: 'O livro que vamos abrir' },
    { lesson: 'L 19',   label: 'A primeira página' },
];

export function Slide58() {
    return (
        <ConvergenceWrapper stratum="pastoral" withGlow glowIntensity={1.4}>
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="text-6xl mb-6"
                    style={{ color: colors.coreGlow, textShadow: `0 0 40px ${colors.haloGold}80` }}
                >
                    ✦
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="rounded-2xl p-6 md:p-7 mb-8"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.haloGold}50`,
                        borderLeft: `4px solid ${colors.haloGold}`,
                        boxShadow: `0 8px 32px ${colors.bgVoid}90, 0 0 32px ${colors.haloGold}20`,
                    }}
                >
                    <p
                        className="text-lg md:text-xl font-bold leading-snug mb-3"
                        style={{
                            color: colors.haloGold,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        O caráter de Deus se conhece em Cristo —
                    </p>
                    <p
                        className="text-lg md:text-xl font-bold leading-snug"
                        style={{
                            color: colors.textStarlight,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        não em projeções anteriores.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="text-base md:text-lg italic mb-8 max-w-2xl mx-auto leading-relaxed"
                    style={{ color: colors.textNebula, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Se você quer saber quem Deus é, tem um lugar para olhar.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 2.4 }}
                    className="h-px max-w-md mx-auto mb-6"
                    style={{ background: `linear-gradient(to right, transparent, ${colors.haloGold}60, transparent)` }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 2.7 }}
                    className="text-xs uppercase tracking-[0.4em] font-mono mb-4"
                    style={{ color: colors.textMuted }}
                >
                    Ponte para a Lição 15 — O Arco da Bíblia
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.0 }}
                    className="flex flex-wrap justify-center gap-1.5 mb-6"
                >
                    {arc.map((a, i) => {
                        const isCurrent = a.lesson === 'L 14';
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 3.1 + i * 0.1 }}
                                className="flex items-center gap-1.5"
                            >
                                <div
                                    className="px-2.5 py-1.5 rounded-md text-[11px]"
                                    style={{
                                        background: isCurrent ? `${colors.haloGold}25` : colors.bgSurface,
                                        color: isCurrent ? colors.haloGold : colors.textMedium,
                                        border: `1px solid ${isCurrent ? colors.haloGold : colors.textDim}50`,
                                        fontWeight: isCurrent ? 700 : 400,
                                    }}
                                >
                                    <span className="font-mono font-bold">{a.lesson}</span>
                                    <span className="ml-1.5 opacity-80">{a.label}</span>
                                </div>
                                {i < arc.length - 1 && (
                                    <span className="text-xs" style={{ color: colors.textDim }}>·</span>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 4.0 }}
                    className="text-xs uppercase tracking-[0.3em] mt-6 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Até a Aula 15
                </motion.p>
            </div>
        </ConvergenceWrapper>
    );
}
