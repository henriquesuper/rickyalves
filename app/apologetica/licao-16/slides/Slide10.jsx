'use client';
import { ParchmentWrapper, HonestyCard, colors, fonts } from './shared';

export function Slide10({ slideIndex = 9 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-3xl mx-auto px-8 py-20">
                <HonestyCard delay={0.4}>
                    <p style={{ marginBottom: '0.9em' }}>
                        A cena celestial de Jó 1—2 usa linguagem do <em>conselho divino</em> comum
                        no antigo Oriente Médio (Ugarit, Mesopotâmia). Estudiosos discutem se Jó
                        pretende descrever uma cena <em>literal</em> ou se usa convenção literária
                        para enquadrar uma pergunta moral.
                    </p>
                    <p style={{ marginBottom: '0.9em' }}>
                        As duas leituras existem entre estudiosos sérios — judeus e cristãos.
                    </p>
                    <p style={{ color: colors.inkSoft, fontStyle: 'italic' }}>
                        O ponto teológico se sustenta nas duas: existe uma dimensão moral cósmica
                        que excede a nossa contabilidade humana do sofrimento.
                    </p>
                </HonestyCard>
            </div>
        </ParchmentWrapper>
    );
}
