'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ExcavationSeal, StratumHeader, EvidenceScale, BrushReveal, StampBadge, colors, quizQuestions } from './shared';

export function Slide11() {
    const bullets = [
        'Arqueologia confirma, não prova',
        'Silêncio não refuta',
        'O padrão histórico favorece o texto bíblico',
    ];

    return (
        <ExcavationWrapper stratum="topsoil">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-8 text-center"
                    style={{ color: colors.textLight }}
                >
                    O QUE ESTABELECEMOS
                </motion.h2>

                {/* 3 bullet cards */}
                <div className="grid md:grid-cols-3 gap-4 mb-10">
                    {bullets.map((text, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + i * 0.2 }}
                            className="rounded-xl p-4 text-center"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${colors.fieldGreen}20`,
                            }}
                        >
                            <span
                                className="text-lg font-bold block mb-2"
                                style={{ color: colors.fieldGreen }}
                            >
                                ✓
                            </span>
                            <p className="text-sm font-medium" style={{ color: colors.textLight }}>
                                {text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Texto de transição */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-center"
                >
                    <p
                        className="text-lg italic mb-4"
                        style={{ color: colors.excavationAmber }}
                    >
                        Agora vamos descer de verdade...
                    </p>
                    <motion.span
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                        className="text-xl inline-block"
                        style={{ color: colors.excavationAmber }}
                    >
                        ↓
                    </motion.span>
                </motion.div>
            </div>
        </ExcavationWrapper>
    );
}
