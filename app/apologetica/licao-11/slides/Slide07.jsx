'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ExcavationSeal, StratumHeader, EvidenceScale, BrushReveal, StampBadge, colors, quizQuestions } from './shared';

export function Slide07() {
    const items = [
        { icon: '📍', label: 'Confirmar que lugares bíblicos existiram', status: 'confirmed' },
        { icon: '👤', label: 'Confirmar que pessoas bíblicas existiram', status: 'confirmed' },
        { icon: '📅', label: 'Fornecer evidência cronológica', status: 'confirmed' },
        { icon: '🌍', label: 'Iluminar o contexto cultural e histórico', status: 'confirmed' },
        { icon: '🔎', label: 'Corroborar detalhes que um autor distante não conheceria', status: 'confirmed' },
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
                    O que a arqueologia PODE fazer
                </motion.p>

                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-8"
                    style={{ color: colors.textLight }}
                >
                    5 CAPACIDADES
                </motion.h2>

                {/* Escala de evidências */}
                <EvidenceScale items={items} delay={0.4} />
            </div>
        </ExcavationWrapper>
    );
}
