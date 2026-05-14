'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, BiblicalQuote, ProseBlock, colors } from './shared';

export function Slide07({ slideIndex = 6 }) {
    return (
        <ParchmentWrapper slideIndex={slideIndex}>
            <div className="max-w-3xl mx-auto px-8 py-6 flex flex-col items-center justify-center w-full">
                <BiblicalQuote
                    reference="Gênesis 3:15"
                    size="md"
                    align="center"
                    delay={0.4}
                    lines={[
                        'Porei inimizade entre ti e a mulher,',
                        'entre a tua descendência e o seu descendente;',
                        'este te ferirá a cabeça,',
                        'e tu lhe ferirás o calcanhar.',
                    ]}
                />

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.35, scaleX: 1 }}
                    transition={{ delay: 1.8, duration: 1.0 }}
                    className="h-px mx-auto my-7"
                    style={{ width: '100px', background: colors.inkMuted }}
                />

                <ProseBlock
                    align="center"
                    size="sm"
                    delay={2.2}
                    italic
                    color={colors.inkSoft}
                    maxWidth="32rem"
                    lines={[
                        'A primeira promessa de derrota do mal.',
                        'A história começa, e já aponta para o que ainda virá.',
                    ]}
                />
            </div>
        </ParchmentWrapper>
    );
}
