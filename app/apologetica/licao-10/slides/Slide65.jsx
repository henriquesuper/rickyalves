'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ScribeWriting, colors } from './shared';

export function Slide65() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center min-h-[60vh]">
                <ScribeWriting text='"Contexto não é luxo acadêmico."' className="text-2xl md:text-4xl leading-relaxed mb-6" delay={0.3} />
                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="h-px w-32 mb-6" style={{ background: `linear-gradient(to right, transparent, ${colors.amber}, transparent)` }} />
                <ScribeWriting text='"É a diferença entre ouvir uma conversa e entender uma conversa."' className="text-xl md:text-2xl leading-relaxed" delay={1} />
            </div>
        </SlideWrapper>
    );
}
