'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, colors } from './shared';

export function Slide43() {
    const confirmations = [
        { label: 'QUEM — Cristo, origem do nome \'cristãos\'', color: colors.fieldGreen },
        { label: 'QUANDO — Reinado de Tibério (14-37 d.C.)', color: colors.fieldGreen },
        { label: 'POR QUEM — Pôncio Pilatos, na Judeia', color: colors.fieldGreen },
    ];

    return (
        <ExcavationWrapper stratum="papyrus">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-2"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    TESTEMUNHA HOSTIL
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm mb-8"
                    style={{ color: colors.textMedium }}
                >
                    O conceito mais importante desta seção
                </motion.p>

                {/* 3 confirmation cards */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    {confirmations.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.2 }}
                            className="flex-1 p-4 rounded-xl"
                            style={{
                                background: colors.bgSurface,
                                borderLeft: `4px solid ${item.color}`,
                                border: `1px solid ${item.color}25`,
                                borderLeftWidth: '4px',
                                borderLeftColor: item.color,
                            }}
                        >
                            <p className="text-sm font-bold" style={{ color: colors.textLight }}>
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Insight box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="p-4 rounded-xl"
                    style={{ background: `${colors.excavationAmber}12`, border: `1px solid ${colors.excavationAmber}30` }}
                >
                    <p className="text-sm" style={{ color: colors.excavationAmber }}>
                        O tom hostil É a marca de autenticidade. Um interpolador cristão nunca chamaria o cristianismo de &ldquo;superstição perniciosa&rdquo;, nem erraria o título de Pilatos.
                    </p>
                </motion.div>
            </div>
        </ExcavationWrapper>
    );
}
