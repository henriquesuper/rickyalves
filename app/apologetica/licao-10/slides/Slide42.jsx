'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DarkCaseHeader, colors } from './shared';

export function Slide42() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, type: 'spring' }} className="text-7xl mb-6">🕍</motion.div>
                <DarkCaseHeader title="PARTE 2" subtitle="O JUDAÍSMO DO PRIMEIRO SÉCULO — A RELIGIÃO QUE JESUS PRATICAVA" protocol="LIÇÃO 10B" delay={0.4} />
            </div>
        </SlideWrapper>
    );
}
