// Slide 07 - Grego Koiné
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, LanguageBadge, colors } from './shared';

const features = [
    { icon: '✦', text: 'Não era o grego de Platão — era o "inglês" do Império Romano' },
    { icon: '✦', text: 'Comerciantes, soldados, escravos e reis falavam' },
    { icon: '✦', text: 'Sistema de CASOS (terminações indicam função gramatical)' },
    { icon: '✦', text: 'Tempos verbais com nuances que o português não tem' },
    { icon: '✦', text: 'Vocabulário rico onde temos uma só palavra' },
];

export default function Slide07_GregoKoine() {
    return (
        <SlideWrapper variant="greek">
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                <LanguageBadge language="greek" delay={0.2} className="mb-4" />

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-5xl font-bold mb-2 text-center"
                    style={{ color: colors.greekPrimary }}
                >
                    GREGO KOINÉ
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg mb-8"
                    style={{ color: colors.textMedium }}
                >
                    A «língua comum» do Novo Testamento
                </motion.p>

                <PrismCard delay={0.5} variant="greek" className="w-full max-w-3xl">
                    <div className="space-y-3">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + i * 0.15 }}
                                className="flex items-center gap-3"
                            >
                                <span style={{ color: colors.greekPrimary }}>{f.icon}</span>
                                <span style={{ color: colors.textLight }}>{f.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </PrismCard>
            </div>
        </SlideWrapper>
    );
}
