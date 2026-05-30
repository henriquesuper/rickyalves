'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, IntertextPair, HonestyCard, colors, fonts } from './shared';

export function Slide27() {
    return (
        <ParchmentWrapper>
            <div className="max-w-5xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-xl md:text-2xl mb-12"
                    style={{ color: colors.inkDeep, fontFamily: fonts.display, textAlign: 'center' }}
                >
                    &ldquo;Mas e Tiago? Ele não diz o contrário de Paulo?&rdquo;
                </motion.p>

                <IntertextPair
                    delay={1.0}
                    accentColor={colors.wine}
                    left={{ ref: 'Romanos 3:28 · Paulo', text: 'O homem é justificado pela fé, sem as obras da lei.', refColor: colors.lapis }}
                    right={{ ref: 'Tiago 2:24 · Tiago', text: 'O homem é justificado por obras, e não somente pela fé.', refColor: colors.wine }}
                />

                <div className="mt-14 w-full">
                    <HonestyCard delay={2.6}>
                        <p style={{ marginBottom: '0.8rem' }}>
                            Paulo fala de como somos <strong>declarados justos diante de Deus</strong> — e isso é só pela fé.
                            Tiago fala de como a fé verdadeira <strong>se prova diante dos homens</strong> — pelas obras que produz.
                        </p>
                        <p style={{ color: colors.wine, fontStyle: 'italic', fontFamily: fonts.display }}>
                            Somos justificados pela fé sozinha — mas a fé que justifica nunca permanece sozinha.
                        </p>
                    </HonestyCard>
                </div>
            </div>
        </ParchmentWrapper>
    );
}
