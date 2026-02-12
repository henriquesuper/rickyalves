// Slide 32 - Encerramento — A Cadeia de Fidelidade (recap completo)
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, WaxSeal, ScribeWriting, colors } from './shared';

const journey = [
    { lesson: '1', text: 'Deus existe — a razão aponta para Ele', color: '#a78bfa', icon: '🌌' },
    { lesson: '2', text: 'Ele se comunica — revelação é esperada', color: '#818cf8', icon: '💬' },
    { lesson: '3', text: 'Podemos avaliar revelações com critérios objetivos', color: '#6366f1', icon: '⚖️' },
    { lesson: '4', text: 'A Bíblia é única entre os textos sagrados', color: colors.goldAged, icon: '🔍' },
    { lesson: '5', text: 'Deus inspirou os pensamentos, não ditou palavras', color: colors.goldBright, icon: '✨' },
    { lesson: '6', text: 'O cânon foi reconhecido, não inventado', color: colors.hebrewPrimary, icon: '📜' },
    { lesson: '7', text: 'Os manuscritos foram copiados fielmente', color: colors.greekPrimary, icon: '🏛️' },
    { lesson: '8', text: 'As traduções preservam o essencial', color: colors.portPrimary, icon: '🔬' },
];

export default function Slide32_Encerramento() {
    return (
        <SlideWrapper variant="golden">
            <div className="flex flex-col items-center justify-center px-6 max-w-4xl mx-auto text-center">
                <WaxSeal number={8} size="md" delay={0.2} className="mb-4" />

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-3xl font-bold mb-6"
                    style={{ color: colors.textLight }}
                >
                    A CADEIA DE <span style={{ color: colors.goldBright }}>FIDELIDADE</span>
                </motion.h2>

                {/* Journey recap — todas as lições */}
                <div className="space-y-2 mb-6 w-full max-w-2xl">
                    {journey.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.25 }}
                            className="flex items-center gap-3 text-left"
                        >
                            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                                style={{
                                    background: `${step.color}20`,
                                    border: `1px solid ${step.color}60`
                                }}
                            >
                                <span className="text-xs">{step.icon}</span>
                            </div>
                            <div className="flex-1">
                                <span className="text-xs font-bold" style={{ color: step.color }}>
                                    Lição {step.lesson}:
                                </span>
                                <span className="text-sm ml-1" style={{ color: colors.textLight }}>
                                    {step.text}
                                </span>
                            </div>
                            <span className="text-xs" style={{ color: '#22c55e' }}>✓</span>
                        </motion.div>
                    ))}
                </div>

                {/* Próximo passo */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 }}
                    className="flex items-center gap-3 text-left w-full max-w-2xl mb-6 p-3 rounded-lg"
                    style={{
                        background: `${colors.goldAged}10`,
                        border: `1px dashed ${colors.goldAged}40`
                    }}
                >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                            background: `${colors.goldBright}20`,
                            border: `2px solid ${colors.goldBright}60`
                        }}
                    >
                        <span className="text-xs">📖</span>
                    </div>
                    <div className="flex-1">
                        <span className="text-xs font-bold" style={{ color: colors.goldBright }}>
                            Lição 9:
                        </span>
                        <span className="text-sm ml-1" style={{ color: colors.textLight }}>
                            Quem escreveu e por quê? — Autoria Bíblica
                        </span>
                    </div>
                    <span className="text-xs" style={{ color: colors.goldAged }}>→</span>
                </motion.div>

                {/* Citação final — nova, sem repetir a "janela" do Slide 20 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2 }}
                    className="mb-4"
                >
                    <ScribeWriting
                        text="«Das mãos de Deus ao coração de quem lê — cada elo dessa cadeia foi guardado com amor.»"
                        className="text-lg md:text-xl"
                    />
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
