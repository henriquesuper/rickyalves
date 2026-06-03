'use client';
import { StageWrapper, Kicker, QuestionCard } from './shared';

export function Slide22({ step = 99 }) {
    return (
        <StageWrapper>
            <div className="max-w-3xl mx-auto px-6 md:px-10 py-20 flex flex-col items-center gap-12">
                <Kicker>IV · Porquê · para a turma</Kicker>
                <QuestionCard step={step} at={1}>
                    Qual problema volta sempre no seu trabalho? Qual a causa raiz de verdade?
                </QuestionCard>
            </div>
        </StageWrapper>
    );
}
Slide22.steps = 2;
