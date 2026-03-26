'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ComparisonTable, colors } from './shared';

export function Slide25() {
    return (
        <ExcavationWrapper stratum="terracotta">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    6 ARTEFATOS — ANTIGO TESTAMENTO
                </motion.h2>

                <ComparisonTable
                    columns={['Artefato', 'Data', 'Confirma', 'Onde Está']}
                    rows={[
                        ['Estela de Merneptá', '1208 a.C.', 'Israel como povo', 'Cairo'],
                        ['Estela de Tel Dan', '841 a.C.', 'Casa de Davi', 'Jerusalém'],
                        ['Prisma de Senaqueribe', '689 a.C.', 'Cerco de Jerusalém', 'Londres'],
                        ['Cilindro de Ciro', '539 a.C.', 'Decreto de retorno', 'Londres'],
                        ['Túnel de Ezequias', '701 a.C.', 'Preparação p/ cerco', 'Jerusalém'],
                        ['Óstracos de Laquis', '586 a.C.', 'Queda de Judá', 'Londres'],
                    ]}
                    delay={0.4}
                />
            </div>
        </ExcavationWrapper>
    );
}
