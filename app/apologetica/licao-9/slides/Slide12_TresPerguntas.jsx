'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, colors } from './shared';

export default function Slide12_TresPerguntas() {
    const perguntas = [
        { num: '①', q: 'QUEM escreveu?', desc: 'Identidade do autor — nome, posição, comunidade', icon: '🪪', color: colors.slateBlue },
        { num: '②', q: 'QUANDO foi escrito?', desc: 'Distância temporal entre o evento e o registro', icon: '📅', color: colors.amber },
        { num: '③', q: 'O autor TINHA ACESSO DIRETO?', desc: 'Testemunha ocular, investigador, ou ouviu dizer?', icon: '👁️', color: colors.mossGreen },
    ];

    return (
        <SlideWrapper variant="kraft">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="As Três Perguntas"
                    subtitle="Três dimensões distintas — muitas vezes confundidas"
                    icon="❓"
                    delay={0.2}
                />

                <div className="space-y-4 mb-8">
                    {perguntas.map((p, i) => (
                        <motion.div
                            key={p.num}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.2 }}
                            className="flex items-center gap-4 p-5 rounded-xl border-l-4"
                            style={{
                                background: `${colors.bgSurface}CC`,
                                borderLeftColor: p.color,
                            }}
                        >
                            <span className="text-3xl">{p.icon}</span>
                            <div className="flex-1">
                                <h3 className="font-bold text-xl" style={{ color: colors.warmWhite }}>
                                    <span style={{ color: p.color }}>{p.num}</span> {p.q}
                                </h3>
                                <p className="text-sm mt-1" style={{ color: colors.textMedium }}>
                                    {p.desc}
                                </p>
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
                    As respostas podem ser diferentes para cada uma — e têm implicações diferentes.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
