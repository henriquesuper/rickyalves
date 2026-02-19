'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, colors } from './shared';

export default function Slide20_IsaiasArgumento() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-xs uppercase tracking-[0.3em] mb-6 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    ★ Slide Central do Bloco AT
                </motion.p>

                <DossierCard delay={0.3} highlight status="debate">
                    <div className="py-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8"
                            style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                            O Argumento Central
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Premissa A */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="p-4 rounded-lg"
                                style={{ background: `${colors.wineRed}15`, border: `1px solid ${colors.wineRed}30` }}
                            >
                                <h3 className="font-bold mb-2" style={{ color: colors.wineRed }}>
                                    Se profecia preditiva é impossível...
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: colors.textLight }}>
                                    Então Isaías 44-45 foi escrito depois de Ciro. O texto deve ser tardio.
                                    Faz sentido interno.
                                </p>
                            </motion.div>

                            {/* Premissa B */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="p-4 rounded-lg"
                                style={{ background: `${colors.mossGreen}15`, border: `1px solid ${colors.mossGreen}30` }}
                            >
                                <h3 className="font-bold mb-2" style={{ color: colors.mossGreen }}>
                                    Se profecia preditiva é possível...
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: colors.textLight }}>
                                    Então o texto pode ser o que diz ser.
                                    A precisão vira evidência — não problema.
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="text-center mt-8 p-4 rounded-lg"
                            style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}30` }}
                        >
                            <p className="text-lg font-bold mb-2" style={{ color: colors.amber }}>
                                Os dados são os mesmos para os dois lados.
                            </p>
                            <p className="text-base" style={{ color: colors.warmWhite }}>
                                A diferença está nas <span style={{ color: colors.amber }}>premissas</span>.
                            </p>
                            <p className="text-sm mt-2 italic" style={{ color: colors.textMedium }}>
                                O debate não é entre pessoas inteligentes e pessoas ingênuas.
                                É entre pessoas com premissas diferentes.
                            </p>
                        </motion.div>
                    </div>
                </DossierCard>
            </div>
        </SlideWrapper>
    );
}
