'use client';
import { StageWrapper, Kicker, DisplayTitle, ContrastPair } from './shared';

export function Slide10({ step = 99 }) {
    return (
        <StageWrapper>
            <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 flex flex-col items-center gap-12 text-center">
                <div>
                    <Kicker>II · Pessoa</Kicker>
                    <div className="mt-5">
                        <DisplayTitle size="lg">O problema é o problema</DisplayTitle>
                    </div>
                </div>
                <div className="w-full">
                    <ContrastPair
                        step={step}
                        leftAt={0}
                        rightAt={1}
                        left={{ kicker: 'Briga', title: 'Você ⟷ Pessoa', text: 'Frente a frente, como adversários.', tone: 'red' }}
                        right={{ kicker: 'Time', title: 'Vocês → Problema', text: 'Lado a lado, contra a situação.', tone: 'teal' }}
                    />
                </div>
            </div>
        </StageWrapper>
    );
}
Slide10.steps = 2;
