'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, colors } from './shared';

export function Slide53() {
    const connections = [
        { icon: '📖', title: 'Jó', text: 'O Deus da Bíblia opera dentro da história, não fora dela' },
        { icon: '⚔️', title: 'Grande Conflito', text: 'Se o conflito é real, esperamos marcas no registro histórico' },
        { icon: '⛰️', title: 'Sermão do Monte', text: 'Tácito confirma: o homem cujas palavras lemos existiu' },
        { icon: '💧', title: 'Evangelho de João', text: 'Betesda confirmada — quando chegarmos em João 5, o cenário é real' },
    ];

    return (
        <ExcavationWrapper stratum="bedrock">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-8"
                    style={{ color: colors.textLight }}
                >
                    O QUE ESCAVAMOS SE CONECTA COM TUDO
                </motion.h2>

                {/* 2x2 grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {connections.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + i * 0.2 }}
                            className="p-4 rounded-xl"
                            style={{
                                background: colors.bgSurface,
                                borderLeft: `4px solid ${colors.excavationAmber}`,
                            }}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xl">{item.icon}</span>
                                <h3 className="text-sm font-bold" style={{ color: colors.textLight }}>
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-sm" style={{ color: colors.textMedium }}>
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ExcavationWrapper>
    );
}
