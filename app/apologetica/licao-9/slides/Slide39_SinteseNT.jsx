'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, colors } from './shared';

export default function Slide39_SinteseNT() {
    return (
        <SlideWrapper variant="cream">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="Síntese NT"
                    icon="📋"
                    delay={0.2}
                />

                <DossierCard delay={0.4}>
                    <div className="py-4 space-y-4">
                        {[
                            { icon: '📚', text: 'Quatro evangelhos: convergência com divergência — o padrão mais forte', status: 'VERIFICADO' },
                            { icon: '🔬', text: 'Lucas: historiador com método declarado e confirmado pela arqueologia', status: 'VERIFICADO' },
                            { icon: '✍️', text: 'Paulo: sete cartas indisputadas — o autor mais datável da Antiguidade', status: 'VERIFICADO' },
                            { icon: '❓', text: 'Hebreus: autor desconhecido — preservação baseada em avaliação, não assinatura', status: 'HONESTO' },
                            { icon: '⚔️', text: 'Cartas debatidas: secretários e coautoria explicam variações de estilo', status: 'EM DEBATE' },
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
                                        color: item.status === 'VERIFICADO' ? colors.mossGreen
                                            : item.status === 'HONESTO' ? colors.slateBlue
                                                : colors.stampDebate,
                                        background: item.status === 'VERIFICADO' ? `${colors.mossGreen}15`
                                            : item.status === 'HONESTO' ? `${colors.slateBlue}15`
                                                : `${colors.stampDebate}15`,
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
