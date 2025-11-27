import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-xl group/bento hover:shadow-2xl transition duration-200 shadow-none p-6 bg-black/60 border border-white/10 backdrop-blur-sm justify-between flex flex-col space-y-4 overflow-hidden",
        className
      )}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      {/* Corner Brackets (Tech UI) */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-lg group-hover/bento:border-green-500/80 transition-colors z-20"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-lg group-hover/bento:border-green-500/80 transition-colors z-20"></div>

      {/* Header / Preview Area */}
      <div className="relative z-10 w-full h-full min-h-[6rem] rounded-lg bg-black/50 border border-white/5 flex items-center justify-center overflow-hidden group-hover/bento:border-green-500/30 transition-colors">
        {header}
        {/* Scanline effect on hover over header */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent opacity-0 group-hover/bento:opacity-100 group-hover/bento:animate-scanline pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 group-hover/bento:translate-x-2 transition duration-200">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {icon}
            <div className="text-[10px] font-mono text-green-500/70 tracking-widest uppercase border border-green-500/20 px-2 py-0.5 rounded">
              Clearance: Lvl-{id || 'X'}
            </div>
          </div>
        </div>
        
        <div className="font-mono font-bold text-neutral-200 mb-2 mt-2 group-hover/bento:text-green-400 transition-colors text-lg">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-400 text-sm leading-relaxed line-clamp-3">
          {description}
        </div>
        
        {/* Command Prompt Visual */}
        <div className="mt-4 text-xs font-mono text-neutral-600 group-hover/bento:text-green-500/80 transition-colors">
          <span className="animate-pulse">_</span> ./execute_protocol.sh
        </div>
      </div>
    </div>
  );
};