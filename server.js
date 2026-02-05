const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // Permite conexões de qualquer origem (LAN)
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

// Estado global da apresentação
let presentationState = {
  currentSlide: 0,
  participants: new Set(),
  polls: {},
  currentPoll: null,
  attendance: 0,
  interactions: []
};

// Estado específico da Lição 6 (quiz interativo)
let licao6State = {
  currentSlide: 1, // Começa no slide 1 (Título com QR Code)
  currentQuizQuestion: 1,
  quizResponses: {}, // { questionNumber: { sim: count, nao: count, talvez: count } }
  quizComplete: false,
  participants: new Set(),
  currentPoll: null,
  polls: {}
};

// Estado específico da Lição 7 (manuscritos e transmissão textual)
let licao7State = {
  currentSlide: 1,
  currentQuizQuestion: 1,
  quizResponses: {}, // { questionNumber: { sim: count, nao: count, talvez: count } }
  quizComplete: false,
  participants: new Set(),
  recentReactions: [] // Armazenar reações recentes para broadcast
};

// Estatísticas em tempo real
let stats = {
  totalVotes: 0,
  activeUsers: 0,
  startTime: Date.now()
};

io.on('connection', (socket) => {
  const room = socket.handshake.query.room;
  const role = socket.handshake.query.role;

  console.log(`Novo participante conectado: ${socket.id} (room: ${room}, role: ${role})`);

  // Join room se especificado
  if (room) {
    socket.join(room);
  }

  // Adiciona participante
  presentationState.participants.add(socket.id);
  presentationState.attendance = presentationState.participants.size;
  stats.activeUsers = presentationState.participants.size;

  // Para Lição 6
  if (room === 'apologetica-licao-6') {
    licao6State.participants.add(socket.id);

    // Envia estado atual para o novo participante
    socket.emit('presentation-state', {
      currentSlide: licao6State.currentSlide,
      currentQuizQuestion: licao6State.currentQuizQuestion,
      quizResponses: licao6State.quizResponses,
      quizComplete: licao6State.quizComplete,
      attendance: licao6State.participants.size,
      currentPoll: licao6State.currentPoll
    });

    // Notifica todos na sala sobre novo participante
    io.to(room).emit('attendance-update', {
      count: licao6State.participants.size,
      newParticipant: true
    });
    // Para Lição 7
  } else if (room === 'apologetica-licao-7') {
    licao7State.participants.add(socket.id);

    // Envia estado atual para o novo participante
    socket.emit('presentation-state', {
      currentSlide: licao7State.currentSlide,
      currentQuizQuestion: licao7State.currentQuizQuestion,
      quizResponses: licao7State.quizResponses,
      quizComplete: licao7State.quizComplete,
      attendance: licao7State.participants.size
    });

    // Notifica todos na sala sobre novo participante
    io.to(room).emit('attendance-update', {
      count: licao7State.participants.size,
      newParticipant: true
    });
  } else {
    // Envia estado atual para o novo participante (outros)
    socket.emit('presentation-state', presentationState);
    socket.emit('stats-update', stats);

    // Notifica todos sobre novo participante
    io.emit('attendance-update', {
      count: presentationState.attendance,
      newParticipant: true
    });
  }

  // ====== MUDANÇA DE SLIDE (LIÇÃO 6 e 7) ======
  socket.on('change-slide', (data) => {
    const slideNumber = typeof data === 'object' ? data.slide : data;
    const lesson = data.lesson || 'licao-6';

    if (lesson === 'licao-7') {
      console.log(`[Lição 7] Slide mudou para: ${slideNumber}`);
      licao7State.currentSlide = slideNumber;
      io.to('apologetica-licao-7').emit('slide-change', { slide: slideNumber });
    } else {
      console.log(`[Lição 6] Slide mudou para: ${slideNumber}`);
      licao6State.currentSlide = slideNumber;
      io.to('apologetica-licao-6').emit('slide-change', { slide: slideNumber });
    }
  });

  // ====== MUDANÇA DE PERGUNTA DO QUIZ (LIÇÃO 6 e 7) ======
  socket.on('quiz-question-change', (data) => {
    const questionNumber = data.question;
    const lesson = data.lesson || 'licao-6';

    if (lesson === 'licao-7') {
      console.log(`[Lição 7] Pergunta do quiz mudou para: ${questionNumber}`);
      licao7State.currentQuizQuestion = questionNumber;
      licao7State.currentSlide = 0;
      io.to('apologetica-licao-7').emit('quiz-question-change', { question: questionNumber });
      io.to('apologetica-licao-7').emit('slide-change', { slide: 0 });
    } else {
      console.log(`[Lição 6] Pergunta do quiz mudou para: ${questionNumber}`);
      licao6State.currentQuizQuestion = questionNumber;
      licao6State.currentSlide = 0;
      io.to('apologetica-licao-6').emit('quiz-question-change', { question: questionNumber });
      io.to('apologetica-licao-6').emit('slide-change', { slide: 0 });
    }
  });

  // ====== RESPOSTA DO QUIZ (LIÇÃO 6 e 7) ======
  socket.on('quiz-response', (data) => {
    const { question, response, lesson = 'licao-6' } = data;

    const state = lesson === 'licao-7' ? licao7State : licao6State;
    const room = lesson === 'licao-7' ? 'apologetica-licao-7' : 'apologetica-licao-6';

    console.log(`[${lesson}] Resposta recebida - Q${question}: ${response}`);

    // Inicializa contagem se não existir
    if (!state.quizResponses[question]) {
      state.quizResponses[question] = { sim: 0, nao: 0, talvez: 0 };
    }

    // Incrementa contagem
    if (response in state.quizResponses[question]) {
      state.quizResponses[question][response]++;
    }

    // Broadcast das respostas atualizadas
    io.to(room).emit('quiz-response', {
      question,
      response,
      responses: state.quizResponses[question],
      allResponses: state.quizResponses
    });

    console.log(`[${lesson}] Respostas atualizadas:`, state.quizResponses[question]);
  });



  // Mudança de slide genérica (para outras apresentações)
  socket.on('slide-change', (slideNumber) => {
    if (typeof slideNumber === 'number') {
      presentationState.currentSlide = slideNumber;
      socket.broadcast.emit('slide-changed', slideNumber);
    }
  });

  // Criar nova enquete
  socket.on('create-poll', (pollData) => {
    const pollId = Date.now().toString();
    presentationState.polls[pollId] = {
      id: pollId,
      question: pollData.question,
      options: pollData.options.map(opt => ({ text: opt, votes: 0 })),
      isActive: true,
      createdAt: Date.now()
    };
    presentationState.currentPoll = pollId;

    io.emit('new-poll', presentationState.polls[pollId]);
  });

  // Votar em enquete
  socket.on('vote', (data) => {
    const { pollId, optionIndex } = data;
    if (presentationState.polls[pollId] && presentationState.polls[pollId].isActive) {
      presentationState.polls[pollId].options[optionIndex].votes++;
      stats.totalVotes++;

      // Adiciona interação
      presentationState.interactions.push({
        type: 'vote',
        userId: socket.id,
        pollId,
        optionIndex,
        timestamp: Date.now()
      });

      io.emit('poll-update', presentationState.polls[pollId]);
      io.emit('stats-update', stats);
    }
  });

  // Finalizar enquete
  socket.on('end-poll', (pollId) => {
    if (presentationState.polls[pollId]) {
      presentationState.polls[pollId].isActive = false;
      presentationState.currentPoll = null;
      io.emit('poll-ended', pollId);
    }
  });

  // Reações em tempo real
  socket.on('reaction', (reactionData) => {
    console.log('🎬 [SERVER DEBUG] Reação recebida no servidor:', reactionData);

    const reactionEntry = {
      type: 'reaction',
      userId: socket.id,
      userName: reactionData.userName || 'Anônimo',
      reaction: reactionData.type,
      timestamp: Date.now(),
      id: Date.now() + Math.random()
    };

    presentationState.interactions.push(reactionEntry);

    const broadcastData = {
      reaction: reactionData.type,
      userName: reactionEntry.userName,
      count: presentationState.interactions.filter(i =>
        i.type === 'reaction' &&
        i.reaction === reactionData.type &&
        Date.now() - i.timestamp < 5000
      ).length,
      id: reactionEntry.id
    };

    console.log('🎬 [SERVER DEBUG] Fazendo broadcast da reação:', broadcastData);

    // Broadcast da reação para todos
    io.emit('live-reaction', broadcastData);
  });

  // Resposta do quiz
  socket.on('quiz-answer', (answerData) => {
    presentationState.interactions.push({
      type: 'quiz',
      userId: socket.id,
      answer: answerData.answer,
      isCorrect: answerData.isCorrect,
      timestamp: Date.now()
    });

    io.emit('quiz-response', answerData);
  });

  // Participante sai
  socket.on('disconnect', () => {
    console.log('Participante desconectado:', socket.id);
    presentationState.participants.delete(socket.id);
    presentationState.attendance = presentationState.participants.size;
    stats.activeUsers = presentationState.participants.size;

    // Remove de Lição 6 também
    if (licao6State.participants.has(socket.id)) {
      licao6State.participants.delete(socket.id);
      io.to('apologetica-licao-6').emit('attendance-update', {
        count: licao6State.participants.size,
        participantLeft: true
      });
    }

    io.emit('attendance-update', {
      count: presentationState.attendance,
      participantLeft: true
    });
  });
});

// Endpoint para obter QR code info
app.get('/qr-info', (req, res) => {
  res.json({
    url: `http://localhost:3000/mobile-interface`,
    participants: presentationState.attendance,
    activePoll: presentationState.currentPoll
  });
});

// Endpoint para estatísticas
app.get('/stats', (req, res) => {
  res.json({
    ...stats,
    totalParticipants: presentationState.attendance,
    sessionDuration: Date.now() - stats.startTime,
    recentInteractions: presentationState.interactions.slice(-10)
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`🚀 Servidor da Escola Sabatina rodando na porta ${PORT}`);
  console.log(`📱 Interface móvel disponível em: http://localhost:3000/mobile-interface`);
}); 