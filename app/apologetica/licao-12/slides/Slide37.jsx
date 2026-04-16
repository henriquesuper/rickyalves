'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

export function Slide37() {
    return (
        <LabWrapper stratum="warning-filter">
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-6"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Por que proof-texting funciona?
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-5 rounded-2xl text-left"
                    style={{ background: colors.bgSurface, border: `1px solid ${colors.lensAmber}15` }}
                >
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        O versículo tem <span style={{ color: colors.lensAmber, fontWeight: 600 }}>número de capítulo e versículo</span>.
                        Isso cria uma falsa sensação de precisão — como se cada versículo fosse uma unidade autônoma de significado.
                    </p>

                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        Mas os números foram adicionados <span style={{ color: colors.lensRed }}>1.500 anos depois</span> da escrita.
                        Os autores bíblicos escreveram textos contínuos — cartas, narrativas, poemas. Não versículos isolados.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="p-3 rounded-lg"
                        style={{ background: `${colors.lensTeal}08`, border: `1px solid ${colors.lensTeal}15` }}
                    >
                        <p className="text-sm font-medium" style={{ color: colors.lensTeal }}>
                            Teste da Guga: Se alguém cita um versículo pra você, a primeira pergunta é:
                            &ldquo;O que vem antes e depois?&rdquo; Se a pessoa não sabe, o versículo foi arrancado do contexto.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </LabWrapper>
    );
}
