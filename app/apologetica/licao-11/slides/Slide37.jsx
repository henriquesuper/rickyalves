'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, colors } from './shared';

export function Slide37() {
    return (
        <ExcavationWrapper stratum="limestone">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    UM HISTORIADOR DE PRIMEIRA CLASSE
                </motion.h2>

                {/* Quote box */}
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
                    <p className="text-lg italic leading-relaxed" style={{ color: colors.textLight }}>
                        &ldquo;Comecei como cético sobre os escritos de Lucas... Concluí que Lucas era um historiador de primeira classe.&rdquo;
                    </p>
                    <p className="text-sm mt-2" style={{ color: colors.textMuted }}>
                        — Sir William Ramsay
                    </p>
                </motion.div>

                {/* Key point */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="p-4 rounded-lg mb-4"
                    style={{
                        background: `${colors.excavationAmber}10`,
                        border: `1px solid ${colors.excavationAmber}30`,
                    }}
                >
                    <p className="text-sm" style={{ color: colors.excavationAmber }}>
                        &lsquo;Politarca&rsquo; era desconhecido fora da Bíblia até que 30+ inscrições usando exatamente esse título foram encontradas em Tessalônica.
                    </p>
                </motion.div>

                {/* Insight */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="p-4 rounded-lg text-center"
                    style={{
                        background: `${colors.fieldGreen}10`,
                        border: `1px solid ${colors.fieldGreen}30`,
                    }}
                >
                    <p className="text-sm font-bold" style={{ color: colors.fieldGreen }}>
                        Mais um caso de &ldquo;o cético corrigido pela arqueologia.&rdquo;
                    </p>
                </motion.div>
            </div>
        </ExcavationWrapper>
    );
}
