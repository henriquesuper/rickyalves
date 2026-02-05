// Hook de sincronização para Lição 7
// Gerencia estado compartilhado entre viewer, apresentador e participante
'use client';
import { useState, useCallback, useEffect, useRef } from 'react';
import { quizQuestions, reactionIcons, TOTAL_QUIZ_QUESTIONS } from './slides/shared';

const TOTAL_SLIDES = 36;
const API_BASE = '/api/apologetica';
const SOCKET_ROOM = 'apologetica-licao-7';

// Detecta se estamos em desenvolvimento ou produção
const isDevelopmentEnv = process.env.NODE_ENV === 'development';

// Função para obter o host do Socket.io (funciona em LAN)
const getSocketHost = () => {
    if (typeof window === 'undefined') return 'http://localhost:3001';
    // Usa o mesmo hostname que o usuário está acessando, mas na porta 3001
    const hostname = window.location.hostname;
    return `http://${hostname}:3001`;
};

export function useLicao7Sync(role = 'viewer') {
    // Estado do slide atual (0 = Quiz, 1-36 = slides)
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = TOTAL_SLIDES;

    // Estado do quiz
    const [currentQuizQuestion, setCurrentQuizQuestion] = useState(1);
    const [quizResponses, setQuizResponses] = useState({});
    const [quizComplete, setQuizComplete] = useState(false);
    const totalQuizQuestions = TOTAL_QUIZ_QUESTIONS;

    // Estado de conexão
    const [connected, setConnected] = useState(false);
    const [attendance, setAttendance] = useState(0);

    // Estado de reações
    const [recentReactions, setRecentReactions] = useState([]);

    // Estado de polls/enquetes
    const [currentPoll, setCurrentPoll] = useState(null);

    // Estado do participante
    const [userId, setUserId] = useState(null);

    // Referência do socket
    const socketRef = useRef(null);

    // Detectar ambiente de desenvolvimento
    const isDevelopment = typeof window !== 'undefined' && isDevelopmentEnv;

    // Fetch de status via API (para produção/Vercel)
    const fetchStatus = useCallback(async () => {
        try {
            const response = await fetch(`${API_BASE}/licao-7/status`);
            if (!response.ok) return;
            const data = await response.json();

            setCurrentSlide(data.currentSlide);
            setCurrentQuizQuestion(data.currentQuizQuestion);
            setQuizResponses(data.quizResponses || {});
            setAttendance(data.attendance || 0);
            setConnected(true);

            // Processar reações recentes se houver
            if (data.recentReactions && data.recentReactions.length > 0) {
                const newReactions = data.recentReactions.filter(
                    r => !recentReactions.some(existing => existing.id === r.id)
                ).map(r => ({
                    ...r,
                    icon: reactionIcons[r.reaction] || r.reaction
                }));

                if (newReactions.length > 0) {
                    setRecentReactions(prev => [...prev, ...newReactions].slice(-8));
                }
            }
        } catch (error) {
            console.log('Polling status (Vercel mode):', error.message);
        }
    }, [role, currentSlide, recentReactions]);

    // Configuração de conexão
    useEffect(() => {
        // Carregar estado do localStorage se participante
        if (role === 'participant') {
            const savedUserId = localStorage.getItem('licao7-userId');
            if (savedUserId) {
                setUserId(savedUserId);
            }

            const savedResponses = localStorage.getItem('licao7-quiz-responses');
            if (savedResponses) {
                try {
                    setQuizResponses(JSON.parse(savedResponses));
                } catch (e) {
                    console.error('Error parsing saved quiz responses', e);
                }
            }
        }

        // Socket.io para desenvolvimento
        if (isDevelopment) {
            const initSocket = async () => {
                try {
                    const io = (await import('socket.io-client')).default;
                    const socketHost = getSocketHost();
                    console.log(`[Lição 7] Conectando a ${socketHost}`);
                    const socket = io(socketHost, {
                        query: { room: SOCKET_ROOM, role }
                    });

                    socket.on('connect', () => {
                        console.log(`[Lição 7] Conectado como ${role}`);
                        setConnected(true);
                    });

                    socket.on('disconnect', () => {
                        console.log('[Lição 7] Desconectado');
                        setConnected(false);
                    });

                    // Estado inicial
                    socket.on('presentation-state', (data) => {
                        console.log('[Lição 7] Estado recebido:', data);
                        setCurrentSlide(data.currentSlide);
                        setCurrentQuizQuestion(data.currentQuizQuestion);
                        setQuizResponses(data.quizResponses || {});
                        setAttendance(data.attendance || 0);
                    });

                    // Mudança de slide
                    socket.on('slide-change', (data) => {
                        console.log('[Lição 7] Slide mudou:', data.slide);
                        setCurrentSlide(data.slide);
                    });

                    // Mudança de pergunta do quiz
                    socket.on('quiz-question-change', (data) => {
                        console.log('[Lição 7] Pergunta do quiz:', data.question);
                        setCurrentQuizQuestion(data.question);
                    });

                    // Resposta do quiz
                    socket.on('quiz-response', (data) => {
                        console.log('[Lição 7] Resposta do quiz:', data);
                        setQuizResponses(prev => ({
                            ...prev,
                            [data.question]: data.responses
                        }));
                    });

                    // Atualização de participantes
                    socket.on('attendance-update', (data) => {
                        setAttendance(data.count);
                    });

                    // === FIX: Reações em tempo real ===
                    socket.on('live-reaction', (reactionData) => {
                        console.log('[Lição 7] Reação recebida:', reactionData);

                        // Mapear o tipo para o ícone correto
                        const icon = reactionIcons[reactionData.reaction] || reactionData.reaction;

                        setRecentReactions(prev => {
                            const updated = [...prev, {
                                ...reactionData,
                                icon,
                                id: reactionData.id || Date.now()
                            }];
                            return updated.slice(-8);
                        });

                        // Auto-remover após 4 segundos
                        setTimeout(() => {
                            setRecentReactions(prev => prev.slice(1));
                        }, 4000);
                    });

                    // Eventos de polls/enquetes
                    socket.on('new-poll', (poll) => setCurrentPoll(poll));
                    socket.on('poll-update', (poll) => setCurrentPoll(poll));
                    socket.on('poll-ended', () => setCurrentPoll(null));

                    socketRef.current = socket;
                    window.licao7Socket = socket;

                    return () => socket.close();
                } catch (error) {
                    console.error('Erro Socket.io:', error);
                }
            };

            initSocket();
        } else {
            // Polling para produção (Vercel)
            fetchStatus();
            const interval = setInterval(fetchStatus, 2000);
            return () => clearInterval(interval);
        }
    }, [fetchStatus, role, isDevelopment]);

    // ========================================
    // NAVEGAÇÃO
    // ========================================
    const goToSlide = useCallback(async (slideNumber) => {
        if (role !== 'presenter') return;
        if (slideNumber < 0 || slideNumber > totalSlides) return;

        setCurrentSlide(slideNumber);

        if (isDevelopment && socketRef.current) {
            socketRef.current.emit('change-slide', { slide: slideNumber, lesson: 'licao-7' });
        } else {
            try {
                await fetch(`${API_BASE}/licao-7/slide`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ slide: slideNumber })
                });
            } catch (error) {
                console.error('Erro ao mudar slide:', error);
            }
        }
    }, [role, totalSlides, isDevelopment]);

    const nextSlide = useCallback(() => {
        if (currentSlide < totalSlides) {
            goToSlide(currentSlide + 1);
        }
    }, [currentSlide, totalSlides, goToSlide]);

    const prevSlide = useCallback(() => {
        if (currentSlide > 0) {
            goToSlide(currentSlide - 1);
        }
    }, [currentSlide, goToSlide]);

    const goToQuizQuestion = useCallback(async (questionNumber) => {
        if (role !== 'presenter') return;
        if (questionNumber < 1 || questionNumber > totalQuizQuestions) return;

        setCurrentQuizQuestion(questionNumber);
        setCurrentSlide(0); // Quiz é slide 0

        if (isDevelopment && socketRef.current) {
            socketRef.current.emit('quiz-question-change', { question: questionNumber, lesson: 'licao-7' });
        } else {
            try {
                await fetch(`${API_BASE}/licao-7/quiz`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ question: questionNumber })
                });
            } catch (error) {
                console.error('Erro ao mudar pergunta:', error);
            }
        }
    }, [role, totalQuizQuestions, isDevelopment]);

    // ========================================
    // PARTICIPANTE: QUIZ
    // ========================================
    const respondToQuiz = useCallback(async (questionNumber, response) => {
        // Salvar resposta localmente
        const newResponses = {
            ...quizResponses,
            [`my_${questionNumber}`]: response
        };
        setQuizResponses(newResponses);
        localStorage.setItem('licao7-quiz-responses', JSON.stringify(newResponses));

        if (isDevelopment && socketRef.current) {
            socketRef.current.emit('quiz-response', {
                question: questionNumber,
                response,
                lesson: 'licao-7'
            });
        } else {
            try {
                await fetch(`${API_BASE}/licao-7/quiz/respond`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ question: questionNumber, response })
                });
            } catch (error) {
                console.error('Erro ao responder quiz:', error);
            }
        }
    }, [quizResponses, isDevelopment]);

    // ========================================
    // PARTICIPANTE: JOIN / LOGOUT
    // ========================================
    const join = useCallback(async (userName) => {
        const newUserId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        setUserId(newUserId);
        localStorage.setItem('licao7-userId', newUserId);
        localStorage.setItem('licao7-userName', userName);

        if (isDevelopment && socketRef.current) {
            socketRef.current.emit('join', { userName, lesson: 'licao-7' });
        } else {
            try {
                await fetch(`${API_BASE}/licao-7/join`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userName, oderId: newUserId })
                });
            } catch (error) {
                console.error('Erro ao entrar:', error);
            }
        }

        return newUserId;
    }, [isDevelopment]);

    const logout = useCallback(() => {
        setUserId(null);
        setQuizResponses({});
        localStorage.removeItem('licao7-userId');
        localStorage.removeItem('licao7-userName');
        localStorage.removeItem('licao7-quiz-responses');
    }, []);

    // ========================================
    // PARTICIPANTE: REAÇÕES
    // ========================================
    const react = useCallback(async (reactionType, userName) => {
        console.log('[Lição 7] Enviando reação:', reactionType, 'de', userName);

        if (isDevelopment && socketRef.current) {
            socketRef.current.emit('reaction', {
                type: reactionType,
                userName,
                lesson: 'licao-7'
            });
        } else {
            try {
                await fetch(`${API_BASE}/licao-7/react`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ type: reactionType, userName })
                });
            } catch (error) {
                console.error('Erro ao reagir:', error);
            }
        }
    }, [isDevelopment]);

    // ========================================
    // POLLS/ENQUETES
    // ========================================
    const createPoll = useCallback(async (question, options) => {
        if (role !== 'presenter') return { success: false };

        const pollData = {
            id: `poll_${Date.now()}`,
            question,
            options: options.map(opt => ({ text: opt, votes: 0 })),
            lessonId: 'licao-7'
        };

        if (isDevelopment && socketRef.current) {
            socketRef.current.emit('create-poll', pollData);
        } else {
            try {
                await fetch(`${API_BASE}/licao-7/poll`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: 'create', data: pollData })
                });
            } catch (error) {
                console.error('Erro ao criar poll:', error);
            }
        }

        setCurrentPoll(pollData);
        return { success: true, poll: pollData };
    }, [role, isDevelopment]);

    const vote = useCallback(async (pollId, optionIndex) => {
        if (isDevelopment && socketRef.current) {
            socketRef.current.emit('vote', { pollId, optionIndex, lessonId: 'licao-7' });
        } else {
            try {
                const response = await fetch(`${API_BASE}/licao-7/poll`, {
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
    }, [isDevelopment]);

    const endPoll = useCallback(async () => {
        if (role !== 'presenter') return;

        if (isDevelopment && socketRef.current) {
            socketRef.current.emit('end-poll', { lessonId: 'licao-7' });
        } else {
            try {
                await fetch(`${API_BASE}/licao-7/poll`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: 'end', data: {} })
                });
            } catch (error) {
                console.error('Erro ao encerrar poll:', error);
            }
        }

        setCurrentPoll(null);
    }, [role, isDevelopment]);

    // ========================================
    // NOTAS DO INSTRUTOR
    // ========================================
    const getCurrentNotes = useCallback(() => {
        // Importar dinâmico para evitar circular dependency
        const { slideNotes } = require('./slides/shared');
        return slideNotes[currentSlide] || { title: '', notes: [] };
    }, [currentSlide]);

    // ========================================
    // RETURN
    // ========================================
    return {
        // Estado
        currentSlide,
        totalSlides,
        currentQuizQuestion,
        totalQuizQuestions,
        quizResponses,
        quizComplete,
        connected,
        attendance,
        userId,
        recentReactions,
        currentPoll,

        // Navegação (presenter)
        goToSlide,
        nextSlide,
        prevSlide,
        goToQuizQuestion,

        // Quiz (participant)
        respondToQuiz,
        quizQuestions,

        // Participante
        join,
        logout,
        react,

        // Polls
        createPoll,
        vote,
        endPoll,

        // Notas
        getCurrentNotes,
    };
}
