'use client';
import { ParchmentWrapper, BiblicalQuote, ProseBlock, colors } from './shared';

export function Slide05() {
    return (
        <ParchmentWrapper>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <BiblicalQuote
                    reference="Isaías 59:2"
                    referenceTone="wine"
                    tone="inkDeep"
                    lines={[
                        'Mas as vossas iniquidades fazem separação',
                        'entre vós e o vosso Deus.',
                    ]}
                    emphasis={['separação']}
                    size="lg"
                    align="center"
                    delay={0.4}
                />

                <div className="mt-14">
                    <ProseBlock
                        align="center"
                        size="md"
                        delay={1.8}
                        maxWidth="34rem"
                        lines={[
                            'Pecado não é só uma falha de comportamento.',
                            { text: 'É separação.', italic: true, color: colors.wine },
                        ]}
                    />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
