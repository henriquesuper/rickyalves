'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { useAula5Sync } from './useAula5Sync';
import {
  BreathingGradient,
  FloatingParticles,
  ToastContainer,
  SectionTransition,
} from './sections/shared';
import {
  Section0_Waiting,
  Section1_Welcome,
  Section2_Abertura,
  Section3_QuemFoiPaulo,
  Section4_AsDuasCoisas,
  Section5_TextosChave,
  Section6_EspelhoSabao,
  Section7_ExPrisioneiro,
  Section8_PauloContinuouGuardando,
  Section9_Closing,
} from './sections';

function MateusAula5Inner() {
  const { currentSection: syncedSection, participants, reactions } = useAula5Sync('viewer');
  const searchParams = useSearchParams();
  const override = searchParams.get('s');
  const currentSection = override !== null ? Number(override) : syncedSection;

  const sectionComponents = {
    0: <Section0_Waiting participants={participants} />,
    1: <Section1_Welcome />,
    2: <Section2_Abertura />,
    3: <Section3_QuemFoiPaulo />,
    4: <Section4_AsDuasCoisas />,
    5: <Section5_TextosChave />,
    6: <Section6_EspelhoSabao />,
    7: <Section7_ExPrisioneiro />,
    8: <Section8_PauloContinuouGuardando />,
    9: <Section9_Closing />,
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <BreathingGradient section={currentSection} />
      <FloatingParticles />

      <SectionTransition sectionKey={currentSection}>
        {sectionComponents[currentSection] || sectionComponents[0]}
      </SectionTransition>

      <ToastContainer reactions={reactions} />
    </div>
  );
}

export default function MateusAula5() {
  return (
    <Suspense fallback={null}>
      <MateusAula5Inner />
    </Suspense>
  );
}
