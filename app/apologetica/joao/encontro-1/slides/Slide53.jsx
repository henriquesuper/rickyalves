'use client';
import { ParchmentWrapper, SectionLabel, HonestyCard, colors, fonts } from './shared';

export function Slide53({ slideIndex = 52 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-20">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        Princípio do estudo
                    </SectionLabel>
                </div>

                <HonestyCard delay={0.6}>
                    <p
                        className="mb-4"
                        style={{
                            fontFamily: fonts.display,
                            fontStyle: 'italic',
                            fontSize: '1.1rem',
                            lineHeight: 1.55,
                            color: colors.inkDeep,
                            fontWeight: 500,
                        }}
                    >
                        A ira só depois que o amor estiver seguro.
                    </p>
                    <p style={{ lineHeight: 1.6 }}>
                        Para quem cresceu com um Deus-punidor, "a ira de Deus"
                        nunca é só doutrina a examinar — é fio desencapado de
                        uma ferida. E é exatamente essa imagem que João, em
                        todo o capítulo 3, está desfazendo.
                    </p>
                    <p className="mt-4" style={{ lineHeight: 1.6 }}>
                        A conversa sobre a ira pertence lá na frente — na cruz,
                        em João 19. Só então "ira" pode ser ouvida como a sombra
                        de um amor que não força. Antes do amor estar seguro,
                        falar de ira inverte a ordem que o próprio texto pede.
                    </p>
                </HonestyCard>
            </div>
        </ParchmentWrapper>
    );
}
