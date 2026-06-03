'use client';
import { StageWrapper, Kicker, DisplayTitle, BigStat, Reveal, colors, fonts } from './shared';

export function Slide16({ step = 99 }) {
    return (
        <StageWrapper>
            <div className="max-w-3xl mx-auto px-6 md:px-10 py-12 flex flex-col items-center gap-10 text-center">
                <div>
                    <Kicker>III · Problema</Kicker>
                    <div className="mt-5">
                        <DisplayTitle size="sm">Se você tem 1 hora</DisplayTitle>
                    </div>
                </div>
                <BigStat value="55 / 5" label="minutos: entender · resolver" />
                <Reveal step={step} at={1}>
                    <p className="text-xl md:text-2xl mx-auto" style={{ color: colors.amberSoft, fontFamily: fonts.display, fontStyle: 'italic', maxWidth: '38rem', lineHeight: 1.3 }}>
                        Um problema bem escrito já está meio resolvido.
                    </p>
                </Reveal>
            </div>
        </StageWrapper>
    );
}
Slide16.steps = 2;
