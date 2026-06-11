'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, ProseBlock, colors, fonts } from './shared';

export function Slide75({ slideIndex = 74 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-14 text-center flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.wine}>
                    O Disparador do Conflito
                </SectionLabel>

                <div className="my-6 w-full">
                    <BiblicalQuote 
                        reference="João 5.9b–10"
                        lines={[
                            "E aquele dia era sábado. Disseram, pois, os judeus ao que fora curado:",
                            "É sábado, não te é lícito levar o leito."
                        ]}
                        tone="wine"
                        align="center"
                        size="md"
                        delay={0.5}
                    />
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    className="max-w-2xl p-6 border border-dashed border-[#4E1F25]40 rounded-sm mb-8"
                    style={{ background: `${colors.wineDeep}0c` }}
                >
                    <p className="text-xl md:text-2xl font-serif italic mb-4" style={{ color: colors.wine, fontFamily: fonts.display }}>
                        A inversão de prioridades
                    </p>
                    <p className="text-sm md:text-base italic leading-relaxed" style={{ color: colors.inkBody, fontFamily: fonts.body }}>
                        Note a reação dos observadores da lei: eles não se aproximam do homem para celebrar a cura de uma paralisia de 38 anos. A primeira e única pergunta que formulam é sobre a infração ritual: <strong>&quot;Quem é o homem que te disse: Toma o teu leito e anda?&quot;</strong> (5.12).
                    </p>
                </motion.div>

                <ProseBlock 
                    delay={2.4}
                    align="center"
                    lines="O milagre é irrelevante para a estrutura institucional; a transgressão do código é insuportável."
                    size="sm"
                    color={colors.inkSoft}
                />
            </div>
        </ParchmentWrapper>
    );
}
