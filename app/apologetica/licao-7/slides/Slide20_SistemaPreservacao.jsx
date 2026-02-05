// Slide 20 - O Sistema de Preservação
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

export default function Slide20_SistemaPreservacao() {
    const rules = [
        { icon: "📜", rule: "Pergaminho de animal limpo", detail: "Material específico" },
        { icon: "🖋️", rule: "Tinta preparada com receita específica", detail: "Sem correções líquidas" },
        { icon: "📐", rule: "Colunas de 48-60 linhas exatas", detail: "Formatação rígida" },
        { icon: "👁️", rule: "3 revisores verificavam cada cópia", detail: "Controle de qualidade" },
        { icon: "⏳", rule: "30 dias entre cada livro copiado", detail: "Sem pressa" },
        { icon: "🛁", rule: "Banho antes de escrever o nome de Deus", detail: "Reverência" }
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
                    O Sistema de Preservação
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg mb-8 text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    Regras obsessivas para copiar a Torah
                </motion.p>

                {/* Grid de regras */}
                <div className="grid md:grid-cols-3 gap-4 w-full mb-8">
                    {rules.map((item, index) => (
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
                            <span className="text-2xl block mb-2">{item.icon}</span>
                            <p
                                className="font-bold text-sm mb-1"
                                style={{ color: colors.parchmentLight }}
                            >
                                {item.rule}
                            </p>
                            <p
                                className="text-xs"
                                style={{ color: colors.parchmentMid }}
                            >
                                {item.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Consequências de erro */}
                <ParchmentCard delay={1} danger className="w-full max-w-xl">
                    <h3
                        className="text-xl font-bold mb-4 text-center"
                        style={{ color: colors.inkBlood }}
                    >
                        ⚠️ E Se Errar?
                    </h3>

                    <div className="space-y-3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 }}
                            className="flex items-center gap-3"
                        >
                            <span
                                className="w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold"
                                style={{ background: `${colors.inkBlood}30`, color: colors.inkBlood }}
                            >
                                1
                            </span>
                            <p style={{ color: colors.parchmentLight }}>
                                1 erro na folha = <strong>folha destruída</strong>
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4 }}
                            className="flex items-center gap-3"
                        >
                            <span
                                className="w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold"
                                style={{ background: `${colors.inkBlood}30`, color: colors.inkBlood }}
                            >
                                3
                            </span>
                            <p style={{ color: colors.parchmentLight }}>
                                3 erros no manuscrito = <strong>manuscrito inteiro enterrado</strong>
                            </p>
                        </motion.div>
                    </div>
                </ParchmentCard>
            </div>
        </SlideWrapper>
    );
}
