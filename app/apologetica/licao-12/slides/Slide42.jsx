'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

const dangers = [
    { n: 1, title: 'Proof-texting', fix: 'Sempre leia o contexto ao redor', icon: '✂️' },
    { n: 2, title: 'Ignorar o gênero', fix: 'Identifique o gênero antes de interpretar', icon: '📋' },
    { n: 3, title: 'Espiritualização', fix: 'Comece pelo sentido mais simples', icon: '🎭' },
    { n: 4, title: 'Aplicação sem distância', fix: 'Separe princípio atemporal de cultura', icon: '🌍' },
    { n: 5, title: 'Cherry-picking', fix: 'Trabalhe com o quadro completo', icon: '🍒' },
];

export function Slide42() {
    return (
        <LabWrapper stratum="warning-filter">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    5 Aberrações Corrigidas
                </motion.h2>

                <div className="space-y-2">
                    {dangers.map((d, i) => (
                        <motion.div
                            key={d.n}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.12 }}
                            className="flex items-center gap-3 p-3 rounded-xl"
                            style={{ background: colors.bgSurface, border: `1px solid ${colors.lensAmber}10` }}
                        >
                            <span className="text-xl">{d.icon}</span>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold" style={{ color: colors.lensRed }}>{d.title}</p>
                                <p className="text-xs" style={{ color: colors.lensTeal }}>→ {d.fix}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-6 text-sm text-center italic"
                    style={{ color: colors.textMuted }}
                >
                    Essas são as distorções que suas lentes foram projetadas para corrigir.
                </motion.p>
            </div>
        </LabWrapper>
    );
}
