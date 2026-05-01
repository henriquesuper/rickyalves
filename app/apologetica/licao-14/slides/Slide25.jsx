'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

const timeline = [
    { year: '~30 d.C.',  label: 'Crucificação',           kind: 'event',   color: colors.haloGold },
    { year: '~33–35 d.C.', label: '1 Co 15:3-4 fórmula',  kind: 'formula', color: colors.vectorBlue },
    { year: '~50 d.C.',  label: '1 Coríntios escrita',    kind: 'epistle', color: colors.vectorPurple },
    { year: '~70 d.C.',  label: 'Marcos (1º evangelho)',  kind: 'gospel',  color: colors.vectorAmber },
    { year: '~95 d.C.',  label: 'Apocalipse',             kind: 'late',    color: colors.vectorRose },
];

export function Slide25() {
    return (
        <ConvergenceWrapper stratum="orbitas" withGlow glowIntensity={0.6}>
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    Datação como argumento
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
                    A tese cristocêntrica é o ponto de partida
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-base italic mb-8"
                    style={{ color: colors.haloGold }}
                >
                    Não desenvolvimento teológico tardio.
                </motion.p>

                <div className="relative">
                    <div
                        className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2"
                        style={{
                            background: `linear-gradient(to right, transparent, ${colors.haloGold}50, transparent)`,
                        }}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-2 relative">
                        {timeline.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + i * 0.18 }}
                                className="flex flex-col items-center text-center px-2"
                            >
                                <span
                                    className="text-[10px] font-mono mb-2 px-2 py-0.5 rounded"
                                    style={{
                                        background: `${t.color}20`,
                                        color: t.color,
                                        border: `1px solid ${t.color}50`,
                                    }}
                                >
                                    {t.year}
                                </span>
                                <div
                                    className="w-3 h-3 rounded-full mb-2"
                                    style={{
                                        background: t.color,
                                        boxShadow: `0 0 12px ${t.color}80`,
                                    }}
                                />
                                <p className="text-xs leading-tight" style={{ color: colors.textStarlight }}>
                                    {t.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="mt-10 p-5 rounded-2xl text-center"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.haloGold}40`,
                        borderLeft: `4px solid ${colors.haloGold}`,
                    }}
                >
                    <p
                        className="text-base md:text-lg leading-relaxed"
                        style={{ color: colors.textStarlight, fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        Em <span style={{ color: colors.haloGold, fontWeight: 600 }}>~5 anos</span> após a crucificação, a fórmula &ldquo;segundo as Escrituras&rdquo; já estava em circulação litúrgica.
                    </p>
                    <p className="text-sm italic mt-3" style={{ color: colors.textMedium }}>
                        A leitura cristocêntrica é o pressuposto da fé cristã, não uma conclusão posterior.
                    </p>
                </motion.div>
            </div>
        </ConvergenceWrapper>
    );
}
