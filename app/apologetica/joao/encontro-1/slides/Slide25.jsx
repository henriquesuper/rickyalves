'use client';
import { ParchmentWrapper, SectionLabel, ThreeCardsRow, colors } from './shared';

const cards = [
    {
        ref:  'O Messias',
        bg:   colors.gold,
        text: '"Você é o Cristo?" — o Ungido aguardado, da casa de Davi.',
    },
    {
        ref:  'Elias · Ml 4.5',
        bg:   colors.lapis,
        text: 'A expectativa de que Elias voltaria para preparar o caminho do grande dia do Senhor.',
    },
    {
        ref:  'O Profeta · Dt 18.15',
        bg:   colors.wine,
        text: '"Um profeta como Moisés" — figura específica esperada no século I.',
    },
];

export function Slide25({ slideIndex = 24 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-6xl mx-auto px-8 py-16">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        Três expectativas — e ele nega as três
                    </SectionLabel>
                </div>

                <ThreeCardsRow cards={cards} delay={0.7} />
            </div>
        </ParchmentWrapper>
    );
}
