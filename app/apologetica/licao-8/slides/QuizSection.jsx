// QuizSection - Quiz de 5 perguntas para Lição 8
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, quizQuestions, colors } from './shared';

export default function QuizSection({ quizResponses = {}, totalParticipants = 0, isPresenter = false }) {
    const getAnswerCounts = (questionId) => {
        const responses = quizResponses[questionId] || {};
        return {
            sim: Object.values(responses).filter(a => a === 'sim').length,
            nao: Object.values(responses).filter(a => a === 'nao').length,
            talvez: Object.values(responses).filter(a => a === 'talvez').length,
            total: Object.keys(responses).length
        };
    };

    return (
        <SlideWrapper variant="golden">
            <div className="flex flex-col items-center justify-center px-4 md:px-8 max-w-6xl mx-auto py-8">
                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-6"
                >
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-2"
                        style={{ color: colors.goldBright }}
                    >
                        Quiz de Abertura
                    </h2>
                    <p style={{ color: colors.textMedium }}>
                        Responda SIM, NÃO ou TALVEZ
                    </p>
                    {totalParticipants > 0 && (
                        <p className="text-sm mt-2" style={{ color: colors.goldAged }}>
                            👥 {totalParticipants} participante{totalParticipants !== 1 ? 's' : ''}
                        </p>
                    )}
                </motion.div>

                {/* Grid de perguntas */}
                <div className="grid md:grid-cols-2 gap-4 w-full">
                    {quizQuestions.map((q, index) => {
                        const counts = getAnswerCounts(q.id);
                        const hasAnswers = counts.total > 0;

                        return (
                            <motion.div
                                key={q.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <PrismCard className="h-full">
                                    <div className="flex items-start gap-3">
                                        {/* Número/Ícone */}
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                                            style={{
                                                background: `linear-gradient(135deg, ${colors.bgSurface}, ${colors.bgDeep})`,
                                                border: `2px solid ${colors.goldAged}50`
                                            }}
                                        >
                                            <span className="text-lg">{q.icon}</span>
                                        </div>

                                        {/* Pergunta e respostas */}
                                        <div className="flex-1">
                                            <p
                                                className="text-sm md:text-base mb-3"
                                                style={{ color: colors.textLight }}
                                            >
                                                {q.question}
                                            </p>

                                            {/* Barras de resposta */}
                                            {(hasAnswers || isPresenter) && (
                                                <div className="space-y-1">
                                                    {[
                                                        { key: 'sim', label: 'Sim', color: '#22c55e' },
                                                        { key: 'nao', label: 'Não', color: '#ef4444' },
                                                        { key: 'talvez', label: 'Talvez', color: '#f59e0b' }
                                                    ].map(option => {
                                                        const count = counts[option.key];
                                                        const pct = counts.total > 0 ? (count / counts.total) * 100 : 0;

                                                        return (
                                                            <div key={option.key} className="flex items-center gap-2">
                                                                <span
                                                                    className="w-12 text-xs"
                                                                    style={{ color: colors.textMedium }}
                                                                >
                                                                    {option.label}
                                                                </span>
                                                                <div
                                                                    className="flex-1 h-4 rounded-full overflow-hidden"
                                                                    style={{ background: `${colors.bgSurface}80` }}
                                                                >
                                                                    <motion.div
                                                                        initial={{ width: 0 }}
                                                                        animate={{ width: `${pct}%` }}
                                                                        className="h-full rounded-full"
                                                                        style={{ background: option.color }}
                                                                    />
                                                                </div>
                                                                <span
                                                                    className="w-8 text-xs text-right"
                                                                    style={{ color: colors.textMedium }}
                                                                >
                                                                    {count}
                                                                </span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}

                                            {/* Aguardando respostas */}
                                            {!hasAnswers && !isPresenter && (
                                                <p
                                                    className="text-xs italic"
                                                    style={{ color: colors.textMedium }}
                                                >
                                                    Aguardando respostas...
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </PrismCard>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Nota inferior */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 text-sm text-center"
                    style={{ color: colors.textMedium }}
                >
                    💡 As respostas serão reveladas durante a apresentação
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
