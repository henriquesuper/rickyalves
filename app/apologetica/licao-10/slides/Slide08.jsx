'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, EvidenceCard, colors } from './shared';

export function Slide08() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.1 }} className="text-xs uppercase tracking-[0.3em] mb-4 font-mono text-center" style={{ color: colors.textMuted }}>O Mundo do AT · Vizinhos de Israel</motion.p>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="text-6xl text-center mb-4">🏛️</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    EGITO — O GIGANTE AO SUL
                </motion.h2>

                <EvidenceCard delay={0.5} icon="⏳">
                    <p className="text-base leading-relaxed" style={{ color: colors.textLight }}>
                        A civilização mais antiga da região. Quando Abraão chega (~2000 a.C.), o Egito já tinha <span style={{ color: colors.amber, fontWeight: 'bold' }}>mais de mil anos de pirâmides</span>.
                    </p>
                </EvidenceCard>

                <EvidenceCard delay={0.7} icon="🚪" className="mt-4">
                    <p className="text-base leading-relaxed" style={{ color: colors.textLight }}>
                        O <span style={{ color: colors.amber, fontWeight: 'bold' }}>Êxodo</span> é o evento fundacional de Israel. Tudo no AT faz referência a ele.
                    </p>
                </EvidenceCard>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-8 p-5 rounded-xl text-center"
                    style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}30` }}
                >
                    <p className="text-lg italic" style={{ color: colors.amber, fontFamily: "'Playfair Display', Georgia, serif" }}>
                        &quot;Eu sou o Senhor que te tirou do Egito&quot;
                    </p>
                    <p className="text-sm mt-2" style={{ color: colors.textMedium }}>
                        Abertura dos Dez Mandamentos. Não é declaração filosófica — é lembrete de algo que aconteceu.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
