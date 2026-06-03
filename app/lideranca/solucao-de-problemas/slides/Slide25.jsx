'use client';
import { StageWrapper, Kicker, DisplayTitle, Doors } from './shared';

export function Slide25({ step = 99 }) {
    return (
        <StageWrapper>
            <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 flex flex-col items-center gap-12 text-center">
                <div>
                    <Kicker>V · Plano</Kicker>
                    <div className="mt-5">
                        <DisplayTitle size="lg">Dá pra voltar atrás?</DisplayTitle>
                    </div>
                </div>
                <div className="w-full">
                    <Doors
                        step={step}
                        leftAt={0}
                        rightAt={1}
                        left={{ arrow: '↔', kicker: 'Duas vias', title: 'Reversível', rule: 'Decida rápido.', tone: 'green' }}
                        right={{ arrow: '→', kicker: 'Uma via', title: 'Irreversível', rule: 'Decida devagar.', tone: 'red' }}
                    />
                </div>
            </div>
        </StageWrapper>
    );
}
Slide25.steps = 2;
