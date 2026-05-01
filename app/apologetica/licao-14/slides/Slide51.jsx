'use client';
import { ConvergenceWrapper, FocusHeader } from './shared';

export function Slide51() {
    return (
        <ConvergenceWrapper stratum="porta-joao" withGlow glowIntensity={1.0}>
            <FocusHeader
                title="Por que João, e não Mateus, Marcos ou Lucas?"
                subtitle="A porta de entrada do estudo bíblico que está chegando"
                magnification="Estrato VII — A Porta"
                icon="🚪"
                delay={0.2}
            />
        </ConvergenceWrapper>
    );
}
