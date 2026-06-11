'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, ProseBlock, colors, fonts } from './shared';

export function Slide92({ slideIndex = 91 }) {
    return (
        <ParchmentWrapper dark>
            <div className="w-full max-w-4xl mx-auto px-8 py-20 text-center flex flex-col items-center justify-center">
                <SectionLabel align="center" delay={0.2} color={colors.goldFaint}>
                    A Resposta da Fidelidade
                </SectionLabel>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.8 }}
                    className="text-xs tracking-[0.2em] font-mono mt-4 mb-10"
                    style={{ color: colors.parchmentEdge }}
                >
                    João 6.67–69
                </motion.p>

                <div className="max-w-3xl px-6 py-4">
                    <BiblicalQuote 
                        reference=""
                        lines={[
                            "Disse então Jesus aos doze: Quereis vós também retirar-vos?",
                            "Respondeu-lhe Simão Pedro: Senhor, para quem iremos nós? Tu tens as palavras da vida eterna."
                        ]}
                        emphasis={["para quem iremos nós?", "Tu tens as palavras da vida eterna"]}
                        tone="parchment"
                        align="center"
                        size="md"
                        delay={1.2}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 2.6, duration: 1.0 }}
                    className="h-px w-24 my-8"
                    style={{ background: colors.gold }}
                />

                <div className="max-w-2xl">
                    <ProseBlock 
                        delay={3.2}
                        align="center"
                        lines={[
                            "Repare no que Pedro não diz. Ele não afirma: 'Agora compreendemos perfeitamente todo o mistério'. A linguagem de Jesus perturbou e escandalizou os Doze da mesma forma.",
                            "",
                            "Fé amadurecida não é a ausência de dúvidas ou perplexidades. É, no meio da incompreensão temporária, saber discernir que não existe nenhuma alternativa viável melhor para onde ir."
                        ]}
                        size="sm"
                        color={colors.parchment}
                    />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
