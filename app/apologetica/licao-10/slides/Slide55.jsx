'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, EvidenceCard, colors } from './shared';

export function Slide55() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>CORINTO — A CIDADE QUE EXPLICA 1 CORÍNTIOS</motion.h2>
                <EvidenceCard delay={0.4} icon="🏟️">
                    <p className="text-base" style={{ color: colors.textLight }}>Porto duplo, rica, cosmopolita. Reputação de imoralidade tão grande que &quot;agir como coríntio&quot; virou sinônimo de <span style={{ color: colors.stampDebate }}>depravação</span>.</p>
                </EvidenceCard>
                <EvidenceCard delay={0.6} icon="🏛️" className="mt-4">
                    <p className="text-base" style={{ color: colors.textLight }}>Templo de Afrodite no topo do Acrocorinto. Carne vendida nos mercados vinha de sacrifícios pagãos — é o contexto de <span style={{ color: colors.amber, fontWeight: 'bold' }}>1 Co 8-10</span> (&quot;carne sacrificada a ídolos&quot;).</p>
                </EvidenceCard>
                <EvidenceCard delay={0.8} icon="⚖️" className="mt-4">
                    <p className="text-base" style={{ color: colors.textLight }}>Cultura de litígio e status social extremo — explica <span style={{ color: colors.amber, fontWeight: 'bold' }}>1 Co 6</span> (&quot;processos entre irmãos&quot;) e <span style={{ color: colors.amber, fontWeight: 'bold' }}>1 Co 11</span> (divisões na ceia).</p>
                </EvidenceCard>
            </div>
        </SlideWrapper>
    );
}
