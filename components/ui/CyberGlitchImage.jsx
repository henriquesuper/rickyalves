"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const CyberGlitchImage = ({ src, alt, width, height, className }) => {
  return (
    <div className={cn("relative group overflow-hidden rounded-2xl", className)}>
      {/* Base Image (Grayscale by default, Color on Hover) */}
      <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl bg-black">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
          className="relative z-10 w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0 mix-blend-normal"
        />
      </div>

      {/* Glitch Layer 1 (Cyan/Blue Shift) - Random Animation */}
      <div className="absolute inset-0 z-0 opacity-0 mix-blend-screen animate-glitch-1 pointer-events-none">
        <Image src={src} alt="" width={width} height={height} className="w-full h-full object-cover opacity-80 -translate-x-2 filter hue-rotate-90 blur-[1px]" />
      </div>

      {/* Glitch Layer 2 (Red/Magenta Shift) - Random Animation */}
      <div className="absolute inset-0 z-0 opacity-0 mix-blend-screen animate-glitch-2 pointer-events-none">
         <Image src={src} alt="" width={width} height={height} className="w-full h-full object-cover opacity-80 translate-x-2 filter hue-rotate-180 blur-[1px]" />
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] bg-repeat z-20 opacity-40"></div>
      
      {/* Noise Overlay */}
       <div className="absolute inset-0 z-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

      <style jsx>{`
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
        
        /* Hover: Intense Glitch */
        .group:hover .animate-glitch-1 {
          animation: glitch-1 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
          opacity: 0.8;
        }
        .group:hover .animate-glitch-2 {
          animation: glitch-2 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite reverse;
          opacity: 0.8;
        }
        
        /* Random Autonomous Glitch Keyframes */
        @keyframes random-glitch-opacity {
          0% { opacity: 0; }
          92% { opacity: 0; }
          93% { opacity: 0.8; transform: scale(1.02) skewX(2deg); } /* Sharp gltich */
          94% { opacity: 0; }
          96% { opacity: 0.6; transform: scale(0.98) skewX(-2deg); } /* Secondary twitch */
          97% { opacity: 0; }
          98% { opacity: 0.4; }
          99% { opacity: 0; }
          100% { opacity: 0; }
        }

        /* Autonomous Glitch Application */
        .relative:not(:hover) .animate-glitch-1 {
           animation: glitch-1 0.3s infinite, random-glitch-opacity 4s infinite;
        }
        .relative:not(:hover) .animate-glitch-2 {
           animation: glitch-2 0.3s infinite, random-glitch-opacity 3.5s infinite reverse; /* Different timing */
        }
      `}</style>
    </div>
  );
};

export default CyberGlitchImage;