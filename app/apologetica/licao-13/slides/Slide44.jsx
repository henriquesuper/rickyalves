'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

export function Slide44() {
    return (
        <LibraryWrapper stratum="aberracoes">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] font-mono text-center mb-3"
                    style={{ color: colors.textMuted }}
                >
                    Erro 3 · Parábola como código legal
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-3xl font-bold text-center mb-6"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Alegorizar até o detalhe desaparecer do ponto
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="rounded-xl p-5 mb-4"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.warnRed}25`,
                        borderLeft: `3px solid ${colors.warnRed}`,
                    }}
                >
                    <p
                        className="text-sm font-bold uppercase tracking-wider mb-3"
                        style={{ color: colors.warnRed }}
                    >
                        Bom Samaritano alegorizado
                    </p>
                    <ul className="space-y-1 text-sm" style={{ color: colors.textMedium }}>
                        <li>• &ldquo;Os dois denários são os dois testamentos&rdquo;</li>
                        <li>• &ldquo;O óleo é o Espírito Santo&rdquo;</li>
                        <li>• &ldquo;O burro é a natureza humana de Cristo&rdquo;</li>
                        <li>• &ldquo;A estalagem é a igreja&rdquo;</li>
                    </ul>
                    <p className="text-xs italic mt-3" style={{ color: colors.textMuted }}>
                        O texto para de pregar caridade.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="rounded-xl p-5"
                    style={{
                        background: `${colors.goodGreen}10`,
                        border: `1px solid ${colors.goodGreen}25`,
                    }}
                >
                    <p
                        className="text-sm font-bold uppercase tracking-wider mb-2"
                        style={{ color: colors.goodGreen }}
                    >
                        O ponto é um só
                    </p>
                    <p className="text-base" style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}>
                        &ldquo;Quem é o meu próximo?&rdquo;
                    </p>
                    <p className="text-sm italic mt-2" style={{ color: colors.textMedium }}>
                        O samaritano desmonta a categoria. A história serve à pergunta. O choque ético é o trabalho do texto.
                    </p>
                </motion.div>
            </div>
        </LibraryWrapper>
    );
}
