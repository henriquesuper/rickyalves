'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, colors } from './shared';

export function Slide24() {
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
                    AS ÚLTIMAS VOZES
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
                        "Estamos vigiando os sinais de fumaça de Laquis... porque não podemos ver Azeca."
                    </p>
                    <p className="text-sm mt-2" style={{ color: colors.textMuted }}>
                        — Ostraco IV
                    </p>
                </motion.div>

                {/* Bible parallel card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="p-4 rounded-lg mb-5"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.excavationAmber}40`,
                    }}
                >
                    <p className="text-sm" style={{ color: colors.excavationAmber }}>
                        <span className="font-bold">Jeremias 34:7</span> — Laquis e Azeca eram as últimas cidades de Judá ainda resistindo.
                    </p>
                </motion.div>

                {/* Insight */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="p-4 rounded-lg mb-4"
                    style={{
                        background: `${colors.bgDeep}`,
                        border: `1px solid ${colors.excavationAmber}10`,
                    }}
                >
                    <p className="text-sm italic" style={{ color: colors.textMedium }}>
                        O silêncio sobre Azeca significa que Azeca já havia caído. Estas são cartas de soldados que sabem que são os próximos.
                    </p>
                </motion.div>

                {/* Emotional note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="text-center p-3 rounded-lg"
                    style={{
                        background: `${colors.fieldGreen}08`,
                        border: `1px solid ${colors.fieldGreen}20`,
                    }}
                >
                    <p className="text-sm" style={{ color: colors.fieldGreen }}>
                        Não são propaganda real. São vozes humanas reais nos últimos momentos antes da catástrofe.
                    </p>
                </motion.div>
            </div>
        </ExcavationWrapper>
    );
}
