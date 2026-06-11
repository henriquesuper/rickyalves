'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, ProseBlock, colors, fonts } from './shared';

export function Slide84({ slideIndex = 83 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-14 text-center flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.gold}>
                    A Tentação Política
                </SectionLabel>

                <div className="my-6 w-full">
                    <BiblicalQuote 
                        reference="João 6.14–15"
                        lines={[
                            "Vendo, pois, aqueles homens o sinal que Jesus operara, diziam: Este é verdadeiramente o profeta...",
                            "Sabendo, pois, Jesus que haviam de vir arrebatá-lo, para o fazerem rei, tornou a retirar-se, ele só, para o monte."
                        ]}
                        tone="gold"
                        align="center"
                        size="sm"
                        delay={0.5}
                    />
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="max-w-2xl p-6 border border-dashed border-[#B8860B]40 rounded-sm mb-6"
                    style={{ background: `${colors.gold}09` }}
                >
                    <p className="text-lg font-serif italic mb-3 font-semibold" style={{ color: colors.gold, fontFamily: fonts.display }}>
                        Querendo Jesus pela metade
                    </p>
                    <p className="text-sm md:text-base italic leading-relaxed" style={{ color: colors.inkBody, fontFamily: fonts.body }}>
                        A multidão reconhece o milagre, mas tenta domesticar Jesus e ajustá-lo às suas próprias agendas nacionalistas. Eles querem fazê-lo rei à força, mas Ele rejeita esse papel e foge para a solidão do monte.
                    </p>
                </motion.div>

                <ProseBlock 
                    delay={2.4}
                    align="center"
                    lines="Há um modo de buscar a Jesus que o erra completamente: buscá-lo pelo pão que ele multiplica, e não pela pessoa que ele é."
                    size="sm"
                    color={colors.inkSoft}
                />
            </div>
        </ParchmentWrapper>
    );
}
