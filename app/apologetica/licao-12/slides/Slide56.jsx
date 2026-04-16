'use client';
import { motion } from 'framer-motion';
import { LabWrapper, ComparisonPanel, colors } from './shared';

export function Slide56() {
    return (
        <LabWrapper stratum="full-clarity">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Mateus 7:1 — Antes vs Depois
                </motion.h2>

                <ComparisonPanel
                    leftTitle="⊘ SEM LENTES"
                    leftContent={
                        <div>
                            <p className="italic mb-2">"Nunca avalie ninguém."</p>
                            <p className="text-xs" style={{ color: colors.textMuted }}>
                                Resultado: relativismo moral total. Ninguém pode dizer que nada é errado. Irônico: usar este versículo para
                                julgar quem julga... é um julgamento.
                            </p>
                        </div>
                    }
                    rightTitle="◎ COM LENTES"
                    rightContent={
                        <div>
                            <p className="italic mb-2">"Não seja hipócrita ao avaliar. Corrija-se primeiro."</p>
                            <p className="text-xs" style={{ color: colors.textMuted }}>
                                Resultado: discernimento com integridade. A comunidade mantém padrões éticos — mas começa pela auto-avaliação.
                            </p>
                        </div>
                    }
                    delay={0.4}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mt-6 p-4 rounded-xl text-center"
                    style={{ background: `${colors.lensBlue}08`, border: `1px solid ${colors.lensBlue}15` }}
                >
                    <p className="text-sm" style={{ color: colors.textMedium }}>
                        <span style={{ color: colors.lensBlue, fontWeight: 600 }}>7 lentes</span> transformaram um slogan de
                        relativismo numa chamada à <span style={{ color: colors.lensTeal, fontWeight: 600 }}>integridade</span>.
                    </p>
                </motion.div>
            </div>
        </LabWrapper>
    );
}
