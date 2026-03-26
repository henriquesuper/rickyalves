'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, colors } from './shared';

export function Slide14() {
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
                    O QUE A ESTELA DIZ
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
                    <p className="text-lg italic leading-relaxed" style={{ color: colors.textLight }}>
                        "Israel está devastado, sem semente."
                    </p>
                    <p className="text-sm mt-2" style={{ color: colors.textMuted }}>
                        — Estela de Merneptá
                    </p>
                </motion.div>

                {/* Key points */}
                <div className="space-y-3 mb-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="p-4 rounded-lg"
                        style={{ background: `${colors.bgSurface}`, border: `1px solid ${colors.excavationAmber}15` }}
                    >
                        <p style={{ color: colors.textLight }}>
                            <span className="mr-2">🔤</span>
                            Os hieróglifos marcam 'Israel' como <strong>POVO</strong>, não como terra ou cidade
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="p-4 rounded-lg"
                        style={{ background: `${colors.bgSurface}`, border: `1px solid ${colors.excavationAmber}15` }}
                    >
                        <p style={{ color: colors.textLight }}>
                            <span className="mr-2">📅</span>
                            1208 a.C. = o faraó Merneptá confirma que Israel já era uma entidade reconhecida
                        </p>
                    </motion.div>
                </div>

                {/* Insight box */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="p-4 rounded-lg text-center"
                    style={{
                        background: `${colors.excavationAmber}10`,
                        border: `1px solid ${colors.excavationAmber}30`,
                    }}
                >
                    <p className="text-sm italic" style={{ color: colors.excavationAmber }}>
                        O faraó quer se gabar de destruir Israel. Ironicamente, confirma que Israel existia.
                    </p>
                </motion.div>
            </div>
        </ExcavationWrapper>
    );
}
