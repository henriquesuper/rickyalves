'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaExpand, FaCompress, FaStar, FaCrown, FaHeart, FaBookOpen, FaPray, FaChurch, FaUsers, FaVoteYea } from 'react-icons/fa';
import { BiInfinite } from 'react-icons/bi';
import { GiCrossedSwords, GiHolyGrail, GiAngelWings, GiCandleFlame } from 'react-icons/gi';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import CloudBackground from '../components/CloudBackground';
import QRCodeInteraction from '../components/QRCodeInteraction';
import io from 'socket.io-client';

// Dynamically import the 3D component to avoid SSR issues
const Sanctuary3D = dynamic(() => import('../components/Sanctuary3D'), { 
  ssr: false,
  loading: () => <div className="w-full h-[400px] flex items-center justify-center bg-slate-900/30 rounded-lg">
    <div className="animate-pulse text-white">Carregando Santuário 3D...</div>
  </div>
});

export default function SalmosPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [socket, setSocket] = useState(null);
  const [attendance, setAttendance] = useState(0);
  const [currentPoll, setCurrentPoll] = useState(null);
  const [recentReactions, setRecentReactions] = useState([]);
  const [isPresenterMode, setIsPresenterMode] = useState(false);
  const totalSlides = slides.length;

  // Socket connection for real-time interactions
  useEffect(() => {
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);

    newSocket.on('attendance-update', (data) => {
      setAttendance(data.count);
    });

    newSocket.on('new-poll', (poll) => {
      setCurrentPoll(poll);
    });

    newSocket.on('poll-update', (poll) => {
      setCurrentPoll(poll);
    });

    newSocket.on('poll-ended', () => {
      setCurrentPoll(null);
    });

    newSocket.on('live-reaction', (reactionData) => {
      setRecentReactions(prev => {
        const updated = [...prev, { ...reactionData, id: Date.now() }];
        return updated.slice(-5);
      });
      
      setTimeout(() => {
        setRecentReactions(prev => prev.slice(1));
      }, 4000);
    });

    return () => newSocket.close();
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'f') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    const newSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
    socket?.emit('slide-change', newSlide);
  };

  const prevSlide = () => {
    const newSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
    socket?.emit('slide-change', newSlide);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(e => {
        console.error(`Error attempting to enable fullscreen: ${e.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white relative">
      {/* Add Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      {/* Enhanced Cloud Background */}
      <CloudBackground color={0x0f0828} />
      
      {/* Ambient Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Enhanced Progress Bar with Attendance */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-black/30 backdrop-blur-sm z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 shadow-lg shadow-cyan-500/50"
          initial={{ width: `${(currentSlide / totalSlides) * 100}%` }}
          animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </div>

      {/* Live Stats */}
      <div className="absolute top-4 right-4 z-50 flex items-center space-x-4">
        {attendance > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 flex items-center space-x-2"
          >
            <FaUsers className="text-cyan-300" />
            <span className="text-white font-medium">{attendance}</span>
            <span className="text-white/70 text-sm">presentes</span>
          </motion.div>
        )}
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsPresenterMode(!isPresenterMode)}
          className={`p-3 rounded-2xl backdrop-blur-md border border-white/20 transition-all duration-300 ${
            isPresenterMode 
              ? 'bg-purple-600/80 shadow-lg shadow-purple-500/25' 
              : 'bg-black/60 hover:bg-purple-600/40'
          }`}
        >
          <FaVoteYea className="text-white" />
        </motion.button>
      </div>

      {/* Main Content */}
      <div className="w-full h-full flex items-start justify-center z-10 relative px-8 pt-8 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-6xl mx-auto overflow-y-auto max-h-full"
            style={{ 
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(139, 92, 246, 0.5) transparent'
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                width: 8px;
              }
              div::-webkit-scrollbar-track {
                background: rgba(0, 0, 0, 0.1);
                border-radius: 4px;
              }
              div::-webkit-scrollbar-thumb {
                background: rgba(139, 92, 246, 0.5);
                border-radius: 4px;
              }
              div::-webkit-scrollbar-thumb:hover {
                background: rgba(139, 92, 246, 0.7);
              }
            `}</style>
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-12 z-20">
        <motion.button
          whileHover={{ scale: 1.15, boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="group relative bg-gradient-to-r from-indigo-600/80 to-purple-600/80 hover:from-indigo-500/90 hover:to-purple-500/90 p-4 rounded-2xl backdrop-blur-md border border-white/20 shadow-xl shadow-indigo-500/25 transition-all duration-300"
        >
          <FaChevronLeft className="text-white text-2xl group-hover:text-cyan-300 transition-colors duration-300" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-8 py-3 bg-black/30 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl"
        >
          <div className="text-white/90 font-['Inter'] text-lg font-medium">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold text-2xl">{currentSlide + 1}</span>
            <span className="text-white/60 mx-2 text-xl">/</span>
            <span className="text-white/80 text-xl">{totalSlides}</span>
          </div>
        </motion.div>
        
        <motion.button
          whileHover={{ scale: 1.15, boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="group relative bg-gradient-to-r from-purple-600/80 to-indigo-600/80 hover:from-purple-500/90 hover:to-indigo-500/90 p-4 rounded-2xl backdrop-blur-md border border-white/20 shadow-xl shadow-purple-500/25 transition-all duration-300"
        >
          <FaChevronRight className="text-white text-2xl group-hover:text-cyan-300 transition-colors duration-300" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>
      </div>

      {/* Enhanced Fullscreen Button */}
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleFullscreen}
        className="absolute top-6 left-6 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 hover:from-indigo-500/90 hover:to-purple-500/90 p-3 rounded-2xl backdrop-blur-md border border-white/20 shadow-xl shadow-indigo-500/25 transition-all duration-300 z-20 group"
      >
        {isFullscreen ? 
          <FaCompress className="text-white group-hover:text-cyan-300 transition-colors duration-300" /> : 
          <FaExpand className="text-white group-hover:text-cyan-300 transition-colors duration-300" />
        }
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </motion.button>

      {/* Interactive Elements */}
      <QRCodeInteraction isPresenterMode={isPresenterMode} />

      {/* Live Poll Results */}
      <AnimatePresence>
        {currentPoll && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 left-8 right-8 bg-black/80 backdrop-blur-xl rounded-3xl border border-white/20 p-6 z-40"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white flex items-center">
                <FaVoteYea className="mr-3 text-purple-300" />
                Votação em Andamento
              </h3>
              <div className="text-sm text-white/70">
                {currentPoll.options?.reduce((sum, opt) => sum + opt.votes, 0) || 0} votos
              </div>
            </div>
            
            <p className="text-lg text-white/90 mb-4">{currentPoll.question}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {currentPoll.options?.map((option, index) => {
                const totalVotes = currentPoll.options.reduce((sum, opt) => sum + opt.votes, 0);
                const percentage = totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;
                
                return (
                  <div key={index} className="bg-white/10 rounded-xl p-4 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 1 }}
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500/40 to-indigo-500/40"
                    />
                    <div className="relative">
                      <div className="font-medium text-white mb-2">{option.text}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-purple-300">{option.votes}</span>
                        <span className="text-sm text-white/60">{percentage.toFixed(1)}%</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Reactions */}
      <div className="fixed top-1/3 right-8 space-y-2 z-40">
        <AnimatePresence>
          {recentReactions.map((reaction) => (
            <motion.div
              key={reaction.id}
              initial={{ opacity: 0, scale: 0, x: 50 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                x: 0,
                y: [0, -20, 0]
              }}
              exit={{ opacity: 0, scale: 0, x: 50 }}
              transition={{ 
                duration: 0.6,
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="bg-black/70 backdrop-blur-md rounded-2xl px-6 py-3 flex items-center space-x-3 text-white shadow-2xl border border-white/20"
            >
              <span className="text-3xl">
                {reaction.reaction === 'amen' && '🙏'}
                {reaction.reaction === 'praise' && '👏'}
                {reaction.reaction === 'love' && '❤️'}
                {reaction.reaction === 'fire' && '🔥'}
                {reaction.reaction === 'light' && '💡'}
                {reaction.reaction === 'crown' && '👑'}
              </span>
              <span className="font-bold text-xl">+{reaction.count}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Define your slides here
const slides = [
  // SLIDE 1 - Title (Completely Redesigned)
  <div className="slide-content" key="slide-1">
    <div className="relative min-h-screen flex items-center justify-center py-8">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 0.1, scale: 1, rotate: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-10 left-10 text-9xl text-purple-300"
        >
          <GiHolyGrail />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 0.1, scale: 1, rotate: 0 }}
          transition={{ duration: 2, delay: 0.7 }}
          className="absolute bottom-10 right-10 text-8xl text-indigo-300"
        >
          <GiAngelWings />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.05, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20rem] text-cyan-200"
        >
          <FaCrown />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center z-10 max-w-6xl mx-auto px-8"
      >
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <h1 className="font-['Playfair_Display'] text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-purple-300 to-indigo-200 mb-4 leading-tight drop-shadow-2xl">
            Nos Salmos
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 1.2 }}
            className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6"
          ></motion.div>
          <h2 className="font-['Cinzel'] text-4xl md:text-5xl font-semibold text-white/80 tracking-wide">
            Parte 1
          </h2>
        </motion.div>

        {/* Verse Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="relative bg-gradient-to-br from-black/40 via-purple-900/30 to-indigo-900/40 backdrop-blur-2xl p-8 rounded-3xl border border-white/20 shadow-2xl shadow-purple-500/20 mb-10 overflow-hidden"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-cyan-400/50 rounded-tl-3xl"></div>
          <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-cyan-400/50 rounded-tr-3xl"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-cyan-400/50 rounded-bl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-cyan-400/50 rounded-br-3xl"></div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center mb-4"
          >
            <GiCandleFlame className="text-3xl text-amber-300 mr-3" />
            <h3 className="font-['Cinzel'] text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
              Verso para Memorizar
            </h3>
            <GiCandleFlame className="text-3xl text-amber-300 ml-3" />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="font-['Inter'] text-xl md:text-2xl leading-relaxed text-white/95 mb-6 italic font-light"
          >
            "Olhei, e eis que o Cordeiro estava em pé sobre o monte Sião. Com Ele estavam cento e quarenta e quatro mil, que tinham escrito na testa o nome do Cordeiro e o nome de Seu Pai"
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="font-['Cinzel'] text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300"
          >
            Apocalipse 14:1
          </motion.p>
        </motion.div>

        {/* Date and Event */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="flex items-center justify-center gap-4"
        >
          <FaChurch className="text-2xl text-purple-300" />
          <p className="font-['Inter'] text-lg text-white/70 font-medium">
            Escola Sabatina • 25 de maio de 2025
          </p>
          <FaBookOpen className="text-2xl text-purple-300" />
        </motion.div>
      </motion.div>
    </div>
  </div>,

  // SLIDE 2 - Introduction (Completely Redesigned)
  <div className="slide-content" key="slide-2">
    <div className="relative min-h-screen flex items-center justify-center py-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-1/4 left-1/4 transform -rotate-12">
          <FaBookOpen className="text-8xl text-purple-300" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 transform rotate-12">
          <FaStar className="text-6xl text-cyan-300" />
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8 z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-cyan-300 to-indigo-200 mb-6">
            Introdução
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "300px" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-400 via-cyan-400 to-indigo-400 mx-auto"
          ></motion.div>
        </motion.div>
        
        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-purple-900/40 backdrop-blur-xl p-8 rounded-3xl border border-purple-400/30 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-500 hover:scale-105"
          >
            <div className="absolute top-4 left-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                {/* Custom Bible Study SVG Icon */}
                <svg viewBox="0 0 100 100" className="w-8 h-8 text-white drop-shadow-lg">
                  <defs>
                    <linearGradient id="bibleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F3F4F6" />
                      <stop offset="100%" stopColor="#D1D5DB" />
                    </linearGradient>
                    <linearGradient id="crossGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FEF3C7" />
                      <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>
                  </defs>
                  {/* Bible base */}
                  <rect x="20" y="30" width="60" height="50" fill="url(#bibleGrad)" rx="3" />
                  {/* Bible spine */}
                  <rect x="15" y="30" width="8" height="50" fill="url(#bibleGrad)" rx="2" />
                  {/* Bible pages */}
                  <rect x="22" y="32" width="56" height="46" fill="#F9FAFB" rx="2" />
                  {/* Cross on cover */}
                  <rect x="47" y="40" width="6" height="20" fill="url(#crossGrad)" rx="1" />
                  <rect x="40" y="47" width="20" height="6" fill="url(#crossGrad)" rx="1" />
                  {/* Bookmark */}
                  <rect x="70" y="25" width="4" height="25" fill="#EF4444" />
                  <path d="M70 50 L72 47 L74 50" fill="#EF4444" />
                  {/* Divine light */}
                  <circle cx="50" cy="20" r="8" fill="#FEF3C7" opacity="0.6" />
                  <circle cx="50" cy="20" r="4" fill="#F59E0B" opacity="0.8" />
                  {/* Light rays */}
                  <line x1="50" y1="10" x2="50" y2="15" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
                  <line x1="58" y1="12" x2="55" y2="17" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="42" y1="12" x2="45" y2="17" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="62" y1="20" x2="57" y2="20" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="38" y1="20" x2="43" y2="20" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div className="pt-12">
              <h3 className="font-['Cinzel'] text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 mb-4">
                Nossa Abordagem Adventista
              </h3>
              <p className="font-['Inter'] text-lg text-white/90 leading-relaxed">
                Como adventistas, buscamos os <span className="text-cyan-300 font-semibold">símbolos do Apocalipse</span> no Antigo Testamento para compreender as profecias divinas.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="group relative bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-indigo-900/40 backdrop-blur-xl p-8 rounded-3xl border border-indigo-400/30 shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-500 hover:scale-105"
          >
            <div className="absolute top-4 left-4">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                {/* Custom Psalms Scroll SVG Icon */}
                <svg viewBox="0 0 100 100" className="w-8 h-8 text-white drop-shadow-lg">
                  <defs>
                    <linearGradient id="scrollGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FEF3C7" />
                      <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>
                    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7C2D12" />
                      <stop offset="100%" stopColor="#451A03" />
                    </linearGradient>
                    <radialGradient id="glowGrad" cx="50%" cy="30%" r="40%">
                      <stop offset="0%" stopColor="#C7D2FE" opacity="0.8" />
                      <stop offset="100%" stopColor="#C7D2FE" opacity="0.1" />
                    </radialGradient>
                  </defs>
                  {/* Divine glow */}
                  <ellipse cx="50" cy="35" rx="25" ry="15" fill="url(#glowGrad)" />
                  {/* Scroll cylinder left */}
                  <rect x="10" y="25" width="8" height="50" fill="#8B4513" rx="4" />
                  <ellipse cx="14" cy="25" rx="4" ry="3" fill="#A0522D" />
                  <ellipse cx="14" cy="75" rx="4" ry="3" fill="#654321" />
                  {/* Scroll cylinder right */}
                  <rect x="82" y="25" width="8" height="50" fill="#8B4513" rx="4" />
                  <ellipse cx="86" cy="25" rx="4" ry="3" fill="#A0522D" />
                  <ellipse cx="86" cy="75" rx="4" ry="3" fill="#654321" />
                  {/* Main scroll */}
                  <rect x="18" y="30" width="64" height="40" fill="url(#scrollGrad)" rx="2" />
                  {/* Scroll text lines (Psalms) */}
                  <line x1="25" y1="40" x2="75" y2="40" stroke="url(#textGrad)" strokeWidth="1.5" />
                  <line x1="25" y1="45" x2="70" y2="45" stroke="url(#textGrad)" strokeWidth="1.5" />
                  <line x1="25" y1="50" x2="75" y2="50" stroke="url(#textGrad)" strokeWidth="1.5" />
                  <line x1="25" y1="55" x2="65" y2="55" stroke="url(#textGrad)" strokeWidth="1.5" />
                  <line x1="25" y1="60" x2="70" y2="60" stroke="url(#textGrad)" strokeWidth="1.5" />
                  {/* Musical notes (Psalms are songs) */}
                  <circle cx="30" cy="35" r="2" fill="#7C2D12" />
                  <rect x="32" y="27" width="1" height="8" fill="#7C2D12" />
                  <path d="M32 27 Q35 26 35 29" stroke="#7C2D12" strokeWidth="1" fill="none" />
                  <circle cx="45" cy="37" r="2" fill="#7C2D12" />
                  <rect x="47" y="29" width="1" height="8" fill="#7C2D12" />
                  <path d="M47 29 Q50 28 50 31" stroke="#7C2D12" strokeWidth="1" fill="none" />
                  {/* Crown (David the Psalmist) */}
                  <path d="M55 20 L58 15 L60 18 L62 15 L65 20 L62 23 L58 23 Z" fill="#F59E0B" />
                  <circle cx="58" cy="18" r="1" fill="#EF4444" />
                  <circle cx="62" cy="18" r="1" fill="#10B981" />
                </svg>
              </div>
            </div>
            <div className="pt-12">
              <h3 className="font-['Cinzel'] text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 mb-4">
                Fonte Especialmente Rica
              </h3>
              <p className="font-['Inter'] text-lg text-white/90 leading-relaxed">
                O <span className="text-indigo-300 font-semibold">Livro dos Salmos</span> oferece uma coleção única de experiências espirituais que iluminam o Apocalipse.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="group relative bg-gradient-to-br from-cyan-900/40 via-indigo-900/40 to-cyan-900/40 backdrop-blur-xl p-8 rounded-3xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-500 hover:scale-105"
          >
            <div className="absolute top-4 left-4">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                {/* Custom Spiritual Journey SVG Icon */}
                <svg viewBox="0 0 100 100" className="w-8 h-8 text-white drop-shadow-lg">
                  <defs>
                    <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FEF3C7" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#DC2626" />
                    </linearGradient>
                    <radialGradient id="lightGrad" cx="50%" cy="20%" r="30%">
                      <stop offset="0%" stopColor="#FEF3C7" opacity="1" />
                      <stop offset="100%" stopColor="#FEF3C7" opacity="0.1" />
                    </radialGradient>
                    <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06B6D4" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  {/* Divine light from above */}
                  <ellipse cx="50" cy="15" rx="15" ry="8" fill="url(#lightGrad)" />
                  {/* Central heart (spiritual connection) */}
                  <path d="M50 35 C45 25, 30 25, 30 40 C30 55, 50 70, 50 70 C50 70, 70 55, 70 40 C70 25, 55 25, 50 35 Z" fill="url(#heartGrad)" />
                  {/* Inner heart glow */}
                  <path d="M50 38 C47 32, 38 32, 38 42 C38 52, 50 62, 50 62 C50 62, 62 52, 62 42 C62 32, 53 32, 50 38 Z" fill="#FEF3C7" opacity="0.7" />
                  {/* Spiritual path/journey */}
                  <path d="M20 80 Q35 75, 40 65 Q45 55, 50 50 Q55 55, 60 65 Q65 75, 80 80" stroke="url(#pathGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  {/* Steps on the path */}
                  <circle cx="25" cy="78" r="2" fill="#06B6D4" />
                  <circle cx="35" cy="72" r="2" fill="#06B6D4" />
                  <circle cx="42" cy="63" r="2" fill="#06B6D4" />
                  <circle cx="58" cy="63" r="2" fill="#06B6D4" />
                  <circle cx="65" cy="72" r="2" fill="#06B6D4" />
                  <circle cx="75" cy="78" r="2" fill="#06B6D4" />
                  {/* Tears of sorrow */}
                  <ellipse cx="35" cy="45" rx="2" ry="4" fill="#3B82F6" opacity="0.8" />
                  <ellipse cx="32" cy="50" rx="1.5" ry="3" fill="#3B82F6" opacity="0.6" />
                  {/* Tears of joy */}
                  <ellipse cx="65" cy="45" rx="2" ry="4" fill="#FEF3C7" opacity="0.9" />
                  <ellipse cx="68" cy="50" rx="1.5" ry="3" fill="#F59E0B" opacity="0.7" />
                  {/* Small cross above heart */}
                  <rect x="48" y="22" width="4" height="8" fill="#F59E0B" rx="1" />
                  <rect x="45" y="25" width="10" height="4" fill="#F59E0B" rx="1" />
                </svg>
              </div>
            </div>
            <div className="pt-12">
              <h3 className="font-['Cinzel'] text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-300 mb-4">
                Experiências Humanas e Divinas
              </h3>
              <p className="font-['Inter'] text-lg text-white/90 leading-relaxed">
                Nos Salmos encontramos <span className="text-cyan-300 font-semibold">experiências pessoais</span> que variam do desânimo à alegria na presença do Senhor.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateZ: 5 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="group relative bg-gradient-to-br from-amber-900/40 via-yellow-900/40 to-amber-900/40 backdrop-blur-xl p-8 rounded-3xl border border-amber-400/30 shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-500 hover:scale-105"
          >
            <div className="absolute top-4 left-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
                {/* Custom Light to Nations SVG Icon */}
                <svg viewBox="0 0 100 100" className="w-8 h-8 text-white drop-shadow-lg">
                  <defs>
                    <radialGradient id="lampGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FEF3C7" />
                      <stop offset="70%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#D97706" />
                    </radialGradient>
                    <radialGradient id="lightRayGrad" cx="50%" cy="50%" r="80%">
                      <stop offset="0%" stopColor="#FEF3C7" opacity="0.9" />
                      <stop offset="50%" stopColor="#F59E0B" opacity="0.6" />
                      <stop offset="100%" stopColor="#FEF3C7" opacity="0.1" />
                    </radialGradient>
                    <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06B6D4" />
                      <stop offset="50%" stopColor="#0EA5E9" />
                      <stop offset="100%" stopColor="#0284C7" />
                    </linearGradient>
                  </defs>
                  {/* Light rays radiating outward */}
                  <circle cx="50" cy="50" r="45" fill="url(#lightRayGrad)" opacity="0.4" />
                  {/* Main light beam */}
                  <path d="M50 30 L45 10 L55 10 Z" fill="#FEF3C7" opacity="0.8" />
                  <path d="M50 30 L35 15 L40 10 Z" fill="#FEF3C7" opacity="0.6" />
                  <path d="M50 30 L65 15 L60 10 Z" fill="#FEF3C7" opacity="0.6" />
                  <path d="M50 30 L25 20 L30 15 Z" fill="#FEF3C7" opacity="0.4" />
                  <path d="M50 30 L75 20 L70 15 Z" fill="#FEF3C7" opacity="0.4" />
                  {/* Oil lamp/menorah base */}
                  <ellipse cx="50" cy="45" rx="12" ry="8" fill="url(#lampGrad)" />
                  <rect x="46" y="35" width="8" height="15" fill="url(#lampGrad)" rx="2" />
                  {/* Flame */}
                  <ellipse cx="50" cy="28" rx="4" ry="8" fill="#FEF3C7" />
                  <ellipse cx="50" cy="25" rx="2" ry="5" fill="#F59E0B" />
                  <ellipse cx="50" cy="22" rx="1" ry="3" fill="#DC2626" />
                  {/* Wick */}
                  <rect x="49" y="30" width="2" height="8" fill="#8B4513" />
                  {/* Globe/Earth at bottom */}
                  <circle cx="50" cy="75" r="15" fill="url(#globeGrad)" />
                  {/* Continents on globe */}
                  <path d="M40 70 Q45 65, 50 70 Q55 75, 60 70" fill="#10B981" />
                  <path d="M42 80 Q47 78, 52 82 Q57 85, 62 82" fill="#10B981" />
                  <ellipse cx="45" cy="72" rx="3" ry="2" fill="#10B981" />
                  <ellipse cx="55" cy="78" rx="4" ry="3" fill="#10B981" />
                  {/* Light reaching the globe */}
                  <path d="M50 50 L50 60" stroke="#FEF3C7" strokeWidth="3" opacity="0.8" strokeLinecap="round" />
                  <path d="M45 52 L47 62" stroke="#FEF3C7" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
                  <path d="M55 52 L53 62" stroke="#FEF3C7" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
                  {/* Stars representing nations */}
                  <path d="M20 25 L22 30 L27 30 L23 33 L25 38 L20 35 L15 38 L17 33 L13 30 L18 30 Z" fill="#FEF3C7" opacity="0.7" />
                  <path d="M80 35 L82 40 L87 40 L83 43 L85 48 L80 45 L75 48 L77 43 L73 40 L78 40 Z" fill="#FEF3C7" opacity="0.7" />
                  <path d="M85 65 L87 70 L92 70 L88 73 L90 78 L85 75 L80 78 L82 73 L78 70 L83 70 Z" fill="#FEF3C7" opacity="0.7" />
                  <path d="M15 65 L17 70 L22 70 L18 73 L20 78 L15 75 L10 78 L12 73 L8 70 L13 70 Z" fill="#FEF3C7" opacity="0.7" />
                </svg>
              </div>
            </div>
            <div className="pt-12">
              <h3 className="font-['Cinzel'] text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-300 mb-4">
                Luz Para as Nações
              </h3>
              <p className="font-['Inter'] text-lg text-white/90 leading-relaxed">
                O povo de Deus dos últimos dias tem a mesma tarefa de Israel: <span className="text-amber-300 font-semibold">ser luz para as nações</span>.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>,

  // NEW SLIDE - 3D Sanctuary (Enhanced Design)
  <div className="slide-content" key="slide-3d">
    <div className="relative min-h-screen flex items-center justify-center py-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-10 right-10">
          <FaChurch className="text-8xl text-purple-300" />
        </div>
        <div className="absolute bottom-10 left-10">
          <GiHolyGrail className="text-7xl text-cyan-300" />
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8 z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-10"
        >
          <h2 className="font-['Playfair_Display'] text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-cyan-300 to-indigo-200 mb-6">
            O Santuário
          </h2>
          <h3 className="font-['Cinzel'] text-3xl font-medium text-white/80 mb-8">
            Um Modelo da Realidade Celestial
          </h3>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "400px" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-400 via-cyan-400 to-indigo-400 mx-auto"
          ></motion.div>
        </motion.div>
        
        {/* Scripture Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-10"
        >
          <div className="relative bg-gradient-to-br from-black/40 via-purple-900/30 to-indigo-900/40 backdrop-blur-2xl p-6 rounded-2xl border border-white/20 shadow-2xl shadow-purple-500/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <GiCandleFlame className="text-2xl text-amber-300 mr-2" />
              <GiCandleFlame className="text-2xl text-amber-300 ml-2" />
            </div>
            <p className="font-['Inter'] text-xl md:text-2xl text-white/95 italic font-light">
              "Tenha o cuidado de fazer tudo segundo o modelo que foi mostrado a você no monte"
            </p>
            <p className="font-['Cinzel'] text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mt-3">
              Êxodo 25:40
            </p>
          </div>
        </motion.div>
        
        {/* 3D Sanctuary Display */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-8"
        >
          <div className="relative rounded-2xl overflow-hidden border-2 border-gradient-to-r from-purple-500 via-cyan-500 to-indigo-500 shadow-2xl shadow-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-indigo-500/20 pointer-events-none z-10"></div>
            <Sanctuary3D height="450px" />
          </div>
        </motion.div>
        
        {/* Info Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-purple-900/40 backdrop-blur-xl p-6 rounded-2xl border border-purple-400/30 shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                {/* Custom Most Holy Place SVG Icon */}
                <svg viewBox="0 0 100 100" className="w-6 h-6 text-white drop-shadow-lg">
                  <defs>
                    <radialGradient id="holyGlow" cx="50%" cy="30%" r="40%">
                      <stop offset="0%" stopColor="#FEF3C7" opacity="0.9" />
                      <stop offset="100%" stopColor="#FEF3C7" opacity="0.1" />
                    </radialGradient>
                    <linearGradient id="arkGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FEF3C7" />
                      <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>
                    <linearGradient id="curtainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                  {/* Divine Shekinah glory */}
                  <ellipse cx="50" cy="25" rx="20" ry="12" fill="url(#holyGlow)" />
                  {/* Veil/Curtain */}
                  <path d="M20 15 Q30 10, 40 15 Q50 20, 60 15 Q70 10, 80 15 L80 85 Q70 80, 60 85 Q50 90, 40 85 Q30 80, 20 85 Z" fill="url(#curtainGrad)" opacity="0.8" />
                  {/* Ark of the Covenant */}
                  <rect x="35" y="55" width="30" height="15" fill="url(#arkGrad2)" rx="2" />
                  <rect x="33" y="50" width="34" height="6" fill="url(#arkGrad2)" rx="3" />
                  {/* Cherubim */}
                  <path d="M40 50 Q35 40, 40 35 Q45 30, 50 35 Q45 45, 40 50" fill="#F59E0B" />
                  <path d="M60 50 Q65 40, 60 35 Q55 30, 50 35 Q55 45, 60 50" fill="#F59E0B" />
                  {/* Wings touching */}
                  <path d="M45 35 Q47 33, 50 35 Q53 33, 55 35" stroke="#F59E0B" strokeWidth="2" fill="none" />
                  {/* Divine light/presence */}
                  <circle cx="50" cy="42" r="8" fill="#FEF3C7" opacity="0.6" />
                  <circle cx="50" cy="42" r="4" fill="#F59E0B" opacity="0.8" />
                  {/* Crown above (God's throne) */}
                  <path d="M45 25 L48 18 L50 22 L52 18 L55 25 L52 28 L48 28 Z" fill="#F59E0B" />
                  <circle cx="48" cy="22" r="1" fill="#EF4444" />
                  <circle cx="52" cy="22" r="1" fill="#10B981" />
                  <circle cx="50" cy="20" r="1" fill="#3B82F6" />
                </svg>
              </div>
              <h3 className="font-['Cinzel'] text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">Santo dos Santos</h3>
            </div>
            <p className="font-['Inter'] text-white/90 leading-relaxed">Contém a Arca da Aliança, representa o <span className="text-purple-300 font-semibold">trono de Deus</span></p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative bg-gradient-to-br from-indigo-900/40 via-cyan-900/40 to-indigo-900/40 backdrop-blur-xl p-6 rounded-2xl border border-cyan-400/30 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                {/* Custom Holy Place SVG Icon */}
                <svg viewBox="0 0 100 100" className="w-6 h-6 text-white drop-shadow-lg">
                  <defs>
                    <linearGradient id="candlestickGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FEF3C7" />
                      <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>
                    <linearGradient id="tableGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FEF3C7" />
                      <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>
                    <linearGradient id="incenseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E0E7FF" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                  {/* Seven-branched candlestick (Menorah) */}
                  <rect x="10" y="70" width="20" height="8" fill="url(#candlestickGrad)" rx="2" />
                  <rect x="18" y="35" width="4" height="35" fill="url(#candlestickGrad)" />
                  {/* Branches */}
                  <path d="M8 50 Q15 45 18 50" stroke="url(#candlestickGrad)" strokeWidth="2" fill="none" />
                  <path d="M22 50 Q25 45 32 50" stroke="url(#candlestickGrad)" strokeWidth="2" fill="none" />
                  <path d="M5 60 Q12 55 18 60" stroke="url(#candlestickGrad)" strokeWidth="2" fill="none" />
                  <path d="M22 60 Q28 55 35 60" stroke="url(#candlestickGrad)" strokeWidth="2" fill="none" />
                  {/* Flames */}
                  <ellipse cx="8" cy="45" rx="1.5" ry="3" fill="#FEF3C7" />
                  <ellipse cx="32" cy="45" rx="1.5" ry="3" fill="#FEF3C7" />
                  <ellipse cx="5" cy="55" rx="1.5" ry="3" fill="#FEF3C7" />
                  <ellipse cx="35" cy="55" rx="1.5" ry="3" fill="#FEF3C7" />
                  <ellipse cx="20" cy="30" rx="2" ry="4" fill="#FEF3C7" />
                  
                  {/* Table of Showbread */}
                  <rect x="45" y="65" width="25" height="15" fill="url(#tableGrad)" rx="2" />
                  <rect x="47" y="60" width="21" height="5" fill="url(#tableGrad)" rx="1" />
                  {/* Bread loaves */}
                  <ellipse cx="52" cy="58" rx="3" ry="2" fill="#D97706" />
                  <ellipse cx="58" cy="58" rx="3" ry="2" fill="#D97706" />
                  <ellipse cx="64" cy="58" rx="3" ry="2" fill="#D97706" />
                  <ellipse cx="55" cy="55" rx="3" ry="2" fill="#D97706" />
                  <ellipse cx="61" cy="55" rx="3" ry="2" fill="#D97706" />
                  
                  {/* Altar of Incense */}
                  <rect x="75" y="45" width="15" height="25" fill="url(#incenseGrad)" rx="2" />
                  <rect x="73" y="40" width="19" height="8" fill="url(#incenseGrad)" rx="3" />
                  {/* Incense burning */}
                  <rect x="81" y="37" width="3" height="3" fill="#F59E0B" />
                  {/* Smoke */}
                  <path d="M82 35 Q80 30 82 25 Q85 20 82 15" stroke="#E5E7EB" strokeWidth="1.5" fill="none" opacity="0.8" />
                  <path d="M84 33 Q82 28 84 23" stroke="#E5E7EB" strokeWidth="1" fill="none" opacity="0.6" />
                  
                  {/* Holy Place boundary */}
                  <rect x="5" y="10" width="90" height="3" fill="#7C3AED" opacity="0.5" />
                  <rect x="5" y="85" width="90" height="3" fill="#7C3AED" opacity="0.5" />
                  <rect x="5" y="10" width="3" height="78" fill="#7C3AED" opacity="0.5" />
                  <rect x="92" y="10" width="3" height="78" fill="#7C3AED" opacity="0.5" />
                </svg>
              </div>
              <h3 className="font-['Cinzel'] text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-300">Lugar Santo</h3>
            </div>
            <p className="font-['Inter'] text-white/90 leading-relaxed">Com o candelabro, mesa dos pães e <span className="text-cyan-300 font-semibold">altar de incenso</span></p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative bg-gradient-to-br from-amber-900/40 via-yellow-900/40 to-amber-900/40 backdrop-blur-xl p-6 rounded-2xl border border-amber-400/30 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4">
                {/* Custom Divine Interaction SVG Icon */}
                <svg viewBox="0 0 100 100" className="w-6 h-6 text-white drop-shadow-lg">
                  <defs>
                    <radialGradient id="templeGlow" cx="50%" cy="30%" r="40%">
                      <stop offset="0%" stopColor="#FEF3C7" opacity="0.9" />
                      <stop offset="100%" stopColor="#FEF3C7" opacity="0.1" />
                    </radialGradient>
                    <linearGradient id="templeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FEF3C7" />
                      <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>
                    <linearGradient id="personGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FBBF24" />
                      <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>
                  </defs>
                  {/* Divine presence/light from temple */}
                  <ellipse cx="50" cy="20" rx="25" ry="15" fill="url(#templeGlow)" />
                  
                  {/* Temple structure */}
                  <rect x="30" y="25" width="40" height="30" fill="url(#templeGrad)" rx="2" />
                  <polygon points="25,25 50,15 75,25" fill="url(#templeGrad)" />
                  
                  {/* Temple pillars */}
                  <rect x="32" y="25" width="4" height="30" fill="#D97706" />
                  <rect x="64" y="25" width="4" height="30" fill="#D97706" />
                  
                  {/* Temple entrance */}
                  <rect x="45" y="35" width="10" height="20" fill="#92400E" />
                  
                  {/* Sacred fire/altar */}
                  <ellipse cx="50" cy="32" rx="3" ry="2" fill="#F59E0B" />
                  <ellipse cx="50" cy="30" rx="2" ry="3" fill="#FEF3C7" />
                  
                  {/* Worshipping figure */}
                  <circle cx="30" cy="65" r="4" fill="url(#personGrad)" />
                  <rect x="28" y="69" width="4" height="15" fill="url(#personGrad)" />
                  <rect x="25" y="72" width="3" height="8" fill="url(#personGrad)" />
                  <rect x="32" y="72" width="3" height="8" fill="url(#personGrad)" />
                  
                  {/* Prayer/worship gestures */}
                  <path d="M25 72 Q20 68, 25 65" stroke="url(#personGrad)" strokeWidth="2" fill="none" />
                  <path d="M35 72 Q40 68, 35 65" stroke="url(#personGrad)" strokeWidth="2" fill="none" />
                  
                  {/* Musical notes (Psalms) */}
                  <circle cx="15" cy="50" r="2" fill="#F59E0B" />
                  <rect x="17" y="42" width="1" height="8" fill="#F59E0B" />
                  <path d="M17 42 Q20 41 20 44" stroke="#F59E0B" strokeWidth="1" fill="none" />
                  
                  <circle cx="22" cy="45" r="2" fill="#F59E0B" />
                  <rect x="24" y="37" width="1" height="8" fill="#F59E0B" />
                  <path d="M24 37 Q27 36 27 39" stroke="#F59E0B" strokeWidth="1" fill="none" />
                  
                  {/* Light rays connecting person to temple */}
                  <path d="M30 60 L45 35" stroke="#FEF3C7" strokeWidth="2" opacity="0.7" strokeLinecap="round" />
                  <path d="M35 65 L50 35" stroke="#FEF3C7" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
                  
                  {/* Second worshipper */}
                  <circle cx="70" cy="68" r="4" fill="url(#personGrad)" />
                  <rect x="68" y="72" width="4" height="12" fill="url(#personGrad)" />
                  <rect x="65" y="75" width="3" height="6" fill="url(#personGrad)" />
                  <rect x="72" y="75" width="3" height="6" fill="url(#personGrad)" />
                  
                  {/* Hands raised in worship */}
                  <path d="M65 75 Q60 70, 65 68" stroke="url(#personGrad)" strokeWidth="2" fill="none" />
                  <path d="M75 75 Q80 70, 75 68" stroke="url(#personGrad)" strokeWidth="2" fill="none" />
                  
                  {/* Light reaching second person */}
                  <path d="M70 63 L55 35" stroke="#FEF3C7" strokeWidth="2" opacity="0.7" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-['Cinzel'] text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-300">Interação Divina</h3>
            </div>
            <p className="font-['Inter'] text-white/90 leading-relaxed">Os salmos revelam como o povo de Deus <span className="text-amber-300 font-semibold">interagia com o templo</span></p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </div>,

  // SLIDE 3 - Our High Priest
  <div className="slide-content" key="slide-3">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-6">
        Nosso Sumo Sacerdote
      </h2>
      
      <motion.blockquote 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="border-l-4 border-purple-500 pl-4 mb-8 text-white/90 italic"
      >
        "Cristo veio como sumo sacerdote dos bens já realizados. Ele atravessou o tabernáculo maior e mais perfeito, não feito por mãos humanas, isto é, não pertencente a esta criação." (Hebreus 9:11)
      </motion.blockquote>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-purple-500/20"
        >
          <h3 className="text-xl font-semibold text-indigo-300 mb-3">O Santuário Terrestre</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-purple-400">›</span>
              <span>Um modelo do celestial</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400">›</span>
              <span>Êxodo 25:40: "Tenha o cuidado de fazer tudo segundo o modelo"</span>
            </li>
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-purple-500/20"
        >
          <h3 className="text-xl font-semibold text-indigo-300 mb-3">A Obra de Cristo</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-purple-400">›</span>
              <span>Cristo cumpre todos os símbolos do santuário</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400">›</span>
              <span>O significado da entrada de Cristo com Seu próprio sangue</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  </div>,

  // SLIDE 4 - The Sanctuary in Revelation
  <div className="slide-content" key="slide-4">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-8">
        O Santuário no Apocalipse
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-indigo-300 mb-4">Elementos do Santuário:</h3>
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 backdrop-blur-sm p-3 rounded-lg border-l-4 border-purple-500"
            >
              <p className="text-white/90">Candelabro (Ap 1:12,13)</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 backdrop-blur-sm p-3 rounded-lg border-l-4 border-indigo-500"
            >
              <p className="text-white/90">Sala do trono (Ap 4:2-5)</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 backdrop-blur-sm p-3 rounded-lg border-l-4 border-purple-500"
            >
              <p className="text-white/90">Altar de incenso (Ap 8:3)</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 backdrop-blur-sm p-3 rounded-lg border-l-4 border-indigo-500"
            >
              <p className="text-white/90">Arca da aliança (Ap 11:19)</p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-indigo-300 mb-4">Salmo 122:</h3>
          <motion.blockquote 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-purple-300 italic text-xl mb-4"
          >
            "Alegrei-me quando me disseram: Vamos à Casa do Senhor!"
          </motion.blockquote>
          
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              <p className="text-white/90">Alegria na presença de Deus</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              <p className="text-white/90">Segurança e paz</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              <p className="text-white/90">Adoração e louvor</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </div>,

  // SLIDE 5 - Mount Zion
  <div className="slide-content" key="slide-5">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-white mb-6">
        Monte Sião: Local de Encontro
      </h2>
      
      <motion.blockquote 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center italic text-xl text-cyan-300 mb-8"
      >
        "Quem poderá subir ao monte do Senhor? Quem poderá permanecer no seu santuário?" (Salmo 24:3)
      </motion.blockquote>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20"
        >
          <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Requisitos nos Salmos:</h3>
          <ul className="space-y-3">
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="flex items-start gap-3"
            >
              <div className="text-cyan-400 text-lg">•</div>
              <p className="text-white/90">Mãos limpas e coração puro</p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="flex items-start gap-3"
            >
              <div className="text-cyan-400 text-lg">•</div>
              <p className="text-white/90">Não rende culto a ídolos</p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="flex items-start gap-3"
            >
              <div className="text-cyan-400 text-lg">•</div>
              <p className="text-white/90">Não jura falsamente</p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1.1 }}
              className="flex items-start gap-3"
            >
              <div className="text-cyan-400 text-lg">•</div>
              <p className="text-white/90">Vive com integridade</p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1.3 }}
              className="flex items-start gap-3"
            >
              <div className="text-cyan-400 text-lg">•</div>
              <p className="text-white/90">Fala a verdade de coração</p>
            </motion.li>
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20"
        >
          <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Em Apocalipse 14:</h3>
          <ul className="space-y-3">
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="flex items-start gap-3"
            >
              <div className="text-cyan-400 text-lg">•</div>
              <p className="text-white/90">144.000 com o Cordeiro</p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="flex items-start gap-3"
            >
              <div className="text-cyan-400 text-lg">•</div>
              <p className="text-white/90">Nome do Pai na testa</p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1.1 }}
              className="flex items-start gap-3"
            >
              <div className="text-cyan-400 text-lg">•</div>
              <p className="text-white/90">Redimidos da terra</p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1.3 }}
              className="flex items-start gap-3"
            >
              <div className="text-cyan-400 text-lg">•</div>
              <p className="text-white/90">Não contaminados</p>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1.5 }}
              className="flex items-start gap-3"
            >
              <div className="text-cyan-400 text-lg">•</div>
              <p className="text-white/90">Na boca não se achou mentira</p>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  </div>,

  // SLIDE 6 - Who Can Be on the Holy Mountain
  <div className="slide-content" key="slide-6">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-6">
        Quem Pode Estar no Monte Santo?
      </h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-md p-5 rounded-xl border border-purple-500/30 mb-8"
      >
        <p className="text-purple-300 italic text-xl">
          "Se dissermos que não temos pecado nenhum, [...] a verdade não está em nós" (1 João 1:8).
        </p>
      </motion.div>
      
      <div className="space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-start gap-4"
        >
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-lg text-white font-bold flex-shrink-0">
            1
          </div>
          <div>
            <p className="text-xl text-white/90">Ninguém pode dizer que "não será jamais abalado" (Sl 15:5)</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-start gap-4"
        >
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-lg text-white font-bold flex-shrink-0">
            2
          </div>
          <div>
            <p className="text-xl text-white/90">O Cordeiro nos capacita a estar em pé no monte Sião</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex items-start gap-4"
        >
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-lg text-white font-bold flex-shrink-0">
            3
          </div>
          <div>
            <p className="text-xl text-white/90">Temos "ousadia para entrar no Santuário, pelo sangue de Jesus" (Hebreus 10:19)</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-start gap-4"
        >
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-lg text-white font-bold flex-shrink-0">
            4
          </div>
          <div>
            <p className="text-xl text-white/90">A justiça perfeita de Cristo nos é atribuída pela fé</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </div>,

  // SLIDE 7 - Psalm 5 and Contrasts
  <div className="slide-content" key="slide-7">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-6">
        Salmo 5: Contrastes
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/20"
        >
          <h3 className="text-2xl font-semibold text-red-300 mb-4">Os Perdidos</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="text-red-400 text-lg">•</div>
              <p className="text-white/90">"O mal não pode habitar" com Deus</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-red-400 text-lg">•</div>
              <p className="text-white/90">"Na boca não há sinceridade"</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-red-400 text-lg">•</div>
              <p className="text-white/90">Adoram a criação, não o Criador</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-red-400 text-lg">•</div>
              <p className="text-white/90">Carregam a culpa de seus pecados</p>
            </li>
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-green-500/20"
        >
          <h3 className="text-2xl font-semibold text-green-300 mb-4">Os Redimidos</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="text-green-400 text-lg">•</div>
              <p className="text-white/90">"Na boca não se achou mentira"</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-green-400 text-lg">•</div>
              <p className="text-white/90">Temem a Deus e dão glória a Ele</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-green-400 text-lg">•</div>
              <p className="text-white/90">Palavras e ações refletem o caráter de Deus</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="text-green-400 text-lg">•</div>
              <p className="text-white/90">"Alegrem-se todos os que confiam em Ti"</p>
            </li>
          </ul>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-md p-5 rounded-xl border border-purple-500/30"
      >
        <p className="text-purple-300 italic text-xl text-center">
          "A questão central no grande conflito: Quem receberá nossa adoração?"
        </p>
      </motion.div>
    </motion.div>
  </div>,

  // SLIDE 8 - Ensinar aos transgressores
  <div className="slide-content" key="slide-8">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-6">
        Ensinar aos Transgressores os Caminhos de Deus
      </h2>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-md p-5 rounded-xl border border-purple-500/30 mb-8"
      >
        <p className="text-purple-300 italic text-xl">
          "Ensinarei aos transgressores os Teus caminhos, e os pecadores se converterão a Ti" (Salmo 51:13)
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-start gap-4"
        >
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-lg text-white font-bold flex-shrink-0">
            1
          </div>
          <div>
            <p className="text-xl text-white/90">Quem experimenta o perdão não pode ficar em silêncio</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-start gap-4"
        >
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-lg text-white font-bold flex-shrink-0">
            2
          </div>
          <div>
            <p className="text-xl text-white/90">"Ser chamado à presença de Deus é, em última análise, ser enviado de volta"</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex items-start gap-4"
        >
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-lg text-white font-bold flex-shrink-0">
            3
          </div>
          <div>
            <p className="text-xl text-white/90">As três mensagens angélicas estão fundamentadas no "evangelho eterno"</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex items-start gap-4"
        >
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-lg text-white font-bold flex-shrink-0">
            4
          </div>
          <div>
            <p className="text-xl text-white/90">Fora do "evangelho eterno", não temos nada de valor a dizer ao mundo</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </div>,

  // NEW SLIDE - Sanctuary Elements in Revelation (SPECTACULAR REDESIGN)
  <div className="slide-content" key="slide-sanctuary-elements">
    <div className="relative min-h-screen flex items-center justify-center py-8">
      {/* Spectacular Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-20 transform rotate-12">
          <GiCandleFlame className="text-9xl text-amber-300" />
        </div>
        <div className="absolute bottom-20 right-20 transform -rotate-12">
          <FaCrown className="text-8xl text-purple-300" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45">
          <GiHolyGrail className="text-[12rem] text-indigo-200" />
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8 z-10"
      >
        {/* Spectacular Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-purple-300 to-indigo-200 mb-6">
            Elementos do Santuário
          </h2>
          <h3 className="font-['Cinzel'] text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-8">
            no Apocalipse
          </h3>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "500px" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-gradient-to-r from-amber-400 via-purple-400 to-indigo-400 mx-auto"
          ></motion.div>
        </motion.div>
        
        {/* Spectacular Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* CANDELABRO - Ultra Premium */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-yellow-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-amber-900/40 via-yellow-900/40 to-orange-900/40 backdrop-blur-xl p-8 rounded-3xl border border-amber-400/30 shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-500 hover:scale-105 overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-amber-400/50 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-amber-400/50 rounded-br-3xl"></div>
              
              {/* Spectacular Icon Container */}
              <div className="flex items-center mb-6">
                <div className="relative w-20 h-20 mr-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-2xl shadow-xl shadow-amber-500/50 group-hover:shadow-amber-500/70 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-transparent rounded-2xl"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Custom Menorah SVG Icon */}
                    <svg viewBox="0 0 100 100" className="w-12 h-12 text-white drop-shadow-lg">
                      <defs>
                        <linearGradient id="candleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FEF3C7" />
                          <stop offset="100%" stopColor="#F59E0B" />
                        </linearGradient>
                      </defs>
                      {/* Base */}
                      <rect x="45" y="80" width="10" height="15" fill="url(#candleGrad)" />
                      {/* Central stem */}
                      <rect x="48" y="25" width="4" height="55" fill="url(#candleGrad)" />
                      {/* Arms */}
                      <path d="M30 40 Q40 35 48 40" stroke="url(#candleGrad)" strokeWidth="3" fill="none" />
                      <path d="M52 40 Q60 35 70 40" stroke="url(#candleGrad)" strokeWidth="3" fill="none" />
                      <path d="M20 50 Q35 45 48 50" stroke="url(#candleGrad)" strokeWidth="3" fill="none" />
                      <path d="M52 50 Q65 45 80 50" stroke="url(#candleGrad)" strokeWidth="3" fill="none" />
                      {/* Flames */}
                      <ellipse cx="30" cy="35" rx="3" ry="6" fill="#FEF3C7" opacity="0.9" />
                      <ellipse cx="70" cy="35" rx="3" ry="6" fill="#FEF3C7" opacity="0.9" />
                      <ellipse cx="20" cy="45" rx="3" ry="6" fill="#FEF3C7" opacity="0.9" />
                      <ellipse cx="80" cy="45" rx="3" ry="6" fill="#FEF3C7" opacity="0.9" />
                      <ellipse cx="50" cy="20" rx="4" ry="8" fill="#FEF3C7" opacity="0.9" />
                      {/* Inner flames */}
                      <ellipse cx="30" cy="35" rx="1.5" ry="4" fill="#F59E0B" />
                      <ellipse cx="70" cy="35" rx="1.5" ry="4" fill="#F59E0B" />
                      <ellipse cx="20" cy="45" rx="1.5" ry="4" fill="#F59E0B" />
                      <ellipse cx="80" cy="45" rx="1.5" ry="4" fill="#F59E0B" />
                      <ellipse cx="50" cy="20" rx="2" ry="5" fill="#F59E0B" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-['Cinzel'] text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300 mb-2">
                    Candelabro de Ouro
                  </h3>
                  <p className="font-['Inter'] text-amber-300 font-semibold">Apocalipse 1:12-13</p>
                </div>
              </div>
              <p className="font-['Inter'] text-lg text-white/90 leading-relaxed mb-4">
                Representa <span className="text-amber-300 font-semibold">Cristo entre as igrejas</span>, iluminando o caminho dos fiéis.
              </p>
              <div className="flex items-center text-amber-300">
                <GiCandleFlame className="mr-2" />
                <span className="text-sm italic">A Luz do Mundo</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </motion.div>

          {/* ALTAR DE INCENSO - Ultra Premium */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-blue-900/40 backdrop-blur-xl p-8 rounded-3xl border border-purple-400/30 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-500 hover:scale-105 overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-purple-400/50 rounded-tr-3xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-purple-400/50 rounded-bl-3xl"></div>
              
              {/* Spectacular Icon Container */}
              <div className="flex items-center mb-6">
                <div className="relative w-20 h-20 mr-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-xl shadow-purple-500/50 group-hover:shadow-purple-500/70 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 to-transparent rounded-2xl"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Custom Altar SVG Icon */}
                    <svg viewBox="0 0 100 100" className="w-12 h-12 text-white drop-shadow-lg">
                      <defs>
                        <linearGradient id="altarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#E0E7FF" />
                          <stop offset="100%" stopColor="#7C3AED" />
                        </linearGradient>
                        <linearGradient id="smokeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#F3F4F6" opacity="0.8" />
                          <stop offset="100%" stopColor="#F3F4F6" opacity="0.1" />
                        </linearGradient>
                      </defs>
                      {/* Altar base */}
                      <rect x="25" y="70" width="50" height="20" fill="url(#altarGrad)" rx="3" />
                      {/* Altar body */}
                      <rect x="35" y="50" width="30" height="20" fill="url(#altarGrad)" rx="2" />
                      {/* Altar top */}
                      <rect x="30" y="45" width="40" height="8" fill="url(#altarGrad)" rx="4" />
                      {/* Incense */}
                      <rect x="47" y="42" width="6" height="3" fill="#F59E0B" />
                      {/* Smoke wisps */}
                      <path d="M50 40 Q45 35 50 30 Q55 25 50 20 Q45 15 50 10" stroke="url(#smokeGrad)" strokeWidth="2" fill="none" opacity="0.7" />
                      <path d="M48 38 Q52 33 48 28 Q44 23 48 18" stroke="url(#smokeGrad)" strokeWidth="1.5" fill="none" opacity="0.5" />
                      <path d="M52 38 Q48 33 52 28 Q56 23 52 18" stroke="url(#smokeGrad)" strokeWidth="1.5" fill="none" opacity="0.5" />
                      {/* Horns */}
                      <rect x="28" y="47" width="4" height="6" fill="url(#altarGrad)" />
                      <rect x="68" y="47" width="4" height="6" fill="url(#altarGrad)" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-['Cinzel'] text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-indigo-300 mb-2">
                    Altar de Incenso
                  </h3>
                  <p className="font-['Inter'] text-purple-300 font-semibold">Apocalipse 8:3</p>
                </div>
              </div>
              <p className="font-['Inter'] text-lg text-white/90 leading-relaxed mb-4">
                Representa as <span className="text-purple-300 font-semibold">orações dos santos</span> subindo como incenso diante de Deus.
              </p>
              <div className="flex items-center text-purple-300">
                <FaPray className="mr-2" />
                <span className="text-sm italic">Orações que Sobem ao Céu</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </motion.div>

          {/* SALA DO TRONO - Ultra Premium */}
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: -5 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-indigo-900/40 via-cyan-900/40 to-purple-900/40 backdrop-blur-xl p-8 rounded-3xl border border-indigo-400/30 shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-500 hover:scale-105 overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-indigo-400/50 rounded-tl-3xl"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-indigo-400/50 rounded-tr-3xl"></div>
              
              {/* Spectacular Icon Container */}
              <div className="flex items-center mb-6">
                <div className="relative w-20 h-20 mr-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-600 rounded-2xl shadow-xl shadow-indigo-500/50 group-hover:shadow-indigo-500/70 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 to-transparent rounded-2xl"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Custom Throne SVG Icon */}
                    <svg viewBox="0 0 100 100" className="w-12 h-12 text-white drop-shadow-lg">
                      <defs>
                        <linearGradient id="throneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#DBEAFE" />
                          <stop offset="100%" stopColor="#3B82F6" />
                        </linearGradient>
                        <radialGradient id="gloryGrad" cx="50%" cy="30%" r="40%">
                          <stop offset="0%" stopColor="#FEF3C7" opacity="0.8" />
                          <stop offset="100%" stopColor="#FEF3C7" opacity="0.1" />
                        </radialGradient>
                      </defs>
                      {/* Glory/Light */}
                      <circle cx="50" cy="30" r="25" fill="url(#gloryGrad)" />
                      {/* Throne back */}
                      <path d="M25 85 L25 40 Q25 30 35 30 L65 30 Q75 30 75 40 L75 85" fill="url(#throneGrad)" />
                      {/* Throne arms */}
                      <rect x="20" y="55" width="8" height="15" fill="url(#throneGrad)" rx="4" />
                      <rect x="72" y="55" width="8" height="15" fill="url(#throneGrad)" rx="4" />
                      {/* Throne seat */}
                      <rect x="25" y="70" width="50" height="15" fill="url(#throneGrad)" rx="3" />
                      {/* Crown on throne */}
                      <path d="M40 35 L45 25 L50 30 L55 25 L60 35 L55 40 L45 40 Z" fill="#F59E0B" />
                      {/* Gems on crown */}
                      <circle cx="45" cy="32" r="1.5" fill="#EF4444" />
                      <circle cx="50" cy="30" r="2" fill="#10B981" />
                      <circle cx="55" cy="32" r="1.5" fill="#3B82F6" />
                      {/* Lightning/Power */}
                      <path d="M35 45 L40 50 L37 52 L42 58" stroke="#FEF3C7" strokeWidth="2" fill="none" opacity="0.7" />
                      <path d="M65 45 L60 50 L63 52 L58 58" stroke="#FEF3C7" strokeWidth="2" fill="none" opacity="0.7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-['Cinzel'] text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-cyan-300 mb-2">
                    Sala do Trono
                  </h3>
                  <p className="font-['Inter'] text-indigo-300 font-semibold">Apocalipse 4:2-5</p>
                </div>
              </div>
              <p className="font-['Inter'] text-lg text-white/90 leading-relaxed mb-4">
                Centro do <span className="text-indigo-300 font-semibold">governo divino</span>, onde Deus reina em majestade e glória.
              </p>
              <div className="flex items-center text-indigo-300">
                <FaCrown className="mr-2" />
                <span className="text-sm italic">Majestade Suprema</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </motion.div>

          {/* ARCA DA ALIANÇA - Ultra Premium */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateZ: 3 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-amber-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-yellow-900/40 via-amber-900/40 to-orange-900/40 backdrop-blur-xl p-8 rounded-3xl border border-yellow-400/30 shadow-2xl shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all duration-500 hover:scale-105 overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-yellow-400/50 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-yellow-400/50 rounded-br-3xl"></div>
              
              {/* Spectacular Icon Container */}
              <div className="flex items-center mb-6">
                <div className="relative w-20 h-20 mr-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-2xl shadow-xl shadow-yellow-500/50 group-hover:shadow-yellow-500/70 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-transparent rounded-2xl"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Custom Ark SVG Icon */}
                    <svg viewBox="0 0 100 100" className="w-12 h-12 text-white drop-shadow-lg">
                      <defs>
                        <linearGradient id="arkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FEF3C7" />
                          <stop offset="100%" stopColor="#D97706" />
                        </linearGradient>
                        <radialGradient id="mercyGrad" cx="50%" cy="40%" r="30%">
                          <stop offset="0%" stopColor="#FEF3C7" opacity="0.9" />
                          <stop offset="100%" stopColor="#FEF3C7" opacity="0.2" />
                        </radialGradient>
                      </defs>
                      {/* Divine light */}
                      <ellipse cx="50" cy="35" rx="20" ry="10" fill="url(#mercyGrad)" />
                      {/* Ark base */}
                      <rect x="20" y="60" width="60" height="25" fill="url(#arkGrad)" rx="3" />
                      {/* Ark lid/mercy seat */}
                      <rect x="18" y="55" width="64" height="8" fill="url(#arkGrad)" rx="4" />
                      {/* Cherubim (left) */}
                      <path d="M25 55 Q20 45 25 40 Q30 35 35 40 Q30 50 25 55" fill="#F59E0B" />
                      <path d="M20 50 Q15 45 20 40 Q25 35 30 40" fill="#F59E0B" opacity="0.7" />
                      {/* Cherubim (right) */}
                      <path d="M75 55 Q80 45 75 40 Q70 35 65 40 Q70 50 75 55" fill="#F59E0B" />
                      <path d="M80 50 Q85 45 80 40 Q75 35 70 40" fill="#F59E0B" opacity="0.7" />
                      {/* Wings meeting */}
                      <path d="M35 40 Q45 35 50 40 Q55 35 65 40" stroke="#F59E0B" strokeWidth="2" fill="none" />
                      {/* Tablets inside (visible through divine light) */}
                      <rect x="42" y="62" width="7" height="10" fill="#E5E7EB" opacity="0.8" rx="1" />
                      <rect x="51" y="62" width="7" height="10" fill="#E5E7EB" opacity="0.8" rx="1" />
                      {/* Text on tablets */}
                      <line x1="43" y1="65" x2="47" y2="65" stroke="#374151" strokeWidth="0.5" />
                      <line x1="43" y1="67" x2="47" y2="67" stroke="#374151" strokeWidth="0.5" />
                      <line x1="43" y1="69" x2="47" y2="69" stroke="#374151" strokeWidth="0.5" />
                      <line x1="52" y1="65" x2="56" y2="65" stroke="#374151" strokeWidth="0.5" />
                      <line x1="52" y1="67" x2="56" y2="67" stroke="#374151" strokeWidth="0.5" />
                      <line x1="52" y1="69" x2="56" y2="69" stroke="#374151" strokeWidth="0.5" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-['Cinzel'] text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-300 mb-2">
                    Arca da Aliança
                  </h3>
                  <p className="font-['Inter'] text-yellow-300 font-semibold">Apocalipse 11:19</p>
                </div>
              </div>
              <p className="font-['Inter'] text-lg text-white/90 leading-relaxed mb-4">
                Simboliza a <span className="text-yellow-300 font-semibold">lei e a aliança divina</span>, presença manifesta de Deus.
              </p>
              <div className="flex items-center text-yellow-300">
                <GiAngelWings className="mr-2" />
                <span className="text-sm italic">Presença Santíssima</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Spectacular Conclusion */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <div className="relative bg-gradient-to-br from-black/40 via-purple-900/30 to-indigo-900/40 backdrop-blur-2xl p-8 rounded-3xl border border-white/20 shadow-2xl shadow-purple-500/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4">
              <GiHolyGrail className="text-3xl text-purple-300/50" />
            </div>
            <div className="absolute bottom-4 right-4">
              <FaCrown className="text-3xl text-indigo-300/50" />
            </div>
            
            <div className="flex items-center justify-center mb-6">
              <GiCandleFlame className="text-3xl text-amber-300 mr-3 animate-pulse" />
              <FaBookOpen className="text-3xl text-purple-300" />
              <GiCandleFlame className="text-3xl text-amber-300 ml-3 animate-pulse" />
            </div>
            
            <p className="font-['Inter'] text-xl md:text-2xl text-center text-white/95 leading-relaxed italic font-light">
              Sem uma compreensão do <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 font-semibold">santuário do Antigo Testamento</span>, é simplesmente 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-300 font-semibold"> impossível compreender</span> 
              o que João queria dizer ao descrever suas visões apocalípticas.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>,

  // SLIDE 9 - Jesus and the Sanctuary
  <div className="slide-content" key="slide-jesus-sanctuary">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-6">
        Jesus e o Santuário
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-md p-5 rounded-xl border border-purple-500/30"
          >
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">O Modelo Celestial</h3>
            <p className="text-white/90">
              "Tenha o cuidado de fazer tudo segundo o modelo que foi mostrado a você no monte" (Êxodo 25:40)
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-md p-5 rounded-xl border border-purple-500/30"
          >
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">Cristo: Nosso Sumo Sacerdote</h3>
            <p className="text-white/90">
              "Cristo veio como sumo sacerdote dos bens já realizados. Ele atravessou o tabernáculo maior e mais perfeito, não feito por mãos humanas" (Hebreus 9:11)
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-md p-5 rounded-xl border border-purple-500/30"
          >
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">Temas do Salmo 122</h3>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <div className="bg-white/10 p-2 rounded-lg text-center">
                <span className="text-cyan-300">Paz</span>
              </div>
              <div className="bg-white/10 p-2 rounded-lg text-center">
                <span className="text-cyan-300">Segurança</span>
              </div>
              <div className="bg-white/10 p-2 rounded-lg text-center">
                <span className="text-cyan-300">Louvor</span>
              </div>
              <div className="bg-white/10 p-2 rounded-lg text-center">
                <span className="text-cyan-300">Juízo</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20"
          >
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">O Que Cristo Faz Por Nós:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <div className="text-purple-400 text-lg">•</div>
                <p className="text-white/90">Oferece redenção eterna (Hb 9:12)</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-purple-400 text-lg">•</div>
                <p className="text-white/90">Purifica nossa consciência (Hb 9:14)</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-purple-400 text-lg">•</div>
                <p className="text-white/90">Media a Nova Aliança (Hb 9:15)</p>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20"
          >
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">Prefigurações de Jesus:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <div className="text-purple-400 text-lg">•</div>
                <p className="text-white/90">O sacerdote representava Cristo como mediador</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-purple-400 text-lg">•</div>
                <p className="text-white/90">Os sacrifícios apontavam para o sacrifício perfeito</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-purple-400 text-lg">•</div>
                <p className="text-white/90">Os móveis ilustravam aspectos de Seu ministério</p>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 p-4 rounded-lg border border-indigo-500/30"
          >
            <p className="text-white/90 text-center italic">
              "Não podemos ir à 'Casa do Senhor' terrena, mas temos acesso direto ao santuário celestial por meio de Cristo"
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-purple-500/20"
      >
        <p className="text-white/90 text-center">
          Os Salmos revelam como o povo de Deus <span className="text-indigo-300 font-semibold">interagia pessoalmente</span> com o templo, 
          permitindo-nos explorar experiências que nos ajudam a compreender melhor nossa própria relação com Cristo, 
          nosso Sumo Sacerdote celestial.
        </p>
      </motion.div>
    </motion.div>
  </div>,

  // SLIDE 9 - Discussion Questions (Enhanced Design)
  <div className="slide-content" key="slide-9">
    <div className="relative min-h-screen flex items-center justify-center py-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 right-20 transform rotate-12">
          <FaBookOpen className="text-9xl text-purple-300" />
        </div>
        <div className="absolute bottom-20 left-20 transform -rotate-12">
          <FaHeart className="text-8xl text-cyan-300" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <BiInfinite className="text-[15rem] text-indigo-200" />
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8 z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-cyan-300 to-indigo-200 mb-6">
            Para Refletir
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "400px" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-400 via-cyan-400 to-indigo-400 mx-auto mb-6"
          ></motion.div>
          <p className="font-['Cinzel'] text-2xl text-white/70 font-medium">
            Questões para Discussão e Meditação
          </p>
        </motion.div>
        
        {/* Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-purple-900/40 backdrop-blur-xl p-8 rounded-3xl border border-purple-400/30 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-500 hover:scale-105"
          >
            <div className="absolute top-6 left-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                {/* Custom Hope in Christ SVG Icon */}
                <svg viewBox="0 0 100 100" className="w-10 h-10 text-white drop-shadow-lg">
                  <defs>
                    <radialGradient id="crossGlow" cx="50%" cy="50%" r="60%">
                      <stop offset="0%" stopColor="#FEF3C7" opacity="0.9" />
                      <stop offset="100%" stopColor="#FEF3C7" opacity="0.1" />
                    </radialGradient>
                    <linearGradient id="crossGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FEF3C7" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>
                    <linearGradient id="hopeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C7D2FE" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                  {/* Divine light radiating */}
                  <circle cx="50" cy="50" r="40" fill="url(#crossGlow)" />
                  
                  {/* Main cross */}
                  <rect x="45" y="20" width="10" height="60" fill="url(#crossGrad3)" rx="2" />
                  <rect x="30" y="40" width="40" height="10" fill="url(#crossGrad3)" rx="2" />
                  
                  {/* Crown of thorns */}
                  <circle cx="50" cy="25" r="8" stroke="#8B4513" strokeWidth="2" fill="none" />
                  <path d="M42 25 L44 22" stroke="#8B4513" strokeWidth="1.5" />
                  <path d="M50 17 L50 19" stroke="#8B4513" strokeWidth="1.5" />
                  <path d="M58 25 L56 22" stroke="#8B4513" strokeWidth="1.5" />
                  <path d="M54 30 L56 32" stroke="#8B4513" strokeWidth="1.5" />
                  <path d="M46 30 L44 32" stroke="#8B4513" strokeWidth="1.5" />
                  
                  {/* Salvation hands reaching up */}
                  <path d="M25 70 Q30 65, 35 70" stroke="url(#hopeGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M65 70 Q60 65, 55 70" stroke="url(#hopeGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  
                  {/* Light rays from cross */}
                  <path d="M50 30 L45 15" stroke="#FEF3C7" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
                  <path d="M50 30 L55 15" stroke="#FEF3C7" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
                  <path d="M35 45 L20 40" stroke="#FEF3C7" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
                  <path d="M65 45 L80 40" stroke="#FEF3C7" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
                  
                  {/* Hearts being touched by grace */}
                  <path d="M25 75 C22 70, 15 70, 15 78 C15 85, 25 90, 25 90 C25 90, 35 85, 35 78 C35 70, 28 70, 25 75 Z" fill="url(#hopeGrad)" opacity="0.8" />
                  <path d="M75 75 C72 70, 65 70, 65 78 C65 85, 75 90, 75 90 C75 90, 85 85, 85 78 C85 70, 78 70, 75 75 Z" fill="url(#hopeGrad)" opacity="0.8" />
                  
                  {/* Number 1 */}
                  <rect x="47" y="55" width="3" height="12" fill="#FEF3C7" />
                  <path d="M47 55 L45 57" stroke="#FEF3C7" strokeWidth="2" strokeLinecap="round" />
                  <rect x="45" y="67" width="7" height="2" fill="#FEF3C7" />
                </svg>
              </div>
            </div>
            <div className="pt-16">
              <h3 className="font-['Cinzel'] text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 mb-4">
                A Nossa Única Esperança
              </h3>
              <p className="font-['Inter'] text-lg text-white/90 leading-relaxed">
                Por que o que <span className="text-purple-300 font-semibold">Cristo fez em nosso favor</span> é nossa única esperança de salvação?
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: 5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="group relative bg-gradient-to-br from-indigo-900/40 via-cyan-900/40 to-indigo-900/40 backdrop-blur-xl p-8 rounded-3xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-500 hover:scale-105"
          >
            <div className="absolute top-6 left-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                {/* Custom Personal Psalms Experience SVG Icon */}
                <svg viewBox="0 0 100 100" className="w-10 h-10 text-white drop-shadow-lg">
                  <defs>
                    <radialGradient id="soulGlow" cx="50%" cy="50%" r="60%">
                      <stop offset="0%" stopColor="#DBEAFE" opacity="0.9" />
                      <stop offset="100%" stopColor="#DBEAFE" opacity="0.1" />
                    </radialGradient>
                    <linearGradient id="psalmsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FEF3C7" />
                      <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>
                    <linearGradient id="heartSoulGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DBEAFE" />
                      <stop offset="50%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  {/* Soul's glow */}
                  <circle cx="50" cy="50" r="40" fill="url(#soulGlow)" />
                  
                  {/* Open book of Psalms */}
                  <path d="M20 35 Q25 30, 30 35 L70 35 Q75 30, 80 35 L80 70 Q75 75, 70 70 L30 70 Q25 75, 20 70 Z" fill="url(#psalmsGrad)" />
                  <path d="M50 35 L50 70" stroke="#D97706" strokeWidth="1" />
                  
                  {/* Psalm text lines */}
                  <line x1="25" y1="42" x2="45" y2="42" stroke="#8B4513" strokeWidth="1" />
                  <line x1="25" y1="47" x2="45" y2="47" stroke="#8B4513" strokeWidth="1" />
                  <line x1="25" y1="52" x2="45" y2="52" stroke="#8B4513" strokeWidth="1" />
                  <line x1="25" y1="57" x2="45" y2="57" stroke="#8B4513" strokeWidth="1" />
                  <line x1="55" y1="42" x2="75" y2="42" stroke="#8B4513" strokeWidth="1" />
                  <line x1="55" y1="47" x2="75" y2="47" stroke="#8B4513" strokeWidth="1" />
                  <line x1="55" y1="52" x2="75" y2="52" stroke="#8B4513" strokeWidth="1" />
                  <line x1="55" y1="57" x2="75" y2="57" stroke="#8B4513" strokeWidth="1" />
                  
                  {/* Heart connecting to words */}
                  <path d="M50 15 C47 10, 40 10, 40 18 C40 25, 50 35, 50 35 C50 35, 60 25, 60 18 C60 10, 53 10, 50 15 Z" fill="url(#heartSoulGrad)" />
                  
                  {/* Tears of both sorrow and joy */}
                  <ellipse cx="35" cy="25" rx="1.5" ry="3" fill="#3B82F6" opacity="0.8" />
                  <ellipse cx="65" cy="25" rx="1.5" ry="3" fill="#DBEAFE" opacity="0.9" />
                  
                  {/* Musical notes (Psalms are songs) */}
                  <circle cx="15" cy="20" r="2" fill="#60A5FA" />
                  <rect x="17" y="12" width="1" height="8" fill="#60A5FA" />
                  <path d="M17 12 Q20 11 20 14" stroke="#60A5FA" strokeWidth="1" fill="none" />
                  
                  <circle cx="85" cy="22" r="2" fill="#60A5FA" />
                  <rect x="87" y="14" width="1" height="8" fill="#60A5FA" />
                  <path d="M87 14 Q90 13 90 16" stroke="#60A5FA" strokeWidth="1" fill="none" />
                  
                  {/* Light emanating from heart to book */}
                  <path d="M50 25 L40 35" stroke="#DBEAFE" strokeWidth="2" opacity="0.7" strokeLinecap="round" />
                  <path d="M50 25 L60 35" stroke="#DBEAFE" strokeWidth="2" opacity="0.7" strokeLinecap="round" />
                  <path d="M50 25 L50 35" stroke="#DBEAFE" strokeWidth="3" opacity="0.8" strokeLinecap="round" />
                  
                  {/* Personal connection rays */}
                  <circle cx="25" cy="80" r="3" fill="#60A5FA" opacity="0.6" />
                  <circle cx="75" cy="80" r="3" fill="#60A5FA" opacity="0.6" />
                  <path d="M25 80 L35 65" stroke="#60A5FA" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
                  <path d="M75 80 L65 65" stroke="#60A5FA" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
                  
                  {/* Number 2 */}
                  <path d="M45 80 Q48 77, 52 80 Q52 83, 48 85 L52 85 L45 85 Z" fill="#FEF3C7" />
                </svg>
              </div>
            </div>
            <div className="pt-16">
              <h3 className="font-['Cinzel'] text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-300 mb-4">
                Sua Experiência nos Salmos
              </h3>
              <p className="font-['Inter'] text-lg text-white/90 leading-relaxed">
                Quais passagens dos <span className="text-cyan-300 font-semibold">Salmos refletem</span> a sua experiência pessoal com Deus?
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: -5 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="group relative bg-gradient-to-br from-amber-900/40 via-yellow-900/40 to-amber-900/40 backdrop-blur-xl p-8 rounded-3xl border border-amber-400/30 shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-500 hover:scale-105"
          >
            <div className="absolute top-6 left-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
                {/* Custom Christ's Intercession SVG Icon */}
                <svg viewBox="0 0 100 100" className="w-10 h-10 text-white drop-shadow-lg">
                  <defs>
                    <radialGradient id="heavenGlow" cx="50%" cy="30%" r="50%">
                      <stop offset="0%" stopColor="#FEF3C7" opacity="1" />
                      <stop offset="100%" stopColor="#FEF3C7" opacity="0.1" />
                    </radialGradient>
                    <linearGradient id="christGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FEF3C7" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>
                    <linearGradient id="altarGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FBBF24" />
                      <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>
                  </defs>
                  {/* Heavenly sanctuary glow */}
                  <ellipse cx="50" cy="25" rx="30" ry="18" fill="url(#heavenGlow)" />
                  
                  {/* Heavenly sanctuary structure */}
                  <rect x="25" y="20" width="50" height="25" fill="url(#altarGrad3)" opacity="0.8" rx="3" />
                  <polygon points="20,20 50,10 80,20" fill="url(#altarGrad3)" opacity="0.9" />
                  
                  {/* Christ as High Priest figure */}
                  <circle cx="50" cy="35" r="6" fill="url(#christGrad)" />
                  <rect x="47" y="41" width="6" height="15" fill="url(#christGrad)" />
                  {/* Priestly robes */}
                  <rect x="44" y="44" width="12" height="12" fill="#7C3AED" opacity="0.8" rx="2" />
                  {/* Arms raised in intercession */}
                  <path d="M44 47 Q38 42, 42 38" stroke="url(#christGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M56 47 Q62 42, 58 38" stroke="url(#christGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  
                  {/* Altar with incense */}
                  <rect x="40" y="30" width="20" height="8" fill="url(#altarGrad3)" rx="2" />
                  <rect x="47" y="27" width="6" height="3" fill="#F59E0B" />
                  {/* Incense smoke rising */}
                  <path d="M50 25 Q47 20, 50 15 Q53 10, 50 5" stroke="#E5E7EB" strokeWidth="2" fill="none" opacity="0.9" />
                  <path d="M48 23 Q51 18, 48 13" stroke="#E5E7EB" strokeWidth="1.5" fill="none" opacity="0.7" />
                  <path d="M52 23 Q49 18, 52 13" stroke="#E5E7EB" strokeWidth="1.5" fill="none" opacity="0.7" />
                  
                  {/* Praying people below */}
                  <circle cx="25" cy="70" r="4" fill="#3B82F6" />
                  <rect x="23" y="74" width="4" height="10" fill="#3B82F6" />
                  {/* Hands in prayer */}
                  <path d="M21 77 Q18 74, 21 71" stroke="#3B82F6" strokeWidth="2" fill="none" />
                  <path d="M27 77 Q30 74, 27 71" stroke="#3B82F6" strokeWidth="2" fill="none" />
                  
                  <circle cx="75" cy="72" r="4" fill="#3B82F6" />
                  <rect x="73" y="76" width="4" height="8" fill="#3B82F6" />
                  {/* Hands in prayer */}
                  <path d="M71 79 Q68 76, 71 73" stroke="#3B82F6" strokeWidth="2" fill="none" />
                  <path d="M77 79 Q80 76, 77 73" stroke="#3B82F6" strokeWidth="2" fill="none" />
                  
                  {/* Light connecting prayers to Christ */}
                  <path d="M25 70 L45 45" stroke="#FEF3C7" strokeWidth="2" opacity="0.7" strokeLinecap="round" />
                  <path d="M75 72 L55 45" stroke="#FEF3C7" strokeWidth="2" opacity="0.7" strokeLinecap="round" />
                  <path d="M50 60 L50 45" stroke="#FEF3C7" strokeWidth="3" opacity="0.8" strokeLinecap="round" />
                  
                  {/* Cross above (sacrifice) */}
                  <rect x="48" y="12" width="2" height="6" fill="#D97706" />
                  <rect x="45" y="14" width="8" height="2" fill="#D97706" />
                  
                  {/* Hearts being lifted up */}
                  <path d="M15 85 C13 82, 8 82, 8 87 C8 92, 15 95, 15 95 C15 95, 22 92, 22 87 C22 82, 17 82, 15 85 Z" fill="#F59E0B" opacity="0.6" />
                  <path d="M85 87 C83 84, 78 84, 78 89 C78 94, 85 97, 85 97 C85 97, 92 94, 92 89 C92 84, 87 84, 85 87 Z" fill="#F59E0B" opacity="0.6" />
                  
                  {/* Number 3 */}
                  <path d="M45 88 Q48 85, 52 88 Q52 91, 48 93 Q50 94, 52 96 L45 96 Q48 94, 48 93 Q45 91, 45 88 Z" fill="#FEF3C7" />
                </svg>
              </div>
            </div>
            <div className="pt-16">
              <h3 className="font-['Cinzel'] text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-300 mb-4">
                Intercessão de Cristo
              </h3>
              <p className="font-['Inter'] text-lg text-white/90 leading-relaxed">
                Por que, mesmo tendo sido redimidos, precisamos da <span className="text-amber-300 font-semibold">intercessão de Cristo</span> por nós no Céu?
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateZ: 3 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="group relative bg-gradient-to-br from-emerald-900/40 via-teal-900/40 to-emerald-900/40 backdrop-blur-xl p-8 rounded-3xl border border-emerald-400/30 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-500 hover:scale-105"
          >
            <div className="absolute top-6 left-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                {/* Custom Adoption as Children SVG Icon */}
                <svg viewBox="0 0 100 100" className="w-10 h-10 text-white drop-shadow-lg">
                  <defs>
                    <radialGradient id="fatherGlow" cx="50%" cy="30%" r="50%">
                      <stop offset="0%" stopColor="#ECFDF5" opacity="0.9" />
                      <stop offset="100%" stopColor="#ECFDF5" opacity="0.1" />
                    </radialGradient>
                    <linearGradient id="fatherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FEF3C7" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>
                    <linearGradient id="childGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D1FAE5" />
                      <stop offset="50%" stopColor="#34D399" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                  </defs>
                  {/* Divine Father's love radiating */}
                  <ellipse cx="50" cy="25" rx="35" ry="20" fill="url(#fatherGlow)" />
                  
                  {/* Heavenly Father figure */}
                  <circle cx="50" cy="25" r="8" fill="url(#fatherGrad)" />
                  <rect x="46" y="33" width="8" height="18" fill="url(#fatherGrad)" />
                  {/* Crown of glory */}
                  <path d="M42 20 L45 15 L47 18 L50 13 L53 18 L55 15 L58 20 L55 23 L45 23 Z" fill="#F59E0B" />
                  <circle cx="47" cy="18" r="1" fill="#EF4444" />
                  <circle cx="50" cy="16" r="1" fill="#10B981" />
                  <circle cx="53" cy="18" r="1" fill="#3B82F6" />
                  
                  {/* Arms reaching down in love */}
                  <path d="M42 38 Q35 35, 38 30" stroke="url(#fatherGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M58 38 Q65 35, 62 30" stroke="url(#fatherGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  
                  {/* Children being lifted up */}
                  <circle cx="30" cy="65" r="5" fill="url(#childGrad)" />
                  <rect x="27" y="70" width="6" height="12" fill="url(#childGrad)" />
                  {/* Arms reaching up to Father */}
                  <path d="M24 73 Q20 68, 24 65" stroke="url(#childGrad)" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M33 73 Q37 68, 33 65" stroke="url(#childGrad)" strokeWidth="2" fill="none" strokeLinecap="round" />
                  
                  <circle cx="70" cy="68" r="5" fill="url(#childGrad)" />
                  <rect x="67" y="73" width="6" height="10" fill="url(#childGrad)" />
                  {/* Arms reaching up to Father */}
                  <path d="M64 76 Q60 71, 64 68" stroke="url(#childGrad)" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M73 76 Q77 71, 73 68" stroke="url(#childGrad)" strokeWidth="2" fill="none" strokeLinecap="round" />
                  
                  {/* Central child closer to Father */}
                  <circle cx="50" cy="58" r="5" fill="url(#childGrad)" />
                  <rect x="47" y="63" width="6" height="12" fill="url(#childGrad)" />
                  {/* Arms reaching up */}
                  <path d="M44 66 Q40 61, 44 58" stroke="url(#childGrad)" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M53 66 Q57 61, 53 58" stroke="url(#childGrad)" strokeWidth="2" fill="none" strokeLinecap="round" />
                  
                  {/* Hearts connecting Father and children */}
                  <path d="M35 55 C33 52, 28 52, 28 57 C28 62, 35 65, 35 65 C35 65, 42 62, 42 57 C42 52, 37 52, 35 55 Z" fill="#F59E0B" opacity="0.7" />
                  <path d="M65 55 C63 52, 58 52, 58 57 C58 62, 65 65, 65 65 C65 65, 72 62, 72 57 C72 52, 67 52, 65 55 Z" fill="#F59E0B" opacity="0.7" />
                  
                  {/* Light of love connecting all */}
                  <path d="M30 60 L45 40" stroke="#ECFDF5" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
                  <path d="M70 63 L55 40" stroke="#ECFDF5" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
                  <path d="M50 53 L50 40" stroke="#ECFDF5" strokeWidth="3" opacity="0.9" strokeLinecap="round" />
                  
                  {/* Family bond circle */}
                  <circle cx="50" cy="50" r="25" stroke="#10B981" strokeWidth="2" fill="none" opacity="0.3" strokeDasharray="5,3" />
                  
                  {/* Adoption seal/certificate */}
                  <rect x="15" y="15" width="15" height="12" fill="#D1FAE5" opacity="0.8" rx="2" />
                  <line x1="17" y1="19" x2="27" y2="19" stroke="#10B981" strokeWidth="1" />
                  <line x1="17" y1="22" x2="27" y2="22" stroke="#10B981" strokeWidth="1" />
                  <line x1="17" y1="25" x2="25" y2="25" stroke="#10B981" strokeWidth="1" />
                  
                  {/* Number 4 */}
                  <rect x="45" y="85" width="2" height="8" fill="#FEF3C7" />
                  <rect x="48" y="85" width="2" height="8" fill="#FEF3C7" />
                  <rect x="45" y="89" width="7" height="2" fill="#FEF3C7" />
                  <rect x="48" y="91" width="2" height="2" fill="#FEF3C7" />
                </svg>
              </div>
            </div>
            <div className="pt-16">
              <h3 className="font-['Cinzel'] text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300 mb-4">
                Adoção Como Filhos
              </h3>
              <p className="font-['Inter'] text-lg text-white/90 leading-relaxed">
                Após a "vergonha e tristeza" do pecado, como o Senhor o ergueu "para que <span className="text-emerald-300 font-semibold">participe da adoção dos filhos de Deus</span>"?
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <div className="relative bg-gradient-to-br from-black/40 via-purple-900/30 to-indigo-900/40 backdrop-blur-2xl p-8 rounded-3xl border border-white/20 shadow-2xl shadow-purple-500/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <GiAngelWings className="text-3xl text-cyan-300 mr-3" />
              <FaHeart className="text-3xl text-purple-300" />
              <GiAngelWings className="text-3xl text-cyan-300 ml-3" />
            </div>
            <p className="font-['Inter'] text-xl md:text-2xl text-white/95 italic font-light leading-relaxed">
              "Que o <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 font-semibold">Senhor nos abençoe</span> enquanto refletimos sobre Sua Palavra e buscamos compreender mais profundamente Seu amor por nós."
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
]; 