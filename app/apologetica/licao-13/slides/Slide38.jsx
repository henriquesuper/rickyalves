'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, GenreCard, colors } from './shared';

export function Slide38() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <GenreCard
                    shelfNumber={9}
                    title="Cartas · Epístolas"
                    icon="✉️"
                    accentColor={colors.genreBlue}
                    delay={0.2}
                >
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        Correspondência ocasional — escrita para comunidades cristãs específicas,
                        respondendo a problemas específicos.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55 }}
                        className="p-4 rounded-lg mb-4"
                        style={{
                            background: `${colors.inkGold}10`,
                            border: `1px solid ${colors.inkGold}25`,
                        }}
                    >
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            Ler uma carta é ler <span style={{ color: colors.inkGold, fontWeight: 600 }}>metade de uma conversa</span>.
                            Você entra no meio do diálogo, do lado do remetente — e
                            precisa inferir do contexto o que estava do outro lado.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.85 }}
                        className="p-4 rounded-lg mb-4"
                        style={{
                            background: colors.bgDeep,
                            border: `1px solid ${colors.genreBlue}25`,
                        }}
                    >
                        <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.genreBlue }}>
                            Pergunta-chave
                        </p>
                        <p className="text-sm" style={{ color: colors.textLight, fontStyle: 'italic' }}>
                            Que problema esta carta está tentando resolver?
                        </p>
                    </motion.div>

                    <div>
                        <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.genreBlue }}>
                            Exemplos
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            13 cartas paulinas · Hebreus · Tiago · 1–2 Pedro · 1–3 João · Judas
                        </p>
                    </div>
                </GenreCard>
            </div>
        </LibraryWrapper>
    );
}
