'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, GreekGloss, HonestyCard, colors, fonts } from './shared';

export function Slide61({ slideIndex = 60 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-10 flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.lapisSoft}>
                    Humanidade do Verbo
                </SectionLabel>

                <div className="my-6 w-full">
                    <BiblicalQuote 
                        reference="João 4.6"
                        text="Jesus, cansado da viagem, sentou-se junto à fonte. Era cerca da hora sexta."
                        tone="lapis"
                        align="center"
                        size="md"
                        delay={0.5}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center mb-8">
                    <GreekGloss 
                        word="κεκοπιακώς"
                        transliteration="kekopiakōs"
                        gloss="exausto · cansado · gasto pela estrada"
                        note="Do verbo kopiaō. O Verbo que no prólogo é a fonte de toda a criação agora experimenta a exaustão física do pó da estrada."
                        tone="lapis"
                        delay={1.2}
                    />

                    <motion.div 
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.8, duration: 0.8 }}
                        className="p-5 rounded-sm"
                        style={{ borderLeft: `2px solid ${colors.lapisSoft}`, background: `${colors.parchmentDeep}22` }}
                    >
                        <h4 className="text-xs uppercase tracking-wider mb-2 font-mono font-bold" style={{ color: colors.lapisSoft }}>
                            Conexão com o Prólogo
                        </h4>
                        <p className="text-sm italic leading-relaxed mb-3" style={{ color: colors.inkBody, fontFamily: fonts.body }}>
                            O Verbo que <em>eskēnōsen</em> (armou tenda entre nós — 1.14) agora senta-se no chão quente e tem sede. A encarnação em João não é uma imagem abstrata; é real, cansada e empoeirada.
                        </p>
                    </motion.div>
                </div>

                <HonestyCard delay={2.5}>
                    <strong>O Poço de Jacó é real.</strong> É um dos pouquíssimos sítios arqueológicos da geografia dos evangelhos que não sofre nenhuma disputa histórica séria. Localizado em Sicar (atual Nablus), fica na cripta de uma igreja ortodoxa grega, tem cerca de 40 metros de profundidade e ainda fornece água límpida até hoje.
                </HonestyCard>
            </div>
        </ParchmentWrapper>
    );
}
