import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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

          {/* Center: Framework Status */}
          <div className="order-3 md:order-2 hidden md:block">
            <span className="border border-white/10 px-2 py-1 rounded bg-white/5">
              [ RUNNING: NEXT.JS_v16 ]
            </span>
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