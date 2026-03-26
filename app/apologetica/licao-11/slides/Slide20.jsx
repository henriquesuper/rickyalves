'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, colors } from './shared';

export function Slide20() {
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
                    O DECRETO DE RETORNO
                </motion.h2>

                {/* Two-column comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-4 rounded-lg"
                        style={{ background: colors.bgSurface, border: `1px solid ${colors.excavationAmber}15` }}
                    >
                        <p className="text-sm font-bold mb-2 flex items-center gap-2" style={{ color: colors.textLight }}>
                            <span>📜</span> Cilindro de Ciro
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            Permitiu que povos deportados retornassem e reconstruíssem seus templos
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="p-4 rounded-lg"
                        style={{ background: colors.bgSurface, border: `1px solid ${colors.excavationAmber}15` }}
                    >
                        <p className="text-sm font-bold mb-2 flex items-center gap-2" style={{ color: colors.textLight }}>
                            <span>📖</span> Esdras 1:1-4
                        </p>
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            Ciro permite que judeus retornem a Jerusalém e reconstruam o Templo
                        </p>
                    </motion.div>
                </div>

                {/* Connection */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="p-4 rounded-lg mb-4 text-center"
                    style={{
                        background: `${colors.excavationAmber}10`,
                        border: `1px solid ${colors.excavationAmber}30`,
                    }}
                >
                    <p className="text-sm italic" style={{ color: colors.excavationAmber }}>
                        Isaías 44:28 chama Ciro pelo nome — um texto que a tradição data de 150 anos antes.
                    </p>
                </motion.div>

                {/* Honest note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 1.0 }}
                    className="text-sm text-center"
                    style={{ color: colors.textMuted }}
                >
                    ⚠️ Céticos argumentam que Isaías foi escrito após o fato. O debate é legítimo.
                </motion.p>
            </div>
        </ExcavationWrapper>
    );
}
