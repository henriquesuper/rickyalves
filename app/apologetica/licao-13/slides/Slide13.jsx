'use client';
import { LibraryWrapper, FocusHeader } from './shared';

export function Slide13() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <FocusHeader
                    title="O ACERVO"
                    subtitle="Tour pelas estantes — 9 gêneros, 4 pontos em cada"
                    icon="🗂️"
                    magnification="O que é · exemplos · regras · armadilha"
                />
            </div>
        </LibraryWrapper>
    );
}
