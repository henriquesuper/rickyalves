'use client';
import { StageWrapper, Kicker, DisplayTitle, Reveal, colors, fonts } from './shared';

export function Slide07({ step = 99 }) {
    return (
        <StageWrapper>
            <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 flex flex-col items-center gap-10 text-center">
                <Kicker color="#F07A71">I · Pausa</Kicker>
                <DisplayTitle size="xl" weight={700}>Resolver bem<br />o problema errado</DisplayTitle>
                <span style={{ fontFamily: fonts.mono, fontSize: '0.72rem', color: colors.textFaint, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                    o erro do tipo III
                </span>
                <Reveal step={step} at={1}>
                    <p className="text-2xl md:text-4xl" style={{ color: colors.amber, fontFamily: fonts.display, fontStyle: 'italic', fontWeight: 600 }}>
                        Agir rápido ≠ agir certo.
                    </p>
                </Reveal>
            </div>
        </StageWrapper>
    );
}
Slide07.steps = 2;
