'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, EvidenceCard, colors } from './shared';

export function Slide24() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    MACABEUS → JESUS: A CONEXÃO
                </motion.h2>
                <EvidenceCard delay={0.4} icon="🕎" variant="confirmed">
                    <p className="text-base leading-relaxed" style={{ color: colors.textLight }}>
                        <span style={{ color: colors.amber, fontWeight: 'bold' }}>João 10:22</span> — Jesus no Templo durante a Festa da Dedicação (Hanukkah). Perguntam: <span style={{ fontStyle: 'italic' }}>&quot;Se tu és o Cristo, dize-nos abertamente.&quot;</span>
                    </p>
                    <p className="text-sm mt-2 font-bold" style={{ color: colors.stampDebate }}>A pergunta carrega 200 anos de esperança política.</p>
                </EvidenceCard>
                <EvidenceCard delay={0.7} icon="👑" className="mt-4">
                    <p className="text-base leading-relaxed" style={{ color: colors.textLight }}>
                        Os Macabeus criaram uma dinastia (<span style={{ color: colors.amber }}>Hasmoneus</span>) — reis e sacerdotes ao mesmo tempo, sem legitimidade para nenhum dos dois papéis.
                    </p>
                </EvidenceCard>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-6 p-5 rounded-xl text-center" style={{ background: `${colors.mapBlue}15`, border: `1px solid ${colors.mapBlue}40` }}>
                    <p className="text-lg" style={{ color: colors.textLight }}>Isso gerou expectativas messiânicas muito específicas:</p>
                    <p className="text-xl font-bold mt-2" style={{ color: colors.amber }}>um rei davídico legítimo que expulsasse o opressor.</p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
