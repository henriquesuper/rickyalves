'use client';

import { useState, useEffect, useCallback } from 'react';

// Detecta se estamos em desenvolvimento ou produção
const isDevelopment = process.env.NODE_ENV === 'development';
const API_BASE = '/api/apologetica';

// Notas do instrutor por slide (18 slides modulares)
// Baseado no GUIA COMPLETO DO INSTRUTOR - Lição 4
const slideNotes = {
    1: {
        title: 'Por Que a Bíblia?',
        notes: [
            '⚠️ Esta lição é DELICADA. Vamos comparar tradições religiosas.',
            'A postura ERRADA: "Nossa religião é melhor" ou "Eles estão todos errados"',
            'A postura CORRETA: "Vamos aplicar os mesmos critérios a todas as alegações, incluindo a nossa"',
            '💡 Se a Bíblia não passar nos critérios, temos que ser honestos sobre isso.'
        ]
    },
    2: {
        title: 'Antes de Começar',
        notes: [
            'Lembre: Deus encontra pessoas onde estão (ex: paciente da Umbanda)',
            'Isso não significa que todas as revelações são igualmente VERDADEIRAS',
            'Significa que Deus é MISERICORDIOSO mesmo com teologia imperfeita',
            '💡 A pergunta não é "quem Deus ama?" (todos) — é "qual revelação nos dá o retrato MAIS CONFIÁVEL de quem Deus é?"'
        ]
    },
    3: {
        title: 'Os 5 Critérios (Recapitulação)',
        notes: [
            '1️⃣ COERÊNCIA INTERNA — O texto se contradiz ou mantém unidade?',
            '2️⃣ VERIFICABILIDADE — As alegações podem ser testadas contra evidências?',
            '3️⃣ REALIDADE HUMANA — Reflete a experiência humana como realmente é?',
            '4️⃣ INTEGRIDADE DAS FONTES — Temos confiança na transmissão do texto?',
            '5️⃣ FRUTOS HISTÓRICOS — O que produziu quando levada a sério?',
            '💡 Pergunta: "Você mudaria algo nesses critérios? Acrescentaria algum?"'
        ]
    },
    4: {
        title: 'Panorama das Tradições',
        notes: [
            'Vamos analisar 5 tradições com suas PRÓPRIAS alegações',
            'Não caricaturas — representações JUSTAS',
            'Mesmos critérios aplicados a TODAS',
            '💡 Cada uma alega ser revelação divina de alguma forma'
        ]
    },
    5: {
        title: 'Vedas Hindus',
        notes: [
            '📜 ALEGAÇÃO: Apaurusheya ("não de origem humana"). Eternos, "ouvidos" pelos sábios.',
            '📚 TEXTOS: Rigveda, Samaveda, Yajurveda, Atharvaveda (1500-500 a.C.)',
            '🎯 NATUREZA: Hinos, rituais, filosofia — NÃO narrativa histórica',
            '🌍 COSMOVISÃO: Brahman é impessoal. Mundo material é maya (ILUSÃO). Almas são parte do todo cósmico.',
            '⚠️ Não fazem alegações históricas verificáveis'
        ]
    },
    6: {
        title: 'Textos Budistas',
        notes: [
            '📜 ALEGAÇÃO: Sabedoria humana ILUMINADA, não revelação divina!',
            'Buda alegou DESCOBRIR a verdade — não falar por Deus',
            '📚 TEXTOS: Tipitaka, Sutras Mahayana — compilados SÉCULOS depois',
            '🎯 DIFERENTES ESCOLAS têm cânones diferentes!',
            '🌍 COSMOVISÃO: Sofrimento vem do desejo. Não há Deus criador pessoal.',
            '⚠️ A questão de Deus é considerada IRRELEVANTE para a libertação'
        ]
    },
    7: {
        title: 'Alcorão',
        notes: [
            '📜 ALEGAÇÃO: Ditado VERBAL DIRETO de Alá através de Jibril. NÃO inspirado — DITADO.',
            'Texto árabe é perfeito e inalterável. Traduções são apenas "interpretações".',
            '📚 TEXTO: Revelado 610-632 d.C., compilado APÓS morte de Maomé',
            '🌍 COSMOVISÃO: Tawhid (monoteísmo estrito). Alá é transcendente, não "Pai".',
            'Jesus foi profeta, não divino. Maomé = "selo dos profetas"',
            '⚠️ Onde toca história bíblica, frequentemente DIVERGE (nega crucificação)'
        ]
    },
    8: {
        title: 'Livro de Mórmon',
        notes: [
            '📜 ALEGAÇÃO: Tradução de PLACAS DE OURO por Joseph Smith (Urim e Tumim)',
            'Registro de povos hebreus nas Américas (2200 a.C. - 421 d.C.)',
            '📚 TEXTOS: Livro de Mórmon (1830), D&C, Pérola de Grande Valor',
            '🌍 COSMOVISÃO: Restauracionismo. Deus tem corpo físico. Potencial humano de tornar-se como Deus.',
            '⚠️ PROBLEMA: Alega civilizações MASSIVAS (milhões de pessoas) — veremos evidências',
            '❌ Anacrônicos: cavalos, trigo, aço — INEXISTENTES na América pré-colombiana'
        ]
    },
    9: {
        title: 'Bíblia',
        notes: [
            '📜 ALEGAÇÃO: INSPIRAÇÃO através de autores humanos (não ditado, exceto casos específicos)',
            'Deus inspirou pessoas que escreveram em SEUS PRÓPRIOS estilos e contextos',
            '📚 TEXTOS: 66 livros (39 AT + 27 NT), ~1500 anos, ~40 autores',
            '🎯 NATUREZA: Diversos gêneros — narrativa, poesia, profecia, lei, cartas, apocalíptico',
            '🌍 COSMOVISÃO: Deus PESSOAL, criador, que SE RELACIONA. Problema = pecado. Solução = graça.',
            '💡 Se expõe à verificação — diferente de outras tradições'
        ]
    },
    10: {
        title: 'Critério 1: Coerência Interna',
        notes: [
            '❓ PERGUNTA: O texto mantém consistência ou se contradiz?',
            '🕉️ VEDAS: Tensões internas (politeísmo → monismo). Tradição aceita múltiplas interpretações.',
            '☸️ BUDISMO: Escolas têm cânones DIFERENTES. Pluralismo aceito, sem "ortodoxia".',
            '☪️ ALCORÃO: Mais coeso (um autor). MAS: versos "ab-rogados" (posteriores cancelam anteriores).',
            '📜 MÓRMON: PROBLEMAS SÉRIOS — cita Isaías da KJV (erros do séc. XVII!). Mudanças desde 1830.',
            '✝️ BÍBLIA: 40+ autores, 1500 anos — UNIDADE NOTÁVEL. Progressão coerente: criação→queda→redenção→restauração.',
            '💡 "Como 40 pessoas em 1500 anos mantêm essa coerência SEM UM EDITOR CENTRAL?"'
        ]
    },
    11: {
        title: 'Critério 2: Verificabilidade',
        notes: [
            '❓ PERGUNTA: As alegações históricas podem ser TESTADAS?',
            '🕉️ VEDAS: Não aplicável — não faz claims históricas.',
            '☸️ BUDISMO: Buda é figura histórica (Lumbini). MAS textos 400+ anos depois.',
            '☪️ ALCORÃO: Maomé bem documentado. Conteúdo difícil de verificar.',
            '❌ MÓRMON: FALHA GRAVE — Zero evidência de nefitas, lamanitas, jareditas. Alegações específicas CONTRADITAS.',
            '✅ BÍBLIA: Muitas confirmações (Estela de Merneptá, Tel Dan, Cilindro de Ciro). Personagens "lendários" confirmados depois (Casa de Davi, Pilatos).',
            '⚠️ Tensões existem (Jericó, censo de Quirinius) — são questões de INTERPRETAÇÃO, não refutações.',
            '💡 "A Bíblia se EXPÕE à verificação — e SOBREVIVE."'
        ]
    },
    12: {
        title: 'Critério 3: Realidade Humana',
        notes: [
            '⚠️ Este critério RESSOOU MUITO na Lição 3!',
            '❓ PERGUNTA: O texto reflete a experiência humana COMO REALMENTE É?',
            '🕉️ HINDUÍSMO: Mundo é maya (ilusão). Desvaloriza mundo material e relações.',
            '☸️ BUDISMO: Causa do sofrimento = desejo. Solução = extinguir desejo. PROBLEMA: vítima de estupro sofre por "desejo"? Esposa agredida sofre por "apego" ao casamento?',
            '☪️ ISLAMISMO: Reconhece sofrimento. MAS: relação servo/Alá, não filho/Pai. Deus não sofre conosco.',
            '📜 MÓRMON: Solução = progresso pessoal. Muito OTIMISTA sobre natureza humana.',
            '✝️ BÍBLIA: Sofrimento é REAL. Deus ENTRA no sofrimento (Jesus). Lamento é legítimo. Oferece PRESENÇA.',
            '💡 "A Bíblia é o ÚNICO texto que mostra Deus ENTRANDO no sofrimento. Jesus grita: Deus meu, por que me abandonaste? Ele CONHECE o abandono."'
        ]
    },
    13: {
        title: 'Critério 4: Integridade das Fontes',
        notes: [
            '❓ PERGUNTA: Podemos confiar que o texto de HOJE reflete o ORIGINAL?',
            '🕉️ VEDAS: Tradição oral por milênios antes da escrita. Impressionante, mas não verificável.',
            '☸️ BUDISMO: Compilados 400+ anos depois. PROBLEMÁTICO.',
            '☪️ ALCORÃO: ~20 anos após Maomé. Manuscritos (Sanaa, Birmingham) mostram VARIANTES. Não tão perfeito quanto alegado.',
            '📜 MÓRMON: Placas "devolvidas ao anjo". Texto mudou MILHARES de vezes desde 1830. Sem originais!',
            '✅ BÍBLIA — NT: 5.800+ manuscritos gregos! P52 (João): ~30 anos do original.',
            '📊 COMPARAÇÃO: Homero tem ~650. Platão tem ~7 (1000+ anos de gap).',
            '📜 AT: Manuscritos do Mar Morto — Grande Rolo de Isaías PRATICAMENTE IDÊNTICO ao texto medieval!',
            '💡 "Se Deus quisesse preservar sua revelação, o que esperaríamos ver? EXATAMENTE ISSO."'
        ]
    },
    14: {
        title: 'Critério 5: Frutos Históricos',
        notes: [
            '❓ PERGUNTA: O que produziu quando levada a sério?',
            '⚠️ IMPORTANTE: Todas têm frutos bons E ruins. A pergunta justa: quando seguido, o que resulta?',
            '🕉️ HINDUÍSMO: ✅ Filosofia rica, Gandhi. ❌ Sistema de castas (justificado textualmente).',
            '☸️ BUDISMO: ✅ Compaixão, Dalai Lama. ❌ Violência budista existe (Sri Lanka, Myanmar).',
            '☪️ ISLAMISMO: ✅ Ciência medieval, caridade (zakat). ❌ Jihad armada tem base textual.',
            '📜 MÓRMON: ✅ Famílias fortes. ❌ Poligamia histórica, racismo até 1978.',
            '✝️ CRISTIANISMO: ❌ Cruzadas, Inquisição, colonialismo. MAS: contradizem ou seguem Jesus?',
            '✅ Quando seguido: Abolição (Wilberforce), hospitais, universidades, direitos humanos.',
            '💡 "Lembra da história do bolo? Aquela mulher seguia ou CONTRADIZIA Jesus?"'
        ]
    },
    15: {
        title: 'Síntese Visual',
        notes: [
            '📊 TABELA RESUMO — deixar visual falar:',
            'Coerência: Vedas Média | Budismo Baixa | Alcorão Média | Mórmon Baixa | Bíblia ALTA',
            'Verificabilidade: Vedas N/A | Budismo Baixa | Alcorão Baixa | Mórmon FALHA | Bíblia ALTA*',
            'Realidade Humana: todas Média→Baixa, exceto Bíblia ALTA',
            'Integridade: Bíblia ALTA, outras Média→Baixa',
            '*Com tensões cronológicas/interpretativas | **Quando ensinamentos são seguidos'
        ]
    },
    16: {
        title: 'Conclusão',
        notes: [
            '❌ NÃO estamos dizendo:',
            '• "Outras religiões são completamente falsas"',
            '• "Pessoas de outras religiões não podem conhecer Deus"',
            '• "Cristãos são melhores que outros"',
            '✅ ESTAMOS dizendo:',
            '• A Bíblia passa nos critérios de forma que outras não passam',
            '• Se queremos o retrato MAIS CONFIÁVEL de Deus, a Bíblia é o lugar',
            '• Deus pode encontrar pessoas em outras tradições — não significa que todas revelações são igualmente verdadeiras',
            '💡 TRANSIÇÃO: "Se a Bíblia é revelação de Deus, como foi escrita? O que significa ser inspirada? Próxima lição!"'
        ]
    },
    17: {
        title: 'Discussão',
        notes: [
            '❓ PERGUNTAS PARA DISCUSSÃO:',
            '1. "Alguma tradição te surpreendeu — positiva ou negativamente?"',
            '2. "Você acha que os critérios são JUSTOS? Favorecem alguma tradição?"',
            '3. "O que você faz com Deus alcançando pessoas em tradições imperfeitas?"',
            '4. "Tem algo sobre a Bíblia que te incomoda ou que não passaria nos critérios?"',
            '💡 Se perguntar sobre "coisas horríveis" (genocídio Canaã): "Você tem razão. Vamos tratar isso na Lição 16. Por enquanto, quadro geral."'
        ]
    },
    18: {
        title: 'Encerramento',
        notes: [
            '📝 FECHAMENTO:',
            '"A Bíblia se destaca quando aplicamos critérios consistentes.',
            'Ela não pede fé cega — se EXPÕE à verificação.',
            'Não significa que entendemos tudo ou que não há perguntas difíceis.',
            'Significa que temos BOAS RAZÕES para confiar."',
            '🔜 PRÓXIMAS LIÇÕES RELEVANTES:',
            '• Lição 5: Natureza da inspiração bíblica',
            '• Lição 7: Manuscritos em detalhes',
            '• Lição 11: Arqueologia',
            '• Lição 16: Objeções (genocídio, escravidão, etc.)'
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

    // Buscar status (for Vercel/production) - apenas para viewers/participants
    const fetchStatus = useCallback(async () => {
        // Presenter não deve sincronizar slide do servidor (ele é a fonte de verdade)
        if (role === 'presenter') {
            setConnected(true);
            return;
        }

        try {
            const response = await fetch(`${API_BASE}?action=status`);
            if (!response.ok) return;

            const data = await response.json();

            // Só atualiza o slide se for diferente (evita loops)
            if (data.currentSlide && data.currentSlide !== currentSlide) {
                setCurrentSlide(data.currentSlide);
            }

            setAttendance(data.attendance || 0);
            setCurrentPoll(data.currentPoll || null);

            // Reações são apenas alertas temporários - não precisam ser persistidas
            // O servidor envia as recentes, mas elas serão limpas automaticamente
            if (data.recentReactions && data.recentReactions.length > 0) {
                // Filtrar apenas reações novas (não vistas antes)
                const newReactions = data.recentReactions.filter(
                    r => !recentReactions.some(existing => existing.id === r.id)
                );
                if (newReactions.length > 0) {
                    setRecentReactions(prev => {
                        const updated = [...prev, ...newReactions].slice(-5);
                        return updated;
                    });
                    // Auto-limpar reações após 4 segundos
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
            // Polling em produção - menos frequente para evitar sobrecarga
            fetchStatus();
            const interval = setInterval(fetchStatus, 2000); // 2 segundos em vez de 1
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
