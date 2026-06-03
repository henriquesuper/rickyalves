'use client';
import { StageWrapper, Kicker, DisplayTitle, ThesisFrames } from './shared';

export function Slide03({ step = 99 }) {
    return (
        <StageWrapper>
            <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 flex flex-col items-center gap-14">
                <div className="text-center">
                    <Kicker>O eixo</Kicker>
                    <div className="mt-5">
                        <DisplayTitle size="md">A aula em 3 frases</DisplayTitle>
                    </div>
                </div>
                <ThesisFrames
                    step={step}
                    startAt={1}
                    items={[
                        { strong: 'Entenda antes de resolver.' },
                        { strong: 'Desça até a causa raiz.' },
                        { strong: 'Faça o problema não voltar.' },
                    ]}
                />
            </div>
        </StageWrapper>
    );
}
Slide03.steps = 4;
