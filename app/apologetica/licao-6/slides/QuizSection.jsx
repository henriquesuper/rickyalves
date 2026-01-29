'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { SlideWrapper, colors, quizQuestions } from './shared';

const PARTICIPATION_URL = 'https://www.rickyalves.com/apologetica/licao-6/participar';

export default function QuizSection({ currentQuestion, responses, onComplete }) {
    if (currentQuestion > quizQuestions.length) {
        return null;
    }

    const question = quizQuestions[currentQuestion - 1];
    const response = responses[currentQuestion];

    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-4xl mx-auto px-8 z-10"
            >
                {/* Indicador de progresso */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <span
                        className="text-sm font-medium px-4 py-2 rounded-full"
                        style={{
                            background: `${colors.goldLeaf}20`,
                            color: colors.goldLeaf,
                            border: `1px solid ${colors.goldLeaf}40`
                        }}
                    >
                        Pergunta {currentQuestion} de {quizQuestions.length}
                    </span>

                    {/* Barra de progresso */}
                    <div className="mt-4 mx-auto w-64 h-1 rounded-full overflow-hidden" style={{ background: `${colors.sepia}30` }}>
                        <motion.div
                            className="h-full"
                            style={{ background: `linear-gradient(90deg, ${colors.goldLeaf}, ${colors.vermillion})` }}
                            initial={{ width: 0 }}
                            animate={{ width: `${(currentQuestion / quizQuestions.length) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </motion.div>

                {/* Ícone da pergunta */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="text-center mb-6"
                >
                    <span className="text-7xl">{question.icon}</span>
                </motion.div>

                {/* Pergunta */}
                <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center mb-12"
                >
                    <h2
                        className="text-3xl md:text-4xl font-['Cinzel'] font-bold leading-relaxed"
                        style={{
                            color: colors.parchmentLight,
                            textShadow: `0 2px 20px ${colors.goldLeaf}30`
                        }}
                    >
                        {question.question}
                    </h2>
                </motion.div>

                {/* Status da resposta */}
                <AnimatePresence mode="wait">
                    {response && typeof response === 'object' && Object.values(response).some(v => v > 0) ? (
                        <motion.div
                            key="response"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="text-center"
                        >
                            <div
                                className="inline-block px-8 py-6 rounded-2xl"
                                style={{
                                    background: `linear-gradient(135deg, ${colors.libraryWood}90, ${colors.bgSurface}90)`,
                                    border: `2px solid ${colors.goldLeaf}60`
                                }}
                            >
                                <p className="text-sm mb-4" style={{ color: colors.goldLeaf }}>
                                    Respostas recebidas:
                                </p>
                                {(() => {
                                    const total = Object.values(response).reduce((a, b) => a + b, 0);
                                    return (
                                        <div className="space-y-3">
                                            {[
                                                { key: 'sim', label: 'Sim', emoji: '✅', color: colors.forest },
                                                { key: 'nao', label: 'Não', emoji: '❌', color: colors.vermillion },
                                                { key: 'talvez', label: 'Talvez', emoji: '🤔', color: colors.goldLeaf }
                                            ].map(({ key, label, emoji, color }) => {
                                                const count = response[key] || 0;
                                                const percent = total > 0 ? (count / total) * 100 : 0;
                                                return (
                                                    <div key={key} className="flex items-center gap-3">
                                                        <span className="text-2xl w-8">{emoji}</span>
                                                        <div className="flex-1">
                                                            <div className="flex justify-between text-sm mb-1">
                                                                <span style={{ color: colors.parchmentLight }}>{label}</span>
                                                                <span style={{ color: colors.goldLeaf }}>{count}</span>
                                                            </div>
                                                            <div className="h-2 rounded-full overflow-hidden" style={{ background: `${colors.sepia}30` }}>
                                                                <motion.div
                                                                    className="h-full"
                                                                    style={{ background: color }}
                                                                    initial={{ width: 0 }}
                                                                    animate={{ width: `${percent}%` }}
                                                                    transition={{ duration: 0.5 }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    );
                                })()}
                            </div>

                            {/* Indicação para próxima */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="mt-6 text-sm"
                                style={{ color: `${colors.goldLeaf}80` }}
                            >
                                {currentQuestion < quizQuestions.length
                                    ? "→ Avance para a próxima pergunta"
                                    : "→ Avance para iniciar a aula"}
                            </motion.p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="waiting"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center"
                        >
                            <div
                                className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
                                style={{
                                    background: `${colors.libraryWood}80`,
                                    border: `1px solid ${colors.goldLeaf}30`
                                }}
                            >
                                <motion.div
                                    className="w-3 h-3 rounded-full"
                                    style={{ background: colors.goldLeaf }}
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                <span style={{ color: colors.parchmentMid }}>
                                    Aguardando resposta...
                                </span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Preview das opções (visual) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center gap-4 mt-12"
                >
                    {['Sim', 'Talvez', 'Não'].map((opt, i) => (
                        <div
                            key={opt}
                            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${response === opt.toLowerCase().replace('ã', 'a') ? 'opacity-100 scale-110' : 'opacity-30'
                                }`}
                            style={{
                                background: i === 0
                                    ? `${colors.forest}40`
                                    : i === 2
                                        ? `${colors.vermillion}40`
                                        : `${colors.sepia}40`,
                                color: colors.parchmentLight,
                                border: `1px solid ${i === 0 ? colors.forest : i === 2 ? colors.vermillion : colors.goldLeaf}40`
                            }}
                        >
                            {opt}
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* QR Code no canto - para participantes entrarem */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="fixed bottom-24 left-6 flex flex-col items-center gap-2 z-20"
            >
                <div
                    className="p-2 rounded-lg"
                    style={{
                        background: colors.parchmentLight,
                        boxShadow: `0 0 20px ${colors.goldLeaf}30`
                    }}
                >
                    <QRCodeSVG
                        value={PARTICIPATION_URL}
                        size={80}
                        bgColor={colors.parchmentLight}
                        fgColor={colors.inkBrown}
                        level="H"
                    />
                </div>
                <p className="text-xs font-medium" style={{ color: `${colors.parchmentMid}80` }}>
                    📱 Participe!
                </p>
            </motion.div>
        </SlideWrapper>
    );
}
