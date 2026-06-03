'use client';
import { StageWrapper, Kicker, DisplayTitle, WhyLadder, Reveal, colors } from './shared';

export function Slide19({ step = 99 }) {
    return (
        <StageWrapper>
            <div className="max-w-2xl mx-auto px-6 md:px-10 py-12 flex flex-col items-center gap-8">
                <div className="text-center">
                    <Kicker>IV · Porquê</Kicker>
                    <div className="mt-4">
                        <DisplayTitle size="md">5 vezes &ldquo;por quê?&rdquo;</DisplayTitle>
                    </div>
                </div>
                <WhyLadder
                    step={step}
                    startAt={1}
                    top="Máquina parada"
                    rungs={[
                        'Fusível queimado',
                        'Eixo sem lubrificação',
                        'Bomba de óleo falhando',
                        'Bomba entupida',
                        'Faltava um filtro',
                    ]}
                />
                <Reveal step={step} at={6}>
                    <p className="text-center text-base md:text-lg" style={{ color: colors.amberSoft }}>
                        Fusível resolve por um dia. Filtro resolve pra sempre.
                    </p>
                </Reveal>
            </div>
        </StageWrapper>
    );
}
Slide19.steps = 7;
