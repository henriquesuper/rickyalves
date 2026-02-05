// Slide 24 - O Que Conta Como Variante
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

export default function Slide24_OQueContaVariante() {
    const examples = [
        {
            category: "Ortografia",
            example: "Ἰωάννης vs Ἰωάνης",
            translation: "João vs Joao",
            trivial: true
        },
        {
            category: "Artigo",
            example: "ὁ Ἰησοῦς vs Ἰησοῦς",
            translation: "'O' Jesus vs Jesus",
            trivial: true
        },
        {
            category: "Ordem",
            example: "Jesus Cristo vs Cristo Jesus",
            translation: "Mesma pessoa, ordem diferente",
            trivial: true
        },
        {
            category: "Sinônimo",
            example: "εἶπεν vs ἔφη",
            translation: "Disse vs Falou",
            trivial: true
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
                    O Que Conta Como "Variante"?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg mb-8 text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    Spoiler: a maioria é trivial
                </motion.p>

                {/* Grid de exemplos */}
                <div className="grid md:grid-cols-2 gap-4 w-full mb-8">
                    {examples.map((item, index) => (
                        <ParchmentCard key={index} delay={0.3 + index * 0.1}>
                            <div className="flex items-start gap-4">
                                <span
                                    className="text-2xl px-2 py-1 rounded"
                                    style={{
                                        background: `${colors.goldAged}20`,
                                        color: colors.goldAged
                                    }}
                                >
                                    {item.category}
                                </span>
                                <div className="flex-1">
                                    <p
                                        className="text-sm font-mono mb-1"
                                        style={{ color: colors.parchmentLight }}
                                    >
                                        {item.example}
                                    </p>
                                    <p
                                        className="text-xs"
                                        style={{ color: colors.parchmentMid }}
                                    >
                                        {item.translation}
                                    </p>
                                </div>
                                {item.trivial && (
                                    <span
                                        className="text-xs px-2 py-1 rounded"
                                        style={{
                                            background: `${colors.goldAged}15`,
                                            color: colors.goldAged
                                        }}
                                    >
                                        Trivial
                                    </span>
                                )}
                            </div>
                        </ParchmentCard>
                    ))}
                </div>

                {/* Ponto chave */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="w-full max-w-xl"
                >
                    <ParchmentCard highlight>
                        <div className="text-center">
                            <p
                                className="text-lg mb-3"
                                style={{ color: colors.parchmentLight }}
                            >
                                🤔 <strong>Pergunta:</strong>
                            </p>
                            <p
                                className="text-xl"
                                style={{ color: colors.goldAged }}
                            >
                                "Jezus" vs "Jesus" muda alguma doutrina?
                            </p>
                            <p
                                className="text-lg mt-4"
                                style={{ color: colors.parchmentLight }}
                            >
                                Resposta óbvia:{' '}
                                <span style={{ color: colors.goldAged, fontWeight: 'bold' }}>NÃO</span>
                            </p>
                        </div>
                    </ParchmentCard>
                </motion.div>

                {/* Conclusão */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-8 text-sm text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    💡 A <strong>maioria absoluta</strong> das 400.000 variantes são deste tipo.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
