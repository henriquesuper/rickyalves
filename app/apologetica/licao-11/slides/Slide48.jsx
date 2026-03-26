'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, StratumHeader, colors } from './shared';

export function Slide48() {
    return (
        <ExcavationWrapper stratum="bedrock">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <StratumHeader
                    stratumName="A ROCHA NO FUNDO"
                    subtitle="O que encontramos depois de escavar"
                    icon="💎"
                    depth="10m"
                />
            </div>
        </ExcavationWrapper>
    );
}
