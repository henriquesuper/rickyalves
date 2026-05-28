'use client';
import { ParchmentWrapper, SectionLabel, HonestyCard, colors, fonts } from './shared';

export function Slide26({ slideIndex = 25 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-20">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        Aparente contradição — Elias
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
                        João Batista nega ser Elias (Jo 1.21). Mas Jesus depois diz
                        que ele é "o Elias que havia de vir" (Mt 11.14).
                    </p>
                    <p style={{ lineHeight: 1.6 }}>
                        Não é contradição. A delegação perguntava se ele era Elias
                        <em> literalmente</em> — de volta dos céus. Ele nega isso corretamente.
                        Jesus afirma que João cumpre o <em>papel</em> de Elias, vindo
                        "no espírito e poder de Elias" (Lc 1.17).
                    </p>
                    <p className="mt-4" style={{ lineHeight: 1.6 }}>
                        O grego não esconde a distinção. A tensão aparente desaparece
                        quando se separa "ser Elias" de "cumprir o papel de Elias".
                    </p>
                </HonestyCard>
            </div>
        </ParchmentWrapper>
    );
}
