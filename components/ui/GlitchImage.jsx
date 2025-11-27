"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const GlitchImage = ({ src, alt, width, height, className }) => {
  return (
    <div className={cn("relative group overflow-hidden rounded-xl", className)}>
      {/* Base Image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="relative z-10 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 grayscale"
      />
      
      {/* Scanline Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-scanline"></div>

      {/* Glitch Layers (Hidden by default, visible on hover) */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-50 mix-blend-hard-light transition-opacity duration-100 translate-x-1 translate-y-1">
        <Image src={src} alt="" width={width} height={height} className="w-full h-full object-cover filter hue-rotate-90" />
      </div>
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-50 mix-blend-exclusion transition-opacity duration-100 -translate-x-1 -translate-y-1">
         <Image src={src} alt="" width={width} height={height} className="w-full h-full object-cover filter hue-rotate-180" />
      </div>
      
      {/* Border Glow */}
      <div className="absolute inset-0 z-30 border border-green-500/20 rounded-xl group-hover:border-green-500/50 transition-colors duration-300"></div>
    </div>
  );
};

export default GlitchImage;