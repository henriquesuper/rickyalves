'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

// Componente de escriba animado
function AnimatedScribe() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-32 h-32 mx-auto mb-6"
        >
            {/* Fundo circular */}
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    background: `radial-gradient(circle, ${colors.lapis}40, transparent)`,
                }}
            />

            {/* Ícone do escriba */}
            <motion.span
                className="absolute inset-0 flex items-center justify-center text-7xl"
                animate={{
                    y: [0, -5, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                ✍️
            </motion.span>

            {/* Partículas de tinta */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        background: colors.lapis,
                        left: `${30 + i * 10}%`,
                        bottom: '20%',
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0, 0.6, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                    }}
                />
            ))}
        </motion.div>
    );
}

export default function Slide07_Septuaginta() {
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
                    className="font-['Cinzel'] text-4xl md:text-5xl text-center mb-2"
                    style={{
                        color: colors.goldLeaf,
                        textShadow: `0 0 30px ${colors.goldLeaf}30`
                    }}
                >
                    A Septuaginta
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-8 text-2xl"
                    style={{ color: colors.parchmentMid }}
                >
                    LXX — A Tradução Grega
                </motion.p>

                <AnimatedScribe />

                <div className="grid md:grid-cols-2 gap-8">
                    {/* O que é */}
                    <ParchmentCard delay={0.4}>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.goldLeaf }}>
                            <span>📚</span> O Que É
                        </h3>
                        <ul className="space-y-3" style={{ color: colors.parchmentLight }}>
                            <li className="flex items-start gap-2">
                                <span style={{ color: colors.lapis }}>▸</span>
                                Tradução do AT hebraico para o <strong>grego</strong>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: colors.lapis }}>▸</span>
                                Feita em <strong>Alexandria, Egito</strong> (séc. III-I a.C.)
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: colors.lapis }}>▸</span>
                                Para judeus da <strong>diáspora</strong> que falavam grego
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: colors.lapis }}>▸</span>
                                LXX = 70 em algarismos romanos
                            </li>
                        </ul>
                    </ParchmentCard>

                    {/* A Lenda */}
                    <ParchmentCard delay={0.6}>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.vermillion }}>
                            <span>📜</span> A Carta de Aristeias
                        </h3>
                        <div style={{ color: colors.parchmentLight }}>
                            <p className="mb-3">
                                Lenda: <strong>72 tradutores</strong> trabalharam isoladamente e produziram
                                traduções <em style={{ color: colors.goldLeaf }}>idênticas</em>!
                            </p>
                            <div
                                className="p-3 rounded-lg mt-3"
                                style={{
                                    background: `${colors.vermillion}20`,
                                    border: `1px solid ${colors.vermillion}40`
                                }}
                            >
                                <p className="text-sm">
                                    <span className="text-lg">⚠️</span> <strong>Piedosa ficção</strong>, não história.
                                    Escrita ~150 a.C. para dar autoridade ao texto grego.
                                </p>
                            </div>
                        </div>
                    </ParchmentCard>
                </div>

                {/* Importância */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8"
                >
                    <ParchmentCard highlight>
                        <div className="flex items-center gap-4">
                            <span className="text-4xl">💡</span>
                            <div style={{ color: colors.parchmentLight }}>
                                <p className="text-lg">
                                    <strong style={{ color: colors.goldLeaf }}>Ponto crucial:</strong> A LXX incluía
                                    livros que <em>não estavam</em> no cânon hebraico palestino —
                                    os chamados <strong>deuterocanônicos</strong>.
                                </p>
                                <p className="text-sm mt-2" style={{ color: colors.parchmentMid }}>
                                    Isso criou uma diferença que persiste até hoje...
                                </p>
                            </div>
                        </div>
                    </ParchmentCard>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
