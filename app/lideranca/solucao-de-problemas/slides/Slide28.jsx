'use client';
import { StageWrapper, MovementOpener, colors } from './shared';

export function Slide28() {
    return (
        <StageWrapper tone="accent">
            <div className="px-8 py-16 w-full flex items-center justify-center">
                <MovementOpener roman="VI" title="Prevenir" subtitle="Apagar incêndio é trabalho. Evitar incêndio é liderança." accent={colors.amber} climax />
            </div>
        </StageWrapper>
    );
}
Slide28.steps = 1;
