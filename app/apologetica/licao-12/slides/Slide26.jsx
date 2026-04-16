'use client';
import { motion } from 'framer-motion';
import { LabWrapper, LensCard, colors } from './shared';

export function Slide26() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <LensCard lensNumber={6} title="Revelação Progressiva" delay={0.2} accentColor={colors.lensBlue}>
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        Deus não despejou toda a verdade de uma vez. Ele comunicou progressivamente, ao longo de séculos,
                        de maneira que cada geração pudesse processar.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center gap-3 p-4 rounded-xl"
                        style={{ background: `${colors.lensBlue}08` }}
                    >
                        <div className="flex items-center gap-2 flex-1">
                            <span className="text-2xl">🌱</span>
                            <div>
                                <p className="text-xs font-bold" style={{ color: colors.lensAmber }}>Semente</p>
                                <p className="text-xs" style={{ color: colors.textMuted }}>Textos anteriores plantam</p>
                            </div>
                        </div>
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            style={{ color: colors.lensBlue }}
                        >
                            →
                        </motion.span>
                        <div className="flex items-center gap-2 flex-1">
                            <span className="text-2xl">🌳</span>
                            <div>
                                <p className="text-xs font-bold" style={{ color: colors.lensTeal }}>Florescimento</p>
                                <p className="text-xs" style={{ color: colors.textMuted }}>Textos posteriores florescem</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-xs mt-4 italic"
                        style={{ color: colors.textMuted }}
                    >
                        Textos anteriores são esclarecidos — não descartados — por textos posteriores.
                    </motion.p>
                </LensCard>
            </div>
        </LabWrapper>
    );
}
