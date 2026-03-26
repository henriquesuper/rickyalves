'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ComparisonTable, colors } from './shared';

export function Slide47() {
    return (
        <ExcavationWrapper stratum="papyrus">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-4"
                    style={{ color: colors.textLight }}
                >
                    NINGUÉM NEGA OS FATOS
                </motion.h2>

                {/* Key insight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-4 rounded-xl mb-6"
                    style={{ background: `${colors.excavationAmber}12`, border: `1px solid ${colors.excavationAmber}30` }}
                >
                    <p className="text-sm" style={{ color: colors.excavationAmber }}>
                        O Talmude não nega os milagres — atribui a feitiçaria. Paralelo com Mateus 12:24: fariseus não dizem &ldquo;não aconteceu&rdquo;, dizem &ldquo;vem do diabo&rdquo;.
                    </p>
                </motion.div>

                {/* Comparison Table */}
                <ComparisonTable
                    columns={["Fonte", "Data", "Postura", "Confirma"]}
                    rows={[
                        ["Josefo", "93 d.C.", "Neutra", "Jesus, Pilatos, crucificação, movimento"],
                        ["Tácito", "116 d.C.", "Hostil", "Cristo, Pilatos, Tibério, Judeia"],
                        ["Plínio", "112 d.C.", "Hostil", "Culto cristão, crescimento rápido"],
                        ["Talmude", "Séc. I-V", "Hostil", "Jesus, atos extraordinários, execução"],
                    ]}
                    delay={0.6}
                />

                {/* Bottom */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="mt-6 text-sm font-bold text-center"
                    style={{ color: colors.fieldGreen }}
                >
                    A disputa é sobre a interpretação, não sobre os fatos.
                </motion.p>
            </div>
        </ExcavationWrapper>
    );
}
