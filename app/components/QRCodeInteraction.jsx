'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQrcode, FaUsers, FaVoteYea, FaHandsHelping, FaMobileAlt } from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';
import { useInteraction } from '../hooks/useInteraction';

export default function QRCodeInteraction({ isPresenterMode = false }) {
  const [showQR, setShowQR] = useState(false);
  const [mobileUrl, setMobileUrl] = useState('');

  // Usar o hook de interação que funciona tanto local quanto no Vercel
  const {
    attendance,
    currentPoll,
    stats,
    recentReactions,
    createPoll: createPollHook,
    endPoll
  } = useInteraction();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMobileUrl(`${window.location.origin}/mobile-interface`);
    }
  }, []);

  const createPoll = (question, options) => {
    createPollHook(question, options);
  };

  const endCurrentPoll = () => {
    if (currentPoll) {
      endPoll(currentPoll.id);
    }
  };

  // Enquetes predefinidas para a lição dos Salmos
  const predefinedPolls = [
    {
      question: "Qual aspecto dos Salmos mais toca seu coração?",
      options: ["Adoração e louvor", "Lamentos e súplicas", "Promessas de salvação", "Profecia messiânica"]
    },
    {
      question: "Como você se conecta pessoalmente com o Santuário?",
      options: ["Através da oração", "Estudando as Escrituras", "Na comunhão fraternal", "No serviço missionário"]
    },
    {
      question: "O que significa ter o 'nome de Deus' escrito na testa?",
      options: ["Refletir Seu caráter", "Guardar Seus mandamentos", "Amar como Ele ama", "Todas as alternativas"]
    }
  ];

  if (!isPresenterMode) {
    // Versão compacta para exibir na apresentação
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowQR(!showQR)}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 p-4 rounded-2xl shadow-2xl shadow-purple-500/25 backdrop-blur-md border border-white/20"
        >
          <FaQrcode className="text-white text-2xl" />
        </motion.button>

        <AnimatePresence>
          {showQR && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="absolute bottom-16 right-0 bg-white p-6 rounded-2xl shadow-2xl border border-gray-200 w-80"
            >
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Participe da Escola Sabatina
                </h3>
                
                <div className="bg-white p-3 rounded-xl border">
                  <QRCodeSVG 
                    value={mobileUrl}
                    size={200}
                    bgColor="#ffffff"
                    fgColor="#000000"
                    level="M"
                    includeMargin={true}
                  />
                </div>
                
                <p className="text-sm text-gray-600 mt-4 mb-2">
                  Escaneie com seu celular ou acesse:
                </p>
                <p className="text-xs text-blue-600 font-mono break-all">
                  {mobileUrl}
                </p>
                
                <div className="flex items-center justify-center mt-4 pt-4 border-t border-gray-200">
                  <FaUsers className="text-purple-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">
                    {attendance} participantes conectados
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reações flutuantes */}
        <div className="fixed top-1/2 right-4 space-y-2">
          <AnimatePresence>
            {recentReactions.map((reaction) => (
              <motion.div
                key={reaction.id}
                initial={{ opacity: 0, scale: 0, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0, x: 50 }}
                className="bg-black/60 backdrop-blur-md rounded-full px-4 py-2 flex items-center space-x-2 text-white"
              >
                <span className="text-2xl">
                  {reaction.reaction === 'amen' && '🙏'}
                  {reaction.reaction === 'praise' && '👏'}
                  {reaction.reaction === 'love' && '❤️'}
                  {reaction.reaction === 'fire' && '🔥'}
                  {reaction.reaction === 'light' && '💡'}
                  {reaction.reaction === 'crown' && '👑'}
                </span>
                <span className="font-bold">+{reaction.count}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // Painel completo do apresentador
  return (
    <div className="fixed top-4 left-4 z-50 max-w-sm">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-black/80 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl text-white"
      >
        {/* Cabeçalho */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
            <FaMobileAlt className="text-white text-xl" />
          </div>
          <div>
            <h2 className="text-lg font-bold">Painel do Apresentador</h2>
            <p className="text-sm text-white/70">Interação em tempo real</p>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-purple-500/20 rounded-xl p-3 text-center">
            <FaUsers className="text-purple-300 mx-auto mb-1" />
            <div className="text-xl font-bold">{attendance}</div>
            <div className="text-xs text-white/70">Presentes</div>
          </div>
          <div className="bg-indigo-500/20 rounded-xl p-3 text-center">
            <FaVoteYea className="text-indigo-300 mx-auto mb-1" />
            <div className="text-xl font-bold">{stats.totalVotes}</div>
            <div className="text-xs text-white/70">Votos</div>
          </div>
        </div>

        {/* QR Code compacto */}
        <div className="mb-6">
          <button
            onClick={() => setShowQR(!showQR)}
            className="w-full bg-white/10 hover:bg-white/20 rounded-xl p-3 transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <FaQrcode className="text-white" />
            <span className="text-sm">
              {showQR ? 'Ocultar QR Code' : 'Mostrar QR Code'}
            </span>
          </button>
          
          <AnimatePresence>
            {showQR && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4"
              >
                <div className="bg-white p-3 rounded-xl">
                  <QRCodeSVG 
                    value={mobileUrl}
                    size={150}
                    bgColor="#ffffff"
                    fgColor="#000000"
                    level="M"
                    includeMargin={true}
                  />
                </div>
                <p className="text-xs text-white/70 mt-2 text-center">
                  Acesse pelo celular
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Controles de Enquete */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-white/80">Enquetes Rápidas:</h3>
          
          {predefinedPolls.map((poll, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => createPoll(poll.question, poll.options)}
              disabled={currentPoll !== null}
              className="w-full text-left bg-gradient-to-r from-purple-600/30 to-indigo-600/30 hover:from-purple-600/50 hover:to-indigo-600/50 disabled:opacity-50 disabled:cursor-not-allowed p-3 rounded-xl border border-white/10 transition-all duration-300"
            >
              <div className="text-sm font-medium line-clamp-2">
                {poll.question}
              </div>
            </motion.button>
          ))}

          {currentPoll && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-500/20 border border-green-500/30 rounded-xl p-3"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-green-300">
                  Enquete Ativa
                </span>
                <button
                  onClick={endCurrentPoll}
                  className="text-xs bg-red-500/20 hover:bg-red-500/30 text-red-300 px-2 py-1 rounded transition-colors"
                >
                  Finalizar
                </button>
              </div>
              <div className="text-xs text-white/70 line-clamp-2">
                {currentPoll.question}
              </div>
              {currentPoll.options && (
                <div className="mt-2 space-y-1">
                  {currentPoll.options.map((option, idx) => (
                    <div key={idx} className="flex justify-between text-xs">
                      <span className="text-white/60 truncate">{option.text}</span>
                      <span className="text-green-300 font-medium">{option.votes}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
} 