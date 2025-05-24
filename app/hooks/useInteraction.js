import { useState, useEffect, useCallback } from 'react';

// Detecta se estamos em desenvolvimento ou produção
const isDevelopment = process.env.NODE_ENV === 'development';
const API_BASE = '/api/socket'; // Sempre usar API routes para fetch

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
      
      // Atualizar reações vindas do servidor
      if (data.recentReactions) {
        console.log('📺 [VERCEL DEBUG] Reações recebidas da API:', data.recentReactions);
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
            console.log('🔥 [TV DEBUG] Reação recebida via Socket.io:', reactionData);
            setRecentReactions(prev => {
              const updated = [...prev, { ...reactionData, id: Date.now() }];
              console.log('🔥 [TV DEBUG] Estado das reações atualizado:', updated);
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
      const interval = setInterval(fetchStatus, 1000); // Poll a cada 1 segundo para reações mais responsivas
      
      return () => clearInterval(interval);
    }
  }, [fetchStatus]);

  const join = useCallback(async (userName) => {
    if (isDevelopment) {
      // Em desenvolvimento, usar Socket.io direto
      const userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      setUserId(userId);
      
      // Salvar no localStorage
      localStorage.setItem('escola_sabatina_session', JSON.stringify({
        userId,
        userName,
        timestamp: Date.now()
      }));
      
      return { success: true, userId };
    } else {
      // Em produção, usar API routes
      try {
        // Verificar se já tem sessão salva
        const savedSession = localStorage.getItem('escola_sabatina_session');
        let existingUserId = null;
        
        if (savedSession) {
          try {
            const session = JSON.parse(savedSession);
            // Se a sessão é recente (menos de 1 hora) e o nome é o mesmo
            if (session.userName === userName && (Date.now() - session.timestamp) < 3600000) {
              existingUserId = session.userId;
              console.log('📱 [SESSION] Tentando restaurar sessão:', existingUserId, userName);
            }
          } catch (e) {
            console.log('📱 [SESSION] Sessão salva inválida, criando nova');
          }
        }
        
        const response = await fetch(API_BASE, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'join',
            data: { userName, userId: existingUserId }
          }),
        });
        
        const result = await response.json();
        if (result.success) {
          setUserId(result.userId);
          setAttendance(result.attendance);
          
          // Salvar/atualizar sessão no localStorage
          localStorage.setItem('escola_sabatina_session', JSON.stringify({
            userId: result.userId,
            userName: result.userName,
            timestamp: Date.now()
          }));
          
          if (result.sessionRestored) {
            console.log('✅ [SESSION] Sessão restaurada com sucesso!');
          } else {
            console.log('✅ [SESSION] Nova sessão criada!');
          }
        }
        return result;
      } catch (error) {
        console.error('Erro ao entrar:', error);
        return { success: false, error: error.message };
      }
    }
  }, []);

  const vote = useCallback(async (pollId, optionIndex) => {
    if (isDevelopment) {
      // Em desenvolvimento, usar Socket.io (será implementado quando necessário)
      return { success: true };
    } else {
      // Em produção, usar API routes
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
    }
  }, [userId]);

  const react = useCallback(async (reactionType, userName = null) => {
    if (isDevelopment) {
      // Em desenvolvimento, emitir via Socket.io
      try {
        const { default: io } = await import('socket.io-client');
        const socket = io('http://localhost:3001');
        
        return new Promise((resolve) => {
          socket.on('connect', () => {
            console.log('🔥 [HOOK DEBUG] Conectado ao Socket.io, emitindo reação:', reactionType, userName);
            socket.emit('reaction', { type: reactionType, userName });
            setTimeout(() => {
              socket.disconnect();
              resolve({ success: true, reaction: reactionType, userName });
            }, 500);
          });
        });
      } catch (error) {
        console.error('Erro ao emitir reação via Socket.io no hook:', error);
        return { success: false, error: error.message };
      }
    } else {
      // Em produção, usar API routes
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
        console.log('📱 [MOBILE DEBUG] Reação enviada:', result);
        // As reações agora são gerenciadas pelo polling do servidor
        // não precisamos adicionar localmente pois virão via fetchStatus()
        return result;
      } catch (error) {
        console.error('Erro ao reagir:', error);
        return { success: false, error: error.message };
      }
    }
  }, [userId]);

  const createPoll = useCallback(async (question, options) => {
    if (isDevelopment) {
      // Em desenvolvimento, usar Socket.io (será implementado quando necessário)
      return { success: true };
    } else {
      // Em produção, usar API routes
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
    }
  }, []);

  const endPoll = useCallback(async (pollId) => {
    if (isDevelopment) {
      // Em desenvolvimento, usar Socket.io (será implementado quando necessário)
      return { success: true };
    } else {
      // Em produção, usar API routes
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