'use client';
import { ParchmentWrapper, SectionLabel, ThreeCardsRow, colors } from './shared';

const cards = [
    {
        ref: 'Efésios 6:12',
        bg: colors.lapis,
        text: '"Nossa luta não é contra carne e sangue, mas contra os principados, contra as potestades, contra os dominadores deste mundo tenebroso."',
    },
    {
        ref: 'Romanos 8:18—22',
        bg: colors.gold,
        text: 'A criação inteira "geme em dores de parto" — o universo não é como Deus o quis.',
    },
    {
        ref: 'Apocalipse 12',
        bg: colors.wine,
        text: 'Linguagem apocalíptica de uma guerra celestial cujo desfecho ainda está em curso.',
    },
];

export function Slide11({ slideIndex = 10 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-6xl mx-auto px-8 py-16">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        Não é só Jó
                    </SectionLabel>
                </div>

                <ThreeCardsRow cards={cards} delay={0.7} />
            </div>
        </ParchmentWrapper>
    );
}
