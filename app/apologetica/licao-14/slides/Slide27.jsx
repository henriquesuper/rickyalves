'use client';
import { ConvergenceWrapper, CategoryCard, colors } from './shared';

export function Slide27() {
    return (
        <ConvergenceWrapper stratum="vetores">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <CategoryCard
                    letter="A"
                    title="Profecia direta"
                    accentColor={colors.vectorAmber}
                    description="Predições explícitas de um futuro messias. Onde a verificabilidade entra: textos escritos antes (atestados em Qumran, séculos antes de Jesus), e o NT os lê como cumpridos."
                    criteria={[
                        'Texto datado antes do cumprimento (manuscritos pré-cristãos)',
                        'Correspondência específica e não genérica',
                        'Reivindicado pelo NT como cumprimento',
                        'Ônus está em quem nega a correspondência',
                    ]}
                    delay={0.3}
                />
            </div>
        </ConvergenceWrapper>
    );
}
