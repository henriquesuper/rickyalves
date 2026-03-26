'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ArtifactCard, colors } from './shared';

export function Slide19() {
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
                    Artefato 4 de 6
                </motion.p>

                <ArtifactCard
                    name="Cilindro de Ciro"
                    date="539 a.C."
                    material="Argila (cilindro)"
                    location="Museu Britânico, Londres"
                    discoveredBy="Hormuzd Rassam, 1879 (Babilônia)"
                    biblicalRef="Esdras 1:1-4 · Isaías 44:28-45:1"
                    significance="Confirma a política de retorno descrita em Esdras. O decreto bíblico não foi inventado."
                    status="confirmed"
                    imageSrc="/images/licao-11/cyrus-cylinder.jpg"
                    delay={0.3}
                />
            </div>
        </ExcavationWrapper>
    );
}
