"use client";
import React, { useState, useEffect } from "react";
import HackerText from "../ui/HackerText";

const SystemHeader = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getUTCHours().toString().padStart(2, '0');
      const minutes = now.getUTCMinutes().toString().padStart(2, '0');
      const seconds = now.getUTCSeconds().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4 flex justify-between items-start pointer-events-none mix-blend-difference">
      
      {/* Root Access / Logo */}
      <button 
        onClick={scrollToTop}
        className="pointer-events-auto group flex items-center gap-2 font-mono text-sm text-white/80 hover:text-green-400 transition-colors bg-black/20 backdrop-blur-sm px-3 py-1 rounded border border-white/5 hover:border-green-500/30"
      >
        <span className="text-green-500 font-bold text-lg">~/</span>
        <span className="hidden md:inline-block">
          <HackerText text="RICKY_ALVES" />
        </span>
      </button>

      {/* System Status / Clock */}
      <div className="flex flex-col items-end gap-1">
        <div className="flex items-center gap-2 font-mono text-xs text-green-500 bg-black/20 backdrop-blur-sm px-2 py-1 rounded border border-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_#22c55e]"></div>
          <span>SYS_ONLINE</span>
        </div>
        <div className="font-mono text-xs text-neutral-500">
          {time} UTC
        </div>
      </div>

    </div>
  );
};

export default SystemHeader;