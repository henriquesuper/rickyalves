'use client';
import { ParchmentWrapper, SectionLabel, HonestyCard, colors, fonts } from './shared';

export function Slide16({ slideIndex = 15 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-20">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        O preço da solução
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
                        A encarnação paga um preço caro por essa solução.
                    </p>
                    <p style={{ lineHeight: 1.6 }}>
                        Para a mente grega, a ideia de que o divino assumisse carne —
                        com a mutabilidade, o sofrimento e a morte que a carne implica —
                        era escândalo, quase obscenidade. João sabe disso e diz mesmo assim.
                    </p>
                    <p className="mt-4" style={{ lineHeight: 1.6 }}>
                        Não é uma saída barata. É uma solução elegante que custa caro
                        em plausibilidade-para-gregos. Reconhecer o custo é o que separa
                        apologética honesta de propaganda.
                    </p>
                </HonestyCard>
            </div>
        </ParchmentWrapper>
    );
}
