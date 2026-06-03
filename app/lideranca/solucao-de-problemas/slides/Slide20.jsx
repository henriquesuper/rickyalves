'use client';
import { StageWrapper, Kicker, DisplayTitle, WhyLadder, Reveal, colors } from './shared';

export function Slide20({ step = 99 }) {
    return (
        <StageWrapper>
            <div className="max-w-2xl mx-auto px-6 md:px-10 py-12 flex flex-col items-center gap-8">
                <div className="text-center">
                    <Kicker>IV · Porquê</Kicker>
                    <div className="mt-4">
                        <DisplayTitle size="md">Do balcão à causa raiz</DisplayTitle>
                    </div>
                </div>
                <WhyLadder
                    step={step}
                    startAt={1}
                    top="Cliente cobrado por um risco"
                    rungs={[
                        'Risco não registrado na vistoria',
                        'Vistoria feita às pressas',
                        'Atendente sozinho no pico',
                        'Escala não cobre a sexta',
                        'Escala ignora o movimento',
                    ]}
                />
                <Reveal step={step} at={6}>
                    <p className="text-center text-base md:text-lg" style={{ color: colors.amberSoft }}>
                        Problema de processo, quem resolve é quem lidera.
                    </p>
                </Reveal>
            </div>
        </StageWrapper>
    );
}
Slide20.steps = 7;
