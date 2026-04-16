'use client';
import { motion } from 'framer-motion';
import { LabWrapper, DangerCard, ComparisonPanel, colors } from './shared';

export function Slide39() {
    return (
        <LabWrapper stratum="warning-filter">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <DangerCard number={3} title="Espiritualização Excessiva" delay={0.2}
                    description="Encontrar significado 'espiritual' ou alegórico em detalhes que o autor nunca pretendeu."
                >
                    <ComparisonPanel
                        leftTitle="🎭 ALEGORIA CLÁSSICA"
                        leftContent="Bom Samaritano: o homem = Adão, Jerusalém = paraíso, Jericó = o mundo, ladrões = o diabo, samaritano = Cristo, jumento = corpo de Cristo, hospedaria = a Igreja, dois denários = os dois testamentos..."
                        rightTitle="◎ O QUE JESUS DISSE"
                        rightContent="Jesus contou essa parábola para responder: 'Quem é o meu próximo?' (Lucas 10:29). Resposta: quem precisa de ajuda, independentemente de fronteiras étnicas. É prático, não cósmico."
                        delay={0.5}
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-4 text-sm italic text-center"
                        style={{ color: colors.textMuted }}
                    >
                        Às vezes, uma estrada é só uma estrada.
                    </motion.p>
                </DangerCard>
            </div>
        </LabWrapper>
    );
}
