'use client';
import { StageWrapper, Kicker, DisplayTitle, SixPStrip, Reveal, colors } from './shared';

export function Slide04({ step = 99 }) {
    return (
        <StageWrapper tone="accent">
            <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 flex flex-col items-center gap-10">
                <div className="text-center">
                    <Kicker>O método</Kicker>
                    <div className="mt-5">
                        <DisplayTitle size="lg">Os 6 P</DisplayTitle>
                    </div>
                </div>
                <SixPStrip step={step} spotlightAt={1} />
                <Reveal step={step} at={1}>
                    <p className="text-center text-base md:text-lg" style={{ color: colors.amberSoft }}>
                        Os 5 primeiros resolvem hoje. <span style={{ color: colors.textHigh }}>Prevenir é o salto de liderança.</span>
                    </p>
                </Reveal>
            </div>
        </StageWrapper>
    );
}
Slide04.steps = 2;
