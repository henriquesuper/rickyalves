'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

const points = [
    {
        n: 1,
        title: 'Textos genuinamente difíceis',
        desc: 'A Bíblia contém passagens que permitem mais de uma leitura legítima. Pessoas honestas discordam.',
        icon: '📖',
    },
    {
        n: 2,
        title: 'Tradição acumulada',
        desc: '2.000 anos de história, cultura e contexto político moldaram interpretações que se cristalizaram em instituições.',
        icon: '🏛️',
    },
    {
        n: 3,
        title: 'Ênfases diferentes ≠ contradições',
        desc: 'Batistas enfatizam batismo de crentes; presbiterianos, pacto familiar. Muitas divisões são de ênfase, não de essência.',
        icon: '🔍',
    },
    {
        n: 4,
        title: 'A falha é humana, não do texto',
        desc: 'A diversidade não prova que a Bíblia é confusa — prova que leitores são limitados.',
        icon: '🪞',
    },
];

export function Slide49() {
    return (
        <LabWrapper stratum="advanced-optics">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-2 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    A Grande Pergunta
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-center mb-6 italic"
                    style={{ color: colors.lensPurple }}
                >
                    "Se a Bíblia é clara, por que existem tantas denominações?"
                </motion.p>

                <div className="space-y-3">
                    {points.map((p, i) => (
                        <motion.div
                            key={p.n}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.15 }}
                            className="flex items-start gap-3 p-3 rounded-xl"
                            style={{ background: colors.bgSurface, border: `1px solid ${colors.lensPurple}10` }}
                        >
                            <span className="text-lg">{p.icon}</span>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold" style={{ color: colors.lensPurple }}>{p.n}. {p.title}</p>
                                <p className="text-xs mt-1" style={{ color: colors.textMedium }}>{p.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </LabWrapper>
    );
}
