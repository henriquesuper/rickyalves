'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, QuietTitle, colors, fonts } from './shared';

export function Slide32({ slideIndex = 31 }) {
    return (
        <ParchmentWrapper deepGradient>
            <div className="w-full max-w-4xl mx-auto px-8 py-28 text-center flex flex-col items-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 0.4, duration: 1.0 }}
                    className="text-xs md:text-sm tracking-[0.45em] uppercase mb-12"
                    style={{
                        color: colors.inkMuted,
                        fontFamily: fonts.body,
                        fontVariant: 'small-caps',
                    }}
                >
                    a costura entre o cosmos e a narrativa
                </motion.p>

                <QuietTitle size="lg" align="center" delay={1.0} weight={500} italic>
                    A porta do céu
                    <br />
                    é gente,
                    <br />
                    não lugar.
                </QuietTitle>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.5, scaleX: 1 }}
                    transition={{ delay: 3.4, duration: 1.0 }}
                    className="mt-12 h-px"
                    style={{ width: '120px', background: colors.gold }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 4.0, duration: 1.0 }}
                    className="mt-10 text-sm md:text-base italic max-w-2xl"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        lineHeight: 1.55,
                    }}
                >
                    1.51 é a versão narrativa e judaica do que 1.1—14 disse
                    em linguagem filosófica. A ponte entre o transcendente
                    e o finito — uma pessoa.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
