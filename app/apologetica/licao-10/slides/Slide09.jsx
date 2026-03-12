'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, EvidenceCard, colors } from './shared';

export function Slide09() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.1 }} className="text-xs uppercase tracking-[0.3em] mb-4 font-mono text-center" style={{ color: colors.textMuted }}>O Mundo do AT · Vizinhos de Israel</motion.p>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="text-6xl text-center mb-4">🏺</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    MESOPOTÂMIA — O BERÇO DA CIVILIZAÇÃO
                </motion.h2>

                <EvidenceCard delay={0.5} icon="🌊">
                    <p className="text-base leading-relaxed" style={{ color: colors.textLight }}>
                        Entre os rios Tigre e Eufrates (atual Iraque). Suméria, Babilônia, Assíria. <span style={{ color: colors.amber }}>Abraão vem de Ur</span>, na Mesopotâmia.
                    </p>
                </EvidenceCard>

                <EvidenceCard delay={0.7} icon="📜" className="mt-4">
                    <p className="text-base leading-relaxed" style={{ color: colors.textLight }}>
                        O público original de Gênesis conhecia as versões mesopotâmicas das histórias de criação e dilúvio: <span style={{ color: colors.mapBlue, fontWeight: 'bold' }}>Enuma Elish</span> e <span style={{ color: colors.mapBlue, fontWeight: 'bold' }}>Epopeia de Gilgamesh</span>.
                    </p>
                </EvidenceCard>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-center mt-6 text-base italic"
                    style={{ color: colors.textMedium }}
                >
                    Gênesis não está escrevendo no vácuo — está respondendo a essas narrativas.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
