'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

export default function Slide11_DialogoRespeitoso() {
    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-4xl mx-auto px-8 z-10"
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
                    Diálogo Respeitoso
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-10"
                    style={{ color: colors.parchmentMid }}
                >
                    Como explicar a diferença sem criar divisão
                </motion.p>

                {/* Cenário */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                >
                    <ParchmentCard>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-4xl">👨‍👩‍👧‍👦</span>
                            <p style={{ color: colors.parchmentLight }}>
                                <strong style={{ color: colors.goldLeaf }}>Cenário:</strong> Os filhos perguntam
                                por que a Bíblia da vovó Marlene tem mais livros que a nossa.
                            </p>
                        </div>
                    </ParchmentCard>
                </motion.div>

                {/* Exemplo de resposta */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8"
                >
                    <ParchmentCard highlight>
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: colors.goldLeaf }}>
                            <span>💬</span> Um exemplo de resposta:
                        </h3>
                        <div
                            className="p-4 rounded-xl italic text-lg leading-relaxed"
                            style={{
                                background: `${colors.parchmentDark}15`,
                                borderLeft: `3px solid ${colors.goldLeaf}`,
                                color: colors.parchmentLight
                            }}
                        >
                            <p className="mb-4">
                                "Protestantes seguem o cânon hebraico que Jesus usava — 66 livros.
                                Católicos seguem um cânon ligeiramente maior — 73 livros — que inclui
                                7 livros adicionais que circulavam em grego.
                            </p>
                            <p className="mb-4">
                                Ambos concordamos nos livros principais. A diferença são esses 7.
                            </p>
                            <p className="mb-4">
                                Protestantes argumentam que devemos seguir o cânon que Jesus reconhecia.
                                Católicos argumentam que a igreja tem autoridade para reconhecer mais livros.
                                <strong style={{ color: colors.goldLeaf }}> É uma divergência honesta.</strong>
                            </p>
                            <p>
                                Esses 7 livros não são 'maus' ou 'heréticos'. São literatura judaica valiosa.
                                A vovó certamente terá uma Bíblia católica que vocês podem consultar!"
                            </p>
                        </div>
                    </ParchmentCard>
                </motion.div>

                {/* Princípios */}
                <div className="grid md:grid-cols-3 gap-4">
                    {[
                        { icon: "❌", text: "NÃO dizer: 'Católicos estão errados'" },
                        { icon: "❌", text: "NÃO dizer: 'A Bíblia deles é incompleta'" },
                        { icon: "✅", text: "DIZER: 'Critérios diferentes, escolhas diferentes'" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            className="p-4 rounded-xl text-center"
                            style={{
                                background: item.icon === "✅"
                                    ? `${colors.forest}30`
                                    : `${colors.vermillion}20`,
                                border: `1px solid ${item.icon === "✅" ? colors.forest : colors.vermillion}40`
                            }}
                        >
                            <span className="text-2xl block mb-2">{item.icon}</span>
                            <p className="text-sm" style={{ color: colors.parchmentLight }}>
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </SlideWrapper>
    );
}
