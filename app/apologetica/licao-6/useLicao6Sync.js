'use client';

import { useState, useEffect, useCallback } from 'react';
import { slideNotes, quizQuestions, TOTAL_QUIZ_QUESTIONS } from './slides/shared';

// Detecta se estamos em desenvolvimento ou produção
const isDevelopment = process.env.NODE_ENV === 'development';
const API_BASE = '/api/apologetica';
const TOTAL_SLIDES = 20;

// Função para obter o host do Socket.io (funciona em LAN)
const getSocketHost = () => {
    if (typeof window === 'undefined') return 'http://localhost:3001';
    // Usa o mesmo hostname que o usuário está acessando, mas na porta 3001
    const hostname = window.location.hostname;
    return `http://${hostname}:3001`;
};

export function useLicao6Sync(role = 'viewer') {
    const [currentSlide, setCurrentSlide] = useState(1); // Começa no slide 1 (Título com QR)
    const [currentQuizQuestion, setCurrentQuizQuestion] = useState(1);
    const [quizResponses, setQuizResponses] = useState({});
    const [quizComplete, setQuizComplete] = useState(false);
    const [totalSlides] = useState(TOTAL_SLIDES);
    const [connected, setConnected] = useState(false);
    const [attendance, setAttendance] = useState(0);
    const [currentPoll, setCurrentPoll] = useState(null);
    const [recentReactions, setRecentReactions] = useState([]);
    const [userId, setUserId] = useState(null);

    // Buscar status (for Vercel/production)
    const fetchStatus = useCallback(async () => {
        if (role === 'presenter') {
            setConnected(true);
            return;
        }

        try {
            const response = await fetch(`${API_BASE}?action=status&lesson=licao-6`);
            if (!response.ok) return;

            const data = await response.json();

            if (data.currentSlide !== undefined && data.currentSlide !== currentSlide) {
                setCurrentSlide(data.currentSlide);
            }
            if (data.currentQuizQuestion !== undefined) {
                setCurrentQuizQuestion(data.currentQuizQuestion);
            }
            if (data.quizComplete !== undefined) {
                setQuizComplete(data.quizComplete);
            }
            if (data.quizResponses) {
                setQuizResponses(data.quizResponses);
            }

            setAttendance(data.attendance || 0);
            setCurrentPoll(data.currentPoll || null);

            if (data.recentReactions && data.recentReactions.length > 0) {
                const newReactions = data.recentReactions.filter(
                    r => !recentReactions.some(existing => existing.id === r.id)
                );
                if (newReactions.length > 0) {
                    setRecentReactions(prev => {
                        const updated = [...prev, ...newReactions].slice(-5);
                        return updated;
                    });
                    setTimeout(() => {
                        setRecentReactions(prev => prev.slice(newReactions.length));
                    }, 4000);
                }
            }

            setConnected(true);
        } catch (error) {
            console.error('Erro ao buscar status:', error);
            setConnected(false);
        }
    }, [role, currentSlide, recentReactions]);

    // Inicialização
    useEffect(() => {
        if (isDevelopment) {
            const setupSocketConnection = async () => {
                try {
                    const { default: io } = await import('socket.io-client');
                    const socketHost = getSocketHost();
                    console.log(`[Lição 6] Conectando a ${socketHost}`);
                    const socket = io(socketHost, {
                        query: { room: 'apologetica-licao-6', role }
                    });

                    socket.on('connect', () => {
                        setConnected(true);
                        console.log(`[Lição 6] Conectado como ${role}`);
                    });

                    socket.on('disconnect', () => setConnected(false));

                    // Recebe estado inicial quando conecta
                    socket.on('presentation-state', (state) => {
                        console.log(`[Lição 6] Estado inicial recebido - slide: ${state.currentSlide}, quiz: ${state.currentQuizQuestion}`);
                        if (state.currentSlide !== undefined) {
                            setCurrentSlide(state.currentSlide);
                        }
                        if (state.currentQuizQuestion !== undefined) {
                            setCurrentQuizQuestion(state.currentQuizQuestion);
                        }
                        if (state.quizResponses) {
                            setQuizResponses(state.quizResponses);
                        }
                        if (state.quizComplete !== undefined) {
                            setQuizComplete(state.quizComplete);
                        }
                        if (state.attendance !== undefined) {
                            setAttendance(state.attendance);
                        }
                        if (state.currentPoll !== undefined) {
                            setCurrentPoll(state.currentPoll);
                        }
                    });

                    socket.on('slide-change', (data) => {
                        setCurrentSlide(data.slide);
                    });

                    socket.on('quiz-question-change', (data) => {
                        setCurrentQuizQuestion(data.question);
                    });

                    socket.on('quiz-response', (data) => {
                        // data.allResponses contém todas as respostas agregadas
                        // data.responses contém as respostas da pergunta específica
                        if (data.allResponses) {
                            setQuizResponses(data.allResponses);
                        } else {
                            setQuizResponses(prev => ({
                                ...prev,
                                [data.question]: data.responses || { sim: 0, nao: 0, talvez: 0 }
                            }));
                        }
                    });

                    socket.on('quiz-complete', () => {
                        setQuizComplete(true);
                    });

                    socket.on('attendance-update', (data) => {
                        setAttendance(data.count);
                    });

                    socket.on('new-poll', (poll) => setCurrentPoll(poll));
                    socket.on('poll-update', (poll) => setCurrentPoll(poll));
                    socket.on('poll-ended', () => setCurrentPoll(null));

                    socket.on('live-reaction', (reactionData) => {
                        setRecentReactions(prev => {
                            const updated = [...prev, { ...reactionData, id: Date.now() }];
                            return updated.slice(-8);
                        });

                        setTimeout(() => {
                            setRecentReactions(prev => prev.slice(1));
                        }, 4000);
                    });

                    window.licao6Socket = socket;

                    return () => socket.close();
                } catch (error) {
                    console.error('Erro Socket.io:', error);
                }
            };

            setupSocketConnection();
        } else {
            fetchStatus();
            const interval = setInterval(fetchStatus, 2000);
            return () => clearInterval(interval);
        }
    }, [fetchStatus, role]);

    // ====== NAVEGAÇÃO (APRESENTADOR) ======

    const goToSlide = useCallback(async (slideNumber) => {
        if (role !== 'presenter') return;

        const newSlide = Math.max(0, Math.min(slideNumber, totalSlides));
        setCurrentSlide(newSlide);

        if (isDevelopment && window.licao6Socket) {
            window.licao6Socket.emit('change-slide', { slide: newSlide });
        } else {
            try {
                await fetch(API_BASE, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        action: 'change-slide',
                        data: { slide: newSlide, lesson: 'licao-6' }
                    })
                });
            } catch (error) {
                console.error('Erro ao mudar slide:', error);
            }
        }
    }, [role, totalSlides]);

    const nextSlide = useCallback(() => {
        if (currentSlide === 0) {
            // In quiz phase
            if (currentQuizQuestion < TOTAL_QUIZ_QUESTIONS) {
                goToQuizQuestion(currentQuizQuestion + 1);
            } else {
                // Quiz complete, go to slide 1
                setQuizComplete(true);
                goToSlide(1);
            }
        } else {
            goToSlide(currentSlide + 1);
        }
    }, [currentSlide, currentQuizQuestion]);

    const prevSlide = useCallback(() => {
        if (currentSlide === 1 && !quizComplete) {
            // Go back to last quiz question
            goToSlide(0);
            goToQuizQuestion(TOTAL_QUIZ_QUESTIONS);
        } else {
            goToSlide(currentSlide - 1);
        }
    }, [currentSlide, quizComplete]);

    // ====== QUIZ NAVIGATION (PRESENTER) ======

    const goToQuizQuestion = useCallback(async (questionNumber) => {
        if (role !== 'presenter') return;

        const newQuestion = Math.max(1, Math.min(questionNumber, TOTAL_QUIZ_QUESTIONS));
        setCurrentQuizQuestion(newQuestion);
        setCurrentSlide(0); // Ensure we're in quiz phase

        if (isDevelopment && window.licao6Socket) {
            window.licao6Socket.emit('quiz-question-change', { question: newQuestion });
        } else {
            try {
                await fetch(API_BASE, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        action: 'quiz-question-change',
                        data: { question: newQuestion, lesson: 'licao-6' }
                    })
                });
            } catch (error) {
                console.error('Erro ao mudar pergunta:', error);
            }
        }
    }, [role]);

    // ====== QUIZ RESPONSE (PARTICIPANT) ======

    const respondToQuiz = useCallback(async (questionNumber, response) => {
        // response: 'sim', 'nao', 'talvez'
        setQuizResponses(prev => ({
            ...prev,
            [questionNumber]: response
        }));

        if (isDevelopment && window.licao6Socket) {
            window.licao6Socket.emit('quiz-response', {
                question: questionNumber,
                response,
                lesson: 'licao-6'
            });
        } else {
            try {
                await fetch(API_BASE, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        action: 'quiz-response',
                        data: { question: questionNumber, response, lesson: 'licao-6' }
                    })
                });
            } catch (error) {
                console.error('Erro ao responder quiz:', error);
            }
        }

        return { success: true };
    }, []);

    // ====== NOTAS DO INSTRUTOR ======

    const getCurrentNotes = useCallback(() => {
        if (currentSlide === 0) {
            return slideNotes[0] || { title: 'Quiz Interativo', notes: ['Aguardando respostas...'] };
        }
        return slideNotes[currentSlide] || { title: `Slide ${currentSlide}`, notes: [] };
    }, [currentSlide]);

    // ====== PARTICIPAR ======

    const join = useCallback(async (userName) => {
        const newUserId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        setUserId(newUserId);

        if (typeof window !== 'undefined') {
            localStorage.setItem('licao6_session', JSON.stringify({
                userId: newUserId,
                userName,
                timestamp: Date.now()
            }));
        }

        if (isDevelopment && window.licao6Socket) {
            window.licao6Socket.emit('join', { userName, lessonId: 'licao-6' });
        } else {
            try {
                await fetch(API_BASE, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: 'join', data: { userName, lessonId: 'licao-6' } })
                });
            } catch (error) {
                console.error('Erro ao entrar:', error);
            }
        }

        return { success: true, userId: newUserId };
    }, []);

    // ====== LOGOUT ======

    const logout = useCallback(async () => {
        // Limpar localStorage
        if (typeof window !== 'undefined') {
            localStorage.removeItem('licao6_session');
            localStorage.removeItem('licao6_quiz_responses');
        }

        // Emitir evento de saída se usando socket
        if (isDevelopment && window.licao6Socket) {
            window.licao6Socket.emit('leave', { lessonId: 'licao-6', userId });
        } else {
            try {
                await fetch(API_BASE, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: 'leave', data: { lessonId: 'licao-6', userId } })
                });
            } catch (error) {
                console.error('Erro ao sair:', error);
            }
        }

        // Resetar estado
        setUserId(null);
        setQuizResponses({});

        return { success: true };
    }, [userId]);

    // ====== REAÇÕES ======

    const react = useCallback(async (reactionType, userName = null) => {
        if (isDevelopment && window.licao6Socket) {
            window.licao6Socket.emit('reaction', {
                type: reactionType,
                userName,
                lessonId: 'licao-6'
            });
        } else {
            try {
                await fetch(API_BASE, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        action: 'reaction',
                        data: { type: reactionType, userName, lessonId: 'licao-6' }
                    })
                });
            } catch (error) {
                console.error('Erro ao reagir:', error);
            }
        }
        return { success: true };
    }, []);

    // ====== POLLS ======

    const createPoll = useCallback(async (question, options) => {
        if (role !== 'presenter') return { success: false };

        const pollData = {
            id: `poll_${Date.now()}`,
            question,
            options: options.map(opt => ({ text: opt, votes: 0 })),
            lessonId: 'licao-6'
        };

        if (isDevelopment && window.licao6Socket) {
            window.licao6Socket.emit('create-poll', pollData);
        } else {
            try {
                await fetch(API_BASE, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: 'create-poll', data: pollData })
                });
            } catch (error) {
                console.error('Erro ao criar poll:', error);
            }
        }

        setCurrentPoll(pollData);
        return { success: true, poll: pollData };
    }, [role]);

    const vote = useCallback(async (pollId, optionIndex) => {
        if (isDevelopment && window.licao6Socket) {
            window.licao6Socket.emit('vote', { pollId, optionIndex, lessonId: 'licao-6' });
        } else {
            try {
                const response = await fetch(API_BASE, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: 'vote', data: { pollId, optionIndex } })
                });
                const result = await response.json();
                if (result.poll) setCurrentPoll(result.poll);
            } catch (error) {
                console.error('Erro ao votar:', error);
            }
        }
        return { success: true };
    }, []);

    const endPoll = useCallback(async () => {
        if (role !== 'presenter') return;

        if (isDevelopment && window.licao6Socket) {
            window.licao6Socket.emit('end-poll', { lessonId: 'licao-6' });
        } else {
            try {
                await fetch(API_BASE, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: 'end-poll', data: {} })
                });
            } catch (error) {
                console.error('Erro ao encerrar poll:', error);
            }
        }

        setCurrentPoll(null);
    }, [role]);

    return {
        // Estado
        currentSlide,
        currentQuizQuestion,
        quizResponses,
        quizComplete,
        totalSlides,
        totalQuizQuestions: TOTAL_QUIZ_QUESTIONS,
        connected,
        attendance,
        currentPoll,
        recentReactions,
        userId,

        // Navegação
        goToSlide,
        nextSlide,
        prevSlide,
        goToQuizQuestion,
        getCurrentNotes,

        // Quiz
        respondToQuiz,
        quizQuestions,

        // Interação
        join,
        logout,
        react,
        vote,

        // Polls
        createPoll,
        endPoll,

        // Helpers
        slideNotes
    };
}
