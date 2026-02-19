'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, EvidenceCard, colors } from './shared';

export default function Slide11_LogicaTestemunho() {
    return (
        <SlideWrapper variant="kraft">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="A Lógica do Testemunho"
                    subtitle="Por que a autoria importa"
                    icon="⚖️"
                    protocol="BLOCO 3 — AUTORIA"
                    delay={0.2}
                />

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                    {[
                        { icon: '👁️', label: 'Testemunha Ocular', desc: 'Proximidade máxima. Viu, ouviu, esteve presente.', order: 1, color: colors.mossGreen },
                        { icon: '🔍', label: 'Investigador', desc: 'Entrevistou testemunhas. Verificou fontes.', order: 2, color: colors.amber },
                        { icon: '🗣️', label: 'Terceira Mão', desc: 'Ouviu de alguém. Distância do evento.', order: 3, color: colors.wineRed },
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + i * 0.2 }}
                            className="p-5 rounded-xl border text-center"
                            style={{
                                background: `${colors.bgSurface}CC`,
                                borderColor: `${item.color}40`,
                            }}
                        >
                            <span className="text-3xl block mb-2">{item.icon}</span>
                            <h3 className="font-bold text-lg mb-1" style={{ color: colors.warmWhite }}>{item.label}</h3>
                            <p className="text-sm" style={{ color: colors.textMedium }}>{item.desc}</p>
                            <div className="mt-3 text-xs font-bold uppercase tracking-wider" style={{ color: item.color }}>
                                Peso {item.order}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="text-center p-4 rounded-xl"
                    style={{
                        background: `${colors.bgSurface}CC`,
                        border: `1px solid ${colors.amber}30`,
                    }}
                >
                    <p className="text-lg" style={{ color: colors.warmWhite }}>
                        <span style={{ color: colors.amber }}>Proximidade com os eventos</span> determina peso do testemunho.
                    </p>
                    <p className="text-sm mt-1 italic" style={{ color: colors.textMuted }}>
                        Não é questão de religião — é critério de investigação.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
