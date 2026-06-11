'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, ProseBlock, colors, fonts } from './shared';

export function Slide93({ slideIndex = 92 }) {
    const medallions = [
        { cap: "João 4", title: "A Água Viva", accent: colors.lapisSoft, text: "Ele dá água viva a quem o mundo havia descartado." },
        { cap: "João 5", title: "A Cura em Betesda", accent: colors.wine, text: "Ele levanta quem desistira de esperar há 38 anos." },
        { cap: "João 6", title: "O Pão da Vida", accent: colors.gold, text: "Ele se entrega como pão alimentador, não como troféu." }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.6
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.9, y: 15 },
        show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-10 flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.gold}>
                    Sintonia Temática
                </SectionLabel>

                <motion.h2 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-2xl md:text-3xl font-serif text-center mt-3 mb-12"
                    style={{ color: colors.inkDeep, fontFamily: fonts.display }}
                >
                    O Arco dos Três Capítulos
                </motion.h2>

                <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12"
                >
                    {medallions.map((med, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className="flex flex-col items-center text-center p-6 border border-dashed border-[#8B7355]30 rounded-sm"
                            style={{ background: `${colors.parchmentDeep}22` }}
                        >
                            {/* Circle Medallion */}
                            <div 
                                className="w-16 h-16 rounded-full flex items-center justify-center border-2 mb-4 transition-transform duration-500 hover:scale-105"
                                style={{ 
                                    borderColor: med.accent, 
                                    boxShadow: `0 0 10px ${med.accent}33`,
                                    background: `${med.accent}12`
                                }}
                            >
                                <span className="text-sm font-mono font-bold" style={{ color: med.accent }}>
                                    {med.cap}
                                </span>
                            </div>

                            <h3 className="text-lg font-serif italic font-semibold mb-2" style={{ color: colors.inkDeep, fontFamily: fonts.display }}>
                                {med.title}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: colors.inkBody, fontFamily: fonts.body }}>
                                {med.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <ProseBlock 
                    delay={2.4}
                    align="center"
                    lines={[
                        "Três cenas marcantes, três revelações profundas da graça e da soberania.",
                        "E, no centro de tudo, uma única e inevitável pergunta: quem é este homem?"
                    ]}
                    size="sm"
                    color={colors.inkDeep}
                />
            </div>
        </ParchmentWrapper>
    );
}
