'use client';
import { VerseDisplay, colors } from './shared';

export function Section4_OPresente() {
  return (
    <VerseDisplay
      title="O Presente"
      accentColor={colors.gold}
      emphasis="Mas Deus"
      verses={[
        {
          text: 'Mas Deus prova o seu próprio amor para conosco pelo fato de ter Cristo morrido por nós, sendo nós ainda pecadores.',
          reference: 'Romanos 5:8',
        },
        {
          text: '...mas o dom gratuito de Deus é a vida eterna em Cristo Jesus, nosso Senhor.',
          reference: 'Romanos 6:23b',
        },
      ]}
    />
  );
}
