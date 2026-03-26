'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ComparisonTable, colors } from './shared';

export function Slide38() {
    return (
        <ExcavationWrapper stratum="limestone">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight }}
                >
                    5 DESCOBERTAS — NOVO TESTAMENTO
                </motion.h2>

                {/* Summary table */}
                <ComparisonTable
                    columns={["Descoberta", "Data", "Confirma", "Onde Está"]}
                    rows={[
                        ["Pedra de Pilatos", "26-36 d.C.", "Pilatos como prefeito", "Jerusalém"],
                        ["Piscina de Betesda", "Séc. I", "5 pórticos de João 5", "Jerusalém"],
                        ["Ossuário de Caifás", "Séc. I", "Sumo sacerdote Caifás", "Jerusalém"],
                        ["Inscrição de Erasto", "Séc. I", "Erasto de Romanos 16", "Corinto"],
                        ["Lucas (Atos)", "Séc. I", "5 títulos corretos", "Múltiplos locais"],
                    ]}
                    delay={0.4}
                />

                {/* Transition text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-8 text-center"
                >
                    <p className="text-base italic" style={{ color: colors.excavationAmber }}>
                        Mais fundo ainda. As pedras já falaram. Agora, a tinta.
                    </p>
                </motion.div>
            </div>
        </ExcavationWrapper>
    );
}
