'use client';
import { LibraryWrapper, GenreCard, colors } from './shared';

export function Slide32() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <GenreCard
                    shelfNumber={7}
                    title="Evangelho"
                    icon="✍️"
                    accentColor={colors.genreBlue}
                    delay={0.2}
                >
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        Uma espécie de{' '}
                        <span style={{ color: colors.genreBlue, fontWeight: 600 }}>biografia teológica</span>.
                        Seleciona episódios da vida de Jesus para fazer uma{' '}
                        <span style={{ color: colors.genreBlue, fontWeight: 600 }}>proclamação teológica</span> —
                        não registro exaustivo nem ata judicial.
                    </p>

                    <div
                        className="p-4 rounded-lg mb-4"
                        style={{
                            background: `${colors.inkGold}10`,
                            border: `1px solid ${colors.inkGold}25`,
                        }}
                    >
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            Cada evangelista é{' '}
                            <span style={{ color: colors.inkGold, fontWeight: 600 }}>seletivo</span> e{' '}
                            <span style={{ color: colors.inkGold, fontWeight: 600 }}>teologicamente intencional</span>.
                            As diferenças entre Mateus, Marcos, Lucas e João{' '}
                            <em>não são erros</em> — são ênfases.
                        </p>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.genreBlue }}>
                            Exemplos
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            Mateus · Marcos · Lucas · João (os quatro evangelhos canônicos)
                        </p>
                    </div>
                </GenreCard>
            </div>
        </LibraryWrapper>
    );
}
