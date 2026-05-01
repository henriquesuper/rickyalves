'use client';
import { ConvergenceWrapper, ObjectionCard } from './shared';

export function Slide41() {
    return (
        <ConvergenceWrapper stratum="ruido">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <ObjectionCard
                    objection="Outras tradições leem o AT de outras formas. Por que a leitura cristã é privilegiada?"
                    qualifications={[
                        'Qual leitura faz mais justiça aos detalhes textuais?',
                        'Qual leitura tem ancoragem na intenção dos próprios autores (incluindo Jesus, se for histórico)?',
                        'Qual leitura preserva mais elementos do texto sem precisar dispensar passagens difíceis?',
                    ]}
                    response="Ela não é privilegiada por decreto — tem que se justificar pelos mesmos critérios que qualquer leitura. A leitura cristocêntrica não é a única possível, mas tem ancoragem textual robusta. Diferente de 'é a única certa porque somos cristãos.'"
                    delay={0.3}
                />
            </div>
        </ConvergenceWrapper>
    );
}
