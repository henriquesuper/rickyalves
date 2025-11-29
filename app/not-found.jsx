'use client';

import Link from 'next/link';
import MatrixRain from '@/components/ui/MatrixRain';
import TerminalWindow from '@/components/ui/TerminalWindow';
import HackerText from '@/components/ui/HackerText';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center font-mono text-white selection:bg-green-500/30">
      
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <MatrixRain />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl px-4">
        <TerminalWindow title="root@ricky-os:~/errors/404">
          <div className="p-8 flex flex-col items-center text-center space-y-8">
            
            {/* Error Code */}
            <div className="space-y-2">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-red-500 glitch-text">
                <HackerText text="404" />
              </h1>
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
            </div>

            {/* Error Message */}
            <div className="space-y-4 w-full">
              <h2 className="text-xl md:text-2xl text-green-400 tracking-widest">
                {">"} <HackerText text="SIGNAL_LOST" />
              </h2>
              
              <div className="text-left bg-black/50 p-4 rounded border border-white/10 font-mono text-sm md:text-base text-neutral-400 space-y-2 shadow-inner">
                <div className="flex gap-2">
                  <span className="text-red-500">✖</span>
                  <span>Locating construct... <span className="text-red-500">[FAILED]</span></span>
                </div>
                <div className="flex gap-2">
                  <span className="text-red-500">✖</span>
                  <span>Pinging host... <span className="text-red-500">[TIMEOUT]</span></span>
                </div>
                <div className="flex gap-2">
                  <span className="text-yellow-500">⚠</span>
                  <span>System integrity... <span className="text-yellow-500">[CRITICAL]</span></span>
                </div>
                <div className="flex gap-2 mt-4 border-t border-white/10 pt-2">
                  <span className="text-green-500">{">"}</span>
                  <span className="animate-pulse">Awaiting manual reboot_</span>
                </div>
              </div>
            </div>

            {/* Return Button */}
            <Link href="/" className="w-full max-w-sm">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex h-14 w-full overflow-hidden rounded-none p-[1px] focus:outline-none"
              >
                <span className="absolute inset-0 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#22c55e_50%,#000000_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center bg-black px-8 py-1 text-base font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-black/80 group-hover:text-green-400 border border-green-500/30">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">[</span>
                  RETURN_TO_BASE
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">]</span>
                </span>
              </motion.div>
            </Link>

          </div>
        </TerminalWindow>

        {/* Footer Decoration */}
        <div className="mt-8 flex justify-center gap-8 text-xs text-neutral-600 font-mono">
          <span>ERR_CODE: ID_10_T</span>
          <span>•</span>
          <span>MEMORY_DUMP: 0x000000</span>
        </div>
      </div>

    </main>
  );
}