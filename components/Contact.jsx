'use client';

import React, { useState, useEffect } from "react";
import HackerText from "./ui/HackerText";
import { motion } from "framer-motion";
import { getLAStatus } from "@/lib/la-status";

const Contact = () => {
  const [isSabbath, setIsSabbath] = useState(false);

  useEffect(() => {
    const check = () => setIsSabbath(getLAStatus().mode === "sabbath");
    check();
    const interval = setInterval(check, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center px-4 w-full max-w-4xl mx-auto relative z-10">

      {/* HUD Container */}
      <div className="relative w-full p-1 bg-linear-to-r from-transparent via-green-500/20 to-transparent rounded-xl">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 clip-path-polygon"></div>

        <div className="relative z-10 flex flex-col items-center px-4 py-10 md:p-16 text-center border-y border-white/5 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,0,0.02)_50%,transparent_75%,transparent_100%)] bg-size-[20px_20px]">

          <h2 className="text-xl sm:text-2xl md:text-5xl font-bold mb-6 font-mono text-white tracking-tighter">
            <HackerText text="> Establish_Uplink" />
            <span className="animate-pulse text-green-500">_</span>
          </h2>

          <p className="text-base md:text-xl mb-10 text-neutral-400 max-w-2xl leading-relaxed font-mono">
            <span className="text-green-500 mr-2">::</span>
            Secure channel available for high-priority inquiries.{" "}
            <br className="hidden md:block" />
            Initiate handshake for collaboration protocols.
            <span className="text-green-500 ml-2">::</span>
          </p>

          {/* Holographic Button */}
          <motion.a
            href="mailto:hello@rickyalves.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex h-16 overflow-hidden rounded-none p-px focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          >
            <span className="absolute inset-0 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#22c55e_50%,#000000_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center bg-black px-5 md:px-8 py-1 font-mono text-sm md:text-base font-bold tracking-wider text-white backdrop-blur-3xl transition-all group-hover:bg-black/80 group-hover:text-green-400 border border-green-500/30">
              <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">[</span>
              INITIATE_TRANSMISSION
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">]</span>
            </span>
          </motion.a>

          <a
            href="mailto:hello@rickyalves.com"
            className="mt-8 text-sm font-mono text-neutral-500 hover:text-green-400 transition-colors"
          >
            hello@rickyalves.com
          </a>

          {isSabbath && (
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-violet-400/90">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
              SABBATH_MODE :: messages received — replies resume after sundown
            </div>
          )}

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