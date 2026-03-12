'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, SuspectCard, colors } from './shared';

export function Slide51() {
    const schools = [
        { name: 'Estoicismo', role: 'Zenão / Sêneca', argument: 'Logos governa tudo. Dever, disciplina, desapego. Quando João escreve "No princípio era o Logos," os gregos ouvem algo familiar (mas com significado diferente).', icon: '🧠' },
        { name: 'Epicurismo', role: 'Epicuro', argument: 'Deuses existem mas não se importam. O objetivo é a tranquilidade (ataraxia). Paulo os encontra em Atos 17:18.', icon: '🌿' },
        { name: 'Cultos de Mistério + Politeísmo Popular', role: 'Tradição popular', argument: 'Deuses locais para cada necessidade. Templos com rituais de iniciação. Em Éfeso: Ártemis. Em Corinto: Afrodite.', icon: '🏛️' },
    ];
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>AS FILOSOFIAS GREGAS + RELIGIÃO POPULAR</motion.h2>
                <div className="space-y-4">
                    {schools.map((s, i) => (<SuspectCard key={i} {...s} delay={0.4 + i * 0.2} />))}
                </div>
            </div>
        </SlideWrapper>
    );
}
