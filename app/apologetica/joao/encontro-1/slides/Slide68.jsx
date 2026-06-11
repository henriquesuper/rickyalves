'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, ProseBlock, colors } from './shared';

export function Slide68({ slideIndex = 67 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-14 text-center flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.lapisSoft}>
                    Desenvolvimento da Fé
                </SectionLabel>

                <div className="my-6 w-full">
                    <BiblicalQuote 
                        reference="João 4.39, 42"
                        lines={[
                            "Muitos samaritanos daquela cidade creram nele, por causa da palavra da mulher...",
                            "e diziam à mulher: Já não é pelo que disseste que nós cremos; porque nós mesmos o temos ouvido, e sabemos que este é verdadeiramente o Salvador do mundo."
                        ]}
                        tone="lapis"
                        align="center"
                        size="sm"
                        delay={0.5}
                    />
                </div>

                <div className="mt-8">
                    <ProseBlock 
                        delay={1.6}
                        align="center"
                        lines={[
                            "O arco da fé em Samaria descreve uma transição essencial:",
                            "",
                            "Primeiro, uma fé por testemunho (de segunda mão) — inspirada pelo impacto da transformação da mulher.",
                            "",
                            "Depois, a transição para uma fé própria (de primeira mão) — alimentada pelo convívio de dois dias e pelo escutar direto da palavra de Jesus.",
                            "",
                            "O testemunho abre as portas; o encontro pessoal estabelece a permanência."
                        ]}
                        size="sm"
                        color={colors.inkBody}
                    />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
