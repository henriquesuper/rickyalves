import { useState, useEffect, useCallback } from 'react';

// Detecta se estamos em desenvolvimento ou produção
const isDevelopment = process.env.NODE_ENV === 'development';
const API_BASE = isDevelopment ? 'http://localhost:3001' : '/api/socket';

export function useInteraction() {
  const [connected, setConnected] = useState(false);
  const [attendance, setAttendance] = useState(0);
  const [currentPoll, setCurrentPoll] = useState(null);
  const [stats, setStats] = useState({ totalVotes: 0, activeUsers: 0 });
  const [userId, setUserId] = useState(null);
  const [recentReactions, setRecentReactions] = useState([]);

  // Polling para buscar dados (para Vercel)
  const fetchStatus = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE}?action=status`);
      const data = await response.json();
      
      setAttendance(data.attendance || 0);
      setCurrentPoll(data.currentPoll);
      setStats(data.stats || { totalVotes: 0, activeUsers: 0 });
      setConnected(true);
    } catch (error) {
      console.error('Erro ao buscar status:', error);
      setConnected(false);
    }
  }, []);

  // Inicialização
  useEffect(() => {
    if (isDevelopment) {
      // Usar Socket.io em desenvolvimento
      const setupSocketConnection = async () => {
        try {
          const { default: io } = await import('socket.io-client');
          const socket = io('http://localhost:3001');
          
          socket.on('connect', () => {
            setConnected(true);
            console.log('Conectado ao servidor Socket.io');
          });

          socket.on('disconnect', () => {
            setConnected(false);
          });

          socket.on('attendance-update', (data) => {
            setAttendance(data.count);
          });

          socket.on('new-poll', (poll) => {
            setCurrentPoll(poll);
          });

          socket.on('poll-update', (poll) => {
            setCurrentPoll(poll);
          });

          socket.on('poll-ended', () => {
            setCurrentPoll(null);
          });

          socket.on('stats-update', (newStats) => {
            setStats(newStats);
          });

          socket.on('live-reaction', (reactionData) => {
            setRecentReactions(prev => {
              const updated = [...prev, { ...reactionData, id: Date.now() }];
              return updated.slice(-5);
            });
            
            setTimeout(() => {
              setRecentReactions(prev => prev.slice(1));
            }, 4000);
          });

          return () => socket.close();
        } catch (error) {
          console.error('Erro ao conectar Socket.io:', error);
        }
      };

      setupSocketConnection();
    } else {
      // Usar polling em produção
      fetchStatus();
      const interval = setInterval(fetchStatus, 2000); // Poll a cada 2 segundos
      
      return () => clearInterval(interval);
    }
  }, [fetchStatus]);

  const join = useCallback(async (userName) => {
    try {
      const response = await fetch(API_BASE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'join',
          data: { userName }
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setUserId(result.userId);
        setAttendance(result.attendance);
      }
      return result;
    } catch (error) {
      console.error('Erro ao entrar:', error);
      return { success: false, error: error.message };
    }
  }, []);

  const vote = useCallback(async (pollId, optionIndex) => {
    try {
      const response = await fetch(API_BASE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'vote',
          data: { pollId, optionIndex, userId }
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setCurrentPoll(result.poll);
        setStats(result.stats);
      }
      return result;
    } catch (error) {
      console.error('Erro ao votar:', error);
      return { success: false, error: error.message };
    }
  }, [userId]);

  const react = useCallback(async (reactionType, userName = null) => {
    try {
      const response = await fetch(API_BASE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'reaction',
          data: { type: reactionType, userId, userName }
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        // Adicionar reação local imediatamente para feedback visual
        const newReaction = {
          reaction: result.reaction,
          userName: result.userName,
          count: result.count,
          id: Date.now(),
          timestamp: Date.now()
        };
        
        setRecentReactions(prev => {
          const updated = [...prev, newReaction];
          return updated.slice(-5);
        });
        
        setTimeout(() => {
          setRecentReactions(prev => prev.slice(1));
        }, 4000);
      }
      return result;
    } catch (error) {
      console.error('Erro ao reagir:', error);
      return { success: false, error: error.message };
    }
  }, [userId]);

  const createPoll = useCallback(async (question, options) => {
    try {
      const response = await fetch(API_BASE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'create-poll',
          data: { question, options }
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setCurrentPoll(result.poll);
      }
      return result;
    } catch (error) {
      console.error('Erro ao criar enquete:', error);
      return { success: false, error: error.message };
    }
  }, []);

  const endPoll = useCallback(async (pollId) => {
    try {
      const response = await fetch(API_BASE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'end-poll',
          data: { pollId }
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setCurrentPoll(null);
      }
      return result;
    } catch (error) {
      console.error('Erro ao finalizar enquete:', error);
      return { success: false, error: error.message };
    }
  }, []);

  return {
    connected,
    attendance,
    currentPoll,
    stats,
    userId,
    recentReactions,
    join,
    vote,
    react,
    createPoll,
    endPoll
  };
} 