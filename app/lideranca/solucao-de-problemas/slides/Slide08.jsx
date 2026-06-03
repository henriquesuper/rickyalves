'use client';
import { StageWrapper, Kicker, DisplayTitle, BreatheRing, Reveal, colors, fonts } from './shared';

export function Slide08({ step = 99 }) {
    return (
        <StageWrapper tone="calm">
            <div className="max-w-3xl mx-auto px-6 md:px-10 py-12 flex flex-col items-center gap-10 text-center">
                <div>
                    <Kicker color={colors.tealSoft}>I · Pausa</Kicker>
                    <div className="mt-4">
                        <DisplayTitle size="md">Respira. Observa.</DisplayTitle>
                    </div>
                </div>
                <BreatheRing label="3 segundos" sub="observe antes de agir" color={colors.teal} />
                <Reveal step={step} at={1}>
                    <p className="text-base md:text-lg" style={{ color: colors.tealSoft, fontFamily: fonts.body }}>
                        Vence quem observa melhor — não quem age mais rápido. <span style={{ color: colors.textFaint }}>OODA · John Boyd</span>
                    </p>
                </Reveal>
            </div>
        </StageWrapper>
    );
}
Slide08.steps = 2;
