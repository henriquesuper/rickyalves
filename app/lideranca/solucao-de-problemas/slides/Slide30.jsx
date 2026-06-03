'use client';
import { StageWrapper, Kicker, DisplayTitle, ContrastPair } from './shared';

export function Slide30({ step = 99 }) {
    return (
        <StageWrapper>
            <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 flex flex-col items-center gap-12 text-center">
                <div>
                    <Kicker>VI · Prevenir</Kicker>
                    <div className="mt-5">
                        <DisplayTitle size="md">Aprendizado, não caça às bruxas</DisplayTitle>
                    </div>
                </div>
                <div className="w-full">
                    <ContrastPair
                        step={step}
                        leftAt={0}
                        rightAt={1}
                        left={{ kicker: '"De quem foi a culpa?"', title: 'Medo', text: 'O erro se esconde — e não se conserta.', tone: 'red' }}
                        right={{ kicker: '"O que deixou acontecer?"', title: 'Sem culpa', text: 'A verdade aparece. O sistema melhora.', tone: 'teal' }}
                    />
                </div>
            </div>
        </StageWrapper>
    );
}
Slide30.steps = 2;
