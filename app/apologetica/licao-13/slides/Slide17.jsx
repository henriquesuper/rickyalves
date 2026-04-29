'use client';
import { LibraryWrapper, TrapCard, ComparisonPanel, colors } from './shared';

export function Slide17() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-4">
                <TrapCard
                    title='"Olho por olho" não é manual de vingança'
                    description="A lei bíblica frequentemente ilustra princípios — não antecipa casos."
                    delay={0.2}
                >
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        <em>Olho por olho</em> é um <span style={{ color: colors.inkGold, fontWeight: 600 }}>teto de proporcionalidade</span>{' '}
                        — num mundo onde a vingança tribal multiplicava exponencialmente.
                    </p>

                    <ComparisonPanel
                        leftTitle="⊘ DOIS ERROS SIMÉTRICOS"
                        leftContent={
                            <div className="space-y-2 text-sm">
                                <p>
                                    <span style={{ color: colors.warnRed, fontWeight: 600 }}>Universalizar tudo</span> — tratar cada regra
                                    como vinculante hoje, em qualquer contexto.
                                </p>
                                <p>
                                    <span style={{ color: colors.warnRed, fontWeight: 600 }}>Descartar tudo</span> — tratar tudo como
                                    &ldquo;coisa de judeu antigo&rdquo;, sem relevância.
                                </p>
                            </div>
                        }
                        rightTitle="◎ PERGUNTA DE GÊNERO"
                        rightContent={
                            <div className="space-y-2 text-sm">
                                <p>Qual estrato é este? Qual era a aliança pressuposta?</p>
                                <p>Qual princípio está por trás? Como se aplica fora do contexto original?</p>
                            </div>
                        }
                        delay={0.5}
                    />
                </TrapCard>
            </div>
        </LibraryWrapper>
    );
}
