'use client';
import { motion } from 'framer-motion';
import { LabWrapper, LensCard, TherapyParallel, colors } from './shared';

export function Slide22() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <LensCard lensNumber={4} title="Intenção Autoral" delay={0.2} accentColor={colors.lensBlue}>
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        A pergunta fundamental não é &ldquo;o que esse texto significa pra mim?&rdquo; — mas
                        &ldquo;<span style={{ color: colors.lensBlue, fontWeight: 600 }}>o que o autor quis comunicar à audiência original?</span>&rdquo;
                    </p>

                    <p className="text-sm" style={{ color: colors.textMuted }}>
                        Isso não elimina aplicação pessoal — mas a aplicação tem que partir da intenção autoral,
                        não substituí-la.
                    </p>
                </LensCard>

                <div className="mt-5">
                    <TherapyParallel
                        therapeutic="Você não interpreta as palavras do paciente pelo que VOCÊ sente. Você pergunta: o que ELE quis dizer? O texto do paciente 'fala' primeiro — depois você processa."
                        hermeneutic="O texto bíblico 'fala' primeiro — o que o autor quis comunicar? Depois a gente processa o que isso significa na nossa vida."
                        delay={0.6}
                    />
                </div>
            </div>
        </LabWrapper>
    );
}
