'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, EvidenceCard, colors } from './shared';

export function Slide59() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>ROMA, GÁLATAS, TESSALÔNICA, ATENAS</motion.h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <EvidenceCard delay={0.4} icon="🏛️">
                        <h3 className="font-bold mb-1" style={{ color: colors.amber }}>Roma</h3>
                        <p className="text-sm" style={{ color: colors.textLight }}>Capital do império. Paulo escreve Romanos antes de ir — é sua &quot;carta de apresentação teológica.&quot;</p>
                    </EvidenceCard>
                    <EvidenceCard delay={0.5} icon="🌾">
                        <h3 className="font-bold mb-1" style={{ color: colors.amber }}>Galácia</h3>
                        <p className="text-sm" style={{ color: colors.textLight }}>Interior da Ásia Menor. Comunidades judaico-cristãs sendo pressionadas a circuncidar gentios. Gálatas é a resposta furiosa.</p>
                    </EvidenceCard>
                    <EvidenceCard delay={0.6} icon="⚒️">
                        <h3 className="font-bold mb-1" style={{ color: colors.amber }}>Tessalônica</h3>
                        <p className="text-sm" style={{ color: colors.textLight }}>Cidade portuária, mão-de-obra. Paulo trabalhou fazendo tendas enquanto pregava. As cartas são as mais antigas do NT (~51 d.C.).</p>
                    </EvidenceCard>
                    <EvidenceCard delay={0.7} icon="🎭">
                        <h3 className="font-bold mb-1" style={{ color: colors.amber }}>Atenas</h3>
                        <p className="text-sm" style={{ color: colors.textLight }}>Capital intelectual. Atos 17: Paulo no Areópago citando poetas gregos para apresentar o Deus desconhecido.</p>
                    </EvidenceCard>
                </div>
            </div>
        </SlideWrapper>
    );
}
