'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, colors } from './shared';

export default function Slide38_SinteseAT() {
    return (
        <SlideWrapper variant="kraft">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="Síntese AT"
                    icon="📋"
                    protocol="BLOCO 7 — SÍNTESE"
                    delay={0.2}
                />

                <DossierCard delay={0.4}>
                    <div className="py-4 space-y-4">
                        {[
                            { icon: '📜', text: 'Autoria mosaica: tradição forte, com adições editoriais reconhecidas', status: 'VERIFICADO' },
                            { icon: '⚔️', text: 'Isaías: premissas sobre profecia determinam a conclusão', status: 'EM DEBATE' },
                            { icon: '📖', text: 'Jó: possivelmente o mais antigo — enfrenta sofrimento sem respostas fáceis', status: 'EM DEBATE' },
                            { icon: '📅', text: 'Daniel: debate paralelo ao de Isaías', status: 'EM DEBATE' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + i * 0.15 }}
                                className="flex items-center gap-3 p-3 rounded-lg"
                                style={{ background: `${colors.bgSurface}40` }}
                            >
                                <span className="text-xl">{item.icon}</span>
                                <p className="flex-1 text-sm" style={{ color: colors.textLight }}>{item.text}</p>
                                <span className="text-xs font-bold px-2 py-1 rounded"
                                    style={{
                                        color: item.status === 'VERIFICADO' ? colors.mossGreen : colors.stampDebate,
                                        background: item.status === 'VERIFICADO' ? `${colors.mossGreen}15` : `${colors.stampDebate}15`,
                                    }}>
                                    {item.status}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </DossierCard>
            </div>
        </SlideWrapper>
    );
}
