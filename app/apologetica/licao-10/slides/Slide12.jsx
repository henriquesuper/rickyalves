'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, InvestigationTimeline, colors } from './shared';

export function Slide12() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="text-6xl text-center mb-4">💥</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    ASSÍRIA E BABILÔNIA — AS CATÁSTROFES
                </motion.h2>

                <InvestigationTimeline
                    items={[
                        { label: 'Reino Unido', year: '~1000 a.C.', highlight: false },
                        { label: 'Divisão', year: '922 a.C.', highlight: false },
                        { label: 'Assíria destrói Norte', year: '722 a.C.', highlight: true },
                        { label: 'Babilônia destrói Sul', year: '586 a.C.', highlight: true },
                    ]}
                    delay={0.5}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-10 p-5 rounded-xl text-center"
                    style={{ background: `${colors.mapBlue}15`, border: `1px solid ${colors.mapBlue}40` }}
                >
                    <p className="text-lg" style={{ color: colors.textLight }}>
                        O <span style={{ color: colors.amber, fontWeight: 'bold' }}>Exílio Babilônico</span> é o segundo evento mais importante do AT, depois do Êxodo.
                    </p>
                    <p className="text-sm mt-2" style={{ color: colors.textMedium }}>
                        Quase toda a literatura profética gira em torno dele: antes, durante, ou depois.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
