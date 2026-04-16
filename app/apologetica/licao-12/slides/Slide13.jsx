'use client';
import { LabWrapper, FocusHeader } from './shared';

export function Slide13() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <FocusHeader
                    title="PRINCÍPIOS FUNDAMENTAIS"
                    subtitle="As lentes que trazem o texto ao foco"
                    icon="🔬"
                    magnification="5x"
                />
            </div>
        </LabWrapper>
    );
}
