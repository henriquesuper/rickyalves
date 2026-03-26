'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, StratumHeader, colors } from './shared';

export function Slide12() {
    return (
        <ExcavationWrapper stratum="terracotta">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <StratumHeader
                    stratumName="DESCOBERTAS DO ANTIGO TESTAMENTO"
                    subtitle="Camada Terracota — 6 artefatos que falam"
                    icon="🏛️"
                    depth="3m"
                />
            </div>
        </ExcavationWrapper>
    );
}
