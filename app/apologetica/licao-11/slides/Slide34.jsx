'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ArtifactCard, colors } from './shared';

export function Slide34() {
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
                    Descoberta 4 de 5
                </motion.p>

                <ArtifactCard
                    name="Inscrição de Erasto"
                    date="Século I d.C."
                    material="Pavimento de pedra"
                    location="Corinto, Grécia"
                    discoveredBy="Escavações em 1929"
                    biblicalRef="Romanos 16:23 — 'Erasto, o tesoureiro da cidade'"
                    significance="Paulo menciona Erasto como oficial de Corinto. Em Corinto, acharam uma inscrição de Erasto, oficial da cidade."
                    status="debated"
                    imageSrc="/images/licao-11/erastus-inscription.jpg"
                    delay={0.3}
                />
            </div>
        </ExcavationWrapper>
    );
}
