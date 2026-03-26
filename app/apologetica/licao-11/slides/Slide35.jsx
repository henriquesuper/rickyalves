'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, colors } from './shared';

export function Slide35() {
    return (
        <ExcavationWrapper stratum="limestone">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-4 text-center font-mono"
                    style={{ color: colors.textLight }}
                >
                    ERASTVS PRO AED S P STRAVIT
                </motion.h2>

                {/* Translation */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-base italic text-center mb-6"
                    style={{ color: colors.textMedium }}
                >
                    &ldquo;Erasto, em reconhecimento por sua edilidade, pavimentou esta área à sua própria custa.&rdquo;
                </motion.p>

                {/* Two-column: Romanos vs. Inscrição */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="p-5 rounded-lg"
                        style={{
                            background: colors.bgSurface,
                            borderLeft: `3px solid ${colors.excavationAmber}`,
                        }}
                    >
                        <p className="text-xs uppercase tracking-wider font-bold mb-2" style={{ color: colors.excavationAmber }}>
                            &#x1F4DC; Romanos 16:23
                        </p>
                        <p className="text-base" style={{ color: colors.textLight }}>
                            &ldquo;Erasto, o tesoureiro da cidade, vos saúda&rdquo;
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="p-5 rounded-lg"
                        style={{
                            background: colors.bgSurface,
                            borderLeft: `3px solid ${colors.excavationAmber}`,
                        }}
                    >
                        <p className="text-xs uppercase tracking-wider font-bold mb-2" style={{ color: colors.excavationAmber }}>
                            &#x1F3DB;&#xFE0F; Inscrição
                        </p>
                        <p className="text-base" style={{ color: colors.textLight }}>
                            Erasto, edil (oficial) de Corinto
                        </p>
                    </motion.div>
                </div>

                {/* Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="p-4 rounded-lg text-center"
                    style={{
                        background: `${colors.statusDebated}10`,
                        border: `1px solid ${colors.statusDebated}30`,
                    }}
                >
                    <p className="text-sm" style={{ color: colors.statusDebated }}>
                        &#9888;&#65039; Títulos diferentes (tesoureiro vs. edil) — debatido se é a mesma pessoa. Mas o nome é raro e a cidade é a mesma.
                    </p>
                </motion.div>
            </div>
        </ExcavationWrapper>
    );
}
