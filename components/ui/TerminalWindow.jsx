"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const TerminalWindow = ({ children, title = "user@system:~", className }) => {
  return (
    <div className={cn(
      "rounded-xl border border-white/10 bg-black/50 backdrop-blur-md overflow-hidden shadow-2xl",
      className
    )}>
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-xs font-mono text-neutral-400 select-none">
          {title}
        </div>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>
      
      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm md:text-base">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;