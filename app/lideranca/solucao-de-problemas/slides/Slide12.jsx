'use client';
import { StageWrapper, Kicker, DisplayTitle, ContrastPair } from './shared';

export function Slide12({ step = 99 }) {
    return (
        <StageWrapper>
            <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 flex flex-col items-center gap-12 text-center">
                <div>
                    <Kicker>II · Pessoa</Kicker>
                    <div className="mt-5">
                        <DisplayTitle size="lg">A interpretação mais generosa</DisplayTitle>
                    </div>
                </div>
                <div className="w-full">
                    <ContrastPair
                        step={step}
                        leftAt={0}
                        rightAt={1}
                        left={{ kicker: 'Lente da má-fé', title: '"Está me enrolando"', text: 'Se você errar, o estrago é irreversível.', tone: 'red' }}
                        right={{ kicker: 'Lente generosa', title: 'Boa intenção até prova', text: 'Não é ingenuidade — é estratégia.', tone: 'green' }}
                    />
                </div>
            </div>
        </StageWrapper>
    );
}
Slide12.steps = 2;
