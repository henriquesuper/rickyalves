'use client';
import { ConvergenceWrapper, ObjectionCard } from './shared';

export function Slide40() {
    return (
        <ConvergenceWrapper stratum="ruido">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <ObjectionCard
                    objection="Cristãos releram o AT à luz de Jesus. É projeção retroativa."
                    qualifications={[
                        'Jesus mesmo se interpreta assim — não é invenção pós-pascal da igreja.',
                        'Há textos que não fazem sentido em qualquer outra leitura — Isaías 53 descreve um servo que morre pelos pecados do "meu povo" (servo ≠ povo); Salmo 22 descreve detalhes de execução que não correspondem à vida de Davi.',
                        'A leitura messiânica do AT é pré-cristã — Manuscritos do Mar Morto mostram comunidades judaicas anteriores a Jesus já lendo Isaías 53 e Salmo 22 messianicamente.',
                        'Os textos NT mais antigos já têm a tese — 1 Co 15:3-4 cita uma fórmula datada dos primeiros 5 anos pós-crucificação.',
                    ]}
                    response="Honestidade primeiro: sim, parcialmente — algumas leituras cristãs aplicam categorias que os autores originais não tinham conscientemente. Mas isso é diferente de invenção sem ancoragem."
                    delay={0.3}
                />
            </div>
        </ConvergenceWrapper>
    );
}
