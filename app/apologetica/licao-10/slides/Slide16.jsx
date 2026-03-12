'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, colors } from './shared';

export function Slide16() {
    const steps = ['Preâmbulo', 'Prólogo Histórico', 'Estipulações', 'Bênçãos e Maldições', 'Testemunhas'];
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.1 }} className="text-xs uppercase tracking-[0.3em] mb-4 font-mono text-center" style={{ color: colors.textMuted }}>Tipos de Aliança · 1 de 2</motion.p>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    TRATADO DE SUSERANIA
                </motion.h2>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-lg text-center mb-8" style={{ color: colors.textLight }}>
                    Rei poderoso + vassalo. O rei protege, o vassalo é leal.
                </motion.p>

                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.15 }}
                            className="flex items-center gap-2"
                        >
                            <div className="px-4 py-2 rounded-lg text-sm font-medium" style={{ background: `${colors.amber}20`, border: `1px solid ${colors.amber}40`, color: colors.amber }}>
                                {step}
                            </div>
                            {i < steps.length - 1 && <span style={{ color: colors.amber }}>→</span>}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="p-5 rounded-xl text-center"
                    style={{ background: `${colors.mapBlue}15`, border: `1px solid ${colors.mapBlue}40` }}
                >
                    <p className="text-lg" style={{ color: colors.textLight }}>
                        <span style={{ color: colors.amber, fontWeight: 'bold' }}>Deuteronômio</span> segue exatamente essa estrutura.
                    </p>
                    <p className="text-sm mt-2" style={{ color: colors.textMedium }}>
                        Deus como grande Rei · Israel como povo protegido que deve lealdade
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
