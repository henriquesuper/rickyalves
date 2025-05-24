import { NextResponse } from 'next/server';

// Estado global simplificado para demonstração
// Em produção, você usaria um banco de dados como Redis ou PostgreSQL
let globalState = {
  participants: new Set(),
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

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');

  switch (action) {
    case 'status':
      return NextResponse.json({
        attendance: globalState.attendance,
        currentPoll: globalState.currentPoll ? globalState.polls[globalState.currentPoll] : null,
        stats: globalState.stats
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
      const userId = data.userId || `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      globalState.participants.add(userId);
      globalState.attendance = globalState.participants.size;
      globalState.stats.activeUsers = globalState.attendance;
      
      return NextResponse.json({
        success: true,
        userId,
        attendance: globalState.attendance
      });

    case 'leave':
      globalState.participants.delete(data.userId);
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
      globalState.interactions.push({
        type: 'reaction',
        userId: data.userId,
        reaction: data.type,
        timestamp: Date.now()
      });
      
      // Contar reações recentes (últimos 5 segundos)
      const recentReactions = globalState.interactions.filter(i => 
        i.type === 'reaction' && 
        i.reaction === data.type && 
        Date.now() - i.timestamp < 5000
      ).length;
      
      return NextResponse.json({
        success: true,
        reaction: data.type,
        count: recentReactions
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