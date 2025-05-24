const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3001"],
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

// Estatísticas em tempo real
let stats = {
  totalVotes: 0,
  activeUsers: 0,
  startTime: Date.now()
};

io.on('connection', (socket) => {
  console.log('Novo participante conectado:', socket.id);
  
  // Adiciona participante
  presentationState.participants.add(socket.id);
  presentationState.attendance = presentationState.participants.size;
  stats.activeUsers = presentationState.participants.size;
  
  // Envia estado atual para o novo participante
  socket.emit('presentation-state', presentationState);
  socket.emit('stats-update', stats);
  
  // Notifica todos sobre novo participante
  io.emit('attendance-update', {
    count: presentationState.attendance,
    newParticipant: true
  });

  // Mudança de slide (apenas para apresentador)
  socket.on('slide-change', (slideNumber) => {
    presentationState.currentSlide = slideNumber;
    socket.broadcast.emit('slide-changed', slideNumber);
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