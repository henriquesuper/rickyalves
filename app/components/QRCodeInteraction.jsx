'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQrcode, FaUsers, FaVoteYea, FaHandsHelping, FaMobileAlt, FaStar, FaWifi, FaArrowRight } from 'react-icons/fa';
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

  // Enquetes predefinidas para a lição dos Salmos - VERSÃO AVANÇADA PARA VETERANOS
  const predefinedPolls = [
    {
      question: "Por que Deus revelou primeiro o santuário terrestre, depois o celestial?",
      options: ["Pedagogia divina (do conhecido ao desconhecido)", "Limitação humana para compreender o celestial", "Progressão histórica da revelação", "Todas refletem aspectos da verdade"],
      timing: "SLIDE 2-3: O Santuário como Chave Hermenêutica"
    },
    {
      question: "Qual a diferença essencial entre Salmo 15 ('quem habitará') e Apocalipse 14 ('os que têm o nome')?",
      options: ["Requisitos vs. Graça já recebida", "AT vs. NT", "Individual vs. Corporativo", "Lei vs. Evangelho"],
      timing: "SLIDE 4-5: Monte Sião - Geografia Teológica"
    },
    {
      question: "Como conciliar 'irrepreensíveis' (Ap 14:5) com 'todos pecaram' (Rm 3:23)?",
      options: ["Perfeição através da união com Cristo", "Justificação cobrindo imperfeições", "Santificação progressiva completa", "Perspectiva celestial vs. terrestre"],
      timing: "SLIDE 6: O Cordeiro - Elemento Ausente/Presente"
    },
    {
      question: "O 'nome na testa' dos 144 mil representa principalmente:",
      options: ["Caráter transformado", "Lealdade ao sábado", "Conhecimento doutrinal", "Experiência de adoração"],
      timing: "SLIDE 7: O Nome na Testa - Teologia do Caráter"
    },
    {
      question: "Por que 'verdade na boca' aparece em Salmo 5 E Apocalipse 14:5?",
      options: ["Integridade valida proclamação", "Condição para estar na presença divina", "Contraste com mentiras de Babilônia", "Evidência de transformação interior"],
      timing: "SLIDE 8: Salmo 5 - Contrastes Proféticos"
    },
    {
      question: "A conexão Salmo 51:13 com as 3 mensagens angélicas sugere que:",
      options: ["Experiência pessoal valida missão", "Perdoados ensinam transgressores", "Transformação precede proclamação", "Todas as anteriores"],
      timing: "SLIDE 9: Ensinar aos Transgressores"
    },
    {
      question: "Qual Salmo melhor prepara o remanescente para o tempo de angústia?",
      options: ["Salmo 91 (proteção divina)", "Salmo 46 (Deus é refúgio)", "Salmo 27 (uma coisa pedi)", "Salmo 23 (o Senhor é Pastor)"],
      timing: "DISCUSSÃO FINAL: Aplicação Prática"
    },
    {
      question: "Nossa maior falha ao ensinar sobre o santuário tem sido:",
      options: ["Excesso de doutrina, pouca experiência", "Foco no terrestre, não celestial", "Conhecimento sem transformação", "Todas são preocupações válidas"],
      timing: "REFLEXÃO MINISTERIAL: Para Veteranos"
    }
  ];

  if (!isPresenterMode) {
    // Versão ESPETACULAR para exibir na apresentação
    return (
      <div className="fixed bottom-8 right-8 z-50">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowQR(!showQR)}
          className="relative group"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:via-indigo-500 hover:to-cyan-500 p-5 rounded-3xl shadow-2xl backdrop-blur-md border border-white/30 transition-all duration-300">
            <FaQrcode className="text-white text-3xl drop-shadow-lg" />
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
              <FaWifi className="text-white text-xs" />
            </div>
          </div>
        </motion.button>

        <AnimatePresence>
          {showQR && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 50, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 50, rotateY: 90 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 20,
                duration: 0.6 
              }}
              className="absolute bottom-20 right-0 w-[90vw] sm:w-[380px] max-w-[380px] max-h-[80vh] overflow-y-auto transform sm:transform-none -translate-x-1/2 sm:translate-x-0"
            >
              {/* Background with enhanced effects */}
              <div className="relative bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-indigo-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
                  </div>
                </div>

                <div className="relative p-4 sm:p-6 lg:p-8">
                  {/* Header */}
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-6"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-50"></div>
                        <div className="relative bg-gradient-to-br from-purple-600 to-cyan-600 p-4 rounded-2xl">
                          <FaMobileAlt className="text-white text-2xl" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-cyan-200 to-indigo-200 mb-2">
                      Participe da Escola Sabatina
                    </h3>
                    <p className="text-white/70 font-medium">
                      Conecte-se e interaja em tempo real
                    </p>
                  </motion.div>
                  
                  {/* QR Code Container */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="relative mb-6"
                  >
                    {/* QR Code with enhanced styling */}
                    <div className="relative mx-auto w-fit">
                      {/* Glow effect behind QR */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-indigo-500 rounded-3xl blur-xl opacity-30"></div>
                      
                      {/* QR Code container */}
                      <div className="relative bg-white p-6 rounded-3xl shadow-2xl border-4 border-gradient-to-r from-purple-400 via-cyan-400 to-indigo-400">
                        {/* Corner decorations */}
                        <div className="absolute top-2 left-2 w-4 h-4 border-l-3 border-t-3 border-purple-500 rounded-tl-lg"></div>
                        <div className="absolute top-2 right-2 w-4 h-4 border-r-3 border-t-3 border-cyan-500 rounded-tr-lg"></div>
                        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-3 border-b-3 border-indigo-500 rounded-bl-lg"></div>
                        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-3 border-b-3 border-purple-500 rounded-br-lg"></div>
                        
                        <div className="w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] mx-auto">
                          <QRCodeSVG 
                            value={mobileUrl}
                            size={220}
                            className="w-full h-full max-w-[220px] max-h-[220px]"
                          bgColor="#ffffff"
                          fgColor="#1a1a2e"
                          level="H"
                          includeMargin={false}
                          imageSettings={{
                            src: "data:image/svg+xml;base64," + btoa(`
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="url(#grad)" stroke="#fff" stroke-width="4"/>
                                <defs>
                                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#8B5CF6"/>
                                    <stop offset="100%" style="stop-color:#06B6D4"/>
                                  </linearGradient>
                                </defs>
                                <rect x="35" y="40" width="30" height="20" fill="white" rx="3"/>
                                <rect x="40" y="45" width="20" height="10" fill="url(#grad)" rx="2"/>
                                <circle cx="45" cy="35" r="2" fill="white"/>
                                <circle cx="55" cy="35" r="2" fill="white"/>
                              </svg>
                            `),
                            height: 44,
                            width: 44,
                            excavate: true,
                          }}
                        />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Instructions */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center mb-6"
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                      <p className="text-white/90 font-medium mb-3 flex items-center justify-center">
                        <FaArrowRight className="mr-2 text-cyan-300" />
                        Escaneie com seu celular ou acesse:
                      </p>
                      <div className="bg-black/20 rounded-xl p-3 border border-white/10">
                        <p className="text-cyan-300 font-mono text-sm font-bold break-all">
                          {mobileUrl}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Stats */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center justify-center space-x-6 pt-4 border-t border-white/10"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-sm opacity-50"></div>
                        <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2">
                          <FaUsers className="text-white text-sm" />
                        </div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                          {attendance}
                        </div>
                        <div className="text-xs text-white/60 font-medium">participantes</div>
                      </div>
                    </div>
                    
                    <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full blur-sm opacity-50"></div>
                        <div className="relative bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full p-2">
                          <FaStar className="text-white text-sm animate-pulse" />
                        </div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-300">
                          {stats.totalVotes}
                        </div>
                        <div className="text-xs text-white/60 font-medium">interações</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reações flutuantes aprimoradas */}
        <div className="fixed top-1/3 right-8 space-y-3 z-40">
          <AnimatePresence>
            {recentReactions.map((reaction) => (
              <motion.div
                key={reaction.id}
                initial={{ opacity: 0, scale: 0, x: 50, rotateZ: -20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: 0, 
                  rotateZ: 0,
                  y: [0, -5, 0]
                }}
                exit={{ opacity: 0, scale: 0, x: 50, rotateZ: 20 }}
                transition={{ 
                  duration: 0.6,
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative group"
              >
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                
                <div className="relative bg-gradient-to-br from-black/80 to-purple-900/80 backdrop-blur-xl rounded-2xl px-6 py-4 flex items-center space-x-3 text-white shadow-2xl border border-white/20 min-w-[220px]">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-sm opacity-50"></div>
                    <span className="relative text-3xl drop-shadow-lg">
                      {reaction.reaction === 'amen' && '🙏'}
                      {reaction.reaction === 'praise' && '👏'}
                      {reaction.reaction === 'love' && '❤️'}
                      {reaction.reaction === 'blessing' && '⭐'}
                      {reaction.reaction === 'understanding' && '💡'}
                      {reaction.reaction === 'peace' && '🕊️'}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="text-sm font-semibold text-purple-200">
                      {reaction.userName || 'Anônimo'}
                    </span>
                    <span className="text-xs text-white/70">
                      {reaction.reaction === 'amen' && 'Amém'}
                      {reaction.reaction === 'praise' && 'Aleluia'}
                      {reaction.reaction === 'love' && 'Gratidão'}
                      {reaction.reaction === 'blessing' && 'Bênção'}
                      {reaction.reaction === 'understanding' && 'Compreendo'}
                      {reaction.reaction === 'peace' && 'Paz'}
                    </span>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg blur-sm opacity-50"></div>
                    <span className="relative font-bold text-lg text-cyan-300 bg-black/20 px-3 py-1 rounded-lg">
                      +{reaction.count}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // Painel ESPETACULAR do apresentador
  return (
    <div className="fixed top-4 left-4 z-50 max-w-sm max-h-[90vh]">
      <motion.div
        initial={{ opacity: 0, x: -50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative overflow-hidden max-h-[90vh]"
      >
        {/* Enhanced background with effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-indigo-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-indigo-500/10 rounded-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 right-4 w-16 h-16 bg-purple-500/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-cyan-500/5 rounded-full blur-lg animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative p-6 text-white border border-white/20 rounded-3xl overflow-y-auto max-h-[90vh] custom-scrollbar">
        
        {/* Custom CSS for scrollbar in presenter panel */}
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(139, 92, 246, 0.6);
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(139, 92, 246, 0.8);
          }
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: rgba(139, 92, 246, 0.6) transparent;
          }
        `}</style>
        
        {/* Cabeçalho aprimorado */}
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
        </div>
      </motion.div>
    </div>
  );
}