'use client';
import { StageWrapper, Kicker, PullQuote, Reveal, colors, fonts } from './shared';

export function Slide31({ step = 99 }) {
    return (
        <StageWrapper tone="accent">
            <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 flex flex-col items-center gap-12 text-center">
                <Kicker>VI · Prevenir</Kicker>
                <PullQuote tone="amber" size="xl">
                    Como faço isso não acontecer de novo?
                </PullQuote>
                <Reveal step={step} at={1}>
                    <p className="text-xl md:text-2xl mx-auto" style={{ color: colors.textHigh, fontFamily: fonts.display, fontStyle: 'italic', maxWidth: '40rem', lineHeight: 1.35 }}>
                        Deixe o processo melhor do que encontrou. É assim que se vira líder.
                    </p>
                </Reveal>
            </div>
        </StageWrapper>
    );
}
Slide31.steps = 2;
