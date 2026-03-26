'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, StratumHeader, colors } from './shared';

export function Slide27() {
    return (
        <ExcavationWrapper stratum="limestone">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <StratumHeader
                    stratumName="DESCOBERTAS DO NOVO TESTAMENTO"
                    subtitle="Camada Calcário — 5 descobertas que iluminam"
                    icon="⛪"
                    depth="5m"
                />
            </div>
        </ExcavationWrapper>
    );
}
