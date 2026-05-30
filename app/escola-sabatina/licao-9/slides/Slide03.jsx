'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

const axis = [
    { text: 'A lei me mostra o pecado.', color: '#1F4068' },
    { text: 'O evangelho me salva dele.', color: '#722F37' },
    { text: 'A obediência é o fruto — nunca o preço.', color: '#B8860B' },
];

export function Slide03() {
    return (
        <ParchmentWrapper deepGradient>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <SectionLabel align="center" delay={0.2} color={colors.inkMuted}>
                    O eixo desta aula
                </SectionLabel>

                <div className="mt-12 flex flex-col items-center gap-6">
                    {axis.map((a, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 + i * 1.1, duration: 0.9, ease: 'easeOut' }}
                            className="text-2xl md:text-4xl"
                            style={{
                                color: a.color,
                                fontFamily: fonts.display,
                                fontStyle: 'italic',
                                lineHeight: 1.3,
                                textAlign: 'center',
                            }}
                        >
                            {a.text}
                        </motion.p>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.92 }}
                    transition={{ delay: 4.4, duration: 1.0 }}
                    className="mt-14 text-sm"
                    style={{ color: colors.inkMuted, fontFamily: fonts.body, letterSpacing: '0.2em' }}
                >
                    Cinco movimentos · do diagnóstico ao tribunal
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
