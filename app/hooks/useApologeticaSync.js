'use client';

import { useState, useEffect, useCallback } from 'react';

// Detecta se estamos em desenvolvimento ou produção
const isDevelopment = process.env.NODE_ENV === 'development';
const API_BASE = '/api/apologetica';

// Notas do instrutor por slide (18 slides modulares)
const slideNotes = {
    1: {
        title: 'Por Que a Bíblia?',
        notes: [
            'Esta lição é delicada. Vamos comparar tradições religiosas.',
            'A postura correta: "Vamos aplicar os mesmos critérios a todas as alegações, incluindo a nossa"',
            'Se a Bíblia não passar nos critérios, temos que ser honestos sobre isso.'
        ]
    },
    2: {
        title: 'Antes de Começar',
        notes: [
            'Lembre a Guga: Deus encontra pessoas onde elas estão',
            'A pergunta não é "quem Deus ama?" (todos)',
            'A pergunta é "qual revelação nos dá o retrato mais confiável de quem Deus é?"'
        ]
    },
    3: {
        title: 'Os 5 Critérios',
        notes: [
            '💡 Pergunta para ela: "Você mudaria algo nesses critérios? Acrescentaria algum?"',
            'Relembrar brevemente os critérios da Lição 3'
        ]
    },
    4: {
        title: 'Panorama das Tradições',
        notes: [
            'Visão geral das 5 tradições que vamos analisar',
            'Cada uma tem sua alegação de revelação',
            'Vamos aplicar os mesmos critérios a todas'
        ]
    },
    5: {
        title: 'Vedas Hindus',
        notes: [
            'Alegação: Conhecimento eterno (apaurusheya — "não de origem humana")',
            'Os Vedas não foram escritos; foram "ouvidos" pelos sábios',
            'Realidade última (Brahman) é impessoal. Mundo material é maya (ilusão)'
        ]
    },
    6: {
        title: 'Textos Budistas',
        notes: [
            'Buda não alegou falar por Deus — alegou ter descoberto a verdade através da meditação',
            'Não há Deus criador pessoal',
            '⚠️ Diferente: não alega origem divina'
        ]
    },
    7: {
        title: 'Alcorão',
        notes: [
            'Alegação: Ditado verbal direto de Alá. Não inspirado — ditado.',
            'Alá é absolutamente transcendente, não "Pai"',
            'Maomé é o "selo dos profetas" — revelação final'
        ]
    },
    8: {
        title: 'Livro de Mórmon',
        notes: [
            'Tradução de placas de ouro por Joseph Smith',
            'Registro de povos hebreus que migraram para as Américas',
            '⚠️ Alega civilizações massivas — veremos as evidências'
        ]
    },
    9: {
        title: 'Bíblia',
        notes: [
            'Deus não ditou (exceto casos específicos como os Dez Mandamentos)',
            'Ele inspirou pessoas que escreveram em seus próprios estilos',
            '66 livros, ~1500 anos, ~40 autores — mas uma história unificada'
        ]
    },
    10: {
        title: 'Critério 1: Coerência Interna',
        notes: [
            'Vedas: Tensões internas (politeísmo → monismo)',
            'Mórmon: Anacrônicos - cita Isaías da KJV (erros do séc. XVII)',
            '💡 "Como 40 pessoas em 1500 anos mantêm essa coerência sem um editor central?"'
        ]
    },
    11: {
        title: 'Critério 2: Verificabilidade',
        notes: [
            '⚠️ Mórmon: FALHA GRAVE - Zero evidência arqueológica',
            'Bíblia: Muitas confirmações (Estela de Merneptá, Casa de Davi)',
            'A Bíblia se expõe à verificação — diferente de outras tradições'
        ]
    },
    12: {
        title: 'Critério 3: Realidade Humana',
        notes: [
            '⚠️ Este é o critério que mais ressoou na Lição 3',
            'Vedas: Mundo é ilusão. Budismo: extinguir desejo',
            '💡 "A Bíblia lê você" — heróis falham, vilões são complexos'
        ]
    },
    13: {
        title: 'Critério 4: Integridade das Fontes',
        notes: [
            'Mórmon: Placas "devolvidas ao anjo" - não verificável',
            'NT: 5.800+ manuscritos gregos. P52: ~30 anos do original',
            'Melhor atestado documento antigo (Platão: 1000+ anos de gap)'
        ]
    },
    14: {
        title: 'Critério 5: Frutos Históricos',
        notes: [
            'Todas têm frutos bons e ruins — honestidade é crucial',
            'Pergunta-chave: isso foi "apesar" ou "por causa" do texto?',
            'Cristianismo: hospitais, universidades, abolição — quando seguido'
        ]
    },
    15: {
        title: 'Síntese Visual',
        notes: [
            'Momento visual impactante com a Balança 3D',
            'Deixar a animação falar por si',
            'Isso não "prova" — mas mostra que merece investigação'
        ]
    },
    16: {
        title: 'Conclusão',
        notes: [
            'NÃO dissemos: "Outras religiões são más"',
            'DISSEMOS: Aplicamos mesmos critérios a todas',
            'A Bíblia se destaca nesses critérios — fé RAZOÁVEL'
        ]
    },
    17: {
        title: 'Discussão',
        notes: [
            'Perguntas para reflexão em grupo',
            '1. Qual critério é mais importante para você?',
            '2. Alguma tradição te surpreendeu?',
            '3. O que você diria a um cético agora?'
        ]
    },
    18: {
        title: 'Encerramento',
        notes: [
            'Continue investigando. Continue perguntando.',
            'Próxima lição: Jesus — Histórico ou Mítico?',
            'Temos boas razões para confiar na Bíblia'
        ]
    }
};

export function useApologeticaSync(role = 'viewer') {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides] = useState(18);
    const [connected, setConnected] = useState(false);
    const [attendance, setAttendance] = useState(0);
    const [currentPoll, setCurrentPoll] = useState(null);
    const [recentReactions, setRecentReactions] = useState([]);
    const [userId, setUserId] = useState(null);

    // Buscar status (for Vercel/production)
    const fetchStatus = useCallback(async () => {
        try {
            const response = await fetch(`${API_BASE}?action=status`);
            if (!response.ok) return;

            const data = await response.json();

            setCurrentSlide(data.currentSlide || 1);
            setAttendance(data.attendance || 0);
            setCurrentPoll(data.currentPoll);

            if (data.recentReactions) {
                setRecentReactions(data.recentReactions);
            }

            setConnected(true);
        } catch (error) {
            console.error('Erro ao buscar status:', error);
            setConnected(false);
        }
    }, []);

    // Inicialização
    useEffect(() => {
        if (isDevelopment) {
            // Socket.io em desenvolvimento
            const setupSocketConnection = async () => {
                try {
                    const { default: io } = await import('socket.io-client');
                    const socket = io('http://localhost:3001', {
                        query: { room: 'apologetica-licao-4', role }
                    });

                    socket.on('connect', () => {
                        setConnected(true);
                        console.log(`[Apologética] Conectado como ${role}`);
                    });

                    socket.on('disconnect', () => setConnected(false));

                    socket.on('slide-change', (data) => {
                        setCurrentSlide(data.slide);
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

                    // Guardar socket para uso posterior
                    window.apologeticaSocket = socket;

                    return () => socket.close();
                } catch (error) {
                    console.error('Erro Socket.io:', error);
                }
            };

            setupSocketConnection();
        } else {
            // Polling em produção
            fetchStatus();
            const interval = setInterval(fetchStatus, 1000);
            return () => clearInterval(interval);
        }
    }, [fetchStatus, role]);

    // Navegação (apenas apresentador)
    const goToSlide = useCallback(async (slideNumber) => {
        if (role !== 'presenter') return;

        const newSlide = Math.max(1, Math.min(slideNumber, totalSlides));
        setCurrentSlide(newSlide);

        if (isDevelopment && window.apologeticaSocket) {
            window.apologeticaSocket.emit('change-slide', { slide: newSlide });
        } else {
            try {
                await fetch(API_BASE, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: 'change-slide', data: { slide: newSlide } })
                });
            } catch (error) {
                console.error('Erro ao mudar slide:', error);
            }
        }
    }, [role, totalSlides]);

    const nextSlide = useCallback(() => {
        goToSlide(currentSlide + 1);
    }, [currentSlide, goToSlide]);

    const prevSlide = useCallback(() => {
        goToSlide(currentSlide - 1);
    }, [currentSlide, goToSlide]);

    // Obter notas do slide atual
    const getCurrentNotes = useCallback(() => {
        return slideNotes[currentSlide] || { title: `Slide ${currentSlide}`, notes: [] };
    }, [currentSlide]);

    // Participar (para Guga)
    const join = useCallback(async (userName) => {
        const newUserId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        setUserId(newUserId);

        if (typeof window !== 'undefined') {
            localStorage.setItem('apologetica_session', JSON.stringify({
                userId: newUserId,
                userName,
                timestamp: Date.now()
            }));
        }

        if (isDevelopment && window.apologeticaSocket) {
            window.apologeticaSocket.emit('join', { userName, lessonId: 'licao-4' });
        } else {
            try {
                await fetch(API_BASE, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: 'join', data: { userName, lessonId: 'licao-4' } })
                });
            } catch (error) {
                console.error('Erro ao entrar:', error);
            }
        }

        return { success: true, userId: newUserId };
    }, []);

    // Reagir
    const react = useCallback(async (reactionType, userName = null) => {
        if (isDevelopment && window.apologeticaSocket) {
            window.apologeticaSocket.emit('reaction', {
                type: reactionType,
                userName,
                lessonId: 'licao-4'
            });
        } else {
            try {
                await fetch(API_BASE, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        action: 'reaction',
                        data: { type: reactionType, userName, lessonId: 'licao-4' }
                    })
                });
            } catch (error) {
                console.error('Erro ao reagir:', error);
            }
        }
        return { success: true };
    }, []);

    // Criar poll (apresentador)
    const createPoll = useCallback(async (question, options) => {
        if (role !== 'presenter') return { success: false };

        const pollData = {
            id: `poll_${Date.now()}`,
            question,
            options: options.map(opt => ({ text: opt, votes: 0 })),
            lessonId: 'licao-4'
        };

        if (isDevelopment && window.apologeticaSocket) {
            window.apologeticaSocket.emit('create-poll', pollData);
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

    // Votar
    const vote = useCallback(async (pollId, optionIndex) => {
        if (isDevelopment && window.apologeticaSocket) {
            window.apologeticaSocket.emit('vote', { pollId, optionIndex, lessonId: 'licao-4' });
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

    // Encerrar poll
    const endPoll = useCallback(async () => {
        if (role !== 'presenter') return;

        if (isDevelopment && window.apologeticaSocket) {
            window.apologeticaSocket.emit('end-poll', { lessonId: 'licao-4' });
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
        totalSlides,
        connected,
        attendance,
        currentPoll,
        recentReactions,
        userId,

        // Navegação (apresentador)
        goToSlide,
        nextSlide,
        prevSlide,
        getCurrentNotes,

        // Interação
        join,
        react,
        vote,

        // Polls (apresentador)
        createPoll,
        endPoll,

        // Helpers
        slideNotes
    };
}
