'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { useAula4Sync } from './useAula4Sync';
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
  Section3_DistincaoFisica,
  Section4_LeiMoral,
  Section5_LeiCerimonial,
  Section6_NovaAlianca,
  Section7_Closing,
} from './sections';

function MateusAula4Inner() {
  const { currentSection: syncedSection, participants, reactions } = useAula4Sync('viewer');
  const searchParams = useSearchParams();
  const override = searchParams.get('s');
  const currentSection = override !== null ? Number(override) : syncedSection;

  const sectionComponents = {
    0: <Section0_Waiting participants={participants} />,
    1: <Section1_Welcome />,
    2: <Section2_Abertura />,
    3: <Section3_DistincaoFisica />,
    4: <Section4_LeiMoral />,
    5: <Section5_LeiCerimonial />,
    6: <Section6_NovaAlianca />,
    7: <Section7_Closing />,
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

export default function MateusAula4() {
  return (
    <Suspense fallback={null}>
      <MateusAula4Inner />
    </Suspense>
  );
}
