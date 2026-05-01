'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

const themes = [
    {
        theme: 'Aliança',
        steps: ['Adâmica', 'Noética', 'Abraâmica', 'Mosaica', 'Davídica', 'Nova Aliança'],
        ref: 'Jr 31; Lc 22:20',
    },
    {
        theme: 'Sacrifício',
        steps: ['Caim & Abel', 'Patriarcal', 'Mosaico', 'Profético', 'Expiação única'],
        ref: 'Hb 9–10',
    },
    {
        theme: 'Sumo sacerdócio',
        steps: ['Arão', 'Linha levítica', 'Profetas críticos', 'Sacerdócio celestial'],
        ref: 'Hb 4–7',
    },
    {
        theme: 'Reino de Deus',
        steps: ['Israel teocrático', 'Davi', 'Promessa eterna', 'Profetas messiânicos', 'Reino em Cristo'],
        ref: '2 Sm 7; Lc 1:32',
    },
    {
        theme: 'Êxodo',
        steps: ['Páscoa', 'Mar Vermelho', 'Maná', 'Serpente', 'Sinai', 'Êxodo definitivo'],
        ref: 'Lc 9:31',
    },
];

export function Slide33() {
    return (
        <ConvergenceWrapper stratum="vetores">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.vectorPurple }}
                >
                    Categoria C · Temas teológicos
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
                    Cinco temas em escada
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm italic mb-8"
                    style={{ color: colors.textMedium }}
                >
                    Cada tema progride pelo AT até culminar em Cristo.
                </motion.p>

                <div className="space-y-4">
                    {themes.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + i * 0.15 }}
                            className="rounded-xl p-4"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${colors.vectorPurple}30`,
                            }}
                        >
                            <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
                                <p
                                    className="text-base md:text-lg font-bold"
                                    style={{
                                        color: colors.vectorPurple,
                                        fontFamily: "'Playfair Display', Georgia, serif",
                                    }}
                                >
                                    {t.theme}
                                </p>
                                <span
                                    className="text-[10px] font-mono px-2 py-0.5 rounded"
                                    style={{
                                        background: `${colors.vectorPurple}20`,
                                        color: colors.vectorPurple,
                                        border: `1px solid ${colors.vectorPurple}40`,
                                    }}
                                >
                                    {t.ref}
                                </span>
                            </div>
                            <div className="flex flex-wrap items-center gap-1.5">
                                {t.steps.map((s, j) => (
                                    <div key={j} className="flex items-center gap-1.5">
                                        <span
                                            className="text-xs px-2 py-1 rounded-md"
                                            style={{
                                                background: j === t.steps.length - 1
                                                    ? `${colors.haloGold}25`
                                                    : `${colors.vectorPurple}15`,
                                                color: j === t.steps.length - 1 ? colors.haloGold : colors.textStarlight,
                                                border: `1px solid ${j === t.steps.length - 1 ? colors.haloGold : colors.vectorPurple}40`,
                                                fontWeight: j === t.steps.length - 1 ? 700 : 400,
                                            }}
                                        >
                                            {s}
                                        </span>
                                        {j < t.steps.length - 1 && (
                                            <span style={{ color: colors.textMuted }}>→</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ConvergenceWrapper>
    );
}
