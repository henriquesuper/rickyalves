'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, colors } from './shared';

export function Slide18() {
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
                    O SILÊNCIO ENSURDECEDOR
                </motion.h2>

                {/* Quote box */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-5 rounded-lg mb-6"
                    style={{
                        background: colors.bgDeep,
                        borderLeft: `3px solid ${colors.excavationAmber}`,
                    }}
                >
                    <p className="text-base italic leading-relaxed" style={{ color: colors.textLight }}>
                        "Quanto a Ezequias, o judeu... eu o tranquei como um pássaro engaiolado em sua cidade real, Jerusalém."
                    </p>
                </motion.div>

                {/* Two-column comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="p-4 rounded-lg"
                        style={{ background: colors.bgSurface, border: `1px solid ${colors.excavationAmber}15` }}
                    >
                        <p className="text-sm font-bold mb-2" style={{ color: colors.textLight }}>
                            O que Senaqueribe DIZ
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            46 cidades capturadas, saques detalhados, tributo cobrado
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="p-4 rounded-lg"
                        style={{ background: colors.bgSurface, border: `1px solid ${colors.fieldGreen}30` }}
                    >
                        <p className="text-sm font-bold mb-2" style={{ color: colors.textLight }}>
                            O que Senaqueribe NÃO diz
                        </p>
                        <p className="text-sm font-bold" style={{ color: colors.fieldGreen }}>
                            Nunca afirma ter conquistado Jerusalém
                        </p>
                    </motion.div>
                </div>

                {/* Insight */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="p-4 rounded-lg mb-4 text-center"
                    style={{
                        background: `${colors.excavationAmber}10`,
                        border: `1px solid ${colors.excavationAmber}30`,
                    }}
                >
                    <p className="text-sm italic" style={{ color: colors.excavationAmber }}>
                        Para um rei assírio que se gabava de cada vitória, essa omissão é ensurdecedora.
                    </p>
                </motion.div>

                {/* Small note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1.2 }}
                    className="text-xs text-center"
                    style={{ color: colors.textMuted }}
                >
                    ⚠️ Diferenças nos valores do tributo (300 vs 800 talentos) — normal em registros antigos.
                </motion.p>
            </div>
        </ExcavationWrapper>
    );
}
