'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

export function Slide34() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-6xl mb-6">🔄</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl md:text-4xl font-bold mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>ONDE PARAMOS</motion.h2>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg mb-4" style={{ color: colors.textLight }}>Na 10A vimos o mundo que <span style={{ color: colors.amber, fontWeight: 'bold' }}>produziu</span> Jesus — séculos de expectativa, alianças, impérios, e o período intertestamentário.</motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-lg mb-6" style={{ color: colors.textLight }}>Hoje vamos ver o mundo que Jesus <span style={{ color: colors.mapBlue, fontWeight: 'bold' }}>encontrou</span> e que os apóstolos <span style={{ color: colors.mapBlue, fontWeight: 'bold' }}>navegaram</span>.</motion.p>
                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.9 }} className="h-px max-w-sm mx-auto mb-6" style={{ background: `linear-gradient(to right, transparent, ${colors.mapBlue}, transparent)` }} />
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="text-base italic" style={{ color: colors.textMuted }}>Uma coisa é saber que Roma governava. Outra é entender o que significava viver sob Roma no dia a dia.</motion.p>
            </div>
        </SlideWrapper>
    );
}
