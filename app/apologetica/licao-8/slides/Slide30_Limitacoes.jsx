// Slide 30 - Limitações e Honestidade
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, colors } from './shared';

const limitations = [
    'Perda de jogos de palavras, trocadilhos, sonoridades',
    'Simplificação de tempos verbais complexos (grego especialmente)',
    'Resolução forçada de ambiguidades teológicas',
    'Imposição de categorias culturais modernas',
    'Acúmulo de camadas interpretativas ao longo dos séculos',
];

const honesty = [
    'Nenhuma tradução é perfeita — e nunca será',
    'Mas as melhores são extremamente CONFIÁVEIS',
    'O significado central CHEGA até você',
    'Duas traduções juntas cobrem 95%+ das nuances',
    'E os 5% que faltam NÃO mudam a mensagem central de salvação',
];

export default function Slide30_Limitacoes() {
    return (
        <SlideWrapper variant="neutral">
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold mb-8 text-center"
                    style={{ color: colors.textLight }}
                >
                    LIMITAÇÕES E{' '}
                    <span style={{ color: colors.goldBright }}>HONESTIDADE</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
                    <PrismCard delay={0.3} variant="alert">
                        <h3 className="text-sm uppercase tracking-wider font-bold mb-3" style={{ color: colors.alertTerracota }}>
                            ⚠️ Limitações reais:
                        </h3>
                        <div className="space-y-2">
                            {limitations.map((l, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="text-xs flex items-start gap-2"
                                    style={{ color: colors.textLight }}
                                >
                                    <span style={{ color: colors.alertTerracota }}>•</span> {l}
                                </motion.p>
                            ))}
                        </div>
                    </PrismCard>

                    <PrismCard delay={0.5} variant="portuguese">
                        <h3 className="text-sm uppercase tracking-wider font-bold mb-3" style={{ color: colors.portPrimary }}>
                            ✦ Honestidade necessária:
                        </h3>
                        <div className="space-y-2">
                            {honesty.map((h, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + i * 0.1 }}
                                    className="text-xs flex items-start gap-2"
                                    style={{ color: colors.textLight }}
                                >
                                    <span style={{ color: colors.portPrimary }}>✓</span> {h}
                                </motion.p>
                            ))}
                        </div>
                    </PrismCard>
                </div>
            </div>
        </SlideWrapper>
    );
}
