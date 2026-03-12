'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, SuspectCard, colors } from './shared';

export function Slide27() {
    const groups = [
        { name: 'Saduceus', role: 'Elite sacerdotal e aristocrática', argument: 'Só aceitavam a Torah escrita. Não acreditavam em ressurreição. Controlavam o Templo. Colaboravam com Roma.', icon: '🏛️' },
        { name: 'Essênios', role: 'Grupo ascético no deserto', argument: 'Provavelmente autores dos Manuscritos do Mar Morto. Consideravam o Templo corrompido. Esperavam conflito apocalíptico.', icon: '📜' },
        { name: 'Zelotes', role: 'Resistência armada contra Roma', argument: 'Um discípulo era zelote (Lc 6:15). Jesus tinha no mesmo grupo um colaborador de Roma e um revolucionário anti-Roma.', icon: '⚔️' },
    ];

    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    AS OUTRAS VOZES
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {groups.map((g, i) => (
                        <SuspectCard key={i} name={g.name} role={g.role} argument={g.argument} delay={0.4 + i * 0.2} icon={g.icon} />
                    ))}
                </div>
            </div>
        </SlideWrapper>
    );
}
