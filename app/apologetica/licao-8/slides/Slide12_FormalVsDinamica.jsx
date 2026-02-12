// Slide 12 - Equivalência Formal vs Dinâmica
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, colors } from './shared';

export default function Slide12_FormalVsDinamica() {
    return (
        <SlideWrapper variant="neutral">
            <div className="flex flex-col items-center justify-center px-8 max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold mb-8 text-center"
                    style={{ color: colors.textLight }}
                >
                    Equivalência Formal vs. Dinâmica
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6 w-full">
                    {/* Card Formal */}
                    <PrismCard delay={0.3} variant="greek" highlight>
                        <h3 className="text-xl font-bold mb-1" style={{ color: colors.greekPrimary }}>
                            EQUIVALÊNCIA FORMAL
                        </h3>
                        <p className="text-sm mb-4" style={{ color: colors.textMedium }}>«Tradução literal»</p>
                        <p className="text-sm mb-3" style={{ color: colors.textLight }}>
                            Tenta manter a estrutura e vocabulário do original ao máximo.
                        </p>
                        <div className="space-y-2 mb-3">
                            {['Preserva ambiguidades (teologicamente importantes)', 'Leitor interpreta por si mesmo', 'Transparente sobre o que o texto diz'].map((t, i) => (
                                <p key={i} className="text-xs flex items-start gap-1" style={{ color: colors.textLight }}>
                                    <span style={{ color: '#22c55e' }}>✓</span> {t}
                                </p>
                            ))}
                        </div>
                        <div className="space-y-2 mb-3">
                            {['Pode soar estranho ou arcaico', 'Às vezes difícil de entender', 'Reproduz expressões sem sentido em PT'].map((t, i) => (
                                <p key={i} className="text-xs flex items-start gap-1" style={{ color: colors.textMedium }}>
                                    <span style={{ color: colors.alertTerracota }}>✗</span> {t}
                                </p>
                            ))}
                        </div>
                        <p className="text-xs font-bold" style={{ color: colors.greekPrimary }}>
                            Ex: ARC, ARA, partes da NAA
                        </p>
                    </PrismCard>

                    {/* Card Dinâmica */}
                    <PrismCard delay={0.5} variant="portuguese" highlight>
                        <h3 className="text-xl font-bold mb-1" style={{ color: colors.portPrimary }}>
                            EQUIVALÊNCIA DINÂMICA
                        </h3>
                        <p className="text-sm mb-4" style={{ color: colors.textMedium }}>«Tradução funcional»</p>
                        <p className="text-sm mb-3" style={{ color: colors.textLight }}>
                            Tenta reproduzir o EFEITO que o texto teve nos leitores originais.
                        </p>
                        <div className="space-y-2 mb-3">
                            {['Leitura fluida e acessível', 'Captura intenção comunicativa', 'Evita construções estranhas'].map((t, i) => (
                                <p key={i} className="text-xs flex items-start gap-1" style={{ color: colors.textLight }}>
                                    <span style={{ color: '#22c55e' }}>✓</span> {t}
                                </p>
                            ))}
                        </div>
                        <div className="space-y-2 mb-3">
                            {['Mais interpretação pelo tradutor', 'Pode resolver ambiguidades indevidamente', 'Pode apagar nuances do original'].map((t, i) => (
                                <p key={i} className="text-xs flex items-start gap-1" style={{ color: colors.textMedium }}>
                                    <span style={{ color: colors.alertTerracota }}>✗</span> {t}
                                </p>
                            ))}
                        </div>
                        <p className="text-xs font-bold" style={{ color: colors.portPrimary }}>
                            Ex: NTLH, NVT
                        </p>
                    </PrismCard>
                </div>
            </div>
        </SlideWrapper>
    );
}
