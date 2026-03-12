'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, StampBadge, colors } from './shared';

export function Slide23() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.1 }} className="text-xs uppercase tracking-[0.3em] mb-4 font-mono" style={{ color: colors.textMuted }}>Período Intertestamentário · 4 de 4</motion.p>
                <motion.div initial={{ opacity: 0, scale: 0.8, rotate: -20 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.2, type: 'spring' }} className="text-7xl mb-6">⚔️</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl md:text-4xl font-bold mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    A REVOLTA DOS MACABEUS (167–164 a.C.)
                </motion.h2>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg mb-3" style={{ color: colors.textLight }}>
                    Matatias e seus filhos — especialmente <span style={{ color: colors.amber, fontWeight: 'bold' }}>Judas Macabeu</span> — lideram guerrilha contra o império selêucida.
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-xl font-bold mb-6" style={{ color: colors.stampVerified }}>
                    Vencem. Contra todas as probabilidades.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="p-6 rounded-xl mb-6" style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}30` }}>
                    <p className="text-4xl mb-2">🕎</p>
                    <p className="text-xl font-bold" style={{ color: colors.amber }}>Templo purificado e rededicado em 164 a.C.</p>
                    <p className="text-base mt-2" style={{ color: colors.textMedium }}>O evento celebrado até hoje como <span style={{ color: colors.amber }}>Hanukkah</span>.</p>
                </motion.div>
                <StampBadge type="concluded" delay={1.2} note="Templo restaurado" />
            </div>
        </SlideWrapper>
    );
}
