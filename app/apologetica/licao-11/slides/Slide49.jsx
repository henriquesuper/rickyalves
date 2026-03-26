'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ComparisonTable, colors } from './shared';

export function Slide49() {
    return (
        <ExcavationWrapper stratum="bedrock">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight }}
                >
                    15+ EVIDÊNCIAS CONVERGENTES
                </motion.h2>

                {/* Comparison Table */}
                <ComparisonTable
                    columns={["Categoria", "Quantidade", "Status"]}
                    rows={[
                        ["Arqueologia AT", "6 artefatos", "✅ Confirmados"],
                        ["Arqueologia NT", "5 descobertas", "✅ Confirmados"],
                        ["Fontes Externas", "4 testemunhos independentes", "✅ Confirmados"],
                        ["Total", "15+ evidências convergentes", "Padrão cumulativo"],
                    ]}
                    delay={0.4}
                />

                {/* Insight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="mt-6 p-4 rounded-xl"
                    style={{ background: `${colors.excavationAmber}12`, border: `1px solid ${colors.excavationAmber}30` }}
                >
                    <p className="text-sm" style={{ color: colors.excavationAmber }}>
                        Nenhuma individualmente &ldquo;prova&rdquo;. Juntas, formam um padrão impossível de ignorar.
                    </p>
                </motion.div>
            </div>
        </ExcavationWrapper>
    );
}
