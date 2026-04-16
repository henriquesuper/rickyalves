'use client';
import { motion } from 'framer-motion';
import { LabWrapper, ComparisonPanel, TherapyParallel, colors } from './shared';

export function Slide09() {
    return (
        <LabWrapper stratum="first-lens">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Duas Dimensões
                </motion.h2>

                <ComparisonPanel
                    leftTitle="⚗️ CIÊNCIA"
                    leftContent="Princípios objetivos, verificáveis e consistentes. Não é achismo. Existem regras que podem ser ensinadas, aplicadas e testadas."
                    rightTitle="🎨 ARTE"
                    rightContent="Aplicar esses princípios requer sensibilidade ao texto, ao gênero, ao contexto, ao idioma. Dois intérpretes competentes podem discordar — mas ambos devem mostrar o trabalho."
                    delay={0.4}
                />

                <TherapyParallel
                    therapeutic="Você tem protocolos diagnósticos (ciência) e intuição clínica desenvolvida pela experiência (arte). Ambos são necessários."
                    hermeneutic="Hermenêutica tem regras claras (ciência) e exige sensibilidade ao texto (arte). Sem regras, é achismo. Sem sensibilidade, é robótica."
                    delay={0.8}
                />
            </div>
        </LabWrapper>
    );
}
