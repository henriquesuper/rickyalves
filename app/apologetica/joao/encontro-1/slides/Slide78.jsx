'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, GreekGloss, colors } from './shared';

export function Slide78({ slideIndex = 77 }) {
    return (
        <ParchmentWrapper dark>
            <div className="w-full max-w-4xl mx-auto px-8 py-16 text-center flex flex-col items-center justify-center">
                <SectionLabel align="center" delay={0.2} color={colors.goldFaint}>
                    A Escatologia Presente
                </SectionLabel>

                <div className="my-8 w-full">
                    <BiblicalQuote 
                        reference="João 5.24"
                        text="Quem ouve a minha palavra e crê naquele que me enviou tem a vida eterna, não entra em juízo, mas passou da morte para a vida."
                        emphasis={["tem a vida eterna", "passou da morte para a vida"]}
                        tone="parchment"
                        align="center"
                        size="md"
                        delay={0.6}
                    />
                </div>

                <div className="mt-4 w-full">
                    <GreekGloss 
                        word="μεταβέβηκεν"
                        transliteration="metabébēken"
                        gloss="&quot;já passou&quot; · cruzou a fronteira de forma definitiva"
                        note="Verbo no tempo perfeito grego, indicando uma ação completada no passado com efeitos permanentes no presente. A transição da morte para a vida não é uma promessa sob condição futura; é um estado de realidade atual e assegurado para quem acolhe o Verbo."
                        tone="gold"
                        delay={1.5}
                        dark
                    />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
