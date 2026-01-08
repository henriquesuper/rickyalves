// API Route for Apologetica Lesson Synchronization
// Works in Vercel serverless environment

// In-memory state (will reset on cold starts, but works for sessions)
let state = {
    currentSlide: 1,
    attendance: 0,
    users: {},
    currentPoll: null,
    recentReactions: [],
    lastActivity: Date.now()
};

// Cleanup old users (inactive for more than 5 minutes)
function cleanupUsers() {
    const now = Date.now();
    const fiveMinutesAgo = now - 5 * 60 * 1000;

    Object.keys(state.users).forEach(id => {
        if (state.users[id].lastSeen < fiveMinutesAgo) {
            delete state.users[id];
        }
    });

    state.attendance = Object.keys(state.users).length;
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');

    cleanupUsers();

    if (action === 'status') {
        // Reações são temporárias - retornar apenas as dos últimos 5 segundos
        const fiveSecondsAgo = Date.now() - 5000;
        const freshReactions = state.recentReactions.filter(r => r.timestamp > fiveSecondsAgo);

        return Response.json({
            currentSlide: state.currentSlide,
            attendance: state.attendance,
            currentPoll: state.currentPoll,
            recentReactions: freshReactions,
            stats: {
                totalVotes: state.currentPoll
                    ? state.currentPoll.options.reduce((sum, opt) => sum + opt.votes, 0)
                    : 0,
                activeUsers: state.attendance
            }
        });
    }

    return Response.json({ error: 'Unknown action' }, { status: 400 });
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { action, data } = body;

        cleanupUsers();

        switch (action) {
            case 'join': {
                const userId = data.userId || `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

                state.users[userId] = {
                    userName: data.userName,
                    joinedAt: Date.now(),
                    lastSeen: Date.now()
                };
                state.attendance = Object.keys(state.users).length;

                return Response.json({
                    success: true,
                    userId,
                    userName: data.userName,
                    attendance: state.attendance,
                    sessionRestored: !!data.userId
                });
            }

            case 'change-slide': {
                const newSlide = Math.max(1, Math.min(data.slide, 18)); // Max 18 slides
                state.currentSlide = newSlide;
                state.lastActivity = Date.now();

                return Response.json({
                    success: true,
                    currentSlide: state.currentSlide
                });
            }

            case 'reaction': {
                const reactionData = {
                    type: data.type,
                    userName: data.userName,
                    timestamp: Date.now(),
                    id: `reaction_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`
                };

                // Manter apenas reações recentes (limpar automático)
                const fiveSecondsAgo = Date.now() - 5000;
                state.recentReactions = state.recentReactions.filter(r => r.timestamp > fiveSecondsAgo);
                state.recentReactions.push(reactionData);

                // Update user's last seen
                if (data.userId && state.users[data.userId]) {
                    state.users[data.userId].lastSeen = Date.now();
                }

                return Response.json({
                    success: true,
                    reaction: reactionData
                });
            }

            case 'create-poll': {
                state.currentPoll = {
                    id: data.id || `poll_${Date.now()}`,
                    question: data.question,
                    options: data.options.map(opt =>
                        typeof opt === 'string' ? { text: opt, votes: 0 } : opt
                    ),
                    createdAt: Date.now(),
                    voters: []
                };

                return Response.json({
                    success: true,
                    poll: state.currentPoll
                });
            }

            case 'vote': {
                if (!state.currentPoll) {
                    return Response.json({ success: false, error: 'No active poll' });
                }

                const { optionIndex, userId } = data;

                // Check if already voted
                if (state.currentPoll.voters.includes(userId)) {
                    return Response.json({ success: false, error: 'Already voted' });
                }

                if (optionIndex >= 0 && optionIndex < state.currentPoll.options.length) {
                    state.currentPoll.options[optionIndex].votes++;
                    state.currentPoll.voters.push(userId);
                }

                return Response.json({
                    success: true,
                    poll: state.currentPoll
                });
            }

            case 'end-poll': {
                const endedPoll = state.currentPoll;
                state.currentPoll = null;

                return Response.json({
                    success: true,
                    endedPoll
                });
            }

            case 'heartbeat': {
                if (data.userId && state.users[data.userId]) {
                    state.users[data.userId].lastSeen = Date.now();
                }

                return Response.json({
                    success: true,
                    currentSlide: state.currentSlide,
                    attendance: state.attendance
                });
            }

            default:
                return Response.json({ error: 'Unknown action' }, { status: 400 });
        }
    } catch (error) {
        console.error('API Error:', error);
        return Response.json({ error: 'Internal server error' }, { status: 500 });
    }
}
