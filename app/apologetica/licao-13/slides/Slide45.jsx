'use client';
import { LibraryWrapper, FocusHeader } from './shared';

export function Slide45() {
    return (
        <LibraryWrapper stratum="mesa-jo" withCandle>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <FocusHeader
                    title="ESTUDO DE CASO: JÓ"
                    subtitle="Um livro inteiro, três gêneros, uma pergunta aberta"
                    icon="🪔"
                    magnification="Mesa Central — onde a aula converge"
                />
            </div>
        </LibraryWrapper>
    );
}
