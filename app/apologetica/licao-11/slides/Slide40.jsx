'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, SourceCard, colors } from './shared';

export function Slide40() {
    return (
        <ExcavationWrapper stratum="papyrus">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Protocol */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs mb-4 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Fonte 1 de 4
                </motion.p>

                {/* Source Card */}
                <SourceCard
                    author="Flávio Josefo"
                    work="Antiquitates Judaicae XVIII.63-64"
                    date="93-94 d.C."
                    quote="Nesse tempo surgiu Jesus, um homem sábio. Ele realizava feitos surpreendentes e era mestre de pessoas que aceitavam a verdade com prazer. Atraiu muitos judeus e gregos. E quando Pilatos o condenou à cruz, aqueles que o amavam desde o início não cessaram. Até hoje a tribo dos cristãos, assim chamados por causa dele, não desapareceu."
                    stance="neutral"
                    analysis="⚠️ Texto reconstruído — removendo interpolações cristãs posteriores. A versão que chegou até nós contém frases impossíveis para um judeu praticante ('Ele era o Cristo')."
                    delay={0.3}
                />

                {/* 3 color-coded layer labels */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="flex flex-wrap gap-3 mt-5 justify-center"
                >
                    <span
                        className="text-xs font-bold px-3 py-1.5 rounded-full"
                        style={{ background: `${colors.fieldGreen}20`, color: colors.fieldGreen, border: `1px solid ${colors.fieldGreen}40` }}
                    >
                        Original de Josefo
                    </span>
                    <span
                        className="text-xs font-bold px-3 py-1.5 rounded-full"
                        style={{ background: `${colors.excavationAmber}20`, color: colors.excavationAmber, border: `1px solid ${colors.excavationAmber}40` }}
                    >
                        Debatido
                    </span>
                    <span
                        className="text-xs font-bold px-3 py-1.5 rounded-full"
                        style={{ background: `${colors.clayRed}20`, color: colors.clayRed, border: `1px solid ${colors.clayRed}40` }}
                    >
                        Interpolação cristã
                    </span>
                </motion.div>
            </div>
        </ExcavationWrapper>
    );
}
