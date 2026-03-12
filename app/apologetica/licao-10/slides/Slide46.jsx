'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, ImpactNumber, colors } from './shared';

export function Slide46() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>O TEMPLO DESTRUÍDO + O QUE SOBREVIVEU</motion.h2>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-center mb-6">
                    <ImpactNumber number="70 d.C." label="Roma destrói o Templo" delay={0.5} color="#E05555" />
                </motion.div>
                <DossierCard delay={0.8} status="verified">
                    <p className="text-base mb-3" style={{ color: colors.textLight }}>O sistema sacrificial termina. A religião judaica se reorganiza em torno do <span style={{ color: colors.amber, fontWeight: 'bold' }}>estudo da Torah</span> e do <span style={{ color: colors.amber, fontWeight: 'bold' }}>judaísmo rabínico</span>.</p>
                    <p className="text-base" style={{ color: colors.textLight }}>O cristianismo já existia como movimento separado — não foi afetado da mesma forma. Mas o NT foi escrito quando <span style={{ fontWeight: 'bold' }}>o Templo ainda existia</span> ou <span style={{ fontWeight: 'bold' }}>tinha acabado de cair</span>.</p>
                </DossierCard>
            </div>
        </SlideWrapper>
    );
}
