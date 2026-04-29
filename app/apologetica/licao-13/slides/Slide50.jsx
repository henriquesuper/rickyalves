'use client';
import { LibraryWrapper, FocusHeader } from './shared';

export function Slide50() {
    return (
        <LibraryWrapper stratum="bancada">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <FocusHeader
                    title="A PAUSA ANTES DE INTERPRETAR"
                    subtitle="Três textos · três perguntas · três pausas"
                    icon="🔦"
                    magnification="Bancada de Exercícios"
                />
            </div>
        </LibraryWrapper>
    );
}
