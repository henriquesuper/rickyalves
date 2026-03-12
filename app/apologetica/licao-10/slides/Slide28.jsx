'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, EvidenceCard, colors } from './shared';

export function Slide28() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    O BOM SAMARITANO — O QUE VOCÊ NÃO SABIA
                </motion.h2>
                <EvidenceCard delay={0.4} icon="💢" variant="disputed">
                    <p className="text-base leading-relaxed" style={{ color: colors.textLight }}>O ódio entre judeus e samaritanos era <span style={{ fontWeight: 'bold' }}>étnico, religioso, e político</span> — séculos de história.</p>
                </EvidenceCard>
                <EvidenceCard delay={0.6} icon="💣" className="mt-4">
                    <p className="text-base leading-relaxed" style={{ color: colors.textLight }}>Jesus faz o <span style={{ color: colors.amber, fontWeight: 'bold' }}>samaritano ser o herói</span> e o sacerdote e o levita serem os que passam ao largo. Não é &quot;seja gentil.&quot; É <span style={{ color: colors.stampDebate, fontWeight: 'bold' }}>dinamite na hierarquia religiosa</span>.</p>
                </EvidenceCard>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-6 p-5 rounded-xl" style={{ background: `${colors.mapBlue}15`, border: `1px solid ${colors.mapBlue}40` }}>
                    <p className="text-base" style={{ color: colors.textLight }}>O sacerdote e o levita podem ter passado ao largo por razões rituais — tocar um corpo os tornaria impuros.</p>
                    <p className="text-lg font-bold mt-2" style={{ color: colors.amber }}>Jesus coloca pureza ritual contra compaixão humana. A compaixão vence.</p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
