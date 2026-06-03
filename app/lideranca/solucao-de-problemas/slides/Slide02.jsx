'use client';
import { StageWrapper, Kicker, DisplayTitle, Reveal, colors, fonts } from './shared';

export function Slide02({ step = 99 }) {
    return (
        <StageWrapper tone="alert">
            <div className="max-w-3xl mx-auto px-6 md:px-10 py-20 flex flex-col items-center text-center gap-10">
                <Kicker color={colors.redSoft}>Sexta-feira · exit gate</Kicker>
                <DisplayTitle size="xl" weight={700}>São 18h.<br />A fila não anda.</DisplayTitle>
                <Reveal step={step} at={1}>
                    <p className="text-3xl md:text-5xl" style={{ color: colors.amber, fontFamily: fonts.display, fontStyle: 'italic', fontWeight: 600, lineHeight: 1.25 }}>
                        O que você faz nos próximos 90 segundos?
                    </p>
                </Reveal>
            </div>
        </StageWrapper>
    );
}
Slide02.steps = 2;
