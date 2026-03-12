'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, colors } from './shared';

export function Slide41() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-6xl text-center mb-4">💰</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>POR QUE COBRADORES DE IMPOSTOS ERAM ODIADOS</motion.h2>
                <DossierCard delay={0.5} status="debate">
                    <p className="text-base leading-relaxed mb-3" style={{ color: colors.textLight }}>Roma terceirizava a cobrança. Os publicanos compravam o direito de cobrar, pagavam antecipadamente, e ficavam com o excedente. O sistema incentivava <span style={{ color: colors.stampDebate, fontWeight: 'bold' }}>extorsão</span>.</p>
                    <p className="text-base" style={{ color: colors.textLight }}>Mas além disso: um judeu cobrando impostos para Roma era visto como <span style={{ color: colors.stampDebate, fontWeight: 'bold' }}>traidor nacional</span>.</p>
                </DossierCard>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-6 p-5 rounded-xl text-center" style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}30` }}>
                    <p className="text-lg" style={{ color: colors.textLight }}>Quando Jesus come com publicanos, não é que ele come com &quot;pessoas ruins&quot; num sentido vago. Ele está jantando com <span style={{ color: colors.amber, fontWeight: 'bold' }}>colaboracionistas da ocupação</span>.</p>
                    <p className="text-sm mt-2 italic" style={{ color: colors.textMuted }}>A coragem social desse gesto é difícil de exagerar.</p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
