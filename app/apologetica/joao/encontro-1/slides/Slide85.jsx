'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, GreekGloss, ProseBlock, colors, fonts } from './shared';

export function Slide85({ slideIndex = 84 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-14 text-center flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.gold}>
                    Teofania nas Águas
                </SectionLabel>

                <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm md:text-base font-serif italic text-center mt-3 mb-6"
                    style={{ color: colors.inkSoft, fontFamily: fonts.display }}
                >
                    No meio do mar tempestuoso, Ele se aproxima e diz:
                </motion.h3>

                <div className="my-4 w-full">
                    <GreekGloss 
                        word="Ἐγώ εἰμι· μὴ φοβεῖσθε"
                        transliteration="Egō eimi; mē phobeisthe"
                        gloss="&quot;Eu Sou; não temais&quot;"
                        note="João 6.20"
                        tone="gold"
                        size="lg"
                        delay={0.8}
                    />
                </div>

                <div className="mt-8">
                    <ProseBlock 
                        delay={1.8}
                        align="center"
                        lines={[
                            "É a segunda ocorrência de 'Egō eimi' em João, agora em um contexto de aflição no mar.",
                            "",
                            "A expressão funciona em dois níveis: no literal, significa apenas 'Sou eu, não tenham medo'; no teológico, evoca a autodescrição do Deus de Israel que caminha sobre as águas (Jó 9.8, Isaías 43.1–2).",
                            "",
                            "João mantém propositalmente as duas camadas abertas."
                        ]}
                        size="sm"
                        color={colors.inkBody}
                    />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
