'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ExcavationSeal, StratumHeader, EvidenceScale, BrushReveal, StampBadge, colors, quizQuestions } from './shared';

export function Slide08() {
    const items = [
        { icon: '🚫', label: 'Provar que Deus existe ou que milagres aconteceram', status: 'silent' },
        { icon: '🚫', label: "Provar que um texto é 'inspirado'", status: 'silent' },
        { icon: '🚫', label: 'Substituir a fé por certeza científica', status: 'silent' },
    ];

    return (
        <ExcavationWrapper stratum="topsoil">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Protocolo */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.1 }}
                    className="text-xs uppercase tracking-[0.3em] mb-3 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    O que a arqueologia NÃO pode fazer
                </motion.p>

                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-8"
                    style={{ color: colors.textLight }}
                >
                    LIMITES HONESTOS
                </motion.h2>

                {/* Escala de evidências */}
                <EvidenceScale items={items} delay={0.4} />

                {/* Insight box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="mt-8 p-4 rounded-xl"
                    style={{
                        background: `${colors.bgSurface}`,
                        border: `1px solid ${colors.excavationAmber}30`,
                    }}
                >
                    <p className="text-sm italic" style={{ color: colors.textLight }}>
                        Arqueologia não é prova. É{' '}
                        <span style={{ color: colors.excavationAmber, fontWeight: 'bold' }}>evidência</span>.
                        {' '}Confirmação e prova são coisas diferentes.
                    </p>
                </motion.div>
            </div>
        </ExcavationWrapper>
    );
}
