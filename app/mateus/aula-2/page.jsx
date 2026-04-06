'use client';
import { useAula2Sync } from './useAula2Sync';
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
  Section3_Diagnostico,
  Section4_OPresente,
  Section5_Leitura,
  Section6_OPaiCorre,
  Section7_Closing,
} from './sections';

export default function MateusAula2() {
  const { currentSection, participants, reactions } = useAula2Sync('viewer');

  const sectionComponents = {
    0: <Section0_Waiting participants={participants} />,
    1: <Section1_Welcome />,
    2: <Section2_Abertura />,
    3: <Section3_Diagnostico />,
    4: <Section4_OPresente />,
    5: <Section5_Leitura />,
    6: <Section6_OPaiCorre />,
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
