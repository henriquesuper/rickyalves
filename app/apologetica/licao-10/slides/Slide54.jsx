'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DarkCaseHeader, colors } from './shared';

export function Slide54() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, type: 'spring' }} className="text-7xl mb-6">🗺️</motion.div>
                <DarkCaseHeader title="PARTE 4" subtitle="AS CARTAS NO CONTEXTO DAS CIDADES" protocol="LIÇÃO 10B" delay={0.4} />
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-base mt-4" style={{ color: colors.textMedium }}>
                    Paulo não escreveu documentos genéricos. Cada carta era para uma comunidade específica, com problemas específicos, numa cidade específica.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
