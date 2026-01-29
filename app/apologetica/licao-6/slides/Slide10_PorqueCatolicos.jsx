'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

export default function Slide10_PorqueCatolicos() {
    const reasons = [
        {
            icon: "⛪",
            title: "Uso Histórico",
            description: "A igreja usou a Vulgata (que incluía esses livros) por mais de mil anos na liturgia"
        },
        {
            icon: "📖",
            title: "Tradição Patrística",
            description: "Pais da igreja citavam esses livros como edificantes e autoritativos"
        },
        {
            icon: "⚖️",
            title: "Autoridade da Igreja",
            description: "A igreja tem autoridade para reconhecer o cânon, não apenas registrar o que outros decidiram"
        }
    ];

    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-5xl mx-auto px-8 z-10"
            >
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-['Cinzel'] text-4xl md:text-5xl text-center mb-4"
                    style={{
                        color: colors.goldLeaf,
                        textShadow: `0 0 30px ${colors.goldLeaf}30`
                    }}
                >
                    Por Que Católicos os Incluem?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-10"
                    style={{ color: colors.parchmentMid }}
                >
                    Compreendendo a perspectiva católica com respeito
                </motion.p>

                {/* Razões */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.15 }}
                        >
                            <ParchmentCard>
                                <div className="text-center">
                                    <span className="text-4xl block mb-3">{reason.icon}</span>
                                    <h3 className="text-lg font-bold mb-2" style={{ color: colors.goldLeaf }}>
                                        {reason.title}
                                    </h3>
                                    <p className="text-sm" style={{ color: colors.parchmentLight }}>
                                        {reason.description}
                                    </p>
                                </div>
                            </ParchmentCard>
                        </motion.div>
                    ))}
                </div>

                {/* Concílio de Trento */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mb-6"
                >
                    <ParchmentCard highlight>
                        <div className="flex items-center gap-4">
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                                style={{
                                    background: `linear-gradient(135deg, ${colors.lapis}, ${colors.libraryWood})`,
                                }}
                            >
                                🏛️
                            </div>
                            <div style={{ color: colors.parchmentLight }}>
                                <p>
                                    <strong style={{ color: colors.goldLeaf }}>Concílio de Trento (1546)</strong> — formalizou a inclusão dos deuterocanônicos,
                                    em parte como resposta à Reforma Protestante.
                                </p>
                            </div>
                        </div>
                    </ParchmentCard>
                </motion.div>

                {/* 2 Macabeus */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <ParchmentCard>
                        <p style={{ color: colors.parchmentLight }}>
                            <span className="text-xl">📖</span>{" "}
                            <strong style={{ color: colors.goldLeaf }}>2 Macabeus 12:43-45</strong> menciona
                            oração pelos mortos e ofertas para expiar pecados dos falecidos —
                            texto usado para apoiar a doutrina do <strong>purgatório</strong>.
                        </p>
                        <p className="text-sm mt-3" style={{ color: colors.parchmentMid }}>
                            Isso explica por que a questão canônica tem implicações teológicas práticas.
                        </p>
                    </ParchmentCard>
                </motion.div>

                {/* Nota de respeito */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-6 text-center"
                >
                    <p className="text-sm italic" style={{ color: `${colors.goldLeaf}80` }}>
                        ⚠️ Nota: Apresentamos a posição católica com respeito, não para concordar ou discordar,
                        mas para entender por que cristãos sinceros chegam a conclusões diferentes.
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
