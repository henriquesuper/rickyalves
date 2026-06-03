'use client';
import { StageWrapper, Kicker, DisplayTitle, Lead, ThinRule, AmbientGlow, colors } from './shared';

export function Slide01() {
    return (
        <StageWrapper tone="accent">
            <div className="relative max-w-4xl mx-auto px-6 md:px-10 py-16 flex flex-col items-center text-center">
                <AmbientGlow color={colors.amber} size={560} intensity={0.18} />
                <div className="relative" style={{ zIndex: 1 }}>
                    <Kicker>Curso de Liderança</Kicker>
                    <div className="mt-8">
                        <DisplayTitle size="xxl" weight={700}>Solução de Problemas</DisplayTitle>
                    </div>
                    <div className="mt-10 flex justify-center">
                        <ThinRule width="120px" color={colors.amber} />
                    </div>
                    <div className="mt-10">
                        <Lead size="lg">O problema que você vê quase nunca é o problema que você tem</Lead>
                    </div>
                </div>
            </div>
        </StageWrapper>
    );
}
Slide01.steps = 1;
