'use client';
import { ParchmentWrapper, SectionLabel, HonestyCard, colors, fonts } from './shared';

export function Slide06({ slideIndex = 5 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-20">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        Antes de avançar
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
                        Mesmo que você leia Gênesis como narrativa teológica, e não como crônica,
                        o que João afirma sobre quem Jesus é continua de pé.
                    </p>
                    <p style={{ lineHeight: 1.6 }}>
                        João 1.1 não depende da historicidade literal de Gênesis 1. A tese aqui
                        é sobre <em>quem o Verbo é</em>, não sobre como o universo apareceu em sete dias.
                        A pergunta da criação fica em aberto; a afirmação sobre Cristo, não.
                    </p>
                </HonestyCard>
            </div>
        </ParchmentWrapper>
    );
}
