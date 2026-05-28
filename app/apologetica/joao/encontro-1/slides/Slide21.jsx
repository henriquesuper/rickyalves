'use client';
import { ParchmentWrapper, SectionLabel, RomanNumeral, BiblicalQuote, colors } from './shared';

export function Slide21({ slideIndex = 20 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-20 flex flex-col items-center text-center">
                <SectionLabel align="center" delay={0.2}>
                    Âncora IV · o fechamento
                </SectionLabel>

                <div className="mt-4 mb-10">
                    <RomanNumeral value="IV" size="xl" delay={0.5} color={colors.gold} opacity={0.85} weight={300} />
                </div>

                <BiblicalQuote
                    reference="João 1.18"
                    lines={[
                        'Ninguém jamais viu a Deus.',
                        'O Filho unigênito,',
                        'que está no seio do Pai,',
                        'esse o tornou conhecido.',
                    ]}
                    emphasis={['Ninguém', 'viu', 'tornou conhecido']}
                    tone="wine"
                    referenceTone="gold"
                    size="lg"
                    delay={1.4}
                />
            </div>
        </ParchmentWrapper>
    );
}
