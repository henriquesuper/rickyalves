'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ArtifactCard, colors } from './shared';

export function Slide13() {
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
                    Artefato 1 de 6
                </motion.p>

                <ArtifactCard
                    name="Estela de Merneptá"
                    date="~1208 a.C."
                    material="Granito negro (3+ metros)"
                    location="Museu Egípcio, Cairo"
                    discoveredBy="Flinders Petrie, 1896"
                    biblicalRef="Referência mais antiga a Israel fora da Bíblia"
                    significance="Confirma que Israel existia como entidade reconhecível em Canaã no final do século XIII a.C."
                    status="confirmed"
                    imageSrc="/images/licao-11/merneptah-stele.jpg"
                    delay={0.3}
                />
            </div>
        </ExcavationWrapper>
    );
}
