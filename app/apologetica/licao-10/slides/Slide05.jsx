'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, EvidenceCard, ImpactNumber, colors } from './shared';

export function Slide05() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.1 }}
                    className="text-xs uppercase tracking-[0.3em] mb-4 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    Exemplo 2 de 3
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-8"
                    style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    ABRAÃO, O &quot;NÔMADE SOLITÁRIO&quot;
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <EvidenceCard delay={0.4} variant="disputed" icon="❌">
                        <h3 className="font-bold text-lg mb-2" style={{ color: colors.warmWhite }}>O que imaginamos</h3>
                        <p className="text-base leading-relaxed" style={{ color: colors.textLight }}>
                            Um pastor de ovelhas errante pelo deserto.
                        </p>
                    </EvidenceCard>

                    <EvidenceCard delay={0.6} variant="confirmed" icon="📖">
                        <h3 className="font-bold text-lg mb-2" style={{ color: colors.warmWhite }}>O que o texto diz</h3>
                        <p className="text-base leading-relaxed" style={{ color: colors.textLight }}>
                            Gênesis 14 — Abraão tinha <span style={{ color: colors.amber, fontWeight: 'bold' }}>318 homens treinados em combate</span>, nascidos na sua própria casa.
                        </p>
                    </EvidenceCard>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mt-8 text-center"
                >
                    <ImpactNumber number="318" label="guerreiros treinados em sua casa" delay={1} color={colors.amber} />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="text-center mt-4 text-lg italic"
                    style={{ color: colors.textMedium }}
                >
                    Abraão era mais parecido com um sheik tribal poderoso do que com um beduíno solitário.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
