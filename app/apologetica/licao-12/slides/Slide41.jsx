'use client';
import { motion } from 'framer-motion';
import { LabWrapper, DangerCard, colors } from './shared';

export function Slide41() {
    return (
        <LabWrapper stratum="warning-filter">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <DangerCard number={5} title="Leitura Seletiva (Cherry-picking)" delay={0.2}
                    description="Destacar textos que apoiam uma posição e ignorar textos que a complicam."
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="p-3 rounded-lg"
                            style={{ background: `${colors.lensTeal}08`, border: `1px solid ${colors.lensTeal}15` }}
                        >
                            <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.lensTeal }}>
                                Quem quer prosperidade cita:
                            </p>
                            <p className="text-sm italic" style={{ color: colors.textLight }}>
                                &ldquo;O Senhor é o meu pastor, nada me faltará.&rdquo;
                            </p>
                            <p className="text-xs mt-1" style={{ color: colors.textMuted }}>Salmo 23:1</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className="p-3 rounded-lg"
                            style={{ background: `${colors.lensRed}08`, border: `1px solid ${colors.lensRed}15` }}
                        >
                            <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.lensRed }}>
                                E ignora:
                            </p>
                            <p className="text-sm italic" style={{ color: colors.textLight }}>
                                &ldquo;Passei fome e sede, fiquei nu.&rdquo;
                            </p>
                            <p className="text-xs mt-1" style={{ color: colors.textMuted }}>2 Coríntios 11:27 — Paulo</p>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-4 text-sm text-center"
                        style={{ color: colors.textMedium }}
                    >
                        A Bíblia tem ambos. A hermenêutica honesta trabalha com o <span style={{ color: colors.lensBlue, fontWeight: 600 }}>quadro completo</span>.
                    </motion.p>
                </DangerCard>
            </div>
        </LabWrapper>
    );
}
