'use client';
import { LibraryWrapper, GenreCard, colors } from './shared';

export function Slide24() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <GenreCard
                    shelfNumber={5}
                    title="Profecia"
                    icon="📣"
                    accentColor={colors.genreWine}
                    delay={0.2}
                >
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        Discurso divinamente autorizado, normalmente dirigido a um povo ou rei{' '}
                        <span style={{ color: colors.genreWine, fontWeight: 600 }}>específico</span>,
                        em um momento histórico <span style={{ color: colors.genreWine, fontWeight: 600 }}>específico</span>.
                    </p>

                    <div
                        className="p-4 rounded-lg mb-4"
                        style={{
                            background: `${colors.inkGold}10`,
                            border: `1px solid ${colors.inkGold}25`,
                        }}
                    >
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            Profecia é mais <span style={{ color: colors.inkGold, fontWeight: 600 }}>confrontação ética no presente</span>{' '}
                            do que previsão de futuro distante
                            <span style={{ color: colors.textMuted }}> — embora também contenha previsão</span>.
                        </p>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.genreWine }}>
                            Exemplos
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            Isaías · Jeremias · Ezequiel (em parte) · os doze profetas menores
                        </p>
                    </div>
                </GenreCard>
            </div>
        </LibraryWrapper>
    );
}
