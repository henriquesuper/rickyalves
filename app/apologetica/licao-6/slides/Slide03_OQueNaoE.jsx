'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

// Mito sendo "rasgado"
function MythCard({ myth, truth, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, rotateX: -20 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ delay }}
            className="relative"
        >
            {/* Card do mito (sendo rasgado) */}
            <div
                className="relative p-5 rounded-xl overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, #3A1A1A90, #2A1010A0)`,
                    border: `1px solid ${colors.vermillion}40`
                }}
            >
                {/* Efeito de rasgo diagonal */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `linear-gradient(135deg, transparent 45%, ${colors.bgDeep}80 50%, transparent 55%)`
                    }}
                />

                {/* X vermelho */}
                <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: delay + 0.3, type: "spring" }}
                    className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                        background: colors.vermillion,
                        boxShadow: `0 0 15px ${colors.vermillion}50`
                    }}
                >
                    <span className="text-white font-bold text-xl">✕</span>
                </motion.div>

                {/* Conteúdo do mito */}
                <div className="mb-3">
                    <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: `${colors.vermillion}30`, color: colors.vermillion }}>
                        MITO
                    </span>
                </div>
                <p className="text-lg line-through opacity-70" style={{ color: colors.parchmentLight }}>
                    {myth}
                </p>
            </div>

            {/* Card da verdade */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delay + 0.5 }}
                className="mt-3 p-4 rounded-xl"
                style={{
                    background: `linear-gradient(135deg, ${colors.forest}30, ${colors.libraryWood}80)`,
                    border: `1px solid ${colors.forest}40`
                }}
            >
                <div className="flex items-start gap-2">
                    <span className="text-xl">✓</span>
                    <p style={{ color: colors.parchmentLight }}>
                        <strong style={{ color: colors.goldLeaf }}>Verdade:</strong> {truth}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Slide03_OQueNaoE() {
    const myths = [
        {
            myth: "Bispos votaram quais livros incluir em concílios séculos depois de Cristo",
            truth: "O cânon foi RECONHECIDO, não criado. Os livros já eram aceitos muito antes de qualquer concílio."
        },
        {
            myth: "Havia centenas de evangelhos competindo e a igreja escolheu apenas quatro",
            truth: "Os quatro Evangelhos foram reconhecidos desde o início. Os \"outros\" são tardios (séc. II-III) e gnósticos."
        },
        {
            myth: "A igreja suprimiu 'verdades perdidas' para manter poder político",
            truth: "Não havia conspiração. Os debates eram públicos, eruditos e piedosos."
        }
    ];

    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-5xl mx-auto px-8 z-10"
            >
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-['Cinzel'] text-4xl md:text-5xl text-center mb-4"
                    style={{
                        color: colors.goldLeaf,
                        textShadow: `0 0 30px ${colors.goldLeaf}30`
                    }}
                >
                    O Que o Cânon NÃO É
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-10"
                    style={{ color: `${colors.parchmentMid}80` }}
                >
                    Desmistificando equívocos populares alimentados por ficção e documentários sensacionalistas
                </motion.p>

                {/* Grid de mitos */}
                <div className="grid md:grid-cols-3 gap-6">
                    {myths.map((item, i) => (
                        <MythCard
                            key={i}
                            myth={item.myth}
                            truth={item.truth}
                            delay={0.3 + i * 0.2}
                        />
                    ))}
                </div>

                {/* Analogia */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-10 max-w-3xl mx-auto text-center"
                >
                    <ParchmentCard highlight>
                        <div className="flex items-center justify-center gap-4">
                            <span className="text-4xl">📄</span>
                            <p className="text-lg" style={{ color: colors.parchmentLight }}>
                                <strong style={{ color: colors.goldLeaf }}>Analogia:</strong> Uma certidão de nascimento
                                <em> não cria </em> uma pessoa — ela <strong>reconhece</strong> alguém que já existe.
                                As listas canônicas não criaram a autoridade; elas a <strong>documentaram</strong>.
                            </p>
                        </div>
                    </ParchmentCard>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
