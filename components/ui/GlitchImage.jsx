"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import HackerText from "./HackerText";

export const GlitchImage = ({ src, alt, width, height, className }) => {
  return (
    <div className={cn("relative group overflow-hidden rounded-sm bg-black", className)}>
      
      {/* Container */}
      <div className="relative w-full h-full">
        
        {/* Base Image - Blurred and Grayscale */}
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="relative z-10 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale blur-sm group-hover:blur-none brightness-50 group-hover:brightness-100"
        />
        
        {/* Glitch Layers (Appear during transition/hover) */}
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-30 mix-blend-hard-light transition-opacity duration-100 translate-x-2 translate-y-0 animate-pulse">
          <Image src={src} alt="" width={width} height={height} className="w-full h-full object-cover filter hue-rotate-90" />
        </div>
        
        {/* Overlay: Locked State */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
           <div className="border-2 border-red-500/50 p-4 rounded bg-black/50 backdrop-blur-md">
             <div className="text-red-500 font-mono text-2xl font-bold tracking-widest mb-2 flex flex-col items-center">
                <span className="text-4xl mb-2">🔒</span>
                <span>ENCRYPTED</span>
             </div>
             <div className="text-red-500/70 text-xs font-mono text-center">
               CLEARANCE REQUIRED
             </div>
           </div>
        </div>

        {/* Overlay: Unlocked State (Hidden by default) */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
           <div className="border border-green-500/30 p-2 rounded bg-black/20 backdrop-blur-sm">
             <div className="text-green-400 font-mono text-lg font-bold tracking-widest">
                <HackerText text="ACCESS_GRANTED" />
             </div>
           </div>
        </div>

        {/* Tech Borders */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500/50 group-hover:border-green-500 transition-colors duration-500"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500/50 group-hover:border-green-500 transition-colors duration-500"></div>

        {/* Barcode / ID */}
        <div className="absolute bottom-4 left-4 z-30">
          <div className="flex flex-col gap-1">
            <div className="h-2 w-24 bg-[url('https://upload.wikimedia.org/wikipedia/commons/5/5d/UPC-A-036000291452.svg')] bg-cover opacity-50"></div>
            <div className="text-[8px] font-mono text-neutral-500 group-hover:text-green-500 transition-colors">
              ID: 8492-XK-ALPHA
            </div>
          </div>
        </div>

      </div>
      
      {/* Scanline Overlay */}
      <div className="absolute inset-0 z-40 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] bg-repeat opacity-30"></div>
    </div>
  );
};

export default GlitchImage;