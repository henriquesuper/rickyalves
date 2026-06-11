'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

export function Slide87({ slideIndex = 86 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-10 flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.gold}>
                    O Pano de Fundo da Páscoa
                </SectionLabel>

                <div className="my-6 w-full">
                    <BiblicalQuote 
                        reference="João 6.31–32"
                        lines={[
                            "Nossos pais comeram o maná no deserto... Disse-lhes, pois, Jesus:",
                            "Em verdade, em verdade vos digo: Não foi Moisés que vos deu o pão do céu; mas é meu Pai quem vos dá o verdadeiro pão do céu."
                        ]}
                        tone="gold"
                        align="center"
                        size="xs"
                        delay={0.5}
                    />
                </div>

                <div className="relative w-full max-w-2xl mx-auto mt-6 p-6 border border-dashed border-[#8B7355]30 rounded-sm" style={{ background: `${colors.parchmentDeep}22` }}>
                    <p className="text-[10px] uppercase tracking-widest font-mono opacity-50 mb-6 text-center" style={{ color: colors.inkMuted }}>
                        A Retificação Teológica
                    </p>

                    <div className="flex flex-col gap-6 relative">
                        {/* Layer 1: The Crowd's Claim */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                            className="text-center"
                        >
                            <span className="text-[10px] uppercase tracking-wider font-mono opacity-60 block mb-1" style={{ color: colors.inkSoft }}>
                                A Reivindicação Histórica (A Multidão)
                            </span>
                            <p className="text-base font-serif italic" style={{ color: colors.inkBody }}>
                                &quot;Nossos pais comeram o maná... Moisés nos deu pão do céu.&quot;
                            </p>
                            <p className="text-xs opacity-50 mt-1" style={{ fontFamily: fonts.body }}>
                                Foco: O herói do passado (Moisés) e o milagre temporário (maná) no passado.
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

                        {/* Layer 2: Jesus' Correction */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.8, duration: 0.8 }}
                            className="text-center"
                        >
                            <span className="text-[10px] uppercase tracking-wider font-mono block mb-1" style={{ color: colors.gold }}>
                                A Realidade Presente (Jesus)
                            </span>
                            <p className="text-base md:text-lg font-serif italic font-semibold" style={{ color: colors.gold }}>
                                &quot;Não foi Moisés... mas é meu Pai quem vos dá [agora] o verdadeiro pão.&quot;
                            </p>
                            <p className="text-xs mt-1" style={{ fontFamily: fonts.body, color: colors.lapisSoft }}>
                                Dupla correção: A fonte não é Moisés (é o Pai); e a ação não pertence ao passado (está acontecendo no presente).
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </ParchmentWrapper>
    );
}
