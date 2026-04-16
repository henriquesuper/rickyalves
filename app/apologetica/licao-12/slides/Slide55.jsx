'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

export function Slide55() {
    return (
        <LabWrapper stratum="full-clarity">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <div className="space-y-4">
                    {/* Passo 3 — Intenção Autoral */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="rounded-xl overflow-hidden"
                        style={{ background: colors.bgSurface, border: `1px solid ${colors.lensPurple}15` }}
                    >
                        <div className="px-4 py-2" style={{ background: `${colors.lensPurple}10`, borderBottom: `1px solid ${colors.lensPurple}10` }}>
                            <p className="text-xs font-bold tracking-wider" style={{ color: colors.lensPurple }}>
                                🔬 LENTE 4 — INTENÇÃO AUTORAL
                            </p>
                        </div>
                        <div className="p-4">
                            <p className="text-sm mb-2" style={{ color: colors.textMedium }}>
                                Qual era o problema que Jesus estava combatendo?
                            </p>
                            <p className="text-sm leading-relaxed" style={{ color: colors.textLight }}>
                                Os fariseus eram especialistas em <span style={{ color: colors.lensRed }}>apontar o pecado alheio</span> enquanto
                                ignoravam os próprios. Jesus confronta essa <span style={{ color: colors.lensPurple, fontWeight: 600 }}>incoerência moral</span>,
                                não a capacidade de discernir.
                            </p>
                        </div>
                    </motion.div>

                    {/* Passo 4 — Analogia da Fé */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="rounded-xl overflow-hidden"
                        style={{ background: colors.bgSurface, border: `1px solid ${colors.lensAmber}15` }}
                    >
                        <div className="px-4 py-2" style={{ background: `${colors.lensAmber}10`, borderBottom: `1px solid ${colors.lensAmber}10` }}>
                            <p className="text-xs font-bold tracking-wider" style={{ color: colors.lensAmber }}>
                                🔬 LENTE 5 — ANALOGIA DA FÉ
                            </p>
                        </div>
                        <div className="p-4">
                            <p className="text-sm mb-2" style={{ color: colors.textMedium }}>
                                O ensino de Mt 7:1 harmoniza com o resto da Bíblia?
                            </p>
                            <div className="space-y-1 mt-2">
                                <p className="text-sm" style={{ color: colors.textLight }}>
                                    <span style={{ color: colors.lensAmber }}>•</span> Paulo: "O espiritual julga todas as coisas" (1 Co 2:15)
                                </p>
                                <p className="text-sm" style={{ color: colors.textLight }}>
                                    <span style={{ color: colors.lensAmber }}>•</span> Paulo: "Examinai tudo, retende o bem" (1 Ts 5:21)
                                </p>
                                <p className="text-sm" style={{ color: colors.textLight }}>
                                    <span style={{ color: colors.lensAmber }}>•</span> Jesus: "Pelos frutos os conhecereis" (Mt 7:16 — mesmo capítulo!)
                                </p>
                            </div>
                            <p className="text-sm mt-3" style={{ color: colors.lensAmber }}>
                                → O quadro completo: <span className="font-bold">discernimento sim, hipocrisia não</span>.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </LabWrapper>
    );
}
