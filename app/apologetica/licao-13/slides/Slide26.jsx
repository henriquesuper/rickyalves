'use client';
import { LibraryWrapper, TrapCard, ComparisonPanel, colors } from './shared';

export function Slide26() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <TrapCard
                    title="Agenda do século XXI em vez da Samaria do VIII a.C."
                    description="A dupla armadilha da profecia."
                    delay={0.2}
                >
                    <ComparisonPanel
                        leftTitle="⊘ ARMADILHA DUPLA"
                        leftContent={
                            <div className="space-y-3 text-sm">
                                <p>
                                    <span style={{ color: colors.warnRed, fontWeight: 600 }}>Achatar tudo para o presente</span> —
                                    Isaías vira manchete de hoje. O texto fica irreconhecível.
                                </p>
                                <p>
                                    <span style={{ color: colors.warnRed, fontWeight: 600 }}>Empurrar tudo para o futuro</span> —
                                    Apocalipse vira mapa geopolítico da nossa década. Amanhã, do século que vem.
                                </p>
                            </div>
                        }
                        rightTitle="◎ LEITURA CENTRADA"
                        rightContent={
                            <div className="space-y-3 text-sm">
                                <p>
                                    Leitura honesta começa no contexto original:{' '}
                                    <em>que acusação ética ele estava fazendo?</em>{' '}
                                    <em>Que esperança estava consolando?</em>
                                </p>
                                <p>
                                    Aplicações subsequentes são{' '}
                                    <span style={{ color: colors.goodGreen, fontWeight: 600 }}>derivadas</span>, não primárias.
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
