'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, ProseBlock, colors, fonts } from './shared';

export function Slide69({ slideIndex = 68 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-10 flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.lapisSoft}>
                    O Segundo Sinal em Caná
                </SectionLabel>

                <div className="my-6 w-full">
                    <BiblicalQuote 
                        reference="João 4.50"
                        text="Disse-lhe Jesus: Vai, o teu filho vive. E o homem creu na palavra que Jesus lhe dissera, e partiu."
                        tone="lapis"
                        align="center"
                        size="md"
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
                        <h4 className="text-xs uppercase tracking-wider mb-2 font-mono font-bold" style={{ color: colors.lapisSoft }}>
                            Fechamento de Arco (Caná)
                            <span className="block text-[9px] font-normal lowercase tracking-normal mt-0.5" style={{ color: colors.inkMuted }}>
                                Em Caná da Galileia: do vinho (2.11) ao oficial do rei (4.46)
                            </span>
                        </h4>
                        <p className="text-sm italic leading-relaxed" style={{ color: colors.inkBody, fontFamily: fonts.body }}>
                            O primeiro sinal cuidou de um constrangimento social em uma festa de casamento; o segundo resgata o filho à beira da morte de um pai aflito. Do mínimo ao máximo, o mesmo cuidado — sem uma escala de relevância que limite Seu agir.
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
                            Fé na Palavra Proferida
                            <span className="block text-[9px] font-normal lowercase tracking-normal mt-0.5" style={{ color: colors.inkMuted }}>
                                Crer antes de ver
                            </span>
                        </h4>
                        <p className="text-sm italic leading-relaxed" style={{ color: colors.inkBody, fontFamily: fonts.body }}>
                            O oficial insiste para que Jesus desça com ele. Jesus apenas diz a palavra. O homem &quot;creu na palavra e foi&quot; — iniciando o caminho de volta sem ver a cura. A febre deixou o menino na hora exata em que Jesus falou.
                        </p>
                    </motion.div>
                </div>
            </div>
        </ParchmentWrapper>
    );
}
