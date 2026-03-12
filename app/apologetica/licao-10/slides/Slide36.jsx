'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, EvidenceCard, ImpactNumber, colors } from './shared';

export function Slide36() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    A PAX ROMANA: PAZ PARA QUEM?
                </motion.h2>
                <EvidenceCard delay={0.4} icon="☮️">
                    <p className="text-base" style={{ color: colors.textLight }}>27 a.C. – 180 d.C. Estabilidade real: comércio fluindo, estradas seguras, moeda comum.</p>
                    <p className="text-base mt-2 font-bold" style={{ color: colors.stampDebate }}>Mas era paz imposta pela espada.</p>
                </EvidenceCard>
                <EvidenceCard delay={0.7} icon="✝️" variant="disputed" className="mt-4">
                    <p className="text-base" style={{ color: colors.textLight }}>A <span style={{ color: colors.stampDebate, fontWeight: 'bold' }}>crucificação</span> era o instrumento romano de controle pelo terror — reservada para escravos, traidores, e subversivos políticos. Pública, lenta, projetada para humilhar.</p>
                </EvidenceCard>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-6 p-5 rounded-xl text-center" style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}30` }}>
                    <p className="text-lg italic" style={{ color: colors.amber, fontFamily: "'Playfair Display', Georgia, serif" }}>Quando Paulo prega &quot;Cristo crucificado,&quot; o público romano ouve algo equivalente a &quot;adoramos um condenado à cadeira elétrica.&quot;</p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
