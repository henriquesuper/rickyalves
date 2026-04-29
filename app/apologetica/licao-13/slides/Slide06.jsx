'use client';
import { LibraryWrapper, FocusHeader } from './shared';

export function Slide06() {
    return (
        <LibraryWrapper stratum="vestibulo">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <FocusHeader
                    title="GÊNERO = CONTRATO DE LEITURA"
                    subtitle="Um pacto implícito entre autor e leitor"
                    icon="📜"
                    magnification="A ideia central da aula"
                />
            </div>
        </LibraryWrapper>
    );
}
