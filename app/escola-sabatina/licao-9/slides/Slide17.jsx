'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, LightBeam, colors, fonts } from './shared';

export function Slide17() {
    return (
        <ParchmentWrapper wineDark>
            <div className="relative max-w-3xl mx-auto px-8 py-24 flex flex-col items-center justify-center w-full">
                <LightBeam color={colors.goldFaint} width={300} delay={1.2} duration={5.0} intensity={0.45} />
                {/* cruz minimalista desenhada */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.6, duration: 2.0 }}
                    className="relative mb-16"
                    style={{ width: '2px', height: '120px', background: colors.goldFaint, zIndex: 1 }}
                >
                    <span
                        className="absolute"
                        style={{ top: '34px', left: '-29px', width: '60px', height: '2px', background: colors.goldFaint }}
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4, duration: 1.6 }}
                    className="relative text-4xl md:text-6xl"
                    style={{ color: colors.parchment, fontFamily: fonts.display, fontStyle: 'italic', textAlign: 'center', zIndex: 1 }}
                >
                    Está consumado.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 4.0, duration: 1.4 }}
                    className="relative mt-8 text-xs uppercase tracking-[0.4em]"
                    style={{ color: colors.goldFaint, fontFamily: fonts.body, fontVariant: 'small-caps', zIndex: 1 }}
                >
                    João 19:30
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
