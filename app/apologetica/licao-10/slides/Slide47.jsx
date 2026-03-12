'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, EvidenceCard, colors } from './shared';

export function Slide47() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-6xl text-center mb-4">🕍</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>A SINAGOGA — ONDE TUDO ACONTECIA</motion.h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <EvidenceCard delay={0.5} icon="📖"><p className="text-base" style={{ color: colors.textLight }}><span className="font-bold" style={{ color: colors.amber }}>Leitura pública</span> — Torah e profetas lidos em hebraico com tradução para aramaico</p></EvidenceCard>
                    <EvidenceCard delay={0.6} icon="🎓"><p className="text-base" style={{ color: colors.textLight }}><span className="font-bold" style={{ color: colors.amber }}>Educação</span> — meninos memorizavam a Torah; os melhores continuavam até Mishnah</p></EvidenceCard>
                    <EvidenceCard delay={0.7} icon="⚖️"><p className="text-base" style={{ color: colors.textLight }}><span className="font-bold" style={{ color: colors.amber }}>Tribunal local</span> — disputas comunitárias eram resolvidas ali</p></EvidenceCard>
                    <EvidenceCard delay={0.8} icon="🤝"><p className="text-base" style={{ color: colors.textLight }}><span className="font-bold" style={{ color: colors.amber }}>Centro social</span> — a vida da comunidade girava em torno dela</p></EvidenceCard>
                </div>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="text-center mt-6 text-lg" style={{ color: colors.textMedium }}>
                    Lucas 4 — Jesus lê Isaías na sinagoga de Nazaré. Ele faz o que <span style={{ color: colors.amber }}>qualquer judeu educado podia fazer</span>. O choque não é que ele leu. É o que ele disse depois.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
