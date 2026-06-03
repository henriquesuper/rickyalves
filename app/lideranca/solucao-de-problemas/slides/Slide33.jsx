'use client';
import { StageWrapper, Kicker, DisplayTitle, Reveal, AmbientGlow, colors, fonts } from './shared';

export function Slide33({ step = 99 }) {
    return (
        <StageWrapper tone="accent">
            <div className="relative max-w-3xl mx-auto px-6 md:px-10 py-16 flex flex-col items-center gap-10 text-center">
                <AmbientGlow color={colors.amber} size={560} intensity={0.16} />
                <div className="relative" style={{ zIndex: 1 }}>
                    <Kicker>Fecho</Kicker>
                    <div className="mt-5">
                        <DisplayTitle size="lg">O mesmo método, em tudo</DisplayTitle>
                    </div>
                    <p className="mt-5 text-lg md:text-xl" style={{ color: colors.textMuted, fontFamily: fonts.body }}>
                        Em casa, no dinheiro, na saúde.
                    </p>
                </div>
                <Reveal step={step} at={1} className="relative" style={{ zIndex: 1 }}>
                    <p className="text-2xl md:text-4xl mx-auto" style={{ color: colors.amber, fontFamily: fonts.display, fontStyle: 'italic', fontWeight: 600, lineHeight: 1.3, maxWidth: '42rem' }}>
                        Qual problema você tem tratado pelo sintoma, quando já era hora de descer até a causa?
                    </p>
                </Reveal>
            </div>
        </StageWrapper>
    );
}
Slide33.steps = 2;
