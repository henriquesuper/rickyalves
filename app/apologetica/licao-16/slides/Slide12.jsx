'use client';
import { ParchmentWrapper, QuietTitle, colors } from './shared';

export function Slide12({ slideIndex = 11 }) {
    return (
        <ParchmentWrapper deepGradient>
            <div className="max-w-3xl mx-auto px-8 py-28 flex flex-col items-center justify-center text-center w-full">
                <QuietTitle size="lg" delay={0.9} italic weight={500} color={colors.inkDeep}>
                    O mundo presente
                    <br />
                    não é o mundo
                    <br />
                    como Deus o quis.
                </QuietTitle>
            </div>
        </ParchmentWrapper>
    );
}
