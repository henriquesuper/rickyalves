'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, colors } from './shared';

export function Slide29() {
    return (
        <ExcavationWrapper stratum="limestone">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-6 text-center font-mono"
                    style={{ color: colors.textLight }}
                >
                    PRAEFECTUS IUDAEAE
                </motion.h2>

                {/* Quote box — transliteration */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-5 rounded-lg mb-6"
                    style={{
                        background: colors.bgDeep,
                        borderLeft: `3px solid ${colors.excavationAmber}`,
                    }}
                >
                    <p className="text-lg font-mono leading-relaxed text-center" style={{ color: colors.excavationAmber }}>
                        [...]PONT]IUS PILATUS<br />[...PRAEF]ECTUS IUDA[EA]E
                    </p>
                </motion.div>

                {/* Key insight cards */}
                <div className="space-y-3 mb-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="p-4 rounded-lg"
                        style={{ background: colors.bgSurface, border: `1px solid ${colors.excavationAmber}15` }}
                    >
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            <span className="mr-2">1.</span>
                            A inscrição identifica Pilatos como &lsquo;prefeito&rsquo; (praefectus), não &lsquo;procurador&rsquo; — o título correto do período
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="p-4 rounded-lg"
                        style={{ background: colors.bgSurface, border: `1px solid ${colors.excavationAmber}15` }}
                    >
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            <span className="mr-2">2.</span>
                            Tácito, 80 anos depois, usou &lsquo;procurador&rsquo; — adaptando ao vocabulário de sua época
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                        className="p-4 rounded-lg"
                        style={{ background: colors.bgSurface, border: `1px solid ${colors.excavationAmber}15` }}
                    >
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            <span className="mr-2">3.</span>
                            2018: anel de cobre com &lsquo;PILATO&rsquo; em grego decifrado no Heródio
                        </p>
                    </motion.div>
                </div>

                {/* Insight */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="p-4 rounded-lg text-center"
                    style={{
                        background: `${colors.fieldGreen}10`,
                        border: `1px solid ${colors.fieldGreen}30`,
                    }}
                >
                    <p className="text-sm italic" style={{ color: colors.fieldGreen }}>
                        Fontes independentes usando títulos diferentes de épocas diferentes = autenticidade.
                    </p>
                </motion.div>
            </div>
        </ExcavationWrapper>
    );
}
