'use client';
import { LabWrapper, FocusHeader } from './shared';

export function Slide45() {
    return (
        <LabWrapper stratum="advanced-optics">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <FocusHeader
                    title="ÓPTICA AVANÇADA"
                    subtitle="Ferramentas especializadas de interpretação"
                    icon="🔭"
                    magnification="20x"
                />
            </div>
        </LabWrapper>
    );
}
