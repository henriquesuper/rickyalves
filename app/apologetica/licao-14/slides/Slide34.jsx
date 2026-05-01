'use client';
import { ConvergenceWrapper, CategoryCard, colors } from './shared';

export function Slide34() {
    return (
        <ConvergenceWrapper stratum="vetores">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <CategoryCard
                    letter="D"
                    title="Estrutura literária e narrativa"
                    accentColor={colors.vectorBlue}
                    description="A própria narrativa bíblica tem arco que aponta para Cristo. Não é detalhe pontual — é a forma de o cânon se contar."
                    criteria={[
                        'Promessas embrionárias que se desdobram',
                        'Padrões de queda e restauração recapitulados',
                        'Universalismo emergindo do particular',
                        'Trono e reino como horizonte de esperança',
                    ]}
                    delay={0.3}
                />
            </div>
        </ConvergenceWrapper>
    );
}
