'use client';
import { ParchmentWrapper, HonestyCard, colors } from './shared';

export function Slide28({ slideIndex = 27 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-3xl mx-auto px-8 py-16">
                <HonestyCard delay={0.4}>
                    <p style={{ marginBottom: '0.9em' }}>
                        Daniel 4 tem um paralelo curioso entre os Manuscritos do Mar Morto:
                        a <strong>Oração de Nabonido (4Q242)</strong>, texto fragmentário que descreve o
                        último rei babilônico — <em>Nabonido</em>, não Nabucodonosor — afligido com
                        uma doença por sete anos em Tema, na Arábia, e curado por um exorcista judeu.
                    </p>
                    <p style={{ marginBottom: '0.9em' }}>
                        Críticos da datação tardia de Daniel argumentam que Daniel 4 seria uma
                        transferência literária, aplicando ao mais famoso Nabucodonosor o que
                        teria acontecido com Nabonido.
                    </p>
                    <p style={{ marginBottom: '0.9em' }}>
                        Defesa: as crônicas babilônicas têm um silêncio de cerca de trinta anos no
                        fim do reinado de Nabucodonosor; a confusão entre os dois reis é comum em
                        fontes antigas tardias (Beroso, Megástenes); e Daniel 4 é apresentado como
                        decreto imperial — gênero conhecido na Babilônia.
                    </p>
                    <p style={{ color: colors.inkSoft, fontStyle: 'italic' }}>
                        O debate não se fecha. Mas o quadro maior — que o exílio aconteceu, que
                        produziu a maior reorganização teológica do AT, que Babilônia caiu e
                        houve retorno — é independente dessa discussão.
                    </p>
                </HonestyCard>
            </div>
        </ParchmentWrapper>
    );
}
