'use client';
import { motion } from 'framer-motion';
import { LabWrapper, VerseCard, colors } from './shared';

export function Slide50() {
    return (
        <LabWrapper stratum="advanced-optics">
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs font-bold uppercase tracking-wider mb-4"
                    style={{ color: colors.lensPurple }}
                >
                    A metáfora óptica está NA Bíblia
                </motion.p>

                <VerseCard
                    reference="1 Coríntios 13:12"
                    text="Agora vemos como por espelho, de maneira obscura; então veremos face a face. Agora conheço em parte; então conhecerei plenamente, como também sou plenamente conhecido."
                    readingType="focused"
                    delay={0.4}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 p-4 rounded-xl"
                    style={{ background: `${colors.lensPurple}08`, border: `1px solid ${colors.lensPurple}15` }}
                >
                    <p className="text-sm leading-relaxed" style={{ color: colors.textMedium }}>
                        Paulo sabia que nossa visão é <span style={{ color: colors.lensAmber, fontWeight: 600 }}>parcial</span>.
                        Isso não é fraqueza da fé — é <span style={{ color: colors.lensTeal, fontWeight: 600 }}>honestidade epistêmica</span>.
                    </p>
                    <p className="text-sm mt-3" style={{ color: colors.textMedium }}>
                        Hermenêutica não promete visão perfeita.
                        Promete <span style={{ color: colors.lensBlue, fontWeight: 600 }}>lentes mais honestas</span>.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-4 text-xs italic"
                    style={{ color: colors.textMuted }}
                >
                    Humildade hermenêutica: o antídoto para o dogmatismo arrogante.
                </motion.p>
            </div>
        </LabWrapper>
    );
}
