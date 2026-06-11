'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, ProseBlock, colors } from './shared';

export function Slide91({ slideIndex = 90 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-16 text-center flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.gold}>
                    O Custo do Discurso
                </SectionLabel>

                <div className="my-6 w-full">
                    <BiblicalQuote 
                        reference="João 6.60, 66"
                        lines={[
                            "Muitos, pois, dos seus discípulos, ouvindo isto, disseram: Duro é este discurso; quem o pode ouvir?",
                            "À vista disso, muitos dos seus discípulos voltaram atrás e já não andavam com ele."
                        ]}
                        emphasis={["muitos dos seus discípulos voltaram atrás", "Duro é este discurso"]}
                        tone="wine"
                        align="center"
                        size="md"
                        delay={0.5}
                    />
                </div>

                <div className="mt-8">
                    <ProseBlock 
                        delay={1.8}
                        align="center"
                        lines={[
                            "É a grande crise de popularidade no ministério da Galileia. João registra com brutal honestidade histórica o abandono em massa dos seguidores.",
                            "",
                            "Jesus prefere dispersar a multidão a suavizar a verdade de sua revelação. Ele se recusa a manter adeptos sob o pretexto de ser apenas um distribuidor de milagres temporários.",
                            "",
                            "Uma fé que nada custa e nada exige não foi o que Ele veio estabelecer."
                        ]}
                        size="sm"
                        color={colors.inkBody}
                    />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
