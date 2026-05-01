'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

const traditions = [
    {
        name: 'Judaísmo rabínico',
        center: 'Torá',
        approach: 'Profetas e Escritos como comentário; Talmude amplifica.',
        color: colors.vectorAmber,
        icon: '📜',
    },
    {
        name: 'Islamismo',
        center: 'Alcorão',
        approach: 'Tudo o que veio antes é parcial e às vezes corrompido.',
        color: colors.vectorSea,
        icon: '☪',
    },
    {
        name: 'Alegorese filônica',
        center: 'Sentido oculto',
        approach: 'Filosofia platônica atrás de cada palavra (Filo, parte de Orígenes).',
        color: colors.vectorPurple,
        icon: '🔮',
    },
    {
        name: 'Cristianismo histórico',
        center: 'Cristo',
        approach: 'Centro hermenêutico identificado dentro do próprio texto.',
        color: colors.haloGold,
        icon: '✦',
    },
];

export function Slide05() {
    return (
        <ConvergenceWrapper stratum="aproximacao">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    Como cada tradição resolve
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-3xl font-bold mb-8 text-center"
                    style={{
                        color: colors.textStarlight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Quatro respostas históricas, quatro centros distintos
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {traditions.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55 + i * 0.18, type: 'spring', stiffness: 110 }}
                            className="rounded-xl p-5 flex flex-col"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${t.color}40`,
                                boxShadow: t.name === 'Cristianismo histórico'
                                    ? `0 0 24px ${t.color}25, 0 8px 24px ${colors.bgVoid}80`
                                    : `0 8px 24px ${colors.bgVoid}60`,
                            }}
                        >
                            <span className="text-3xl mb-3">{t.icon}</span>
                            <p
                                className="text-base font-bold mb-2"
                                style={{ color: colors.textStarlight, fontFamily: "'Playfair Display', Georgia, serif" }}
                            >
                                {t.name}
                            </p>
                            <div
                                className="text-xs font-bold uppercase tracking-wider mb-3 px-2 py-1 rounded inline-block self-start"
                                style={{ background: `${t.color}20`, color: t.color, border: `1px solid ${t.color}40` }}
                            >
                                Centro: {t.center}
                            </div>
                            <p className="text-xs leading-relaxed" style={{ color: colors.textMedium }}>
                                {t.approach}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-center text-sm md:text-base italic mt-8"
                    style={{ color: colors.textNebula, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Não como leitura imposta de fora, mas como princípio identificado dentro do próprio texto.
                </motion.p>
            </div>
        </ConvergenceWrapper>
    );
}
