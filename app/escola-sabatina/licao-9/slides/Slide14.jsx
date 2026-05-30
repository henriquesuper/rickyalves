'use client';
import { ParchmentWrapper, MovementOpener, colors } from './shared';

export function Slide14() {
    return (
        <ParchmentWrapper deepGradient>
            <div className="px-8 py-20 w-full flex items-center justify-center">
                <MovementOpener
                    roman="III"
                    title="O Evangelho"
                    subtitle="O que a lei nunca pôde fazer"
                    accent={colors.gold}
                    delay={0.3}
                />
            </div>
        </ParchmentWrapper>
    );
}
