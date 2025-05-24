import { NextResponse } from 'next/server';

// Estado global simplificado para demonstração
// Em produção, você usaria um banco de dados como Redis ou PostgreSQL
let globalState = {
  participants: new Map(), // Mudando para Map para armazenar dados do usuário
  polls: {},
  currentPoll: null,
  attendance: 0,
  interactions: [],
  stats: {
    totalVotes: 0,
    activeUsers: 0,
    startTime: Date.now()
  }
};

// Função para limpar sessões inativas (mais de 10 minutos sem atividade)
function cleanupInactiveSessions() {
  const now = Date.now();
  const INACTIVE_TIMEOUT = 10 * 60 * 1000; // 10 minutos
  
  const toRemove = [];
  globalState.participants.forEach((user, userId) => {
    if (now - user.lastActivity > INACTIVE_TIMEOUT) {
      toRemove.push(userId);
    }
  });
  
  toRemove.forEach(userId => {
    const user = globalState.participants.get(userId);
    globalState.participants.delete(userId);
    console.log('🧹 [CLEANUP] Sessão inativa removida:', userId, user.userName);
  });
  
  if (toRemove.length > 0) {
    globalState.attendance = globalState.participants.size;
    globalState.stats.activeUsers = globalState.attendance;
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');

  // Limpar sessões inativas a cada requisição GET
  cleanupInactiveSessions();

  switch (action) {
    case 'status':
      // Filtrar reações dos últimos 5 segundos para mostrar na TV
      const now = Date.now();
      const recentReactionsList = globalState.interactions
        .filter(i => i.type === 'reaction' && (now - i.timestamp) < 5000);
      
      // Agrupar por usuário+reação para evitar duplicatas (pegar só a mais recente)
      const uniqueReactions = new Map();
      
      recentReactionsList.forEach(reaction => {
        const key = `${reaction.reaction}_${reaction.userName}`;
        const existing = uniqueReactions.get(key);
        
        // Manter apenas a reação mais recente de cada usuário+tipo
        if (!existing || reaction.timestamp > existing.timestamp) {
          uniqueReactions.set(key, reaction);
        }
      });
      
      // Converter para array e adicionar contagem
      const finalReactions = Array.from(uniqueReactions.values()).map(reaction => ({
        id: reaction.id,
        reaction: reaction.reaction,
        userName: reaction.userName,
        timestamp: reaction.timestamp,
        count: recentReactionsList.filter(r => 
          r.reaction === reaction.reaction && 
          r.userName === reaction.userName
        ).length
      }));
      
      return NextResponse.json({
        attendance: globalState.attendance,
        currentPoll: globalState.currentPoll ? globalState.polls[globalState.currentPoll] : null,
        stats: globalState.stats,
        recentReactions: finalReactions.slice(-5) // Máximo 5 reações na tela
      });

    case 'polls':
      return NextResponse.json({
        polls: globalState.polls,
        currentPoll: globalState.currentPoll
      });

    default:
      return NextResponse.json({
        participants: globalState.attendance,
        activePoll: globalState.currentPoll,
        url: `${process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin}/mobile-interface`
      });
  }
}

export async function POST(request) {
  const body = await request.json();
  const { action, data } = body;

  switch (action) {
    case 'join':
      const userName = data.userName;
      const existingUserId = data.userId;
      
      // Se já tem userId e userName, verificar se é válido
      if (existingUserId && userName && globalState.participants.has(existingUserId)) {
        const existingUser = globalState.participants.get(existingUserId);
        if (existingUser.userName === userName) {
          // Usuário já existe e é válido, apenas atualizar timestamp
          existingUser.lastActivity = Date.now();
          console.log('🔄 [SESSION] Sessão existente encontrada:', existingUserId, userName);
          
          return NextResponse.json({
            success: true,
            userId: existingUserId,
            userName: userName,
            attendance: globalState.participants.size,
            sessionRestored: true
          });
        }
      }
      
      // Remover conexões antigas do mesmo nome (cleanup de refresh/duplicatas)
      if (userName) {
        const toRemove = [];
        globalState.participants.forEach((user, id) => {
          if (user.userName === userName) {
            toRemove.push(id);
          }
        });
        toRemove.forEach(id => {
          globalState.participants.delete(id);
          console.log('🧹 [CLEANUP] Removida sessão antiga:', id, userName);
        });
      }
      
      // Criar nova sessão
      const newUserId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      globalState.participants.set(newUserId, {
        userId: newUserId,
        userName: userName || 'Anônimo',
        joinedAt: Date.now(),
        lastActivity: Date.now()
      });
      
      globalState.attendance = globalState.participants.size;
      globalState.stats.activeUsers = globalState.attendance;
      
      console.log('✅ [SESSION] Nova sessão criada:', newUserId, userName);
      console.log('👥 [SESSION] Total de participantes:', globalState.attendance);
      
      return NextResponse.json({
        success: true,
        userId: newUserId,
        userName: userName || 'Anônimo',
        attendance: globalState.attendance,
        sessionRestored: false
      });

    case 'leave':
      if (data.userId && globalState.participants.has(data.userId)) {
        const user = globalState.participants.get(data.userId);
        globalState.participants.delete(data.userId);
        console.log('👋 [SESSION] Usuário saiu:', data.userId, user.userName);
      }
      
      globalState.attendance = globalState.participants.size;
      globalState.stats.activeUsers = globalState.attendance;
      
      return NextResponse.json({
        success: true,
        attendance: globalState.attendance
      });

    case 'create-poll':
      const pollId = Date.now().toString();
      globalState.polls[pollId] = {
        id: pollId,
        question: data.question,
        options: data.options.map(opt => ({ text: opt, votes: 0 })),
        isActive: true,
        createdAt: Date.now()
      };
      globalState.currentPoll = pollId;
      
      return NextResponse.json({
        success: true,
        poll: globalState.polls[pollId]
      });

    case 'vote':
      // Atualizar atividade do usuário
      if (data.userId && globalState.participants.has(data.userId)) {
        globalState.participants.get(data.userId).lastActivity = Date.now();
      }
      
      const { pollId: votePollId, optionIndex } = data;
      if (globalState.polls[votePollId] && globalState.polls[votePollId].isActive) {
        globalState.polls[votePollId].options[optionIndex].votes++;
        globalState.stats.totalVotes++;
        
        globalState.interactions.push({
          type: 'vote',
          userId: data.userId,
          pollId: votePollId,
          optionIndex,
          timestamp: Date.now()
        });
        
        return NextResponse.json({
          success: true,
          poll: globalState.polls[votePollId],
          stats: globalState.stats
        });
      }
      
      return NextResponse.json({ success: false, error: 'Poll not found or inactive' });

    case 'reaction':
      // Atualizar atividade do usuário
      if (data.userId && globalState.participants.has(data.userId)) {
        globalState.participants.get(data.userId).lastActivity = Date.now();
      }
      
      const reactionData = {
        type: 'reaction',
        userId: data.userId,
        userName: data.userName || 'Anônimo',
        reaction: data.type,
        timestamp: Date.now(),
        id: Date.now() + Math.random()
      };
      
      globalState.interactions.push(reactionData);
      console.log('🔥 [API DEBUG] Reação adicionada:', reactionData);
      console.log('🔥 [API DEBUG] Total de interações:', globalState.interactions.length);
      
      // Contar reações recentes (últimos 5 segundos)
      const recentReactions = globalState.interactions.filter(i => 
        i.type === 'reaction' && 
        i.reaction === data.type && 
        Date.now() - i.timestamp < 5000
      ).length;
      
      return NextResponse.json({
        success: true,
        reaction: data.type,
        userName: reactionData.userName,
        count: recentReactions,
        reactionData: reactionData
      });

    case 'end-poll':
      const endPollId = data.pollId;
      if (globalState.polls[endPollId]) {
        globalState.polls[endPollId].isActive = false;
        globalState.currentPoll = null;
        
        return NextResponse.json({
          success: true,
          pollId: endPollId
        });
      }
      
      return NextResponse.json({ success: false, error: 'Poll not found' });

    default:
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  }
} 