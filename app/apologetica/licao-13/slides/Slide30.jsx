'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

export function Slide30() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] font-mono text-center mb-3"
                    style={{ color: colors.textMuted }}
                >
                    Nota pessoal · honestidade
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="rounded-2xl p-6 md:p-8"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.inkGold}30`,
                        borderLeft: `4px solid ${colors.inkGold}`,
                        boxShadow: `0 8px 32px ${colors.bgDeep}80`,
                    }}
                >
                    <p
                        className="text-sm uppercase tracking-wider mb-4 font-bold"
                        style={{ color: colors.inkGold }}
                    >
                        De mim para você — transparência
                    </p>

                    <div className="space-y-4 text-base" style={{ color: colors.textLight }}>
                        <p>
                            A tradição em que eu me formei —{' '}
                            <span style={{ color: colors.inkGold }}>adventista</span> — se posiciona dentro do{' '}
                            <span style={{ color: colors.inkGold, fontWeight: 600 }}>historicismo</span>.
                            É uma posição defendida com argumento sério, e é a que eu mesmo acabo sustentando.
                        </p>
                        <p>
                            Mas hoje aqui, com você, eu só vou abrir a porta para esse debate.{' '}
                            <span className="italic" style={{ color: colors.textMedium }}>
                                Não vou tentar te convencer.
                            </span>
                        </p>
                        <p>
                            O que eu quero é que você{' '}
                            <span style={{ color: colors.inkGold, fontWeight: 600 }}>saiba que a pergunta existe</span>,{' '}
                            que saiba que a apocalíptica pede leitura cuidadosa, e que{' '}
                            quando alguém te apresentar uma leitura desses textos você tenha
                            como perguntar: <em>de qual escola essa leitura está vindo?</em>
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="mt-5 pt-4"
                        style={{ borderTop: `1px solid ${colors.inkGold}20` }}
                    >
                        <p className="text-sm italic" style={{ color: colors.inkGold }}>
                            A apologética honesta diz de onde fala.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </LibraryWrapper>
    );
}
