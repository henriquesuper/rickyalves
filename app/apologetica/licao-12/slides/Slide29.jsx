'use client';
import { motion } from 'framer-motion';
import { LabWrapper, LensCard, colors } from './shared';

export function Slide29() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <LensCard lensNumber={7} title="Sensibilidade ao Pacto" delay={0.2} accentColor={colors.lensAmber}>
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        Nem tudo no AT se aplica diretamente ao cristão.
                        Mas <span style={{ color: colors.lensTeal, fontWeight: 600 }}>nada</span> no AT é irrelevante.
                    </p>

                    <p className="text-sm mb-4 font-medium" style={{ color: colors.textLight }}>
                        Três categorias da Lei mosaica:
                    </p>

                    <div className="space-y-3">
                        {[
                            {
                                icon: '⚖️', label: 'Lei Moral', color: colors.lensTeal,
                                desc: 'Dez Mandamentos, princípios éticos — permanente, reflete o caráter de Deus.'
                            },
                            {
                                icon: '🕯️', label: 'Lei Cerimonial', color: colors.lensAmber,
                                desc: 'Sacrifícios, festas, rituais de pureza — tipológica, apontava para Cristo. Cumprida nele.'
                            },
                            {
                                icon: '🏛️', label: 'Lei Civil', color: colors.lensBlue,
                                desc: 'Regulamentos para Israel como nação — princípios subjacentes podem ser universais, mas a aplicação era teocrática.'
                            },
                        ].map((law, i) => (
                            <motion.div
                                key={law.label}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + i * 0.2 }}
                                className="flex items-start gap-3 p-3 rounded-lg"
                                style={{ background: `${law.color}08`, border: `1px solid ${law.color}15` }}
                            >
                                <span className="text-xl">{law.icon}</span>
                                <div>
                                    <p className="text-sm font-bold" style={{ color: law.color }}>{law.label}</p>
                                    <p className="text-xs" style={{ color: colors.textMuted }}>{law.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </LensCard>
            </div>
        </LabWrapper>
    );
}
