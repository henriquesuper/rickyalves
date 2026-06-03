'use client';
import { StageWrapper, MovementOpener, colors } from './shared';

export function Slide09() {
    return (
        <StageWrapper tone="accent">
            <div className="px-8 py-16 w-full flex items-center justify-center">
                <MovementOpener roman="II" title="Pessoa" subtitle="Separe a pessoa do problema" accent={colors.amber} />
            </div>
        </StageWrapper>
    );
}
Slide09.steps = 1;
