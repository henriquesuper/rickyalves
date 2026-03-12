'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, ScribeWriting, colors } from './shared';

export function Slide60() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>O QUE O CONTEXTO MUDA?</motion.h2>
                <DossierCard delay={0.4} highlight>
                    <ScribeWriting text="Sem contexto, a Bíblia parece um manual. Com contexto, ela vira uma conversa viva em um mundo real." className="text-xl text-center leading-relaxed mb-4" delay={0.6} />
                    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1 }} className="h-px max-w-xs mx-auto my-4" style={{ background: `linear-gradient(to right, transparent, ${colors.amber}60, transparent)` }} />
                    <ScribeWriting text="E uma conversa que continua até hoje." className="text-lg text-center" delay={1.2} />
                </DossierCard>
            </div>
        </SlideWrapper>
    );
}
