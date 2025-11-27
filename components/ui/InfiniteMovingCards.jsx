"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[200px] h-[140px] relative rounded-xl border border-white/10 flex-shrink-0 px-6 py-6 bg-black/60 backdrop-blur-sm hover:border-green-500/50 transition-colors duration-300 group"
            key={item.name + idx}
          >
             {/* Tech Decorations */}
             <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-green-500/50 group-hover:bg-green-400 group-hover:shadow-[0_0_10px_rgba(74,222,128,0.8)] transition-all"></div>
             <div className="absolute top-3 left-3 text-[0.5rem] text-neutral-600 font-mono tracking-widest group-hover:text-green-500/50 transition-colors">MOD-{idx < 9 ? `0${idx+1}` : idx+1}</div>
             
             {/* Corner Accents */}
             <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/10 rounded-br-xl group-hover:border-green-500/50 transition-colors"></div>
             <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/10 rounded-tl-xl group-hover:border-green-500/50 transition-colors"></div>

             <div className="flex flex-col items-center justify-center h-full gap-4">
                <span className="text-5xl text-neutral-400 group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  {item.icon}
                </span>
                <span className="text-sm text-neutral-400 font-mono font-bold uppercase tracking-wider group-hover:text-green-400 transition-colors">
                  {item.name}
                </span>
             </div>
             
             {/* Bottom Scan Line (Decoration) */}
             <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-green-500/50 transition-colors"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};