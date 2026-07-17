"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const CyberGlitchImage = ({ src, alt, width, height, className }) => {
  return (
    <div className={cn("relative group overflow-hidden rounded-sm border border-green-500/30 bg-black", className)}>

      {/* Container for the image and effects */}
      <div className="relative w-full h-full overflow-hidden">

        {/* Base Image - high-contrast B&W, revealed to full color on hover */}
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
          className="relative z-10 w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700"
        />

        {/* Phosphor tint - subtle green colorize, fades out on hover */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-green-400 mix-blend-color opacity-30 group-hover:opacity-0 transition-opacity duration-700"></div>
        <div className="absolute inset-0 z-20 pointer-events-none bg-green-950 mix-blend-multiply opacity-25 group-hover:opacity-0 transition-opacity duration-700"></div>

        {/* Glitch Layers - hover only */}
        <div className="absolute inset-0 z-30 opacity-0 mix-blend-color-dodge animate-glitch-1 pointer-events-none">
          <Image src={src} alt="" width={width} height={height} className="w-full h-full object-cover opacity-60 -translate-x-2 filter blur-[1px]" />
        </div>
        <div className="absolute inset-0 z-30 opacity-0 mix-blend-color-dodge animate-glitch-2 pointer-events-none">
          <Image src={src} alt="" width={width} height={height} className="w-full h-full object-cover opacity-60 translate-x-2 filter blur-[1px]" />
        </div>

        {/* Subtle scanlines - barely-there texture */}
        <div className="absolute inset-0 z-40 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] bg-repeat opacity-20"></div>

        {/* Scanner Bar - hover only */}
        <div className="absolute inset-0 z-40 pointer-events-none bg-gradient-to-b from-transparent via-green-500/20 to-transparent h-[10%] w-full opacity-0 group-hover:opacity-100 animate-scan"></div>

        {/* Minimal HUD */}
        <div className="absolute inset-0 z-50 pointer-events-none p-4 flex flex-col justify-between">

          {/* Top bar: one gag only */}
          <div className="flex justify-between items-start text-[10px] font-mono font-bold tracking-widest">
            <span className="text-green-500/80 bg-black/40 px-1.5 py-0.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              LIVE_FEED
            </span>
            <span className="text-green-500/0 group-hover:text-green-400/90 bg-black/0 group-hover:bg-black/40 px-1.5 py-0.5 transition-all duration-300">
              SIGNAL_ACQUIRED
            </span>
          </div>

          {/* Bottom bar: coords only */}
          <div className="flex justify-end text-[10px] font-mono text-green-500/60 tracking-widest">
            <span className="bg-black/40 px-1.5 py-0.5">34.05°N 118.24°W</span>
          </div>

        </div>

        {/* Corner brackets */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-green-500/50 group-hover:border-green-400 z-50 pointer-events-none transition-colors duration-300"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-green-500/50 group-hover:border-green-400 z-50 pointer-events-none transition-colors duration-300"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-green-500/50 group-hover:border-green-400 z-50 pointer-events-none transition-colors duration-300"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-green-500/50 group-hover:border-green-400 z-50 pointer-events-none transition-colors duration-300"></div>

      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }

        @keyframes glitch-1 {
          0% { clip-path: inset(20% 0 80% 0); transform: translate(-5px, 2px); }
          20% { clip-path: inset(60% 0 10% 0); transform: translate(5px, -2px); }
          40% { clip-path: inset(40% 0 50% 0); transform: translate(-5px, 5px); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(5px, -5px); }
          80% { clip-path: inset(10% 0 70% 0); transform: translate(-2px, 2px); }
          100% { clip-path: inset(30% 0 50% 0); transform: translate(2px, -2px); }
        }
        @keyframes glitch-2 {
          0% { clip-path: inset(10% 0 60% 0); transform: translate(5px, -2px); }
          20% { clip-path: inset(80% 0 5% 0); transform: translate(-5px, 5px); }
          40% { clip-path: inset(30% 0 20% 0); transform: translate(5px, 2px); }
          60% { clip-path: inset(10% 0 80% 0); transform: translate(-2px, -5px); }
          80% { clip-path: inset(50% 0 30% 0); transform: translate(2px, 5px); }
          100% { clip-path: inset(20% 0 70% 0); transform: translate(-5px, 2px); }
        }

        .group:hover .animate-glitch-1 {
          animation: glitch-1 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
          opacity: 0.35;
        }
        .group:hover .animate-glitch-2 {
          animation: glitch-2 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite reverse;
          opacity: 0.35;
        }
      `}</style>
    </div>
  );
};

export default CyberGlitchImage;
