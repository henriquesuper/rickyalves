'use client';
import { StageWrapper, MovementOpener, colors } from './shared';

export function Slide23() {
    return (
        <StageWrapper tone="accent">
            <div className="px-8 py-16 w-full flex items-center justify-center">
                <MovementOpener roman="V" title="Plano" subtitle="Decida e aja" accent={colors.amber} />
            </div>
        </StageWrapper>
    );
}
Slide23.steps = 1;
