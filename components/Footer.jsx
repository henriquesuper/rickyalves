import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full relative z-10 border-t border-white/10 bg-black/80 backdrop-blur-md pb-24">
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
          <div className="flex items-center gap-6 order-1 md:order-3">
            <a href="https://twitter.com/henriquesuper" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 hover:text-green-400 transition-colors">
              <FaXTwitter className="text-lg" />
              <span className="hidden group-hover:inline-block text-[10px] tracking-widest">UPLINK_01</span>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            </a>
            <a href="https://github.com/henriquesuper" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 hover:text-green-400 transition-colors">
              <FaGithub className="text-lg" />
              <span className="hidden group-hover:inline-block text-[10px] tracking-widest">UPLINK_02</span>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse delay-75"></div>
            </a>
            <a href="https://linkedin.com/in/rickyalves/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 hover:text-green-400 transition-colors">
              <FaLinkedin className="text-lg" />
              <span className="hidden group-hover:inline-block text-[10px] tracking-widest">UPLINK_03</span>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse delay-150"></div>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer;