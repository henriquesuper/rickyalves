'use client';
import { ParchmentWrapper, SectionLabel, HonestyCard, colors, fonts } from './shared';

export function Slide34({ slideIndex = 33 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-20">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        A objeção do cético — e a resposta honesta
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
                        "Vocês não estão lendo Jesus para dentro do AT depois do fato?"
                    </p>
                    <p style={{ lineHeight: 1.6 }}>
                        Resposta honesta: alguns textos (Gn 3.15, 49.10, Dt 18) já eram
                        lidos messianicamente por judeus <em>antes</em> de Jesus. Outras
                        conexões — cordeiro, serpente, maná — são reconhecimento de padrão
                        feito retrospectivamente pelos autores do NT, à luz da ressurreição.
                    </p>
                    <p className="mt-4" style={{ lineHeight: 1.6 }}>
                        Apresentar como profecia-bala-de-prata superestima a evidência —
                        e custa exatamente a credibilidade do argumento. A leitura
                        honesta é admitir a mistura que de fato é.
                    </p>
                </HonestyCard>
            </div>
        </ParchmentWrapper>
    );
}
