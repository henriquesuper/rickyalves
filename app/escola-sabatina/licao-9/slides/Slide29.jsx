'use client';
import { ParchmentWrapper, MovementOpener, colors } from './shared';

export function Slide29() {
    return (
        <ParchmentWrapper deepGradient>
            <div className="px-8 py-20 w-full flex items-center justify-center">
                <MovementOpener
                    roman="V"
                    title="O Tribunal"
                    subtitle="Em que você vai confiar?"
                    accent={colors.gold}
                    delay={0.3}
                />
            </div>
        </ParchmentWrapper>
    );
}
