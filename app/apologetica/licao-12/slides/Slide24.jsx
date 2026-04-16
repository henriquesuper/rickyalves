'use client';
import { motion } from 'framer-motion';
import { LabWrapper, LensCard, colors } from './shared';

export function Slide24() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <LensCard lensNumber={5} title="Analogia da Fé" delay={0.2} accentColor={colors.lensTeal}>
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        Textos claros iluminam textos obscuros — <span style={{ color: colors.lensRed }}>não o contrário</span>.
                    </p>

                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        Boa hermenêutica constrói doutrina a partir das passagens claras e usa as claras como lente
                        para interpretar as obscuras.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="p-3 rounded-lg"
                        style={{ background: `${colors.lensAmber}08`, border: `1px solid ${colors.lensAmber}15` }}
                    >
                        <p className="text-xs" style={{ color: colors.textMuted }}>
                            <span style={{ color: colors.lensAmber, fontWeight: 600 }}>Princípio prático:</span> Se a sua
                            interpretação de uma passagem obscura contradiz dez passagens claras, o problema provavelmente está
                            na sua interpretação, não nas dez passagens.
                        </p>
                    </motion.div>
                </LensCard>
            </div>
        </LabWrapper>
    );
}
