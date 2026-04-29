'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, TrapCard, VerseCard, colors } from './shared';

export function Slide19() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <TrapCard
                    title="Ler poesia como proposição jurídica"
                    description="O salmista documenta o grito; não o prescreve. Confundir esses dois planos é o atalho para se escandalizar com a Bíblia sem ter lido a Bíblia."
                    delay={0.2}
                >
                    <VerseCard
                        reference="Sl 137.9"
                        text="Feliz aquele que pegar os teus filhos e os despedaçar contra a rocha."
                        tone="danger"
                        delay={0.5}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-4 p-4 rounded-lg"
                        style={{
                            background: `${colors.genrePurple}10`,
                            border: `1px solid ${colors.genrePurple}28`,
                        }}
                    >
                        <p className="text-sm mb-2" style={{ color: colors.textMedium }}>
                            Isso <span style={{ color: colors.textLight, fontWeight: 600 }}>não é</span>{' '}
                            endosso divino de infanticídio.
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            É o <span style={{ color: colors.genrePurple, fontWeight: 600 }}>lamento-grito</span>{' '}
                            de um exilado traumatizado pela destruição de Jerusalém —
                            expressando em verso a dor mais bruta que ele consegue articular.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="mt-4"
                    >
                        <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.inkGold }}>
                            Regras de leitura da poesia
                        </p>
                        <ul className="space-y-2 text-sm" style={{ color: colors.textMedium }}>
                            <li>
                                <span style={{ color: colors.inkGold }}>•</span> Linguagem emocionalmente concentrada, cognitivamente densa.
                            </li>
                            <li>
                                <span style={{ color: colors.inkGold }}>•</span> Não responde perguntas analíticas — forma o leitor.
                            </li>
                            <li>
                                <span style={{ color: colors.inkGold }}>•</span> Hipérbole é convenção aceita
                                <span style={{ color: colors.textMuted }}> (&ldquo;os rios bateram palmas&rdquo;, Sl 98.8)</span>.
                            </li>
                        </ul>
                    </motion.div>
                </TrapCard>
            </div>
        </LibraryWrapper>
    );
}
