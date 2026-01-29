'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

// Componente de livro animado
function AnimatedBook({ title, color, delay = 0, size = "normal" }) {
    const sizeClass = size === "small" ? "h-6 text-xs" : "h-8 text-sm";

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
            className={`${sizeClass} rounded-sm px-2 flex items-center`}
            style={{
                background: `linear-gradient(90deg, ${color}90, ${color}60)`,
                boxShadow: `2px 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)`,
            }}
        >
            <span className="font-medium truncate" style={{ color: colors.parchmentLight }}>
                {title}
            </span>
        </motion.div>
    );
}

export default function Slide05_Contagem() {
    // Livros que são combinados
    const combinations = [
        { combined: "Samuel", separate: ["1 Samuel", "2 Samuel"] },
        { combined: "Reis", separate: ["1 Reis", "2 Reis"] },
        { combined: "Crônicas", separate: ["1 Crônicas", "2 Crônicas"] },
        { combined: "Esdras", separate: ["Esdras", "Neemias"] },
        { combined: "Os Doze", separate: ["Oséias", "Joel", "Amós", "...", "Malaquias"] },
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
                    22 vs 39 Livros
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-10 text-lg"
                    style={{ color: `${colors.parchmentMid}` }}
                >
                    O mesmo conteúdo, contagem diferente
                </motion.p>

                {/* Comparação visual */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Contagem Hebraica */}
                    <ParchmentCard delay={0.3}>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold" style={{ color: colors.goldLeaf }}>
                                Contagem Hebraica
                            </h3>
                            <span
                                className="text-3xl font-bold px-4 py-1 rounded-full"
                                style={{
                                    background: `${colors.goldLeaf}20`,
                                    color: colors.goldLeaf
                                }}
                            >
                                22
                            </span>
                        </div>

                        <div className="space-y-3">
                            {combinations.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="flex items-center gap-2"
                                >
                                    <div
                                        className="h-8 px-3 rounded flex items-center font-medium"
                                        style={{
                                            background: `${colors.vermillion}60`,
                                            color: colors.parchmentLight
                                        }}
                                    >
                                        📕 {item.combined}
                                    </div>
                                    <span style={{ color: colors.parchmentMid }}>= 1 livro</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="mt-4 text-sm italic"
                            style={{ color: `${colors.parchmentMid}80` }}
                        >
                            22 livros = 22 letras do alfabeto hebraico (de Aleph a Tav)
                        </motion.p>
                    </ParchmentCard>

                    {/* Contagem Protestante */}
                    <ParchmentCard delay={0.5}>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold" style={{ color: colors.lapis }}>
                                Contagem Protestante
                            </h3>
                            <span
                                className="text-3xl font-bold px-4 py-1 rounded-full"
                                style={{
                                    background: `${colors.lapis}20`,
                                    color: colors.lapis
                                }}
                            >
                                39
                            </span>
                        </div>

                        <div className="space-y-3">
                            {combinations.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    className="flex items-center gap-2 flex-wrap"
                                >
                                    {item.separate.map((book, j) => (
                                        <div
                                            key={j}
                                            className="h-6 px-2 rounded text-xs flex items-center font-medium"
                                            style={{
                                                background: `${colors.lapis}60`,
                                                color: colors.parchmentLight
                                            }}
                                        >
                                            📘 {book}
                                        </div>
                                    ))}
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.1 }}
                            className="mt-4 text-sm italic"
                            style={{ color: `${colors.parchmentMid}80` }}
                        >
                            Livros separados individualmente
                        </motion.p>
                    </ParchmentCard>
                </div>

                {/* Conclusão */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-center"
                >
                    <ParchmentCard highlight className="inline-block">
                        <p className="text-lg" style={{ color: colors.parchmentLight }}>
                            <span className="text-2xl mr-2">💡</span>
                            <strong style={{ color: colors.goldLeaf }}>Não falta nem sobra uma palavra!</strong>
                            <br />
                            <span className="text-sm" style={{ color: `${colors.parchmentMid}90` }}>
                                É puramente questão de organização e agrupamento.
                            </span>
                        </p>
                    </ParchmentCard>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
