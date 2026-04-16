'use client';
import { motion } from 'framer-motion';
import { LabWrapper, TherapyParallel, colors } from './shared';

export function Slide18() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-wider mb-2 text-center"
                    style={{ color: colors.lensBlue }}
                >
                    Lente 2 em ação
                </motion.h3>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Projeção Textual
                </motion.h2>

                <TherapyParallel
                    therapeutic="No atendimento, projeção é quando o paciente projeta no terapeuta aquilo que já carrega internamente. Ele 'lê' no terapeuta o que está dentro dele."
                    hermeneutic="Eisegese é exatamente isso: o leitor projeta no texto o que já quer encontrar. Ele 'lê' na Bíblia o que está dentro dele — não o que o texto diz."
                    delay={0.5}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-5 p-4 rounded-xl"
                    style={{ background: `${colors.lensAmber}08`, border: `1px solid ${colors.lensAmber}15` }}
                >
                    <p className="text-sm" style={{ color: colors.textMedium }}>
                        <span style={{ color: colors.lensAmber, fontWeight: 600 }}>Exemplo honesto:</span> Calvinistas leem
                        Romanos 9 e veem predestinação incondicional. Arminianos leem o mesmo texto e veem presciência.
                        A pergunta não é &ldquo;ambos estão certos&rdquo; — é: quem consegue justificar
                        a leitura a partir dos dados do texto? Isso é verificável.
                    </p>
                </motion.div>
            </div>
        </LabWrapper>
    );
}
