'use client';
import { StageWrapper, Kicker, DisplayTitle, Bullets, Reveal, colors, fonts } from './shared';

export function Slide11({ step = 99 }) {
    return (
        <StageWrapper>
            <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 flex flex-col items-center gap-10 text-center">
                <div>
                    <Kicker>II · Pessoa</Kicker>
                    <div className="mt-5">
                        <DisplayTitle size="md">Emoção primeiro. Fato depois.</DisplayTitle>
                    </div>
                </div>
                <Bullets
                    size="lg"
                    items={[
                        'Acolha o sentimento.',
                        'Só então explique o fato.',
                    ]}
                />
                <Reveal step={step} at={1}>
                    <p className="text-2xl md:text-3xl mx-auto" style={{ color: colors.amber, fontFamily: fonts.display, fontStyle: 'italic', fontWeight: 600, maxWidth: '36rem', lineHeight: 1.3 }}>
                        &ldquo;Eu entendo. Vamos olhar isso juntos.&rdquo;
                    </p>
                </Reveal>
            </div>
        </StageWrapper>
    );
}
Slide11.steps = 2;
