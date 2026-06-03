'use client';
import { StageWrapper, Kicker, PullQuote, ContrastPair } from './shared';

export function Slide21({ step = 99 }) {
    return (
        <StageWrapper>
            <div className="max-w-4xl mx-auto px-6 md:px-10 py-14 flex flex-col items-center gap-12 text-center">
                <Kicker>IV · Porquê</Kicker>
                <PullQuote source="W. E. Deming" tone="amber" size="lg">
                    Todo sistema é perfeitamente desenhado para o resultado que dá.
                </PullQuote>
                <div className="w-full">
                    <ContrastPair
                        step={step}
                        leftAt={0}
                        rightAt={1}
                        left={{ kicker: 'Beco sem saída', title: 'Culpar a pessoa', text: 'Cria medo. O problema volta.', tone: 'red' }}
                        right={{ kicker: 'Caminho', title: 'Consertar o sistema', text: 'Faça o cuidado ser fácil.', tone: 'green' }}
                    />
                </div>
            </div>
        </StageWrapper>
    );
}
Slide21.steps = 2;
