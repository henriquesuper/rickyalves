'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ArtifactCard, colors } from './shared';

export function Slide32() {
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
                    Descoberta 3 de 5
                </motion.p>

                <ArtifactCard
                    name="Ossuário de Caifás"
                    date="Século I d.C."
                    material="Calcário (ossuário decorado)"
                    location="Museu de Israel, Jerusalém"
                    discoveredBy="Descoberto acidentalmente, 1990 (Parque da Paz)"
                    biblicalRef="Mateus 26:57 · João 11:49 · João 18:13-14"
                    significance="O homem que presidiu o julgamento de Jesus. Seus ossos foram encontrados."
                    status="confirmed"
                    imageSrc="/images/licao-11/caiaphas-ossuary.jpg"
                    delay={0.3}
                />
            </div>
        </ExcavationWrapper>
    );
}
