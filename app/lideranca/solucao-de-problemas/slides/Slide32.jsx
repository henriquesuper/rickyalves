'use client';
import { StageWrapper, Kicker, DisplayTitle, SixPStrip, Reveal, colors, fonts } from './shared';

export function Slide32({ step = 99 }) {
    return (
        <StageWrapper tone="calm">
            <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 flex flex-col items-center gap-10 text-center">
                <div>
                    <Kicker color={colors.tealSoft}>Fecho</Kicker>
                    <div className="mt-5">
                        <DisplayTitle size="md">A mesma fila — agora com método</DisplayTitle>
                    </div>
                </div>
                <SixPStrip step={step} />
                <Reveal step={step} at={1}>
                    <p className="text-3xl md:text-4xl" style={{ color: colors.textHigh, fontFamily: fonts.display, fontStyle: 'italic', fontWeight: 700 }}>
                        Não foi sorte. Foi método.
                    </p>
                </Reveal>
            </div>
        </StageWrapper>
    );
}
Slide32.steps = 2;
