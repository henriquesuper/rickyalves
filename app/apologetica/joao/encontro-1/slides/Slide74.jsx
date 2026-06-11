'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, ProseBlock, colors, fonts } from './shared';

export function Slide74({ slideIndex = 73 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-10 flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.wine}>
                    A Resposta Torta e a Cura Seca
                </SectionLabel>

                <div className="my-6 w-full">
                    <BiblicalQuote 
                        reference="João 5.7–9a"
                        lines={[
                            "Respondeu o enfermo: Senhor, não tenho ninguém que, ao se agitar a água, me ponha no tanque...",
                            "Disse-lhe Jesus: Levanta-te, toma o teu leito e anda. Imediatamente o homem ficou são, tomou o seu leito e retirou-se."
                        ]}
                        tone="wine"
                        align="center"
                        size="sm"
                        delay={0.5}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="p-5 border border-dashed border-[#8B7355]30 rounded-sm"
                        style={{ background: `${colors.parchmentDeep}22` }}
                    >
                        <h4 className="text-xs uppercase tracking-wider mb-2 font-mono font-bold" style={{ color: colors.wine }}>
                            O Apego ao Mecanismo
                        </h4>
                        <p className="text-sm italic leading-relaxed font-serif" style={{ color: colors.inkBody }}>
                            O enfermo não responde &quot;sim&quot;. Ele se queixa do seu isolamento social e da sua incapacidade de vencer a corrida até as águas agitadas. Ele está preso ao único ritual de cura que consegue conceber.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 0.8 }}
                        className="p-5 border border-dashed border-[#8B7355]30 rounded-sm"
                        style={{ background: `${colors.parchmentDeep}22` }}
                    >
                        <h4 className="text-xs uppercase tracking-wider mb-2 font-mono font-bold" style={{ color: colors.gold }}>
                            A Sobriedade da Palavra
                        </h4>
                        <p className="text-sm italic leading-relaxed font-serif" style={{ color: colors.inkBody }}>
                            Jesus ignora o folclore do tanque, o anjo, o movimento da água. Sem encenações ou rituais mágicos: <em>Levanta-te, toma o teu leito e anda.</em> A cura opera-se exclusivamente na autoridade da palavra proferida.
                        </p>
                    </motion.div>
                </div>
            </div>
        </ParchmentWrapper>
    );
}
