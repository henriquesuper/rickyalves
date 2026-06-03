'use client';
import { StageWrapper, Kicker, DisplayTitle, Reveal, colors, fonts } from './shared';

export function Slide26({ step = 99 }) {
    return (
        <StageWrapper>
            <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 flex flex-col items-center gap-10 text-center">
                <Kicker>V · Plano</Kicker>
                <DisplayTitle size="xl" weight={700}>O ótimo é inimigo do feito</DisplayTitle>
                <p className="text-xl md:text-2xl" style={{ color: colors.textMuted, fontFamily: fonts.display }}>
                    80% agora &gt; 100% tarde demais
                </p>
                <Reveal step={step} at={1}>
                    <p className="text-2xl md:text-3xl" style={{ color: colors.amber, fontFamily: fonts.display, fontStyle: 'italic', fontWeight: 600 }}>
                        A indecisão também é uma decisão.
                    </p>
                </Reveal>
            </div>
        </StageWrapper>
    );
}
Slide26.steps = 2;
