'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, ProseBlock, colors } from './shared';

export function Slide86({ slideIndex = 85 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-16 text-center flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.gold}>
                    A Virada do Discurso
                </SectionLabel>

                <div className="my-6 w-full">
                    <BiblicalQuote 
                        reference="João 6.26–27"
                        lines={[
                            "Em verdade, em verdade vos digo que me buscais, não pelos sinais que vistes, mas porque comestes do pão e vos saciastes.",
                            "Trabalhai, não pela comida que perece, mas pela comida que permanece para a vida eterna."
                        ]}
                        emphasis={["não pela comida que perece", "pela comida que permanece"]}
                        tone="gold"
                        align="center"
                        size="sm"
                        delay={0.5}
                    />
                </div>

                <div className="mt-8">
                    <ProseBlock 
                        delay={1.8}
                        align="center"
                        lines={[
                            "Jesus confronta diretamente a motivação imediata da multidão que cruzou o lago atrás dele.",
                            "",
                            "O foco muda do milagre (fato bruto) para o significado (sinal espiritual). Eles buscam a repetição da saciedade física; Jesus oferece o alimento que sustenta a alma eternamente."
                        ]}
                        size="sm"
                        color={colors.inkBody}
                    />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
