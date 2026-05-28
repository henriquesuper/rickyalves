'use client';
import { ParchmentWrapper, SectionLabel, RomanNumeral, BiblicalQuote, colors } from './shared';

export function Slide04({ slideIndex = 3 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-20 flex flex-col items-center text-center">
                <SectionLabel align="center" delay={0.2}>
                    Âncora I
                </SectionLabel>

                <div className="mt-4 mb-10">
                    <RomanNumeral value="I" size="xl" delay={0.5} color={colors.lapis} opacity={0.8} weight={300} />
                </div>

                <BiblicalQuote
                    reference="João 1.1—2"
                    lines={[
                        'No princípio era o Verbo,',
                        'e o Verbo estava com Deus,',
                        'e o Verbo era Deus.',
                    ]}
                    emphasis={['No princípio', 'Verbo', 'Deus']}
                    tone="lapis"
                    referenceTone="gold"
                    size="xl"
                    delay={1.4}
                />
            </div>
        </ParchmentWrapper>
    );
}
