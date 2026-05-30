'use client';
import { ParchmentWrapper, MovementOpener, TabletsGold, colors } from './shared';

export function Slide09() {
    return (
        <ParchmentWrapper lapisDark>
            <div className="relative px-8 py-20 w-full flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <TabletsGold size={420} delay={1.6} opacity={0.16} />
                </div>
                <div className="relative z-10">
                    <MovementOpener
                        roman="II"
                        title="A Lei"
                        subtitle="O espelho que revela, mas não limpa"
                        accent={colors.goldFaint}
                        dark
                        delay={0.3}
                    />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
