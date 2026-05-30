'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, BiblicalQuote, QuestionCard, colors, fonts } from './shared';

export function Slide13() {
    return (
        <ParchmentWrapper>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-base md:text-lg"
                    style={{ color: colors.inkSoft, fontFamily: fonts.body, maxWidth: '32rem', textAlign: 'center' }}
                >
                    Satanás distorceu a beleza da lei, fazendo alguns a verem como um fardo.
                    Mas a Bíblia diz o contrário:
                </motion.p>

                <div className="mt-10">
                    <BiblicalQuote
                        reference="1 João 5:3"
                        referenceTone="gold"
                        tone="lapis"
                        lines={[
                            'Este é o amor de Deus: que guardemos os Seus mandamentos.',
                            'E os Seus mandamentos não são pesados.',
                        ]}
                        emphasis={['não são pesados']}
                        size="md"
                        align="center"
                        delay={0.9}
                    />
                </div>

                <div className="mt-14 w-full">
                    <QuestionCard label="Pergunta para a classe" delay={2.4} accent={colors.lapis}>
                        Quando penso na lei de Deus, sinto que ela tira a minha liberdade
                        ou que me fortalece?
                    </QuestionCard>
                </div>
            </div>
        </ParchmentWrapper>
    );
}
