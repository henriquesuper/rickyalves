'use client';
import { ParchmentWrapper, SectionLabel, RomanNumeral, BiblicalQuote, colors } from './shared';

export function Slide17({ slideIndex = 16 }) {
    return (
        <ParchmentWrapper deepGradient>
            <div className="w-full max-w-4xl mx-auto px-8 py-20 flex flex-col items-center text-center">
                <SectionLabel align="center" delay={0.2}>
                    Âncora III · o centro
                </SectionLabel>

                <div className="mt-4 mb-10">
                    <RomanNumeral value="III" size="xl" delay={0.5} color={colors.gold} opacity={0.85} weight={300} />
                </div>

                <BiblicalQuote
                    reference="João 1.14"
                    lines={[
                        'E o Verbo se fez carne',
                        'e habitou entre nós,',
                        'e vimos a sua glória.',
                    ]}
                    emphasis={['carne', 'habitou', 'glória']}
                    tone="wine"
                    referenceTone="gold"
                    size="xxl"
                    delay={1.4}
                />
            </div>
        </ParchmentWrapper>
    );
}
