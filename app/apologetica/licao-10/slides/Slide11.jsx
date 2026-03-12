'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, EvidenceCard, colors } from './shared';

export function Slide11() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="text-6xl text-center mb-4">⚔️</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    CANAÃ — A TERRA DISPUTADA
                </motion.h2>

                <EvidenceCard delay={0.5} icon="🏠">
                    <p className="text-base leading-relaxed" style={{ color: colors.textLight }}>
                        Não era vazia. Tinha povos com religiões próprias — culto a <span style={{ color: colors.amber, fontWeight: 'bold' }}>Baal</span> (fertilidade, tempestades) e <span style={{ color: colors.amber, fontWeight: 'bold' }}>Asherá</span>.
                    </p>
                </EvidenceCard>

                <EvidenceCard delay={0.7} icon="🔄" className="mt-4">
                    <p className="text-base leading-relaxed" style={{ color: colors.textLight }}>
                        O conflito no AT não é &quot;Israel vs. pagãos&quot; no sentido simplista. É Israel sendo <span style={{ color: colors.stampDebate }}>constantemente atraído</span> pela religião dos vizinhos.
                    </p>
                </EvidenceCard>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-8 p-5 rounded-xl text-center"
                    style={{ background: `${colors.stampDebate}15`, border: `1px solid ${colors.stampDebate}40` }}
                >
                    <p className="text-lg italic" style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}>
                        Os profetas dizem, basicamente: &quot;Vocês estão trocando o Deus que os libertou por deuses que exigem sacrifício de crianças.&quot;
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
