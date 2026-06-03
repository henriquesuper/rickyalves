'use client';
import { StageWrapper, Kicker, DisplayTitle, ContrastPair } from './shared';

export function Slide17({ step = 99 }) {
    return (
        <StageWrapper>
            <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 flex flex-col items-center gap-12 text-center">
                <div>
                    <Kicker>III · Problema</Kicker>
                    <div className="mt-5">
                        <DisplayTitle size="md">O que aconteceu x o que você achou</DisplayTitle>
                    </div>
                </div>
                <div className="w-full">
                    <ContrastPair
                        step={step}
                        leftAt={0}
                        rightAt={1}
                        left={{ kicker: 'Fato', title: 'O que a câmera vê', text: '"Devolveu com o tanque na metade."', tone: 'teal' }}
                        right={{ kicker: 'Interpretação', title: 'A história que eu conto', text: '"Quer me enrolar." — confirme antes de agir.', tone: 'red' }}
                    />
                </div>
            </div>
        </StageWrapper>
    );
}
Slide17.steps = 2;
