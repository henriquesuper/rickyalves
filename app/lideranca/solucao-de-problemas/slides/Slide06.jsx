'use client';
import { StageWrapper, Kicker, DisplayTitle, ContrastPair } from './shared';

export function Slide06({ step = 99 }) {
    return (
        <StageWrapper tone="alert">
            <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 flex flex-col items-center gap-12 text-center">
                <div>
                    <Kicker color="#F07A71">I · Pausa</Kicker>
                    <div className="mt-5">
                        <DisplayTitle size="lg">Lutar ou fugir</DisplayTitle>
                    </div>
                </div>
                <div className="w-full">
                    <ContrastPair
                        step={step}
                        leftAt={0}
                        rightAt={1}
                        left={{ kicker: 'O instinto', title: 'Reagir', text: 'Revida ou foge. Rápido — e quase sempre errado.', tone: 'red' }}
                        right={{ kicker: 'O treino', title: 'Responder', text: 'Um intervalo entre o gatilho e a reação.', tone: 'teal' }}
                    />
                </div>
            </div>
        </StageWrapper>
    );
}
Slide06.steps = 2;
