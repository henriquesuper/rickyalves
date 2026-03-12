'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, colors } from './shared';

export function Slide26() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    FARISEUS
                </motion.h2>
                <DossierCard delay={0.4} status="verified" highlight>
                    <div className="text-center">
                        <p className="text-4xl mb-3">📜</p>
                        <p className="text-base leading-relaxed mb-3" style={{ color: colors.textLight }}>
                            Os mais influentes entre o povo. Acreditavam em ressurreição, anjos, tradição oral. Adaptavam a Lei à vida cotidiana.
                        </p>
                        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8 }} className="h-px max-w-xs mx-auto my-4" style={{ background: `linear-gradient(to right, transparent, ${colors.amber}60, transparent)` }} />
                        <p className="text-lg font-medium" style={{ color: colors.textLight }}>
                            Jesus briga mais com eles justamente porque estava <span style={{ color: colors.amber, fontWeight: 'bold' }}>mais perto dos fariseus</span> do que de qualquer outro grupo.
                        </p>
                    </div>
                </DossierCard>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="text-center mt-6 text-xl italic" style={{ color: colors.amber, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Você briga mais feio com quem é quase igual a você.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
