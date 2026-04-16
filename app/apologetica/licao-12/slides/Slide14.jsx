'use client';
import { motion } from 'framer-motion';
import { LabWrapper, LensCard, colors } from './shared';

export function Slide14() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <LensCard lensNumber={1} title="Contexto, Contexto, Contexto" delay={0.2} accentColor={colors.lensTeal}>
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        Este é o princípio-mãe. Quase todo erro interpretativo é, no fundo, um erro de contexto.
                    </p>

                    <div className="space-y-3">
                        {[
                            { icon: '📄', label: 'Contexto Literário', desc: 'O que vem antes e depois? Qual é o argumento do autor?' },
                            { icon: '🏛️', label: 'Contexto Histórico-Cultural', desc: 'Quem escreveu? Pra quem? Quando? O que estava acontecendo?' },
                            { icon: '📚', label: 'Contexto Canônico', desc: 'Onde essa passagem se encaixa na Bíblia como um todo?' },
                        ].map((ctx, i) => (
                            <motion.div
                                key={ctx.label}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + i * 0.2 }}
                                className="flex items-start gap-3 p-3 rounded-lg"
                                style={{ background: `${colors.lensTeal}08` }}
                            >
                                <span className="text-xl">{ctx.icon}</span>
                                <div>
                                    <p className="text-sm font-bold" style={{ color: colors.lensTeal }}>{ctx.label}</p>
                                    <p className="text-xs" style={{ color: colors.textMuted }}>{ctx.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </LensCard>
            </div>
        </LabWrapper>
    );
}
