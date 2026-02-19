'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, colors } from './shared';

export default function Slide28_Sinotico() {
    return (
        <SlideWrapper variant="cream">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="O Problema Sinótico"
                    subtitle="Por que Mateus, Marcos e Lucas são tão parecidos?"
                    icon="🔗"
                    delay={0.2}
                />

                <DossierCard delay={0.4}>
                    <div className="py-4">
                        {/* Diagram */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-center mb-6"
                        >
                            <div className="flex items-center justify-center gap-4 flex-wrap">
                                <div className="px-4 py-2 rounded-lg border" style={{ borderColor: `${colors.slateBlue}40` }}>
                                    <p className="font-bold" style={{ color: colors.slateBlue }}>MARCOS</p>
                                    <p className="text-xs" style={{ color: colors.textMuted }}>Escrito primeiro</p>
                                </div>
                                <span className="text-2xl" style={{ color: colors.amber }}>→</span>
                                <div className="flex flex-col gap-2">
                                    <div className="px-4 py-2 rounded-lg border" style={{ borderColor: `${colors.mossGreen}40` }}>
                                        <p className="font-bold" style={{ color: colors.mossGreen }}>MATEUS</p>
                                    </div>
                                    <div className="px-4 py-2 rounded-lg border" style={{ borderColor: `${colors.mossGreen}40` }}>
                                        <p className="font-bold" style={{ color: colors.mossGreen }}>LUCAS</p>
                                    </div>
                                </div>
                                <span className="text-2xl" style={{ color: colors.amber }}>←</span>
                                <div className="px-4 py-2 rounded-lg border" style={{ borderColor: `${colors.amber}40` }}>
                                    <p className="font-bold" style={{ color: colors.amber }}>Q</p>
                                    <p className="text-xs" style={{ color: colors.textMuted }}>Fonte hipotética</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="p-4 rounded-lg mt-4"
                            style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}20` }}
                        >
                            <p className="text-base text-center" style={{ color: colors.warmWhite }}>
                                O debate é sobre <span style={{ color: colors.amber }}>quais fontes</span> os autores usaram —
                                não sobre se existiram fontes.
                            </p>
                            <p className="text-sm text-center mt-2 italic" style={{ color: colors.textMedium }}>
                                A existência de fontes confirma investigação, não invenção.
                            </p>
                        </motion.div>
                    </div>
                </DossierCard>
            </div>
        </SlideWrapper>
    );
}
