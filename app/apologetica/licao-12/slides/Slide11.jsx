'use client';
import { motion } from 'framer-motion';
import { LabWrapper, ComparisonTable, colors } from './shared';

export function Slide11() {
    return (
        <LabWrapper stratum="first-lens">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-6"
                >
                    <span className="text-4xl">⚖️</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold mb-2 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Guga, Você Já Sabe Fazer Isso
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm mb-6"
                    style={{ color: colors.textMedium }}
                >
                    Hermenêutica jurídica e hermenêutica bíblica usam as mesmas categorias:
                </motion.p>

                <ComparisonTable
                    columns={['Método', 'No Direito', 'Na Bíblia']}
                    rows={[
                        ['Gramatical', 'Significado das palavras na norma', 'Significado das palavras no original (hebraico/grego)'],
                        ['Histórica', 'Contexto da promulgação da lei', 'Contexto histórico-cultural do texto'],
                        ['Teleológica', 'Qual a finalidade da norma?', 'Qual a intenção do autor?'],
                        ['Sistemática', 'Artigo lido no conjunto do ordenamento', 'Versículo lido no conjunto do cânon'],
                    ]}
                    delay={0.7}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="mt-6 p-4 rounded-xl text-center"
                    style={{ background: `${colors.lensPurple}08`, border: `1px solid ${colors.lensPurple}15` }}
                >
                    <p className="text-sm italic" style={{ color: colors.lensPurple }}>
                        Você não está aprendendo do zero. Está aplicando o que já conhece a um texto diferente.
                    </p>
                </motion.div>
            </div>
        </LabWrapper>
    );
}
