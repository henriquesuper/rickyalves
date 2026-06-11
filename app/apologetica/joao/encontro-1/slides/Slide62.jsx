'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, ProseBlock, colors, fonts } from './shared';

export function Slide62({ slideIndex = 61 }) {
    const barriers = [
        "Homem não falava com mulher em público",
        "Judeu não pedia nada a samaritano",
        "Rabi não se aproximava de alguém com a história dela"
    ];

    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-16 text-center flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.lapisSoft}>
                    Iniciativa Invertida
                </SectionLabel>

                <motion.h2 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-3xl md:text-4xl font-serif text-center mt-3 mb-4"
                    style={{ color: colors.wine, fontFamily: fonts.display, fontStyle: 'italic' }}
                >
                    &quot;Dá-me de beber&quot;
                </motion.h2>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 0.8 }}
                    className="text-xs uppercase tracking-widest font-mono mb-10"
                    style={{ color: colors.inkMuted }}
                >
                    João 4.7–9
                </motion.p>

                <div className="flex flex-col gap-6 w-full max-w-xl mx-auto mb-12 text-left">
                    {barriers.map((bar, idx) => (
                        <div key={idx} className="relative py-2">
                            <motion.span 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.55 }}
                                transition={{ delay: 1.2 + idx * 0.8, duration: 0.6 }}
                                className="text-base md:text-lg italic block"
                                style={{ fontFamily: fonts.display, color: colors.inkBody }}
                            >
                                {bar}
                            </motion.span>
                            
                            {/* Strikethrough line */}
                            <motion.div 
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1.8 + idx * 0.8, duration: 0.6, ease: "easeOut" }}
                                className="absolute top-1/2 left-0 right-0 h-[1.5px] origin-left"
                                style={{ background: colors.wine, opacity: 0.85 }}
                            />
                        </div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 3.8, duration: 0.8 }}
                    className="text-base md:text-lg italic max-w-xl mx-auto leading-relaxed mt-6"
                    style={{
                        color: colors.inkDeep,
                        fontFamily: fonts.accent,
                    }}
                >
                    Quem pede primeiro é Ele. Três barreiras quebradas em uma única frase. Ele se faz necessitado para abrir a conversa.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
