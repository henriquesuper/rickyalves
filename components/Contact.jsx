'use client';

import React from "react";
import HackerText from "./ui/HackerText";
import { motion } from "framer-motion";
import LatencySimulator from "./ui/LatencySimulator";

const Contact = () => {
  return (
    <div className="flex flex-col items-center py-10 px-4 w-full max-w-4xl mx-auto relative z-10">

      {/* HUD Container */}
      <div className="relative w-full p-1 bg-gradient-to-r from-transparent via-green-500/20 to-transparent rounded-xl">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 clip-path-polygon"></div>

        <div className="relative z-10 flex flex-col items-center p-10 md:p-16 text-center border-y border-white/5 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,0,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]">

          {/* Signal Strength Indicator */}
          <div className="flex gap-1 mb-8 opacity-70">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className={`w-2 h-6 rounded-sm ${i > 1 ? 'bg-green-500' : 'bg-green-900'} animate-pulse`} style={{ animationDelay: `${i * 0.1}s` }}></div>
            ))}
            <span className="ml-2 font-mono text-xs text-green-500 self-end tracking-widest">SIGNAL: STRONG</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono text-white tracking-tighter">
            <HackerText text="> Establish_Uplink" />
            <span className="animate-pulse text-green-500">_</span>
          </h2>

          <p className="text-lg md:text-xl mb-10 text-neutral-400 max-w-2xl leading-relaxed font-mono">
            <span className="text-green-500 mr-2">::</span>
            Secure channel available for high-priority inquiries.
            <br className="hidden md:block" />
            Initiate handshake for collaboration protocols.
            <span className="text-green-500 ml-2">::</span>
          </p>

          {/* Holographic Button */}
          <motion.a
            href="mailto:hello@rickyalves.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex h-16 overflow-hidden rounded-none p-[1px] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-0 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#22c55e_50%,#000000_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center bg-black px-8 py-1 text-base font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-black/80 group-hover:text-green-400 border border-green-500/30">
              <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">[</span>
              INITIATE_TRANSMISSION
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">]</span>
            </span>
          </motion.a>

          <div className="mt-8 flex items-center gap-4 text-xs font-mono text-neutral-600">
            <span>ENCRYPTION: AES-256</span>
            <span>•</span>
            <LatencySimulator />
          </div>

        </div>

        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500/50 -translate-x-1 -translate-y-1"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-500/50 translate-x-1 -translate-y-1"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500/50 -translate-x-1 translate-y-1"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500/50 translate-x-1 translate-y-1"></div>
      </div>
    </div>
  )
}

export default Contact;