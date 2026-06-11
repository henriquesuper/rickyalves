'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, HonestyCard, ProseBlock, colors, fonts } from './shared';

export function Slide72({ slideIndex = 71 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-14 text-center flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.wine}>
                    História e Arqueologia
                </SectionLabel>

                <motion.h2 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-2xl md:text-3xl font-serif text-center mt-3 mb-10"
                    style={{ color: colors.inkDeep, fontFamily: fonts.display }}
                >
                    O tanque que existia (5.1–3)
                </motion.h2>

                <div className="w-full my-6">
                    <HonestyCard delay={0.8}>
                        Por séculos, críticos apontaram os <strong>&quot;cinco pórticos&quot;</strong> de João 5.2 como prova de que o autor do evangelho nunca estivera em Jerusalém — afinal, nenhum tanque da antiguidade clássica possuía cinco lados. 
                        <br /><br />
                        Contudo, escavações arqueológicas no final do século XIX e início do século XX ao lado da Igreja de Santa Ana revelaram o tanque duplo de Betesda — <strong>com exatamente cinco pórticos</strong> (quatro ao redor do perímetro e um dividindo os dois tanques no meio). 
                        <br /><br />
                        Pode pesquisar no Google por: <em>&quot;Pool of Bethesda excavation&quot;</em>.
                    </HonestyCard>
                </div>

                <div className="mt-8">
                    <ProseBlock 
                        delay={1.8}
                        align="center"
                        lines="João descreveu de memória um local específico que deixou de existir após a destruição romana em 70 d.C. — e a terra, sob a pá da arqueologia, confirmou a precisão da sua lembrança."
                        size="sm"
                        color={colors.inkBody}
                    />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
