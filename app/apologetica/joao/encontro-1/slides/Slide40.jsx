'use client';
import { ParchmentWrapper, SectionLabel, HonestyCard, colors, fonts } from './shared';

export function Slide40({ slideIndex = 39 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-20">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        Para a imagem açucarada
                    </SectionLabel>
                </div>

                <HonestyCard delay={0.6}>
                    <p
                        className="mb-4"
                        style={{
                            fontFamily: fonts.display,
                            fontStyle: 'italic',
                            fontSize: '1.05rem',
                            lineHeight: 1.55,
                            color: colors.inkDeep,
                        }}
                    >
                        "Eu achava que Jesus era só amor."
                    </p>
                    <p style={{ lineHeight: 1.6 }}>
                        Aqui Jesus tem clareza moral feroz contra a exploração religiosa.
                        Não há um Jesus pasteurizado. Há um Jesus que ama —
                        e que, por amor, recusa a complacência.
                    </p>
                    <p className="mt-4" style={{ lineHeight: 1.6 }}>
                        A caricatura do "Jesus só amor" cai sozinha — basta o texto
                        falar. O templo limpado é incompatível com complacência.
                    </p>
                </HonestyCard>
            </div>
        </ParchmentWrapper>
    );
}
