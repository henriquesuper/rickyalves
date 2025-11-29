import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const YearProgress = () => {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateProgress = () => {
      const now = new Date();
      const start = new Date(now.getFullYear(), 0, 1);
      const end = new Date(now.getFullYear() + 1, 0, 1);
      const percent = ((now - start) / (end - start)) * 100;
      setProgress(percent);
    };

    updateProgress();
    const timer = setInterval(updateProgress, 1000); 
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  const totalBlocks = 20;
  const activeBlocks = Math.floor((progress / 100) * totalBlocks);
  
  let statusColor = "bg-green-500";
  let textColor = "text-green-500";
  let statusText = "OPTIMAL";
  
  if (progress > 95) {
    statusColor = "bg-red-500";
    textColor = "text-red-500";
    statusText = "CRITICAL";
  } else if (progress > 85) {
    statusColor = "bg-yellow-500";
    textColor = "text-yellow-500";
    statusText = "WARNING";
  }

  return (
    <div className="flex items-center gap-4 border border-white/10 px-4 py-1.5 rounded bg-black/40 backdrop-blur-sm font-mono text-xs group hover:border-white/20 transition-colors">
      
      <div className="flex flex-col items-end">
        <span className="text-[10px] text-neutral-500 tracking-widest">CYCLE_{new Date().getFullYear()}</span>
        <span className={`text-[10px] ${textColor} font-bold tracking-widest animate-pulse`}>
          [{statusText}]
        </span>
      </div>

      {/* Segmented Bar */}
      <div className="flex gap-[2px]">
        {[...Array(totalBlocks)].map((_, i) => (
          <div 
            key={i}
            className={`w-1.5 h-4 rounded-[1px] transition-all duration-500 ${
              i < activeBlocks 
                ? `${statusColor} shadow-[0_0_5px_currentColor]` 
                : "bg-white/10"
            } ${i === activeBlocks - 1 ? "animate-pulse brightness-150" : "opacity-80"}`}
          ></div>
        ))}
      </div>

      <span className={`${textColor} font-bold min-w-[5ch]`}>
        {progress.toFixed(1)}%
      </span>

    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full relative z-10 border-t border-white/10 bg-black/80 backdrop-blur-md pb-16">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm font-mono text-neutral-500">

          {/* Left: System ID */}
          <div className="flex items-center gap-2 order-2 md:order-1">
            <span className="text-green-500">{">"}</span>
            <span>SYSTEM_ID: RICKY_ALVES</span>
            <span className="mx-2">|</span>
            <span>© {currentYear}</span>
            <span className="animate-pulse text-green-500">_</span>
          </div>

          {/* Center: Year Progress Cycle */}
          <div className="order-3 md:order-2 hidden md:block">
            <YearProgress />
          </div>

          {/* Right: Social Uplinks */}
          <div className="flex items-center gap-3 order-1 md:order-3">
            
            <a href="https://twitter.com/henriquesuper" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-2 p-2 bg-black/20 border border-white/10 hover:border-green-500/50 hover:bg-green-500/5 transition-all rounded-sm overflow-hidden">
              <FaXTwitter className="text-sm text-neutral-500 group-hover:text-green-400 transition-colors" />
              <div className="max-w-0 group-hover:max-w-[80px] overflow-hidden transition-all duration-500 ease-out">
                 <span className="whitespace-nowrap text-[10px] font-mono text-green-500 tracking-widest pl-1 border-l border-green-500/30">:: X_01</span>
              </div>
            </a>

            <a href="https://github.com/henriquesuper" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-2 p-2 bg-black/20 border border-white/10 hover:border-green-500/50 hover:bg-green-500/5 transition-all rounded-sm overflow-hidden">
              <FaGithub className="text-sm text-neutral-500 group-hover:text-green-400 transition-colors" />
              <div className="max-w-0 group-hover:max-w-[80px] overflow-hidden transition-all duration-500 ease-out">
                 <span className="whitespace-nowrap text-[10px] font-mono text-green-500 tracking-widest pl-1 border-l border-green-500/30">:: GIT</span>
              </div>
            </a>

            <a href="https://linkedin.com/in/rickyalves/" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-2 p-2 bg-black/20 border border-white/10 hover:border-green-500/50 hover:bg-green-500/5 transition-all rounded-sm overflow-hidden">
              <FaLinkedin className="text-sm text-neutral-500 group-hover:text-green-400 transition-colors" />
              <div className="max-w-0 group-hover:max-w-[80px] overflow-hidden transition-all duration-500 ease-out">
                 <span className="whitespace-nowrap text-[10px] font-mono text-green-500 tracking-widest pl-1 border-l border-green-500/30">:: IN</span>
              </div>
            </a>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer;