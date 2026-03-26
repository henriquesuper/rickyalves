'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ArtifactCard, colors } from './shared';

export function Slide28() {
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
                    Descoberta 1 de 5
                </motion.p>

                <ArtifactCard
                    name="Pedra de Pilatos (Inscrição de Cesareia)"
                    date="26-36 d.C."
                    material="Calcário (82×65 cm)"
                    location="Museu de Israel, Jerusalém"
                    discoveredBy="Antonio Frova, 1961 (Cesareia Marítima)"
                    biblicalRef="Pilatos como prefeito da Judeia"
                    significance="Até 1961, nenhum artefato comprovava a existência de Pôncio Pilatos. Esta pedra é evidência direta e contemporânea."
                    status="confirmed"
                    imageSrc="/images/licao-11/pilate-stone.jpg"
                    delay={0.3}
                />
            </div>
        </ExcavationWrapper>
    );
}
