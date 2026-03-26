'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ExcavationSeal, StratumHeader, EvidenceScale, BrushReveal, StampBadge, colors, quizQuestions } from './shared';

export function Slide06() {
    return (
        <ExcavationWrapper stratum="topsoil">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <StratumHeader
                    stratumName="CALIBRANDO EXPECTATIVAS"
                    subtitle="Antes de cavar, precisamos das ferramentas certas"
                    icon="🔧"
                    depth="1m"
                />
            </div>
        </ExcavationWrapper>
    );
}
