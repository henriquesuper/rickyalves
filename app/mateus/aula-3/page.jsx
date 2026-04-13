'use client';
import { useAula3Sync } from './useAula3Sync';
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
  Section3_Paulo,
  Section4_Tiago,
  Section5_Sintese,
  Section6_Aplicacao,
  Section7_Closing,
} from './sections';

export default function MateusAula3() {
  const { currentSection, participants, reactions } = useAula3Sync('viewer');

  const sectionComponents = {
    0: <Section0_Waiting participants={participants} />,
    1: <Section1_Welcome />,
    2: <Section2_Abertura />,
    3: <Section3_Paulo />,
    4: <Section4_Tiago />,
    5: <Section5_Sintese />,
    6: <Section6_Aplicacao />,
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
