'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, SourceCard, colors } from './shared';

export function Slide42() {
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
                    Fonte 2 de 4
                </motion.p>

                {/* Source Card */}
                <SourceCard
                    author="Tácito"
                    work="Annales XV.44"
                    date="~116 d.C."
                    quote="Cristo, de quem o nome se origina, sofreu a pena extrema durante o reinado de Tibério, pelas mãos de um dos nossos procuradores, Pôncio Pilatos; e a superstição perniciosa, assim reprimida por um momento, irrompeu novamente não apenas na Judeia, origem desse mal, mas até em Roma."
                    stance="hostile"
                    analysis="Tácito era senador romano com acesso a registros oficiais. Ele DESPREZAVA os cristãos — chamou o cristianismo de 'superstição perniciosa'."
                    delay={0.3}
                />
            </div>
        </ExcavationWrapper>
    );
}
