'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, ProseBlock, colors } from './shared';

export function Slide80({ slideIndex = 79 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-16 text-center flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.wine}>
                    A Finalidade das Escrituras
                </SectionLabel>

                <div className="my-6 w-full">
                    <BiblicalQuote 
                        reference="João 5.39–40"
                        lines={[
                            "Examinais as Escrituras, porque julgais ter nelas a vida eterna, e são elas mesmas que testificam de mim;",
                            "contudo, não quereis vir a mim para terdes vida."
                        ]}
                        emphasis={["não quereis vir a mim"]}
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
                            "É possível conhecer e estudar minuciosamente o texto sagrado, decorar as regras e, ainda assim, errar completamente o alvo.",
                            "",
                            "As Escrituras não são o destino final, mas a janela pela qual enxergamos a revelação de Deus. Elas cumprem seu papel apenas quando nos conduzem à comunhão viva com o Filho.",
                            "",
                            "A erudição bíblica sem o encontro pessoal é um caminho estéril."
                        ]}
                        size="sm"
                        color={colors.inkBody}
                    />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
