'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, EvidenceScale, colors } from './shared';

export function Slide51() {
    return (
        <ExcavationWrapper stratum="bedrock">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-2"
                    style={{ color: colors.textLight }}
                >
                    O QUE A ARQUEOLOGIA NÃO CONFIRMOU
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm mb-8"
                    style={{ color: colors.textMedium }}
                >
                    Honestidade intelectual: reconhecer o que não sabemos
                </motion.p>

                {/* Evidence Scale */}
                <EvidenceScale
                    items={[
                        { icon: '🏜️', label: 'Êxodo como migração em larga escala no Sinai', status: 'debated' },
                        { icon: '⚔️', label: 'Conquista de Canaã na escala descrita por Josué', status: 'debated' },
                        { icon: '👑', label: 'Templo de Salomão na escala descrita', status: 'debated' },
                    ]}
                    delay={0.6}
                />

                {/* Insight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="mt-8 p-4 rounded-xl"
                    style={{ background: `${colors.excavationAmber}12`, border: `1px solid ${colors.excavationAmber}30` }}
                >
                    <p className="text-sm" style={{ color: colors.excavationAmber }}>
                        A ausência de evidência não é evidência de ausência — especialmente em regiões pouco escavadas. E o padrão geral é claro: quando a evidência aparece, ela tende a confirmar.
                    </p>
                </motion.div>

                {/* Bold note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="mt-4 text-sm font-bold text-center"
                    style={{ color: colors.fieldGreen }}
                >
                    Se fôssemos desonestos, não mostraríamos este slide.
                </motion.p>
            </div>
        </ExcavationWrapper>
    );
}
