'use client';
import { StageWrapper, MovementOpener, colors } from './shared';

export function Slide18() {
    return (
        <StageWrapper tone="accent">
            <div className="px-8 py-16 w-full flex items-center justify-center">
                <MovementOpener roman="IV" title="Porquê" subtitle="Desça até a causa raiz" accent={colors.amber} />
            </div>
        </StageWrapper>
    );
}
Slide18.steps = 1;
