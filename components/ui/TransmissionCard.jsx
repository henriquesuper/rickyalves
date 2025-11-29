"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import HackerText from "./HackerText";

const TransmissionCard = ({ id, name, role, message, delay = 0 }) => {
  const [isDecrypted, setIsDecrypted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsDecrypted(true)}
      className="relative group w-full bg-black/40 border border-white/10 hover:border-green-500/50 p-6 rounded-lg overflow-hidden transition-colors duration-300"
    >
      {/* Background Scanline */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20 pointer-events-none"></div>
      
      {/* Header: ID and Audio Wave */}
      <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/30">
             <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-mono text-green-500 tracking-widest">INCOMING_TRANSMISSION</span>
            <span className="text-[10px] font-mono text-neutral-500">ID: COMM-{id.toString().padStart(3, '0')}</span>
          </div>
        </div>
        {/* Fake Audio Waveform */}
        <div className="flex gap-0.5 items-end h-4">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className="w-1 bg-green-500/50" 
              style={{ 
                height: `${((id * 31 + i * 17) % 80) + 20}%`,
                animation: `pulse 0.5s infinite ${i * 0.1}s alternate`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content: Decrypting Message */}
      <div className="relative min-h-[100px]">
        
        {/* Sender Info */}
        <div className="mb-3">
           <h3 className="text-lg font-bold text-white font-mono">
             {isDecrypted ? <HackerText text={name} /> : "UNKNOWN_SENDER"}
           </h3>
           <p className="text-xs text-green-400 font-mono">
             {isDecrypted ? <HackerText text={role} /> : "ENCRYPTED_ROLE"}
           </p>
        </div>

        {/* Message Body */}
        <div className="font-mono text-sm leading-relaxed text-neutral-300">
           {isDecrypted ? (
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.5 }}
             >
               <span className="text-green-500 mr-2">{">"}</span>
               {message}
               <span className="animate-pulse text-green-500 ml-1">_</span>
             </motion.div>
           ) : (
             <div className="text-neutral-700 break-all animate-pulse">
               {message.split('').map(() => "█").join('').substring(0, Math.min(message.length, 100))}...
             </div>
           )}
        </div>

      </div>

      {/* Footer Status */}
      <div className="mt-4 pt-2 border-t border-white/5 flex justify-between text-[10px] font-mono text-neutral-600">
        <span>STATUS: {isDecrypted ? "DECRYPTED" : "LOCKED"}</span>
        <span>SIGNAL: 100%</span>
      </div>

    </motion.div>
  );
};

export default TransmissionCard;
