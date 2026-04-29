'use client';
import { LibraryWrapper, GenreCard, ContractCard, colors } from './shared';

export function Slide21() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-4">
                <GenreCard
                    shelfNumber={4}
                    title="Literatura de sabedoria"
                    icon="🪶"
                    accentColor={colors.genreSea}
                    delay={0.2}
                >
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        Reflexão experiencial sobre a vida, a ordem do mundo, o sentido, o sofrimento,
                        a justiça. Não promete revelação direta — promete{' '}
                        <span style={{ color: colors.genreSea, fontWeight: 600 }}>sabedoria acumulada</span> e{' '}
                        <span style={{ color: colors.genreSea, fontWeight: 600 }}>questionamento honesto</span>.
                    </p>

                    <div className="mb-4">
                        <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.genreSea }}>
                            Exemplos
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            Provérbios · Jó · Eclesiastes · Cântico dos Cânticos · Sl 1, 37, 73
                        </p>
                    </div>
                </GenreCard>

                <ContractCard
                    accentColor={colors.genreSea}
                    expect={[
                        'Princípios observacionais, não fórmulas mecânicas',
                        'Exploração honesta, mesmo do cético',
                        'Convivência entre a regra e a exceção no mesmo cânon',
                    ]}
                    dontExpect={[
                        'Promessas contratuais com Deus',
                        'Respostas fechadas para todo sofrimento',
                    ]}
                    delay={0.7}
                />
            </div>
        </LibraryWrapper>
    );
}
