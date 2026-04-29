'use client';
import { LibraryWrapper, TrapCard, ComparisonPanel, colors } from './shared';

export function Slide31() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <TrapCard
                    title="Ler apocalíptica como jornalismo"
                    description="Cobrar precisão de manchete de um texto que foi escrito para consolar sob perseguição."
                    delay={0.2}
                >
                    <ComparisonPanel
                        leftTitle="⊘ ERRO DE GÊNERO"
                        leftContent={
                            <div className="space-y-2 text-sm">
                                <p>
                                    Cavalos, bestas, chifres tratados como previsão literal de veículos ou armas.
                                </p>
                                <p>
                                    Calendário exato do fim do mundo extraído de frações de verso.
                                </p>
                                <p className="italic" style={{ color: colors.textMuted }}>
                                    Resultado: ansiedade devocional e previsões que envelhecem mal.
                                </p>
                            </div>
                        }
                        rightTitle="◎ NO GÊNERO"
                        rightContent={
                            <div className="space-y-2 text-sm">
                                <p>
                                    A pergunta honesta é:{' '}
                                    <em>o que este símbolo faz no texto, e como o próprio texto o decifra?</em>
                                </p>
                                <p>
                                    A apocalíptica{' '}
                                    <span style={{ color: colors.goodGreen, fontWeight: 600 }}>sustenta</span>{' '}
                                    o perseguido. Ela não entrega cronograma.
                                </p>
                            </div>
                        }
                        delay={0.5}
                    />
                </TrapCard>
            </div>
        </LibraryWrapper>
    );
}
