'use client';
import { StageWrapper, Kicker, DisplayTitle, Bullets, Reveal, colors, fonts } from './shared';

export function Slide24({ step = 99 }) {
    return (
        <StageWrapper>
            <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 flex flex-col items-center gap-10 text-center">
                <div>
                    <Kicker>V · Plano</Kicker>
                    <div className="mt-5">
                        <DisplayTitle size="md">Nunca só uma opção</DisplayTitle>
                    </div>
                </div>
                <Bullets
                    size="lg"
                    items={[
                        'A · tirar a cobrança agora',
                        'B · 24h para conferir a vistoria',
                        'C · mostrar a foto da entrega',
                    ]}
                />
                <Reveal step={step} at={1}>
                    <p className="text-2xl md:text-3xl" style={{ color: colors.amber, fontFamily: fonts.display, fontStyle: 'italic', fontWeight: 600 }}>
                        Quem escolhe não briga.
                    </p>
                </Reveal>
            </div>
        </StageWrapper>
    );
}
Slide24.steps = 2;
