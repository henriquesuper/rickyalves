'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, IntertextPair, colors, fonts } from './shared';

export function Slide27({ slideIndex = 26 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-6xl mx-auto px-8 py-12">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        O imperador fala como profeta
                    </SectionLabel>
                </div>

                <div className="mb-10">
                    <IntertextPair
                        delay={0.6}
                        left={{
                            ref: 'Daniel 4:34—35',
                            refColor: colors.lapis,
                            text: 'O seu domínio é um domínio eterno... todos os habitantes da terra são considerados como nada... ninguém pode deter a sua mão.',
                        }}
                        right={{
                            ref: 'Isaías 40:15, 17',
                            refColor: colors.gold,
                            text: 'As nações são como a gota que cai de um balde... todas as nações são como nada perante ele; são consideradas por ele menos que nada.',
                        }}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.5, scaleX: 1 }}
                    transition={{ delay: 3.0, duration: 0.9 }}
                    className="h-px mx-auto my-10"
                    style={{ width: '120px', background: colors.inkSoft }}
                />

                <IntertextPair
                    delay={3.4}
                    left={{
                        ref: 'Daniel 4:3',
                        refColor: colors.lapis,
                        text: 'O seu reino é um reino eterno, e o seu domínio dura de geração em geração.',
                    }}
                    right={{
                        ref: 'Salmo 145:13',
                        refColor: colors.gold,
                        text: 'O teu reino é um reino eterno; o teu domínio dura por todas as gerações.',
                    }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 6.4, duration: 0.9 }}
                    className="mt-10 text-center text-sm md:text-base italic"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.display,
                        fontWeight: 500,
                        maxWidth: '38rem',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: 1.55,
                    }}
                >
                    A solidão da loucura ensinou ao rei
                    o que o poder absoluto não conseguia.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
