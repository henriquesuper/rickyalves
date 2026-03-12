'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, colors } from './shared';

export function Slide10() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.1 }} className="text-xs uppercase tracking-[0.3em] mb-4 font-mono text-center" style={{ color: colors.textMuted }}>Gênesis vs. Mitos Mesopotâmicos</motion.p>

                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    GÊNESIS NÃO COPIA — RESPONDE
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <DossierCard delay={0.4} status="debate">
                        <div className="text-center">
                            <p className="text-3xl mb-3">🏺</p>
                            <h3 className="font-bold text-lg mb-3" style={{ color: colors.stampDebate }}>Enuma Elish (Babilônia)</h3>
                            <p className="text-base" style={{ color: colors.textLight }}>Humanos criados do <span style={{ fontWeight: 'bold' }}>sangue de um deus morto</span>.</p>
                            <p className="text-sm mt-2 italic" style={{ color: colors.textMedium }}>Propósito: ser escravos dos deuses.</p>
                        </div>
                    </DossierCard>

                    <DossierCard delay={0.6} status="verified" highlight>
                        <div className="text-center">
                            <p className="text-3xl mb-3">📖</p>
                            <h3 className="font-bold text-lg mb-3" style={{ color: colors.stampVerified }}>Gênesis</h3>
                            <p className="text-base" style={{ color: colors.textLight }}>Humanos criados à <span style={{ fontWeight: 'bold' }}>imagem de Deus</span>.</p>
                            <p className="text-sm mt-2 italic" style={{ color: colors.textMedium }}>Propósito: ser parceiros na criação.</p>
                        </div>
                    </DossierCard>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-8 p-5 rounded-xl text-center"
                    style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}30` }}
                >
                    <p className="text-lg" style={{ color: colors.textLight }}>
                        Mesma estrutura literária. <span style={{ color: colors.amber, fontWeight: 'bold' }}>Teologia radicalmente oposta.</span>
                    </p>
                    <p className="text-sm mt-2" style={{ color: colors.textMedium }}>
                        Gênesis está em diálogo com a cultura — fazendo afirmações radicais no vocabulário que o público entendia.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
