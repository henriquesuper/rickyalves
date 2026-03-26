'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ArtifactCard, colors } from './shared';

export function Slide21() {
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
                    Artefato 5 de 6
                </motion.p>

                <ArtifactCard
                    name="Túnel de Ezequias"
                    date="~701 a.C."
                    material="Rocha escavada (533 metros)"
                    location="Jerusalém (visitável hoje)"
                    discoveredBy="Inscrição de Siloé encontrada em 1880"
                    biblicalRef="2 Reis 20:20 · 2 Crônicas 32:2-4"
                    significance="Confirmação direta e visitável. Você pode caminhar dentro dele hoje."
                    status="confirmed"
                    imageSrc="/images/licao-11/hezekiah-tunnel.jpg"
                    delay={0.3}
                />
            </div>
        </ExcavationWrapper>
    );
}
