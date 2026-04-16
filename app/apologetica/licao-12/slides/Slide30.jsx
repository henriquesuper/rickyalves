'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

export function Slide30() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-wider mb-2 text-center"
                    style={{ color: colors.lensAmber }}
                >
                    Lei Moral — permanente
                </motion.h3>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    O Que Não Muda
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-5 rounded-2xl"
                    style={{ background: colors.bgSurface, border: `1px solid ${colors.lensTeal}15` }}
                >
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        A lei moral reflete o caráter de Deus — não uma cultura específica. Matar é errado não porque
                        Israel decidiu, mas porque a vida tem valor intrínseco.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                        {['Não matarás', 'Não furtarás', 'Não mentirás', 'Não adulterarás', 'Honra pai e mãe'].map((cmd, i) => (
                            <motion.div
                                key={cmd}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + i * 0.1 }}
                                className="p-2 rounded-lg text-center text-xs"
                                style={{ background: `${colors.lensTeal}10`, color: colors.lensTeal, border: `1px solid ${colors.lensTeal}20` }}
                            >
                                {cmd}
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                        className="mt-4 text-xs italic"
                        style={{ color: colors.textMuted }}
                    >
                        Estes princípios transcendem culturas e covenants. Jesus os reafirmou e aprofundou no Sermão do Monte.
                    </motion.p>
                </motion.div>
            </div>
        </LabWrapper>
    );
}
