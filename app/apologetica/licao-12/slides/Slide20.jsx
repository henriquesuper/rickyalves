'use client';
import { motion } from 'framer-motion';
import { LabWrapper, LensCard, colors } from './shared';

export function Slide20() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <LensCard lensNumber={3} title="Escritura Interpreta Escritura" delay={0.2} accentColor={colors.lensTeal}>
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        Se a Bíblia é uma coleção unificada, então passagens claras ajudam a iluminar passagens obscuras.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="p-4 rounded-xl mb-4"
                        style={{ background: `${colors.lensTeal}08` }}
                    >
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            Isso não é raciocínio circular. É como funciona qualquer corpus coerente.
                            Se você tem 10 cartas de um mesmo autor e uma tem uma frase ambígua,
                            o que você faz? <span style={{ color: colors.lensTeal, fontWeight: 600 }}>Lê as outras 9</span> pra
                            ver como o autor usa aquele termo em outros lugares.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="p-3 rounded-lg"
                        style={{ background: `${colors.lensPurple}08`, border: `1px solid ${colors.lensPurple}15` }}
                    >
                        <p className="text-xs" style={{ color: colors.lensPurple }}>
                            <strong>Sola Scriptura:</strong> A Bíblia é seu próprio intérprete — você não precisa de uma
                            autoridade externa para &ldquo;desbloquear&rdquo; seu sentido. O texto é acessível, verificável, e não depende de gatekeeper.
                        </p>
                    </motion.div>
                </LensCard>
            </div>
        </LabWrapper>
    );
}
