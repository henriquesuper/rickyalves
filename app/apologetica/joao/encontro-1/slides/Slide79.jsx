'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

export function Slide79({ slideIndex = 78 }) {
    const witnesses = [
        { num: "01", name: "João Batista", ref: "João 5.33–35", desc: "A testemunha humana que apontou para a luz, embora Jesus não dependa de aprovação humana." },
        { num: "02", name: "As Obras", ref: "João 5.36", desc: "Os sinais e ações que o Pai lhe deu para realizar dão testemunho prático de sua missão." },
        { num: "03", name: "O Pai", ref: "João 5.37–38", desc: "A voz e a confirmação íntima do próprio Deus, embora os ouvintes não a tenham discernido." },
        { num: "04", name: "As Escrituras", ref: "João 5.39", desc: "O próprio texto sagrado judaico, cuja real finalidade é apontar e conduzir a Ele." }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-10 flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.wine}>
                    Estrutura Forense
                </SectionLabel>

                <motion.h2 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-2xl md:text-3xl font-serif text-center mt-3 mb-10"
                    style={{ color: colors.inkDeep, fontFamily: fonts.display }}
                >
                    O Rol de Testemunhas (5.31–40)
                </motion.h2>

                <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
                >
                    {witnesses.map((w, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className="p-5 border border-dashed rounded-sm flex flex-col justify-between"
                            style={{ 
                                background: `${colors.parchmentDeep}22`,
                                borderColor: `${colors.wine}44`
                            }}
                        >
                            <div>
                                <span className="text-xs font-mono font-bold block mb-1" style={{ color: colors.wine }}>
                                    TESTEMUNHA {w.num}
                                </span>
                                <h3 className="text-lg font-serif italic mb-1 font-semibold" style={{ color: colors.inkDeep, fontFamily: fonts.display }}>
                                    {w.name}
                                </h3>
                                <span className="text-[10px] uppercase font-mono tracking-wider opacity-60 block mb-4">
                                    {w.ref}
                                </span>
                                <p className="text-xs leading-relaxed" style={{ color: colors.inkBody, fontFamily: fonts.body }}>
                                    {w.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
