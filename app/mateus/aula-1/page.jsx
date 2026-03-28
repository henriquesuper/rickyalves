'use client';
import { useAula1Sync } from './useAula1Sync';
import {
  BreathingGradient,
  FloatingParticles,
  ToastContainer,
  SectionTransition,
} from './sections/shared';
import {
  Section0_Waiting,
  Section1_Welcome,
  Section2_Faith,
  Section3_Expectations,
  Section4_Doubts,
  Section5_Today,
  Section6_Closing,
} from './sections';

export default function MateusAula1() {
  const { currentSection, participants, reactions } = useAula1Sync('viewer');

  const sectionComponents = {
    0: <Section0_Waiting participants={participants} />,
    1: <Section1_Welcome />,
    2: <Section2_Faith />,
    3: <Section3_Expectations />,
    4: <Section4_Doubts />,
    5: <Section5_Today />,
    6: <Section6_Closing />,
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
