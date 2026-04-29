'use client';
import { LibraryWrapper, TrapCard, ComparisonPanel, colors } from './shared';

export function Slide34() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <TrapCard
                    title="Cobrar precisão de tribunal"
                    description="Tratar cada diferença entre evangelhos como contradição letal."
                    delay={0.2}
                >
                    <ComparisonPanel
                        leftTitle="⊘ ERRO DE GÊNERO"
                        leftContent={
                            <div className="space-y-2 text-sm">
                                <p>
                                    Dois cegos em Jericó (Mateus) vs um cego em Jericó (Lucas): escândalo apologético.
                                </p>
                                <p>
                                    Ou, por simetria, tentativa de harmonizar a ferro e fogo,
                                    forçando o texto a negar sua própria ênfase.
                                </p>
                            </div>
                        }
                        rightTitle="◎ LEITURA NO GÊNERO"
                        rightContent={
                            <div className="space-y-2 text-sm">
                                <p>
                                    Cada evangelista seleciona e enfatiza conforme o propósito teológico.
                                </p>
                                <p>
                                    As diferenças são{' '}
                                    <span style={{ color: colors.goodGreen, fontWeight: 600 }}>camadas de leitura</span> —
                                    como quatro biografias diferentes do mesmo presidente, cada uma útil.
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
