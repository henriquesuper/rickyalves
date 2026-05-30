'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, HonestyCard, colors, fonts } from './shared';

export function Slide28() {
    return (
        <ParchmentWrapper>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <SectionLabel align="center" delay={0.2} color={colors.inkMuted}>
                    Por que isso é tão sensível para nós, adventistas
                </SectionLabel>

                <div className="mt-10 w-full">
                    <HonestyCard title="Honestidade Histórica · Minneapolis, 1888" delay={0.7} maxWidth="42rem">
                        <p style={{ marginBottom: '0.8rem' }}>
                            Em 1888, Jones e Waggoner confrontaram uma igreja que havia
                            escorregado para a lei e a obediência como base da aceitação diante de Deus.
                            Ellen White apoiou a mensagem da <strong>justiça pela fé</strong> —
                            chamando-a de &ldquo;a terceira mensagem angélica em verdade&rdquo;.
                        </p>
                        <p style={{ color: colors.wine, fontStyle: 'italic', fontFamily: fonts.display }}>
                            Por carregarmos a lei no nome, somos os que mais precisam vigiar esta fronteira.
                        </p>
                    </HonestyCard>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.95 }}
                    transition={{ delay: 2.4, duration: 1.0 }}
                    className="mt-10 text-base md:text-lg"
                    style={{ color: colors.inkSoft, fontFamily: fonts.body, maxWidth: '32rem', textAlign: 'center', lineHeight: 1.6 }}
                >
                    Levar a lei a sério e cair no legalismo não são a mesma coisa —
                    e a diferença entre elas se chama evangelho.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
