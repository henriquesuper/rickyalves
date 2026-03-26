'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ArtifactCard, colors } from './shared';

export function Slide30() {
    return (
        <ExcavationWrapper stratum="limestone">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Protocol */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.3em] mb-4 text-center"
                    style={{ color: colors.textMuted }}
                >
                    Descoberta 2 de 5
                </motion.p>

                <ArtifactCard
                    name="Piscina de Betesda"
                    date="Século I d.C."
                    material="Arquitetura (duas piscinas + 5 pórticos)"
                    location="Jerusalém (próximo à Igreja de Santa Ana)"
                    discoveredBy="Conrad Schick, 1888 / Escavações 1964"
                    biblicalRef="João 5:2 — 'uma piscina chamada Betesda, que tem cinco pórticos'"
                    significance="O que era considerado 'simbólico' era literal. O cético foi corrigido pela arqueologia."
                    status="confirmed"
                    imageSrc="/images/licao-11/bethesda-pool.jpg"
                    delay={0.3}
                />
            </div>
        </ExcavationWrapper>
    );
}
