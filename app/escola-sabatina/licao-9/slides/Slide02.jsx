'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

const lines = [
    'Nunca me esquecerei dos Teus preceitos,',
    'pois é por meio deles que me tens dado vida.',
    'Sou Teu; salva-me,',
    'pois eu busco os Teus preceitos.',
];

export function Slide02() {
    return (
        <ParchmentWrapper>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <SectionLabel align="center" delay={0.2} color={colors.inkMuted}>
                    Verso para memorizar
                </SectionLabel>

                <div className="mt-10">
                    <BiblicalQuote
                        reference="Salmos 119:93, 94"
                        referenceTone="gold"
                        tone="wine"
                        lines={lines}
                        emphasis={['salva-me', 'dado vida']}
                        size="lg"
                        align="center"
                        delay={0.8}
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.6, duration: 1.0 }}
                    className="mt-12 text-base md:text-lg"
                    style={{ color: colors.inkSoft, fontFamily: fonts.body, maxWidth: '30rem', textAlign: 'center' }}
                >
                    Repare na ordem do salmista: primeiro <em>&ldquo;salva-me&rdquo;</em>,
                    depois <em>&ldquo;busco os Teus preceitos&rdquo;</em>. Guardaremos essa ordem.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
