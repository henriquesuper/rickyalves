'use client';
import { ParchmentWrapper, MovementOpener, colors } from './shared';

export function Slide04() {
    return (
        <ParchmentWrapper wineDark>
            <div className="px-8 py-20 w-full flex items-center justify-center">
                <MovementOpener
                    roman="I"
                    title="O Pecado"
                    subtitle="O diagnóstico que ninguém quer ouvir"
                    accent={colors.wineSoft}
                    dark
                    delay={0.3}
                />
            </div>
        </ParchmentWrapper>
    );
}
