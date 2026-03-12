'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

export function Slide25() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="text-6xl mb-4">🦅</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl md:text-4xl font-bold mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    A CHEGADA DE ROMA (63 a.C.)
                </motion.h2>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg mb-6" style={{ color: colors.textLight }}>
                    O general <span style={{ color: colors.amber, fontWeight: 'bold' }}>Pompeu</span> conquista Jerusalém. A partir daí, os judeus não são mais independentes.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="p-6 rounded-xl mb-6" style={{ background: `${colors.stampDebate}15`, border: `1px solid ${colors.stampDebate}40` }}>
                    <p className="text-base mb-2" style={{ color: colors.textLight }}>Roma instala <span style={{ color: colors.stampDebate, fontWeight: 'bold' }}>Herodes, o Grande</span> — meio judeu, odiado — como &quot;rei dos judeus&quot; em 37 a.C.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="p-6 rounded-xl" style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}30` }}>
                    <p className="text-lg italic" style={{ color: colors.amber, fontFamily: "'Playfair Display', Georgia, serif" }}>
                        &quot;Onde está o que é nascido rei dos judeus?&quot;
                    </p>
                    <p className="text-sm mt-2" style={{ color: colors.textMedium }}>A pergunta dos magos é politicamente explosiva. É ameaça direta ao trono.</p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
