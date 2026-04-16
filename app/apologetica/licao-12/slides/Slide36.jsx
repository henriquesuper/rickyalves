'use client';
import { motion } from 'framer-motion';
import { LabWrapper, DangerCard, VerseCard, ComparisonPanel, colors } from './shared';

export function Slide36() {
    return (
        <LabWrapper stratum="warning-filter">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <DangerCard number={1} title="Prova Textual Isolada (Proof-texting)" delay={0.2}
                    description="Arrancar um versículo de seu contexto e usar como 'prova' de uma posição. É o pecado hermenêutico mais comum na cristandade."
                >
                    <VerseCard
                        reference="Mateus 18:20"
                        text="Onde dois ou três estiverem reunidos no meu nome, ali estou eu no meio deles."
                        readingType="distorted"
                        delay={0.5}
                    />

                    <div className="mt-4">
                        <ComparisonPanel
                            leftTitle="⊘ USO COMUM"
                            leftContent="'Basta reunir 3 pessoas e Jesus está presente. Justificativa para culto informal.'"
                            rightTitle="◎ CONTEXTO REAL"
                            rightContent="O contexto (18:15-20) é sobre disciplina eclesiástica — Jesus fala de resolver conflitos na comunidade, não de quórum mínimo para reunião."
                            delay={0.7}
                        />
                    </div>
                </DangerCard>
            </div>
        </LabWrapper>
    );
}
