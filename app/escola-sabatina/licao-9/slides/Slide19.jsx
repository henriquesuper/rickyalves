'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, BiblicalQuote, ScarletToSnow, colors, fonts } from './shared';

export function Slide19() {
    return (
        <ParchmentWrapper deepGradient overlay={<ScarletToSnow delay={3.0} duration={3.6} flakeCount={44} />}>
            <div className="relative max-w-3xl mx-auto px-8 py-14 flex flex-col items-center justify-center w-full">
                <div className="relative z-10 flex flex-col items-center justify-center w-full">
                    <BiblicalQuote
                        reference="Filipenses 3:9"
                        referenceTone="gold"
                        tone="wine"
                        lines={[
                            'Não tendo a minha própria justiça,',
                            'que procede da lei,',
                            'mas a que é mediante a fé em Cristo.',
                        ]}
                        emphasis={['minha própria justiça', 'mediante a fé em Cristo']}
                        size="lg"
                        align="center"
                        delay={0.6}
                    />

                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 0.5, scaleX: 1 }}
                        transition={{ delay: 2.6, duration: 0.9 }}
                        className="h-px my-8"
                        style={{ width: '140px', background: colors.gold }}
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.0, duration: 1.0 }}
                        className="text-lg md:text-xl"
                        style={{ color: colors.inkDeep, fontFamily: fonts.display, fontStyle: 'italic', maxWidth: '34rem', textAlign: 'center', lineHeight: 1.4 }}
                    >
                        Cristo nos resgatou da maldição da lei,
                        fazendo-se Ele mesmo maldição por nós.
                        <span className="block mt-2 text-sm not-italic" style={{ color: colors.inkMuted, fontFamily: fonts.body }}>
                            Gálatas 3:13
                        </span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.92 }}
                        transition={{ delay: 5.6, duration: 1.4 }}
                        className="mt-8 text-base md:text-lg"
                        style={{ color: colors.inkSoft, fontFamily: fonts.display, fontStyle: 'italic', maxWidth: '32rem', textAlign: 'center', lineHeight: 1.5 }}
                    >
                        &ldquo;Ainda que os vossos pecados sejam como a escarlata,
                        tornar-se-ão brancos como a neve.&rdquo;
                        <span className="block mt-2 text-xs not-italic uppercase tracking-[0.3em]" style={{ color: colors.inkMuted, fontFamily: fonts.body, fontVariant: 'small-caps' }}>
                            Isaías 1:18
                        </span>
                    </motion.p>
                </div>
            </div>
        </ParchmentWrapper>
    );
}
