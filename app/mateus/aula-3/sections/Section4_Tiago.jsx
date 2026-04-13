'use client';
import { VerseDisplay, colors } from './shared';

export function Section4_Tiago() {
  return (
    <VerseDisplay
      title="Tiago"
      accentColor={colors.olive}
      emphasis="a fé sem obras é morta"
      verses={[
        {
          text: 'Meus irmãos, qual é o proveito, se alguém disser que tem fé, mas não tiver obras? Pode, acaso, semelhante fé salvá-lo?',
          reference: 'Tiago 2:14',
        },
        {
          text: 'Porque, assim como o corpo sem espírito é morto, assim também a fé sem obras é morta.',
          reference: 'Tiago 2:26',
        },
      ]}
    />
  );
}
