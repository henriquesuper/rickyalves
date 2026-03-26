'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ArtifactCard, colors } from './shared';

export function Slide23() {
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
                    Artefato 6 de 6
                </motion.p>

                <ArtifactCard
                    name="Óstracos de Laquis"
                    date="588-586 a.C."
                    material="Cerâmica (21 fragmentos com tinta)"
                    location="Museu Britânico / Museu Rockefeller"
                    discoveredBy="J.L. Starkey, 1935-1938"
                    biblicalRef="Jeremias 34:7"
                    significance="Vozes humanas reais nos últimos momentos antes da queda de Jerusalém."
                    status="confirmed"
                    imageSrc="/images/licao-11/lachish-ostraca.jpg"
                    delay={0.3}
                />
            </div>
        </ExcavationWrapper>
    );
}
