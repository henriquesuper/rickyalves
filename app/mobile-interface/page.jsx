'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHeart, FaPray, FaThumbsUp, FaFire, 
  FaCross, FaVoteYea, FaUsers, FaChurch, FaBookOpen, 
  FaStar, FaGift, FaCrown, FaLightbulb, FaHandsHelping 
} from 'react-icons/fa';
import { GiAngelWings, GiHolyGrail, GiCandleFlame } from 'react-icons/gi';
import { BiInfinite } from 'react-icons/bi';
import { useInteraction } from '../hooks/useInteraction';

export default function MobileInterface() {
  const [hasVoted, setHasVoted] = useState(false);
  const [userName, setUserName] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  // Usar o hook de interação
  const {
    connected,
    attendance,
    currentPoll,
    recentReactions,
    join,
    vote,
    react
  } = useInteraction();

  // Verificar se há sessão ativa ao carregar
  useEffect(() => {
    const checkExistingSession = () => {
      if (typeof window !== 'undefined') {
        try {
          const savedSession = localStorage.getItem('escola_sabatina_session');
          if (savedSession) {
            const session = JSON.parse(savedSession);
            // Se a sessão é recente (menos de 1 hora)
            if ((Date.now() - session.timestamp) < 3600000) {
              console.log('📱 [MOBILE] Sessão ativa encontrada:', session.userName);
              setUserName(session.userName);
              setIsRegistered(true);
              // Tentar restaurar a sessão
              join(session.userName).then(result => {
                if (result.success) {
                  console.log('📱 [MOBILE] Sessão restaurada automaticamente!');
                }
              });
            } else {
              // Sessão expirada
              localStorage.removeItem('escola_sabatina_session');
              console.log('📱 [MOBILE] Sessão expirada removida');
            }
          }
        } catch (e) {
          console.log('📱 [MOBILE] Erro ao verificar sessão:', e);
          localStorage.removeItem('escola_sabatina_session');
        }
      }
      setCheckingSession(false);
    };

    checkExistingSession();
  }, [join]);

  // Resetar voto quando uma nova enquete chegar
  useEffect(() => {
    if (currentPoll) {
      setHasVoted(false);
    }
  }, [currentPoll?.id]);

  const handleRegister = async () => {
    if (userName.trim()) {
      const result = await join(userName.trim());
      if (result.success) {
        setIsRegistered(true);
      }
    }
  };

  const handleVote = async (optionIndex) => {
    if (currentPoll && !hasVoted) {
      const result = await vote(currentPoll.id, optionIndex);
      if (result.success) {
        setHasVoted(true);
      }
    }
  };

  const handleReaction = async (reactionType) => {
    console.log('📱 [MOBILE DEBUG] Botão de reação clicado:', reactionType, 'usuário:', userName);
    
    // Usar o hook unificado que funciona tanto em desenvolvimento quanto produção
    console.log('📱 [MOBILE DEBUG] Chamando hook react...');
    const result = await react(reactionType, userName);
    console.log('📱 [MOBILE DEBUG] Resultado do hook react:', result);
  };

  const reactions = [
    { type: 'amen', icon: FaPray, label: 'Amém', color: 'from-yellow-400 to-amber-500' },
    { type: 'praise', icon: FaHandsHelping, label: 'Aleluia', color: 'from-purple-400 to-pink-500' },
    { type: 'love', icon: FaHeart, label: 'Gratidão', color: 'from-red-400 to-rose-500' },
    { type: 'blessing', icon: FaStar, label: 'Bênção', color: 'from-blue-400 to-cyan-500' },
    { type: 'understanding', icon: FaLightbulb, label: 'Compreendo', color: 'from-green-400 to-emerald-500' },
    { type: 'peace', icon: FaBookOpen, label: 'Paz', color: 'from-indigo-400 to-purple-500' }
  ];

  // Mostrar loading enquanto verifica sessão
  if (checkingSession) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <FaChurch className="text-white text-2xl" />
          </div>
          <p className="text-white/80">Verificando sessão...</p>
        </motion.div>
      </div>
    );
  }

  if (!isRegistered) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-purple-900/40 backdrop-blur-xl p-8 rounded-3xl border border-purple-400/30 shadow-2xl">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <FaChurch className="text-white text-3xl" />
              </motion.div>
              <h1 className="text-2xl font-bold text-white mb-2">Escola Sabatina</h1>
              <p className="text-purple-200">Nos Salmos - Parte 1</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Seu nome:
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                  placeholder="Digite seu nome"
                  onKeyPress={(e) => e.key === 'Enter' && handleRegister()}
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleRegister}
                disabled={!userName.trim()}
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Participar da Escola Sabatina
              </motion.button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-white/60 text-sm flex items-center justify-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                {connected ? 'Conectado' : 'Conectando...'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
              <FaChurch className="text-white text-lg" />
            </div>
            <div>
              <h1 className="font-semibold">Escola Sabatina</h1>
              <p className="text-xs text-white/60">Olá, {userName}!</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <FaUsers className="text-purple-300" />
            <span>{attendance} pessoas</span>
          </div>
        </div>
      </div>

      {/* Status de Conexão */}
      <AnimatePresence>
        {!connected && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-red-500/20 border border-red-500/30 p-3 m-4 rounded-xl"
          >
            <p className="text-center text-red-200">Reconectando...</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reações Flutuantes */}
      <div className="fixed top-20 right-4 z-50 space-y-2">
        <AnimatePresence>
          {recentReactions.map((reaction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0, x: 50 }}
              className="bg-black/40 backdrop-blur-md rounded-full px-3 py-1 flex items-center space-x-2"
            >
              <span className="text-lg">
                {reaction.reaction === 'amen' && '🙏'}
                {reaction.reaction === 'praise' && '👏'}
                {reaction.reaction === 'love' && '❤️'}
                {reaction.reaction === 'blessing' && '⭐'}
                {reaction.reaction === 'understanding' && '💡'}
                {reaction.reaction === 'peace' && '🕊️'}
              </span>
              <span className="text-sm font-medium">+{reaction.count}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="p-4 space-y-6">
        {/* Enquete Ativa */}
        <AnimatePresence>
          {currentPoll && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-purple-900/40 backdrop-blur-xl p-6 rounded-3xl border border-purple-400/30 shadow-2xl"
            >
              <div className="flex items-center space-x-3 mb-4">
                <FaVoteYea className="text-2xl text-purple-300" />
                <h2 className="text-xl font-semibold">Votação em Andamento</h2>
              </div>
              
              <p className="text-lg mb-6 text-white/90">{currentPoll.question}</p>
              
              <div className="space-y-3">
                {currentPoll.options.map((option, index) => {
                  const totalVotes = currentPoll.options.reduce((sum, opt) => sum + opt.votes, 0);
                  const percentage = totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;
                  
                  return (
                    <motion.button
                      key={index}
                      whileHover={{ scale: hasVoted ? 1 : 1.02 }}
                      whileTap={{ scale: hasVoted ? 1 : 0.98 }}
                      onClick={() => handleVote(index)}
                      disabled={hasVoted}
                      className={`w-full p-4 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                        hasVoted
                          ? 'border-white/20 cursor-default'
                          : 'border-purple-400/50 hover:border-purple-400 hover:bg-purple-500/10'
                      }`}
                    >
                      {hasVoted && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500/30 to-indigo-500/30"
                        />
                      )}
                      <div className="relative flex items-center justify-between">
                        <span className="font-medium">{option.text}</span>
                        {hasVoted && (
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-purple-300">{option.votes} votos</span>
                            <span className="text-sm text-white/60">({percentage.toFixed(1)}%)</span>
                          </div>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
              
              {hasVoted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-green-300 mt-4 font-medium"
                >
                  ✅ Seu voto foi registrado!
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Painel de Reações */}
        <div className="bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-indigo-900/40 backdrop-blur-xl p-6 rounded-3xl border border-indigo-400/30 shadow-2xl">
          <div className="flex items-center space-x-3 mb-4">
            <FaHandsHelping className="text-2xl text-indigo-300" />
            <h2 className="text-xl font-semibold">Reações</h2>
          </div>
          
          <p className="text-white/70 mb-4">Expresse seus sentimentos durante a apresentação:</p>
          
          <div className="grid grid-cols-2 gap-3">
            {reactions.map((reaction, index) => (
              <motion.button
                key={reaction.type}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleReaction(reaction.type)}
                className={`p-4 rounded-xl bg-gradient-to-r ${reaction.color} hover:shadow-lg transition-all duration-300 flex flex-col items-center space-y-2`}
              >
                <reaction.icon className="text-2xl text-white" />
                <span className="text-sm font-medium text-white">{reaction.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Informações da Lição */}
        <div className="bg-gradient-to-br from-slate-900/40 via-gray-900/40 to-slate-900/40 backdrop-blur-xl p-6 rounded-3xl border border-gray-400/30 shadow-2xl">
          <div className="flex items-center space-x-3 mb-4">
            <FaBookOpen className="text-2xl text-gray-300" />
            <h2 className="text-xl font-semibold">Lição de Hoje</h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <GiHolyGrail className="text-amber-400" />
              <span className="font-medium">Nos Salmos - Parte 1</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaStar className="text-cyan-400" />
              <span className="text-sm text-white/80">Apocalipse 14:1 - O Cordeiro no Monte Sião</span>
            </div>
            <div className="flex items-center space-x-2">
              <GiCandleFlame className="text-orange-400" />
              <span className="text-sm text-white/80">25 de maio de 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 