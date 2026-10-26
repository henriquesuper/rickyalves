"use client";
import React, { useState, useEffect } from "react";
import HackerText from "../ui/HackerText";
import { getLAStatus } from "@/lib/la-status";

const STATUS_STYLES = {
  uplink: {
    label: "UPLINK_OPEN",
    text: "text-green-500",
    dot: "bg-green-500 shadow-[0_0_5px_#22c55e] animate-pulse",
  },
  sabbath: {
    label: "SABBATH_MODE",
    text: "text-violet-400",
    // A resting light: steady, no pulse
    dot: "bg-violet-400 shadow-[0_0_5px_#a78bfa]",
  },
  async: {
    label: "ASYNC_MODE",
    text: "text-amber-400",
    dot: "bg-amber-400 shadow-[0_0_5px_#fbbf24] animate-pulse",
  },
};

const SystemHeader = () => {
  const [laStatus, setLaStatus] = useState(null);

  useEffect(() => {
    const update = () => setLaStatus(getLAStatus());
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const style = laStatus ? STATUS_STYLES[laStatus.mode] : null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pb-8 flex justify-between items-start pointer-events-none bg-linear-to-b from-black/90 via-black/60 to-transparent">

      {/* Root Access / Logo */}
      <button
        onClick={scrollToTop}
        className="pointer-events-auto group flex items-center gap-2 font-mono text-sm text-white/80 hover:text-green-400 transition-colors bg-black/60 backdrop-blur-sm px-3 py-1 rounded border border-white/10 hover:border-green-500/30"
      >
        <span className="text-green-500 font-bold text-lg">~/</span>
        <span className="hidden md:inline-block">
          <HackerText text="RICKY_ALVES" />
        </span>
      </button>

      {/* Availability Status / Los Angeles Clock */}
      {style && (
        <div className="flex flex-col items-end gap-1">
          <div
            className={`flex items-center gap-2 font-mono text-xs bg-black/60 backdrop-blur-sm px-2 py-1 rounded border border-white/10 ${style.text}`}
          >
            <div className={`w-1.5 h-1.5 rounded-full ${style.dot}`}></div>
            <span>{style.label}</span>
          </div>
          <div className="font-mono text-xs text-neutral-500">
            LOS_ANGELES {laStatus.time} PT
          </div>
        </div>
      )}

    </div>
  );
};

export default SystemHeader;
