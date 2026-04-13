'use client';
import { VerseDisplay, colors } from './shared';

export function Section3_Paulo() {
  return (
    <VerseDisplay
      title="Paulo"
      accentColor={colors.blue}
      emphasis="criados em Cristo Jesus para boas obras"
      verses={[
        {
          text: 'Porque pela graça vocês são salvos, mediante a fé; e isto não vem de vocês, é dom de Deus; não de obras, para que ninguém se glorie.',
          reference: 'Efésios 2:8-9',
        },
        {
          text: 'Pois somos feitura dele, criados em Cristo Jesus para boas obras, as quais Deus de antemão preparou para que andássemos nelas.',
          reference: 'Efésios 2:10',
        },
      ]}
    />
  );
}
