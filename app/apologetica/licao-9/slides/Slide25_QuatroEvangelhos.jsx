'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, CaseHeader, StampBadge, colors } from './shared';

const evangelhos = [
    { nome: 'Mateus', perfil: 'Cobrador de impostos → apóstolo', periodo: '~60–70 d.C.', destaque: 'Audiência judaica · cita AT extensivamente', icon: '📖', stamp: 'verified' },
    { nome: 'Marcos', perfil: 'Companheiro de Pedro', periodo: '~55–65 d.C.', destaque: 'Mais antigo · narrativa rápida e vívida', icon: '📖', stamp: 'verified' },
    { nome: 'Lucas', perfil: 'Médico · companheiro de Paulo', periodo: '~60–70 d.C.', destaque: '★ Historiador com método · caso especial', icon: '🔬', stamp: 'verified' },
    { nome: 'João', perfil: 'Apóstolo · "discípulo amado"', periodo: '~85–95 d.C.', destaque: 'Teológico · testemunha ocular declarada', icon: '📖', stamp: 'verified' },
];

export default function Slide25_QuatroEvangelhos() {
    return (
        <SlideWrapper variant="cream">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="Os Quatro Evangelhos"
                    subtitle="Quatro perspectivas, uma história"
                    icon="📚"
                    delay={0.2}
                />

                <div className="grid md:grid-cols-2 gap-4">
                    {evangelhos.map((e, i) => (
                        <motion.div
                            key={e.nome}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.15 }}
                            className="p-4 rounded-xl border"
                            style={{
                                background: `${colors.bgSurface}CC`,
                                borderColor: e.nome === 'Lucas' ? `${colors.mossGreen}50` : `${colors.amber}25`,
                                boxShadow: e.nome === 'Lucas' ? `0 0 15px ${colors.mossGreen}15` : 'none',
                            }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">{e.icon}</span>
                                    <h3 className="font-bold text-lg" style={{ color: colors.warmWhite }}>{e.nome}</h3>
                                </div>
                                <StampBadge type={e.stamp} size="sm" delay={0.5 + i * 0.1} />
                            </div>
                            <p className="text-sm mb-1" style={{ color: colors.amber }}>{e.perfil}</p>
                            <p className="text-xs mb-2" style={{ color: colors.textMuted }}>{e.periodo}</p>
                            <p className="text-sm" style={{ color: e.nome === 'Lucas' ? colors.mossGreen : colors.textMedium }}>
                                {e.destaque}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SlideWrapper>
    );
}
