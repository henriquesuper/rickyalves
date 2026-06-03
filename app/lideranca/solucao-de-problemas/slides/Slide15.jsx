'use client';
import { StageWrapper, Kicker, DisplayTitle, Iceberg } from './shared';

export function Slide15({ step = 99 }) {
    return (
        <StageWrapper>
            <div className="max-w-3xl mx-auto px-6 md:px-10 py-12 flex flex-col items-center gap-10 text-center">
                <div>
                    <Kicker>III · Problema</Kicker>
                    <div className="mt-5">
                        <DisplayTitle size="md">Doença ou febre?</DisplayTitle>
                    </div>
                </div>
                <Iceberg step={step} at={1} symptom="O barulho" problem="A peça gasta que o causa" />
            </div>
        </StageWrapper>
    );
}
Slide15.steps = 2;
