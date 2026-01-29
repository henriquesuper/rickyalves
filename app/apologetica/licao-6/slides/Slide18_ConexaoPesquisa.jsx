'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

export default function Slide18_ConexaoPesquisa() {
    const stats = [
        { label: "Satisfação conjugal com comunhão espiritual", value: "+47%", color: colors.forest },
        { label: "Estabilidade em casamentos com fé compartilhada", value: "+31%", color: colors.lapis },
        { label: "Qualidade de intimidade com valores tradicionais", value: "+28%", color: colors.vermillion },
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
                    Conexão com a Pesquisa
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-10"
                    style={{ color: colors.parchmentMid }}
                >
                    Sabedoria bíblica + dados empíricos = validação mútua
                </motion.p>

                {/* Contexto pessoal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                >
                    <ParchmentCard highlight>
                        <div className="flex items-center gap-4">
                            <span className="text-5xl">📊</span>
                            <div style={{ color: colors.parchmentLight }}>
                                <p>
                                    <strong style={{ color: colors.goldLeaf }}>A pesquisa sobre sexualidade e casamento</strong>
                                    confirma o que Cantares celebra: a intimidade dentro de um relacionamento
                                    comprometido e baseado em valores produz os melhores resultados.
                                </p>
                            </div>
                        </div>
                    </ParchmentCard>
                </motion.div>

                {/* Estatísticas */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.15 }}
                        >
                            <ParchmentCard>
                                <div className="text-center">
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.7 + i * 0.15, type: "spring" }}
                                        className="text-4xl font-bold block mb-2"
                                        style={{ color: stat.color }}
                                    >
                                        {stat.value}
                                    </motion.span>
                                    <p className="text-sm" style={{ color: colors.parchmentLight }}>
                                        {stat.label}
                                    </p>
                                </div>
                            </ParchmentCard>
                        </motion.div>
                    ))}
                </div>

                {/* Conexão */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <ParchmentCard>
                        <h3 className="text-lg font-bold mb-3" style={{ color: colors.goldLeaf }}>
                            💡 O Que Isso Significa
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6" style={{ color: colors.parchmentLight }}>
                            <div>
                                <h4 className="font-bold mb-2" style={{ color: colors.lapis }}>
                                    Para a Ciência:
                                </h4>
                                <p className="text-sm">
                                    Os dados confirmam que a visão bíblica sobre casamento e intimidade
                                    não é arbitrária — há sabedoria prática nela.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2" style={{ color: colors.vermillion }}>
                                    Para a Fé:
                                </h4>
                                <p className="text-sm">
                                    Quando a pesquisa confirma o que a Escritura ensina, nossa confiança
                                    na Palavra se fortalece — ela descreve a realidade como ela é.
                                </p>
                            </div>
                        </div>
                    </ParchmentCard>
                </motion.div>

                {/* Nota pessoal */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="mt-6 text-center"
                >
                    <p className="text-sm italic" style={{ color: colors.parchmentMid }}>
                        🎓 <em>A pesquisa acadêmica sobre casamento e intimidade valida o que
                            Cantares sempre celebrou há 3.000 anos.</em>
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
