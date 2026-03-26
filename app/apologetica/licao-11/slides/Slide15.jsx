'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ArtifactCard, colors } from './shared';

export function Slide15() {
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
                    Artefato 2 de 6
                </motion.p>

                <ArtifactCard
                    name="Estela de Tel Dan"
                    date="~841 a.C."
                    material="Basalto (fragmentos)"
                    location="Museu de Israel, Jerusalém"
                    discoveredBy="Gila Cook / Avraham Biran, 1993-1994"
                    biblicalRef="'Casa de Davi' — confirma a dinastia davídica"
                    significance="Destruiu o argumento de que Davi era uma figura lendária. Um inimigo de Israel usa 'Casa de Davi' como título político."
                    status="confirmed"
                    imageSrc="/images/licao-11/tel-dan-stele.jpg"
                    delay={0.3}
                />
            </div>
        </ExcavationWrapper>
    );
}
