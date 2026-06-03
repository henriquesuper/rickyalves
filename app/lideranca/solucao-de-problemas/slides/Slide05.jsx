'use client';
import { StageWrapper, MovementOpener, colors } from './shared';

export function Slide05() {
    return (
        <StageWrapper tone="accent">
            <div className="px-8 py-16 w-full flex items-center justify-center">
                <MovementOpener roman="I" title="Pausa" subtitle="Não reaja ao sintoma" accent={colors.teal} />
            </div>
        </StageWrapper>
    );
}
Slide05.steps = 1;
