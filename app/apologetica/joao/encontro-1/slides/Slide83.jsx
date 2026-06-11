'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, ProseBlock, colors, fonts } from './shared';

export function Slide83({ slideIndex = 82 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-10 flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.gold}>
                    Narrativa Compartilhada
                </SectionLabel>

                <motion.h2 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-2xl md:text-3xl font-serif text-center mt-3 mb-8"
                    style={{ color: colors.inkDeep, fontFamily: fonts.display }}
                >
                    O único milagre nos quatro evangelhos
                </motion.h2>

                <div className="my-4 w-full">
                    <BiblicalQuote 
                        reference="João 6.9, 12"
                        lines={[
                            "Está aqui um rapaz que tem cinco pães de cevada e dois peixinhos; mas que é isto para tantos?",
                            "E, quando estavam saciados, disse aos seus discípulos: Recolhei os pedaços que sobejaram, para que nada se perca."
                        ]}
                        tone="gold"
                        align="center"
                        size="sm"
                        delay={0.6}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                        className="p-5 border border-dashed border-[#8B7355]30 rounded-sm"
                        style={{ background: `${colors.parchmentDeep}22` }}
                    >
                        <h4 className="text-xs uppercase tracking-wider mb-2 font-mono font-bold" style={{ color: colors.gold }}>
                            Particularidades de João
                        </h4>
                        <p className="text-sm italic leading-relaxed" style={{ color: colors.inkBody, fontFamily: fonts.body }}>
                            Apenas João registra que a Páscoa estava próxima (6.4) — estabelecendo a atmosfera do Êxodo. Ele é o único que especifica que os pães eram de cevada (o alimento mais barato da época) e aponta a presença ativa de Filipe e André.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 0.8 }}
                        className="p-5 border border-dashed border-[#8B7355]30 rounded-sm"
                        style={{ background: `${colors.parchmentDeep}22` }}
                    >
                        <h4 className="text-xs uppercase tracking-wider mb-2 font-mono font-bold" style={{ color: colors.lapisSoft }}>
                            Para que nada se perca
                        </h4>
                        <p className="text-sm italic leading-relaxed" style={{ color: colors.inkBody, fontFamily: fonts.body }}>
                            Os doze cestos recolhidos no deserto não são apenas um detalhe logístico ou ecológico. Antecipam, discretamente, o cuidado espiritual que Jesus expressará adiante no mesmo capítulo: <strong>&quot;que eu não perca nenhum de todos aqueles que ele me deu&quot;</strong> (6.39).
                        </p>
                    </motion.div>
                </div>
            </div>
        </ParchmentWrapper>
    );
}
