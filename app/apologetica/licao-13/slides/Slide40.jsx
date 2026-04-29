'use client';
import { LibraryWrapper, TrapCard, ComparisonPanel, colors } from './shared';

export function Slide40() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <TrapCard
                    title='"Está na Bíblia" sem perguntar a quem foi escrito'
                    description="Aplicar universalmente uma orientação que era situacional — e ignorar universalmente um princípio que era eterno."
                    delay={0.2}
                >
                    <ComparisonPanel
                        leftTitle="⊘ DOIS ERROS OPOSTOS"
                        leftContent={
                            <div className="space-y-2 text-sm">
                                <p>
                                    <span style={{ color: colors.warnRed, fontWeight: 600 }}>Universalizar o específico</span> —
                                    transformar orientações culturais em leis eternas.
                                </p>
                                <p>
                                    <span style={{ color: colors.warnRed, fontWeight: 600 }}>Relativizar o eterno</span> —
                                    tratar princípios permanentes como preconceito antigo.
                                </p>
                            </div>
                        }
                        rightTitle="◎ PERGUNTA DE GÊNERO"
                        rightContent={
                            <div className="space-y-2 text-sm">
                                <p>
                                    Que problema esta carta estava tentando resolver <em>lá</em>?
                                </p>
                                <p>
                                    Qual é o princípio abaixo da aplicação, e como ele atravessa para cá?
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
