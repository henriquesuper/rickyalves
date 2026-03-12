'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, InvestigationTimeline, colors } from './shared';

export function Slide30() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    CRONOLOGIA: DE ABRAÃO A JESUS
                </motion.h2>
                <InvestigationTimeline
                    items={[
                        { label: 'Abraão', year: '~2000 a.C.', highlight: false },
                        { label: 'Êxodo', year: '~1300 a.C.', highlight: false },
                        { label: 'Davi', year: '~1000 a.C.', highlight: false },
                        { label: 'Exílio', year: '586 a.C.', highlight: true },
                        { label: 'Macabeus', year: '164 a.C.', highlight: false },
                        { label: 'Jesus', year: '~6-4 a.C.', highlight: true },
                    ]}
                    delay={0.4}
                />
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="mt-10 p-4 rounded-xl text-center" style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}30` }}>
                    <p className="text-sm" style={{ color: colors.textLight }}>
                        Sim — <span style={{ color: colors.amber, fontWeight: 'bold' }}>&quot;antes de Cristo&quot; nasceu antes de Cristo</span>. Erro de cálculo do monge Dionísio no séc. VI. 🤷
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
