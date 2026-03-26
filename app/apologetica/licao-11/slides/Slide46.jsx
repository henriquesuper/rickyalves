'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, SourceCard, colors } from './shared';

export function Slide46() {
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
                    Fonte 4 de 4
                </motion.p>

                {/* Source Card */}
                <SourceCard
                    author="Talmude Babilônico"
                    work="Sanhedrin 43a"
                    date="Compilado séc. V · Tradições séc. I-II"
                    quote="Yeshu praticou feitiçaria e seduziu Israel... foi executado na véspera da Páscoa."
                    stance="hostile"
                    analysis="Mesmo fontes hostis ao cristianismo não negam a existência de Jesus ou seus atos extraordinários — apenas os atribuem a outra fonte."
                    delay={0.3}
                />
            </div>
        </ExcavationWrapper>
    );
}
