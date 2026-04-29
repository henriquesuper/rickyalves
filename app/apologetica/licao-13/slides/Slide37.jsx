'use client';
import { LibraryWrapper, TrapCard, ComparisonPanel, colors } from './shared';

export function Slide37() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <TrapCard
                    title="Parábola como código legal"
                    description="Extrair micro-doutrinas de cada detalhe — fazendo a parábola dizer o que ela não se propôs a dizer."
                    delay={0.2}
                >
                    <ComparisonPanel
                        leftTitle="⊘ ALEGORIZAÇÃO"
                        leftContent={
                            <div className="space-y-2 text-sm">
                                <p>
                                    O Bom Samaritano: os dois denários viram dois testamentos, o óleo vira Espírito Santo,
                                    a estalagem vira igreja, e o texto deixa de pregar caridade.
                                </p>
                                <p className="italic" style={{ color: colors.textMuted }}>
                                    Cada detalhe força um correspondente — e o ponto principal evapora.
                                </p>
                            </div>
                        }
                        rightTitle="◎ LEITURA NO GÊNERO"
                        rightContent={
                            <div className="space-y-2 text-sm">
                                <p>
                                    A parábola responde à pergunta <em>quem é o meu próximo?</em> — e entrega uma resposta
                                    que destrói a expectativa do ouvinte.
                                </p>
                                <p>
                                    <span style={{ color: colors.goodGreen, fontWeight: 600 }}>Um ponto central, um choque ético.</span>
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
