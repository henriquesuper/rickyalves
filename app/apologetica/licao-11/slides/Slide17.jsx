'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ArtifactCard, colors } from './shared';

export function Slide17() {
    return (
        <ExcavationWrapper stratum="terracotta">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Protocol */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.3em] mb-4 text-center"
                    style={{ color: colors.textMuted }}
                >
                    Artefato 3 de 6
                </motion.p>

                <ArtifactCard
                    name="Prisma de Senaqueribe"
                    date="~689 a.C."
                    material="Argila (prisma hexagonal, 38cm)"
                    location="Museu Britânico, Londres"
                    discoveredBy="Austen Henry Layard, 1830 (Nínive)"
                    biblicalRef="2 Reis 18-19 · 2 Crônicas 32 · Isaías 36-37"
                    significance="Confirma o cerco de Jerusalém por Senaqueribe — mas NUNCA menciona ter conquistado a cidade."
                    status="confirmed"
                    imageSrc="/images/licao-11/sennacherib-prism.jpg"
                    delay={0.3}
                />
            </div>
        </ExcavationWrapper>
    );
}
