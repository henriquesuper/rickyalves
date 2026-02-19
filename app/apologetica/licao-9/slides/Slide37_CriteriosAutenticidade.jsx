'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, QuizResponseBadge, colors } from './shared';

export default function Slide37_CriteriosAutenticidade() {
    const criterios = [
        { num: '①', nome: 'Antiguidade', desc: 'Fontes próximas do evento', icon: '📅', color: colors.slateBlue },
        { num: '②', nome: 'Universalidade', desc: 'Circulação ampla e reconhecimento das comunidades', icon: '🌍', color: colors.amber },
        { num: '③', nome: 'Apostolicidade', desc: 'Conexão direta ou indireta com testemunhas dos eventos', icon: '🤝', color: colors.mossGreen },
        { num: '④', nome: 'Coerência', desc: 'Consistência com a mensagem central do corpus', icon: '🔗', color: colors.warmWhite },
    ];

    return (
        <SlideWrapper variant="dark">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="Critérios de Canonização"
                    subtitle="Como a comunidade primitiva avaliou"
                    icon="📏"
                    delay={0.2}
                />

                <div className="flex justify-end mb-4">
                    <QuizResponseBadge questionNumber={4} delay={0.3} />
                </div>

                <div className="space-y-3 mb-6">
                    {criterios.map((c, i) => (
                        <motion.div
                            key={c.num}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.15 }}
                            className="flex items-center gap-4 p-4 rounded-xl border-l-4"
                            style={{ background: `${colors.bgSurface}CC`, borderLeftColor: c.color }}
                        >
                            <span className="text-2xl">{c.icon}</span>
                            <div>
                                <h3 className="font-bold text-lg" style={{ color: c.color }}>
                                    <span className="mr-2">{c.num}</span>{c.nome}
                                </h3>
                                <p className="text-sm" style={{ color: colors.textMedium }}>{c.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 1.2 }}
                    className="text-center text-sm italic"
                    style={{ color: colors.textMuted }}
                >
                    Compare: &ldquo;Confio em uma informação sem verificar a fonte?&rdquo; — Pergunta 4 do quiz.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
