'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

export function Slide54() {
    return (
        <LabWrapper stratum="full-clarity">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <div className="space-y-4">
                    {/* Passo 1 — Contexto */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="rounded-xl overflow-hidden"
                        style={{ background: colors.bgSurface, border: `1px solid ${colors.lensBlue}15` }}
                    >
                        <div className="px-4 py-2" style={{ background: `${colors.lensBlue}10`, borderBottom: `1px solid ${colors.lensBlue}10` }}>
                            <p className="text-xs font-bold tracking-wider" style={{ color: colors.lensBlue }}>
                                🔬 LENTE 1 — CONTEXTO LITERÁRIO
                            </p>
                        </div>
                        <div className="p-4">
                            <p className="text-sm mb-2" style={{ color: colors.textMedium }}>
                                Leia Mateus 7:1-5 completo:
                            </p>
                            <p className="text-sm italic leading-relaxed" style={{ color: colors.textLight }}>
                                "Não julgueis... Por que vês o argueiro no olho do teu irmão, e não reparas na trave que está no teu próprio olho? ... <span style={{ color: colors.lensTeal, fontWeight: 600 }}>Tira primeiro a trave do teu olho</span>, e então verás bem para tirar o argueiro do olho do teu irmão."
                            </p>
                            <p className="text-sm mt-3" style={{ color: colors.lensBlue }}>
                                → Jesus não proíbe avaliar. Ele proíbe <span className="font-bold">hipocrisia</span> ao avaliar.
                            </p>
                        </div>
                    </motion.div>

                    {/* Passo 2 — Escritura interpreta Escritura */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="rounded-xl overflow-hidden"
                        style={{ background: colors.bgSurface, border: `1px solid ${colors.lensTeal}15` }}
                    >
                        <div className="px-4 py-2" style={{ background: `${colors.lensTeal}10`, borderBottom: `1px solid ${colors.lensTeal}10` }}>
                            <p className="text-xs font-bold tracking-wider" style={{ color: colors.lensTeal }}>
                                🔬 LENTE 3 — ESCRITURA INTERPRETA ESCRITURA
                            </p>
                        </div>
                        <div className="p-4">
                            <p className="text-sm italic mb-2" style={{ color: colors.textLight }}>
                                "Não julgueis segundo a aparência, mas julgai <span style={{ color: colors.lensTeal, fontWeight: 600 }}>segundo o justo juízo</span>."
                            </p>
                            <p className="text-xs font-mono mb-2" style={{ color: colors.textMuted }}>— João 7:24 (o próprio Jesus)</p>
                            <p className="text-sm" style={{ color: colors.lensTeal }}>
                                → Jesus ordena julgamento justo. Contradição? Não — <span className="font-bold">complemento</span>.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </LabWrapper>
    );
}
