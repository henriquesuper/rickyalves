'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, BiblicalQuote, QuestionCard, ThinRule, colors, fonts } from './shared';

export function Slide32() {
    return (
        <ParchmentWrapper>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <BiblicalQuote
                    reference="Salmos 119:93, 94"
                    referenceTone="gold"
                    tone="wine"
                    lines={[
                        '\u201cSou Teu; salva-me,',
                        'pois eu busco os Teus preceitos.\u201d',
                    ]}
                    emphasis={['salva-me', 'busco']}
                    size="lg"
                    align="center"
                    delay={0.5}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.0, duration: 1.0 }}
                    className="mt-8 text-base md:text-lg"
                    style={{ color: colors.inkSoft, fontFamily: fonts.body, maxWidth: '30rem', textAlign: 'center' }}
                >
                    A ordem do salmista é a ordem do evangelho:
                    primeiro <em>&ldquo;salva-me&rdquo;</em>, depois <em>&ldquo;busco os Teus preceitos&rdquo;</em>.
                </motion.p>

                <div className="mt-12">
                    <ThinRule width="140px" color={colors.gold} delay={3.0} opacity={0.5} />
                </div>

                <div className="mt-12 w-full">
                    <QuestionCard label="Para levar para casa" delay={3.4} accent={colors.gold}>
                        Sua obediência tem nascido do medo do tribunal —
                        ou da gratidão de quem já foi absolvido?
                    </QuestionCard>
                </div>
            </div>
        </ParchmentWrapper>
    );
}
