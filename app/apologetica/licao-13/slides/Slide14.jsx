'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, GenreCard, ContractCard, colors } from './shared';

export function Slide14() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-4">
                <GenreCard
                    shelfNumber={1}
                    title="Narrativa histórica"
                    icon="📜"
                    accentColor={colors.genreAmber}
                    delay={0.2}
                >
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        Relato de eventos no tempo e espaço — com personagens, causalidade, geografia.
                        Narra <span style={{ color: colors.genreAmber, fontWeight: 600 }}>o que aconteceu</span>,
                        mas seletivamente, com propósito teológico.
                    </p>

                    <div className="mb-4">
                        <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.genreAmber }}>
                            Exemplos
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            Gênesis · Êxodo · Josué · Juízes · 1–2 Samuel · 1–2 Reis · Crônicas · Esdras · Neemias · Ester · Evangelhos · Atos
                        </p>
                    </div>
                </GenreCard>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <ContractCard
                        accentColor={colors.genreAmber}
                        expect={[
                            'Mostrar antes de dizer',
                            'História selecionada com propósito',
                            'Consequências desdobrando em arco',
                        ]}
                        dontExpect={[
                            'Comentário moral explícito do narrador',
                            'Crônica exaustiva de tudo que aconteceu',
                        ]}
                        delay={0.9}
                    />
                </motion.div>
            </div>
        </LibraryWrapper>
    );
}
