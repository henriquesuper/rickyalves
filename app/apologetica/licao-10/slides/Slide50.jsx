'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, colors } from './shared';

export function Slide50() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>O MUNDO DE IDEIAS QUE PAULO ENFRENTOU</motion.h2>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-lg mb-6" style={{ color: colors.textLight }}>O Mediterrâneo do séc. I não tinha &quot;vácuo espiritual.&quot; As pessoas já tinham crenças, filosofias e práticas sofisticadas.</motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-xl font-bold mb-4" style={{ color: colors.amber }}>Paulo não chega com algo &quot;novo&quot; num espaço vazio. Ele entra num mercado disputado.</motion.p>
                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8 }} className="h-px max-w-sm mx-auto" style={{ background: `linear-gradient(to right, transparent, ${colors.mapBlue}, transparent)` }} />
            </div>
        </SlideWrapper>
    );
}
