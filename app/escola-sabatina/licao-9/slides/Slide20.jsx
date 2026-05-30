'use client';
import { ParchmentWrapper, MovementOpener, colors } from './shared';

export function Slide20() {
    return (
        <ParchmentWrapper wineDark>
            <div className="px-8 py-20 w-full flex items-center justify-center">
                <MovementOpener
                    roman="IV"
                    title="A Polêmica"
                    subtitle="O nó da lição de quinta"
                    accent={colors.goldFaint}
                    dark
                    delay={0.3}
                />
            </div>
        </ParchmentWrapper>
    );
}
