'use client';
import { VerseDisplay, colors } from './shared';

export function Section6_OPaiCorre() {
  return (
    <VerseDisplay
      title="O Pai Corre"
      accentColor={colors.terracotta}
      verses={[
        {
          text: 'Estando ele ainda longe, seu pai o viu e, cheio de compaixão, correu ao seu encontro, abraçou-o e o beijou.',
          reference: 'Lucas 15:20',
        },
      ]}
    />
  );
}
