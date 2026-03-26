'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, StratumHeader, colors } from './shared';

export function Slide39() {
    return (
        <ExcavationWrapper stratum="papyrus">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <StratumHeader
                    stratumName="FONTES HISTÓRICAS EXTERNAS"
                    subtitle="Camada Papiro — Quando NÃO-cristãos falam de Cristo"
                    icon="📜"
                    depth="8m"
                />
            </div>
        </ExcavationWrapper>
    );
}
