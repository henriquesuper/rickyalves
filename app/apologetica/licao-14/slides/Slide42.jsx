'use client';
import { ConvergenceWrapper, ObjectionCard } from './shared';

export function Slide42() {
    return (
        <ConvergenceWrapper stratum="ruido">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <ObjectionCard
                    objection="Tipologia é flexível demais. Qualquer coisa pode ser tipo de qualquer coisa."
                    qualifications={[
                        'Identificada pelo próprio NT — não invenção do leitor.',
                        'Correspondência estrutural — não associação verbal solta.',
                        'Escalada (meizōn) — antitipo é sempre maior que o tipo.',
                        'Coerência teológica — articulada com o restante do cânon.',
                    ]}
                    response="Honestidade: sim, há tradições que abusaram (Filo de Alexandria alegorizando até dissolver o AT em filosofia platônica). Mas tipologia legítima tem critérios — e parte do trabalho hermenêutico é distinguir as duas."
                    delay={0.3}
                />
            </div>
        </ConvergenceWrapper>
    );
}
