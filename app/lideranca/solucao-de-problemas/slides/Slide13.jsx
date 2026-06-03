'use client';
import { StageWrapper, Kicker, QuestionCard } from './shared';

export function Slide13({ step = 99 }) {
    return (
        <StageWrapper>
            <div className="max-w-3xl mx-auto px-6 md:px-10 py-20 flex flex-col items-center gap-12">
                <Kicker>II · Pessoa · para a turma</Kicker>
                <QuestionCard step={step} at={1}>
                    A pessoa já virou o inimigo na sua cabeça? O que muda quando você fica do lado dela?
                </QuestionCard>
            </div>
        </StageWrapper>
    );
}
Slide13.steps = 2;
