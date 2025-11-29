"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import HackerText from "./HackerText";

const CyberGlitchImage = ({ src, alt, width, height, className }) => {
  return (
    <div className={cn("relative group overflow-hidden rounded-sm border border-green-500/30 bg-black", className)}>
      
      {/* Container for the image and effects */}
      <div className="relative w-full h-full overflow-hidden">
        
        {/* Base Image - Green Tinted Night Vision */}
        <div className="relative z-10 w-full h-full mix-blend-hard-light filter sepia-[100%] hue-rotate-[50deg] contrast-125 brightness-75 group-hover:filter-none group-hover:mix-blend-normal transition-all duration-500">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority
            className="relative z-10 w-full h-full object-cover grayscale transition-all duration-500"
          />
        </div>

        {/* Glitch Layers (retained but styled for HUD) */}
        <div className="absolute inset-0 z-0 opacity-0 mix-blend-color-dodge animate-glitch-1 pointer-events-none">
          <Image src={src} alt="" width={width} height={height} className="w-full h-full object-cover opacity-60 -translate-x-2 filter blur-[1px]" />
        </div>
        <div className="absolute inset-0 z-0 opacity-0 mix-blend-color-dodge animate-glitch-2 pointer-events-none">
           <Image src={src} alt="" width={width} height={height} className="w-full h-full object-cover opacity-60 translate-x-2 filter blur-[1px]" />
        </div>

        {/* Heavy Scanlines */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] bg-repeat opacity-60"></div>
        
        {/* Scanner Bar */}
        <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-b from-transparent via-green-500/20 to-transparent h-[10%] w-full animate-scan"></div>
        
        {/* HUD Overlay Layer */}
        <div className="absolute inset-0 z-40 pointer-events-none p-4 flex flex-col justify-between">
          
          {/* Top Bar */}
          <div className="flex justify-between items-start text-[10px] font-mono text-green-500 font-bold tracking-widest">
            <div className="flex flex-col gap-1">
              <span className="bg-green-500/20 px-1">REC [●]</span>
              <span>UPLINK: SECURE</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span>SYS_ID: 984-X</span>
              <span className="animate-pulse">LIVE_FEED</span>
            </div>
          </div>

          {/* Center Targeting Box */}
          <div className="absolute bottom-[38%] left-1/2 -translate-x-1/2 w-32 h-48 border border-green-500/30 rounded-sm flex items-center justify-center">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-500"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-500"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-500"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-500"></div>
            <div className="w-full h-[1px] bg-green-500/20"></div>
            <div className="h-full w-[1px] bg-green-500/20 absolute"></div>
            <span className="absolute -bottom-6 text-[8px] text-green-400 font-mono bg-black/50 px-1">
              MATCH: 99.9%
            </span>
          </div>

          {/* Bottom Bar */}
          <div className="flex justify-between items-end text-[10px] font-mono text-green-500/70">
             <div className="flex gap-4">
               <span>ISO: 800</span>
               <span>SHUTTER: 1/60</span>
             </div>
             <div>
               COORDS: 34.05, -118.24
             </div>
          </div>

        </div>

      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
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
          opacity: 0.5;
        }
        .group:hover .animate-glitch-2 {
          animation: glitch-2 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite reverse;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default CyberGlitchImage;