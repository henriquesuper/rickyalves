"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import HackerText from "./HackerText";

export const GlitchImage = ({ src, alt, width, height, className }) => {
  return (
    <div className={cn("relative group overflow-hidden rounded-sm border border-green-500/30 bg-black", className)}>

      {/* Container */}
      <div className="relative w-full h-full">

        {/* Base Image - high-contrast B&W, revealed to full color on hover */}
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="relative z-10 w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 transition-all duration-700"
        />

        {/* Phosphor tint - subtle green colorize, fades out on hover */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-green-400 mix-blend-color opacity-30 group-hover:opacity-0 transition-opacity duration-700"></div>
        <div className="absolute inset-0 z-20 pointer-events-none bg-green-950 mix-blend-multiply opacity-25 group-hover:opacity-0 transition-opacity duration-700"></div>

        {/* Glitch layer - hover only */}
        <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-20 mix-blend-hard-light transition-opacity duration-100 translate-x-2 animate-pulse pointer-events-none">
          <Image src={src} alt="" width={width} height={height} className="w-full h-full object-cover filter hue-rotate-90" />
        </div>

        {/* Access chip - hover only */}
        <div className="absolute inset-x-0 top-4 z-50 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="border border-green-500/30 px-3 py-1 rounded bg-black/40 backdrop-blur-sm">
            <div className="text-green-400 font-mono text-sm font-bold tracking-widest">
              <HackerText text="ACCESS_GRANTED" />
            </div>
          </div>
        </div>

        {/* Corner brackets */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-green-500/50 group-hover:border-green-400 z-50 pointer-events-none transition-colors duration-300"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-green-500/50 group-hover:border-green-400 z-50 pointer-events-none transition-colors duration-300"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-green-500/50 group-hover:border-green-400 z-50 pointer-events-none transition-colors duration-300"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-green-500/50 group-hover:border-green-400 z-50 pointer-events-none transition-colors duration-300"></div>

        {/* Barcode / ID - pure CSS bars, no external asset */}
        <div className="absolute bottom-4 left-4 z-50 pointer-events-none">
          <div className="flex flex-col gap-1">
            <div
              className="h-2 w-24 opacity-50"
              style={{
                background:
                  "repeating-linear-gradient(90deg, currentColor 0 2px, transparent 2px 4px, currentColor 4px 7px, transparent 7px 8px, currentColor 8px 9px, transparent 9px 12px)",
                color: "#4ade80",
              }}
            ></div>
            <div className="text-[8px] font-mono text-neutral-500 group-hover:text-green-500 transition-colors">
              ID: 8492-XK-ALPHA
            </div>
          </div>
        </div>

      </div>

      {/* Subtle scanlines */}
      <div className="absolute inset-0 z-40 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] bg-repeat opacity-20"></div>
    </div>
  );
};

export default GlitchImage;
