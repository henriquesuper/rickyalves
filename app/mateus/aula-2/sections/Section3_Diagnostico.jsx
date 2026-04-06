'use client';
import { VerseDisplay, colors } from './shared';

export function Section3_Diagnostico() {
  return (
    <VerseDisplay
      title="O Diagnóstico"
      accentColor={colors.blue}
      verses={[
        {
          text: 'Pois todos pecaram e estão destituídos da glória de Deus.',
          reference: 'Romanos 3:23',
        },
        {
          text: 'Porque o salário do pecado é a morte...',
          reference: 'Romanos 6:23a',
        },
      ]}
    />
  );
}
