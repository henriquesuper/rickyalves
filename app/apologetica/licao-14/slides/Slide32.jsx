'use client';
import { ConvergenceWrapper, CategoryCard, colors } from './shared';

export function Slide32() {
    return (
        <ConvergenceWrapper stratum="vetores">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <CategoryCard
                    letter="C"
                    title="Temas teológicos convergentes"
                    accentColor={colors.vectorPurple}
                    description="Há temas que perpassam o AT inteiro e encontram resolução em Cristo. Não correspondência ponto-a-ponto, mas trajetória teológica que culmina."
                    criteria={[
                        'Tema atravessa múltiplos livros do AT',
                        'O NT articula a culminação em Cristo',
                        'A trajetória é interna ao texto, não imposta',
                        'A culminação intensifica, não substitui o tema anterior',
                    ]}
                    delay={0.3}
                />
            </div>
        </ConvergenceWrapper>
    );
}
