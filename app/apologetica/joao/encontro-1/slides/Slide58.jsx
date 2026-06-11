'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, ProseBlock, colors, fonts } from './shared';

export function Slide58({ slideIndex = 57 }) {
    const comparisons = [
        { label: "Categoria", left: "Nicodemos (João 3)", right: "A Samaritana (João 4)", highlight: true },
        { label: "Gênero", left: "Homem", right: "Mulher" },
        { label: "Identidade", left: "Judeu, mestre de Israel", right: "Samaritana, sem nome" },
        { label: "Iniciativa", left: "Vem a Jesus de noite", right: "Jesus vem a ela ao meio-dia" },
        { label: "Posição social", left: "Religioso de dentro", right: "Marginalizada de fora" },
        { label: "Desfecho", left: "Sai em silêncio, hesitando", right: "Sai correndo, anunciando", highlight: true }
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
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-10 flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.lapisSoft}>
                    Contraste Literário
                </SectionLabel>

                <motion.h2 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-2xl md:text-3xl font-serif text-center mt-3 mb-8"
                    style={{ color: colors.inkDeep, fontFamily: fonts.display }}
                >
                    Duas conversas, um evangelho
                </motion.h2>

                <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="w-full border border-dashed border-[#8B7355]40 rounded-sm p-4 md:p-6 mb-8"
                    style={{ background: `${colors.parchmentDeep}55` }}
                >
                    {comparisons.map((row, idx) => (
                        <motion.div 
                            key={idx} 
                            variants={item}
                            className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr_2fr] gap-2 md:gap-4 py-3 border-b border-dashed border-[#8B7355]30 last:border-0"
                            style={{
                                color: row.highlight ? colors.wine : colors.inkBody,
                                fontWeight: row.highlight ? 600 : 400
                            }}
                        >
                            <span className="text-[10px] md:text-xs uppercase tracking-wider font-mono opacity-60 self-center">
                                {row.label}
                            </span>
                            <span className="text-sm md:text-base italic font-serif md:text-right border-l-2 md:border-l-0 md:border-r border-[#8B7355]20 pl-2 md:pl-0 md:pr-4">
                                {row.left}
                            </span>
                            <span className="text-sm md:text-base italic font-serif pl-2 md:pl-4" style={{ color: row.highlight ? colors.lapisSoft : 'inherit' }}>
                                {row.right}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                <ProseBlock 
                    delay={4.2}
                    align="center"
                    lines="João colocou as duas cenas lado a lado de propósito. O evangelho não tem porta de serviço."
                    size="sm"
                    color={colors.inkSoft}
                />
            </div>
        </ParchmentWrapper>
    );
}
