'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, ProseBlock, colors, fonts } from './shared';

export function Slide76({ slideIndex = 75 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-10 flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.wine}>
                    A Reivindicação Divina
                </SectionLabel>

                <div className="my-6 w-full">
                    <BiblicalQuote 
                        reference="João 5.17–18"
                        lines={[
                            "Mas Jesus lhes respondeu: Meu Pai trabalha até agora, e eu trabalho também.",
                            "Por isso, pois, os judeus ainda mais procuravam matá-lo, porque não só quebrantava o sábado, mas também dizia que Deus era seu próprio Pai, fazendo-se igual a Deus."
                        ]}
                        emphasis={["fazendo-se igual a Deus", "Meu Pai trabalha até agora, e eu trabalho também"]}
                        tone="wine"
                        align="center"
                        size="xs"
                        delay={0.5}
                    />
                </div>

                <div className="mt-6">
                    <ProseBlock 
                        delay={1.8}
                        align="center"
                        lines={[
                            "A defesa de Jesus não é casuística. Ele não alega uma exceção humanitária na lei do sábado.",
                            "",
                            "A sua resposta é uma declaração absoluta de identidade: ele opera em perfeita harmonia e paridade com a atividade contínua do Pai no universo.",
                            "",
                            "O sábado aqui não é o tema em debate; é apenas o cenário. O tema central é a reivindicação de Jesus sobre Si mesmo."
                        ]}
                        size="sm"
                        color={colors.inkBody}
                    />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
