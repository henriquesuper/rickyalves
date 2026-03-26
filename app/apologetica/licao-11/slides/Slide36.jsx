'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ComparisonTable, colors } from './shared';

export function Slide36() {
    return (
        <ExcavationWrapper stratum="limestone">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-2 text-center"
                    style={{ color: colors.textLight }}
                >
                    LUCAS ACERTA TODOS OS TÍTULOS
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm text-center mb-6"
                    style={{ color: colors.textMedium }}
                >
                    Atos dos Apóstolos usa títulos administrativos específicos que variam de cidade para cidade
                </motion.p>

                {/* Table */}
                <ComparisonTable
                    columns={["Cidade", "Título usado por Lucas", "Significa", "Referência"]}
                    rows={[
                        ["Chipre", "Procônsul (anthypatos)", "Província senatorial", "Atos 13:7"],
                        ["Filipos", "Pretores (strategoi)", "Colônia romana", "Atos 16:20"],
                        ["Tessalônica", "Politarcas", "Título local único", "Atos 17:6"],
                        ["Éfeso", "Grammateus (secretário)", "Autoridade municipal", "Atos 19:35"],
                        ["Malta", "Protos (primeiro)", "Título oficial local", "Atos 28:7"],
                    ]}
                    delay={0.5}
                />
            </div>
        </ExcavationWrapper>
    );
}
