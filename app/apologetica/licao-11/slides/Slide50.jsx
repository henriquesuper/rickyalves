'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, EvidenceScale, colors } from './shared';

export function Slide50() {
    return (
        <ExcavationWrapper stratum="bedrock">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-8 text-center"
                    style={{ color: colors.textLight }}
                >
                    MESMO TESTE. RESULTADOS DIFERENTES.
                </motion.h2>

                {/* Two columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Left — Bíblia */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-5 rounded-xl"
                        style={{
                            background: colors.bgSurface,
                            border: `1px solid ${colors.fieldGreen}25`,
                            borderLeftWidth: '4px',
                            borderLeftColor: colors.fieldGreen,
                        }}
                    >
                        <h3 className="text-lg font-bold mb-4" style={{ color: colors.textLight }}>
                            📖 Bíblia
                        </h3>
                        <ul className="space-y-2 mb-5">
                            {[
                                '15+ confirmações arqueológicas',
                                '4 fontes externas independentes',
                                '1.500+ anos de história verificável',
                            ].map((item, i) => (
                                <li key={i} className="text-sm flex items-start gap-2" style={{ color: colors.textMedium }}>
                                    <span style={{ color: colors.fieldGreen }}>•</span> {item}
                                </li>
                            ))}
                        </ul>
                        <EvidenceScale
                            items={[
                                { label: 'Arqueologia', status: 'confirmed' },
                                { label: 'Fontes externas', status: 'confirmed' },
                                { label: 'Manuscritos', status: 'confirmed' },
                            ]}
                            delay={0.8}
                        />
                    </motion.div>

                    {/* Right — Livro de Mórmon */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="p-5 rounded-xl"
                        style={{
                            background: colors.bgSurface,
                            border: `1px solid ${colors.clayRed}25`,
                            borderLeftWidth: '4px',
                            borderLeftColor: colors.clayRed,
                        }}
                    >
                        <h3 className="text-lg font-bold mb-4" style={{ color: colors.textLight }}>
                            📕 Livro de Mórmon
                        </h3>
                        <ul className="space-y-2 mb-5">
                            {[
                                'Zero evidências arqueológicas',
                                'Zero fontes externas',
                                'Nenhuma cidade, pessoa ou batalha confirmada',
                            ].map((item, i) => (
                                <li key={i} className="text-sm flex items-start gap-2" style={{ color: colors.textMedium }}>
                                    <span style={{ color: colors.clayRed }}>•</span> {item}
                                </li>
                            ))}
                        </ul>
                        <EvidenceScale
                            items={[
                                { label: 'Arqueologia', status: 'silent' },
                                { label: 'Fontes externas', status: 'silent' },
                                { label: 'Manuscritos', status: 'silent' },
                            ]}
                            delay={1.0}
                        />
                    </motion.div>
                </div>

                {/* Small note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1.6 }}
                    className="text-xs text-center"
                    style={{ color: colors.textMuted }}
                >
                    Não é ataque — é aplicação consistente do mesmo critério.
                </motion.p>
            </div>
        </ExcavationWrapper>
    );
}
