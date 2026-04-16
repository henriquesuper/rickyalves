'use client';
import { motion } from 'framer-motion';
import { LabWrapper, LensCard, colors } from './shared';

export function Slide17() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <LensCard lensNumber={2} title="Exegese versus Eisegese" delay={0.2} accentColor={colors.lensBlue}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="p-4 rounded-xl text-center"
                            style={{ background: `${colors.lensTeal}08`, border: `1px solid ${colors.lensTeal}20` }}
                        >
                            <p className="text-2xl mb-2">📤</p>
                            <p className="text-sm font-bold mb-1" style={{ color: colors.lensTeal }}>Exegese</p>
                            <p className="text-xs" style={{ color: colors.textMuted }}>
                                <em>ex</em> = para fora + <em>hēgeomai</em> = conduzir
                            </p>
                            <p className="text-sm mt-2" style={{ color: colors.textMedium }}>
                                Extrair o significado <span style={{ color: colors.lensTeal }}>do</span> texto
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className="p-4 rounded-xl text-center"
                            style={{ background: `${colors.lensRed}08`, border: `1px solid ${colors.lensRed}20` }}
                        >
                            <p className="text-2xl mb-2">📥</p>
                            <p className="text-sm font-bold mb-1" style={{ color: colors.lensRed }}>Eisegese</p>
                            <p className="text-xs" style={{ color: colors.textMuted }}>
                                <em>eis</em> = para dentro
                            </p>
                            <p className="text-sm mt-2" style={{ color: colors.textMedium }}>
                                Inserir significado <span style={{ color: colors.lensRed }}>no</span> texto
                            </p>
                        </motion.div>
                    </div>
                </LensCard>
            </div>
        </LabWrapper>
    );
}
