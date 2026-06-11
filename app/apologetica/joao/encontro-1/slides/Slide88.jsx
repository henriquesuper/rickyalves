'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, EuSouProgress, colors, fonts } from './shared';

export function Slide88({ slideIndex = 87 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-14 text-center flex flex-col items-center justify-between">
                <SectionLabel align="center" delay={0.2} color={colors.gold}>
                    O Primeiro Declarado
                </SectionLabel>

                <div className="my-8 w-full">
                    <BiblicalQuote 
                        reference="João 6.35"
                        text="Declarou-lhes Jesus: Eu sou o pão da vida; aquele que vem a mim de modo algum terá fome, e quem crê em mim jamais terá sede."
                        emphasis={["Eu sou o pão da vida"]}
                        tone="gold"
                        align="center"
                        size="lg"
                        delay={0.6}
                    />
                </div>

                <div className="w-full mt-4">
                    <EuSouProgress lit={1} delay={1.4} />
                    <p className="text-[10px] uppercase tracking-widest font-mono opacity-50 mt-4" style={{ color: colors.inkMuted }}>
                        Os Sete &quot;Eu Sou&quot; com predicado em João
                    </p>
                </div>
            </div>
        </ParchmentWrapper>
    );
}
