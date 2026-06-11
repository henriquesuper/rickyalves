'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, IntertextPair, ProseBlock, colors, fonts } from './shared';

export function Slide90({ slideIndex = 89 }) {
    const leftText = {
        ref: "Leitura Eucarística",
        refColor: colors.wine,
        text: "A linguagem de comer a carne e beber o sangue aponta diretamente para a celebração litúrgica da Ceia do Senhor. João escreve para uma comunidade que já vive e celebra esse sacramento."
    };

    const rightText = {
        ref: "Leitura Cristológica",
        refColor: colors.gold,
        text: "Uma metáfora profunda para a fé assimilativa. Conforme o paralelismo de 6.35, 'vir a Ele' equivale a comer e 'crer nEle' equivale a beber. Significa interiorizar Cristo integralmente."
    };

    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-10 flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.gold}>
                    A Linguagem Dura
                </SectionLabel>

                <motion.h2 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-2xl md:text-3xl font-serif text-center mt-3 mb-4"
                    style={{ color: colors.inkDeep, fontFamily: fonts.display }}
                >
                    &quot;Como pode este dar-nos a comer a sua carne?&quot; (6.52)
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 0.7 }}
                    className="text-xs font-mono tracking-widest opacity-60 mb-10 text-center"
                    style={{ color: colors.inkMuted }}
                >
                    Jesus intensifica a linguagem usando o termo trōgein (mastigar/roer) em vez do comum phagein (comer)
                </motion.p>

                <div className="my-4 w-full">
                    <IntertextPair 
                        left={leftText}
                        right={rightText}
                        accentColor={colors.gold}
                        connectorDelay={1.2}
                        delay={0.8}
                    />
                </div>

                <div className="mt-8">
                    <ProseBlock 
                        delay={2.4}
                        align="center"
                        lines="Como padrão da honestidade acadêmica do curso, as duas interpretações coexistem de forma complementar no texto de João, enriquecendo-se mutuamente."
                        size="sm"
                        color={colors.inkSoft}
                    />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
