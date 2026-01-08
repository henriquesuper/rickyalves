'use client';

import { useState, useEffect, useCallback } from 'react';

// Detecta se estamos em desenvolvimento ou produção
const isDevelopment = process.env.NODE_ENV === 'development';
const API_BASE = '/api/apologetica';

// Notas do instrutor por slide (extraídas da Lição 4.md)
const slideNotes = {
    1: {
        title: 'Abertura',
        notes: [
            'Esta lição é delicada. Vamos comparar tradições religiosas.',
            'A postura correta: "Vamos aplicar os mesmos critérios a todas as alegações, incluindo a nossa"',
            'Se a Bíblia não passar nos critérios, temos que ser honestos sobre isso.'
        ]
    },
    2: {
        title: 'Nossa Postura',
        notes: [
            'Lembre a Guga: Deus encontra pessoas onde elas estão (a paciente da Umbanda)',
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
        title: 'Vedas Hindus',
        notes: [
            'Alegação: Conhecimento eterno (apaurusheya — "não de origem humana")',
            'Os Vedas não foram escritos; foram "ouvidos" pelos sábios',
            'Realidade última (Brahman) é impessoal. Mundo material é maya (ilusão)'
        ]
    },
    5: {
        title: 'Textos Budistas',
        notes: [
            'Buda não alegou falar por Deus — alegou ter descoberto a verdade através da meditação',
            'Não há Deus criador pessoal',
            'A questão de Deus é considerada irrelevante para a libertação'
        ]
    },
    6: {
        title: 'Alcorão',
        notes: [
            'Alegação: Ditado verbal direto de Alá. Não inspirado — ditado.',
            'Alá é absolutamente transcendente, não "Pai"',
            'Maomé é o "selo dos profetas" — revelação final'
        ]
    },
    7: {
        title: 'Livro de Mórmon',
        notes: [
            'Tradução de placas de ouro por Joseph Smith',
            'Registro de povos hebreus que migraram para as Américas',
            'Deus tem corpo físico. Potencial humano de tornar-se como Deus'
        ]
    },
    8: {
        title: 'Bíblia',
        notes: [
            'Deus não ditou (exceto casos específicos como os Dez Mandamentos)',
            'Ele inspirou pessoas que escreveram em seus próprios estilos',
            '66 livros, ~1500 anos, ~40 autores'
        ]
    },
    9: {
        title: 'Critério 1: Coerência - Vedas e Budismo',
        notes: [
            'Vedas: Tensões internas (politeísmo inicial → monismo posterior)',
            'Budismo: Diferentes escolas têm cânones diferentes',
            'Pluralismo interno aceito; não há "ortodoxia" única'
        ]
    },
    10: {
        title: 'Critério 1: Coerência - Alcorão e Mórmon',
        notes: [
            'Alcorão: Versos "ab-rogados" (naskh) — versos posteriores cancelam anteriores',
            'Mórmon: Anacrônicos - cita Isaías da KJV (incluindo erros do séc. XVII)',
            'Mórmon: Mudanças textuais significativas desde 1830'
        ]
    },
    11: {
        title: 'Critério 1: Coerência - Bíblia',
        notes: [
            '40+ autores, 1500 anos — e mantém unidade teológica notável',
            'Tensões existem (Tiago vs. Paulo?) — mas resolvíveis no contexto',
            '💡 Ponto: "Como 40 pessoas em 1500 anos mantêm essa coerência sem um editor central?"'
        ]
    },
    12: {
        title: 'Critério 2: Verificabilidade',
        notes: [
            'Vedas: Não fazem alegações históricas verificáveis',
            'Buda é figura histórica, mas textos compilados 400+ anos depois',
            'Maomé bem documentado, mas nega crucificação (diverge da história)'
        ]
    },
    13: {
        title: 'Critério 2: Mórmon',
        notes: [
            '⚠️ FALHA GRAVE: Alega civilizações massivas nas Américas (milhões de pessoas)',
            'Zero evidência arqueológica de nefitas, lamanitas, jareditas',
            'Anacrônicos: cavalos, trigo, aço — inexistentes na América pré-colombiana'
        ]
    },
    14: {
        title: 'Critério 2: Bíblia - Confirmações',
        notes: [
            'Muitas confirmações: Estela de Merneptá, Inscrição de Tel Dan, Cilindro de Ciro',
            'Personagens antes "lendários" foram confirmados (Casa de Davi, Pilatos)',
            'A Bíblia se expõe à verificação — diferente de outras tradições'
        ]
    },
    15: {
        title: 'Critério 2: Bíblia - Tensões',
        notes: [
            'HONESTIDADE: Existem pontos de tensão',
            'Jericó: Camadas arqueológicas não se alinham facilmente',
            'Censo de Quirinius (Lucas): Dificuldade de harmonização cronológica',
            'São problemas de datação/escala, não negações categóricas'
        ]
    },
    16: {
        title: 'Critério 3: Realidade Humana - Outras',
        notes: [
            '⚠️ Este é o critério que mais ressoou com a Guga na Lição 3',
            'Vedas: Mundo é ilusão. Desvaloriza relações pessoais',
            'Budismo: Sofrimento vem do desejo. Solução: extinguir desejo',
            'PROBLEMA: O sofrimento de um estupro vem do "desejo" da vítima?'
        ]
    },
    17: {
        title: 'Critério 3: Realidade Humana - Bíblia',
        notes: [
            '💡 PONTO-CHAVE: "A Bíblia é o único texto que mostra Deus entrando no sofrimento"',
            'Jesus não explica o sofrimento de longe — Ele entra nele',
            'Na cruz, Ele grita "Deus meu, por que me abandonaste?" Ele conhece o abandono.',
            '⚠️ CUIDADO: Não forçar conexão com a ferida dela. Apenas apresentar.'
        ]
    },
    18: {
        title: 'Critério 4: Integridade das Fontes',
        notes: [
            'Budismo: Compilados 400+ anos após Buda - problemático',
            'Mórmon: Placas originais "levadas pelo anjo" - sem verificação',
            'NT: 5.800+ manuscritos gregos. P52: ~30 anos do original',
            'AT: Manuscritos do Mar Morto praticamente idênticos ao texto medieval'
        ]
    },
    19: {
        title: 'Critério 5: Frutos Históricos',
        notes: [
            'Todas as tradições têm frutos bons e ruins',
            'Perguntar: "Quando os seguidores vivem de acordo com os ensinamentos, o que resulta?"',
            'Cristianismo: Abusos contradizem Jesus. Quando seguido: abolição, hospitais, universidades',
            '💡 "Lembra da história do bolo? Aquela mulher estava seguindo ou contradizendo Jesus?"'
        ]
    },
    20: {
        title: 'Tabela Resumo',
        notes: [
            'Apresentar visualmente o resumo de todos os critérios',
            '*Com tensões cronológicas/interpretativas',
            '**Quando ensinamentos são seguidos'
        ]
    },
    21: {
        title: 'Balança da Verdade',
        notes: [
            'Momento visual impactante',
            'Deixar a animação falar por si'
        ]
    },
    22: {
        title: 'O Que Isso Significa',
        notes: [
            'NÃO estamos dizendo: "Todas as outras religiões são falsas"',
            'NÃO estamos dizendo: "Cristãos são melhores"',
            'ESTAMOS dizendo: A Bíblia passa nos critérios de forma única'
        ]
    },
    23: {
        title: 'Transição para Lição 5',
        notes: [
            'Pergunta de transição: "Se a Bíblia é revelação de Deus, como foi escrita?"',
            '"O que significa dizer que ela é inspirada?"',
            'Isso é o que vamos explorar na próxima lição'
        ]
    },
    24: {
        title: 'Discussão',
        notes: [
            'Perguntas para discussão:',
            '1. Alguma tradição te surpreendeu?',
            '2. Os critérios são justos?',
            '3. O que você faz com Deus alcançando pessoas em tradições imperfeitas?',
            '4. Algo sobre a Bíblia ainda te incomoda?'
        ]
    },
    25: {
        title: 'Fechamento',
        notes: [
            'A Bíblia se destaca quando aplicamos critérios consistentes',
            'Ela não pede fé cega — ela se expõe à verificação',
            'Temos boas razões para confiar que ela é o que alega ser'
        ]
    }
};

export function useApologeticaSync(role = 'viewer') {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides] = useState(25);
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
