// Slide 33 - Crítica Textual Como Ciência
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, WaxSeal, colors } from './shared';

export default function Slide33_CriticaTextual() {
    const criteria = [
        {
            icon: "📅",
            name: "Antiguidade",
            description: "Manuscritos mais antigos geralmente mais confiáveis"
        },
        {
            icon: "🌍",
            name: "Distribuição Geográfica",
            description: "Leituras de regiões diferentes são mais confiáveis"
        },
        {
            icon: "🤔",
            name: "Lectio Difficilior",
            description: "A leitura mais difícil provavelmente é a original"
        },
        {
            icon: "✂️",
            name: "Lectio Brevior",
            description: "Escribas tendiam a adicionar, não remover"
        }
    ];

    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-center"
                    style={{ color: colors.goldBright }}
                >
                    Crítica Textual: Uma Ciência
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg mb-8 text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    Não é achismo — são critérios objetivos
                </motion.p>

                {/* Critérios */}
                <div className="grid md:grid-cols-2 gap-4 w-full mb-8">
                    {criteria.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="p-4 rounded-xl"
                            style={{
                                background: `${colors.bgSurface}90`,
                                border: `1px solid ${colors.goldAged}30`
                            }}
                        >
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">{item.icon}</span>
                                <div>
                                    <h4
                                        className="font-bold"
                                        style={{ color: colors.goldAged }}
                                    >
                                        {item.name}
                                    </h4>
                                    <p
                                        className="text-sm"
                                        style={{ color: colors.parchmentLight }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Resultado */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="w-full max-w-xl"
                >
                    <ParchmentCard highlight>
                        <div className="flex items-center gap-4">
                            <WaxSeal icon="✅" size="md" delay={0.9} />
                            <div>
                                <p
                                    className="text-lg font-bold"
                                    style={{ color: colors.goldAged }}
                                >
                                    99%+ de certeza
                                </p>
                                <p
                                    className="text-sm"
                                    style={{ color: colors.parchmentLight }}
                                >
                                    sobre o texto original do Novo Testamento
                                </p>
                            </div>
                        </div>
                    </ParchmentCard>
                </motion.div>

                {/* Citação */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-6 p-4 rounded-lg text-center"
                    style={{
                        borderLeft: `3px solid ${colors.goldAged}`,
                        background: `${colors.bgSurface}60`
                    }}
                >
                    <p
                        className="text-sm italic"
                        style={{ color: colors.parchmentLight }}
                    >
                        "O texto do Novo Testamento é mais bem atestado do que qualquer
                        outro texto da antiguidade."
                    </p>
                    <p
                        className="text-xs mt-2"
                        style={{ color: colors.parchmentMid }}
                    >
                        — Bruce Metzger, maior especialista em crítica textual do NT
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
