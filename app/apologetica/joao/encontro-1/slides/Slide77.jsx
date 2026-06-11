'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, ProseBlock, colors, fonts } from './shared';

export function Slide77({ slideIndex = 76 }) {
    const steps = [
        { ref: "João 5.19", text: "O Filho nada pode fazer de si mesmo, senão o que vir o Pai fazer; porque tudo quanto ele faz, o Filho o faz igualmente." },
        { ref: "João 5.22", text: "E o Pai a ninguém julga, mas deu ao Filho todo o julgamento." },
        { ref: "João 5.23", text: "Para que todos honrem o Filho, como honram o Pai. Quem não honra o Filho, não honra o Pai que o enviou." }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.8
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-10 flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.wine}>
                    A Escada da Paridade
                </SectionLabel>

                <motion.h2 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-2xl md:text-3xl font-serif text-center mt-3 mb-10"
                    style={{ color: colors.inkDeep, fontFamily: fonts.display }}
                >
                    A dependência que expressa igualdade
                </motion.h2>

                <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-6 w-full max-w-2xl relative mb-10"
                >
                    {/* Visual vertical line connecting the stairs */}
                    <div className="absolute left-4 top-4 bottom-4 w-px bg-[#722F37]30" />

                    {steps.map((st, idx) => (
                        <motion.div 
                            key={idx}
                            variants={item}
                            className="relative pl-10"
                            style={{ marginLeft: `${idx * 24}px` }}
                        >
                            {/* Step bullet */}
                            <div 
                                className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full flex items-center justify-center border"
                                style={{ background: colors.parchment, borderColor: colors.wine }}
                            />

                            <span className="text-[10px] tracking-widest font-mono block mb-1 uppercase font-bold" style={{ color: colors.wine }}>
                                {st.ref}
                            </span>
                            <p className="text-sm italic font-serif leading-relaxed" style={{ color: colors.inkBody }}>
                                &ldquo;{st.text}&rdquo;
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <ProseBlock 
                    delay={3.2}
                    align="center"
                    lines="Ou essa paridade absoluta é verdadeira, ou é a maior e mais ultrajante blasfêmia já dita na tradição monoteísta. Não há leitura neutra ou morna para João 5."
                    size="sm"
                    color={colors.inkDeep}
                />
            </div>
        </ParchmentWrapper>
    );
}
