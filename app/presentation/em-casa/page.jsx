'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Custom hook for count-up animations
const useCountUp = (end, duration = 1500, isActive = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isActive) return;
    
    let startTime = null;
    const startValue = 0;
    
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const rawCount = easeOutQuart * (end - startValue) + startValue;
      setCount(rawCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, isActive]);
  
  return count;
};

// Dynamic background blob configs for hardware-accelerated animations
const getBlobConfig = (chapterNum, slideIdx) => {
  let color1 = 'rgba(16, 185, 129, 0.22)'; // Emerald default
  let color2 = 'rgba(6, 182, 212, 0.18)';  // Cyan default
  
  if (chapterNum === 2) {
    color1 = 'rgba(239, 68, 68, 0.22)'; // Red
    color2 = 'rgba(244, 63, 94, 0.18)';  // Rose
  } else if (chapterNum === 3) {
    color1 = 'rgba(16, 185, 129, 0.22)'; // Emerald
    color2 = 'rgba(34, 197, 94, 0.18)';  // Green
  } else if (chapterNum === 4) {
    color1 = 'rgba(16, 185, 129, 0.22)'; // Emerald
    color2 = 'rgba(245, 158, 11, 0.18)'; // Amber
  }

  const shifts = [
    // Slide 0
    {
      blob1: { x: 0, y: 0, scale: 1.0, opacity: 1.0 },
      blob2: { x: 0, y: 0, scale: 1.0, opacity: 1.0 }
    },
    // Slide 1
    {
      blob1: { x: 80, y: -40, scale: 1.15, opacity: 0.9 },
      blob2: { x: 120, y: 80, scale: 0.85, opacity: 1.1 }
    },
    // Slide 2
    {
      blob1: { x: -220, y: 120, scale: 0.9, opacity: 1.2 },
      blob2: { x: 40, y: -80, scale: 1.2, opacity: 0.8 }
    },
    // Slide 3
    {
      blob1: { x: -80, y: 40, scale: 1.05, opacity: 1.0 },
      blob2: { x: -120, y: -40, scale: 1.05, opacity: 1.0 }
    }
  ];

  const shift = shifts[slideIdx % shifts.length] || shifts[0];
  return {
    blob1: { ...shift.blob1, color: color1 },
    blob2: { ...shift.blob2, color: color2 }
  };
};

const EmCasaPresentationPage = () => {
  const [activeChapter, setActiveChapter] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayPanel, setDisplayPanel] = useState(null);
  const [tilePosition, setTilePosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Interactive Simulator State
  const [simulatorRevenue, setSimulatorRevenue] = useState(150000); // Default R$ 150k monthly
  
  // Active Slide Index inside the active chapter
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Dashboard mock data state
  const [dashboardTab, setDashboardTab] = useState('outflow'); // 'outflow', 'inventory', 'trends'
  const [dashboardSearch, setDashboardSearch] = useState('');
  const [dashboardRevenue, setDashboardRevenue] = useState(2450.80);
  const [dashboardOrders, setDashboardOrders] = useState(42);
  
  // List of sold items
  const [soldItems, setSoldItems] = useState([
    { id: 'item-1', name: 'Coca-Cola Lata 350ml', category: 'Bebidas', salesCount: 142, revenue: 852.00, lastSold: 'há 2 min' },
    { id: 'item-2', name: 'Leite Integral Itambé 1L', category: 'Laticínios', salesCount: 98, revenue: 588.00, lastSold: 'há 5 min' },
    { id: 'item-3', name: 'Pão de Forma Bauducco 500g', category: 'Padaria', salesCount: 75, revenue: 600.00, lastSold: 'há 12 min' },
    { id: 'item-4', name: 'Arroz Prato Fino 5kg', category: 'Mercearia', salesCount: 43, revenue: 1075.00, lastSold: 'há 20 min' },
  ]);

  // List of inventory items / stock alerts
  const [stockAlerts, setStockAlerts] = useState([
    { id: 'alert-1', name: 'Azeite de Oliva Gallo 500ml', stock: 0, minStock: 5, category: 'Mercearia', status: 'FALTA', replacement: 'Azeite Andorinha 500ml', replacementStock: 18, replacedCount: 12 },
    { id: 'alert-2', name: 'Café Pilão a Vácuo 500g', stock: 2, minStock: 10, category: 'Mercearia', status: 'CRÍTICO', replacement: 'Café Melitta 500g', replacementStock: 24, replacedCount: 8 },
    { id: 'alert-3', name: 'Detergente Limpol Coco 500ml', stock: 0, minStock: 8, category: 'Limpeza', status: 'FALTA', replacement: 'Detergente Ypê Coco 500ml', replacementStock: 32, replacedCount: 15 },
  ]);

  // List of searched items
  const [searchedItems, setSearchedItems] = useState([
    { id: 'search-1', name: 'Sorvete Kibon Creme 1.5L', searches: 280, growth: '+15%', status: 'Disponível' },
    { id: 'search-2', name: 'Cerveja Heineken Long Neck 330ml', searches: 195, growth: '+22%', status: 'Disponível' },
    { id: 'search-3', name: 'Pão de Alho Zinho Tradicional', searches: 124, growth: '+8%', status: 'Disponível' },
    { id: 'search-4', name: 'Chocolate Lacta Barra 90g', searches: 95, growth: '+5%', status: 'Poucas unidades' },
  ]);

  const [terminalLogs, setTerminalLogs] = useState([
    'Uplink operacional estabelecido.',
    'Porta 3001 ativa: escutando eventos socket.io.',
    'Insira dados ou simule uma venda.'
  ]);

  const addTerminalLog = (logText) => {
    const time = new Date().toLocaleTimeString('pt-BR');
    setTerminalLogs(prev => [`[${time}] ${logText}`, ...prev.slice(0, 15)]);
  };

  const simulateSale = () => {
    const randomIndex = Math.floor(Math.random() * soldItems.length);
    const itemToUpdate = soldItems[randomIndex];
    const unitPrice = itemToUpdate.revenue / itemToUpdate.salesCount;
    
    const updatedSold = soldItems.map((item, idx) => {
      if (idx === randomIndex) {
        return {
          ...item,
          salesCount: item.salesCount + 1,
          revenue: item.revenue + unitPrice,
          lastSold: 'agora mesmo'
        };
      }
      return item;
    });
    setSoldItems(updatedSold);
    setDashboardRevenue(prev => prev + unitPrice);
    setDashboardOrders(prev => prev + 1);
    addTerminalLog(`UPLINK: +1 ${itemToUpdate.name} vendido (${formatBRL(unitPrice)})`);
  };

  // Refs for scrolling elements
  const scrollContainerRef = useRef(null);
  const chapterViewRef = useRef(null);
  const tileRefs = useRef([]);

  // 4 Chapters definition
  const panels = [
    {
      number: 'I',
      chapterNumber: 1,
      theme: ['QUEM', 'SOMOS', 'CONECTADOS'],
      highlightIndex: 2, // CONECTADOS
      title: 'QUEM SOMOS',
      subtitle: 'Fortalecendo o comércio local através da tecnologia justa.',
      description: 'O Em Casa nasceu para colocar o supermercado do bairro no bolso do cliente, de forma transparente e 100% gratuita para o lojista.',
      image: '/images/cover_quem_somos_clean.png',
      bgColor: 'from-emerald-950/70 via-black/95 to-black'
    },
    {
      number: 'II',
      chapterNumber: 2,
      theme: ['O', 'GRANDE', 'DESAFIO'],
      highlightIndex: 1, // GRANDE
      title: 'O DESAFIO',
      subtitle: 'Taxas altas e margens estreitas no varejo alimentar.',
      description: 'Como as plataformas de entrega tradicionais sufocam a lucratividade dos supermercados locais.',
      image: '/images/cover_o_desafio_clean_pt.png',
      bgColor: 'from-red-950/70 via-black/95 to-black'
    },
    {
      number: 'III',
      chapterNumber: 3,
      theme: ['A', 'NOSSA', 'SOLUÇÃO'],
      highlightIndex: 2, // SOLUÇÃO
      title: 'A SOLUÇÃO',
      subtitle: 'Custo zero, PIX no caixa e logística sem dor de cabeça.',
      description: 'A revolução do delivery de supermercado feito sob medida para o comerciante.',
      image: '/images/em_casa_hero.png',
      bgColor: 'from-emerald-950/80 via-black/95 to-black'
    },
    {
      number: 'IV',
      chapterNumber: 4,
      theme: ['SHARED', 'SUCCESS', 'PARCERIA'],
      highlightIndex: 1, // SUCCESS
      title: 'SHARED SUCCESS',
      subtitle: 'Pronto para vender mais sem pagar mais?',
      description: 'Coloque o seu supermercado na era digital sem taxas e com recebimento imediato.',
      image: '/images/cover_parceria_clean_pt.png',
      bgColor: 'from-emerald-900/60 via-black/95 to-black'
    }
  ];

  // Monitor scroll inside active chapter to determine slide index and scroll percentage
  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = scrollLeft / (scrollWidth - clientWidth);
      setScrollProgress(progress * 100);

      // Determine active slide index (0, 1, 2...)
      const slideWidth = clientWidth;
      const currentSlide = Math.round(scrollLeft / slideWidth);
      setActiveSlideIndex(currentSlide);
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [activeChapter, handleScroll]);

  // Fullscreen Change Monitor
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleChapterClick = (index) => {
    const tile = tileRefs.current[index];
    if (tile) {
      const tileRect = tile.getBoundingClientRect();
      setTilePosition({
        x: tileRect.left - 64, // Accounts for the 64px left sidebar
        y: tileRect.top,
        width: tileRect.width,
        height: tileRect.height
      });
    }

    setIsAnimating(true);
    setActiveChapter(index);
    setDisplayPanel(index);
    setActiveSlideIndex(0);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  const handleCloseChapter = () => {
    setIsAnimating(true);
    setActiveChapter(null);
    setTimeout(() => {
      setDisplayPanel(null);
      setIsAnimating(false);
    }, 1200);
  };

  const activePanel = displayPanel !== null ? panels[displayPanel] : null;
  const blobConfig = activePanel ? getBlobConfig(activePanel.chapterNumber, activeSlideIndex) : null;
  
  let gridColor = 'rgba(16, 185, 129, 0.08)'; // Emerald default
  let progressBarColor = 'from-emerald-500 via-emerald-400 to-cyan-500'; // Chapter I default
  if (activePanel) {
    if (activePanel.chapterNumber === 2) {
      gridColor = 'rgba(239, 68, 68, 0.08)'; // Red
      progressBarColor = 'from-red-500 via-orange-500 to-rose-500'; // Chapter II
    } else if (activePanel.chapterNumber === 3) {
      progressBarColor = 'from-emerald-500 via-green-400 to-emerald-300'; // Chapter III
    } else if (activePanel.chapterNumber === 4) {
      gridColor = 'rgba(245, 158, 11, 0.08)'; // Amber
      progressBarColor = 'from-emerald-500 via-amber-400 to-amber-500'; // Chapter IV
    }
  }

  const getSlideCount = (chapterNumber) => {
    return (chapterNumber === 1 || chapterNumber === 3) ? 4 : 3;
  };

  // Formatting currency helper
  const formatBRL = (val) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  // Framer Motion Variants for rich entries
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const cardContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardItemVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="presentation-page flex h-screen w-full bg-black text-white overflow-hidden font-sans select-none">
      {/* Left Sidebar Menu */}
      <div className="fixed left-0 top-0 bottom-0 w-16 bg-black/95 border-r border-white/10 flex flex-col items-center justify-between py-8 z-50">
        <div className="flex flex-col items-center space-y-6">
          {/* Close/Back Button */}
          <button
            className="w-10 h-10 rounded-full border border-white/20 hover:border-emerald-500 flex items-center justify-center text-white/70 hover:text-emerald-400 hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => {
              if (activeChapter !== null) {
                handleCloseChapter();
              } else {
                window.history.back();
              }
            }}
            title={activeChapter !== null ? "Voltar aos Capítulos" : "Sair da Apresentação"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>

          {/* Fullscreen Button */}
          <button
            className="w-10 h-10 rounded-full border border-white/20 hover:border-emerald-500 flex items-center justify-center text-white/70 hover:text-emerald-400 hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => {
              if (document.fullscreenElement) {
                document.exitFullscreen();
              } else {
                document.documentElement.requestFullscreen();
              }
            }}
            title="Alternar Tela Cheia"
          >
            {isFullscreen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5M20 8V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5M20 16v4m0 0h-4m4 0l-5-5" />
              </svg>
            )}
          </button>
        </div>

        {/* Sidebar Vertical text */}
        <div className="flex-1 flex items-center justify-center">
          <div 
            style={{ writingMode: 'vertical-lr', textOrientation: 'mixed', whiteSpace: 'nowrap' }}
            className="text-emerald-400/40 text-xs tracking-[0.4em] font-mono uppercase"
          >
            Em Casa — Parceria Comercial
          </div>
        </div>

        <div 
          style={{ writingMode: 'vertical-lr', textOrientation: 'mixed', whiteSpace: 'nowrap' }}
          className="text-white/30 text-xs tracking-[0.2em] font-light uppercase"
        >
          Nós entregamos, você fatura
        </div>
      </div>

      {/* Chapters Grid View */}
      <div 
        className={`flex h-full w-full ml-16 transition-all duration-700 ${
          activeChapter !== null ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {panels.map((panel, index) => (
          <button
            key={panel.number}
            ref={(el) => {
              tileRefs.current[index] = el;
            }}
            onClick={() => handleChapterClick(index)}
            className="flex-1 relative flex flex-col items-center justify-center border-r border-white/10 last:border-r-0 group overflow-hidden transition-all duration-750 ease-in-out hover:flex-[2.2] cursor-pointer text-left"
          >
            {/* Background Panel Gradient & Lines */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-black to-black z-0" />
            
            {/* Cover image underlay with premium grayscale-to-color transition */}
            {panel.image && (
              <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-35 transition-opacity duration-[0.8s] ease-out">
                <Image 
                  src={panel.image}
                  alt={panel.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.2s] ease-out"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-[0.8s]" />
              </div>
            )}
            
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#10B981_1px,transparent_1px),linear-gradient(to_bottom,#10B981_1px,transparent_1px)] bg-[size:40px_40px] group-hover:opacity-20 transition-opacity duration-700" />
            
            {/* Glowing background blob on hover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/0 rounded-full blur-[100px] group-hover:bg-emerald-500/5 transition-all duration-700" />

            {/* Large Roman Numeral Background */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-mono font-bold text-white/2 opacity-[0.02] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-1000 select-none">
              {panel.number}
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between p-10 pt-20 pb-16">
              {/* Title & Tagline */}
              <div className="space-y-4">
                <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase block">Capítulo {panel.number}</span>
                <h3 className="text-3xl font-mono tracking-wider font-light text-white group-hover:text-emerald-400 transition-colors duration-500">
                  {panel.title}
                </h3>
                <p className="text-gray-400 text-sm max-w-xs font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {panel.description}
                </p>
              </div>

              {/* Theme large vertical stack */}
              <div className="flex-1 flex flex-col justify-center py-8">
                <div className="space-y-1">
                  {panel.theme.map((word, idx) => (
                    <div
                      key={idx}
                      className={`transition-all duration-700 ${
                        idx === panel.highlightIndex
                          ? 'text-4xl md:text-5xl font-cursive font-normal text-emerald-400 lowercase group-hover:tracking-[0.1em]'
                          : 'text-2xl md:text-3xl font-mono uppercase tracking-[0.2em] text-white/50 group-hover:text-white group-hover:tracking-[0.25em]'
                      }`}
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Visual Element / Action prompt */}
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-500/60 group-hover:text-emerald-400 transition-colors duration-300">
                <span>
                  {index === 0 && "INICIAR APRESENTAÇÃO"}
                  {index === 1 && "VER O DESAFIO"}
                  {index === 2 && "VER A SOLUÇÃO"}
                  {index === 3 && "VER PARCERIA"}
                </span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>

            {/* Glowing vertical separator */}
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent group-hover:via-emerald-500/40 transition-colors" />
          </button>
        ))}
      </div>

      {/* Chapters Detail Horizontal Slides View */}
      {(activePanel || isAnimating) && (
        <div
          ref={chapterViewRef}
          className={`fixed top-0 bottom-0 left-16 right-0 z-40 bg-black ${
            activeChapter !== null && !isAnimating
              ? 'chapter-view-open'
              : isAnimating && activeChapter !== null
              ? 'chapter-view-opening'
              : 'chapter-view-closing'
          }`}
          style={{
            '--tile-x': `${tilePosition.x}px`,
            '--tile-y': `${tilePosition.y}px`,
            '--tile-width': `${tilePosition.width}px`,
            '--tile-height': `${tilePosition.height}px`,
          }}
        >
          {/* Subtle cyber-grid background with parallax movement based on slide scroll */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40 transition-all duration-700 ease-out"
            style={{
              backgroundImage: `
                linear-gradient(${gridColor} 1px, transparent 1px),
                linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              transform: `translate3d(${-activeSlideIndex * 40}px, 0px, 0px)`,
            }}
          />

          {/* Dynamic Ambient light circles overlay */}
          {blobConfig && (
            <>
              <div 
                className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000 ease-out"
                style={{
                  backgroundColor: blobConfig.blob1.color,
                  transform: `translate3d(${blobConfig.blob1.x}px, ${blobConfig.blob1.y}px, 0px) scale(${blobConfig.blob1.scale})`,
                  opacity: blobConfig.blob1.opacity,
                }}
              />
              <div 
                className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[110px] pointer-events-none transition-all duration-1000 ease-out"
                style={{
                  backgroundColor: blobConfig.blob2.color,
                  transform: `translate3d(${blobConfig.blob2.x}px, ${blobConfig.blob2.y}px, 0px) scale(${blobConfig.blob2.scale})`,
                  opacity: blobConfig.blob2.opacity,
                }}
              />
            </>
          )}

          {/* Top Scroll Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/5 z-50">
            <div 
              className={`h-full bg-gradient-to-r ${progressBarColor}`}
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Horizontal snap scroll container */}
          <div
            ref={scrollContainerRef}
            className="h-full overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory bg-transparent"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {activePanel && (
              <>
                {/* ==================== CHAPTER I: QUEM SOMOS ==================== */}
                {activePanel.chapterNumber === 1 && (
                  <div className="flex h-full min-w-[400%]">
                    {/* Slide 1: Welcome Cover */}
                    <div className="w-screen h-full snap-start flex items-center justify-center px-12 relative">
                      <div className="max-w-4xl text-center space-y-6">
                        <motion.span 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          className="text-emerald-400 font-mono text-sm tracking-widest block uppercase"
                        >
                          Capítulo I
                        </motion.span>
                        <motion.h1 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 0.1 }}
                          className="text-5xl md:text-7xl font-mono tracking-wider font-light text-white"
                        >
                          QUEM <span className="font-cursive lowercase text-emerald-400 text-6xl md:text-8xl block md:inline md:ml-4">somos</span>
                        </motion.h1>
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
                        >
                          Conectando a comunidade e a tecnologia para construir um ecossistema de compras local justo, sustentável e eficiente.
                        </motion.p>
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.5 }}
                          transition={{ delay: 1 }}
                          className="pt-12 flex justify-center items-center gap-3 text-white/40 text-xs font-mono"
                        >
                          <span>role para o lado</span>
                          <motion.span 
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            →
                          </motion.span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Slide 2: Positioning Manifesto */}
                    <div className="w-screen h-full snap-start flex items-center justify-center px-16 relative">
                      <div className="max-w-4xl grid md:grid-cols-2 gap-12 items-center">
                        <motion.div 
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.3 }}
                          variants={textVariant}
                          className="space-y-6"
                        >
                          <h2 className="text-3xl font-mono text-emerald-400 uppercase tracking-widest">O Manifesto</h2>
                          <div className="w-16 h-[2px] bg-emerald-500" />
                          <p className="text-2xl font-light text-white leading-relaxed">
                            "O Em Casa nasceu para colocar o supermercado do bairro no bolso do cliente."
                          </p>
                        </motion.div>
                        <motion.div 
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.3 }}
                          variants={textVariant}
                          className="space-y-6 text-gray-300 font-light leading-relaxed border-l border-emerald-500/20 pl-6"
                        >
                          <p>
                            Conectamos o comércio local à tecnologia de forma justa, <strong className="text-emerald-400">sem custo algum para o lojista</strong>, fortalecendo quem move a economia da nossa comunidade.
                          </p>
                          <p>
                            Diferente de grandes monopólios de delivery, nosso modelo foi desenhado para proteger a margem do supermercado de bairro, gerando faturamento adicional sem custos de infraestrutura digital.
                          </p>
                        </motion.div>
                      </div>
                    </div>

                    {/* Slide 3: Mission & Vision */}
                    <div className="w-screen h-full snap-start flex items-center justify-center px-16 relative">
                      <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={cardContainerVariant}
                        className="max-w-5xl grid md:grid-cols-2 gap-8 w-full"
                      >
                        {/* Mission Card */}
                        <motion.div 
                          variants={cardItemVariant}
                          whileHover={{ y: -8, borderColor: "rgba(16,185,129,0.3)" }}
                          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md space-y-4 transition-all duration-300"
                        >
                          <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-center text-xl">
                            🎯
                          </div>
                          <h3 className="text-2xl font-mono text-white">Nossa Missão</h3>
                          <p className="text-gray-400 font-light leading-relaxed text-sm">
                            Empoderar os supermercados locais por meio da tecnologia, oferecendo uma plataforma de delivery sem custo para o lojista, que conecta a comunidade e simplifica a vida do consumidor com entregas rápidas, justas e eficientes.
                          </p>
                        </motion.div>

                        {/* Vision Card */}
                        <motion.div 
                          variants={cardItemVariant}
                          whileHover={{ y: -8, borderColor: "rgba(16,185,129,0.3)" }}
                          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md space-y-4 transition-all duration-300"
                        >
                          <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-center text-xl">
                            🚀
                          </div>
                          <h3 className="text-2xl font-mono text-white">Nossa Visão</h3>
                          <p className="text-gray-400 font-light leading-relaxed text-sm">
                            Ser a rede de delivery de supermercados mais justa e eficiente do país, tornando-se referência em fortalecer o comércio local e em remuneração logística inteligente até 2030.
                          </p>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Slide 4: Team Grid */}
                    <div className="w-screen h-full snap-start flex items-center justify-center px-16 relative">
                      <div className="max-w-6xl w-full space-y-12">
                        <div className="text-center space-y-4">
                          <h3 className="text-3xl font-mono text-emerald-400 tracking-widest uppercase">Quem Faz Acontecer</h3>
                          <p className="text-gray-400 font-light">Os idealizadores e desenvolvedores por trás do Em Casa.</p>
                        </div>
                        
                        <motion.div 
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.2 }}
                          variants={cardContainerVariant}
                          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                          {/* Card 1: Ana Paula */}
                          <motion.div 
                            variants={cardItemVariant}
                            whileHover={{ y: -6, borderColor: "rgba(16,185,129,0.4)" }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm space-y-4 text-center group transition-all duration-300"
                          >
                            <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-white/10 group-hover:border-emerald-400 transition-all flex items-center justify-center">
                              <Image 
                                src="/images/ana_paula.png" 
                                alt="Hyleana Paula Torres" 
                                fill 
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                              />
                            </div>
                            <div>
                              <h4 className="text-lg font-mono font-medium text-white group-hover:text-emerald-400 transition-colors">Hyleana Paula Torres</h4>
                              <p className="text-xs text-emerald-500 font-mono">Comercial & Trade Marketing</p>
                            </div>
                            <p className="text-gray-400 font-light text-xs leading-relaxed">
                              Empresária no ramo de promoção de supermercados e articulação comercial. Sua atuação foca no relacionamento próximo com fornecedores e lojistas, conectando a comunidade à plataforma.
                            </p>
                          </motion.div>

                          {/* Card 2: Rodrigo */}
                          <motion.div 
                            variants={cardItemVariant}
                            whileHover={{ y: -6, borderColor: "rgba(16,185,129,0.4)" }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm space-y-4 text-center group transition-all duration-300"
                          >
                            <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-white/10 group-hover:border-emerald-400 transition-all flex items-center justify-center">
                              <Image 
                                src="/images/rodrigo.png" 
                                alt="Rodrigo Pereira" 
                                fill 
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                              />
                            </div>
                            <div>
                              <h4 className="text-lg font-mono font-medium text-white group-hover:text-emerald-400 transition-colors">Rodrigo Pereira</h4>
                              <p className="text-xs text-emerald-500 font-mono">Operações & Estratégia</p>
                            </div>
                            <p className="text-gray-400 font-light text-xs leading-relaxed">
                              Gerencia a estrutura comercial, negociações operacionais com lojistas e o dimensionamento estratégico de entregas da plataforma.
                            </p>
                          </motion.div>

                          {/* Card 3: Mateus */}
                          <motion.div 
                            variants={cardItemVariant}
                            whileHover={{ y: -6, borderColor: "rgba(16,185,129,0.4)" }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm space-y-4 text-center group transition-all duration-300"
                          >
                            <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-white/10 group-hover:border-emerald-400 transition-all flex items-center justify-center">
                              <Image 
                                src="/images/mateus.png" 
                                alt="Mateus Araújo" 
                                fill 
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                              />
                            </div>
                            <div>
                              <h4 className="text-lg font-mono font-medium text-white group-hover:text-emerald-400 transition-colors">Mateus Araújo</h4>
                              <p className="text-xs text-emerald-500 font-mono">Performance & SEO</p>
                            </div>
                            <p className="text-gray-400 font-light text-xs leading-relaxed">
                              Especialista em SEO, otimização de performance e aquisição digital. Foca na escalabilidade da presença online e atração orgânica de novos parceiros.
                            </p>
                          </motion.div>

                          {/* Card 4: Ricky Alves */}
                          <motion.div 
                            variants={cardItemVariant}
                            whileHover={{ y: -6, borderColor: "rgba(16,185,129,0.4)" }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm space-y-4 text-center group transition-all duration-300"
                          >
                            <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-white/10 group-hover:border-emerald-400 transition-all flex items-center justify-center">
                              <Image 
                                src="/images/profile.jpeg" 
                                alt="Ricky Alves" 
                                fill 
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                              />
                            </div>
                            <div>
                              <h4 className="text-lg font-mono font-medium text-white group-hover:text-emerald-400 transition-colors">Ricky Alves</h4>
                              <p className="text-xs text-emerald-500 font-mono">Tecnologia & Dev Lead</p>
                            </div>
                            <p className="text-gray-400 font-light text-xs leading-relaxed">
                              Foco em apps nativos com Flutter, web em React/Next.js e infraestrutura Firebase, garantindo segurança e escalabilidade técnica.
                            </p>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ==================== CHAPTER II: O DESAFIO ==================== */}
                {activePanel.chapterNumber === 2 && (
                  <div className="flex h-full min-w-[300%]">
                    {/* Slide 1: Cover */}
                    <div className="w-screen h-full snap-start flex items-center justify-center px-12 relative">
                      <div className="max-w-4xl text-center space-y-6">
                        <motion.span 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 font-mono text-sm tracking-widest block uppercase"
                        >
                          Capítulo II
                        </motion.span>
                        <motion.h1 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 0.1 }}
                          className="text-5xl md:text-7xl font-mono tracking-wider font-light text-white"
                        >
                          O GRANDE <span className="font-cursive lowercase text-red-400 text-6xl md:text-8xl block md:inline md:ml-4">desafio</span>
                        </motion.h1>
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
                        >
                          A margem líquida do varejo alimentar é extremamente estreita. Mesmo assim, os aplicativos tradicionais impõem taxas abusivas sobre o faturamento.
                        </motion.p>
                        <div className="pt-8 flex justify-center items-center gap-3 text-white/40 text-xs font-mono">
                          <span>role para o lado</span>
                          <span>→</span>
                        </div>
                      </div>
                    </div>

                    {/* Slide 2: As 4 Dores do Supermercado */}
                    <div className="w-screen h-full snap-start flex items-center justify-center px-16 relative">
                      <div className="max-w-5xl w-full space-y-8">
                        <div className="text-left space-y-2">
                          <h2 className="text-3xl font-mono text-red-400 uppercase tracking-widest">Os Quatro Vilões do Delivery Tradicional</h2>
                          <p className="text-gray-400 font-light font-mono text-xs">// O que trava a operação de quem vende por plataformas de terceiros</p>
                        </div>
                        
                        <motion.div 
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.2 }}
                          variants={cardContainerVariant}
                          className="grid md:grid-cols-2 gap-6"
                        >
                          {/* Pain 1 */}
                          <motion.div variants={cardItemVariant} className="bg-white/5 border border-white/5 p-6 rounded-xl flex items-start space-x-4 border-l-2 border-l-red-500/40">
                            <div className="text-2xl text-red-500 font-mono font-bold">01</div>
                            <div className="space-y-1">
                              <h4 className="text-lg font-mono text-white">Comissões recorrentes sobre cada venda</h4>
                              <p className="text-gray-400 text-sm font-light leading-relaxed">
                                As plataformas tradicionais cobram comissão de dois dígitos sobre cada pedido, somada à taxa de processamento de pagamento. Mesmo com poder de negociação, essa fatia se repete em toda venda e corrói o resultado de um setor que já trabalha com margem apertada.
                              </p>
                            </div>
                          </motion.div>

                          {/* Pain 2 */}
                          <motion.div variants={cardItemVariant} className="bg-white/5 border border-white/5 p-6 rounded-xl flex items-start space-x-4 border-l-2 border-l-red-500/40">
                            <div className="text-2xl text-red-500 font-mono font-bold">02</div>
                            <div className="space-y-1">
                              <h4 className="text-lg font-mono text-white">Margem estreita do varejo alimentar</h4>
                              <p className="text-gray-400 text-sm font-light leading-relaxed">
                                O varejo alimentar opera com margem líquida média de 3% a 4%. Dividir essa rentabilidade com as comissões do delivery torna cada pedido pouco lucrativo ou até deficitário.
                              </p>
                            </div>
                          </motion.div>

                          {/* Pain 3 */}
                          <motion.div variants={cardItemVariant} className="bg-white/5 border border-white/5 p-6 rounded-xl flex items-start space-x-4 border-l-2 border-l-red-500/40">
                            <div className="text-2xl text-red-500 font-mono font-bold">03</div>
                            <div className="space-y-1">
                              <h4 className="text-lg font-mono text-white">Dependência e perda do cliente</h4>
                              <p className="text-gray-400 text-sm font-light leading-relaxed">
                                Nos apps tradicionais, o relacionamento e os dados do cliente ficam com a plataforma, não com a rede. O supermercado vira mais um fornecedor dentro do marketplace de um terceiro, sem controle sobre precificação, fidelização e marca. Quando o volume migra para o app de terceiro, a rede fica refém das regras dele.
                              </p>
                            </div>
                          </motion.div>

                          {/* Pain 4 */}
                          <motion.div variants={cardItemVariant} className="bg-white/5 border border-white/5 p-6 rounded-xl flex items-start space-x-4 border-l-2 border-l-red-500/40">
                            <div className="text-2xl text-red-500 font-mono font-bold">04</div>
                            <div className="space-y-1">
                              <h4 className="text-lg font-mono text-white">Logística pesada e custo de última milha</h4>
                              <p className="text-gray-400 text-sm font-light leading-relaxed">
                                Entregar compras pesadas e volumosas é caro. Manter frota própria gera custo fixo elevado, e terceirizar pela plataforma significa pagar caro e abrir mão do controle da operação de entrega.
                              </p>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Slide 3: Interactive Margin Loss Simulator */}
                    <div className="w-screen h-full snap-start flex items-center justify-center px-16 relative">
                      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                          <h3 className="text-2xl font-mono text-red-400 uppercase tracking-wider">Simulador de Taxas</h3>
                          <div className="w-12 h-[2px] bg-red-500" />
                          <p className="text-gray-300 font-light leading-relaxed">
                            Mova o controle abaixo para simular o seu faturamento de delivery mensal estimado e veja quanto dinheiro é perdido em comissões para outras plataformas.
                          </p>

                          {/* Interactive Slider Input */}
                          <div className="space-y-4 bg-white/5 border border-white/10 rounded-xl p-6">
                            <div className="flex justify-between items-center">
                              <span className="text-xs font-mono text-gray-400 uppercase">Faturamento Mensal</span>
                              <span className="text-xl font-mono font-bold text-white">{formatBRL(simulatorRevenue)}</span>
                            </div>
                            <input 
                              type="range" 
                              min="50000" 
                              max="500000" 
                              step="10000"
                              value={simulatorRevenue} 
                              onChange={(e) => setSimulatorRevenue(Number(e.target.value))}
                              className="w-full h-1 bg-red-950 rounded-lg appearance-none cursor-pointer accent-red-500"
                            />
                            <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                              <span>R$ 50K</span>
                              <span>R$ 275K</span>
                              <span>R$ 500K</span>
                            </div>
                          </div>
                        </div>

                        {/* Visual Calculator comparison */}
                        <motion.div 
                          layout
                          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md space-y-6 relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />

                          <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest text-center">Demonstrativo de Impacto Mensal</h4>
                          
                          <div className="space-y-4">
                            {/* Option A: Outros Apps */}
                            <div className="p-4 bg-red-950/20 border border-red-500/20 rounded-xl space-y-2">
                              <div className="flex justify-between text-xs font-mono text-red-400">
                                <span>TAXA PAGA EM OUTROS APPS (28%)</span>
                              </div>
                              <motion.div 
                                key={simulatorRevenue}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-3xl font-mono font-bold text-red-500"
                              >
                                {formatBRL(simulatorRevenue * 0.28)}
                              </motion.div>
                              <p className="text-[11px] text-gray-400">Dinheiro entregue aos intermediários digitais.</p>
                            </div>

                            {/* Option B: Em Casa */}
                            <div className="p-4 bg-emerald-950/20 border border-emerald-500/20 rounded-xl space-y-2 relative overflow-hidden">
                              <motion.div 
                                animate={{ scale: [1, 1.02, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute -right-4 -bottom-4 text-7xl opacity-[0.05]"
                              >
                                💸
                              </motion.div>
                              <div className="flex justify-between text-xs font-mono text-emerald-400">
                                <span>TAXA COM O EM CASA (0%)</span>
                                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded font-bold">ECONOMIA REVELADA</span>
                              </div>
                              <div className="text-3xl font-mono font-bold text-emerald-400">
                                {formatBRL(0)}
                              </div>
                              <p className="text-[11px] text-gray-300">Você economiza <strong className="text-emerald-400">{formatBRL(simulatorRevenue * 0.28)}</strong> por mês integrando-se conosco.</p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ==================== CHAPTER III: A SOLUÇÃO ==================== */}
                {activePanel.chapterNumber === 3 && (
                  <div className="flex h-full min-w-[400%]">
                    {/* Slide 1: Cover with Hero Mockup */}
                    <div className="w-screen h-full snap-start flex items-center justify-center px-16 relative">
                      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-left">
                          <motion.span 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-emerald-400 font-mono text-sm tracking-widest block uppercase"
                          >
                            Capítulo III
                          </motion.span>
                          <motion.h1 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl md:text-6xl font-mono tracking-wider font-light text-white"
                          >
                            A SOLUÇÃO <span className="font-cursive lowercase text-emerald-400 text-5xl md:text-7xl block md:inline-block">em casa</span>
                          </motion.h1>
                          <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-gray-400 text-base md:text-lg font-light leading-relaxed"
                          >
                            Mudamos as regras do jogo. Criamos uma plataforma justa, eficiente e sem custos de intermediação para o seu supermercado.
                          </motion.p>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ delay: 1 }}
                            className="pt-4 flex items-center gap-3 text-white/40 text-xs font-mono"
                          >
                            <span>role para ver os pilares</span>
                            <motion.span 
                              animate={{ x: [0, 5, 0] }}
                              transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                              →
                            </motion.span>
                          </motion.div>
                        </div>

                        {/* App Mockup Visual */}
                        <motion.div 
                          initial={{ opacity: 0, x: 40 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                          className="relative h-[480px] w-full max-w-[380px] mx-auto rounded-3xl overflow-hidden border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.15)] group/mockup"
                        >
                          <Image 
                            src="/images/em_casa_hero.png" 
                            alt="Em Casa App Mockup" 
                            fill
                            className="object-cover scale-102 group-hover/mockup:scale-105 transition-transform duration-[1.5s]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          <div className="absolute bottom-6 left-6 right-6 font-mono text-xs text-white/80 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/5 space-y-1 text-left">
                            <span className="text-emerald-400 font-bold block">APLICATIVO EM CASA</span>
                            Catálogo interativo, reposição inteligente e integração direta de estoque.
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Slide 2: Os 4 Pilares da Solução */}
                    <div className="w-screen h-full snap-start flex items-center justify-center px-16 relative">
                      <div className="max-w-5xl w-full space-y-8">
                        <div className="text-left space-y-2">
                          <h2 className="text-3xl font-mono text-emerald-400 uppercase tracking-widest">Os Quatro Pilares do Em Casa</h2>
                          <p className="text-gray-400 font-light font-mono text-xs">// Como garantimos faturamento livre de intermediários</p>
                        </div>
                        
                        <motion.div 
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.2 }}
                          variants={cardContainerVariant}
                          className="grid md:grid-cols-2 gap-6"
                        >
                          {/* Pilar 1 */}
                          <motion.div 
                            variants={cardItemVariant}
                            whileHover={{ scale: 1.01, borderColor: "rgba(16,185,129,0.3)" }}
                            className="bg-white/5 border border-white/5 p-6 rounded-xl flex items-start space-x-4 transition-colors"
                          >
                            <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400 text-2xl">💵</div>
                            <div className="space-y-1">
                              <h4 className="text-lg font-mono text-white">Custo zero para o parceiro</h4>
                              <p className="text-gray-400 text-sm font-light leading-relaxed">
                                Sem mensalidade, sem comissão e sem taxas de adesão. A receita do Em Casa vem de taxas de serviço e entrega pagas pelo consumidor final.
                              </p>
                            </div>
                          </motion.div>

                          {/* Pilar 2 */}
                          <motion.div 
                            variants={cardItemVariant}
                            whileHover={{ scale: 1.01, borderColor: "rgba(16,185,129,0.3)" }}
                            className="bg-white/5 border border-white/5 p-6 rounded-xl flex items-start space-x-4 transition-colors"
                          >
                            <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400 text-2xl">⚡</div>
                            <div className="space-y-1">
                              <h4 className="text-lg font-mono text-white">Repasse Instantâneo no Caixa (PIX)</h4>
                              <p className="text-gray-400 text-sm font-light leading-relaxed">
                                Sem repasse demorado. Na finalização do carrinho, o caixa gera o QR Code e o Em Casa paga a compra imediatamente no ato.
                              </p>
                            </div>
                          </motion.div>

                          {/* Pilar 3 */}
                          <motion.div 
                            variants={cardItemVariant}
                            whileHover={{ scale: 1.01, borderColor: "rgba(16,185,129,0.3)" }}
                            className="bg-white/5 border border-white/5 p-6 rounded-xl flex items-start space-x-4 transition-colors"
                          >
                            <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400 text-2xl">🛒</div>
                            <div className="space-y-1">
                              <h4 className="text-lg font-mono text-white">Operação Completa por nossa conta</h4>
                              <p className="text-gray-400 text-sm font-light leading-relaxed">
                                Quem separa os itens na loja são nossos compradores treinados (shoppers). E nossa rede logística parceira faz a entrega na casa do cliente.
                              </p>
                            </div>
                          </motion.div>

                          {/* Pilar 4 */}
                          <motion.div 
                            variants={cardItemVariant}
                            whileHover={{ scale: 1.01, borderColor: "rgba(16,185,129,0.3)" }}
                            className="bg-white/5 border border-white/5 p-6 rounded-xl flex items-start space-x-4 transition-colors"
                          >
                            <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400 text-2xl">🔄</div>
                            <div className="space-y-1">
                              <h4 className="text-lg font-mono text-white">Substituições Inteligentes</h4>
                              <p className="text-gray-400 text-sm font-light leading-relaxed">
                                Se faltar algum item na gôndola, o aplicativo notifica o cliente e sugere alternativas em tempo real, evitando perdas de vendas no PDV.
                              </p>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Slide 3: Flowchart Animado em 4 Passos */}
                    <div className="w-screen h-full snap-start flex items-center justify-center px-16 relative">
                      <div className="max-w-5xl w-full space-y-10">
                        <div className="text-center space-y-2">
                          <h3 className="text-2xl font-mono text-emerald-400 uppercase tracking-widest">Fluxo Operacional Simples</h3>
                          <p className="text-gray-400 font-light">Como funciona a jornada de uma venda do início ao fim.</p>
                        </div>

                        <div className="relative">
                          {/* Animated connector line (SVG) */}
                          <div className="absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-white/5 hidden md:block z-0">
                            <motion.div 
                              initial={{ width: "0%" }}
                              whileInView={{ width: "100%" }}
                              viewport={{ once: false }}
                              transition={{ duration: 1.5, ease: "easeInOut" }}
                              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                            />
                          </div>

                          <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            variants={cardContainerVariant}
                            className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10"
                          >
                            {/* Step 1 */}
                            <motion.div 
                              variants={cardItemVariant} 
                              className="bg-white/5 border border-white/5 rounded-xl p-5 relative space-y-4 hover:border-emerald-500/20 transition-all duration-300"
                            >
                              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-mono font-bold text-black shadow-[0_0_15px_rgba(16,185,129,0.5)]">1</div>
                              <h4 className="font-mono text-sm uppercase text-white font-semibold">Cliente Compra</h4>
                              <p className="text-gray-400 text-xs font-light leading-relaxed">
                                O consumidor monta o carrinho no aplicativo Em Casa selecionando o catálogo de produtos do seu supermercado parceiro.
                              </p>
                            </motion.div>

                            {/* Step 2 */}
                            <motion.div 
                              variants={cardItemVariant} 
                              className="bg-white/5 border border-white/5 rounded-xl p-5 relative space-y-4 hover:border-emerald-500/20 transition-all duration-300"
                            >
                              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-mono font-bold text-black shadow-[0_0_15px_rgba(16,185,129,0.5)]">2</div>
                              <h4 className="font-mono text-sm uppercase text-white font-semibold">Shopper Separa</h4>
                              <p className="text-gray-400 text-xs font-light leading-relaxed">
                                Um profissional treinado do Em Casa se dirige ao supermercado e realiza a separação física de cada produto com todo o cuidado.
                              </p>
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div 
                              variants={cardItemVariant} 
                              className="bg-white/5 border border-white/5 rounded-xl p-5 relative space-y-4 hover:border-emerald-500/20 transition-all duration-300"
                            >
                              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-mono font-bold text-black shadow-[0_0_15px_rgba(16,185,129,0.5)]">3</div>
                              <h4 className="font-mono text-sm uppercase text-white font-semibold">PIX no Caixa</h4>
                              <p className="text-gray-400 text-xs font-light leading-relaxed">
                                O shopper passa os produtos no PDV da loja. A compra gera um QR Code e o Em Casa realiza o PIX imediato para a conta do supermercado.
                              </p>
                            </motion.div>

                            {/* Step 4 */}
                            <motion.div 
                              variants={cardItemVariant} 
                              className="bg-white/5 border border-white/5 rounded-xl p-5 relative space-y-4 hover:border-emerald-500/20 transition-all duration-300"
                            >
                              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-mono font-bold text-black shadow-[0_0_15px_rgba(16,185,129,0.5)]">4</div>
                              <h4 className="font-mono text-sm uppercase text-white font-semibold">Entrega Feita</h4>
                              <p className="text-gray-400 text-xs font-light leading-relaxed">
                                A sacola de compras com cupom fiscal é entregue ao entregador parceiro do Em Casa, que realiza o transporte e entrega na porta do cliente.
                              </p>
                            </motion.div>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Slide 4: Painel de Dados & Insights Interativo */}
                    <div className="w-screen h-full snap-start flex items-center justify-center px-16 relative">
                      <div className="max-w-6xl w-full grid lg:grid-cols-12 gap-8 items-stretch h-[80vh]">
                        {/* Left Column: Context & Controls */}
                        <div className="lg:col-span-4 flex flex-col justify-between space-y-6 py-2">
                          <div className="space-y-4">
                            <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase block">// INTELIGÊNCIA OPERACIONAL</span>
                            <h3 className="text-3xl font-mono text-white tracking-wider font-light">
                              PAINEL DE <span className="text-emerald-400 font-cursive lowercase text-4xl block">dados & insights</span>
                            </h3>
                            <p className="text-gray-400 font-light text-sm leading-relaxed">
                              Diferente dos sistemas tradicionais, nossa plataforma oferece inteligência em tempo real. Identifique produtos sem giro, alertas de ruptura na gôndola e o comportamento de busca do cliente.
                            </p>
                          </div>

                          {/* Interactive simulation actions */}
                          <div className="space-y-4 bg-white/[0.02] border border-white/10 rounded-xl p-4">
                            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest">Painel de Testes do Lojista</h4>
                            
                            <button
                              onClick={simulateSale}
                              className="w-full flex items-center justify-center gap-3 p-3.5 rounded-lg border border-emerald-500/20 bg-emerald-950/10 hover:bg-emerald-500/25 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] text-emerald-400 transition-all cursor-pointer group"
                            >
                              <span className="text-xl group-hover:scale-110 transition-transform">🛒</span>
                              <span className="text-xs font-mono font-bold uppercase tracking-wider">Simular Novo Pedido</span>
                            </button>
                          </div>

                          {/* Cyberpunk terminal logs */}
                          <div className="bg-black border border-white/5 rounded-xl p-3 flex-1 flex flex-col min-h-[120px] max-h-[180px] overflow-hidden">
                            <div className="flex items-center justify-between border-b border-white/5 pb-1.5 mb-2 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                              <span>System Logs</span>
                              <span className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                                LIVE
                              </span>
                            </div>
                            <div className="flex-1 font-mono text-[10px] text-emerald-400/80 overflow-y-auto space-y-1.5 pr-2 select-text scrollbar-thin">
                              {terminalLogs.map((log, index) => (
                                <div key={index} className="leading-tight break-all border-l-2 border-emerald-500/20 pl-1.5">
                                  {log}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right Column: High fidelity cyberpunk dashboard panel */}
                        <div className="lg:col-span-8 flex flex-col bg-neutral-950/80 border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.05)] overflow-hidden">
                          {/* Window header */}
                          <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10 select-none">
                            <div className="flex space-x-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                            </div>
                            <span className="font-mono text-[10px] text-gray-400 tracking-wider">MERCADO_INSIGHTS_UPLINK_v1.0.9</span>
                            <span className="font-mono text-[9px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">ESTADO: CONECTADO</span>
                          </div>

                          {/* KPIs Header bar */}
                          <div className="grid grid-cols-3 border-b border-white/10 bg-black/40">
                            <div className="p-4 border-r border-white/10 space-y-1">
                              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">FATURAMENTO HOJE</span>
                              <div className="text-xl font-mono font-bold text-white flex items-baseline gap-1">
                                {formatBRL(dashboardRevenue)}
                                <span className="text-[9px] text-emerald-400 font-light">+12.4%</span>
                              </div>
                            </div>
                            <div className="p-4 border-r border-white/10 space-y-1">
                              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">PEDIDOS ENTREGUES</span>
                              <div className="text-xl font-mono font-bold text-emerald-400">
                                {dashboardOrders} <span className="text-[9px] text-gray-500 font-light">pedidos</span>
                              </div>
                            </div>
                            <div className="p-4 space-y-1">
                              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">ALERTAS EM ABERTO</span>
                              <div className="text-xl font-mono font-bold text-red-500 flex items-center gap-1.5">
                                <span>3 itens</span>
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                              </div>
                            </div>
                          </div>

                          {/* Controls bar (Search & Tab triggers) */}
                          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center p-3 border-b border-white/10 gap-3 bg-black/20">
                            {/* Tabs */}
                            <div className="flex space-x-1 font-mono text-xs">
                              <button
                                onClick={() => setDashboardTab('outflow')}
                                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                                  dashboardTab === 'outflow'
                                    ? 'bg-emerald-500 text-black font-bold'
                                    : 'text-gray-400 hover:text-white bg-white/5'
                                }`}
                              >
                                [01_SAÍDAS]
                              </button>
                              <button
                                onClick={() => setDashboardTab('inventory')}
                                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                                  dashboardTab === 'inventory'
                                    ? 'bg-red-500 text-white font-bold'
                                    : 'text-gray-400 hover:text-white bg-white/5'
                                }`}
                              >
                                [02_ESTOQUE]
                              </button>
                              <button
                                onClick={() => setDashboardTab('trends')}
                                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                                  dashboardTab === 'trends'
                                    ? 'bg-purple-500 text-white font-bold'
                                    : 'text-gray-400 hover:text-white bg-white/5'
                                }`}
                              >
                                [03_BUSCAS]
                              </button>
                            </div>

                            {/* Search input */}
                            <div className="relative">
                              <input
                                type="text"
                                placeholder="PROMPT_PESQUISA_> "
                                value={dashboardSearch}
                                onChange={(e) => setDashboardSearch(e.target.value)}
                                className="bg-black border border-white/10 rounded px-3 py-1.5 text-xs font-mono text-emerald-400 focus:outline-none focus:border-emerald-500 w-full sm:w-48 placeholder:text-gray-600 transition-colors"
                              />
                            </div>
                          </div>

                          {/* Dashboard content area */}
                          <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
                            {/* Tab 1: Outflow (Sold) */}
                            {dashboardTab === 'outflow' && (
                              <div className="space-y-2">
                                <div className="grid grid-cols-12 text-[10px] font-mono text-gray-500 uppercase tracking-widest px-2 pb-1 border-b border-white/5">
                                  <span className="col-span-5">Produto</span>
                                  <span className="col-span-3 text-right">Saídas</span>
                                  <span className="col-span-2 text-right">Receita</span>
                                  <span className="col-span-2 text-right">Última</span>
                                </div>
                                {soldItems
                                  .filter(item => item.name.toLowerCase().includes(dashboardSearch.toLowerCase()))
                                  .map((item) => (
                                    <div key={item.id} className="grid grid-cols-12 items-center text-xs font-mono py-2.5 px-2 hover:bg-white/5 rounded border border-transparent hover:border-white/5 transition-all">
                                      <div className="col-span-5 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                                        <span className="text-white truncate font-sans">{item.name}</span>
                                      </div>
                                      <span className="col-span-3 text-right text-emerald-400 font-bold">{item.salesCount}x</span>
                                      <span className="col-span-2 text-right text-gray-300">{formatBRL(item.revenue)}</span>
                                      <span className="col-span-2 text-right text-gray-500 text-[10px]">{item.lastSold}</span>
                                    </div>
                                  ))}
                              </div>
                            )}

                            {/* Tab 2: Inventory Stock Alerts */}
                            {dashboardTab === 'inventory' && (
                              <div className="space-y-3">
                                {stockAlerts
                                  .filter(item => item.name.toLowerCase().includes(dashboardSearch.toLowerCase()))
                                  .map((item) => (
                                    <div key={item.id} className="p-3 border border-red-500/20 bg-red-950/5 rounded-xl space-y-3 hover:border-red-500/40 transition-colors">
                                      {/* Alert header */}
                                      <div className="flex justify-between items-center text-xs font-mono">
                                        <div className="flex items-center gap-2">
                                          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                          <span className="text-white font-bold font-sans">{item.name}</span>
                                        </div>
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                          item.status === 'FALTA' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                                        }`}>
                                          {item.status}
                                        </span>
                                      </div>

                                      {/* Progress Stock bar */}
                                      <div className="space-y-1.5">
                                        <div className="flex justify-between text-[10px] font-mono text-gray-500">
                                          <span>Estoque Atual: {item.stock} / {item.minStock} (Mínimo)</span>
                                          <span>Substituições Efetuadas: {item.replacedCount}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                          <div 
                                            className="h-full bg-red-500" 
                                            style={{ width: `${Math.max(4, (item.stock / item.minStock) * 100)}%` }}
                                          />
                                        </div>
                                      </div>

                                      {/* AI Replacement Offer info */}
                                      <div className="p-2 border border-purple-500/20 bg-purple-950/10 rounded flex justify-between items-center gap-2">
                                        <div className="space-y-0.5">
                                          <span className="text-[9px] font-mono text-purple-400 block tracking-wider">// IA RECOMENDAÇÃO DE SUBSTITUIÇÃO</span>
                                          <span className="text-xs text-white font-sans font-medium">{item.replacement}</span>
                                          <span className="text-[10px] font-mono text-gray-500 block">Estoque do Substituto: {item.replacementStock} unidades</span>
                                        </div>
                                        <div className="text-right">
                                          <span className="text-[10px] font-mono font-bold bg-purple-500/20 text-purple-400 px-2 py-1 rounded">ATIVO NO APP</span>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            )}

                            {/* Tab 3: Demand Trends (Searches) */}
                            {dashboardTab === 'trends' && (
                              <div className="space-y-3">
                                <div className="grid grid-cols-12 text-[10px] font-mono text-gray-500 uppercase tracking-widest px-2 pb-1 border-b border-white/5">
                                  <span className="col-span-6">Termo de Busca</span>
                                  <span className="col-span-3 text-right">Buscas (Semana)</span>
                                  <span className="col-span-3 text-right">Tendência</span>
                                </div>
                                {searchedItems
                                  .filter(item => item.name.toLowerCase().includes(dashboardSearch.toLowerCase()))
                                  .map((item) => (
                                    <div key={item.id} className="grid grid-cols-12 items-center text-xs font-mono py-2.5 px-2 hover:bg-white/5 rounded border border-transparent hover:border-white/5 transition-all">
                                      <div className="col-span-6 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                        <span className="text-white font-sans">{item.name}</span>
                                      </div>
                                      <span className="col-span-3 text-right text-white font-bold">{item.searches}</span>
                                      <span className="col-span-3 text-right text-emerald-400 font-bold">{item.growth}</span>
                                    </div>
                                  ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ==================== CHAPTER IV: PARCERIA & SUCESSO ==================== */}
                {activePanel.chapterNumber === 4 && (
                  <div className="flex h-full min-w-[300%]">
                    {/* Slide 1: Cover */}
                    <div className="w-screen h-full snap-start flex items-center justify-center px-12 relative">
                      <div className="max-w-4xl text-center space-y-6">
                        <motion.span 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-emerald-400 font-mono text-sm tracking-widest block uppercase"
                        >
                          Capítulo IV
                        </motion.span>
                        <motion.h1 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 0.1 }}
                          className="text-5xl md:text-7xl font-mono tracking-wider font-light text-white"
                        >
                          PARCERIA & <span className="font-cursive lowercase text-emerald-400 text-6xl md:text-8xl block md:inline md:ml-4">sucesso</span>
                        </motion.h1>
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
                        >
                          Uma via de mão dupla. O que o Em Casa precisa da sua loja e, o mais importante, o impacto positivo real nas suas vendas.
                        </motion.p>
                        <div className="pt-8 flex justify-center items-center gap-3 text-white/40 text-xs font-mono">
                          <span>role para o lado</span>
                          <span>→</span>
                        </div>
                      </div>
                    </div>

                    {/* Slide 2: O que Pedimos vs O que Você Ganha */}
                    <div className="w-screen h-full snap-start flex items-center justify-center px-16 relative">
                      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12">
                        {/* Column Left: O que Pedimos */}
                        <motion.div 
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, amount: 0.3 }}
                          transition={{ duration: 0.8 }}
                          className="space-y-6 bg-white/[0.01] border border-white/5 rounded-2xl p-8 backdrop-blur-sm"
                        >
                          <h3 className="text-xl font-mono text-gray-400 uppercase tracking-widest flex items-center gap-2">
                            <span>📋</span> O que pedimos
                          </h3>
                          <div className="w-8 h-[2px] bg-gray-500" />
                          <ul className="space-y-4 text-gray-300 font-light text-sm">
                            <li className="flex items-start gap-2">
                              <span className="text-emerald-500 font-bold">•</span>
                              <span>Lista de produtos cadastrados com preços iguais aos da loja física.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-emerald-500 font-bold">•</span>
                              <span>Promoções vigentes informadas antecipadamente para atualização do catálogo.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-emerald-500 font-bold">•</span>
                              <span>Um ponto de contato no mercado para coordenação operacional diária.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-emerald-500 font-bold">•</span>
                              <span>Acordo de fluxo simples de recebimento via PIX QR Code direto no caixa.</span>
                            </li>
                          </ul>
                        </motion.div>

                        {/* Column Right: O que Você Ganha */}
                        <motion.div 
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, amount: 0.3 }}
                          transition={{ duration: 0.8 }}
                          className="space-y-6 bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-8 backdrop-blur-md shadow-[0_0_50px_rgba(16,185,129,0.15)] relative overflow-hidden"
                        >
                          {/* Subtle neon gradient background bar */}
                          <div className="absolute -right-20 -top-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-[80px]" />
                          
                          <h3 className="text-xl font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                            <span>💎</span> O que você ganha
                          </h3>
                          <div className="w-12 h-[2px] bg-emerald-500" />
                          <ul className="space-y-4 text-white font-light text-sm relative z-10">
                            <li className="flex items-start gap-2">
                              <span className="text-emerald-400 font-bold">✓</span>
                              <span><strong>Faturamento Adicional:</strong> Um canal digital de vendas sem mensalidades.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-emerald-400 font-bold">✓</span>
                              <span><strong>PIX Instantâneo:</strong> Dinheiro das vendas repassado na hora, direto no caixa.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-emerald-400 font-bold">✓</span>
                              <span><strong>Novos Clientes:</strong> Alcance e venda para consumidores que não frequentavam a loja física.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-emerald-400 font-bold">✓</span>
                              <span><strong>Operação Sem Dor de Cabeça:</strong> Zero gerenciamento de frotas de entrega ou motoboys.</span>
                            </li>
                          </ul>
                        </motion.div>
                      </div>
                    </div>

                    {/* Slide 3: CTA & Fechamento */}
                    <div className="w-screen h-full snap-start flex items-center justify-center px-16 relative">
                      <div className="max-w-4xl w-full text-center space-y-10">
                        <div className="space-y-4">
                          <span className="text-emerald-400 font-mono text-sm tracking-widest block uppercase">Próximo Passo</span>
                          <h2 className="text-4xl md:text-6xl font-mono tracking-wider font-light text-white leading-tight">
                            Pronto para vender mais <br className="hidden md:block"/>
                            <span className="font-cursive lowercase text-emerald-400 text-5xl md:text-7xl block md:inline md:ml-2">sem pagar mais?</span>
                          </h2>
                          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
                            Agende uma conversa de 15 minutos para definirmos o cronograma de cadastro e inclusão do seu mercado no app Em Casa.
                          </p>
                        </div>

                        {/* Contacts & CTA Button with glow pulse animation */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto grid md:grid-cols-2 gap-8 items-center backdrop-blur-md">
                          <div className="text-left space-y-4 font-light text-sm">
                            <h4 className="font-mono text-white text-xs uppercase tracking-widest">Contato Comercial</h4>
                            <div className="space-y-2">
                              <p className="flex items-center gap-2">
                                <span className="text-emerald-400">📞</span>
                                <span>(31) 9133-8205 (Rodrigo)</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="text-emerald-400">✉</span>
                                <span>parceiros@emcasa.delivery</span>
                              </p>
                            </div>
                          </div>

                          <div className="space-y-3 relative z-10">
                            <motion.button 
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.98 }}
                              animate={{ 
                                boxShadow: [
                                  "0 0 15px rgba(16, 185, 129, 0.3)",
                                  "0 0 30px rgba(16, 185, 129, 0.6)",
                                  "0 0 15px rgba(16, 185, 129, 0.3)"
                                ]
                              }}
                              transition={{ 
                                repeat: Infinity, 
                                duration: 2, 
                                ease: "easeInOut" 
                              }}
                              className="w-full bg-emerald-500 text-black font-mono font-bold py-3 px-6 rounded-lg text-sm transition-all cursor-pointer"
                            >
                              QUERO COMEÇAR
                            </motion.button>
                            <button className="w-full bg-transparent hover:bg-white/5 border border-white/20 text-white font-mono py-3 px-6 rounded-lg text-sm transition-all cursor-pointer">
                              SOLICITAR DEMONSTRAÇÃO
                            </button>
                          </div>
                        </div>

                        <div className="text-xs text-white/30 font-mono tracking-[0.2em] uppercase pt-4">
                          EM CASA. NÓS ENTREGAMOS, VOCÊ FATURA.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Bottom Slide Indicators */}
          {activePanel && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center space-x-2.5 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
              {Array.from({ length: getSlideCount(activePanel.chapterNumber) }).map((_, idx) => {
                const isActive = activeSlideIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      if (scrollContainerRef.current) {
                        const clientWidth = scrollContainerRef.current.clientWidth;
                        scrollContainerRef.current.scrollTo({
                          left: idx * clientWidth,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'w-6 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]' 
                        : 'w-1.5 bg-white/30 hover:bg-white/50'
                    }`}
                    style={{
                      backgroundColor: isActive ? (
                        activePanel.chapterNumber === 2 ? '#ef4444' : // Red
                        activePanel.chapterNumber === 4 ? '#f59e0b' : // Amber
                        '#10b981' // Emerald
                      ) : undefined,
                      boxShadow: isActive ? (
                        activePanel.chapterNumber === 2 ? '0 0 8px rgba(239,68,68,0.5)' :
                        activePanel.chapterNumber === 4 ? '0 0 8px rgba(245,158,11,0.5)' :
                        '0 0 8px rgba(16,185,129,0.5)'
                      ) : undefined
                    }}
                    aria-label={`Ir para slide ${idx + 1}`}
                  />
                );
              })}
            </div>
          )}

          {/* Chapters Quick Directory Overlay navigation */}
          {activePanel && (
            <div className="absolute bottom-6 right-6 z-50 flex items-center space-x-2 bg-black/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-mono text-white/50">
              {panels.map((p, idx) => (
                <button
                  key={p.number}
                  className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                    displayPanel === idx ? 'text-emerald-400 font-bold bg-emerald-500/10' : 'hover:text-white'
                  }`}
                  onClick={() => {
                    setDisplayPanel(idx);
                    if (scrollContainerRef.current) {
                      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'auto' });
                    }
                    setActiveSlideIndex(0);
                  }}
                >
                  {p.number}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Main Entrance Animation styles (Cover overlay fallback) */}
      <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center opacity-0">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>
    </div>
  );
};

export default EmCasaPresentationPage;
