'use client';
import { StageWrapper, MovementOpener, colors } from './shared';

export function Slide14() {
    return (
        <StageWrapper tone="accent">
            <div className="px-8 py-16 w-full flex items-center justify-center">
                <MovementOpener roman="III" title="Problema" subtitle="Qual é o problema de verdade?" accent={colors.amber} />
            </div>
        </StageWrapper>
    );
}
Slide14.steps = 1;
