'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

export function Slide63({ slideIndex = 62 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-10 flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.lapisSoft}>
                    O Padrão do Mal-entendido
                </SectionLabel>

                <div className="my-6 w-full">
                    <BiblicalQuote 
                        reference="João 4.10, 13–14"
                        lines={[
                            "Se conhecesses o dom de Deus e quem é o que te pede... tu lhe pedirias, e ele te daria água viva.",
                            "Quem beber desta água tornará a ter sede; mas quem beber da água que eu lhe der nunca mais terá sede."
                        ]}
                        tone="lapis"
                        align="center"
                        size="sm"
                        delay={0.5}
                    />
                </div>

                <div className="relative w-full max-w-2xl mx-auto mt-6 p-6 border border-dashed border-[#8B7355]30 rounded-sm" style={{ background: `${colors.parchmentDeep}22` }}>
                    <p className="text-[10px] uppercase tracking-widest font-mono opacity-50 mb-6 text-center" style={{ color: colors.inkMuted }}>
                        As Duas Camadas do Diálogo
                    </p>

                    <div className="flex flex-col gap-6 relative">
                        {/* Layer 1: Literal */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                            className="text-center"
                        >
                            <span className="text-[10px] uppercase tracking-wider font-mono opacity-60 block mb-1" style={{ color: colors.inkSoft }}>
                                Camada Literal (A Samaritana)
                            </span>
                            <p className="text-base font-serif italic" style={{ color: colors.inkBody }}>
                                &quot;Senhor, tu não tens com que a tirar, e o poço é fundo; onde pois tens essa água viva?&quot;
                            </p>
                            <p className="text-xs opacity-50 mt-1" style={{ fontFamily: fonts.body }}>
                                Entendimento comum: <em>hydōr zōn</em> = água corrente (de nascente), em oposição à água paralisada da cisterna.
                            </p>
                        </motion.div>

                        {/* Divider */}
                        <motion.div 
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 2.2, duration: 0.8 }}
                            className="h-px w-24 mx-auto my-2" 
                            style={{ background: colors.inkSoft }} 
                        />

                        {/* Layer 2: Real Meaning */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.8, duration: 0.8 }}
                            className="text-center"
                        >
                            <span className="text-[10px] uppercase tracking-wider font-mono block mb-1" style={{ color: colors.gold }}>
                                Camada Espiritual (Jesus)
                            </span>
                            <p className="text-lg font-serif italic font-semibold" style={{ color: colors.gold }}>
                                &quot;A água que eu lhe der se fará nele uma fonte de água que salte para a vida eterna.&quot;
                            </p>
                            <p className="text-xs mt-1" style={{ fontFamily: fonts.body, color: colors.lapisSoft }}>
                                Significado real: A habitação permanente do Espírito (cf. João 7.38–39).
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </ParchmentWrapper>
    );
}
