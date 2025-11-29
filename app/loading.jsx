export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black font-mono">
      
      {/* Loader Container */}
      <div className="relative h-32 w-32">
        
        {/* Outer Ring - Slow Rotation */}
        <div className="absolute inset-0 rounded-full border-2 border-green-500/20 border-t-green-500 animate-[spin_3s_linear_infinite]"></div>
        
        {/* Middle Ring - Reverse Rotation */}
        <div className="absolute inset-4 rounded-full border-2 border-green-500/40 border-b-green-500 border-l-green-500 animate-[spin_2s_linear_infinite_reverse]"></div>
        
        {/* Inner Ring - Fast Rotation */}
        <div className="absolute inset-8 rounded-full border-4 border-transparent border-t-green-400 animate-[spin_1s_linear_infinite]"></div>
        
        {/* Center Pulse */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.8)]"></div>
        </div>
      
      </div>

      {/* Loading Text */}
      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="text-green-500 font-bold tracking-[0.2em] text-sm md:text-base">
          INITIALIZING_UPLINK
        </div>
        
        {/* Progress Bar Visual */}
        <div className="h-1 w-48 bg-green-900/30 rounded overflow-hidden">
          <div className="h-full bg-green-500 w-1/2 animate-[shimmer_2s_infinite] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)]"></div>
        </div>
        
        <div className="text-green-500/50 text-xs mt-2 animate-pulse">
          PLEASE_WAIT...
        </div>
      </div>

    </div>
  );
}