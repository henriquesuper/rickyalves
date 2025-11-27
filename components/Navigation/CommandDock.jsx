"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FaTerminal } from "react-icons/fa";
import { useRouter } from "next/navigation";

const CommandDock = () => {
  const [activeSection, setActiveSection] = useState("");
  const router = useRouter();

  const navItems = [
    { id: "about", cmd: "cd ./bio" },
    { id: "skills", cmd: "cat skills.json" },
    { id: "projects", cmd: "ls ./work" },
    { id: "contact", cmd: "ssh uplink" },
    { id: "piano", cmd: "run ./piano.exe", type: "link", path: "/piano" },
  ];

  const handleNav = (item) => {
    if (item.type === "link") {
      router.push(item.path);
      return;
    }

    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(item.id);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-4 px-4 pointer-events-none">
      <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl px-6 py-3 shadow-2xl shadow-green-500/5 pointer-events-auto flex items-center gap-4 md:gap-8 max-w-full overflow-x-auto">
        
        {/* Terminal Prompt Indicator */}
        <div className="hidden md:flex items-center gap-2 text-green-500 font-mono text-sm opacity-70">
          <FaTerminal className="text-xs" />
          <span>visitor@ricky-os:~$</span>
        </div>

        {/* Commands */}
        <div className="flex items-center gap-2 md:gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item)}
              className={cn(
                "font-mono text-xs md:text-sm transition-all duration-300 px-3 py-1.5 rounded hover:bg-white/10 whitespace-nowrap",
                activeSection === item.id 
                  ? "text-green-400 bg-green-500/10 border border-green-500/20 shadow-[0_0_10px_rgba(74,222,128,0.2)]" 
                  : "text-neutral-400 hover:text-green-300"
              )}
            >
              <span className="opacity-50 mr-1">{">"}</span>
              {item.cmd}
            </button>
          ))}
          
          <div className="w-2 h-4 bg-green-500 animate-pulse ml-2 hidden md:block"></div>
        </div>

      </div>
    </div>
  );
};

export default CommandDock;