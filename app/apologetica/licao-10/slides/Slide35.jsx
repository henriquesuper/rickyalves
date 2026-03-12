'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DarkCaseHeader, colors } from './shared';

export function Slide35() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, type: 'spring' }} className="text-7xl mb-6">🏛️</motion.div>
                <DarkCaseHeader title="PARTE 1" subtitle="O IMPÉRIO ROMANO — A MÁQUINA POR TRÁS DO CENÁRIO" protocol="LIÇÃO 10B" delay={0.4} />
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-lg mt-4" style={{ color: colors.textMedium }}>O NT inteiro acontece dentro do Império Romano.</motion.p>
            </div>
        </SlideWrapper>
    );
}
