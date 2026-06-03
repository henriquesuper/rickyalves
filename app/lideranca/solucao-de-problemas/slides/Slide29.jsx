'use client';
import { StageWrapper, Kicker, DisplayTitle, ContrastPair } from './shared';

export function Slide29({ step = 99 }) {
    return (
        <StageWrapper>
            <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 flex flex-col items-center gap-12 text-center">
                <div>
                    <Kicker>VI · Prevenir</Kicker>
                    <div className="mt-5">
                        <DisplayTitle size="lg">Dois consertos, não um</DisplayTitle>
                    </div>
                </div>
                <div className="w-full">
                    <ContrastPair
                        step={step}
                        leftAt={0}
                        rightAt={1}
                        left={{ kicker: 'Hoje', title: 'Incidente', text: 'O cliente da sua frente, agora.', tone: 'muted' }}
                        right={{ kicker: 'Sempre', title: 'Sistema', text: 'O que faz o próximo aparecer.', tone: 'amber' }}
                    />
                </div>
            </div>
        </StageWrapper>
    );
}
Slide29.steps = 2;
