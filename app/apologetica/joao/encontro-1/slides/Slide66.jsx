'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, GreekGloss, ProseBlock, colors, fonts } from './shared';

export function Slide66({ slideIndex = 65 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-14 text-center flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.lapisSoft}>
                    A Primeira Autorrevelação
                </SectionLabel>

                <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm md:text-base font-serif italic text-center mt-3 mb-6"
                    style={{ color: colors.inkSoft, fontFamily: fonts.display }}
                >
                    Ela diz: &quot;Eu sei que o Messias vem.&quot; Ele responde:
                </motion.h3>

                <div className="my-4 w-full">
                    <GreekGloss 
                        word="Ἐγώ εἰμι, ὁ λαλῶν σοι"
                        transliteration="Egō eimi, ho lalōn soi"
                        gloss="&quot;Eu Sou, eu que falo contigo&quot;"
                        note="João 4.26"
                        tone="lapis"
                        size="lg"
                        delay={0.8}
                    />
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.12 }}
                    transition={{ delay: 1.8, duration: 1.5 }}
                    className="text-[4rem] md:text-[6rem] font-bold absolute pointer-events-none z-0"
                    style={{
                        color: colors.gold,
                        fontFamily: fonts.display,
                        top: '42%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        letterSpacing: '0.15em',
                    }}
                >
                    ΕΓΩ ΕΙΜΙ
                </motion.div>

                <div className="mt-10 relative z-10">
                    <ProseBlock 
                        delay={2.2}
                        align="center"
                        lines={[
                            "É a primeira declaração explícita de messianidade de Jesus no Evangelho de João.",
                            "",
                            "E a quem? Não ao Sinédrio em Jerusalém, não a Nicodemos nas sombras da noite — mas a uma mulher samaritana de vida fragmentada, ao meio-dia, à beira de um poço.",
                            "",
                            "Este 'Egō eimi' (Eu Sou) planta o fio teológico que retornará com toda força em João (6.20, 8.58, 18.5)."
                        ]}
                        size="sm"
                        color={colors.inkBody}
                    />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
