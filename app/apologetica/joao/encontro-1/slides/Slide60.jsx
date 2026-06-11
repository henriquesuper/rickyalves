'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, HonestyCard, colors, fonts } from './shared';

export function Slide60({ slideIndex = 59 }) {
    const historicalPoints = [
        { title: "A Origem (2 Reis 17)", text: "População de raça e religião misturadas após a queda do Reino do Norte sob a Assíria." },
        { title: "A Ruptura", text: "Construção de um templo rival no monte Gerizim e aceitação apenas do Pentateuco (Torá Samaritana) como Escritura." },
        { title: "O Ódio Mútuo", text: "Séculos de exclusão recíproca. Como João insere no verso 4.9: 'porque os judeus não se comunicam com os samaritanos'." }
    ];

    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-10 flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.lapisSoft}>
                    Contexto Histórico
                </SectionLabel>

                <motion.h2 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-2xl md:text-3xl font-serif text-center mt-3 mb-10"
                    style={{ color: colors.inkDeep, fontFamily: fonts.display }}
                >
                    Quem eram os samaritanos
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
                    {historicalPoints.map((pt, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + i * 0.4, duration: 0.8 }}
                            className="p-5 border border-dashed border-[#8B7355]30 rounded-sm"
                            style={{ background: `${colors.parchmentDeep}22` }}
                        >
                            <h3 className="text-xs uppercase tracking-wider mb-2 font-mono font-bold" style={{ color: colors.lapisSoft }}>
                                {pt.title}
                            </h3>
                            <p className="text-sm italic leading-relaxed" style={{ color: colors.inkBody, fontFamily: fonts.body }}>
                                {pt.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <HonestyCard delay={2.0}>
                    <strong>Eles existem até hoje.</strong> Cerca de 800 samaritanos vivem em Israel/Cisjordânia. Eles ainda celebram a Páscoa (Passover) sacrificando cordeiros no monte Gerizim e ainda guardam exclusivamente o Pentateuco Samaritano. Pode pesquisar no Google por: <em>&quot;Samaritans Mount Gerizim Passover&quot;</em>.
                </HonestyCard>
            </div>
        </ParchmentWrapper>
    );
}
